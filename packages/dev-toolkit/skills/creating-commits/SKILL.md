---
name: creating-commits
description: "Use when creating a git commit. Guides intelligent staging, conventional commit message authoring, and pre-commit validation."
user-invocable: true
---

# Creating Commits

## Overview

When it's time to commit, don't just `git add -A && git commit`. Be intentional about what goes into each commit and craft a message that helps future readers understand *why* the change was made.

## Step 1: Review the Working Tree

Run `git status` (never with `-uall`) and `git diff` to understand:

- **What changed** — which files were modified, added, or deleted
- **What's staged vs unstaged** — is anything already in the index?
- **What's untracked** — are there new files that should be committed, or ignored?

Read the diff carefully. Understand the full scope of changes before deciding how to group them.

## Step 2: Decide on Commit Scope

Each commit should be a **single logical unit of work**. Ask:

- Do these changes all serve the same purpose?
- Would it make sense to revert just this commit? If not, it's too big.
- Are there unrelated changes mixed in (formatting fixes, dependency updates, unrelated refactors)?

If changes serve multiple purposes, stage and commit them separately. For example:

```
# First commit: the actual feature
git add src/search.ts src/index.ts tests/search.test.ts
git commit -m "feat: add vector search endpoint"

# Second commit: cleanup noticed along the way
git add src/utils.ts
git commit -m "refactor: extract shared embedding logic"
```

## Step 3: Stage Files

**Prefer staging specific files by name** rather than `git add -A` or `git add .`, which can accidentally include:

- `.env` files or credentials
- Large binary files
- Temporary/debug files
- Unrelated changes

```bash
git add src/feature.ts tests/feature.test.ts
```

Use `git add -p` (patch mode) if you need to stage only part of a file's changes.

### Never Commit

- `.env`, `.env.local`, credentials, secrets, API keys
- `node_modules/`, build artifacts, `.DS_Store`
- Large binary files unless the project specifically tracks them

If you see these in the diff, warn the user explicitly.

## Step 4: Write the Commit Message

Follow the **git-conventions** skill for format. The key principles:

1. **Match the type to the change**: `feat` means a wholly new capability. `fix` means a bug fix. `refactor` means behavior-preserving restructuring. Don't use `feat` for a bug fix or `fix` for a new feature.

2. **Imperative mood, lowercase**: `add search endpoint`, not `Added search endpoint` or `Adds search endpoint`.

3. **Focus on "why" over "what"**: The diff shows *what* changed. The message should explain *why*.

   - Bad: `fix: update query parameter`
   - Good: `fix: handle empty search queries that crash the parser`

4. **Keep it concise**: Under 72 characters for the subject line. Add a body only when the reasoning isn't obvious.

### Commit Message Template

```bash
git commit -m "$(cat <<'EOF'
<type>[scope]: <description>

[Optional body explaining why, not what.
Wrap at 72 characters.]
EOF
)"
```

## Step 5: Verify

After committing:

1. Run `git log --oneline -5` to confirm the commit looks right
2. If pre-commit hooks fail, **do not use `--no-verify`** — fix the issue and create a new commit
3. If a hook modified files (e.g., formatting), stage the changes and commit again

## When to Use Multiple Commits vs. One

| Scenario | Approach |
|----------|----------|
| Single feature with its tests | One commit |
| Feature + unrelated cleanup | Separate commits |
| Bug fix + regression test | One commit |
| Multiple independent fixes | Separate commits |
| Work-in-progress checkpoint | One commit (can squash later) |
