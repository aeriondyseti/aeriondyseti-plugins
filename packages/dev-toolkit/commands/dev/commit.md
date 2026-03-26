---
name: dev:commit
description: "Stage and commit changes with a conventional commit message. Guides intentional staging and meaningful messages."
user-invocable: true
---

# /dev:commit

Create a well-crafted commit following project conventions.

## Process

1. **Review the working tree** — run in parallel:
   ```bash
   git status                    # Staged, unstaged, and untracked files
   git diff                      # Unstaged changes
   git diff --cached             # Already-staged changes
   git log --oneline -5          # Recent commits for style reference
   ```

2. **Understand the changes**. Read the diffs carefully. Identify:
   - What the changes accomplish (feature, fix, refactor, etc.)
   - Whether the changes are a single logical unit or should be split into multiple commits
   - Whether any files should be excluded (`.env`, credentials, large binaries, `node_modules`)

3. **Decide on commit scope**. If changes serve multiple purposes, tell the user and propose splitting them into separate commits. Follow this table:

   | Scenario | Approach |
   |----------|----------|
   | Single feature with its tests | One commit |
   | Feature + unrelated cleanup | Separate commits |
   | Bug fix + regression test | One commit |
   | Multiple independent fixes | Separate commits |

4. **Stage files by name** — never use `git add -A` or `git add .`:
   ```bash
   git add src/feature.ts tests/feature.test.ts
   ```
   If only part of a file's changes belong in this commit, mention `git add -p` to the user.

5. **Write the commit message** using conventional commit format:
   - **Type**: `feat`, `fix`, `refactor`, `chore`, `docs`, `test`, `perf`, `ci`
   - **Scope** (optional): module or area affected
   - **Description**: imperative mood, lowercase, no period, under 72 characters
   - **Body** (optional): explain *why*, not *what*
   - Append `!` after type/scope for breaking changes

   ```bash
   git commit -m "$(cat <<'EOF'
   <type>[scope]: <description>

   [Optional body explaining why.]
   EOF
   )"
   ```

6. **Verify** the commit:
   ```bash
   git log --oneline -3
   ```
   If pre-commit hooks fail, fix the issue and create a **new** commit — never use `--no-verify`.

## Arguments

- `/dev:commit` — review all changes and commit interactively
- `/dev:commit --all` — stage and commit all changes as a single logical unit (still reviews the diff first)

## Rules

- Never commit `.env`, credentials, secrets, or API keys. Warn the user if these appear in the diff.
- Never use `--no-verify` to bypass pre-commit hooks.
- If a hook modifies files (e.g., formatting), stage the new changes and create a new commit.
- Focus the message on "why" over "what" — the diff already shows what changed.
