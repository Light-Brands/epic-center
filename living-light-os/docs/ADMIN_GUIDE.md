# Living Light OS — Admin Guide

**For Living Light HQ staff managing the franchise network.**

---

## Overview

As an admin, you manage the master template, onboard new franchisees, monitor network compliance, and handle escalations. Living Light OS automates most of this, but you have manual tools for everything.

---

## Onboarding a New Franchisee

### Option 1: Admin Script (Command Line)

```bash
cd living-light-os/github/scripts

./create-franchisee-repo.sh \
  --name "Living Light Church of Austin" \
  --city "austin" \
  --state "TX" \
  --lead "Jane Smith" \
  --email "jane@example.com" \
  --github-user "janesmith"
```

This creates the repo, configures it, adds the franchisee as collaborator, and creates an onboarding checklist issue.

### Option 2: GitHub Workflow (Web UI)

1. Go to the `living-light-os` repo on GitHub
2. Navigate to Actions → "Onboard New Franchisee"
3. Click "Run workflow"
4. Fill in the church details
5. The workflow creates and configures everything

### Option 3: Admin Console (Dashboard)

1. Go to os.livinglightchurch.org/admin
2. Click "Onboard Franchisee"
3. Fill in the form
4. Submit — it triggers the GitHub workflow

### After Onboarding

1. Send the franchisee the installer link (or their repo URL)
2. Schedule an onboarding call
3. Monitor the setup checklist issue in their repo
4. Verify they access the compliance dashboard

---

## Managing Templates

The master template lives in `Light-Brands/living-light-franchisee-master`. When you update it:

### Pushing Updates to All Franchisees

```bash
cd living-light-os/github/scripts

# Sync to all franchisees (creates PRs on each repo)
./sync-templates.sh

# Sync to a specific franchisee
./sync-templates.sh --repo living-light-church-austin
```

Each franchisee repo has a `sync-upstream.yml` workflow that:
1. Checks for upstream changes daily
2. Creates a PR with the changes
3. Franchisee reviews and merges

For critical updates, you can force-merge by using the `--force` flag.

---

## Monitoring Compliance

### Network Audit

```bash
cd living-light-os/github/scripts

# Generate a full audit report
./audit-repos.sh

# Save to specific file
./audit-repos.sh --output february-2026-audit.md
```

### Admin Console

The admin console at `os.livinglightchurch.org/admin` shows:
- Network-wide compliance health
- Individual franchisee status
- Escalation queue
- Onboarding pipeline

### Automated Alerts

The network compliance scan runs daily (GitHub Actions). It:
- Checks every franchisee repo
- Identifies compliance failures
- Creates issues on failing repos
- Notifies HQ for critical failures

---

## Escalation Handling

When the compliance engine detects a problem:

| Severity | Timeline | Action |
|----------|----------|--------|
| Warning | 14 days before deadline | Dashboard notification to franchisee |
| Critical | 7 days before deadline | Email to franchisee + GitHub issue |
| Overdue | Past deadline | HQ notification + admin console flag |
| Failure | Compliance check failed | Immediate HQ notification |

### Responding to Escalations

1. Check the admin console for flagged franchisees
2. Review the specific compliance issue
3. Contact the franchisee directly if needed
4. Provide guidance or generate documents on their behalf
5. Close the issue when resolved

---

## Repository Management

### Suspending a Franchisee

If a franchisee needs to be suspended:

```bash
# Via the API (in the platform)
# POST /api/franchisees/suspend
# { "repo_name": "living-light-church-austin", "reason": "Non-compliance" }
```

This archives the repo and creates a suspension notice.

### Removing a Franchisee

1. Archive the repo
2. Remove collaborator access
3. Document in the master tracking system

---

## Key Repositories

| Repo | Purpose | You Should |
|------|---------|------------|
| `living-light-os` | This system | Update installer, compliance engine, scripts |
| `living-light-franchisee-master` | Master template | Update when templates change |
| `living-light-franchisee-template` | GitHub template | Keep in sync with master |
| `living-light-platform` | Cloud dashboard | Deploy updates to Vercel |
| `living-light-church-*` | Franchisee repos | Monitor, don't edit directly |
