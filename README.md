# aeriondyseti-plugins

Claude Code plugin marketplace by AerionDyseti. This repo holds only the marketplace catalog (`.claude-plugin/marketplace.json`); each plugin lives in its own repository and is pinned here to a tagged release.

## Install

```bash
/plugin marketplace add AerionDyseti/aeriondyseti-plugins
```

Then install individual plugins:

```bash
/plugin install dev-toolkit@aeriondyseti-plugins
```

## Plugins

| Plugin | Repository | What it does |
|--------|------------|--------------|
| **code-flow** | [aeriondyseti/code-flow](https://github.com/aeriondyseti/code-flow) | A thinking discipline for any code change: Discover → Execute → Verify skills, plus architect/explorer/reviewer/simplifier agents |
| **plugin-kit** | [aeriondyseti/plugin-kit](https://github.com/aeriondyseti/plugin-kit/tree/main/plugin) | Shared widgets for Claude Code mods — plugins hand `$.kit` their state and draw what it returns. Plugin authors: `npx @aeriondyseti/plugin-kit add-kit` |
| **context-monitor** | [aeriondyseti/context-monitor](https://github.com/aeriondyseti/context-monitor) | Warns as a session's context climbs (100k/150k/200k tokens) or compactions pile up (2/4/6). Built on plugin-kit |
| **dev-toolkit** | [aeriondyseti/dev-toolkit](https://github.com/aeriondyseti/dev-toolkit) | Serena, Context7, and RepoMap MCP servers plus git workflow skills and `/dev:*` commands |
| **frontend-design** | [aeriondyseti/frontend-design](https://github.com/aeriondyseti/frontend-design) | Design skills, Playwright automation and MCP server, and `/design:*` UI auditing commands |

See each repository's README for skills, commands, and prerequisites.

## Releasing a plugin

Release from the plugin's own repo with [plugin-kit](https://github.com/aeriondyseti/plugin-kit)'s `release` command. Don't edit entries here by hand. It bumps the plugin's version, tags it, and pins that plugin's `ref`, `sha`, and `version` in this repo's `marketplace.json` in one step:

```bash
# from the plugin's repo, with this repo cloned alongside it
npx @aeriondyseti/plugin-kit release patch --plugin . --marketplace ../aeriondyseti-plugins/.claude-plugin/marketplace.json
```

Push the plugin repo (`git push origin main --follow-tags`) before committing and pushing the updated `marketplace.json` here. Each plugin's README has the full steps.

## License

MIT
