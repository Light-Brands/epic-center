# Living Light Platform

**The cloud compliance dashboard for the Living Light franchise network.**

Deployed at `os.livinglightchurch.org`

---

## What This Is

The Living Light Platform is a web application that sits on top of the GitHub repository network and provides:

1. **Franchisee Dashboard** — Real-time compliance status, 14-point test score, upcoming deadlines, document viewer
2. **Admin Console** — Network-wide audit view, franchisee management, template updates, escalation handling
3. **API Layer** — Connects the compliance engine to franchisee repos, handles webhooks, manages notifications

## Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                    LIVING LIGHT PLATFORM                      │
│                  os.livinglightchurch.org                     │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────────┐  │
│  │  Dashboard   │  │  Admin       │  │  API               │  │
│  │  (Next.js)   │  │  Console     │  │  (Next.js API)     │  │
│  │              │  │  (Next.js)   │  │                    │  │
│  │  - Status    │  │              │  │  /api/compliance   │  │
│  │  - Calendar  │  │  - Network   │  │  /api/franchisees  │  │
│  │  - Documents │  │  - Audit     │  │  /api/documents    │  │
│  │  - Actions   │  │  - Onboard   │  │  /api/webhooks     │  │
│  └──────┬───────┘  └──────┬───────┘  └────────┬───────────┘  │
│         │                 │                    │              │
│  ┌──────▼─────────────────▼────────────────────▼───────────┐ │
│  │                   GitHub API (Octokit)                    │ │
│  │                                                          │ │
│  │  Reads/writes franchisee repos                           │ │
│  │  Triggers workflows                                      │ │
│  │  Manages collaborators                                   │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                               │
├──────────────────────────────────────────────────────────────┤
│  Auth: GitHub OAuth (franchisees log in with their GitHub)   │
│  Hosting: Vercel                                             │
│  Database: Vercel Postgres (for caching/notifications)       │
└──────────────────────────────────────────────────────────────┘
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Auth:** GitHub OAuth via NextAuth.js
- **GitHub Integration:** Octokit
- **Database:** Vercel Postgres
- **Hosting:** Vercel
- **Styling:** Tailwind CSS (matches Living Light design system)

## Key Screens

### Franchisee Dashboard
- Compliance score (overall + 14-point)
- Calendar with upcoming deadlines
- Recent compliance actions
- Document browser (reads from GitHub repo)
- Action items requiring attention

### Admin Console
- Network health overview (all franchisees)
- Onboard new franchisee (triggers GitHub workflow)
- Push template updates
- Compliance escalation queue
- Audit history

## API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/api/compliance/status` | GET | Current compliance status for authenticated church |
| `/api/compliance/score` | GET | 14-point test score |
| `/api/compliance/report` | GET | Latest compliance report |
| `/api/franchisees` | GET | List all franchisees (admin only) |
| `/api/franchisees/onboard` | POST | Onboard new franchisee |
| `/api/documents/list` | GET | List documents in franchisee repo |
| `/api/documents/[path]` | GET | Read specific document |
| `/api/webhooks/github` | POST | Handle GitHub webhooks |
| `/api/notifications` | GET | Pending notifications |
