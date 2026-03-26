---
name: branch-management
description: "Use when creating, switching, syncing, or cleaning up git branches. Enforces naming conventions and the branching flow."
---

# Branch Management

## Overview

Manage branches following the project's branching model. Every branch operation should respect the flow: `feat/fix → dev → rc → main`.

## Creating a Branch

### Pre-flight

1. Check the current branch and working tree state: `git status`
2. Ensure you're on the correct base branch (usually `dev`)
3. Pull latest: `git pull origin dev`

### Create and Switch

```bash
# Feature branch
git checkout -b feat/<description> dev

# Fix branch
git checkout -b fix/<description> dev
```

Follow the naming conventions from the **git-conventions** skill:
- `feat/<kebab-case>` for features
- `fix/<kebab-case>` for bug fixes
- Always branch from `dev` unless there's a specific reason not to

### Ask If Unclear

If the user hasn't specified a branch name, propose one based on the work description. Present it for confirmation:

> I'll create `feat/add-vector-search` from `dev`. Sound good?

## Switching Branches

Before switching:

1. Check for uncommitted changes: `git status`
2. If there are changes, ask the user: stash, commit, or discard?
3. Never silently discard uncommitted work

```bash
# Stash if needed
git stash push -m "WIP: description of current work"

# Switch
git checkout <branch-name>

# Restore stash later
git stash pop
```

## Syncing Branches

### Sync Feature Branch with Dev

When `dev` has moved ahead and you need its changes:

```bash
git fetch origin
git rebase origin/dev
```

**Prefer rebase over merge** for feature branches — it keeps a linear history. If conflicts arise, resolve them carefully; don't discard changes without understanding them.

### Sync Dev with Main (Post-Release)

After a release lands on `main`:

```bash
git checkout dev
git merge main
git push origin dev
```

Or, if the project convention is to reset dev:

```bash
git checkout dev
git reset --hard origin/main
git push origin dev --force-with-lease
```

**Always confirm with the user before force-pushing**, even to `dev`.

## Cleaning Up Branches

### After Merge/PR

Once a feature branch has been merged (via PR or locally):

```bash
# Delete local branch
git branch -d feat/<name>

# Delete remote branch
git push origin --delete feat/<name>
```

### Bulk Cleanup

Find branches that have been deleted on the remote but still exist locally:

```bash
git fetch --prune
git branch -vv | grep ': gone]'
```

Present the list to the user before deleting anything. Never bulk-delete without confirmation.

### Stale Branch Detection

A branch is likely stale if:
- It hasn't been updated in 30+ days
- Its remote tracking branch is gone
- It has been fully merged into `dev` or `main`

List candidates and let the user decide.

## RC Branch Workflow

Release candidate branches have special rules:

1. **Cut from dev**: `git checkout -b rc/X.Y.Z dev`
2. **Only fixes and chores** — no new features land on RC branches
3. **Bump RC version** on each push: `X.Y.Z-rc.1`, `X.Y.Z-rc.2`, etc.
4. **PR to main** when stable
5. **Delete after release** — once merged to main, the RC branch is done

## Rules

- **Never delete `main` or `dev`**
- **Never force-push to `main`** — warn the user if they ask
- **Always `--force-with-lease`** instead of `--force` when force-pushing is necessary
- **Confirm before destructive operations** — branch deletion, force push, hard reset
- **Check for worktrees** before deleting a branch — `git worktree list`
