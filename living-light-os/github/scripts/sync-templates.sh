#!/usr/bin/env bash
set -euo pipefail

# ============================================================================
# Sync Templates to All Franchisee Repos
# ============================================================================
# Pushes template updates from the master repo to all franchisee repos.
# Creates PRs on each franchisee repo for review.
#
# Usage: ./sync-templates.sh [--force] [--repo specific-repo-name]
# ============================================================================

MASTER_ORG="Light-Brands"
MASTER_TEMPLATE="living-light-franchisee-master"
DATE=$(date +%Y-%m-%d)

FORCE=false
SPECIFIC_REPO=""

while [[ $# -gt 0 ]]; do
  case $1 in
    --force) FORCE=true; shift ;;
    --repo) SPECIFIC_REPO="$2"; shift 2 ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
done

echo "================================================"
echo "Living Light OS — Template Sync"
echo "Date: $DATE"
echo "================================================"

# Get all franchisee repos
if [ -n "$SPECIFIC_REPO" ]; then
  REPOS=("$SPECIFIC_REPO")
else
  echo "Finding all franchisee repositories..."
  mapfile -t REPOS < <(gh repo list "$MASTER_ORG" \
    --json name \
    --jq '.[] | select(.name | startswith("living-light-church-")) | .name')
fi

echo "Found ${#REPOS[@]} franchisee repos"
echo ""

SYNCED=0
FAILED=0
SKIPPED=0

for repo in "${REPOS[@]}"; do
  FULL_REPO="$MASTER_ORG/$repo"
  echo "── Syncing: $repo ──"

  # Check if repo is accessible
  if ! gh repo view "$FULL_REPO" &>/dev/null; then
    echo "  SKIP: Repository not accessible"
    SKIPPED=$((SKIPPED + 1))
    continue
  fi

  # Trigger the sync workflow on the franchisee repo
  if gh workflow run sync-upstream.yml --repo "$FULL_REPO" 2>/dev/null; then
    echo "  OK: Sync workflow triggered"
    SYNCED=$((SYNCED + 1))
  else
    echo "  WARN: Could not trigger workflow, attempting direct sync..."

    # Fallback: create a dispatch event
    gh api "repos/$FULL_REPO/dispatches" \
      --method POST \
      -f event_type=sync-upstream \
      2>/dev/null && {
        echo "  OK: Dispatch event sent"
        SYNCED=$((SYNCED + 1))
      } || {
        echo "  FAIL: Could not sync"
        FAILED=$((FAILED + 1))
      }
  fi

  echo ""
done

echo "================================================"
echo "Sync Complete"
echo "  Synced:  $SYNCED"
echo "  Failed:  $FAILED"
echo "  Skipped: $SKIPPED"
echo "================================================"
