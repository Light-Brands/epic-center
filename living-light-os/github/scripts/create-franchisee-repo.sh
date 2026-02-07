#!/usr/bin/env bash
set -euo pipefail

# ============================================================================
# Create Franchisee Repository
# ============================================================================
# Admin script to create and configure a new franchisee repository.
# Run from Living Light HQ (master account).
#
# Usage:
#   ./create-franchisee-repo.sh \
#     --name "Living Light Church of Austin" \
#     --city "austin" \
#     --state "TX" \
#     --lead "Jane Smith" \
#     --email "jane@example.com" \
#     --github-user "janesmith"
# ============================================================================

MASTER_TEMPLATE="Light-Brands/living-light-franchisee-template"
MASTER_ORG="Light-Brands"

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --name) CHURCH_NAME="$2"; shift 2 ;;
    --city) CITY="$2"; shift 2 ;;
    --state) STATE="$2"; shift 2 ;;
    --lead) LEAD_NAME="$2"; shift 2 ;;
    --email) LEAD_EMAIL="$2"; shift 2 ;;
    --github-user) GITHUB_USER="$2"; shift 2 ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
done

# Validate required fields
for var in CHURCH_NAME CITY STATE LEAD_NAME LEAD_EMAIL; do
  if [ -z "${!var:-}" ]; then
    echo "Error: --$(echo $var | tr '[:upper:]' '[:lower:]' | tr '_' '-') is required"
    exit 1
  fi
done

CITY_SLUG=$(echo "$CITY" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
REPO_NAME="living-light-church-${CITY_SLUG}"
DATE=$(date +%Y-%m-%d)

echo "================================================"
echo "Creating franchisee repository"
echo "================================================"
echo "Church: $CHURCH_NAME"
echo "Repo:   $MASTER_ORG/$REPO_NAME"
echo "Lead:   $LEAD_NAME ($LEAD_EMAIL)"
echo "================================================"

# Step 1: Create repo from template
echo "[1/6] Creating repository from template..."
gh repo create "$MASTER_ORG/$REPO_NAME" \
  --template "$MASTER_TEMPLATE" \
  --private \
  --description "$CHURCH_NAME — Living Light OS Managed"

sleep 3

# Step 2: Configure repository settings
echo "[2/6] Configuring repository..."
gh repo edit "$MASTER_ORG/$REPO_NAME" \
  --enable-issues \
  --enable-projects=false \
  --enable-wiki=false \
  --default-branch main

# Step 3: Set up branch protection
echo "[3/6] Setting branch protection..."
gh api "repos/$MASTER_ORG/$REPO_NAME/branches/main/protection" \
  --method PUT \
  -f "required_status_checks[strict]=true" \
  -f "required_status_checks[contexts][]=compliance" \
  -f "enforce_admins=false" \
  -f "required_pull_request_reviews=null" \
  -f "restrictions=null" \
  2>/dev/null || echo "  Branch protection configuration skipped"

# Step 4: Add franchisee as collaborator
if [ -n "${GITHUB_USER:-}" ]; then
  echo "[4/6] Adding franchisee as collaborator..."
  gh api "repos/$MASTER_ORG/$REPO_NAME/collaborators/$GITHUB_USER" \
    --method PUT \
    -f permission=admin
else
  echo "[4/6] Skipping collaborator (no --github-user provided)"
fi

# Step 5: Set repository secrets for workflows
echo "[5/6] Configuring workflow secrets..."
# Note: LIVING_LIGHT_TOKEN must be set manually or via org-level secret
echo "  Repository secrets must be configured in GitHub Settings"
echo "  Required: LIVING_LIGHT_TOKEN, LIVING_LIGHT_API_KEY"

# Step 6: Register in franchise network
echo "[6/6] Registering in franchise network..."

# Create a tracking issue
gh issue create \
  --repo "$MASTER_ORG/$REPO_NAME" \
  --title "[Living Light OS] Church Setup — $CHURCH_NAME" \
  --body "## New Church Setup

**Church:** $CHURCH_NAME
**Location:** $CITY, $STATE
**Lead:** $LEAD_NAME ($LEAD_EMAIL)
**Created:** $DATE

### Setup Checklist

- [ ] Formation documents reviewed by lead
- [ ] Legal counsel review completed
- [ ] Articles of incorporation filed with state
- [ ] EIN obtained from IRS
- [ ] Bank account opened
- [ ] Housing allowance designated (if applicable)
- [ ] First board meeting scheduled
- [ ] First worship service documented
- [ ] Compliance dashboard accessed

---
*Created by Living Light OS admin script*" \
  --label "onboarding"

echo ""
echo "================================================"
echo "DONE"
echo "================================================"
echo "Repository: https://github.com/$MASTER_ORG/$REPO_NAME"
echo ""
echo "Next steps:"
echo "  1. Share the installer link with the franchisee"
echo "  2. Schedule onboarding call"
echo "  3. Monitor setup checklist issue"
echo "================================================"
