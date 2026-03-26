# cc-plugins

Claude Code plugin marketplace by AerionDyseti.

## Install

```bash
/plugin marketplace add AerionDyseti/cc-plugins
```

Then install individual plugins:

```bash
/plugin install dev-toolkit@cc-plugins
```

## Plugins

### dev-toolkit

Development toolkit: MCP servers (Serena, Context7, RepoMap) and git workflow skills for Claude Code.

```bash
/plugin install dev-toolkit@cc-plugins
```

#### MCP Servers (auto-loaded)

| Server | Purpose |
|--------|---------|
| [Serena](https://github.com/oraios/serena) | LSP-backed semantic code navigation, symbol search, and symbolic editing |
| [Context7](https://github.com/upstash/context7) | Up-to-date library documentation lookup |
| [repomap-mcp](https://github.com/nicobailon/repomap-mcp) | Aider-style ranked codebase map via tree-sitter + PageRank |

#### Skills

| Skill | Triggers On |
|-------|-------------|
| **Codebase Orientation** | Start of conversation, unfamiliar codebase, "how does X work" |
| **Git Conventions** | Commit message format, branch naming, release flow reference |
| **Creating Commits** | Staging files, writing conventional commit messages, pre-commit validation |
| **Branch Management** | Creating, switching, syncing, or cleaning up branches |
| **Pull Request Workflow** | Creating PRs, responding to feedback, merge strategies |

#### Commands

| Command | Description |
|---------|-------------|
| `/dev:orient [file\|symbol]` | Generate a ranked codebase map, optionally focused on a file or symbol |
| `/dev:branch [type] [name]` | Quick-create a properly named feature or fix branch from dev |
| `/dev:sync` | Sync current branch with upstream (rebase on dev/main) |
| `/dev:pr [--draft] [--base]` | Create a PR with auto-generated description from commit history |

#### Prerequisites

- [uv](https://docs.astral.sh/uv/) (for Serena via `uvx`)
- [Node.js](https://nodejs.org/) (for Context7 and RepoMap via `npx`)

### frontend-design

Design skills, browser automation, and UI auditing for frontend development.

```bash
/plugin install frontend-design@cc-plugins
```

#### Skills

| Skill | Triggers On |
|-------|-------------|
| **Frontend Design** | "build a landing page", "create a component", creative/marketing UI tasks |
| **Interface Design** | "build a dashboard", "design an admin panel", SaaS/tool/data interface tasks |
| **Playwright** | "test my website", "take a screenshot", browser automation tasks |
| **Web Design Guidelines** | "review my UI", "check accessibility", "audit design" |

#### Commands

| Command | Description |
|---------|-------------|
| `/init` | Overview of the plugin — all skills, commands, and design system workflow |
| `/design:status` | Show current design system state from `.frontend-design/system.md` |
| `/design:audit` | Check code against design system patterns + web interface guidelines |
| `/design:extract` | Scan existing code and generate a `.frontend-design/system.md` |
| `/design:critique` | Self-critique the UI just built, then rebuild what defaulted |

#### MCP Server (auto-loaded)

The [@playwright/mcp](https://github.com/microsoft/playwright-mcp) server provides 25+ browser control tools (navigate, click, fill, snapshot, etc.) accessible directly as MCP tools.

#### Design System

Uses `.frontend-design/system.md` in your project to persist design decisions (style identity, visual language with exact CSS values, rules/constraints, tokens, component patterns, and decision rationale) across sessions.

## License

MIT
