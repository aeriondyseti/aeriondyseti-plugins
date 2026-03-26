---
name: dev:clean
description: "Clean up stale local branches: gone remotes, merged branches, and their associated worktrees."
user-invocable: true
---

# /dev:clean

Clean up local branches that are no longer needed.

## Process

1. **Fetch and prune** to sync remote tracking state:
   ```bash
   git fetch --prune
   ```

2. **Identify candidates** — run in parallel:
   ```bash
   git branch -v                 # All local branches with tracking status
   git worktree list             # Active worktrees
   ```

3. **Categorize branches** for cleanup:
   - **Gone**: remote tracking branch has been deleted (`[gone]` in `git branch -v`)
   - **Merged**: fully merged into `dev` or `main` (check with `git branch --merged dev` and `git branch --merged main`)

   Exclude `main` and `dev` from all cleanup — **never delete these branches**.

4. **Present the list** to the user before deleting anything:
   > Found 3 branches to clean up:
   > - `feat/old-feature` — remote is gone
   > - `fix/typo` — merged into dev
   > - `feat/experiment` — remote is gone, has worktree at `/path/to/worktree`
   >
   > Delete all, or pick which to keep?

5. **Clean up confirmed branches**. For each branch:

   a. **Remove its worktree first** if one exists:
      ```bash
      worktree=$(git worktree list | grep "\\[$branch\\]" | awk '{print $1}')
      git worktree remove --force "$worktree"
      ```

   b. **Delete the branch**:
      ```bash
      git branch -D <branch-name>
      ```

6. **Report results**:
   > Cleaned up 3 branches (1 worktree removed). Remaining branches: main, dev, feat/active-work.

## Arguments

- `/dev:clean` — interactive cleanup with confirmation
- `/dev:clean --gone` — only clean branches whose remote is gone (skip merged-branch check)

## Rules

- **Never delete `main` or `dev`**
- **Always confirm** before deleting — never bulk-delete without user approval
- **Check for worktrees** before deleting a branch to avoid leaving orphaned worktrees
- **Use `git branch -D`** (force delete) for gone branches since they can't be verified as merged when the remote is gone
- **Use `git branch -d`** (safe delete) for merged branches — this will refuse to delete if not actually merged
