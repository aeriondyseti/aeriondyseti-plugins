---
name: brainstorming
description: "Use before any creative work - creating features, building components, adding functionality, or modifying behavior. Discovers requirements and acceptance criteria through collaborative dialogue."
---

# Brainstorming Ideas Into Requirements

## Overview

Help turn ideas into clear requirements and acceptance criteria through natural collaborative dialogue. The conversation is the main event — ask questions to find the edges of what the user wants before writing anything down.

## The Process

**Get oriented:**
- Check the current project state (files, docs, recent commits)
- Understand what exists before asking questions

**Discover requirements through questions:**
- Ask questions one at a time to find the boundaries of the idea
- Use the `AskUserQuestion` tool when available — it supports multiple choice options, which are faster for the user to answer and keep the conversation focused
- Only one question per message
- Focus on: What problem does this solve? Who is it for? What are the constraints? What does "done" look like?
- Probe the edges: What should it NOT do? What's out of scope? What happens when things go wrong?
- Keep going until you can confidently state what success looks like

**Explore approaches (briefly):**
- When relevant, propose 2-3 approaches with trade-offs
- Lead with your recommendation and reasoning
- The goal is to pick a direction, not to design the architecture

**Present the spec:**
- Once you understand the requirements, present a short spec for validation
- Goals, constraints, and numbered acceptance criteria
- Keep it concise — this is a checklist, not a design doc
- Ask if it captures what they want

## Output

Write the validated spec to `docs/specs/YYYY-MM-DD-<topic>.md` with this structure:

```
# [Topic]

**Goal:** [One sentence]

**Constraints:**
- [Constraint 1]
- [Constraint 2]

**Out of scope:**
- [Thing 1]

**Acceptance Criteria:**
1. [Criterion 1]
2. [Criterion 2]
3. [Criterion 3]
```

**Next steps (if continuing):**
- Use writing-plans skill to create an implementation plan from this spec

## Self-Review Checklist

Before presenting the spec to the user, review it against these criteria:

- [ ] **Goal is singular** — one clear sentence, not a compound goal
- [ ] **Acceptance criteria are testable** — each one has a concrete "how would I verify this?" answer
- [ ] **Out of scope is explicit** — adjacent features that could creep in are named and excluded
- [ ] **No implementation leaking in** — the spec says *what*, not *how*
- [ ] **YAGNI applied** — nothing is included "just in case" or "while we're at it"
- [ ] **Edge cases explored** — error states, empty inputs, concurrent access (where relevant)

If any item fails, revise the spec before presenting it.

## Key Principles

- **One question at a time** — Don't overwhelm with multiple questions
- **Multiple choice preferred** — Easier to answer than open-ended when possible
- **Probe the edges** — The most valuable questions find what's NOT obvious
- **YAGNI ruthlessly** — Cut unnecessary scope from every spec
- **The conversation is the work** — Don't rush to the document
