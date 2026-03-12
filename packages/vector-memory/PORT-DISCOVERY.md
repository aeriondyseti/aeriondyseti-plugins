# Port Discovery via Lockfile

## Problem

Each Claude Code session spawns its own `vector-memory-mcp` process via `bunx`. The first process
binds to the default port (3271); subsequent processes fall back to random ports. Each process
serves a **different repo's database** — there is no shared state between them.

The `session-start` hook hardcodes `http://127.0.0.1:3271`. When two sessions are open
simultaneously (e.g. `repo_alpha` on port 3271 and `repo_beta` on port 3274), `repo_beta`'s
hook fires against port 3271 and reads `repo_alpha`'s waypoint from the wrong database.

## Solution

Use a per-repo lockfile. When the MCP server starts, it writes its bound port to
`.vector-memory/server.lock` in the working directory. The hook reads this file to discover
the correct port for the current repo.

## Lockfile Format

`.vector-memory/server.lock` — JSON, written atomically on server startup:

```json
{ "port": 3274, "pid": 4057157 }
```

Including the PID allows stale lockfile detection (see below).

## Server Changes

### On startup (after port is bound)

Write the lockfile as soon as the HTTP server successfully binds:

```typescript
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

function writeLockfile(port: number) {
  const dir = join(process.cwd(), ".vector-memory");
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, "server.lock"),
    JSON.stringify({ port, pid: process.pid }),
    "utf8"
  );
}
```

### On shutdown (clean exit)

Remove the lockfile on `SIGTERM` and `SIGINT` so stale files don't linger after a clean stop:

```typescript
import { unlinkSync } from "fs";

function removeLockfile() {
  try {
    unlinkSync(join(process.cwd(), ".vector-memory", "server.lock"));
  } catch {
    // already gone — fine
  }
}

process.on("SIGTERM", () => { removeLockfile(); process.exit(0); });
process.on("SIGINT",  () => { removeLockfile(); process.exit(0); });
```

## Hook Changes (`session-start.ts`)

Replace the hardcoded `VECTOR_MEMORY_URL` default with a function that reads the lockfile:

```typescript
function resolveServerUrl(): string {
  // Explicit env var always wins
  if (process.env.VECTOR_MEMORY_URL) return process.env.VECTOR_MEMORY_URL;

  try {
    const lockPath = join(process.cwd(), ".vector-memory", "server.lock");
    const { port, pid } = JSON.parse(readFileSync(lockPath, "utf8"));

    // Stale check: if the PID no longer exists, fall back to default
    process.kill(pid, 0); // throws if process is gone
    return `http://127.0.0.1:${port}`;
  } catch {
    return "http://127.0.0.1:3271"; // fallback
  }
}

const VECTOR_MEMORY_URL = resolveServerUrl();
```

`process.kill(pid, 0)` sends no signal — it's a standard existence check that throws `ESRCH`
if the process is gone and `EPERM` if it exists but is owned by another user (both indicate
the process exists from a liveness standpoint; only `ESRCH` means gone).

## Stale Lockfile Behaviour

| Scenario | Outcome |
|---|---|
| Server running, lockfile present and PID alive | Hook uses lockfile port ✓ |
| Server crashed, lockfile not cleaned up, PID gone | `process.kill` throws `ESRCH` → fallback to 3271 |
| Server not yet started, no lockfile | `readFileSync` throws → fallback to 3271 |
| `VECTOR_MEMORY_URL` set in environment | Used directly, no lockfile read |

## `.gitignore`

Add to the repo's `.gitignore` (or the plugin's install step):

```
.vector-memory/server.lock
```

The `.vector-memory/` directory itself likely already exists in `.gitignore`; the lockfile
entry is a belt-and-suspenders addition.
