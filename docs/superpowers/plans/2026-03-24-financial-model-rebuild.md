# Transformational Epicenter — Financial Model Rebuild

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the epic-center investor platform's financial model from pressure-driven (15→60 casitas in 5 years, aggressive timeline) to precision-driven (15 casitas Year 1 foundation, phased expansion to 60), update property cost to $8.0M, equity to 49%, and rewrite all narrative to match.

**Architecture:** The platform's data flows from a single source file (`lib/sheets/data.ts`) through `lib/sheets/service.ts` to ~15 consuming pages/components. The rebuild updates the data engine first, then cascades narrative changes through each page. No structural code changes — only data values and hardcoded text.

**Tech Stack:** Next.js (App Router), TypeScript, static data constants in `lib/sheets/data.ts`

---

## Change Summary

### Three Input Changes
1. **Property acquisition:** $11.9M → **$8.0M** (closing costs stay $500K → total acquisition $8.5M, was $12.4M)
2. **Investor equity:** 30% → **49%**
3. **Casita phasing:** Aggressive → **Precision-driven foundation-first**

### Derived Changes (Everything Below Flows From the Three Inputs)

**New Total Project Cost:**
- Property Acquisition: $8,000,000 + $500,000 closing = **$8,500,000** (was $12,400,000)
- Working Capital: $1,126,000 (unchanged)
- Renovation & Conversion: $1,000,000 (unchanged)
- Medical + Biohacking: $1,000,000 (unchanged)
- Contingency: $847,500 (kept at original amount — now 6.3% of new total, providing stronger risk coverage)
- Technology: $750,000 (unchanged)
- Pre-Opening: $200,000 (unchanged)
- **NEW TOTAL: ~$13,423,500** (was $17,323,500 — a $3.9M reduction)

**New Casita Phasing:**
| Year | Start | Added | End | Effective Avg | Occupancy | Guests |
|------|-------|-------|-----|---------------|-----------|--------|
| 1 | 15 | 0 | 15 | 15 | 60% | 253 |
| 2 | 15 | 15 | 30 | 23 | 70% | 440 |
| 3 | 30 | 15 | 45 | 38 | 75% | 780 |
| 4 | 45 | 8 | 53 | 49 | 80% | 1,073 |
| 5 | 53 | 7 | 60 | 57 | 80% | 1,248 |

**Guest calculation:** effective avg rooms × 365 days / 13-day avg stay × occupancy rate

**Key differences from current model:**
- Year 1: 253 guests (was 379) — 15 casitas only, no expansion during Year 1
- Year 2: 440 guests (was 720) — expanding from 15→30, lower occupancy during ramp
- Year 3: 780 guests (was 966) — expanding 30→45
- Year 4-5: Approaches similar levels as current model as capacity nears 60

**New Villa Phasing (slower, aligned with operational maturity):**
| Year | Villas Sold | Built & Operational | Sales Revenue |
|------|------------|---------------------|---------------|
| 1 | 0 | 0 | $0 |
| 2 | 4 | 2 | $8,000,000 |
| 3 | 10 | 10 | $20,000,000 |
| 4 | 16 | 28 | $32,000,000 |
| 5 | 18 | 48 | $36,000,000 |
| **TOTAL** | **48** | **48** | **$96,000,000** |

**Key difference:** No villa sales in Year 1 (focus on proving the operating model). Sales ramp starting Year 2, heavier in Years 4-5 when the brand and demand are proven.

---

## File Impact Map

### Primary (data engine — change once, cascades everywhere)
- **Modify:** `lib/sheets/data.ts` — ALL financial constants
- **Modify:** `lib/sheets/property-details.ts` — PROPERTY_FINANCIALS (guestsPerYear, revenuePotential)
- **Modify:** `lib/sheets/service.ts` — Only if calculation logic changes (likely minimal)
- **Modify:** `types/financial.ts` — Only if new types needed (unlikely)

