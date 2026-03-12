# Changelog

## [2.0.0] - 2026-03-12

### Breaking Changes
- **Requires vector-memory-mcp 2.0.0+**: Server backend migrated from LanceDB to SQLite (sqlite-vec). Users with existing 1.x data should run `vector-memory-mcp migrate` before starting.
- **Waypoint terminology**: All "checkpoint" references renamed to "waypoint" (tools, skills, hooks). See 1.4.1 changelog for details.

### Added
- **Lockfile-based port discovery**: `session-start.ts` now reads `.vector-memory/server.lock` to discover the server's actual port, solving multi-session port collision issues. Falls back to default port 3271 if no lockfile found.
- **PORT-DISCOVERY.md**: Documentation for the lockfile-based port discovery feature.

### Changed
- **MCP server version**: `.mcp.json` now targets `@aeriondyseti/vector-memory-mcp@latest` (was `@dev`)
- **Storage documentation**: Updated `vector-memory-usage` skill to reference SQLite/sqlite-vec instead of LanceDB

## [1.4.1] - 2026-03-11

### Changed
- Renamed "checkpoint" concept to "waypoint" throughout the plugin
- Renamed "store" operation to "set" for waypoints (`store_checkpoint` → `set_waypoint`)
- Restored colon-separated skill names (`checkpoint-get` → `waypoint:get`, etc.)
- Renamed skill directories: `checkpoint-get/` → `waypoint-get/`, `checkpoint-store/` → `waypoint-set/`, `checkpoint-workflow/` → `waypoint-workflow/`
- Updated MCP tool references: `store_checkpoint` → `set_waypoint`, `get_checkpoint` → `get_waypoint`
- Updated all hook scripts, plugin metadata, and marketplace listing to use "waypoint" terminology

## [1.3.0] - 2026-03-07

### Changed
- Raised context monitor warning thresholds to reduce false positives:
  - Turn count: 80/150/250 → 120/180/250 (warn/strong/critical)
  - Context tokens: 100k/140k/170k → 120k/150k/175k
  - Compressions: 1/3/5 → 2/4/6
- Replaced compression detection heuristic (token-drop guessing) with actual
  compaction tracking via `SessionStart` hook with `compact` source
- Removed `peak_context_length` from monitor state (no longer needed)

### Added
- `session-clear.ts` hook script handling two `SessionStart` sources:
  - `clear` — resets all context-monitor state when user runs `/clear`
  - `compact` — increments compression counter on actual context compaction

### Fixed
- Context monitor state now resets on `/clear` instead of persisting stale
  turn counts and compression counts from the previous session
