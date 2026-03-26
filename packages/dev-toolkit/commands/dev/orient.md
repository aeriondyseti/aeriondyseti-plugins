---
name: dev:orient
description: "Generate a ranked codebase map to orient yourself. Optionally focus on a specific file or identifier."
user-invocable: true
---

# /dev:orient

Generate a PageRank-ranked map of the current codebase using the `repo_map` MCP tool.

## Process

1. Determine the **project root** — use the current working directory unless the user specifies otherwise.

2. Parse the argument (if provided):
   - If it looks like a **file path** (contains `/` or `.`): use it as a `focusFiles` entry
   - Otherwise: treat it as a **symbol name** and use it as a `priorityIdentifiers` entry

3. Call `repo_map`:
   - No argument: `repo_map(projectRoot: "<cwd>", tokenLimit: 8192, excludeUnranked: true)`
   - With file focus: `repo_map(projectRoot: "<cwd>", focusFiles: ["<path>"], tokenLimit: 8192, excludeUnranked: true)`
   - With identifier focus: `repo_map(projectRoot: "<cwd>", priorityIdentifiers: ["<name>"], tokenLimit: 8192, excludeUnranked: true)`

4. Summarize the results for the user:
   - Top 5 most important files and what they contain
   - The overall architecture (layers, modules, entry points)
   - If focused: how the target file/symbol connects to the rest of the codebase

## Arguments

- `/dev:orient` — full codebase map, no focus
- `/dev:orient src/core/auth.ts` — map biased toward auth-related code
- `/dev:orient MemoryService` — map biased toward files that define or reference MemoryService
- `/dev:orient server/` — map scoped to a subdirectory (passed as `projectRoot` suffix)
