---
name: discover
description: "Use before any code change — new feature, bug fix, refactor, or tech debt. Explores the problem, builds understanding through concrete artifacts, and produces a spec that gates the transition to execution."
---

# Discover

## Overview

Turn a vague problem into proven decisions. Every code change starts here — even a one-line fix gets at least a written problem statement. The discipline of writing forces the discipline of thinking.

Bug fixes are not a special case. A bug is just a problem where Discover asks "what don't I understand about how this breaks?" instead of "what don't I understand about what to build?"

## Subagent Guard

If you were dispatched as a subagent or teammate for a specific task, **stop here**. Do not activate the full workflow. You have a focused job — do it and report back.

## Step 1: Orient

Understand the landscape before asking questions:

- Check project state (recent commits, current branch, open work)
- Read relevant existing code, docs, specs
- Check the sprint counter in `CLAUDE.md` — if this is a tech debt sprint, scope accordingly
- Understand what exists before proposing what to build

Use the `code-explorer` agent for deep codebase analysis when the area is unfamiliar.

## Step 2: Explore the Problem

Ask questions one at a time to find the shape of the solution:

- What problem does this solve? (Or: what's broken and why?)
- What are the constraints? What's out of scope?
- What does "done" look like?

Use `AskUserQuestion` with multiple-choice options — faster for the user, keeps the conversation focused.

**Output:** A lean brief — just constraints and known commitments. Not a roadmap. "No plan survives contact with the enemy" — so keep it intentionally lean.

Write this to the project root as `SPRINT-N-SPEC.md` (or `FIX-description-SPEC.md` for bug fixes):

```markdown
# [Topic] — Brief

**Problem:** [What's wrong or missing]
**Constraints:**
- [Things we know are true / must be true]
- [Hard decisions already made]
**Out of scope:**
- [What this is NOT]
**Done when:**
- [1-3 concrete acceptance criteria]
```

For small work, the brief can be minimal:

```markdown
# Fix: [description]
**Problem:** [what's broken]
**Done when:** [one criterion]
```

## Step 3: Prototype / Spike

Build something throwaway to make the invisible visible. The medium depends on the work:

| Work type | Exploration medium | Feedback signal |
|-----------|-------------------|-----------------|
| UI / visual | HTML mockup in `public/` | Playwright screenshots |
| Architecture / data flow | ASCII diagrams | Visual review of structure and flow |
| Behavioral / algorithmic | Test sketch or REPL session | Test output / benchmarks |
| Integration / API | Spike branch with minimal wiring | Running it and poking |

**Why ASCII art for architecture:** No tooling dependencies, Claude generates it well, and the forced simplicity makes structures easy to parse and reason about. Just text you can read and react to in the conversation.

**The prototype is disposable.** No types, no abstractions, no build step. Change anything in seconds. Its only job is to produce a concrete artifact you can react to.

Use the `code-architect` agent when designing architecture for a significant change — it analyzes existing patterns and produces an implementation blueprint.

**For small or well-understood work, skip this step.** Not every change needs a prototype. If the path is clear, go straight to Crystallize.

## Step 4: Iterate

The core loop:

```
render → react → adjust → render → react → adjust → ...
```

- **Render** — produce a visual artifact (screenshot, diagram, test output)
- **React** — user sees it and responds with opinion, idea, or bug report
- **Adjust** — make targeted change, back to render

Iteration budget scales with stakes:
- Core features / hard-to-reverse decisions → many rounds
- Minor details / easily changed later → 1-2 rounds
- Mechanical / well-understood work → skip iteration entirely

## Step 5: Crystallize

When iteration converges, capture what was proven into the spec. Append to the same file below the brief, separated by `---`:

```markdown
# [Topic] — Brief

[...original brief stays here...]

---

# [Topic] — Spec

**Decisions proven by exploration:**
- [Decision 1 — why, and what we tried that led here]
- [Decision 2]

**Implementation shape:**
- [Component / module structure]
- [Type changes]
- [Key interfaces or contracts]

**Acceptance criteria (updated):**
1. [Criterion — may differ from the brief, that's the point]
2. [Criterion]

**File change list:**
- Create: `path/to/new.ts`
- Modify: `path/to/existing.ts`
```

The brief and spec live in the same document so you can compare "what we thought we'd build" vs. "what we decided to build."

This is a **collaborative** step: early discovery is dialogue between user and Claude. The final spec is Claude's job to draft from the conversation. Present it to the user for approval.

## Phase Gate

**Discover is done when the user approves the spec.** The spec is the gate to Execute.

For small work, "approval" can be as simple as the user saying "looks good, go." The spec still exists as a written artifact, even if it's two lines.

**Next:** Use the `execute` skill to implement from this spec.

## Key Principles

- **Always write something** — even one sentence. The artifact can be tiny but must exist.
- **Explore before you act** — the spec documents proven decisions, not hypotheses
- **The brief is the hypothesis, the spec is what survived** — keeping both shows the delta
- **YAGNI ruthlessly** — cut unnecessary scope from every spec
- **The conversation is the work** — don't rush to the document