### Secondary (pages with hardcoded values referencing $12.4M, 30%, $17.3M, or timeline text)
- **Modify:** `app/overview/page.tsx` — Executive summary metrics, narrative text
- **Modify:** `app/offer/page.tsx` — Deal terms (30% → 49%), investment amount, entity structure
- **Modify:** `app/offer/thank-you/page.tsx` — May reference deal terms
- **Modify:** `app/financials/page.tsx` — P&L narrative, phase descriptions
- **Modify:** `app/timeline/page.tsx` — Milestone dates, descriptions, phasing
- **Modify:** `app/model/page.tsx` — Business model narrative, entity references
- **Modify:** `app/villas/page.tsx` — Villa phasing table, narrative
- **Modify:** `app/technology/page.tsx` — Data/patient record projections
- **Modify:** `app/technology/data/page.tsx` — Clinical data references (verify 30% is clinical, not equity)
- **Modify:** `app/invest/page.tsx` — Investment CTA page, may reference deal terms
- **Modify:** `app/properties/page.tsx` — Property acquisition cost
- **Modify:** `app/properties/[slug]/page.tsx` — Property detail page
- **Modify:** `app/legal/page.tsx` — Legal entity references
- **Modify:** `app/page.tsx` — Hero metrics if any
- **Modify:** `app/layout.tsx` — If it references $17.3M
- **Modify:** `app/opengraph-image.tsx` — If it bakes in financial claims
- **Modify:** `app/faq/page.tsx` — If FAQ answers reference old numbers
- **Modify:** `app/moat/page.tsx` — If competitive advantage text references capital
- **Modify:** `app/market/page.tsx` — If market page references deal terms
- **Review (no change expected):** `app/counsel/page.tsx` — Contains "30%" but refers to Mexican tax rate, NOT investor equity
- **Review (no change expected):** `app/technology/data/page.tsx` — Contains "20-30%" but refers to clinical response rates

### Tertiary (components that read from data layer — auto-update)
- `components/overview/ScenarioTable.tsx` — Reads from data, auto-updates
- `components/overview/FundsChart.tsx` — Reads from data, auto-updates
- `components/charts/RevenueChart.tsx` — Reads from data, auto-updates
- `components/charts/UseOfFundsChart.tsx` — Reads from data, auto-updates
- `components/property/PropertyFinancialSummary.tsx` — Reads PROPERTY_FINANCIALS, auto-updates after Task 1
- `components/property/PropertyCard.tsx` — Reads from data, auto-updates
- `components/property/ComparisonMatrix.tsx` — Reads from data, auto-updates

---

## Tasks

### Task 1: Update Core Financial Constants — Property & Project Cost

**Files:**
- Modify: `lib/sheets/data.ts:64-87` (PROPERTIES)
- Modify: `lib/sheets/data.ts:89-111` (DASHBOARD_METRICS)
- Modify: `lib/sheets/data.ts:430-440` (USE_OF_FUNDS)
- Modify: `lib/sheets/data.ts:459-562` (BUSINESS_UNITS — Real Estate description hardcodes "$12.4M")
- Modify: `lib/sheets/data.ts:666-672` (RE_BASE_VALUE and related constants)
- Modify: `lib/sheets/property-details.ts:48-56` (PROPERTY_FINANCIALS — guestsPerYear, revenuePotential)

**What changes:**
- `PROPERTIES[0].acquisition.askingPrice`: 11900000 → 8000000
- `PROPERTIES[0].acquisition.negotiatedPrice`: 11900000 → 8000000
- `PROPERTIES[0].acquisition.closingCosts`: 500000 (unchanged)
- `PROPERTIES[0].acquisition.totalAcquisitionCost`: 12400000 → 8500000
- `DASHBOARD_METRICS.keyMetrics.acquisitionPrice`: 11900000 → 8000000
- `DASHBOARD_METRICS.keyMetrics.totalProjectCost`: 17323500 → 13423500
- `DASHBOARD_METRICS.keyMetrics.costPerRoom`: recalculate (13423500 / 60 = 223725)
- `USE_OF_FUNDS[0]` (Property Acquisition): amount 12400000 → 8500000, percentage recalculate, description update
- All USE_OF_FUNDS percentages: recalculate against new $13,423,500 total
- `RE_BASE_VALUE`: 12400000 → 8500000
- `BUSINESS_UNITS[1].description`: "$12.4M" → "$8.5M"
- `PROPERTY_FINANCIALS.guestsPerYear`: update to match new Y5 capacity (1248 base)
- `PROPERTY_FINANCIALS.revenuePotential`: update to match new Y5 revenue projections

