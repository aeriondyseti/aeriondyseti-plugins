#!/usr/bin/env bun
/**
 * SessionStart hook (matcher: "clear|compact") for the vector-memory plugin.
 *
 * Handles two session-start sources:
 *   - "clear": Resets all context-monitor state (user ran /clear)
 *   - "compact": Increments the compression counter in state
 */

import { existsSync, readFileSync, writeFileSync, mkdirSync, unlinkSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { debug } from "./hook-output";

interface HookInput {
  session_id: string;
  source?: string;
}

const STATE_DIR = join(tmpdir(), "claude-context-monitor");

function getStatePath(sessionId: string): string {
  mkdirSync(STATE_DIR, { recursive: true });
  return join(STATE_DIR, `${sessionId}.json`);
}

async function main() {
  const input: HookInput = await Bun.stdin.json();
  if (!input.session_id) return;

  const statePath = getStatePath(input.session_id);
  debug("session-clear", `source=${input.source}, session_id=${input.session_id}, statePath=${statePath}, exists=${existsSync(statePath)}`);

  if (input.source === "clear") {
    // Full reset — delete the state file
    try {
      unlinkSync(statePath);
      debug("session-clear", "State file deleted");
    } catch (err: any) {
      if (err?.code === "ENOENT") {
        debug("session-clear", "No state file to delete");
      } else {
        throw err;
      }
    }
  } else if (input.source === "compact") {
    // Increment compression counter
    let state = {
      last_offset: 0,
      turn_count: 0,
      compressions: 0,
      context_length: 0,
    };

    try {
      if (existsSync(statePath)) {
        state = JSON.parse(readFileSync(statePath, "utf-8"));
      }
    } catch {}

    state.compressions += 1;
    writeFileSync(statePath, JSON.stringify(state));
  }
}

main().catch(() => {});
