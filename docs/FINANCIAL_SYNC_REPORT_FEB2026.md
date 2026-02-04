# Financial Sync & Villa Update Report

**Date:** February 4, 2026
**Prepared by:** Dan Lawless (Technical Lead)
**Status:** Complete — all platforms verified consistent

---

## Overview

Comprehensive update to synchronize all financial numbers across three surfaces: the investor-facing web platform (Next.js front-end), the Google Sheet financial model, and the data room documentation. Two substantive changes were made, plus a full consistency pass.

### Changes Made

| Change | Old Value | New Value | Rationale |
|--------|-----------|-----------|-----------|
| Total Villas | 36 | 48 | Updated villa program scope with proportional tier distribution |
| MOIC (Base) | 7.8x | 7.5x | Corrected to match financial model output |
| MOIC (Conservative) | 5.5x | 5.3x | Corrected to match financial model output |
| MOIC (Aggressive) | 10.0x | 9.6x | Corrected to match financial model output |

### Updated Villa Program Numbers

| Metric | Old | New |
|--------|-----|-----|
| Total Villas | 36 | 48 |
| Studio Villa (count) | 12 | 16 |
| Garden Villa (count) | 16 | 22 |
| Estate Villa (count) | 8 | 10 |
| Avg Price | $2M | $2M (unchanged) |
| Total Sales Revenue | $72M | $96M |
| Dev Fee Rate | 12.5% | 12.5% (unchanged) |
| Total Dev Fees | ~$9M | ~$12M |
| Mgmt Fee at Full Ops | $1.3M/yr | $1.7M/yr |

### Updated Villa Phasing

| Year | Sold | Built/Operational | Sales Revenue |
|------|------|-------------------|---------------|
| 1 | 8 | 6 | $16M |
| 2 | 13 | 16 | $26M |
| 3 | 16 | 32 | $32M |
| 4 | 11 | 48 | $22M |
| 5 | 0 | 48 | $0 |
| **Total** | **48** | **48** | **$96M** |

### Updated Villa Fee Income Projections

| Year | Dev Fees | Mgmt Fees | Total |
|------|----------|-----------|-------|
| 1 | $2.0M | $0.1M | $2.1M |
| 2 | $3.25M | $0.4M | $3.65M |
| 3 | $4.0M | $0.9M | $4.9M |
| 4 | $2.75M | $1.4M | $4.15M |
| 5 | $0 | $1.7M | $1.7M |

---

## Part 1: Web Platform (Front-End)

11 source files updated. Build passes with zero errors.

### Files Changed

| File | Changes |
|------|---------|
| `lib/sheets/data.ts` | Core data source — villa count, tiers, phasing, revenue, management fees |
| `lib/sheets/config.ts` | Scenario multiplier comments and ratios updated for 7.5x base MOIC |
| `app/villas/page.tsx` | Villa tiers, phasing table, fee projections, hero text, stats, totals |
| `app/expansion/page.tsx` | 6 references updated (villa count, sales, dev fees, mgmt fees, descriptive text) |
| `app/returns/page.tsx` | Value creation drivers — villa description, impact metrics |
| `app/faq/page.tsx` | 4 FAQ answers updated (ROI projections, exit strategy, villa program, villa types) |
| `app/timeline/page.tsx` | "48 villas complete" milestone text, MOIC in exit horizon section |
| `app/page.tsx` | Homepage MOIC metric card and "Explore the Pitch" nav description |
| `app/layout.tsx` | OpenGraph and Twitter meta description MOIC |
| `app/opengraph-image.tsx` | OG image MOIC metric |

---

## Part 2: Google Sheet Financial Model

Spreadsheet: `Rancho Paraiso Oasis - FINANCIAL MODEL DASHBOARD`

The Google Sheet was significantly out of date — it still referenced a static 30-room model with $10.9M acquisition price and old IRR/MOIC values. All 13 tabs were audited and 11 required updates.

### Critical Fixes