- [ ] **Step 1:** Update PROPERTIES acquisition values
- [ ] **Step 2:** Update DASHBOARD_METRICS totalProjectCost, acquisitionPrice, costPerRoom
- [ ] **Step 3:** Update USE_OF_FUNDS — new property amount, recalculate all percentages against $13,423,500
- [ ] **Step 4:** Update RE_BASE_VALUE constant to 8500000
- [ ] **Step 5:** Update BUSINESS_UNITS Real Estate description from "$12.4M" to "$8.5M"
- [ ] **Step 6:** Update PROPERTY_FINANCIALS in `lib/sheets/property-details.ts` — guestsPerYear and revenuePotential to match new model
- [ ] **Step 7:** Verify the file compiles: `cd clients/light-brands/epic-center && npx tsc --noEmit --pretty 2>&1 | head -20`
- [ ] **Step 8:** Commit: `feat: update property cost to $8M, total project to $13.4M`

---

### Task 2: Update Casita Phasing — Foundation-First Model

**Files:**
- Modify: `lib/sheets/data.ts:25-37` (CASITA_PHASING)

**New values:**
```typescript
export const CASITA_PHASING = {
  years: [
    { year: 1, startRooms: 15, added: 0,  endRooms: 15, effectiveAvgRooms: 15, occupancy: 0.60, guests: 253 },
    { year: 2, startRooms: 15, added: 15, endRooms: 30, effectiveAvgRooms: 23, occupancy: 0.70, guests: 440 },
    { year: 3, startRooms: 30, added: 15, endRooms: 45, effectiveAvgRooms: 38, occupancy: 0.75, guests: 780 },
    { year: 4, startRooms: 45, added: 8,  endRooms: 53, effectiveAvgRooms: 49, occupancy: 0.80, guests: 1073 },
    { year: 5, startRooms: 53, added: 7,  endRooms: 60, effectiveAvgRooms: 57, occupancy: 0.80, guests: 1248 },
  ],
  totalCapacity: 60,
  buildCostPerCasita: 225000,
  totalExpansionCost: 10125000, // 45 additional casitas × $225K
  fundedFrom: 'Operating cash flow (no additional equity raise)',
}
```

**Guest calculation notes:**
- Y1: 15 rooms × 365 / 13 × 0.60 = 252.7 ≈ 253
- Y2: 23 rooms × 365 / 13 × 0.70 = 452.0 → use 440 (conservative, accounts for ramp)
- Y3: 38 rooms × 365 / 13 × 0.75 = 800.8 → use 780 (conservative)
- Y4: 49 rooms × 365 / 13 × 0.80 = 1100.9 → use 1073
- Y5: 57 rooms × 365 / 13 × 0.80 = 1280.3 → use 1248

**Expansion cost note:** Total expansion cost rises from $6.75M (old: 30 additional casitas) to $10.125M (new: 45 additional casitas from base of 15). This is $3.375M more that must be funded from operating cash flow. With lower Y1 EBITDA (~$1.1M vs $4M), expansion funding shifts to Years 2-4 when cash flow strengthens. The math works because no expansion capital is needed until Year 2, when cumulative operating cash flow should cover the first 15-casita tranche (~$3.375M).

- [ ] **Step 1:** Replace CASITA_PHASING with new precision-driven values
- [ ] **Step 2:** Update the file header comment to reflect new phasing: "15→60 rooms over 5 years, Year 1 foundation (15 only)"
- [ ] **Step 3:** Verify compile
- [ ] **Step 4:** Commit: `feat: update casita phasing to foundation-first model (15 Y1, 30 Y2, 45 Y3, 53 Y4, 60 Y5)`

---

### Task 3: Recalculate Revenue Projections

**Files:**
- Modify: `lib/sheets/data.ts:117-171` (REVENUE_PROJECTIONS + REVENUE_CHART_DATA)

**Methodology:**
Revenue per guest at base: $26,600 (program) + add-ons at maturity (+28% = $34,048)
- Year 1: Add-ons ramp at ~50% of maturity rate (no post-care subs yet)
- Year 2: Add-ons at ~75% of maturity
- Years 3-5: Full maturity add-on rates

**New base case revenue by year:**
- Y1: 253 guests × ~$30,900 blended = ~$7,818,000 (reduced from $11.7M)
- Y2: 440 guests × ~$32,500 blended = ~$14,300,000 (reduced from $24.5M)
- Y3: 780 guests × ~$34,048 = ~$26,557,000 (reduced from $32.9M)
- Y4: 1073 guests × ~$34,048 = ~$36,543,000 (close to current $38.1M)
- Y5: 1248 guests × ~$34,048 = ~$42,492,000 (close to current $42.6M)

