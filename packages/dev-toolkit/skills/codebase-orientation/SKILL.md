---
name: codebase-orientation
description: "Use at the start of a new conversation or when working in an unfamiliar codebase. Generates a ranked map of the repository structure to orient before diving into code."
---

# Codebase Orientation

## Overview

Before reading files or making changes in a codebase, orient yourself with a structural overview. This avoids wasted time exploring blindly and ensures you understand the architecture before touching anything.

## When to Use

- **Start of a new conversation** in a project you haven't mapped yet
- **Switching to an unfamiliar part** of a codebase
- **Before planning work** that spans multiple modules
- **When asked "how does X work"** and you don't yet know where X lives

## Step 1: Generate the Repo Map

Use the `repo_map` MCP tool to get a PageRank-ranked overview:

```
repo_map(projectRoot: "<absolute path to repo root>")
```

Use a `tokenLimit` of 4096–8192 for most repos. For monorepos, consider scoping to a specific package directory instead of the root.

### If you know the area of focus

Use `focusFiles` to bias the map toward relevant code. Files listed in `focusFiles` get a 20x ranking boost, and code that references them ranks higher:

```
repo_map(
  projectRoot: "/path/to/repo",
  focusFiles: ["src/core/auth.ts", "src/middleware/session.ts"],
  tokenLimit: 4096
)
```

### If you know key identifiers

Use `priorityIdentifiers` to boost files that define specific functions, classes, or types:

```
repo_map(
  projectRoot: "/path/to/repo",
  priorityIdentifiers: ["MemoryService", "handleToolCall"],
  tokenLimit: 4096
)
```

## Step 2: Read the Map

The output is a ranked list of files with their key definitions (classes, functions, interfaces, types). Files are ordered by importance — the most-referenced code appears first.

From the map, identify:

- **Core domain types** — interfaces and classes that appear at the top (most referenced)
- **Entry points** — `main()`, route handlers, CLI parsers
- **Service boundaries** — where one module ends and another begins
- **Test structure** — where tests live relative to source

## Step 3: Proceed with Context

Now you can work effectively:

- When planning, you know which files to include in your plan
- When debugging, you know the call flow between modules
- When implementing, you know existing patterns to follow
- When reviewing, you can assess whether changes fit the architecture

Do not re-run the map unless the conversation context is compacted or you shift to a different area of the codebase.
