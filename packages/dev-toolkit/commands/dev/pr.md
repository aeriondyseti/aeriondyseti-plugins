---
name: dev:pr
description: "Create a pull request with an auto-generated description from the branch's commit history."
user-invocable: true
---

# /dev:pr

Create a pull request for the current branch with a well-structured description.

## Process

1. **Gather context** — run these in parallel:
   ```bash
   git status                              # Check for uncommitted changes
   git branch --show-current               # Current branch name
   git log --oneline dev..HEAD             # Commits on this branch
   git diff dev...HEAD --stat              # Files changed summary
   ```

2. **Check for uncommitted changes**. If present, ask the user: commit first, stash, or proceed without them?

3. **Determine the target branch**:
   - `feat/*` or `fix/*` → target `dev`
   - `rc/*` → target `main`
   - Ask the user to confirm if uncertain

4. **Push the branch** if it hasn't been pushed yet:
   ```bash
   git push -u origin <branch-name>
   ```

5. **Generate the PR**:
   - Derive the **title** from the branch name and commit messages. Use conventional commit format.
   - Build the **summary** from the commit log — group related commits, highlight key changes.
   - Build the **test plan** from any test files in the diff.

6. **Create the PR**:
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

7. **Report the result** — return the PR URL so the user can see it.

## Arguments

- `/dev:pr` — auto-detect everything
- `/dev:pr --draft` — create as draft PR
- `/dev:pr --base main` — override target branch
