---
name: git-conventions
description: "Use when you need to understand or enforce the project's git conventions — commit message format, branch naming, or the branching/release flow."
---

# Git Conventions

## Overview

This skill defines the git conventions to follow in projects that use a trunk-based development model with release candidates. Apply these conventions whenever creating commits, branches, or pull requests.

## Commit Message Format

Follow **Conventional Commits**. Every commit message has the structure:

```
<type>[optional scope][optional !]: <description>
```

### Types

| Type | When to use | Semver impact |
|------|------------|---------------|
| `feat` | A new feature or capability | MINOR |
| `fix` | A bug fix | PATCH |
| `chore` | Version bumps, dependency updates, config changes, cleanup | None |
| `refactor` | Code restructuring without behavior change | None |
| `docs` | Documentation only | None |
| `test` | Adding or updating tests | None |
| `perf` | Performance improvement | None |
| `ci` | CI/CD workflow changes | None |

### Breaking Changes

Append `!` after the type (or scope) to signal a breaking change. This triggers a MAJOR semver bump.

```
feat!: restructure repo into server/ and plugin/ with --plugin mode
fix(config)!: rename --output flag to --dest
```

### Rules

- **Description** is imperative, lowercase, no period: `add user auth`, not `Added user auth.`
- **Scope** is optional and in parentheses: `fix(parser): handle empty input`
- Keep the first line under 72 characters
- Add a body (separated by blank line) only when the "why" isn't obvious from the description

### Examples

```
feat: add vector search endpoint
fix: run context monitor on PostToolUse for autonomous sessions
chore: bump version to 2.3.0-rc.2
refactor: extract embedding logic into shared module
docs: update release checklist with test results
test: add integration tests for memory consolidation
```

## Branch Naming

| Branch type | Pattern | Example |
|-------------|---------|---------|
| Feature | `feat/<kebab-case-description>` | `feat/auto-migrate-startup` |
| Bug fix | `fix/<kebab-case-description>` | `fix/context-monitor-timing` |
| Release candidate | `rc/<semver>` | `rc/2.3.0` |
| Integration | `dev` | `dev` |
| Stable | `main` | `main` |

### Rules

- Always branch from `dev` for features and fixes
- Use kebab-case for the description portion
- Keep names short but descriptive — enough to identify the work at a glance

## Branching & Release Flow

```
main ← (PR) ← rc/X.Y.Z ← (cherry-picks/fixes) ← dev ← feat/* / fix/*
```

### The Flow

1. **Feature/fix branches** — branch from `dev`, do work, merge back into `dev`
2. **`dev` branch** — integration/dogfooding. Unprotected, open for direct pushes. Publishes `@dev` npm tag on push.
3. **`rc/X.Y.Z` branches** — cut from `dev` when ready to stabilize. Only bug fixes and chores allowed (no new features). Publishes `@rc` npm tag on push.
4. **`main` branch** — protected. Changes arrive only via PR from `rc/X.Y.Z` (or `dev` for simpler projects). Publishes `@latest` npm tag, creates git tag and GitHub Release.
5. **After release** — `dev` is reset/merged to match `main`, RC branch is deleted.

### Simplified Flow (non-npm or simple projects)

Some projects skip the RC step:

```
main ← (PR) ← dev ← feat/* / fix/*
```

In this model, `dev` publishes `@dev` and PRs from `dev` to `main` publish `@latest`.

### Protection Rules

- **`main`** — test status check required before merge. PRs require reviews from CodeRabbit and/or Copilot.
- **`dev`** — unprotected, direct pushes allowed
- **`rc/*`** — unprotected, but only fixes/chores should land here

## Semver Bump Logic

When determining a version bump, analyze commits since the last tag:

- Any `feat!:` or `fix!:` → **MAJOR**
- Any `feat:` → **MINOR**
- Only `fix:`, `chore:`, `refactor:`, `docs:`, `test:`, `perf:`, `ci:` → **PATCH**

The highest-impact commit wins (MAJOR > MINOR > PATCH).
