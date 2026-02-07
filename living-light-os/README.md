# Living Light OS

**The franchise operating system for the Church of the Living Light.**

GitHub-native. Fully automated. Zero compliance burden for franchisees.

---

## What This Is

Living Light OS is the infrastructure that powers every franchisee church in the Living Light network. It uses GitHub as the backbone — every franchisee gets their own private repository, forked from our master template, where all their formation documents, compliance records, governance materials, and operational data live.

On top of the repositories sits a cloud platform that monitors compliance, generates documents automatically, manages deadlines, and gives franchisees a single dashboard to see everything they need.

**The franchisee does their ministry. The system does everything else.**

---

## How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│                    LIGHT-BRANDS (Master Org)                     │
│                                                                  │
│  living-light-franchisee-master    ← All templates, docs, OS    │
│  living-light-os                   ← This system                │
│  living-light-platform             ← Cloud dashboard            │
│  living-light-compliance           ← Compliance engine          │
│                                                                  │
│  When we update templates, changes propagate to all franchisees │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                    GitHub Fork + Sync
                           │
┌──────────────────────────▼──────────────────────────────────────┐
│                  FRANCHISEE ACCOUNT                              │
│                                                                  │
│  living-light-church-{city}/                                    │
│  ├── formation/        ← Articles, bylaws, EIN, state filings  │
│  ├── compliance/       ← Auto-generated compliance records     │
│  ├── governance/       ← Board minutes, resolutions            │
│  ├── financials/       ← Reconciliations, compensation reviews │
│  ├── membership/       ← Rolls, ordinations, covenants         │
│  ├── programs/         ← Charitable programs, worship logs     │
│  └── .github/workflows ← Automated compliance checks          │
│                                                                  │
│  Shared with Light-Brands for oversight                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## Components

### 1. The Installer (`installer/`)

A single command that sets up everything a franchisee needs on their local machine:

```bash
curl -fsSL https://os.livinglightchurch.org/install | bash
```

What it does:
- Installs Git and GitHub CLI if not present
- Authenticates the franchisee with GitHub
- Forks the master template into their account
- Clones the repo locally
- Populates formation documents with their church details
- Sets up automated sync with the master repo
- Configures the compliance dashboard

### 2. GitHub Automation (`github/`)

GitHub Actions workflows that run on every franchisee repo:
- **Upstream sync** — pulls updates from the master template
- **Compliance checks** — validates all required documents exist and are current
- **Document deployment** — auto-files generated documents into the right folders
- **Onboarding** — runs first-time setup when a new franchisee repo is created

### 3. Compliance Engine (`compliance/`)

The brain of the system. Runs on a schedule and:
- Tracks every IRS compliance deadline
- Generates board meeting agendas and minutes templates
- Creates compensation review packages with comparable data
- Files housing allowance designations before December 31
- Reconciles bank statements when they arrive
- Scores the 14-point church test monthly
- Escalates to Living Light HQ when intervention is needed

### 4. Cloud Platform (`platform/`)

A web application deployed at `os.livinglightchurch.org` that gives franchisees:
- A compliance dashboard with real-time status
- Document viewer for all their church records
- Calendar with upcoming deadlines and actions
- Direct connection to their GitHub repository
- Communication channel to Living Light HQ

### 5. Franchisee Repo Template (`github/templates/`)

The template repository structure that every franchisee gets. Pre-populated with:
- All formation document templates (customized during install)
- Compliance checklists and schedules
- Governance templates
- Financial reporting templates
- GitHub Actions for automated maintenance

---

## The Network

```
Living Light HQ (Light-Brands)
        │
        ├── Franchisee A (living-light-church-austin)
        ├── Franchisee B (living-light-church-sedona)
        ├── Franchisee C (living-light-church-asheville)
        ├── Franchisee D (living-light-church-tulum)
        └── Franchisee N (living-light-church-{city})

Every repo is private.
Every repo is forked from the master template.
Every repo is shared with Light-Brands for oversight.
Every repo runs compliance checks automatically.
Every repo syncs updates from the master.
The cloud platform sits on top and provides the UI.
```

---

## Quick Start (Admin)

```bash
# Set up a new franchisee
./github/scripts/create-franchisee-repo.sh \
  --name "Living Light Church of Austin" \
  --city "austin" \
  --state "TX" \
  --lead "Jane Smith" \
  --email "jane@example.com"

# Sync templates to all franchisees
./github/scripts/sync-templates.sh

# Audit all franchisee repos
./github/scripts/audit-repos.sh
```

---

## Quick Start (Franchisee)

```bash
# Install everything
curl -fsSL https://os.livinglightchurch.org/install | bash

# Or download and run manually
git clone https://github.com/Light-Brands/living-light-os.git
cd living-light-os/installer
./install.sh
```

After installation, visit `os.livinglightchurch.org` to access your compliance dashboard.

---

## Architecture

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the full system architecture.

## Franchisee Guide

See [docs/FRANCHISEE_GUIDE.md](docs/FRANCHISEE_GUIDE.md) for the franchisee onboarding guide.

## Admin Guide

See [docs/ADMIN_GUIDE.md](docs/ADMIN_GUIDE.md) for the master account administration guide.
