# AGENTS.md — Transformational Epicenter (TEC)

Canonical operating rules for AI agents working in this repo. Read before any edit.

## What this is

`transformational-epicenter` is a **single-purpose Next.js 14 marketing/investor site** for a luxury medical retreat in Mexico (plant-medicine + bio-optimization + trauma integration). The site is the deal package: it carries the pitch narrative, the data room, the financial model, and the bridge-loan term sheet that the Light Brands team sends to capital sources.

It is a **fundraising surface, not a product**. There is no backend, no auth, no database, no user accounts. Everything is statically rendered from in-repo data.

The repo is **currently in lender-pivot mode**: the Jeff partnership offer was killed (see `docs/offering/epicenter-jeff-partnership-offer-2026-04-07.md`), and active work is the **$10M senior secured bridge loan** package targeted at Pablo and other HMLs (`/pablo` route, `docs/offering/bridge-loan/`).

## Stack (concrete)

- **Next.js 14.2.21 App Router** + React 18 + TypeScript (strict)
- **Tailwind CSS** (custom config at `tailwind.config.ts`) + `clsx` + `tailwind-merge` (merge helper at `lib/utils/cn.ts`)
- **Animation:** `framer-motion` (primary), `gsap` + `@gsap/react` (one-off scroll work), `@react-three/fiber` + `@react-three/drei` + `three` (3D scenes)
- **Charts:** `recharts`. **Icons:** `lucide-react`. **Diagrams:** `mermaid`. **Markdown:** `react-markdown` + `remark-gfm`.
- **Image generation tooling:** `@google/generative-ai` (Imagen, in `lib/imagen/` — used at dev time, never at request time)
- **PDF generation:** `md-to-pdf` (data-room PDFs, see scripts)
- **Hosting:** Vercel (`vercel.json` defines security headers; `.vercelignore` strips mobile/api/admin source dirs and most docs at deploy)
- **Node:** >= 18

## Where things live (purpose-keyed)

```
app/                     Next.js routes — every subfolder = page; all 'use client'
  page.tsx               Home (~48KB, monolithic) — main pitch landing
  layout.tsx             Root layout. Wraps in <ScenarioProvider> + <VaultProvider>
  pablo/page.tsx         **ACTIVE** — Pablo bridge-loan pitch ($10M, 9%, 36mo)
  offer/                 Legacy Jeff partnership offer page (dead deal, kept for reference)
  data-room/             Investor data room view — reads PDFs from public/documents/
  invest/, financials/, model/, market/, moat/, outcomes/,
  overview/, properties/, story/, team/, technology/,
  timeline/, villas/, expansion/, faq/, risks/,
  legal/, counsel/, virtual-tour/   Pitch deck pages
  opengraph-image.tsx    OG image generator
  manifest.ts            PWA manifest

components/
  ui/                    Button, Card, primitives
  layout/                Header (global nav), Footer
  financial/             MetricCard etc. — pulls from lib/sheets/data
  charts/                Recharts wrappers
  property/, gallery/    Property/villa visuals
  animation/             Framer + GSAP scroll/intersection helpers
  pwa/                   ServiceWorkerRegistration, AppleSplashLinks (iOS PWA)
  auth/, video/, moat/, overview/

lib/
  sheets/                **Financial model lives here** — NOT a Google Sheets API call
    config.ts            SPREADSHEET_ID + RANGES (legacy, model is in data.ts)
    data.ts              32KB of hardcoded financial data: scenarios, P&L, returns, properties
    service.ts           Accessor functions: getScenarioPLStatements(), getScenarioInvestmentReturns(), formatCurrency(), etc.
    property-details.ts  Per-property metadata
  context/
    ScenarioContext.tsx  conservative | base | aggressive — drives every financial number
    VaultContext.tsx     Data-room access gate
  imagen/                Dev-time Imagen generators (NOT runtime). One file per asset batch.
  utils/cn.ts            clsx + tailwind-merge

scripts/                 .mjs build helpers
  build-data-room.mjs    md-to-pdf: docs/data-room/**/*.md → public/documents/**/*.pdf
  generate-pwa-icons.mjs, generate-splash-screens.mjs, optimize-gallery.mjs

docs/
  data-room/             Source MD for investor data room — built into PDFs
  offering/bridge-loan/  **ACTIVE** — bridge loan term sheet, one-pager, comps, lender outreach
  offering/InvestOS/, Compliance/, Pricing/, Strategy/
  segments/, programs/   Eight-segments + program docs (background context)
  architecture/          Aspirational system docs (no code yet — see "Gotchas")
  market-research/, expansion-research/, quintana-roo/, costa-rica/, tax-structure/
  founder-interview-talk-track.md, EXECUTIVE_SUMMARY.md, VALUATION_REPORT.md
  CITIZENSHIP_STRATEGY.md, DAN_ACTION_ITEMS.md

design/                  Brand guidelines, design system docs (markdown)
public/
  documents/{financial,investment}/  Generated PDFs (output of build-data-room)
  videos/, gallery-optimized/, splash/, icons/
  *.mp4 / *.webm         Several large hero/footer background videos (38MB each)
  sw.js                  PWA service worker

types/                   Financial type defs (Scenario, PLStatement, etc.)

_archive/                Old code — IGNORED in tsconfig
living-light-os/         Submodule-ish thing — IGNORED in tsconfig, do not touch
imagen-icon-generator/   Standalone helper repo, not part of build
.ai-coding-config/       Git submodule (TechNickAI's tooling) — do not edit
```

