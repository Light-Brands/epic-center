# Light Brands AI — Cyprus Studio: The Substance Layer

> **Status:** Definitive structure addition — requires Cyprus corporate counsel validation
> **Last Updated:** February 15, 2026
> **Scope:** Addition of a Cyprus-based development studio to the Light Brands AI corporate architecture. Four entities total.
> **Modifies:** [14-LIGHT-BRANDS-AI-CORPORATE-SETUP.md](./14-LIGHT-BRANDS-AI-CORPORATE-SETUP.md)
> **Decision:** This is the chosen structure. CI IBC + Cyprus Studio dual-entity model.

---

## Table of Contents

1. [Why a Fourth Entity](#1-why-a-fourth-entity)
2. [Updated Architecture](#2-updated-architecture)
3. [Entity Detail: Light Brands Studio Ltd (Cyprus)](#3-entity-detail)
4. [Role of Each Entity](#4-role-of-each-entity)
5. [Revenue Flow & Tax Waterfall](#5-revenue-flow)
6. [Transfer Pricing Framework](#6-transfer-pricing)
7. [Tax Projections at Scale](#7-tax-projections)
8. [Cyprus Founder's Position](#8-cyprus-founder)
9. [Banking & Payments](#9-banking)
10. [IP Ownership](#10-ip-ownership)
11. [Team Structure](#11-team-structure)
12. [Annual Cost Analysis](#12-cost-analysis)
13. [Formation Roadmap](#13-formation-roadmap)
14. [Risk Analysis](#14-risk-analysis)
15. [Open Questions for Counsel](#15-open-questions)

---

## 1. Why a Fourth Entity {#1-why-a-fourth-entity}

Doc 14 designed a 3-entity structure (PIF → S.A. → CI IBC) with zero employees, zero office, and zero substance. That works legally in the Cook Islands — there are no substance requirements for CI IBCs.

**But the real world doesn't stop at Cook Islands law.**

### The Substance Problem

| Threat | Description | Likelihood |
|--------|-------------|------------|
| **Client jurisdiction PE claims** | A client's tax authority looks at invoices from a Cook Islands entity with zero employees and argues the work was actually performed in their country | Medium-High at scale |
| **Banking friction** | Banks increasingly refuse or restrict accounts for CI IBCs with no substance — especially as revenue grows into millions | High |
| **Contractor country PE creation** | If 5+ developers work from the same country, that country may argue CI IBC has a permanent establishment there | Medium |
| **Reputational risk** | Enterprise clients may hesitate to contract with a Cook Islands entity for large engagements | Medium |
| **Payment processor scrutiny** | Stripe, PayPal, and others apply enhanced scrutiny to offshore entities with no physical presence | Medium |

### What Substance Looks Like

A structure has "substance" when the entity that books the revenue can point to:

- **Real people** doing real work
- **A real office** where decisions are made
- **Real management** making real decisions in-country
- **Proportionality** between what's claimed and what exists

### The Solution: Split Consulting from Development

Instead of one CI IBC doing everything, split into two entities with distinct, genuine roles:

| Entity | Role | Has Substance? |
|--------|------|---------------|
| **LB Consulting (CI IBC)** | Client-facing. Wins engagements, owns relationships, owns IP, bears risk | No — but doesn't claim to do the dev work |
| **LB Studio (Cyprus)** | Development. Employs the team, runs the office, delivers the work | **Yes — ironclad** |

The CI IBC doesn't need substance because it's a **principal entity** that contracts all delivery to a real development shop. It's not pretending to have developers in the Cook Islands. It owns the client relationships, the IP, and the risk. The actual work happens in Cyprus, where there's a real office with real people managed by a real director who is a Cyprus citizen living in Cyprus.

**This is how thousands of legitimate multinationals operate.** The principal sits in a favorable jurisdiction; the delivery center sits where the talent is.

---

## 2. Updated Architecture {#2-updated-architecture}

### Four Entities. Clean Split.

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  LAYER 1: ASSET PROTECTION + OWNERSHIP                               │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │              FUNDACIÓN LIGHT BRANDS                           │   │
│  │              (Panama Private Interest Foundation)              │   │
│  │                                                               │   │
│  │  Independent legal person — no "owner"                        │   │
│  │  Beneficiaries: Dan + other non-US founders                   │   │
│  │  Tax: 0% on all foreign income                                │   │
│  │  Asset + divorce protection: Panama Law 25 of 1995            │   │
│  └────────────────────────┬──────────────────────────────────────┘   │
│                           │ 100%                                      │
│                           ▼                                           │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │         LIGHT BRANDS HOLDINGS S.A.                            │   │
│  │         (Panamanian Corporation)                               │   │
│  │                                                               │   │
│  │  Holds Dan's equity in both CI IBC and Cyprus Studio          │   │
│  │  Tax: 0% on foreign-source income (territorial)               │   │
│  │  Layer 2 of asset protection                                  │   │
│  └──────────┬──────────────────────────────────┬─────────────────┘   │
│             │ Dan's 30%                        │ Dan's 30%            │
│             ▼                                  ▼                      │
│  LAYER 2: REVENUE + DELIVERY                                         │
│                                                                      │
│  ┌────────────────────────────┐   ┌──────────────────────────────┐  │
│  │  LIGHT BRANDS AI LTD       │   │  LIGHT BRANDS STUDIO LTD     │  │
│  │  (Cook Islands IBC)        │   │  (Cyprus Private Company)     │  │
│  │  "THE BRAIN"               │   │  "THE HANDS"                  │  │
│  │                            │   │                               │  │
│  │  • Client-facing           │   │  • Development delivery       │  │
│  │  • Owns IP + methodology   │──►│  • Real office in Cyprus      │  │
│  │  • Bears credit risk       │   │  • Real employees (devs)      │  │
│  │  • Invoices clients        │   │  • Andreas Demou = Director   │  │
│  │  • Contracts dev to Cyprus │   │  • Cost-plus pricing          │  │
│  │  • 0% tax                  │   │  • 15% tax on margin only     │  │
│  │                            │   │                               │  │
│  │  Shareholders:             │   │  Shareholders:                │  │
│  │  Dan 30% (via S.A.)        │   │  Dan 30% (via S.A.)           │  │
│  │  Nicholas 25% (direct)     │   │  Nicholas 25% (direct)        │  │
│  │  Andreas 25% (direct)      │   │  Andreas 25% (direct)         │  │
│  │  Jason 20% (direct)        │   │  Jason 20% (direct)           │  │
│  └────────────────────────────┘   └──────────────────────────────┘  │
│                                                                      │
│  LAYER 3: PEOPLE                                                     │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  Dan — Director of CI IBC. Client relationships. Strategy.    │   │
│  │  Andreas — Director of Cyprus Studio. Runs the office.        │   │
│  │  Nicholas — Co-founder. [Role TBD]                            │   │
│  │  Jason — Co-founder. [Role TBD — US citizen considerations]   │   │
│  │  Wife — Contractor to CI IBC (US citizen, FEIE)               │   │
│  │  Dev team — Employees of Cyprus Studio + some contractors     │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### From Three to Four: What Changed

| Doc 14 (3 entities) | This doc (4 entities) | Why |
|---------------------|----------------------|-----|
| CI IBC does everything | CI IBC = consulting brain | Separate concern |
| No office, no employees | Cyprus Studio = dev shop | Substance |
| All contractors paid by CI IBC | Developers employed by Cyprus Studio | Real employment = real substance |
| One entity, one bank account | Two entities, two bank accounts | Clean separation of functions |
| Zero substance | Ironclad substance | Bulletproof against PE claims |

---

## 3. Entity Detail: Light Brands Studio Ltd (Cyprus) {#3-entity-detail}

### Formation

| Attribute | Detail |
|-----------|--------|
| **Legal form** | Cyprus Private Company Limited by Shares (Ltd) |
| **Governing law** | Cyprus Companies Law, Cap. 113 |
| **Registered office** | Physical office in Cyprus (Limassol or Nicosia) |
| **Director** | Andreas Demou (Cyprus citizen, resident) |
| **Secretary** | Required under Cyprus law — can be a local service provider |
| **Shareholders** | Mirror CI IBC: Dan 30% (via S.A.), Nicholas 25%, Andreas 25%, Jason 20% |
| **Share capital** | EUR 1,000 minimum (standard) |
| **Auditor** | Required — must appoint licensed Cyprus auditor |
| **Financial year** | Calendar year (January-December) |

### What It Does

The Cyprus Studio has one job: **deliver development work under contract to LB Consulting (CI IBC).**

| Function | Detail |
|----------|--------|
| Software development | Build what clients need, under contract from CI IBC |
| Employs developers | Real employment contracts, Cyprus payroll, social insurance |
| Office operations | Physical office, equipment, infrastructure |
| Quality assurance | Testing, code review, delivery standards |
| Project management | Day-to-day delivery coordination |
| Technical architecture | System design, technology decisions for delivery |

### What It Does NOT Do

| Not This | Why |
|----------|-----|
| Client-facing sales | CI IBC owns client relationships |
| Invoicing clients | CI IBC issues all client invoices |
| Owning IP | CI IBC owns all IP (Cyprus develops under work-for-hire) |
| Strategic decisions | CI IBC board makes business strategy decisions |
| Bearing credit risk | CI IBC bears client non-payment risk |
| Marketing | CI IBC handles all business development |

### Tax Treatment

| Item | Rate |
|------|------|
| Corporate tax rate | **15%** |
| Taxable base | **Margin only** (revenue from CI IBC minus costs) |
| Cost-plus markup | **8-12%** (arm's length, benchmarked) |
| Effective rate on total group revenue | **~0.75-1.2%** |
| VAT | 0% on B2B services to non-EU entity (CI IBC) — reverse charge |
| Withholding tax on dividends to non-residents | **0%** (Cyprus does not impose WHT on dividend distributions) |
| Withholding tax on service payments FROM CI IBC | **0%** (Cook Islands imposes no WHT) |

---

## 4. Role of Each Entity {#4-role-of-each-entity}

### Clean Separation of Functions

| Function | CI IBC (The Brain) | Cyprus Studio (The Hands) |
|----------|-------------------|--------------------------|
| Client acquisition | **Yes** | No |
| Client contracts | **Signs all contracts** | No |
| Client invoicing | **Yes** | No |
| Revenue collection | **Yes** | No (receives payment from CI IBC) |
| IP ownership | **Owns all IP** | Develops under contract |
| Strategic decisions | **Board decides strategy** | Executes delivery |
| Credit risk | **Bears all client risk** | No client exposure |
| Development work | Contracts to Cyprus | **Does all dev work** |
| Employment | No employees | **Employs developers** |
| Office | No office | **Real office in Cyprus** |
| Day-to-day management | Dan (remote) | **Andreas (in Cyprus)** |

### Why This Split Is Defensible

**The CI IBC is a genuine principal entity.** It bears the entrepreneurial risk:
- If a client doesn't pay → CI IBC absorbs the loss
- If a project fails → CI IBC bears the reputational and financial cost
- If IP becomes valuable → CI IBC owns the upside
- If the market shifts → CI IBC decides strategy

**The Cyprus Studio is a genuine service provider.** It delivers predictable work:
- It gets paid cost-plus regardless of client outcomes
- It doesn't bear client risk
- It doesn't own the IP it creates
- It has a guaranteed revenue stream from CI IBC

This is the OECD-standard **principal/routine service provider** model. It is the most commonly used and most thoroughly documented transfer pricing arrangement in international business.

---

## 5. Revenue Flow & Tax Waterfall {#5-revenue-flow}

### How Money Moves

```
CLIENTS
   │
   │ pay for consulting / SaaS / products
   ▼
LB CONSULTING (CI IBC) ◄─── collects 100% of revenue
   │                         0% tax on everything
   │
   ├──► Pays Cyprus Studio (cost-plus 10%)
   │    Dev services contract
   │         │
   │         ▼
   │    CYPRUS STUDIO
   │    ├── Pays developer salaries
   │    ├── Pays office costs
   │    ├── Pays overhead
   │    ├── Keeps 10% margin
   │    └── Pays 15% Cyprus tax on margin
   │
   ├──► Pays Dan (director/contractor fee)
   │
   ├──► Pays Wife (contractor, FEIE-eligible)
   │
   ├──► Pays other direct costs (SaaS tools, hosting, etc.)
   │
   └──► Retains profit (0% tax)
            │
            ▼
        Distributes to shareholders
        ├── Dan's 30% → S.A. (0%) → PIF (0%) → Dan (0%)
        ├── Nicholas 25% → direct (taxed per his residence)
        ├── Andreas 25% → direct (~7.65% Cyprus SDC+GESY)
        └── Jason 20% → direct (US tax obligations)
```

### Example: $3M Annual Revenue

| Line Item | Amount |
|-----------|--------|
| **Client revenue** | **$3,000,000** |
| | |
| **Payments to Cyprus Studio** | |
| Developer salaries (8 devs × $80K avg) | $640,000 |
| Office rent + utilities | $36,000 |
| Equipment + software | $24,000 |
| Cyprus social insurance (employer ~12%) | $76,800 |
| Other overhead | $23,200 |
| **Total Studio costs** | **$800,000** |
| **Studio markup (10%)** | **$80,000** |
| **Total CI IBC pays Studio** | **$880,000** |
| | |
| **CI IBC direct costs** | |
| Dan (director fee) | $200,000 |
| Wife (contractor) | $130,000 |
| Other contractors (not in Cyprus) | $150,000 |
| SaaS tools, hosting, infrastructure | $60,000 |
| Legal, accounting, compliance | $80,000 |
| **Total CI IBC direct costs** | **$620,000** |
| | |
| **Total costs** | **$1,500,000** |
| **CI IBC profit** | **$1,500,000** |
| **CI IBC tax** | **$0** |
| | |
| **Cyprus Studio tax (15% × $80K margin)** | **$12,000** |
| | |
| **TOTAL TAX ON $3M REVENUE** | **$12,000 (0.4%)** |

---

## 6. Transfer Pricing Framework {#6-transfer-pricing}

### The Contract

CI IBC and Cyprus Studio enter a **Master Development Services Agreement (MDSA):**

| Clause | Detail |
|--------|--------|
| **Scope** | Cyprus Studio provides software development, QA, project management, and technical services to CI IBC |
| **Pricing** | Cost-plus methodology: Studio's actual costs + 10% markup |
| **Cost base** | All direct and indirect costs: salaries, rent, equipment, social insurance, overhead |
| **Invoicing** | Monthly, based on actual costs incurred + markup |
| **IP assignment** | All work product created by Studio is automatically assigned to CI IBC |
| **Term** | Ongoing, reviewed annually |
| **Benchmarking** | Markup reviewed annually against comparable transactions |

### Why Cost-Plus 8-12% Is Defensible

The OECD Transfer Pricing Guidelines (Chapter II) specify the **Cost Plus Method (CPM)** as appropriate for:
- Service activities
- Manufacturing/assembly operations
- **Routine service providers** like captive development centers

Comparable markups for captive software development centers globally:

| Region | Typical Cost-Plus Range | Source |
|--------|------------------------|--------|
| India captive centers | 8-15% | Big 4 benchmarking studies |
| Eastern Europe captive centers | 8-14% | EU comparable databases |
| Southeast Asia captive centers | 7-12% | OECD comparable data |
| **Cyprus (our target)** | **8-12%** | Within all comparable ranges |

A 10% markup is squarely in the middle of every benchmarking database. No tax authority will successfully challenge a 10% cost-plus for a captive development center.

### Transfer Pricing Documentation

Cyprus requires transfer pricing documentation for related-party transactions. Required files:

1. **Master File** — Group overview, business description, intercompany transactions
2. **Local File** — Cyprus Studio-specific: functions, assets, risks (FAR analysis), comparable search, pricing methodology
3. **Country-by-Country Report** — If group revenue exceeds EUR 750M (not applicable now, but required at scale)

**Cost to prepare:** $8,000-$12,000 initially, $3,000-$5,000/year to maintain.

### FAR Analysis (Functions, Assets, Risks)

| | CI IBC (Principal) | Cyprus Studio (Service Provider) |
|---|---|---|
| **Functions** | Client acquisition, strategic decisions, IP management, risk bearing, invoicing | Development, QA, project management, office operations |
| **Assets** | IP (all), client contracts, brand, methodology | Equipment, office lease, trained workforce |
| **Risks** | Client non-payment, project failure, market risk, IP risk | Limited — guaranteed cost-plus payment from CI IBC |
| **Profit allocation** | Residual profit (high, variable) | Cost-plus return (low, predictable) |

This FAR analysis supports the principal/service provider model. The entity bearing more functions, assets, and risks (CI IBC) earns the residual profit. The entity with limited risk (Cyprus Studio) earns a routine return.

---

## 7. Tax Projections at Scale {#7-tax-projections}

### Revenue Growth Model

| Year | Revenue | Studio Costs | Studio Markup (10%) | Cyprus Tax (15%) | CI IBC Profit | CI IBC Tax | **Total Tax** | **Effective Rate** |
|------|---------|-------------|--------------------|--------------------|---------------|-----------|-------------|-------------------|
| 1 | $1,000,000 | $400,000 | $40,000 | $6,000 | $360,000 | $0 | **$6,000** | **0.6%** |
| 2 | $2,000,000 | $600,000 | $60,000 | $9,000 | $1,040,000 | $0 | **$9,000** | **0.45%** |
| 3 | $3,000,000 | $800,000 | $80,000 | $12,000 | $1,500,000 | $0 | **$12,000** | **0.4%** |
| 4 | $5,000,000 | $1,200,000 | $120,000 | $18,000 | $2,480,000 | $0 | **$18,000** | **0.36%** |
| 5 | $8,000,000 | $1,800,000 | $180,000 | $27,000 | $3,920,000 | $0 | **$27,000** | **0.34%** |

**The effective rate decreases as revenue scales** because the Studio's costs grow slower than revenue. The CI IBC retains an increasing share of profit at 0%.

### Founder Distribution Tax

After entity-level tax, distributions to founders are taxed personally:

| Founder | Share | On $1.5M Profit (Y3) | Personal Tax | Net Received |
|---------|-------|----------------------|-------------|-------------|
| **Dan** (Grenada, via PIF) | 30% | $450,000 | 0% | $450,000 |
| **Nicholas** | 25% | $375,000 | Per residence | Varies |
| **Andreas** (Cyprus, deemed domiciled) | 25% | $375,000 | ~7.65% (SDC+GESY) | ~$346,300 |
| **Jason** (US citizen) | 20% | $300,000 | US rates (~25-35%) | ~$195,000-$225,000 |

---

## 8. Cyprus Founder's Position {#8-cyprus-founder}

Andreas Demou wears two hats in this structure.

### Hat 1: Director of Cyprus Studio

| Item | Detail |
|------|--------|
| **Role** | Executive Director — runs the Cyprus office, manages team, oversees delivery |
| **Employment** | Employment contract with Cyprus Studio |
| **Salary** | Market-rate director salary (EUR 60,000-120,000 depending on scale) |
| **Tax on salary** | Cyprus progressive rates (0% on first EUR 19,500, then 20-35%) |
| **Social insurance** | Employee contribution ~8.3%, employer ~12% (capped) |

### Hat 2: Shareholder of CI IBC (25% direct)

| Item | Detail |
|------|--------|
| **Ownership** | 25% of CI IBC shares held directly (not through PIF) |
| **Dividends** | CI IBC distributes profits → Andreas receives 25% |
| **Tax on dividends** | 5% SDC + 2.65% GESY = **~7.65%** (deemed domiciled) |
| **GESY cap** | EUR 180,000 income → max EUR 4,770/year GESY |

### Hat 3: Shareholder of Cyprus Studio (25% direct)

| Item | Detail |
|------|--------|
| **Ownership** | 25% of Cyprus Studio shares held directly |
| **Dividends from Studio** | Minimal — Studio operates at cost-plus, retains little profit |
| **Tax on Studio dividends** | Same: 5% SDC + 2.65% GESY |

### Optimal Personal Tax Strategy for Andreas

| Income Source | Amount (Y3 example) | Tax Treatment | Tax |
|---------------|---------------------|--------------|-----|
| Studio salary | EUR 80,000 | Progressive (effective ~15%) | ~EUR 12,000 |
| CI IBC dividends (25% of $1.5M) | ~EUR 345,000 | 5% SDC + 2.65% GESY (capped) | ~EUR 21,990 |
| Studio dividends | Minimal | 7.65% | Minimal |
| **Total on ~EUR 425,000** | | | **~EUR 34,000 (8%)** |

### 90-Day Rule Optimization (Optional)

If Andreas spends 90+ days per year working outside Cyprus (business travel, conferences, visiting Dan, etc.), his salary from a non-resident employer would be exempt. But since his employer IS a Cyprus company (Studio), the 90-day overseas employment exemption does not apply to his Studio salary.

**However:** If Andreas also performs consulting services for CI IBC directly (a non-resident employer), that income qualifies for the 90-day exemption if the work is done outside Cyprus.

**Strategy:** Andreas takes a modest Studio salary (covers Cyprus living) and larger CI IBC dividends (7.65%). The salary covers day-to-day; dividends are the wealth channel.

---

## 9. Banking & Payments {#9-banking}

### CI IBC Banking (unchanged from Doc 14)

| Bank | Purpose | Status |
|------|---------|--------|
| Singapore bank (DBS/OCBC/Statrys) | Primary — client payments in, contractor payments out | Primary |
| Wise Business | Multi-currency payments to contractors | Secondary |
| Stripe | SaaS/product revenue collection | Revenue |

### Cyprus Studio Banking

| Bank | Purpose | Notes |
|------|---------|-------|
| Cyprus bank (Bank of Cyprus / Hellenic Bank) | Primary — payroll, office costs, local operations | EU bank, full SEPA access |
| EUR account | Developer salaries, office rent, local costs | Main operating account |
| USD account (optional) | Receive payments from CI IBC in USD | Avoids FX on intercompany flow |

### Payment Flow

```
Clients → CI IBC Singapore bank (revenue)
               │
               ├──► Monthly transfer to Cyprus Studio (EUR)
               │         │
               │         └──► Developer salaries (Cyprus payroll)
               │         └──► Office costs
               │         └──► Equipment/tools
               │
               ├──► Wise → Dan (director fee)
               ├──► Wise → Wife (contractor)
               ├──► Wise → Other contractors
               └──► Retained in Singapore (profit)
```

---

## 10. IP Ownership {#10-ip-ownership}

### All IP Stays with CI IBC

| IP Type | Owner | Developed By | Mechanism |
|---------|-------|-------------|-----------|
| Software code | CI IBC | Cyprus Studio | Work-for-hire under MDSA |
| Client deliverables | CI IBC | Cyprus Studio | Work-for-hire under MDSA |
| SaaS platforms | CI IBC | Cyprus Studio | Work-for-hire under MDSA |
| AI models | CI IBC | Cyprus Studio | Work-for-hire under MDSA |
| Consulting methodology | CI IBC | Dan + team | Created within CI IBC scope |
| Brand / trademarks | CI IBC | N/A | Registered by CI IBC |
| Client relationships | CI IBC | Dan | Built through CI IBC contracts |

### IP Assignment Clause in MDSA

The Master Development Services Agreement contains an explicit IP assignment:

> All intellectual property, including but not limited to software, code, designs, architectures, algorithms, documentation, and derivative works created by Studio in the performance of services under this Agreement shall be the sole and exclusive property of the Company [CI IBC]. Studio hereby assigns all rights, title, and interest in such intellectual property to the Company upon creation.

This is standard for captive development centers. The developer shop does the work; the principal owns what's created. Cyprus employment law supports this — employer-created IP belongs to the employer's client when contracted.

### Why NOT Cyprus IP Box

Cyprus has an IP Box regime (effective ~2.5% on qualifying IP income). We are NOT using it because:

1. IP Box requires the IP to be owned by the Cyprus entity
2. Moving IP to Cyprus increases Cyprus's taxable base dramatically
3. The cost-plus model (0.4% effective) beats the IP Box (2.5% effective)
4. IP Box adds complexity and transfer pricing risk

**The cost-plus model is simpler and cheaper. Don't overcomplicate it.**

---

## 11. Team Structure {#11-team-structure}

### Who Is Where

| Person | Entity | Relationship | Location |
|--------|--------|-------------|----------|
| **Dan** | CI IBC | Director + contractor | Traveling (Grenada citizen) |
| **Andreas** | Cyprus Studio | Director + employee | Cyprus |
| **Nicholas** | CI IBC / Studio | Co-founder, [role TBD] | [TBD] |
| **Jason** | CI IBC | Co-founder, [role TBD] | US |
| **Wife** | CI IBC | Contractor | Abroad (FEIE) |
| **Developers (Cyprus-based)** | Cyprus Studio | Employees | Cyprus |
| **Developers (elsewhere)** | CI IBC | Contractors via Deel | Worldwide |
| **Designers, specialists** | CI IBC | Contractors | Worldwide |

### Employee vs. Contractor Decision

| Person | Employed by Studio? | Why |
|--------|-------------------|-----|
| Cyprus-based developers | **Yes** | Real employment = real substance. This is the whole point. |
| Andreas | **Yes** | Director + employee of his own company. Lives in Cyprus. |
| Remote developers (non-Cyprus) | **No — CI IBC contractors** | No connection to Cyprus. Paid directly by CI IBC via Deel/Wise. |
| Dan | **No — CI IBC contractor** | Not in Cyprus. No reason to route through Studio. |
| Wife | **No — CI IBC contractor** | US citizen using FEIE. CI IBC contract is cleaner. |

### Scaling the Team

| Phase | Cyprus Studio Headcount | CI IBC Contractors | Notes |
|-------|------------------------|-------------------|-------|
| Launch (Y1) | 2-4 developers + Andreas | 3-5 contractors | Minimum viable substance |
| Growth (Y2) | 5-8 developers + Andreas | 5-8 contractors | Scaling delivery |
| Scale (Y3+) | 8-15 developers + Andreas + PM | 8-15 contractors | Full operation |

**Hiring in Cyprus is strategically advantageous:**
- Cyprus has a growing tech talent pool (especially Limassol)
- EU employment law applies (strong worker protections = legitimate substance)
- Competitive salaries compared to Western Europe (~EUR 30-50K for mid-level devs)
- English widely spoken in Cyprus tech sector
- Andreas is on the ground to recruit and manage

---

## 12. Annual Cost Analysis {#12-cost-analysis}

### Entity Overhead (Compliance + Admin)

| Item | CI IBC | Cyprus Studio | Total |
|------|--------|--------------|-------|
| Registered agent | $1,500 | N/A | $1,500 |
| Annual return filing | $800 | $2,500 | $3,300 |
| Audit (mandatory for Cyprus) | N/A | $4,000 | $4,000 |
| Bookkeeping/accounting | $3,000 | $8,000 | $11,000 |
| Transfer pricing documentation | $2,500 | $2,500 | $5,000 |
| Legal (annual review) | $2,000 | $2,000 | $4,000 |
| Banking fees | $1,200 | $600 | $1,800 |
| **Total compliance** | **$11,000** | **$19,600** | **$30,600** |

### Formation (One-Time)

| Item | Cost |
|------|------|
| Cyprus Ltd formation | $4,000 |
| Office setup (Limassol) | $8,000 |
| Initial transfer pricing study | $10,000 |
| Legal (MDSA drafting, employment contracts) | $8,000 |
| **Total formation** | **$30,000** |

### Total Cost of the Cyprus Layer

| | Year 1 | Year 2+ |
|---|---|---|
| Formation | $30,000 | $0 |
| Annual compliance | $30,600 | $30,600 |
| Cyprus corporate tax (at $3M revenue) | $12,000 | $12,000 |
| **Total** | **$72,600** | **$42,600** |

**At $3M revenue, the total cost of the Cyprus layer is 1.4% of revenue (Year 1) dropping to 1.4% ongoing.** This buys you ironclad substance, EU banking, and peace of mind.

---

## 13. Formation Roadmap {#13-formation-roadmap}

### Prerequisites

- [ ] CI IBC formed (per Doc 14)
- [ ] Panama PIF formed (per Doc 14)
- [ ] S.A. formed (per Doc 14)

### Cyprus Studio Formation

| # | Step | Timeline | Dependency |
|---|------|----------|------------|
| 1 | Engage Cyprus corporate lawyer | Week 1 | None |
| 2 | Reserve company name (Light Brands Studio Ltd) | Week 1-2 | Lawyer engaged |
| 3 | Prepare Memorandum and Articles of Association | Week 2-3 | Name reserved |
| 4 | File incorporation with Registrar of Companies | Week 3-4 | MoA ready |
| 5 | Obtain Tax Identification Number (TIN) | Week 4-5 | Incorporated |
| 6 | Register for VAT (if turnover > EUR 15,600 or voluntarily) | Week 4-5 | TIN issued |
| 7 | Register with Social Insurance Services | Week 5-6 | Incorporated |
| 8 | Open Cyprus bank account (Bank of Cyprus / Hellenic) | Week 4-6 | Incorporated + TIN |
| 9 | Lease office space (Limassol or Nicosia) | Week 4-6 | Incorporated |
| 10 | Appoint auditor | Week 5-6 | Incorporated |
| 11 | Draft and execute MDSA with CI IBC | Week 6-8 | Both entities formed |
| 12 | Hire first developers | Week 8-12 | Office ready, bank open |
| 13 | Prepare initial transfer pricing documentation | Month 3-4 | MDSA signed |
| 14 | Begin operations | Month 3 | All above complete |

**Total timeline: 3-4 months from engagement to operational.**

---

## 14. Risk Analysis {#14-risk-analysis}

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| **Transfer pricing challenge** | Low | Medium — Cyprus tax authority adjusts markup upward | Maintain benchmarking study. 10% cost-plus is well within comparable range. Update annually. |
| **PE claim in client country** | Very Low | Medium — client country claims CI IBC has PE | CI IBC has no employees, no office, no fixed place of business in any client country. All work done in Cyprus. |
| **Cyprus tax rate increase** | Low | Low — 15% → 17-20% | Only affects margin (currently 10% of costs). Even at 20% tax on 10% margin = 2% of revenue. Still trivial. |
| **Banking issues for CI IBC** | Medium | Medium — account closure | Cyprus Studio provides group substance. CI IBC can reference Cyprus operations in banking compliance. |
| **Andreas leaves Cyprus** | Low | Medium — lose substance | Ensure employment contracts and office lease survive. Can hire replacement director. Substance is in the office + team, not just Andreas. |
| **Cyprus re-domiciles Studio profits** | Very Low | High — full revenue taxed in Cyprus | MDSA clearly scopes Studio as routine service provider. Cost-plus pricing is documented and benchmarked. Studio has no client contracts, no IP, no risk. |
| **OECD Pillar Two (15% minimum)** | N/A now | Low in future | Only applies to groups with EUR 750M+ revenue. Not applicable. |

---

## 15. Open Questions for Counsel {#15-open-questions}

### For Cyprus Corporate Lawyer

1. **Company formation timeline** — realistic formation to operational timeline in current environment?
2. **VAT registration** — should Studio register for VAT voluntarily from day one? B2B services to non-EU entity (CI IBC) should be 0% reverse charge.
3. **Employment law** — standard employment contract terms for developers in Cyprus. Notice periods, severance, social insurance contributions.
4. **Director dual role** — Andreas as both director and employee of Studio. Any restrictions under Cyprus law?
5. **Shareholder structure** — any issues with S.A. (Panamanian corporation) holding 30% of a Cyprus company?

### For Transfer Pricing Advisor

6. **Cost-plus benchmark** — confirm 8-12% is defensible for a Cyprus captive software development center. Identify comparable companies.
7. **Documentation level** — what level of TP documentation does Cyprus require at our revenue scale?
8. **MDSA terms** — review and confirm the intercompany agreement pricing methodology.
9. **Profit split risk** — any risk that Cyprus authorities attempt to apply a profit split method instead of cost-plus?

### For CI IBC Registered Agent

10. **Intercompany agreement** — does the CI IBC registered agent need to be involved in executing the MDSA?
11. **Banking reference** — can the CI IBC reference the Cyprus Studio when dealing with banking compliance inquiries?

### For Dan's Expat Tax Attorney

12. **US exit timing** — does the formation of Cyprus Studio before or after renunciation affect anything?
13. **Jason's position** — Jason (US citizen) as shareholder of Cyprus Studio — any Form 5471 or CFC implications? Cyprus Studio has taxable income (15%) which may reduce GILTI impact.

---

## Cross-References

- **LB AI corporate setup (base structure):** [14-LIGHT-BRANDS-AI-CORPORATE-SETUP.md](./14-LIGHT-BRANDS-AI-CORPORATE-SETUP.md)
- **Dan's US exit plan:** [13-DAN-EXIT-US-AND-LB-SIMPLIFIED-STRUCTURE.md](./13-DAN-EXIT-US-AND-LB-SIMPLIFIED-STRUCTURE.md)
- **Dan's action plan:** [15-DAN-ACTION-PLAN.md](./15-DAN-ACTION-PLAN.md)
- **Cook Islands IBC detail:** [08-COOK-ISLANDS-IBC-DETAIL.md](./08-COOK-ISLANDS-IBC-DETAIL.md)
- **LB profit participation (SUPERSEDED by real equity):** [10-LB-PROFIT-PARTICIPATION-FRAMEWORK.md](./10-LB-PROFIT-PARTICIPATION-FRAMEWORK.md)
- **Cyprus founder tax playbook:** [../05-FOUNDER-GUIDE-CYPRUS.md](../05-FOUNDER-GUIDE-CYPRUS.md)
- **Cyprus non-dom reference:** [../../strategy/CYPRUS_NONDOM_REFERENCE.md](../../strategy/CYPRUS_NONDOM_REFERENCE.md)
- **Citizenship strategy (Dan's renunciation):** [../../CITIZENSHIP_STRATEGY.md](../../CITIZENSHIP_STRATEGY.md)

---

*This document specifies the addition of a Cyprus Private Company (Light Brands Studio Ltd) to the Light Brands AI corporate architecture as a substance-providing development center. The structure uses the OECD-standard principal/routine service provider model with cost-plus transfer pricing. All mechanisms cited — Cyprus 15% corporate tax, 0% WHT on dividends to non-residents, Cook Islands IBC 0% tax, cost-plus transfer pricing methodology — are explicit provisions of the relevant tax codes and OECD Transfer Pricing Guidelines. Implementation requires validation by Cyprus corporate counsel, transfer pricing advisor, and Cook Islands registered agent. This is not legal or tax advice.*
