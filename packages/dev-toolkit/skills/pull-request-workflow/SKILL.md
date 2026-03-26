---
name: pull-request-workflow
description: "Use when creating a pull request, responding to PR feedback, or managing PR lifecycle. Handles description authoring, reviewer assignment, and feedback workflow."
user-invocable: true
---

# Pull Request Workflow

## Overview

Pull requests are the gateway to `main`. Every PR should be easy to review: clear description, focused scope, and all checks passing before requesting review.

## Creating a Pull Request

### Step 1: Pre-flight Checks

Before creating a PR, verify:

1. **All tests pass** — run the full test suite and read the output
2. **No unintended changes** — `git diff <base-branch>...HEAD` to review everything that will be in the PR
3. **Commits are clean** — `git log --oneline <base-branch>..HEAD` to see the commit history
4. **Branch is up to date** — rebase on the target branch if needed

If any check fails, fix the issue before proceeding. Don't create a PR with known failures.

### Step 2: Push the Branch

```bash
git push -u origin <branch-name>
```

If the branch already has a remote and you've rebased, you may need `--force-with-lease`. Confirm with the user first.

### Step 3: Write the PR Description

Use `gh pr create` with a structured description. The description should help reviewers understand the change without reading every line of code.

```bash
gh pr create --title "<type>: <concise description>" --body "$(cat <<'EOF'
## Summary
- <What this PR does and why>
- <Key design decisions>
- <Any trade-offs made>

## Changes
- <Grouped list of notable changes>

## Test plan
- [ ] <How to verify this works>
- [ ] <Edge cases checked>
- [ ] <Regression tests added/updated>
EOF
)"
```

### PR Title Rules

- Follow the same **conventional commit** format as commit messages
- Under 70 characters
- Use the description/body for details, not the title

### PR Description Guidelines

- **Summary**: 1-3 bullet points explaining *what* and *why*
- **Changes**: Group by area (e.g., "API changes", "Test updates", "Config")
- **Test plan**: Specific, verifiable steps — not just "tested locally"
- **Link related issues**: Use `Closes #123` or `Fixes #456` syntax

### Step 4: Set Target Branch and Reviewers

- **Target branch**: Usually `dev` for feature/fix branches, `main` for RC branches
- **Reviewers**: Request reviews from CodeRabbit (automated) and Copilot as configured for the repo

```bash
# Target dev by default
gh pr create --base dev ...

# For RC → main
gh pr create --base main ...
```

## Responding to PR Feedback

### Reading Feedback

1. Fetch all review comments: `gh pr view <number> --comments` or `gh api repos/<owner>/<repo>/pulls/<number>/comments`
2. **Read ALL feedback before implementing anything** — understand the full picture first
3. Categorize by severity:
   - **Critical** — must fix before merge (bugs, security issues, breaking changes)
   - **Important** — should fix before merge (design issues, missing tests)
   - **Minor** — nice to have (style, naming, small improvements)
   - **Questions** — respond with clarification, no code change needed

### Implementing Fixes

1. Address issues in order: critical → important → minor
2. Each fix should be a separate commit (makes it easy for reviewers to verify)
3. Push fixes and respond to each comment thread indicating the resolution
4. If you disagree with feedback, respond with technical reasoning — don't silently ignore it

### Re-requesting Review

After addressing all feedback:

```bash
gh pr review <number> --request-review
```

Or push new commits — most review tools (CodeRabbit, GitHub) auto-detect updates.

## PR Merge Strategies

| Strategy | When to use |
|----------|------------|
| **Squash merge** | Feature branch with messy/WIP commits — produces one clean commit on target |
| **Merge commit** | RC → main, or when you want to preserve the full commit history |
| **Rebase merge** | Clean feature branch where each commit is meaningful |

Let the project's merge strategy settings guide the choice. When in doubt, ask the user.

## PR Lifecycle

1. **Draft** → create early if you want feedback before the work is complete
2. **Ready for review** → all checks pass, description complete
3. **Changes requested** → address feedback, push fixes
4. **Approved** → merge (or wait for CI)
5. **Merged** → delete the branch (see **branch-management** skill)

## Rules

- **Never merge with failing checks** — investigate and fix first
- **Keep PRs focused** — one logical change per PR. If a PR grows too large, consider splitting it
- **Update the PR description** if scope changes during review