## Current focus (per `git log`)

1. **Bridge loan package** is the live work. Recent 15+ commits all bridge-loan-related: term sheet refinement, valuation, comps, lender outreach.
2. The repo pivoted **2026-04-13** from Jeff partnership to bridge loan (`f4a0479 feat: pivot from Jeff partnership to bridge loan acquisition`).
3. **Privacy work:** Chief Medical Advisor anonymized across data room and site (commits `410d5c9`, `88d95fd`). Julien Leblanc removed from team. Eyob → Joe McVeen as Head of Marketing.
4. **Framing rule** (per `c5274a7`): TEC is the sponsor raising; Light Brands is the facilitator. Do not invert.
5. **Live financial inputs** (per recent commits): $10M principal, 9% p.a., 36mo bullet, Year 1 interest deferred to month 12, fideicomiso assignment structure, $11.9M market value collateral framing.

## Conventions (real patterns observed)

- **Every `app/*/page.tsx` is `'use client'`.** No server components, no server actions, no API routes. The site is effectively SPA-shaped but SSG-rendered.
- **Path alias:** `@/*` maps to repo root. `@/components`, `@/lib`, `@/types` all work. Import via aliases, not relative paths from deep files.
- **Financial numbers come from `lib/sheets/data.ts` accessed via `lib/sheets/service.ts` accessors**, NOT from a live Google Sheets fetch despite the directory name. The Sheets ID and ranges in `config.ts` are vestigial — pages read scenario-aware values via `getScenarioPLStatements(scenario)` etc.
- **Scenario state is global** via `ScenarioContext` (conservative/base/aggressive). Any new financial component must read scenario from context and call `getScenarioValue()` or a scenario-aware accessor.
- **Animation pattern:** `framer-motion` `motion.div` with `initial`/`animate`/`transition`, often using `useInView({ once: true, amount: X })`. The `fadeUp` const at top of `app/pablo/page.tsx` is the standard.
- **Currency formatting:** use `formatCurrency()` / `formatCurrencyFull()` from `lib/sheets/service.ts`. Do not roll new ones.
- **Brand tokens:** `--primary: #1F483A` (deep green), `--accent: #D4724D` (terracotta), `--secondary: #D4A63B` (gold), `--canvas: #FDFBF7` (cream). Header bg `#1A3A3A`. Tailwind classes like `bg-primary-800`, `text-secondary-400`, `bg-canvas` are configured in `tailwind.config.ts`.
- **Typography:** `font-display` = Libre Baskerville (serif headings), `font-accent` = Source Sans 3 (uppercase labels), body = Source Sans 3.
- **Data room PDFs are built locally**, committed to `public/documents/`, then served statically. The build is `npm run build:data-room` — run this when `docs/data-room/**/*.md` changes.
- **Images optimization is OFF** (`next.config.js`: `images: { unoptimized: true }`). Use `<Image>` but expect it to behave like `<img>`. Large hero videos are pre-encoded `.mp4`/`.webm` in `public/`.
- **Security headers** are set in `vercel.json` (X-Frame-Options DENY, nosniff, etc.). Do not duplicate in `next.config.js`.

## Gotchas

