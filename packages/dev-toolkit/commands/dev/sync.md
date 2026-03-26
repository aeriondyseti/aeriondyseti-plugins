---
name: dev:sync
description: "Sync the current branch with its upstream (dev or main). Handles fetch, rebase, and conflict detection."
user-invocable: true
---

# /dev:sync

Sync the current branch with the latest upstream changes.

## Process

1. Identify the current branch: `git branch --show-current`

2. Determine the upstream base:
   - `feat/*` or `fix/*` branches → sync with `origin/dev`
   - `rc/*` branches → sync with `origin/dev` (for cherry-picks) or stay as-is
   - `dev` → sync with `origin/dev` (pull)
   - `main` → sync with `origin/main` (pull)

3. Fetch latest: `git fetch origin`

4. Check for uncommitted changes. If present, stash them automatically:
   ```bash
   git stash push -m "dev:sync auto-stash"
   ```

5. Rebase on the upstream:
   ```bash
   git rebase origin/dev  # or origin/main for main branch
   ```

6. If conflicts occur:
   - List the conflicting files
   - **Do not auto-resolve** — present the conflicts to the user
   - Offer to abort the rebase if needed: `git rebase --abort`

7. Restore stash if one was created:
   ```bash
   git stash pop
   ```

8. Report the result:
   > Synced `feat/my-feature` with `origin/dev`. 3 new commits rebased, no conflicts.
