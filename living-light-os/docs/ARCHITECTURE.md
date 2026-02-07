# Living Light OS — System Architecture

---

## Overview

Living Light OS is a GitHub-native franchise operating system. GitHub is the backbone — not just for code, but for all documents, compliance records, and governance materials. Every franchisee church operates out of a private GitHub repository that is forked from the master template and shared with Living Light HQ.

On top of the repository layer sits a cloud platform that provides a user-friendly dashboard, automated compliance checking, and document generation.

---

## Layer Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  LAYER 4: CLOUD PLATFORM                                     │
│  os.livinglightchurch.org                                    │
│                                                              │
│  - Franchisee compliance dashboard                           │
│  - Admin console for HQ                                      │
│  - API for compliance engine                                 │
│  - Notifications and escalation                              │
│  Tech: Next.js, Vercel, GitHub OAuth                         │
├─────────────────────────────────────────────────────────────┤
│  LAYER 3: COMPLIANCE ENGINE                                  │
│                                                              │
│  - Scheduled compliance checks (daily/weekly/monthly/etc)    │
│  - Document generation (board minutes, reconciliations)      │
│  - 14-point test scoring                                     │
│  - Deadline management and escalation                        │
│  Tech: TypeScript, GitHub Actions, Octokit                   │
├─────────────────────────────────────────────────────────────┤
│  LAYER 2: GITHUB AUTOMATION                                  │
│                                                              │
│  - Upstream sync (master → franchisee)                       │
│  - Compliance check workflows (run on each repo)             │
│  - Document deployment workflows                             │
│  - Onboarding automation                                     │
│  Tech: GitHub Actions, Bash, gh CLI                          │
├─────────────────────────────────────────────────────────────┤
│  LAYER 1: GITHUB REPOSITORY NETWORK                          │
│                                                              │
│  Master Org: Light-Brands                                    │
│  ├── living-light-os              (this system)              │
│  ├── living-light-franchisee-master (master template)        │
│  ├── living-light-platform        (cloud dashboard)          │
│  ├── living-light-church-austin   (franchisee)               │
│  ├── living-light-church-sedona   (franchisee)               │
│  └── living-light-church-{city}   (franchisee)               │
│                                                              │
│  Tech: Git, GitHub, Private repos                            │
└─────────────────────────────────────────────────────────────┘
```

---

## Repository Network

### Master Account (Light-Brands)

The master GitHub organization owns all system repos and has read/write access to every franchisee repo.

| Repo | Purpose |
|------|---------|
| `living-light-os` | The operating system itself — installer, compliance engine, automation scripts |
| `living-light-franchisee-master` | The master template repo — all document templates, compliance configs, workflows |
| `living-light-franchisee-template` | A GitHub template repo used to create new franchisee repos |
| `living-light-platform` | The cloud dashboard application |

### Franchisee Repos

Each franchisee gets a private repo named `living-light-church-{city}`. These repos are:

1. **Created from the template** during onboarding (fork or template copy)
2. **Shared with Light-Brands** so HQ has oversight access
3. **Synced with the master** via GitHub Actions (daily upstream check)
4. **Monitored by the compliance engine** (daily checks, document deployment)

### Data Flow

```
Master Template
      │
      │  Template updates (new docs, policy changes)
      ▼
GitHub Actions (sync-upstream.yml)
      │
      │  Creates PR on franchisee repo
      ▼
Franchisee Repo ◄──── Compliance Engine (deploys generated docs)
      │
      │  Repo data (commits, files, issues)
      ▼
Cloud Platform (reads repo data, displays dashboard)
      │
      │  Notifications, escalations
      ▼
Franchisee + HQ
```

---

## Installer Flow

```
Franchisee runs install.sh
         │
         ├── 1. Check OS, install git + gh CLI
         ├── 2. Authenticate with GitHub (OAuth)
         ├── 3. Gather church info (city, state, lead)
         ├── 4. Fork master template → franchisee account
         ├── 5. Make repo private
         ├── 6. Share repo with Light-Brands
         ├── 7. Clone repo locally
         ├── 8. Populate formation docs with church details
         ├── 9. Set up .living-light-config.json
         ├── 10. Commit and push
         └── 11. Register with cloud platform
```

---

## Compliance Engine Architecture

The compliance engine is the core intelligence of Living Light OS.

### Agent Model

```
SHEPHERD (Orchestrator)
├── STEWARD   — Financial compliance (reconciliations, tithes, budgets)
├── SCRIBE    — Document generation (minutes, reports, designations)
├── GUARDIAN  — IRS compliance (14-point test, audit procedures)
├── MINISTER  — Worship compliance (service logs, attendance)
├── HERALD    — Communications (notifications, escalations)
├── BUILDER   — Entity formation (articles, bylaws, EIN)
├── COUNSEL   — Legal compliance (state filings, policies)
├── SENTINEL  — State-specific requirements
├── DEACON    — Membership management (rolls, ordinations)
└── TITHE     — Fee calculation and reporting
```

### Execution Schedule

| Frequency | Actions |
|-----------|---------|
| Daily | Repo health check, pending actions review |
| Weekly | Worship service log verification |
| Monthly | Bank reconciliation, 14-point scoring, tithe calculation |
| Quarterly | Board meeting verification, quarterly compliance report |
| Annually | Housing allowance, compensation review, annual package, state filings |

### Escalation Chain

```
Issue Detected
      │
      ├── Auto-remediate (if possible)
      │         │
      │         └── Deploy fix to repo
      │
      ├── Notify franchisee (dashboard + email)
      │         │
      │         └── Create GitHub issue
      │
      └── Escalate to HQ (if critical or unresolved)
                │
                └── Flag in admin console
```

---

## Security Model

1. **All repos are private** — no public access
2. **GitHub OAuth** — franchisees authenticate with their GitHub account
3. **Scoped tokens** — automation uses fine-grained PATs with minimal permissions
4. **Org-level secrets** — sensitive tokens stored at org level, inherited by repos
5. **Audit trail** — all changes are git commits with author attribution
6. **Branch protection** — main branch protected, compliance checks as required status

---

## Deployment

| Component | Hosting | Domain |
|-----------|---------|--------|
| Cloud Platform | Vercel | os.livinglightchurch.org |
| Compliance Engine | GitHub Actions | (scheduled workflows) |
| Installer | GitHub Releases | os.livinglightchurch.org/install |
| Documentation | GitHub Pages | docs.livinglightchurch.org |
