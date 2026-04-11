---
name: getting-started
description: "Use at the start of every conversation and when deciding how to approach a task. Routes to the appropriate phase of the Discover → Execute → Verify flow."
---

# Getting Started

Code-flow is a thinking discipline for any code change. One process — Discover → Execute → Verify — whether the work is a new feature, a bug fix, a refactor, or tech debt.

## Subagent Guard

If you were dispatched as a subagent or teammate for a specific task, **stop here**. Do not activate the full workflow. You have a focused job — do it and report back. The orchestrator handles the big picture.

Only activate these skills when you are the top-level agent in a conversation with the user.

## Where Are You?

Check the project state to figure out where in the flow you are:

| Signal | You're in... | Skill |
|--------|-------------|-------|
| No spec file exists | **Discover** | `discover` |
| Spec file exists but implementation is incomplete | **Execute** | `execute` |
| Implementation matches the spec, needs verification | **Verify** | `verify` |
| User describes a new problem, feature, or bug | **Discover** | `discover` |
| User says "let's build this" with a clear spec | **Execute** | `execute` |
| User says "is this ready?" or "review this" | **Verify** | `verify` |

**When in doubt, start with Discover.** Exploring the problem before acting is never wasted time.

## Tech Debt Check

Before starting any work, check the sprint counter in `CLAUDE.md`:

- If this sprint should be a tech debt sprint per the project's cadence, say so. Scope the work to items in `TECH-DEBT.md`.
- If `TECH-DEBT.md` doesn't exist yet, create it.
- If there's no sprint counter in `CLAUDE.md` yet, ask the user to set one up.

## The Flow

```
┌─────────┐     ┌─────────┐     ┌─────────┐
│ Discover │ ──▶ │ Execute │ ──▶ │  Verify │
└─────────┘     └─────────┘     └─────────┘
     ▲               │               │
     └───────────────┘               │
       (amend spec)                  │
                                     ▼
                                Ready to ship
```

- **Discover** → explore, prototype, iterate, crystallize into a spec
- **Execute** → build from the spec, autonomously with guardrails
- **Verify** → correctness + quality + review, then "ready to ship"

Phase transitions are gated by the spec:
- **Discover → Execute:** spec exists and user approved it
- **Execute → Verify:** all spec items implemented
- **Surprises during Execute:** amend the spec, don't restart Discover

Code-flow ends at "ready to ship." What happens after (PR, merge, deploy) is outside this flow.