**Conservative = base × 0.83 | Aggressive = base × 1.17** (same spread as current model)

The executor should recalculate each line item (programRevenue, bioOptPremium, etc.) using the guest counts from Task 2 and the per-guest economics from UNIT_ECONOMICS (unchanged).

- [ ] **Step 1:** Calculate new base revenue for each year using new guest counts × per-guest revenue components
- [ ] **Step 2:** Calculate conservative (×0.83) and aggressive (×1.17) for each component
- [ ] **Step 3:** Replace REVENUE_PROJECTIONS array with new values
- [ ] **Step 4:** Replace REVENUE_CHART_DATA with matching totals
- [ ] **Step 5:** Update DASHBOARD_METRICS.keyMetrics.revenue with new Y1/Y3/Y5/5YrTotal values
- [ ] **Step 6:** Update DASHBOARD_METRICS.keyMetrics.projectIRR and fiveYearMOIC (recalculate after Task 4)
- [ ] **Step 7:** Verify compile
- [ ] **Step 8:** Commit: `feat: recalculate revenue projections for precision-phased model`

---

### Task 4: Recalculate P&L Statements

**Files:**
- Modify: `lib/sheets/data.ts:179-340` (PL_STATEMENTS)

**Methodology:**
- Revenue: from Task 3
- COGS: scale proportionally with guest count (variable cost per guest unchanged at $4,629)
- OpEx: stays fixed at $5,944,120 Y1, inflating 4%/yr (unchanged — operating leverage)
- D&A: $677,143/yr unchanged for Y1-Y2 (15 casitas). Add ~$225K D&A when Phase 2 casitas come online (Y2+)
- Interest: $0 (equity funded, unchanged)
- Tax: 30% of EBT

**Key differences in new model:**
- Year 1 EBITDA will be LOWER (~$1.1M vs $4.0M) because revenue is ~$7.8M vs $11.7M with same fixed costs
- Year 1 may show small EBITDA margin (~14%) — this is expected and honest
- EBITDA margins expand MORE dramatically from Y1→Y5 (14% → 68%), which actually tells a better story about operating leverage
- Year 5 P&L should be nearly identical to current since guest count is similar

- [ ] **Step 1:** Recalculate Y1 P&L with ~$7.8M revenue, $1.17M COGS (253 × $4,629), $5.94M OpEx
- [ ] **Step 2:** Recalculate Y2-Y5 P&L following same methodology
- [ ] **Step 3:** Replace PL_STATEMENTS array
- [ ] **Step 4:** Verify EBITDA margins make sense: Y1 ~14%, Y2 ~35%, Y3 ~55%, Y4 ~65%, Y5 ~68%
- [ ] **Step 5:** Verify compile
- [ ] **Step 6:** Commit: `feat: recalculate P&L for precision-phased revenue curve`

---

### Task 5: Recalculate Investment Returns & Valuation

**Files:**
- Modify: `lib/sheets/data.ts:372-428` (INVESTMENT_RETURNS)
- Modify: `lib/sheets/data.ts:459-562` (BUSINESS_UNITS)
- Modify: `lib/sheets/data.ts:564-638` (ENTERPRISE_VALUATION)
- Modify: `lib/sheets/data.ts:674-751` (INVESTOR_OFFER_PROJECTIONS)

**Investment Returns:**
- totalCapitalRequired: 17323500 → **13423500**
- equityInvestment: 17323500 → **13423500**
- Recalculate yearlyReturns using new net income from Task 4
- Recalculate NPV at 10%, 12%, 15%
- Recalculate IRR and MOIC with new values
- **Note:** Lower capital base + similar Y5 numbers = potentially BETTER IRR/MOIC story

**Business Units:**
- Healing Center: update yearlyRevenue and yearlyEBITDA arrays from Tasks 3-4
- Real Estate: update standaloneValue (RE_BASE_VALUE is now $8.5M, so Y5 appreciated values change)
- Property Management: update yearlyRevenue/EBITDA based on new villa phasing (Task 6)
- Technology: update standaloneValue (cumulative guests change)

**Enterprise Valuation:**
- Recalculate sumOfPartsValue from updated business units
- Recalculate 9-method weighted average with new inputs
- **The weighted post-money valuation will change** — this affects the "30% for $17.3M" implied pre-money

