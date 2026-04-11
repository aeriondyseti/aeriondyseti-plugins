---
name: execute
description: "Use when you have an approved spec from the Discover phase. Orchestrates implementation — parallel or serial — with autonomy and guardrails."
---

# Execute

## Overview

Build what the spec describes. Claude executes autonomously with guardrails — escalating on surprises, deviations, or ambiguity rather than guessing.

**Input:** An approved spec from the Discover phase (a `SPRINT-N-SPEC.md` or similar at the project root).

## Subagent Guard

If you were dispatched as a subagent or teammate for a specific task, **stop here**. Do not activate the full workflow. You have a focused job — do it and report back.

## Phase 1: Load and Assess

1. Read the spec file thoroughly
2. Review the file change list — understand the scope
3. Assess the execution strategy:

| Situation | Strategy |
|-----------|----------|
| 3+ independent file changes | Parallel agents (team or subagents) |
| Tightly coupled changes | Serial execution |
| < 3 tasks total | Just do it — no orchestration overhead |

4. Raise any concerns or ambiguities with the user before starting

## Phase 2: Execute

### Parallel Execution (3+ independent tasks)

Use `TeamCreate` or the `Agent` tool to dispatch parallel work:

- Each agent gets: the specific task, exact file paths, patterns to follow, verification command, commit instructions
- Provide context by reference (file paths), not by value (pasted code) — agents read files themselves
- Match agent count to parallel tracks, not task count (2-4 agents is typical)
- As agents complete tasks, dispatch newly unblocked work

### Serial Execution (coupled work)

Work through tasks in dependency order:
- Complete one logical unit before starting the next
- Run verification after each unit
- Commit after each unit (or per the spec's commit strategy)

### For All Strategies

**Autonomy with guardrails.** Execute the spec without asking permission for every step, but **stop and ask** when:
- Something unexpected is encountered (failing tests, missing files, unclear requirements)
- A deviation from the spec seems necessary
- A decision point arises that the spec doesn't cover
- A task fails and the fix isn't obvious

**Don't guess through ambiguity. Ask.**

## Between Waves

After each logical group of changes:

1. **Simplify** — run the `code-simplifier` agent on modified files to refine code for clarity, consistency, and maintainability
2. **Verify** — run tests, typecheck, build to catch regressions early
3. **Summarize** — report what's done and what's next
4. **Flag deviations** — if anything changed from the spec, note it explicitly

## Handling Surprises

When something unexpected comes up during execution:

- **Amend the spec** — update the spec file with what you learned. Don't restart Discover.
- **Continue from the amended spec** — the spec is a living document, not a frozen contract
- **Flag the amendment to the user** — "I updated the spec because [reason]. The change: [what changed]."

Only loop back to full Discover if the surprise fundamentally changes the problem (rare).

## Agent Prompts

When dispatching work to agents:

- **What** to do — the specific task from the spec
- **Where** — exact file paths
- **Why** if not obvious — enough intent for good judgment calls
- **How to verify** — the command to run when done
- **Patterns to follow** — point to an existing file as a template, don't describe the pattern

One task per agent. Don't give an agent a grab bag of loosely related work.

## Phase Gate

**Execute is done when all items in the spec's file change list are implemented.** The code compiles, tests pass for the changed files, and the implementation matches the spec (including any amendments).

**Next:** Use the `verify` skill for final verification before declaring the work ready to ship.

## Key Principles

- **Parallel by default** — if tasks don't depend on each other, run them simultaneously
- **The spec is a living guide** — amend it when reality diverges, don't fight reality to match the spec
- **Fresh agents, focused context** — each agent gets only what it needs, not the entire spec
- **Verify between waves** — catch problems early, not at the end
- **One attempt, then escalate** — don't burn tokens on retry loops. If a fix doesn't work, ask the user.
