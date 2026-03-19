# cc-plugins: vector-memory 2.0 Release Checklist

The vector-memory plugin code is already updated for the 2.0 server.
This checklist covers validation and release steps.

**Server RC tag:** `v2.0.0-rc` on `aeriondyseti/vector-memory-mcp`

---

## 1. Validate Against RC Server

### 1a. MCP Server Launch

```bash
# Ensure the plugin's .mcp.json resolves to the RC
cd ~/Development/tools/cc-plugins/packages/vector-memory
cat .mcp.json
```

- [ ] `.mcp.json` uses `@aeriondyseti/vector-memory-mcp@latest` (or link local RC build)
- [ ] Server starts without errors when Claude Code launches
- [ ] Stderr shows `HTTP server listening` with correct port
- [ ] `GET /health` returns `version: "2.0.0"` (not `0.6.0` — this was a bug we fixed)

### 1b. Lockfile Discovery

```bash
# After Claude Code starts, verify lockfile
cat .vector-memory/server.lock
```

- [ ] Lockfile exists with valid `port` and `pid`
- [ ] PID matches the running server process (`kill -0 <pid>` succeeds)

---

## 2. Hook Integration

### 2a. session-start.ts

- [ ] Fires on session entry — banner appears
- [ ] Health check passes (no "server unreachable" warning)
- [ ] If no waypoint exists: shows "fresh session" message
- [ ] If waypoint exists: shows summary, next_steps, referenced memories
- [ ] Conversation indexing runs (if `--enable-history` is set)
- [ ] Total hook execution stays under 15s timeout

### 2b. session-clear.ts

- [ ] `/clear` triggers the hook
- [ ] Context monitor state is reset (check `$TMPDIR/claude-context-monitor/`)
- [ ] Next session-start hook fires cleanly after clear

### 2c. context-monitor.ts

- [ ] Fires on Stop events
- [ ] Does not block tool execution (always approves)
- [ ] After ~120+ turns, shows a warning suggestion

---

## 3. Skills

### 3a. vector-memory-usage

- [ ] Skill triggers on "store a memory" / "search memories"
- [ ] References SQLite/sqlite-vec (not LanceDB) in guidance text
- [ ] Search intents work: `continuity`, `fact_check`, `explore`

### 3b. waypoint-set

- [ ] `/vector-memory:waypoint-set` creates a waypoint
- [ ] Extracts and stores memories before setting waypoint
- [ ] Reports memory count and topics

### 3c. waypoint-get

- [ ] `/vector-memory:waypoint-get` loads the waypoint
- [ ] Shows summary, next_steps, referenced memories
- [ ] Searches for additional continuity context

### 3d. waypoint-workflow

- [ ] Skill provides correct guidance on when to set/load waypoints

---

## 4. Upgrade Path (1.x → 2.0)

Test with a repo that has existing LanceDB data (if available):

- [ ] Starting Claude Code with 1.x data shows clear migration error
- [ ] Error message mentions `vector-memory-mcp migrate`
- [ ] After migration + file rename, server starts on SQLite
- [ ] Previously stored memories are searchable
- [ ] Waypoints from 1.x sessions are gone (expected — waypoints are stored as regular memories)

---

## 5. Multi-Session Isolation

- [ ] Open Claude Code in two different repos simultaneously
- [ ] Each repo gets its own lockfile with a different port
- [ ] session-start.ts reads the correct lockfile per repo
- [ ] Memories stored in repo A do not appear in repo B

---

## 6. Error Resilience

- [ ] If server is unreachable, session-start hook shows warning but doesn't crash
- [ ] If lockfile has stale PID, hook falls back to default port
- [ ] If `/waypoint` returns 404 (no waypoint), hook shows "fresh session" gracefully

---

## 7. Documentation & Metadata

- [ ] `plugin.json` version is `2.0.0`
- [ ] `CHANGELOG.md` has 2.0.0 entry with breaking changes documented
- [ ] `PORT-DISCOVERY.md` is accurate (lockfile format, fallback behavior)
- [ ] `vector-memory-usage` skill references correct storage format (SQLite, not LanceDB)
- [ ] No stale references to `checkpoints` (renamed to `waypoints` in 1.4.1)

---

## 8. Release

After all checks pass:

- [ ] Ensure server `v2.0.0` is tagged and published on npm
- [ ] Commit any final plugin changes
- [ ] Tag plugin release (if using tags)
- [ ] Update marketplace.json if version metadata is tracked there
- [ ] Remove `.orphaned_at` file if still present in plugin directory

---

## Results

| Section | Result | Notes |
|---------|--------|-------|
| 1. Server Launch | | |
| 2. Hooks | | |
| 3. Skills | | |
| 4. Upgrade Path | | |
| 5. Multi-Session | | |
| 6. Error Resilience | | |
| 7. Documentation | | |
| 8. Release | | |

**Tested by:** _______________
**Date:** _______________
**Server commit:** _______________
**Plugin commit:** _______________
