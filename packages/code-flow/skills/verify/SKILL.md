---
name: verify
description: "Use after execution is complete, before declaring work ready to ship. Unified verification through multiple lenses: correctness, code quality, review, and architectural feel."
---

# Verify

## Overview

Confirm the work is correct, clean, and ready to ship. Verification is a single phase with multiple lenses — not separate steps. Even when Discover was compressed to a single sentence, Verify always runs fully.

**Core principle:** Evidence before claims.

## Subagent Guard

If you were dispatched as a subagent or teammate for a specific task, **stop here**. Do not activate the full workflow. You have a focused job — do it and report back.

## The Four Lenses

### Lens 1: Correctness

- Re-read the spec (including any amendments made during Execute)
- Check each acceptance criterion — did you address all of them, or just most?
- Run the full test suite (not just tests for your changes)
- Run typecheck, build, linter
- Read the full output — don't skim. Check exit codes, failure counts, warnings.

**The claim must match the evidence.** If tests show 33/34 passing, don't say "all tests pass." State exactly what you ran and what the output was.

### Lens 2: Code Quality

Dispatch the `code-simplifier` agent (or review manually for small changes):

- Search for existing utilities that could replace newly written code
- Flag duplicate code, redundant state, parameter sprawl
- Check for copy-paste with slight variation, leaky abstractions, stringly-typed code
- Check for unnecessary work, missed concurrency, hot-path bloat, memory leaks
- **Apply fixes directly** — don't just report them. Fix issues, then re-run verification.

### Lens 3: Review

Dispatch the `code-reviewer` agent with:

- What was implemented (brief description)
- The spec file path (so it can compare against requirements)
- The git diff range (base and head)
- Verification status from Lens 1

The reviewer categorizes issues by severity:
- **Critical (must fix)** — bugs, security issues, data loss risks, broken functionality
- **Important (should fix)** — architecture problems, missing error handling, test gaps
- **Minor (judgment call)** — code style, optimization opportunities, naming

Act on feedback:
- Critical issues → fix before proceeding
- Important issues → fix before shipping
- Minor issues → fix or note as tech debt, use judgment
- Disagree? → push back with technical reasoning, not defensiveness

### Lens 4: "Works but Feels Wrong"

After the other lenses pass, a gut check:

- **Minor discomfort** → note it in `TECH-DEBT.md` and ship. Not everything needs to be perfect now.
- **Genuine architectural smell** → fix it now, before shipping. If it feels structurally wrong, it probably is.

The threshold: would you be comfortable explaining this code to someone in a week? If yes, ship it. If you'd feel the need to apologize, fix it.

## Output

Present a clear summary to the user:

```
## Verification Summary

**Correctness:**
- [Exact commands run and output]
- [Acceptance criteria: N/N met]

**Code Quality:**
- [Issues found and fixed, or "Clean"]

**Review:**
- [Critical: N, Important: N, Minor: N]
- [Issues addressed or noted]
- **Ready to ship:** [Yes / No / With fixes]

**Tech Debt Noted:**
- [Any items added to TECH-DEBT.md, or "None"]
```

## Spec Cleanup

When verification passes and the work is ready to ship:

- The spec file (`SPRINT-N-SPEC.md`) should be **deleted in the merge commit**. The spec is ephemeral — it served its purpose. The code is the lasting artifact.
- Update the sprint counter in `CLAUDE.md` to reflect the completed sprint.
- If tech debt items were noted, confirm they're in `TECH-DEBT.md`.

## Phase Gate

**Verify is done when you can state "ready to ship" with evidence.** Code-flow's job ends here. What happens next (PR, merge, deploy) is outside code-flow's scope — the user decides.

## Key Principles

- **Evidence before claims** — run the commands, read the output, then speak
- **Verification is constant** — even small work gets the full lens treatment
- **Fix, don't report** — code quality issues get fixed directly, not listed for someone else
- **Tech debt is tracked** — "works but feels wrong" items go to TECH-DEBT.md, not into the void
- **The spec dies with the merge** — ephemeral artifact, deleted when shipped
