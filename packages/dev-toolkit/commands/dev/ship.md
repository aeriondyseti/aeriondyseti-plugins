---
name: dev:ship
description: "Commit, push, and open a PR in one step. The full ship-it workflow."
user-invocable: true
---

# /dev:ship

Commit all changes, push the branch, and open a pull request — the complete shipping workflow.

## Process

### Phase 1: Commit

1. **Review the working tree** — run in parallel:
   ```bash
   git status                    # Staged, unstaged, and untracked files
   git diff                      # Unstaged changes
   git diff --cached             # Already-staged changes
   git log --oneline -5          # Recent commits for style reference
   git branch --show-current     # Current branch name
   ```

2. **Check the branch**. If on `main` or `dev`, stop and tell the user to create a feature branch first (suggest `/dev:branch`).

3. **Stage and commit** following the same rules as `/dev:commit`:
   - Stage files by name (never `git add -A`)
   - Write a conventional commit message
   - If changes should be split into multiple commits, do so before proceeding
   - Warn about `.env`, credentials, or secrets in the diff

4. If there are **no uncommitted changes** but there are existing commits on the branch, skip to Phase 2.

### Phase 2: Push

5. **Push the branch** to origin:
   ```bash
   git push -u origin <branch-name>
   ```
   If the branch was rebased and needs a force push, use `--force-with-lease` and confirm with the user first.

### Phase 3: Pull Request

6. **Gather PR context** — run in parallel:
   ```bash
   git log --oneline dev..HEAD              # All commits on this branch
   git diff dev...HEAD --stat               # Files changed summary
   ```

7. **Determine the target branch**:
   - `feat/*` or `fix/*` → target `dev`
   - `rc/*` → target `main`
   - Ask the user if uncertain

8. **Generate and create the PR**:
   - Derive the **title** from the branch name and commit messages (conventional format, under 70 chars)
   - Build the **summary** from the commit log
   - Build the **test plan** from test files in the diff

   ```bash
   gh pr create --base <target> --title "<title>" --body "$(cat <<'EOF'
   ## Summary
   <generated from commits>

   ## Changes
   <generated from diff stat>

   ## Test plan
   - [ ] <generated from test files and commit messages>
   EOF
   )"
   ```

9. **Report the result** — return the PR URL.

## Arguments

- `/dev:ship` — commit, push, and create PR (auto-detect everything)
- `/dev:ship --draft` — create the PR as a draft
- `/dev:ship --base main` — override the PR target branch

## Rules

- **Never ship from `main` or `dev`** — always work on a feature/fix branch
- **Never use `--no-verify`** to bypass pre-commit hooks
- **Never commit secrets** — warn and exclude `.env`, credentials, API keys
- **Confirm before force-pushing** — only use `--force-with-lease`, never `--force`
- Stage files by name, not with `git add -A` or `git add .`