- **`docs/architecture/*.md` describes a HIPAA-compliant AWS/NestJS/PostgreSQL backend platform. None of that exists in this repo.** It is aspirational design from the original "Phase 0 Foundation" planning. The repo is just the marketing/pitch site. Do not assume any backend code lives here. The same applies to `ARCHITECT.md` references to `/src/web`, `/src/mobile`, `/src/api`, `/src/admin` — those directories were planned but never created.
- **`.vercelignore` strips `src/mobile`, `src/api`, `src/admin`, `src/shared` at deploy.** Even if you create them, they will not deploy. The site = `app/` + `components/` + `lib/`.
- **PWA is wired up** (`manifest.ts`, `components/pwa/ServiceWorkerRegistration.tsx`, `public/sw.js`, splash screens). Treat as live. Bumping versions requires regenerating splash/icons via `scripts/generate-pwa-icons.mjs` and `generate-splash-screens.mjs`.
- **`lib/imagen/*` files import `@google/generative-ai` and require `GOOGLE_API_KEY`.** They are dev-time generation scripts, not runtime code. Do not import them from `app/` or `components/`. They will not run on Vercel.
- **`/offer` page is a dead deal** (Jeff partnership). Kept for reference and link integrity. Do not refactor as if it's live; do not delete without checking outbound links.
- **`/pablo` is the live lender pitch.** Numbers there must match `docs/offering/bridge-loan/BRIDGE_LOAN_TERM_SHEET.md` exactly. If you change one, change both.
- **`ARCHITECT.md` and the `Phase 0 Foundation` framing in `README.md` are stale** (versioned "December 2024", "January 2025"). Treat them as historical context, not current state. Recent commits supersede.
- **Submodule:** `.ai-coding-config` (TechNickAI/ai-coding-config) is a git submodule. The OLD `AGENTS.md` was for that submodule's project, not this one — that's the artifact this file replaces.
- **`_archive/` and `living-light-os/` are excluded from tsconfig.** Do not refactor through them.
- **Repo lives inside QIE Client Hub** (`clients/light-brands/epic-center/`). The `_qie` symlink in this dir is gitignored and points to QIE intelligence at the hub root. Never commit it. See QIE root `CLAUDE.md` for hub-level rules.

## Don'ts

- **Do not add a backend, database, or auth here.** The aspirational `docs/architecture/` is a separate future product. This repo stays a static marketing/investor site.
- **Do not run `npm run build:data-room` casually** — it spawns Puppeteer (via `md-to-pdf`) and writes binary PDFs into `public/`. Only run when source MD changed and PDFs need refresh, then commit the PDF deltas.
- **Do not import from `lib/imagen/`** in `app/` or `components/`. Runtime use will fail on Vercel and leak the API key concept.
- **Do not invert the framing.** TEC is the sponsor raising; Light Brands is the facilitator. The bridge loan is to TEC, not to Light Brands.
- **Do not change deal numbers in only one place.** The `/pablo` page, `BRIDGE_LOAN_TERM_SHEET.md`, `ONE_PAGER.md`, and `LENDER_OUTREACH_EMAIL.md` must agree. Currently: $10M, 9% p.a., 36mo, Year 1 interest deferred to month 12, $11.9M valuation, fideicomiso assignment, 14-day close, 6-month prepayment makewhole.
- **Do not stage `_archive/`, `living-light-os/`, `node_modules/`, `.next/`, or any generated `tsconfig.tsbuildinfo`.**
- **Do not edit `.ai-coding-config/`** — submodule, upstream-owned.
- **Do not re-add Julien Leblanc or Eyob Mebrahtu to the team page** — they were intentionally removed.
- **Do not name the Chief Medical Advisor.** Anonymization is intentional (commits `410d5c9`, `88d95fd`).

## Secrets

- **`GOOGLE_API_KEY`** — required by `lib/imagen/*` (dev-time only). Store in `.env.local`, never commit. `.env*` is gitignored.
- **`.config/gcp/`** — gitignored, do not stage.
- No other runtime secrets. The site has no API surface.

## Build / dev

- `npm run dev` — Next dev server (port 3000)
- `npm run build` — production build (TS strict, no relaxed flags)
- `npm run lint` — `next lint`
- `npm run build:data-room` — regenerate PDFs from `docs/data-room/`
- No test runner is configured. There are no tests. Do not pretend there are.
