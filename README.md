# aeriondyseti-plugins

Claude Code plugin marketplace by AerionDyseti.

## Install

```bash
/plugin marketplace add AerionDyseti/aeriondyseti-plugins
```

Then install individual plugins:

```bash
/plugin install dev-toolkit@aeriondyseti-plugins
```

## Plugins

### code-flow

Structured development workflow skills and agents for Claude Code. Routes you to the right thinking process for any task — brainstorming, planning, executing, debugging, reviewing, or finishing.

```bash
/plugin install code-flow@aeriondyseti-plugins
```

#### Skills

| Skill | Triggers On |
|-------|-------------|
| **Getting Started** | Start of conversation — routes to the appropriate skill below |
| **Brainstorming** | "build a feature", "add functionality", creative/design work |
| **Writing Plans** | "plan the implementation", multi-step tasks with requirements |
| **Executing Plans** | "execute the plan", work with a written implementation plan |
| **Agent Orchestration** | Deciding how to structure work across agents (teams, subagents, serial) |
| **Systematic Debugging** | Bug, test failure, or unexpected behavior |
| **Code Review** | After completing a feature, before merging, or acting on feedback |
| **Verification Before Completion** | Before claiming work is done — evidence-based verification |
| **Finishing a Development Branch** | Implementation complete — merge, PR, keep, or discard |

#### Agents

| Agent | Purpose |
|-------|---------|
| **Code Architect** | Designs architecture for new features — analyzes patterns, produces blueprints |
| **Code Explorer** | Deep understanding of a feature or subsystem before making changes |
| **Code Reviewer** | Reviews completed work against requirements and coding standards |
| **Code Simplifier** | Simplifies and refines code for clarity and maintainability |

### dev-toolkit

Development toolkit: MCP servers (Serena, Context7, RepoMap) and git workflow skills for Claude Code.

```bash
/plugin install dev-toolkit@aeriondyseti-plugins
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
| `/dev:commit [--all]` | Stage and commit changes with a conventional commit message |
| `/dev:sync` | Sync current branch with upstream (rebase on dev/main) |
| `/dev:pr [--draft] [--base]` | Create a PR with auto-generated description from commit history |
| `/dev:ship [--draft] [--base]` | Commit, push, and open a PR in one step |
| `/dev:clean [--gone]` | Clean up stale branches: gone remotes, merged branches, and worktrees |

#### Prerequisites

- [uv](https://docs.astral.sh/uv/) (for Serena via `uvx`)
- [Node.js](https://nodejs.org/) (for Context7 and RepoMap via `npx`)

### frontend-design

Design skills, browser automation, and UI auditing for frontend development.

```bash
/plugin install frontend-design@aeriondyseti-plugins
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