**Investor Offer:**
- `investorEquityPercent`: 0.30 → **0.49**
- All investor equity calculations: multiply by 0.49 instead of 0.30
- **CRITICAL:** Lines 728-730 of `data.ts` hardcode `* 0.30` in the `investorEquity` computation instead of referencing `investorEquityPercent`. These must ALSO be updated to `* 0.49` (or refactored to use the constant). Without this fix, the investor equity projections will silently remain at 30% despite the constant saying 49%.

- [ ] **Step 1:** Update INVESTMENT_RETURNS with new capital base and recalculated returns
- [ ] **Step 2:** Update Healing Center business unit yearly arrays
- [ ] **Step 3:** Update Real Estate business unit with new RE_BASE_VALUE appreciation
- [ ] **Step 4:** Update Technology business unit with new cumulative guest counts
- [ ] **Step 5:** Recalculate ENTERPRISE_VALUATION sumOfPartsValue and 9-method values
- [ ] **Step 6:** Update INVESTOR_OFFER_PROJECTIONS.investorEquityPercent to 0.49
- [ ] **Step 7:** **CRITICAL:** Update hardcoded `* 0.30` on lines 728-730 to `* 0.49` (or better: refactor to use the `investorEquityPercent` variable)
- [ ] **Step 8:** Update DASHBOARD_METRICS.keyMetrics.projectIRR and fiveYearMOIC
- [ ] **Step 9:** Verify compile
- [ ] **Step 10:** Commit: `feat: recalculate valuation and returns for $13.4M raise at 49% equity`

**NOTE:** Task 5 Step 4 (Property Management) depends on Task 6 (villa phasing). Execute Task 6 first, then return to update Property Management business unit values in Task 5.

---

### Task 6: Update Villa Program Phasing

**Files:**
- Modify: `lib/sheets/data.ts:39-62` (VILLA_MODEL)
- Modify: `lib/sheets/data.ts:442-457` (VILLA_PROGRAM_FINANCIALS)

**New villa phasing (slower, market-absorption aligned):**
```typescript
phasing: [
  { year: 1, villasSold: 0, builtOperational: 0, salesRevenue: 0 },
  { year: 2, villasSold: 4, builtOperational: 2, salesRevenue: 8000000 },
  { year: 3, villasSold: 10, builtOperational: 10, salesRevenue: 20000000 },
  { year: 4, villasSold: 16, builtOperational: 28, salesRevenue: 32000000 },
  { year: 5, villasSold: 18, builtOperational: 48, salesRevenue: 36000000 },
]
```