| Tab | Issue | Fix |
|-----|-------|-----|
| **Dashboard** | All key metrics stale (30 rooms, $10.9M, PASS, old IRR/MOIC) | Updated to 60 rooms, $11.9M, PROCEED, $16.8M project cost, 78%/66%/87% IRR, 7.5x/5.3x/9.6x MOIC. Full P&L summary updated. |
| **Acquisition Costs** | Grand total showing $14,953,500; cost per room $498,450 | Fixed to $16,823,500 total, $280,392/room. Budget summary rewritten with correct Use of Funds. |
| **Revenue Model** | Conservative/Aggressive scenarios broken (showing $372K instead of $8.2M) | Fixed all scenario guest counts and revenues to match front-end projections. |
| **P&L Statement** | All 5 years showed old static 30-room model | Complete rewrite — revenue, COGS, OpEx, EBITDA, D&A, net income for all 5 years from data.ts. |
| **Investment Returns** | NPV/IRR inputs used -$14,953,500; stale MOIC values | Fixed to -$16,823,500, updated all yearly cash flows, IRR 78%/66%/87%, MOIC 7.5x/5.3x/9.6x. |
| **Cash Flow** | Initial investment and financing rows used $14,953,500 | All updated to $16,823,500. Added casita expansion CapEx rows. |

### Major Fixes

| Tab | Issue | Fix |
|-----|-------|-----|
| **Operating Expenses** | Ghost "Hotel Alea Tulum" subtitle; duplicate stale $7.8M cost rows; broken break-even analysis | Property name corrected, stale rows cleared, break-even recalculated with correct $4.2M fixed costs. |
| **Assumptions** | Capacity calculations section garbled (negative numbers, misplaced values) | Rebuilt: 60 beds, 21,900 guest-days, 1,280 effective max guests. |
| **Rancho Paraiso Oasis** | Pricing fields swapped (ADR showed $26,600 instead of $2,000) | Fixed: ADR $2,000, Stay 13 days, Revenue/Guest $26,600. |
| **Property Data** | Renovation total $4M (should be $1M), Technology $50K (should be $750K), Revenue/Guest $0 | All corrected. |
| **Sensitivity** | Scenarios referenced old static model | Updated to expansion model with correct Y5 revenue, EBITDA, and IRR. |
| **Unit Economics** | Ghost "Hotel Alea Tulum" subtitle | Property name corrected. |
| **Technology Platform** | Ghost "Riviera Maya Jungle Estate" subtitle | Property name corrected. |

### Tabs Verified Clean (No Changes Required)

- Unit Economics (per-guest numbers were already correct)

---

## Part 3: Data Room Documentation

23 markdown files updated across every directory in `docs/`.

### Financial Documents (4 files)

| File | Changes |
|------|---------|
| `06-financial-projections-5-year.md` | Villa reference (36→48, $72M→$96M), project cost ($14.95M→$16.82M), MOIC |
| `08-sensitivity-analysis.md` | MOIC values, project cost |
| `09-cap-table.md` | Project cost |
| `22-valuation-report.md` | Villa count, sales, phasing table, dev fees, mgmt fees, MOIC, project cost, acquisition price |

### Investment Documents (5 files)

| File | Changes |
|------|---------|
| `01-executive-summary.md` | Project cost, MOIC, villa references |
| `02-pitch-deck.md` | Project cost, MOIC, villa count and revenue |
| `03-private-placement-memorandum.md` | Project cost, acquisition price, MOIC |
| `04-subscription-agreement.md` | Project cost |
| `05-operating-agreement.md` | Project cost |

### Property Documents (2 files)

| File | Changes |
|------|---------|
| `10-property-evaluation-matrix.md` | Acquisition price, project cost |
| `11-rancho-paraiso-oasis-assessment.md` | Acquisition price, project cost, room count |

### Research Documents (4 files)

| File | Changes |
|------|---------|
| `18-ibogaine-research-summary.md` | Project cost reference |
| `19-market-research-report.md` | Project cost reference |
| `20-competitive-landscape-analysis.md` | Project cost reference |
| `21-clinical-outcome-studies.md` | Project cost reference |

### Other Documents (8 files)

| File | Changes |
|------|---------|
| `docs/VALUATION_REPORT.md` | Villa count, sales, phasing, dev fees, mgmt fees, MOIC, project cost |
| `docs/pitch-packet/AI_VALUATION_REPORT.md` | Project cost, MOIC |
| `docs/pitch-packet/AI_VALUATION_REPORT_VISUAL.md` | Project cost, MOIC |
| `docs/web-platform/CONTENT_REQUIREMENTS.md` | Project cost, MOIC |
| `docs/web-platform/sections/06_FINANCIALS.md` | Project cost, MOIC |
| `docs/web-platform/sections/10_EXIT_STRATEGY.md` | Project cost, MOIC |
| `docs/web-platform/sections/15_INVESTOR_FAQ.md` | MOIC, villa references |
| `docs/web-platform/sections/16_INVEST.md` | Project cost |

