# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

Monorepo of Claude Code plugins published to the Claude Code marketplace. Three plugin packages under `packages/`:

- **vector-memory** — RAG-powered session memory with waypoints (requires Bun 1.0+)
- **code-flow** — Structured development workflow skills and agents
- **frontend-design** — Design skills, Playwright browser automation, UI auditing

## Plugin Anatomy

Each plugin lives in `packages/<name>/` with this structure:

- `.claude-plugin/plugin.json` — Plugin metadata (name, version, description)
- `.mcp.json` — MCP server auto-load config (stdio command + args)
- `hooks/hooks.json` — Event-driven hook definitions with matchers and bun scripts
- `hooks/scripts/*.ts` — Hook implementations (TypeScript, run via bun)
- `skills/<skill-name>/SKILL.md` — YAML frontmatter + markdown skill definitions
- `commands/<command-name>/` — Slash command definitions
- `agents/<agent-name>.md` — Agent definitions (code-flow only)

The root `.claude-plugin/marketplace.json` registers the monorepo as a marketplace and lists all plugins with versions.

## Development

**No root package.json or test suite.** Plugins are independent packages.

### Local testing with symlinks

```bash
./scripts/dev-link.sh          # symlink local sources into plugin cache
./scripts/dev-link.sh --undo   # restore cached versions
```

### Pushing to personal repo

The remote uses HTTPS (not SSH). SSH key is linked to the work account. To push:

```bash
gh auth switch --user AerionDyseti
gh auth setup-git
git push origin <branch>
```

## Architecture Details

### Hook system (vector-memory)

Hooks are defined in `hooks/hooks.json` with event types (`SessionStart`, `Stop`) and matcher patterns (e.g., `"start"`, `"clear"`, `"compact"`). Each hook runs a bun script with a timeout.

Shared utilities live in `hooks/scripts/hooks-lib.ts` — ANSI formatting, icons, structured message output (`emitHookOutput()`), and MCP server discovery via lockfile.

Hook scripts read stdin to wait for CLI readiness, then emit structured JSON with `systemMessage` for user-facing output.

### Port discovery (vector-memory)

The MCP server writes `.vector-memory/server.lock` (JSON with port + pid). Hook scripts read this lockfile to find the running server. See `PORT-DISCOVERY.md` for details.

### Skill trigger pattern

Skills use YAML frontmatter `description` field to define trigger conditions. Claude matches user intent against these descriptions to auto-invoke skills.

### Versioning

Plugin versions in `plugin.json` and marketplace versions in `marketplace.json` are independently managed. Bump both when releasing. The marketplace `metadata.version` tracks the overall marketplace version.