**Recalculate:**
- Development fees: 12.5% of sales per year
- Management fees: 25% of rental revenue (based on built & operational villas)
- VILLA_PROGRAM_FINANCIALS yearly array with all derived values
- CONSOLIDATED_PL_STATEMENTS will auto-update (it's computed from VILLA_PROGRAM_FINANCIALS)

- [ ] **Step 1:** Update VILLA_MODEL.phasing array
- [ ] **Step 2:** Recalculate VILLA_PROGRAM_FINANCIALS yearly array (dev fees, mgmt fees, rental revenue)
- [ ] **Step 3:** Verify CONSOLIDATED_PL_STATEMENTS computation still works
- [ ] **Step 4:** Verify compile
- [ ] **Step 5:** Commit: `feat: update villa phasing — no Y1 sales, gradual ramp aligned with ops maturity`

---

### Task 7: Update Overview Page Narrative

**Files:**
- Modify: `app/overview/page.tsx`

**Changes needed:**
- Update any hardcoded `$12.4M` → `$8.5M` or `$8.0M`
- Update any `$17.3M` references → `$13.4M`
- Update `30%` equity references → `49%`
- Update narrative text about phasing — emphasize "foundation year" (15 casitas, no expansion)
- Update any hardcoded revenue/EBITDA figures
- Update "Investment Highlights" to reflect precision-driven narrative

**Narrative shift:** The overview should tell the story of building from strength — Year 1 is about proving the model at 15 casitas, not racing to 30. Lower capital requirement ($13.4M vs $17.3M) is a feature, not a bug — it means less dilution risk and a more capital-efficient structure.

- [ ] **Step 1:** Read full `app/overview/page.tsx` to identify all hardcoded values
- [ ] **Step 2:** Update all dollar amounts and percentages
- [ ] **Step 3:** Rewrite phase descriptions to emphasize foundation-first approach
- [ ] **Step 4:** Verify the page renders: `npm run build 2>&1 | tail -5` (or dev server)
- [ ] **Step 5:** Commit: `content: update overview narrative for precision-phased model`

---

### Task 8: Update Offer Page — Deal Terms

**Files:**
- Modify: `app/offer/page.tsx`
- Modify: `app/offer/thank-you/page.tsx`

**This is the most critical narrative page.** Changes:
- Investment amount: $17,323,500 → **$13,423,500**
- Equity percentage: 30% → **49%**
- All investor share calculations: 30% → 49%
- Entity structure descriptions if they reference old numbers
- Implied pre-money valuation changes (new: $13.4M / 49% = ~$27.4M post-money, ~$14.0M pre-money)
- Investor's Y5 value: 49% of new enterprise value (recalculated)
- MOIC and IRR: use new values from Task 5

**Narrative shift:** 49% equity is a significantly more generous offer than 30%. The story should frame this as: we're offering a true partnership — nearly half the enterprise for the capital that makes it real. Combined with lower capital requirement, this is a more aligned deal.

- [ ] **Step 1:** Read full `app/offer/page.tsx`
- [ ] **Step 2:** Search for numeric literals: `12400000`, `17323500`, `11900000`, `0.30` — these are hardcoded values that look like data references but are raw numbers
- [ ] **Step 3:** Update all deal terms: amount, equity %, entity references
- [ ] **Step 4:** **CRITICAL:** Lines ~319, 351, 383 hardcode `* 0.30` for investor equity share — change to `* 0.49` (or ideally read from `INVESTOR_OFFER_PROJECTIONS.investorEquityPercent`)
- [ ] **Step 5:** Rewrite investor value propositions with new numbers
- [ ] **Step 6:** Check `app/offer/thank-you/page.tsx` for any deal term references
- [ ] **Step 7:** Commit: `content: update offer page — 49% equity at $13.4M`

---

### Task 9: Update Timeline Page — Foundation-First Milestones

**Files:**
- Modify: `app/timeline/page.tsx:18-110` (MILESTONES array)

**Key changes:**
- Seed round: "$17.3M" → "$13.4M"
- Remove "Phase 1 Expansion (+15 Casitas)" from Q3-Q4 2026 — Year 1 is 15 casitas ONLY
- Update "30-Casita Capacity" milestone to later (Year 2)
- Add new milestones:
  - "Foundation Year Complete" (Q4 2026) — 15 casitas proven, occupancy validated
  - "Phase 2 Expansion" (2027) — expand 15→30
  - "Phase 3 Expansion" (2028) — expand 30→45
- Adjust villa milestones: no Y1 villa sales
- Year 5 target stays at 60 casitas

**Narrative shift:** Year 1 milestones should emphasize operational excellence, not construction speed. The timeline tells a story of intentional growth.

- [ ] **Step 1:** Read full `app/timeline/page.tsx`
- [ ] **Step 2:** Rewrite MILESTONES array with foundation-first phasing
- [ ] **Step 3:** Update any narrative text on the page
- [ ] **Step 4:** Commit: `content: rewrite timeline for foundation-first phased expansion`

---

### Task 10: Update Financials Page Narrative

**Files:**
- Modify: `app/financials/page.tsx`

**Changes:**
- Hardcoded text about phases, expansion timing, revenue targets
- Any inline dollar amounts that don't come from the data layer
- Phase descriptions and commentary
- Operating leverage narrative (now even more compelling — Y1 EBITDA ~14% → Y5 ~68%)

- [ ] **Step 1:** Read full `app/financials/page.tsx`
- [ ] **Step 2:** Update all hardcoded values and narrative text
- [ ] **Step 3:** Commit: `content: update financials page narrative for new model`

---

### Task 11: Update Model, Villas, and Technology Pages

**Files:**
- Modify: `app/model/page.tsx` — entity structure, $12.4M references
- Modify: `app/villas/page.tsx` — villa phasing table, 30% equity references
- Modify: `app/technology/page.tsx` — patient record projections, data premium calculations

- [ ] **Step 1:** Read and update `app/model/page.tsx` — entity descriptions, dollar amounts
- [ ] **Step 2:** Read and update `app/villas/page.tsx` — villa timeline, deal terms
- [ ] **Step 3:** Read and update `app/technology/page.tsx` — cumulative guest projections, data value
- [ ] **Step 4:** Commit: `content: update model, villas, and technology pages for new financials`

---

### Task 12: Update Remaining Pages (Properties, Legal, FAQ, Moat, Homepage, Invest, Market)

**Files:**
- Modify: `app/properties/page.tsx` — acquisition cost
- Modify: `app/properties/[slug]/page.tsx` — property detail page
- Modify: `app/invest/page.tsx` — investment CTA page
- Modify: `app/legal/page.tsx` — entity/equity references
- Modify: `app/faq/page.tsx` — FAQ answers with old numbers
- Modify: `app/moat/page.tsx` — capital requirement references
- Modify: `app/market/page.tsx` — market page deal term references
- Modify: `app/page.tsx` — hero section metrics
- Modify: `app/layout.tsx` — any nav/footer references
- Modify: `app/opengraph-image.tsx` — OG image text
- Review (no change): `app/counsel/page.tsx` — "30%" here is Mexican corporate tax rate, NOT investor equity
- Review (no change): `app/technology/data/page.tsx` — "20-30%" here is clinical response rate, NOT investor equity

**SAFETY WARNING:** When searching for `0.30` or `30%`, distinguish between:
- **Investor equity (CHANGE):** "30% equity", "investor receives 30%", `* 0.30`
- **Tax rate (DO NOT CHANGE):** "30% tax", "30% on margin", tax calculation `* 0.30`
- **Clinical data (DO NOT CHANGE):** "20-30% response rate"

The `app/overview/page.tsx` line ~152 contains `0.30` as a TAX RATE — do NOT change to 0.49.

- [ ] **Step 1:** Grep each file for `17323|17.3|12400|12.4|11900|11.9|0\.30` and update (distinguishing tax vs equity)
- [ ] **Step 2:** Read `app/invest/page.tsx` for deal term references and update
- [ ] **Step 3:** Read FAQ page for financial claim answers and update
- [ ] **Step 4:** Update OG image text if it bakes in numbers
- [ ] **Step 5:** Verify `app/counsel/page.tsx` — confirm "30%" is tax rate, leave unchanged
- [ ] **Step 6:** Commit: `content: update remaining pages for new financial model`

---

### Task 13: Full Build Verification

**Files:** None (verification only)

- [ ] **Step 1:** Run full TypeScript check: `npx tsc --noEmit`
- [ ] **Step 2:** Run build: `npm run build`
- [ ] **Step 3:** Start dev server and visually verify key pages load: overview, financials, offer, timeline
- [ ] **Step 4:** Verify scenario toggle (conservative/base/aggressive) works on financials page
- [ ] **Step 5:** Spot-check: search entire `app/` directory for any remaining old values: `grep -r "17323\|12400\|11900\|0\.30" app/`
- [ ] **Step 6:** Commit any fixes found
- [ ] **Step 7:** Final commit: `chore: verify full build — financial model rebuild complete`

---

## Execution Notes

**Order matters:** Tasks 1-6 must be done first (data engine). Tasks 7-12 can be parallelized (narrative pages). Task 13 is final verification.

**Critical dependency chain:**
```
Task 1 (property cost) → Task 2 (casita phasing) → Task 3 (revenue) → Task 4 (P&L) → Task 6 (villas) → Task 5 (valuation — needs villa data)
                                                                                                                    ↓
                                                                                              Tasks 7-12 (narrative pages, parallelizable)
                                                                                                                    ↓
                                                                                                          Task 13 (verification)
```

**Note:** Task 6 (villas) should execute BEFORE Task 5 (valuation) because the Property Management business unit values in Task 5 depend on the villa phasing from Task 6.

**Math validation:** After Tasks 1-6, the executor should verify:
- 5-year cumulative revenue (base) is roughly $127M (down from $149.8M)
- Year 5 revenue is close to current (~$42M) since Y5 capacity is similar
- Year 1 revenue is ~$7.8M (down from $11.7M)
- Total project cost is $13,423,500
- Investor's 49% of Y5 enterprise value should still be a compelling multiple on $13.4M

**Narrative principles for all page updates:**
1. "Foundation year" — Year 1 is about proving, not growing
2. "Precision over pressure" — we scale when we're ready, not when the model says to
3. "Capital efficient" — $13.4M is less capital at risk, more aligned with execution reality
4. "True partnership" — 49% equity means the investor is a genuine co-owner
5. "Same destination, smarter path" — Year 5 still reaches 60 casitas and similar revenue