---

## Part 4: Verification

### Automated Checks

- `npm run build` — passes with zero TypeScript/compilation errors
- Grep sweep for all stale patterns — **zero matches** across entire codebase:
  - `$14,953,500` — 0 matches
  - `$15,573,500` — 0 matches
  - `$10,900,000` — 0 matches
  - `7.8x MOIC` — 0 matches
  - `5.5x MOIC` — 0 matches
  - `10.0x MOIC` — 0 matches
  - `36 villas` — 0 matches
  - `$72M` (villa context) — 0 matches
  - `$82,140,800` — 0 matches

### Cross-Reference: Key Numbers Consistent Everywhere

| Metric | Value | Front-End | Google Sheet | Data Room |
|--------|-------|-----------|--------------|-----------|
| Total Villas | 48 | Y | Y | Y |
| Villa Sales Revenue | $96M | Y | Y | Y |
| Villa Mgmt Fee | $1.7M/yr | Y | Y | Y |
| Villa Dev Fees | ~$12M | Y | Y | Y |
| MOIC (Base) | 7.5x | Y | Y | Y |
| MOIC (Conservative) | 5.3x | Y | Y | Y |
| MOIC (Aggressive) | 9.6x | Y | Y | Y |
| IRR (Base) | 78% | Y | Y | Y |
| IRR (Conservative) | 66% | Y | Y | Y |
| IRR (Aggressive) | 87% | Y | Y | Y |
| Total Project Cost | $16,823,500 | Y | Y | Y |
| Acquisition Price | $11,900,000 | Y | Y | Y |
| Total Rooms (Full Build) | 60 | Y | Y | Y |
| Y1 Revenue | $10.7M | Y | Y | Y |
| Y5 Revenue | $35.5M | Y | Y | Y |
| 5-Year Revenue | $125.9M | Y | Y | Y |
| Y5 EBITDA | $21.5M | Y | Y | Y |
| Y5 Net Income | $14.3M | Y | Y | Y |
| Cost Per Room | $280,392 | Y | Y | Y |
| Recommendation | PROCEED | Y | Y | Y |

---

## Appendix: Canonical Financial Data

The single source of truth for all financial data is `lib/sheets/data.ts`. All other surfaces (pages, Google Sheet, data room docs) derive from this file. Any future updates should start here and propagate outward.

### Use of Funds ($16,823,500)

| Category | Amount | % |
|----------|--------|---|
| Property Acquisition | $11,900,000 | 70.7% |
| Working Capital | $1,126,000 | 6.7% |
| Renovation & Conversion | $1,000,000 | 5.9% |
| Medical + Biohacking | $1,000,000 | 5.9% |
| Contingency | $847,500 | 5.0% |
| Technology | $750,000 | 4.5% |
| Pre-Opening | $200,000 | 1.2% |

### 5-Year P&L (Base Case)

| Metric | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
|--------|--------|--------|--------|--------|--------|
| Revenue | $10.7M | $20.4M | $27.4M | $31.8M | $35.5M |
| COGS | $1.9M | $3.5M | $4.7M | $5.4M | $6.0M |
| Gross Profit | $8.9M | $17.0M | $22.8M | $26.4M | $29.4M |
| OpEx | $4.2M | $5.4M | $6.4M | $7.2M | $7.9M |
| EBITDA | $4.7M | $11.6M | $16.4M | $19.2M | $21.5M |
| Net Income | $2.8M | $7.5M | $10.8M | $12.7M | $14.3M |
| EBITDA Margin | 43% | 57% | 60% | 60% | 61% |

### Casita Phasing (30 → 60 Rooms)

| Year | Start | Added | End | Occupancy | Guests | Revenue |
|------|-------|-------|-----|-----------|--------|---------|
| 1 | 15 | +15 | 30 | 60% | 387 | $10.7M |
| 2 | 30 | +10 | 40 | 75% | 737 | $20.4M |
| 3 | 40 | +8 | 48 | 80% | 988 | $27.4M |
| 4 | 48 | +6 | 54 | 80% | 1,145 | $31.8M |
| 5 | 54 | +6 | 60 | 80% | 1,280 | $35.5M |
