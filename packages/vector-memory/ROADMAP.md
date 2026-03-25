# vector-memory Plugin Roadmap

## Features

### Global waypoint project-mismatch guard
When the session-start hook fetches the global (no-project) waypoint, it should check whether the waypoint's `project` metadata matches the current repo. If it doesn't match, treat it as "no waypoint found" — prevents loading stale context from a different project. This is groundwork for proper multi-project support.

**Files:** `hooks/scripts/session-start.ts` (waypoint processing section), `packages/vector-memory/src/http/server.ts` (alternatively enforce server-side)

## Tech Debt

### Extract shared state-path module
The `STATE_DIR` constant and `getStatePath()` helper are duplicated between `context-monitor.ts` and `session-clear.ts`. Extract to a shared `hooks/scripts/state-utils.ts` module so path scheme changes (e.g., XDG dirs, version prefix) only need one update.

**Files:** `hooks/scripts/context-monitor.ts`, `hooks/scripts/session-clear.ts`

### TOCTOU patterns in state file access
Several `existsSync` → operate sequences remain outside the code touched in the 2.0 pass:
- `context-monitor.ts:68` — `existsSync` before `readFileSync` in `loadState()`
- `context-monitor.ts:93` — `existsSync` before `statSync` in `analyzeTranscript()`
- `session-clear.ts:52` — `existsSync` before `readFileSync` in the `compact` branch

Idiomatic fix: attempt the operation directly and catch `ENOENT` / check error codes.

### Add hook unit tests
The hook scripts (`session-start.ts`, `context-monitor.ts`, `session-clear.ts`) have no tests. To make them testable, extract key behaviors (server discovery, retry logic, output formatting, waypoint processing) into importable functions, then write `bun:test` tests covering: lockfile resolution (valid/stale/missing), progressive retry, health check failure paths, waypoint formatting, and cross-project contamination prevention.

**Files:** `hooks/scripts/session-start.ts`, `hooks/scripts/context-monitor.ts`, `hooks/scripts/session-clear.ts`

### Remove temporary debug instrumentation
Debug logging was added to `session-start.ts` (`timeAgo()`) and `session-clear.ts` for investigating the waypoint age and turn counter bugs. Once both bugs are resolved (see `TODO-fix-waypoint-age.md` and `TODO-turn-counter-clear.md`), remove the debug lines.

**Files:** `hooks/scripts/session-start.ts:81-83`, `hooks/scripts/session-clear.ts:32,38,41`
