/**
 * context-monitor — single-script Claude Code hook that warns the user as
 * per-session context pressure climbs.
 *
 * Wired in hooks.json to three events, branched by argv:
 *   --stop             Stop hook         (always evaluates at end of turn)
 *   --post-tool-use    PostToolUse hook  (throttled to 30s during long runs)
 *   --session-compact  SessionStart      (matcher: "compact" — bumps counter)
 *
 * Output is rendered with @aeriondyseti/plugin-kit's OutputBuilder and emitted
 * via the matching event class so the wire format stays correct.
 */
import { existsSync, mkdirSync, openSync, readFileSync, readSync, closeSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { ICONS, OutputBuilder, PostToolUse, SessionStart, Stop, runHook } from '@aeriondyseti/plugin-kit';

// ── Thresholds (tokens) ─────────────────────────────────────────────────────
const CONTEXT_WARN = 100_000;
const CONTEXT_STRONG = 150_000;
const CONTEXT_CRITICAL = 200_000;

// ── Thresholds (compression count) ──────────────────────────────────────────
const COMPRESS_WARN = 2;
const COMPRESS_STRONG = 4;
const COMPRESS_CRITICAL = 6;

// ── Runtime ─────────────────────────────────────────────────────────────────
const THROTTLE_SECONDS = 30;
const STATE_DIR = join(tmpdir(), 'context-monitor');

type Mode = 'stop' | 'post-tool-use' | 'session-compact';
type Severity = 'info' | 'warn' | 'strong' | 'critical';
const SEVERITY_ORDER: Severity[] = ['info', 'warn', 'strong', 'critical'];

interface MonitorState {
    last_offset: number;
    compressions: number;
    context_length: number;
    last_checked_at: number;
}

interface CommonHookFields {
    session_id: string;
    transcript_path?: string;
}

interface TranscriptEntry {
    message?: {
        usage?: {
            input_tokens?: number;
            cache_read_input_tokens?: number;
            cache_creation_input_tokens?: number;
        };
    };
    isSidechain?: boolean;
    isApiErrorMessage?: boolean;
    timestamp?: string;
}

type TranscriptUsage = NonNullable<NonNullable<TranscriptEntry['message']>['usage']>;

// ── State I/O ───────────────────────────────────────────────────────────────

function getStatePath(sessionId: string): string {
    mkdirSync(STATE_DIR, { recursive: true });
    const safe = sessionId.replace(/[^a-zA-Z0-9-]/g, '_');
    return join(STATE_DIR, `${safe}.json`);
}

function loadState(sessionId: string): MonitorState {
    const path = getStatePath(sessionId);
    try {
        if (existsSync(path)) {
            return JSON.parse(readFileSync(path, 'utf8')) as MonitorState;
        }
    } catch {
        // fall through to default state
    }
    return { last_offset: 0, compressions: 0, context_length: 0, last_checked_at: 0 };
}

function saveState(sessionId: string, state: MonitorState): void {
    try {
        writeFileSync(getStatePath(sessionId), JSON.stringify(state));
    } catch {
        // best effort; missing state just means the next run starts cold
    }
}

// ── Transcript scan ─────────────────────────────────────────────────────────

/**
 * Read newly-appended bytes from the JSONL transcript and update
 * `state.context_length` to the most recent main-chain entry's input usage.
 *
 * Matches ccstatusline's accounting: we want the *latest* main-chain reading,
 * not a sum across turns. Sidechain (subagent) and API-error entries are
 * skipped so they don't masquerade as the live context window.
 */
function analyzeTranscript(transcriptPath: string, state: MonitorState): MonitorState {
    if (!existsSync(transcriptPath)) return state;
    const fileSize = statSync(transcriptPath).size;
    if (fileSize <= state.last_offset) return state;

    try {
        const fd = openSync(transcriptPath, 'r');
        const buffer = Buffer.alloc(fileSize - state.last_offset);
        readSync(fd, buffer, 0, buffer.length, state.last_offset);
        closeSync(fd);

        let mostRecentUsage: TranscriptUsage | null = null;
        let mostRecentTime: Date | null = null;

        for (const line of buffer.toString('utf8').split('\n')) {
            const trimmed = line.trim();
            if (!trimmed) continue;
            let entry: TranscriptEntry;
            try {
                entry = JSON.parse(trimmed) as TranscriptEntry;
            } catch {
                continue;
            }
            const usage = entry.message?.usage;
            if (!usage) continue;
            if (entry.isSidechain === true || entry.isApiErrorMessage) continue;
            if (!entry.timestamp) continue;
            const t = new Date(entry.timestamp);
            if (!mostRecentTime || t > mostRecentTime) {
                mostRecentTime = t;
                mostRecentUsage = usage;
            }
        }

        if (mostRecentUsage) {
            state.context_length =
                (mostRecentUsage.input_tokens ?? 0) +
                (mostRecentUsage.cache_read_input_tokens ?? 0) +
                (mostRecentUsage.cache_creation_input_tokens ?? 0);
        }
        state.last_offset = fileSize;
    } catch {
        // partial reads are fine; the next invocation will retry from last_offset
    }
    return state;
}

// ── Evaluation ──────────────────────────────────────────────────────────────

function maxSeverity(a: Severity, b: Severity): Severity {
    return SEVERITY_ORDER.indexOf(a) >= SEVERITY_ORDER.indexOf(b) ? a : b;
}

interface Verdict {
    severity: Severity;
    issues: string[];
    advice: string;
}

function evaluate(state: MonitorState): Verdict | null {
    const { context_length: ctx, compressions } = state;
    const issues: string[] = [];
    let severity: Severity = 'info';

    if (ctx >= CONTEXT_CRITICAL) {
        issues.push(`Context size is ${ctx.toLocaleString()} tokens (near compression limit)`);
        severity = maxSeverity(severity, 'critical');
    } else if (ctx >= CONTEXT_STRONG) {
        issues.push(`Context size is ${ctx.toLocaleString()} tokens (compression approaching)`);
        severity = maxSeverity(severity, 'strong');
    } else if (ctx >= CONTEXT_WARN) {
        issues.push(`Context size is ${ctx.toLocaleString()} tokens`);
        severity = maxSeverity(severity, 'warn');
    }

    const cWord = compressions === 1 ? 'compression' : 'compressions';
    if (compressions >= COMPRESS_CRITICAL) {
        issues.push(`${compressions} context ${cWord} detected (significant quality loss likely)`);
        severity = maxSeverity(severity, 'critical');
    } else if (compressions >= COMPRESS_STRONG) {
        issues.push(`${compressions} context ${cWord} detected (quality degrading)`);
        severity = maxSeverity(severity, 'strong');
    } else if (compressions >= COMPRESS_WARN) {
        issues.push(`${compressions} context ${cWord} detected`);
        severity = maxSeverity(severity, 'warn');
    }

    if (issues.length === 0) return null;

    let advice: string;
    if (severity === 'critical') {
        advice = 'Commit pending work and start a fresh session — context quality degrades with each compression cycle.';
    } else if (severity === 'strong') {
        advice = 'Finish the current task, commit, and start a new session to preserve quality.';
    } else {
        advice = 'Context is growing — break at the next natural boundary (after the current task or commit).';
    }

    return { severity, issues, advice };
}

// ── Output rendering ────────────────────────────────────────────────────────

const TITLE_BY_SEVERITY: Record<Severity, string> = {
    info: 'Session health',
    warn: 'Session health note',
    strong: 'Session health warning',
    critical: 'Session health — action recommended',
};

const COLOR_BY_SEVERITY: Record<Severity, 'cyan' | 'yellow' | 'red'> = {
    info: 'cyan',
    warn: 'yellow',
    strong: 'yellow',
    critical: 'red',
};

const ICON_BY_SEVERITY: Record<Severity, string> = {
    info: ICONS.info,
    warn: ICONS.warn,
    strong: ICONS.warn,
    critical: ICONS.cross,
};

function renderVerdict(verdict: Verdict): OutputBuilder {
    const color = COLOR_BY_SEVERITY[verdict.severity];
    const icon = ICON_BY_SEVERITY[verdict.severity];
    const builder = new OutputBuilder().appendBox(
        verdict.issues.map((i) => `${icon} ${i}`).join('\n'),
        { title: `${ICONS.dot} ${TITLE_BY_SEVERITY[verdict.severity]}`, color },
    );
    builder.appendLine(`<color:"${color}">${ICONS.arrow}</color> ${verdict.advice}`);
    return builder;
}

// ── Stdin (single read, JSON parse) ─────────────────────────────────────────

function readInput(): CommonHookFields & Record<string, unknown> {
    const raw = readFileSync(0, 'utf8');
    if (!raw.trim()) return { session_id: '' };
    try {
        return JSON.parse(raw) as CommonHookFields & Record<string, unknown>;
    } catch {
        return { session_id: '' };
    }
}

// ── Mode dispatch ───────────────────────────────────────────────────────────

function pickMode(argv: string[]): Mode {
    if (argv.includes('--stop')) return 'stop';
    if (argv.includes('--post-tool-use')) return 'post-tool-use';
    if (argv.includes('--session-compact')) return 'session-compact';
    // Default to Stop semantics if argv is missing — safest behavior is to
    // evaluate-and-warn on every invocation rather than silently no-op.
    return 'stop';
}

function runStop(input: CommonHookFields, throttled: boolean): void {
    if (!input.session_id || !input.transcript_path) {
        Stop.emitOutput({});
        return;
    }
    let state = loadState(input.session_id);

    if (throttled) {
        const elapsed = (Date.now() - state.last_checked_at) / 1000;
        if (elapsed < THROTTLE_SECONDS) {
            // Don't write state — preserve the existing throttle window.
            (throttled ? PostToolUse : Stop).emitOutput({});
            return;
        }
    }

    const prevOffset = state.last_offset;
    state = analyzeTranscript(input.transcript_path, state);
    const verdict = evaluate(state);
    state.last_checked_at = Date.now();

    if (state.last_offset !== prevOffset || throttled) {
        saveState(input.session_id, state);
    }

    const opts = verdict ? { toUser: renderVerdict(verdict) } : {};
    if (throttled) {
        PostToolUse.emitOutput(opts);
    } else {
        Stop.emitOutput(opts);
    }
}

function runSessionCompact(input: CommonHookFields): void {
    if (!input.session_id) {
        SessionStart.emitOutput({});
        return;
    }
    const state = loadState(input.session_id);
    state.compressions += 1;
    saveState(input.session_id, state);
    SessionStart.emitOutput({});
}

// ── Entry point ─────────────────────────────────────────────────────────────

runHook(() => {
    const mode = pickMode(process.argv.slice(2));
    const input = readInput() as CommonHookFields;

    if (mode === 'session-compact') {
        runSessionCompact(input);
    } else {
        runStop(input, mode === 'post-tool-use');
    }
});
