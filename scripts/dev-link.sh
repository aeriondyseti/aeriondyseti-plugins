#!/usr/bin/env bash
# dev-link.sh — Symlink local plugin sources into the Claude Code plugin cache.
#
# Usage:
#   ./scripts/dev-link.sh          # link all plugins
#   ./scripts/dev-link.sh --undo   # restore all backups
#
# For each plugin package that has a matching entry in the plugin cache,
# replaces the cached version directory with a symlink to the local source.
# The original cache directory is moved to a .bak suffix for safe rollback.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PACKAGES_DIR="$REPO_ROOT/packages"
CACHE_DIR="$HOME/.claude/plugins/cache/cc-plugins"

undo=false
if [[ "${1:-}" == "--undo" ]]; then
  undo=true
fi

if [[ ! -d "$CACHE_DIR" ]]; then
  echo "Plugin cache not found at $CACHE_DIR"
  exit 1
fi

linked=0
restored=0
skipped=0

incr() { eval "$1=\$(( $1 + 1 ))"; }

for pkg_dir in "$PACKAGES_DIR"/*/; do
  plugin_json="$pkg_dir.claude-plugin/plugin.json"
  [[ -f "$plugin_json" ]] || continue

  name=$(python3 -c "import json; print(json.load(open('$plugin_json'))['name'])")
  version=$(python3 -c "import json; print(json.load(open('$plugin_json'))['version'])")
  cache_version_dir="$CACHE_DIR/$name/$version"

  if $undo; then
    # Restore backup
    if [[ -L "$cache_version_dir" && -d "${cache_version_dir}.bak" ]]; then
      rm "$cache_version_dir"
      mv "${cache_version_dir}.bak" "$cache_version_dir"
      echo "  restored  $name@$version"
      incr restored
    else
      echo "  skip      $name@$version (no backup or not a symlink)"
      incr skipped
    fi
  else
    # Create symlink
    if [[ -L "$cache_version_dir" ]]; then
      target=$(readlink "$cache_version_dir")
      echo "  skip      $name@$version (already linked → $target)"
      incr skipped
      continue
    fi

    if [[ ! -d "$cache_version_dir" ]]; then
      echo "  skip      $name@$version (not in cache — plugin not installed?)"
      incr skipped
      continue
    fi

    mv "$cache_version_dir" "${cache_version_dir}.bak"
    ln -s "$pkg_dir" "$cache_version_dir"
    echo "  linked    $name@$version → $pkg_dir"
    incr linked
  fi
done

if $undo; then
  echo ""
  echo "Done: $restored restored, $skipped skipped."
  [[ $restored -gt 0 ]] && echo "Restart Claude Code to pick up the cached versions."
else
  echo ""
  echo "Done: $linked linked, $skipped skipped."
  [[ $linked -gt 0 ]] && echo "Restart Claude Code to pick up local sources."
fi
