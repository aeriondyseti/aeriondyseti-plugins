---
name: dev:branch
description: "Quick-create a properly named feature or fix branch from dev."
user-invocable: true
---

# /dev:branch

Create a new branch following project naming conventions.

## Process

1. Run `git status` to check for uncommitted changes. If there are changes, ask the user whether to stash, commit, or abort.

2. Fetch latest from remote: `git fetch origin`

3. Ask the user (if not already specified):
   - **Type**: feature (`feat/`) or fix (`fix/`)?
   - **Description**: short kebab-case name for the branch

4. Create the branch from `dev`:
   ```bash
   git checkout -b <type>/<description> origin/dev
   ```

5. Confirm:
   > Created `feat/<description>` from `origin/dev`. You're ready to work.

## Arguments

If the user provides arguments, parse them:
- `/dev:branch feat add-vector-search` → `feat/add-vector-search`
- `/dev:branch fix context-timing` → `fix/context-timing`
- `/dev:branch add-vector-search` → infer `feat/` (default to feature if type is omitted)
