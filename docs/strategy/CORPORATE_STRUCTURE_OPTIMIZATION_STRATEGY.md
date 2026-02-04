# TRANSFORMATIONAL EPICENTER

---

## Corporate Structure Optimization Strategy

**Legal, Fiscal, Tax & Data-Protection Architecture**

**Date:** February 2026
**Classification:** Confidential - Internal Strategy Review
**Version:** 0.1 DRAFT - For Team Discussion
**Prepared by:** AI-Assisted Strategy Analysis

---

> **DISCLAIMER**: This document is an AI-assisted strategic analysis intended to inform discussions with qualified legal, tax, and corporate structuring advisors. It does not constitute legal or tax advice. All recommendations must be validated by licensed professionals in each relevant jurisdiction before implementation.

---

## Table of Contents

1. [Context & Problem Statement](#1-context--problem-statement)
2. [Current Structure Assessment](#2-current-structure-assessment)
3. [Recommended Entity Architecture](#3-recommended-entity-architecture)
4. [Jurisdiction Selection Rationale](#4-jurisdiction-selection-rationale)
5. [Tax Flow Strategy](#5-tax-flow-strategy)
6. [Founder & Investor Protection](#6-founder--investor-protection)
7. [Data & IP Ownership Model](#7-data--ip-ownership-model)
8. [Data Governance & Regulatory Compliance](#8-data-governance--regulatory-compliance)
9. [Transfer Pricing Framework](#9-transfer-pricing-framework)
10. [Tokenization & Digital Asset Considerations](#10-tokenization--digital-asset-considerations)
11. [Alternative Structures](#11-alternative-structures)
12. [Risk Analysis](#12-risk-analysis)
13. [Implementation Roadmap](#13-implementation-roadmap)
14. [Architecture Diagram](#14-architecture-diagram)
15. [Open Questions for Counsel](#15-open-questions-for-counsel)
16. [Sources & References](#16-sources--references)

---

## 1. Context & Problem Statement

### 1.1 What We're Building

Transformational Epicenter is a luxury medical retreat operating at the convergence of psychedelic-assisted therapy, longevity medicine, bio-optimization, and luxury hospitality. Primary operations are in Tulum, Quintana Roo, Mexico, with planned international expansion.

The business generates and processes extremely high-value data:
- Biomarker and blood panel data
- Brain mapping / neurophysiological data
- Epigenetic and methylation testing
- Pharmacogenomic (DNA/CYP2D6) data
- Longitudinal treatment outcomes (14-month care continuum)
- AI-generated personalized treatment protocols

### 1.2 Ownership Reality

- **Mixed Canadian and U.S. founders**
- **Mixed Canadian and U.S. investors** (accredited, Reg D)
- $16.82M seed raise targeting $29.35M post-money valuation
- Future capital raises, strategic partnerships, and potential exit at Year 5-7

### 1.3 The North Star

> Pay the least amount of tax legally possible, protect the mission and the people, and preserve long-term enterprise value—especially data and IP.

### 1.4 Why the Current Structure Needs Rethinking

The existing three-entity structure (Document 14 in the data room) was designed with U.S. investors in mind. With Canadian founders and investors now in the mix, and given the high-value data/IP the company will generate, the structure needs significant enhancement. Specifically:

| Gap | Impact |
|-----|--------|
| Delaware LLC creates double taxation for Canadian investors (50-75% effective rate) | Canadian capital cannot invest tax-efficiently |
| No separate data entity | Data assets co-mingled with operational risk |
| No IP holding company | Clinical protocols and AI models exposed to operating liability |
| No management company | Limits fee extraction flexibility and tax optimization |
| No Canadian entry point | Canadian investors face CRA foreign tax credit denial |
| Single holding layer | No intermediate jurisdiction for treaty shopping optimization |

---

## 2. Current Structure Assessment

### 2.1 What Exists (Planned, Not Formed)

```
Investors (US only) → Delaware LLC HoldCo → 2x Mexican S.A. de C.V.
                                              ├── OpCo (medical/wellness)
                                              └── PropCo (real estate via fideicomiso)
```

### 2.2 What Works

- **Delaware LLC** is appropriate for U.S. investors seeking pass-through treatment
- **Two Mexican S.A. de C.V.** entities correctly separate operational from real estate risk
- **Fideicomiso** structure is required and properly planned for restricted zone
- **Liability separation** between operations and property is sound

### 2.3 What Doesn't Work

**Critical Issue: Canadian Investor Taxation**

The CRA treats U.S. LLCs as corporations, not pass-through entities. This creates a timing mismatch:
- The U.S. taxes LLC income when earned
- Canada taxes it only when distributed as dividends
- CRA typically denies the foreign tax credit because these are treated as different taxable events
- Effective combined rate can reach **50-75%** for Canadian members

This is a deal-breaker for Canadian capital participation through the current structure.

**Missing Entities:**

1. **No DataCo** — All biological, neurological, and behavioral data sits inside the operating entity, exposed to malpractice claims and operational creditors
2. **No IPCo** — Proprietary clinical protocols, AI models, and pharmacogenomic algorithms have no separate protection or licensing structure
3. **No ManagementCo** — No vehicle for extracting management fees as a tax-efficient intercompany flow
4. **No Canadian holding vehicle** — Canadian investors have no tax-efficient entry point

---

## 3. Recommended Entity Architecture

### 3.1 Recommended Entity Stack (7 Entities)

| # | Entity | Jurisdiction | Type | Purpose |
|---|--------|-------------|------|---------|
| 1 | **TE Holdings Canada, Inc.** | Alberta, Canada | Corporation (ABCA) | Canadian investor entry point; holds interest in Parent HoldCo |
| 2 | **Transformational Epicenter Holdings, LLC** | Delaware, USA | LLC (or C-Corp — see §4.1) | U.S. investor entry point; holds interest in Parent HoldCo |
| 3 | **TE Parent Co** | Delaware, USA (C-Corp) or Barbados (IBC) | Corporation | Master holding company; owns all subsidiaries |
| 4 | **TE Operations Mexico, S.A. de C.V.** | Quintana Roo, Mexico | S.A. de C.V. | Medical, wellness, and hospitality operations |
| 5 | **TE Real Estate Mexico, S.A. de C.V.** | Quintana Roo, Mexico | S.A. de C.V. | Real estate holding via fideicomiso |
| 6 | **TE Data & Intelligence, LLC** | Delaware, USA | LLC | Data governance, anonymized analytics, AI model ownership |
| 7 | **TE IP Holdings, LLC** | Delaware, USA | LLC | Clinical protocols, trademarks, trade secrets, licensing |

**Optional (Phase 2):**

| # | Entity | Jurisdiction | Purpose |
|---|--------|-------------|---------|
| 8 | **TE Management Services, S.A. de C.V.** | Mexico | Intercompany management/technical services |
| 9 | **TE [Country] OpCo** | TBD | International expansion entities (as needed) |

### 3.2 Why This Structure

**Dual Entry Points (Entities 1 & 2):** Canadian investors invest through the Canadian corporation, U.S. investors through the Delaware entity. This avoids the LLC/CRA double-taxation problem entirely. Each investor class enters through a vehicle optimized for their home jurisdiction's tax treatment.

**Centralized Parent (Entity 3):** A single parent entity owns all operating subsidiaries, creating clean governance, simplified cap table management, and a single point of control for international operations.

**Operational Separation (Entities 4 & 5):** Maintains the existing (and sound) separation of medical operations from real estate holdings in Mexico. Both remain S.A. de C.V. structures as required by Mexican law for healthcare licensing and fideicomiso eligibility.

**Data Isolation (Entity 6):** The most valuable long-term asset — patient data, anonymized datasets, AI models, and analytics capabilities — sits in a separate legal entity, shielded from operational malpractice claims, creditor reach, and regulatory enforcement actions against the operating entity.

**IP Protection (Entity 7):** Clinical protocols, pharmacogenomic algorithms, treatment frameworks, and the technology platform IP are held separately. This entity licenses IP to the operating entities, creating both a revenue flow and an asset protection layer.

---

## 4. Jurisdiction Selection Rationale

### 4.1 TE Holdings Canada, Inc. — Alberta, Canada

**Why Alberta:**
- Low provincial corporate tax rate (8%, combined federal/provincial = 23% general, 11% small business)
- No provincial capital tax
- Strong treaty network — Canada-Mexico treaty provides 15% dividend WHT, 10% royalty WHT, 5% interest WHT
- Canada-Barbados treaty enables exempt surplus treatment for foreign affiliate dividends
- Familiar legal framework for Canadian investors and founders
- Business Corporations Act (ABCA) provides flexible governance

**Why not BC or Ontario:**
- BC has higher provincial rates (12% general)
- Ontario has slightly higher combined rates
- Alberta offers the most favorable combined rate for a holding corporation

**Key Tax Consideration:** Dividends received from a foreign affiliate (the Parent Co) may qualify as "exempt surplus" under ITA §113(1)(a) if the foreign affiliate is resident in a designated treaty country and earns active business income. This can result in effectively **tax-free** dividend repatriation to Canada.

### 4.2 Delaware Holdings LLC / C-Corp — Delaware, USA

**The LLC vs. C-Corp Decision:**

This is the most consequential structural choice. Two paths:

| Factor | Delaware LLC | Delaware C-Corp |
|--------|-------------|-----------------|
| U.S. investor tax treatment | Pass-through (single tax) | Double taxation (corp + dividend) |
| Canadian investor compatibility | Problematic (CRA denies FTC) | Clean (treated as corporation by both countries) |
| Venture/institutional expectations | Less familiar | Industry standard for VC |
| Future IPO optionality | Must convert | Ready |
| Flexibility of governance | Maximum (custom Operating Agreement) | Standard (bylaws + charter) |
| State income tax | None on out-of-state revenue | None on out-of-state revenue |

**Recommendation:** If the investor base is truly mixed Canadian/U.S., a **Delaware C-Corp** as the U.S. entry point is likely cleaner. However, if U.S. investors strongly prefer pass-through treatment, maintain the LLC but ensure Canadian investors enter exclusively through the Canadian holding corporation.

**This is a critical decision that must be made with tax counsel from both jurisdictions.**

### 4.3 TE Parent Co — Delaware C-Corp or Barbados IBC

**Option A: Delaware C-Corp as Parent**

- Simple, transparent, understood by all parties
- U.S. federal corporate tax rate: 21%
- Strong treaty network (US-Mexico treaty: 10% dividend WHT, 4.9-15% royalty WHT)
- Institutional investors and acquirers expect Delaware
- No PFIC concerns for U.S. investors
- Straightforward compliance

**Option B: Barbados International Business Company (IBC)**

- Corporate tax: 2.5% on first US$10M profit, declining to 1% over $30M
- No withholding tax on dividends to non-residents
- Canada-Barbados tax treaty enables exempt surplus treatment
- Dividends from Barbados IBC to Canadian HoldCo can flow **tax-free** to Canada
- Barbados has a tax treaty with Mexico (limited but functional)
- Established offshore financial center with proper regulation
- OECD compliant (not blacklisted)

**Recommendation:** Start with **Delaware C-Corp** as parent for simplicity, institutional credibility, and regulatory clarity. Barbados IBC can be introduced later as an intermediate holding company between the Delaware parent and Mexican subsidiaries if the tax savings justify the added complexity and compliance cost. This is a Phase 2 optimization.

### 4.4 Mexican Operating Entities — Quintana Roo, Mexico

**Why S.A. de C.V. (unchanged from current plan):**
- Required corporate form for COFEPRIS healthcare licensing
- Compatible with IMSS, INFONAVIT, SAT registration
- Variable capital structure allows flexible equity adjustments
- Standard form understood by Mexican banks, regulators, and counterparties
- Minimum two shareholders required (holding company + nominee)

**Quintana Roo specific:**
- Property in restricted coastal zone (50km) requires fideicomiso
- State-level health department registration required
- Tulum operations within jurisdiction of Cancun-based regulatory offices

### 4.5 Data & IP Entities — Delaware, USA

**Why Delaware for DataCo and IPCo:**
- Strongest trade secret protection in the U.S. (Defend Trade Secrets Act)
- Court of Chancery expertise in IP disputes
- No state tax on IP licensing revenue earned outside Delaware
- Familiar to investors and acquirers during due diligence
- Clean integration with the U.S. holding structure
- HIPAA compliance framework is well-established for U.S. entities

**Why not Ireland, Netherlands, or Singapore for IPCo:**
- Transfer pricing scrutiny has increased dramatically post-BEPS
- The "substance" requirements in EU jurisdictions now require real employees, real decisions, real office space
- For a company of this size, the compliance cost outweighs the tax benefit
- Creates unnecessary complexity for a seed-stage company
- Can be reconsidered at scale (Phase 3, post-expansion)

---

## 5. Tax Flow Strategy

### 5.1 Revenue Flows & Intercompany Payments

The structure enables several tax-efficient flows between entities:

```
┌─────────────────────────────────────────────────────────────────┐
│                     TAX FLOW ARCHITECTURE                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Mexican OpCo (Revenue)                                          │
│  ├── Pays RENT to PropCo (deductible; intercompany lease)       │
│  ├── Pays ROYALTY to IPCo (deductible; IP license fees)         │
│  ├── Pays DATA LICENSE FEE to DataCo (deductible; data access)  │
│  ├── Pays MANAGEMENT FEE to Parent (deductible; services)       │
│  ├── Pays INTEREST on intercompany loan to Parent (deductible)  │
│  └── Distributes DIVIDENDS to Parent (after local 30% tax)      │
│                                                                   │
│  Parent HoldCo receives:                                         │
│  ├── Management fees (taxable income)                            │
│  ├── Royalty income (taxable income)                             │
│  ├── Data licensing fees (taxable income)                        │
│  ├── Interest income (taxable income)                            │
│  ├── Rent flow-through from PropCo                               │
│  └── Dividends (with foreign tax credit for Mexican WHT)        │
│                                                                   │
│  Investor distributions:                                         │
│  ├── Canadian investors via TE Holdings Canada                   │
│  │   └── Exempt surplus dividends (potentially tax-free)        │
│  └── U.S. investors via Delaware entity                          │
│      └── Qualified dividends or pass-through (structure-dependent)│
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### 5.2 Key Tax Rates & Treaty Provisions

#### Mexico → U.S. (Under US-Mexico Tax Treaty)

| Flow Type | Treaty WHT Rate | Mexican Deductibility | Notes |
|-----------|----------------|----------------------|-------|
| Dividends | 10% (if ≥10% ownership) | N/A | After 30% corporate tax |
| Royalties | 10% (general) | Yes, at arm's length | SAT scrutiny on related-party royalties |
| Interest | 4.9% (banks/institutions) to 15% | Yes, with thin-cap limits | Mexico thin-cap: 3:1 debt-to-equity |
| Management fees | 25% (as professional services) | Yes, at arm's length | Requires substance demonstration |
| Technical assistance | 25% | Yes | Must demonstrate benefit received |

#### Mexico → Canada (Under Canada-Mexico Tax Treaty)

| Flow Type | Treaty WHT Rate | Notes |
|-----------|----------------|-------|
| Dividends | 15% (general) / 10% (if ≥10% ownership) | After 30% Mexican corporate tax |
| Royalties | 10% | Arm's length required |
| Interest | 10% (general) / 5% (if paid to pension fund or bank) | Thin-cap rules apply |

#### Key Mexican Tax Provisions

| Item | Rate/Rule |
|------|-----------|
| Corporate income tax | 30% on taxable income |
| Employee profit sharing (PTU) | 10% of taxable income (capped) |
| Thin capitalization | 3:1 debt-to-equity ratio for interest deduction |
| Transfer pricing documentation | Master File + Local File + CbCR (if applicable) |
| Preferential tax regime penalty | 40% WHT on payments to related parties in PTR jurisdictions |
| IEPS (special tax) | May apply to certain health services |

### 5.3 Tax Optimization Strategies

#### Strategy 1: IP Licensing (Royalty Extraction)

IPCo licenses clinical protocols, AI algorithms, trademarks, and technology platform to Mexican OpCo. OpCo pays arm's length royalties, which are:
- Deductible in Mexico (reduces 30% corporate tax base)
- Subject to 10% WHT under US-Mexico treaty
- Taxable at U.S. corporate rate (21%) with foreign tax credit for WHT

**Net effect:** Income shifted from 30% Mexican rate to 21% U.S. rate, minus 10% WHT (creditable). Effective rate reduction on shifted income.

**SAT Risk:** Mexico's SAT has increased scrutiny on royalties paid to related foreign parties, especially when the IP was previously developed in Mexico or when the royalty rate seems excessive. Must have:
- Transfer pricing study with comparable uncontrolled transactions
- Documentation of IP development outside Mexico
- Evidence that IPCo has substance (employees, decision-making)

#### Strategy 2: Data Licensing Fees

DataCo provides anonymized analytics, AI model access, and data processing services to OpCo under a data services agreement. Fees are:
- Deductible in Mexico as operational expense
- Subject to WHT (rate depends on characterization — royalty vs. service fee)
- Creates value in DataCo entity separate from operational risk

**Important:** The characterization of data licensing payments (royalty vs. service fee vs. cost reimbursement) has significant WHT implications and must be carefully structured with transfer pricing advice.

#### Strategy 3: Intercompany Debt (Interest Deduction)

Parent HoldCo capitalizes Mexican subsidiaries with a mix of equity and intercompany loans:
- Interest payments are deductible in Mexico (30% rate)
- Subject to thin-capitalization rules (3:1 debt-to-equity)
- WHT on interest: 4.9% to 15% depending on characterization
- Interest income taxable to parent at U.S. rate (21%)

**Optimal mix:** Maximize debt within thin-cap limits to extract value as interest (deductible) rather than dividends (non-deductible).

#### Strategy 4: Management & Technical Services Fees

Parent HoldCo or ManagementCo provides strategic management, marketing, technology, and administrative services to Mexican entities:
- Fees deductible in Mexico at arm's length rates
- 25% WHT on management/technical fees (higher than royalties)
- Must demonstrate actual services rendered, benefit received

**Note:** The 25% WHT makes management fees less efficient than royalties for income extraction. Prefer royalty and interest structures where possible.

#### Strategy 5: Canadian Exempt Surplus

For Canadian investors/founders, dividends from a foreign affiliate resident in a treaty country (if Barbados IBC is used, or directly from U.S. parent if applicable):
- Active business income earned by a foreign affiliate in a designated treaty country qualifies as "exempt surplus"
- Dividends paid from exempt surplus to the Canadian corporation are deductible under ITA §113(1)(a)
- Effective result: dividends flow to Canada with minimal or no additional Canadian tax

**This is the primary mechanism for Canadian tax efficiency and requires careful structuring.**

### 5.4 Estimated Tax Leakage Comparison

| Structure | Effective Global Tax Rate (est.) | Notes |
|-----------|--------------------------------|-------|
| Current plan (simple Delaware LLC → Mexico) | 35-45% | No optimization; Canadian double-taxation risk |
| Recommended structure (base) | 25-32% | IP licensing, interest, dual entry points |
| Recommended + Barbados IBC | 20-28% | Exempt surplus for Canadian flows |
| Aggressive optimization (offshore IP, aggressive TP) | 15-22% | Higher audit risk; not recommended at this stage |

> **These are directional estimates only.** Actual rates depend on income mix, treaty application, transfer pricing outcomes, and jurisdiction-specific compliance. Tax counsel must model the specific numbers.

---

## 6. Founder & Investor Protection

### 6.1 Liability Layering

```
Layer 1: Personal Asset Protection
├── Founders hold shares in holding entities, not operating entities
├── No personal guarantees (seek to avoid wherever possible)
└── D&O insurance at holding level

Layer 2: Holding Company Shield
├── U.S./Canadian holding entities are limited liability vehicles
├── Operating losses, malpractice claims stay in Mexican entities
└── Creditors of OpCo cannot reach HoldCo assets

Layer 3: Operating Entity Isolation
├── OpCo (medical) separated from PropCo (real estate)
├── DataCo and IPCo are separate entities — not reachable by OpCo creditors
├── Each entity is a distinct legal person under its jurisdiction's law
└── Intercompany agreements are arm's length (prevents veil-piercing)

Layer 4: Asset-Specific Protection
├── Real estate held via fideicomiso (bank trust — separate legal title)
├── IP held in IPCo (separate from operations)
├── Data held in DataCo (separate from operations)
└── Cash reserves held at parent level (not in operating entities)
```

### 6.2 Specific Protection Mechanisms

| Risk | Protection | Entity |
|------|-----------|--------|
| Medical malpractice | OpCo isolation + comprehensive malpractice insurance | TE Operations Mexico |
| Real estate liability | PropCo isolation + fideicomiso bank trust | TE Real Estate Mexico |
| Data breach | DataCo isolation + cyber insurance + HIPAA compliance | TE Data & Intelligence |
| IP theft/dispute | IPCo holds all IP; registered protections | TE IP Holdings |
| Investor loss | Limited liability in HoldCo; no personal guarantees | Holdings entities |
| Regulatory action (COFEPRIS) | Contained to OpCo; other entities unaffected | TE Operations Mexico |
| Key person risk | D&O insurance; key-man life insurance | All entities |
| FX exposure | Hedging strategy; USD revenue pricing | Parent / Treasury function |

### 6.3 Founder-Specific Protections

- **Vesting with acceleration:** 4-year vesting, 1-year cliff, double-trigger acceleration on change of control
- **Anti-dilution:** Founders should negotiate for anti-dilution protection alongside investors
- **Board control:** Maintain founder board majority through Series Seed and Series A; plan for transition path
- **IP assignment:** Ensure all pre-formation IP is properly assigned to IPCo with consideration flowing back
- **Non-compete scope:** Limit non-compete clauses to reasonable geography and duration (Mexico + psychedelic therapy only)
- **Indemnification:** Maximum indemnification and advancement of expenses in operating agreements

### 6.4 Investor-Specific Protections

All protections from the existing Document 14 remain applicable, plus:

- **Dual-class entry:** Canadian investors enter through TE Holdings Canada; U.S. investors through Delaware entity. Both receive equivalent economic rights.
- **Information rights:** Quarterly financials, annual audited statements, monthly KPI dashboard
- **Pro-rata rights:** Maintain percentage in future rounds
- **Tag-along / drag-along:** Standard provisions
- **Liquidation preference:** 1x non-participating preferred (recommended; negotiate with lead investor)
- **Board observer rights:** Available to investors below board-seat threshold
- **Data room access:** Ongoing access to updated data room materials

---

## 7. Data & IP Ownership Model

### 7.1 Data Ownership Architecture

This is the most strategically important section. The data generated by Transformational Epicenter's operations represents the company's most defensible long-term asset.

#### Entity: TE Data & Intelligence, LLC (Delaware)

**What it owns:**
- All anonymized and aggregated patient outcome data
- AI/ML models trained on clinical data
- Pharmacogenomic databases and correlations
- Analytics platforms and data processing infrastructure
- Research datasets and publications rights

**What it does NOT own:**
- Individual patient medical records (these remain with OpCo as the healthcare provider, subject to patient rights)
- Raw identifiable PHI (this stays in the OpCo's clinical systems)

**How it works:**

```
┌────────────────────────────────────────────────────────────────────┐
│                    DATA OWNERSHIP MODEL                              │
├────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  TE Operations Mexico (OpCo)                                        │
│  ├── Collects raw patient data as healthcare provider               │
│  ├── Maintains individual medical records (HIPAA/LFPDPPP)          │
│  ├── Patient consent includes data usage rights (critical!)        │
│  └── Transfers ANONYMIZED data to DataCo under DPA                 │
│                                                                      │
│  TE Data & Intelligence (DataCo)                                    │
│  ├── Receives anonymized, de-identified datasets                   │
│  ├── Processes data through AI/ML pipelines                        │
│  ├── Builds proprietary models and analytics                       │
│  ├── Licenses insights back to OpCo (data services agreement)     │
│  ├── Can license anonymized research data to third parties         │
│  └── Enterprise value accrues HERE, not in OpCo                    │
│                                                                      │
│  Key Legal Instruments:                                              │
│  ├── Data Processing Agreement (DPA) between OpCo and DataCo      │
│  ├── Patient consent forms with explicit data usage clauses        │
│  ├── De-identification procedures (HIPAA Safe Harbor or Expert)    │
│  ├── Data licensing agreement (DataCo → OpCo)                     │
│  └── Research data licensing framework (DataCo → third parties)   │
│                                                                      │
└────────────────────────────────────────────────────────────────────┘
```

#### Why This Matters for Enterprise Value

| Year | Guests (cumulative) | Data Points (est.) | Enterprise Value of Data Asset |
|------|--------------------|--------------------|-------------------------------|
| 1 | 387 | ~3.9M | Early-stage; model training |
| 2 | 1,124 | ~11.2M | Pattern recognition viable |
| 3 | 2,112 | ~21.1M | Predictive models deployable |
| 4 | 3,257 | ~32.6M | Research licensing possible |
| 5 | 4,537 | ~45.4M | Significant standalone value |

At scale, this dataset becomes one of the world's largest longitudinal databases of ibogaine-assisted treatment outcomes combined with pharmacogenomic data. This is a moat that compounds with every guest.

### 7.2 IP Ownership Architecture

#### Entity: TE IP Holdings, LLC (Delaware)

**What it owns:**
- Clinical treatment protocols (ibogaine, psilocybin, bio-optimization)
- Pharmacogenomic dosing algorithms (CYP2D6 mapping)
- AI treatment personalization engine
- Technology platform (14-system integrated architecture)
- Trademarks (Transformational Epicenter, product names)
- Trade secrets (screening criteria, integration methodologies)
- Domain names and digital assets
- Training materials and certification programs

**Revenue model:**
- Licenses all IP to operating entities under arm's length royalty agreements
- Royalty rate benchmarked to comparable transactions (typically 3-8% of revenue for medical/wellness IP)
- Future licensing to expansion locations, franchisees, or strategic partners

**Protection measures:**
- Trade secret protections (NDAs, access controls, employee agreements)
- Trademark registration in U.S., Mexico, Canada, and key expansion markets
- Copyright registration for training materials and content
- Patent filing consideration for novel clinical protocols (consult patent counsel)
- Employee invention assignment agreements

### 7.3 Separation Principles

| Asset | Entity | Rationale |
|-------|--------|-----------|
| Patient medical records | OpCo | Healthcare provider obligation; regulated |
| Anonymized outcome data | DataCo | Enterprise value; protected from OpCo risk |
| AI models & algorithms | DataCo | Built on anonymized data; separate liability |
| Clinical protocols | IPCo | Licensable; separable from operations |
| Technology platform | IPCo | Software IP; infrastructure value |
| Trademarks & brand | IPCo | Brand equity; licensable |
| Real estate | PropCo | Physical asset; separate risk profile |
| Cash & investments | Parent HoldCo | Treasury function; centralized |

---

## 8. Data Governance & Regulatory Compliance

### 8.1 Regulatory Landscape (As of February 2026)

#### Mexico — LFPDPPP (Reformed March 2025)

Mexico's Federal Law on the Protection of Personal Data Held by Private Parties was significantly overhauled in March 2025:

- **Sensitive personal data** now explicitly recognized as a distinct category with heightened obligations
- Health records, biometric identifiers, and genetic data are classified as sensitive
- **Express consent** required for all sensitive data processing
- Enforcement authority changed from INAI to the Secretariat of Anti-Corruption and Good Governance
- Scope now expressly includes **data processors** (not just controllers)
- Cross-border transfer requirements tightened — must ensure adequate protection in receiving jurisdiction
- **Impact on TE:** Every data flow from Mexico to U.S.-based DataCo must comply with LFPDPPP cross-border transfer rules. Consent forms must be explicit and granular.

#### United States — HIPAA

- HIPAA follows the PHI, not geography — if the company handles U.S. patient data, HIPAA applies
- Mexican operations treating U.S. patients must maintain HIPAA-grade protections
- Business Associate Agreements (BAAs) required between OpCo and DataCo
- De-identification standards (Safe Harbor or Expert Determination) must be met before data leaves the PHI environment
- No HIPAA exemption for foreign providers, but enforcement is extraterritorial through the BAA chain

**Key consideration:** A Mexican clinic that has no connection to the U.S. healthcare system is generally not directly bound by HIPAA. However, if the company markets to U.S. patients, processes U.S. insurance claims, or maintains electronic health records accessible from the U.S., HIPAA obligations attach. The recommended approach is to **voluntarily adopt HIPAA standards** as the baseline, which also satisfies LFPDPPP requirements and provides marketing credibility.

#### Canada — PIPEDA

- Applies to personal health information of Canadian guests
- Consent-based framework similar to GDPR principles
- Cross-border transfer permitted if adequate protections exist
- Provincial health privacy laws (e.g., Alberta's HIA) may also apply

#### GDPR (Preparatory)

- Not directly applicable unless marketing to or treating EU/UK residents
- Recommended as a design standard (GDPR-compliant architecture is the gold standard)
- If expansion to Europe is planned, build GDPR into the foundation now

### 8.2 Recommended Data Governance Framework

```
┌─────────────────────────────────────────────────────────────────┐
│                  DATA GOVERNANCE FRAMEWORK                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  1. CONSENT LAYER                                                │
│     ├── Granular consent forms (treatment, research, AI, third-party) │
│     ├── Separate consent for each data use purpose                │
│     ├── Right to withdraw consent at any time                     │
│     ├── Multi-language (English, Spanish, French)                 │
│     └── Digital consent with audit trail                          │
│                                                                   │
│  2. COLLECTION LAYER (OpCo - Mexico)                             │
│     ├── NOM-168 compliant medical records (Mexican standard)     │
│     ├── HIPAA-grade encryption (AES-256 at rest, TLS 1.3 in transit) │
│     ├── LFPDPPP privacy notices and access procedures            │
│     ├── Role-based access control (medical staff only)           │
│     └── Comprehensive audit logging (7-year retention)           │
│                                                                   │
│  3. ANONYMIZATION LAYER (Between OpCo & DataCo)                 │
│     ├── HIPAA Safe Harbor de-identification (18 identifiers removed) │
│     ├── Expert determination method for complex datasets         │
│     ├── K-anonymity, L-diversity, T-closeness applied            │
│     ├── Re-identification risk assessment (annual)               │
│     └── Documented anonymization procedures                      │
│                                                                   │
│  4. ANALYTICS LAYER (DataCo - USA)                               │
│     ├── Only anonymized/de-identified data                       │
│     ├── AI model training on aggregate data                      │
│     ├── Research datasets with IRB-equivalent review             │
│     ├── Third-party licensing under strict DPAs                  │
│     └── Regular privacy impact assessments                       │
│                                                                   │
│  5. GOVERNANCE LAYER (Cross-entity)                              │
│     ├── Data Protection Officer (DPO) appointed                  │
│     ├── Data governance committee (quarterly review)             │
│     ├── Annual compliance audit (external)                       │
│     ├── Breach notification procedures (72-hour standard)        │
│     └── Data retention and destruction policies                  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### 8.3 Cross-Border Data Transfer Compliance

| Transfer | Regulation | Mechanism | Requirement |
|----------|-----------|-----------|-------------|
| Mexico → USA (OpCo → DataCo) | LFPDPPP | Cross-border transfer clause + consent | Adequate protection in receiving jurisdiction |
| Mexico → USA (OpCo → IPCo) | LFPDPPP | Data processing agreement | Purpose limitation; security standards |
| USA → Canada (Parent → CA HoldCo) | PIPEDA | Comparable protection | Contractual safeguards |
| Any → EU (future) | GDPR | Standard Contractual Clauses (SCCs) | Must be in place before any EU guest data |

### 8.4 Where Data and IP Should Live

| Asset | Recommended Jurisdiction | Rationale |
|-------|------------------------|-----------|
| Raw patient records (PHI) | Mexico (OpCo systems, encrypted) | Collected at point of care; LFPDPPP/NOM-168 compliance |
| Anonymized datasets | USA (DataCo infrastructure) | Strong IP protection; HIPAA de-identification standards; proximity to AI/ML talent |
| AI models | USA (DataCo) | Trade secret protection; no compelled disclosure |
| Clinical protocols | USA (IPCo) | Trade secret + potential patent protection |
| Technology platform code | USA (IPCo) | Copyright and trade secret protection |
| Backup/DR copies | USA (AWS us-east or us-west, encrypted) | Geographic redundancy; single jurisdiction |

---

## 9. Transfer Pricing Framework

### 9.1 Why This Matters

Every intercompany payment between TE entities must be at arm's length — meaning the price charged must be what unrelated parties would charge for the same transaction. Mexico's SAT (Servicio de Administracion Tributaria) has significantly increased transfer pricing enforcement, particularly for:

- Royalties paid to foreign related parties
- Management and technical service fees
- Interest on intercompany loans
- Cost-sharing arrangements

**Non-compliance risk:** The SAT can assess a 40% WHT (instead of treaty rates) on payments to related parties deemed to be in a "preferential tax regime." Additionally, non-arm's-length transactions can result in denied deductions, penalties, and interest.

### 9.2 Required Documentation

Under Mexican law (Article 76-A LISR), the following documentation is required:

| Document | Threshold | Deadline |
|----------|-----------|----------|
| **Annex 9 (DIM)** | All related-party transactions | May 15 annually |
| **Local File** | Revenue > ~$100M MXN (or related-party transactions > ~$13M MXN) | March 31 annually |
| **Master File** | Revenue > ~$1.85B MXN | December 31 annually |
| **Country-by-Country Report** | Revenue > €750M (consolidated) | December 31 annually |

For TE's scale, the Annex 9 and Local File will be required. Master File and CbCR are unlikely at the seed stage but should be prepared for as revenue scales.

### 9.3 Intercompany Pricing Guidelines

| Transaction | Recommended Method | Benchmark Range | Notes |
|-------------|-------------------|-----------------|-------|
| IP royalties (OpCo → IPCo) | Comparable Uncontrolled Transaction (CUT) or Transactional Net Margin Method (TNMM) | 3-8% of net revenue | Must have transfer pricing study |
| Data services (OpCo → DataCo) | Cost-plus or TNMM | Cost + 8-15% markup | Characterization critical (royalty vs. service) |
| Management fees (OpCo → Parent) | TNMM or Comparable Profit Method | 3-5% of revenue or cost-plus | Must demonstrate services rendered |
| Interest on intercompany loans | Comparable Uncontrolled Price (CUP) | SOFR/TIIE + 200-500 bps | Within thin-cap limits (3:1) |
| Property lease (OpCo → PropCo) | CUP (comparable market rents) | Market rate for Tulum commercial | Independent appraisal recommended |

### 9.4 SAT Audit Preparedness

Starting in 2026, the SAT has announced new audit selection criteria specifically targeting transfer pricing. TE should maintain:

1. **Contemporaneous documentation** — Transfer pricing studies completed before filing, not after audit notification
2. **Economic substance** — Each entity must have real employees, real decision-making, real operations
3. **Consistent application** — Pricing methods applied consistently year over year
4. **Benchmark studies** — Updated annually with fresh comparable data
5. **Intercompany agreements** — Written, executed, and followed as written

---

## 10. Tokenization & Digital Asset Considerations

### 10.1 Regulatory Environment (2025-2026)

The regulatory landscape for digital assets has shifted materially:

- **GENIUS Act** (2025): Established stablecoin framework in the U.S.
- **Clarity Act** (expected 2026): Expected to provide clear classification framework for digital assets
- **SEC Crypto Task Force** / **Project Crypto** (July 2025): Modernizing securities rules for on-chain markets
- **UCC Article 12** adoption: New York and majority of states now recognize "controllable electronic records" as legal property
- **Canada**: Fast-tracked stablecoin framework alongside UK and South Korea

### 10.2 Potential Tokenization Applications for TE

| Application | Feasibility | Regulatory Status | Timeline |
|-------------|-------------|-------------------|----------|
| **Real estate tokenization** (villa fractional ownership) | High | Improving — likely securities tokens under Reg D | Phase 2-3 |
| **Revenue-sharing tokens** (clinic performance) | Medium | Securities; requires registration or exemption | Phase 3 |
| **Data access tokens** (anonymized research data marketplace) | Medium | Utility token potential; novel territory | Phase 3-4 |
| **Health credential NFTs** (treatment completion certificates) | Low-Medium | Likely not securities; privacy concerns | Phase 3 |
| **Governance tokens** (DAO structure for expansion) | Low | Regulatory uncertainty | Phase 4+ |

### 10.3 Recommendations

1. **Do not tokenize now.** The regulatory framework is improving but not yet stable enough for a healthcare company to rely on.
2. **Design for tokenization readiness.** Structure entities and data models so that tokenization can be layered on without restructuring.
3. **Villa program is the most natural candidate.** The 48-villa condo-hotel collection could benefit from fractional ownership via security tokens under Reg D, expanding the buyer pool.
4. **Data marketplace is the highest-value play.** Anonymized clinical outcome data sold via token-gated access could be transformative, but requires extensive regulatory analysis.
5. **Engage digital asset counsel** when revenue justifies it (Year 2-3).

---

## 11. Alternative Structures

### 11.1 Conservative Structure (Minimum Complexity)

```
Canadian Investors → TE Holdings Canada, Inc. (Alberta)
                          │
U.S. Investors ──→ TE Holdings, LLC (Delaware) ──┐
                                                   │
                         (Both invest into)        │
                                                   ▼
                         TE Parent Co (Delaware C-Corp)
                              │              │
                    ┌─────────┘              └─────────┐
                    ▼                                    ▼
           TE Operations Mexico              TE Real Estate Mexico
           S.A. de C.V.                      S.A. de C.V.
                                                   │
                                             Fideicomiso
```

**Entities:** 5
**Pros:** Simple; low compliance cost; easy to explain to investors
**Cons:** No data/IP separation; no tax optimization on intercompany flows; data assets at risk from operational liabilities
**Estimated effective tax rate:** 35-42%

### 11.2 Recommended Structure (Balanced Optimization)

The structure described in Section 3 — 7 entities with dual entry points, DataCo, and IPCo.

**Entities:** 7
**Pros:** Data/IP protected; Canadian investors accommodated; moderate tax optimization; scalable
**Cons:** Higher compliance cost; more complex governance; transfer pricing documentation required
**Estimated effective tax rate:** 25-32%

### 11.3 Aggressive Structure (Maximum Optimization)

```
Canadian Investors → TE Holdings Canada (Alberta)
                          │
                          ▼
                    Barbados IBC (TE International Holdings)
                          │
U.S. Investors ─────→ TE Holdings (Delaware C-Corp)
                          │
              ┌───────────┼───────────────┬──────────────┐
              ▼           ▼               ▼              ▼
        TE Ops Mexico   TE RE Mexico   TE IPCo      TE DataCo
        S.A. de C.V.    S.A. de C.V.   (Ireland or   (Delaware or
              │                         Netherlands)   Singapore)
        Fideicomiso                          │
                                       Licenses IP
                                       to all OpCos
```

**Entities:** 8-9
**Pros:** Maximum tax efficiency; offshore IP regime; exempt surplus for Canada; optimal treaty shopping
**Cons:** High compliance cost ($200K+/year); substance requirements in EU jurisdictions; transfer pricing audit risk; complexity may deter some investors; regulatory scrutiny of aggressive structures
**Estimated effective tax rate:** 15-22%

### 11.4 Recommendation

**Start with the Recommended Structure (11.2) and evolve toward 11.3 as revenue scales.** The aggressive structure's compliance costs are not justified at seed stage, but the architecture should be designed so entities can be added without restructuring existing ones.

Specifically:
- **Year 0-2:** Recommended structure (7 entities)
- **Year 2-3:** Evaluate Barbados IBC insertion based on Canadian dividend flows
- **Year 3-5:** Evaluate EU/Singapore IPCo based on international expansion needs and royalty volumes

---

## 12. Risk Analysis

### 12.1 Structural Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| SAT transfer pricing challenge | Medium-High | High | Contemporaneous documentation; arm's length studies; conservative pricing |
| CRA challenges Canadian holding structure | Low | High | Ensure substance in Canadian entity; obtain advance ruling if possible |
| Veil piercing (undercapitalization) | Low | High | Adequate capitalization of each entity; maintain corporate formalities |
| Treaty benefit denial (LOB clause) | Low-Medium | High | Ensure beneficial ownership; avoid conduit arrangements |
| LFPDPPP enforcement on cross-border data | Medium | Medium | Proper consent; DPAs; adequate protection documentation |
| HIPAA breach | Low | Very High | HIPAA-first architecture; encryption; access controls; cyber insurance |
| Mexico regulatory change (ibogaine) | Low | Very High | Legal monitoring; diversification of treatment modalities |
| U.S. FDCA enforcement (marketing claims) | Medium | Medium | Conservative U.S. marketing; no treatment claims in U.S. materials |

### 12.2 Tax Risks

| Risk | Description | Probability | Mitigation |
|------|-------------|-------------|------------|
| **Double taxation** | CRA and IRS both tax same income | Medium | Dual entry point structure; treaty application; FTC claims |
| **Permanent establishment** | Mexico deems foreign entity has PE | Medium | Clear separation of activities; no management from Mexico |
| **Thin capitalization** | Mexico denies interest deductions | Low | Stay within 3:1 debt-to-equity |
| **40% PTR WHT** | SAT classifies recipient as preferential tax regime | Low | Avoid zero-tax jurisdictions; maintain substance |
| **BEPS scrutiny** | OECD/G20 BEPS actions challenge structure | Low-Medium | Design for substance and economic rationale, not just tax |
| **FX losses** | MXN/USD volatility on intercompany balances | Medium | USD-denominated intercompany agreements; hedging |

### 12.3 Operational Risks to Structure

| Risk | Impact on Structure |
|------|-------------------|
| Failure to form entities before operations begin | All liability falls on founders personally |
| Operating without COFEPRIS license | Criminal penalties; entity seizure |
| Commingling entity funds | Veil piercing; loss of limited liability |
| Missing transfer pricing documentation | Denied deductions; penalties; 40% WHT |
| Inadequate data consent forms | LFPDPPP violations; data unusable for AI/research |
| Not maintaining corporate formalities | Veil piercing in both Mexico and U.S. |

---

## 13. Implementation Roadmap

### Phase 0: Pre-Formation (Now - Q1 2026)

| # | Action | Responsible | Dependencies |
|---|--------|-------------|--------------|
| 1 | Engage cross-border tax advisor (Big 4 or equivalent) | Founders | Budget approval |
| 2 | Engage Delaware corporate counsel | Founders | — |
| 3 | Engage Canadian corporate/tax counsel | Founders | — |
| 4 | Final decision: LLC vs. C-Corp for U.S. entry | Tax advisor + Legal | Tax modeling complete |
| 5 | Final decision: Parent entity jurisdiction | Tax advisor + Legal | Tax modeling complete |
| 6 | Draft investor-facing structure summary | Legal + Founders | Decisions 4 & 5 |

### Phase 1: Entity Formation (Q1-Q2 2026)

| # | Action | Responsible | Dependencies |
|---|--------|-------------|--------------|
| 7 | Form TE Holdings Canada, Inc. (Alberta) | Canadian counsel | Decision 5 |
| 8 | Form U.S. holding entity (Delaware) | U.S. counsel | Decision 4 |
| 9 | Form TE Parent Co | U.S. counsel | Decisions 4 & 5 |
| 10 | Form TE Data & Intelligence, LLC (Delaware) | U.S. counsel | Entity 9 |
| 11 | Form TE IP Holdings, LLC (Delaware) | U.S. counsel | Entity 9 |
| 12 | Form TE Operations Mexico, S.A. de C.V. | Mexican counsel | Entity 9 |
| 13 | Form TE Real Estate Mexico, S.A. de C.V. | Mexican counsel | Entity 9 |
| 14 | Establish fideicomiso (upon property acquisition) | Mexican counsel + bank | Entity 13 + property ID |

### Phase 2: Agreements & Compliance (Q2-Q3 2026)

| # | Action | Responsible | Dependencies |
|---|--------|-------------|--------------|
| 15 | Draft & execute intercompany IP license agreement | U.S. counsel | Entities 11, 12 |
| 16 | Draft & execute data processing agreement (OpCo → DataCo) | U.S. + MX counsel | Entities 10, 12 |
| 17 | Draft & execute intercompany loan agreements | Tax advisor + counsel | All entities |
| 18 | Draft & execute management services agreement | Tax advisor + counsel | All entities |
| 19 | Commission transfer pricing study (benchmarking) | Tax advisor | Agreements 15-18 |
| 20 | Draft patient consent forms (multi-jurisdictional) | Privacy counsel | LFPDPPP + HIPAA analysis |
| 21 | Implement data governance framework | CTO + DPO | DataCo formed |
| 22 | Register trademarks (US, MX, CA) | IP counsel | IPCo formed |
| 23 | COFEPRIS pre-consultation | MX regulatory counsel | OpCo formed |

### Phase 3: Optimization (Year 2-3)

| # | Action | Dependencies |
|---|--------|-------------|
| 24 | Evaluate Barbados IBC insertion | Revenue scale justifies compliance cost |
| 25 | First annual transfer pricing update | Year 1 financials complete |
| 26 | Data monetization strategy (research licensing) | Sufficient anonymized data |
| 27 | International expansion entity planning | Market selection complete |
| 28 | Tokenization feasibility study | Regulatory clarity; villa program launch |

---

## 14. Architecture Diagram

### Complete Entity Structure (Recommended)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         TRANSFORMATIONAL EPICENTER                            │
│                    Corporate & Data Architecture (Recommended)                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│   CANADIAN INVESTORS              U.S. INVESTORS                             │
│   ┌──────────────────┐           ┌──────────────────┐                       │
│   │ TE Holdings      │           │ TE Holdings, LLC │                       │
│   │ Canada, Inc.     │           │ (Delaware, USA)  │                       │
│   │ (Alberta, CA)    │           │ or C-Corp        │                       │
│   └────────┬─────────┘           └────────┬─────────┘                       │
│            │                               │                                  │
│            │  Equity                       │  Equity                          │
│            │                               │                                  │
│            └───────────┐   ┌───────────────┘                                 │
│                        ▼   ▼                                                  │
│              ┌──────────────────────────┐                                    │
│              │    TE PARENT CO          │                                    │
│              │    (Delaware C-Corp)     │                                    │
│              │                          │                                    │
│              │  Master Holding Company  │                                    │
│              │  Cap Table & Governance  │                                    │
│              │  Treasury & Cash Mgmt    │                                    │
│              └──┬─────┬─────┬──────┬───┘                                    │
│                 │     │     │      │                                          │
│        100%    │     │     │      │    100%                                  │
│                │     │     │      │                                          │
│  ┌─────────────┘     │     │      └──────────────┐                          │
│  │                   │     │                      │                          │
│  ▼                   ▼     ▼                      ▼                          │
│  ┌──────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ │
│  │ TE OPS   │  │ TE REAL ESTATE  │  │ TE DATA &       │  │ TE IP        │ │
│  │ MEXICO   │  │ MEXICO          │  │ INTELLIGENCE    │  │ HOLDINGS     │ │
│  │ S.A.de   │  │ S.A. de C.V.   │  │ LLC (Delaware)  │  │ LLC (DE)     │ │
│  │ C.V.     │  │                 │  │                 │  │              │ │
│  │          │  │ Real Estate     │  │ Anonymized Data │  │ Clinical     │ │
│  │ Medical  │  │ via Fideicomiso │  │ AI/ML Models    │  │ Protocols    │ │
│  │ Wellness │  │ Bank Trust      │  │ Analytics       │  │ Technology   │ │
│  │ Hospital-│  │ 50-yr renewable │  │ Research        │  │ Trademarks   │ │
│  │ ity Ops  │  │                 │  │                 │  │ Trade        │ │
│  │          │  │                 │  │                 │  │ Secrets      │ │
│  └────┬─────┘  └───────┬─────────┘  └─────────────────┘  └──────┬───────┘ │
│       │                │                                          │          │
│       │  Lease         │  Fideicomiso                  IP License │          │
│       │                │                                          │          │
│       │         ┌──────▼──────────┐         ┌─────────────────────┘          │
│       │         │  FIDEICOMISO    │         │                                │
│       │         │  (Bank Trust)   │         │  Royalties                     │
│       │         │  Legal Title    │         │                                │
│       └────────►│  50-yr term     │         │                                │
│                 └─────────────────┘         ▼                                │
│                                    ┌──────────────┐                          │
│                                    │  FLOWS:      │                          │
│                                    │  OpCo → IPCo │                          │
│                                    │  (Royalties) │                          │
│                                    │  OpCo → DataCo│                         │
│                                    │  (Data Fees) │                          │
│                                    │  OpCo → Parent│                         │
│                                    │  (Mgmt Fees) │                          │
│                                    │  OpCo → PropCo│                         │
│                                    │  (Rent)      │                          │
│                                    └──────────────┘                          │
│                                                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│  PHASE 2 (Year 2-3): Potential Barbados IBC insertion between              │
│  Canadian HoldCo and Parent Co for exempt surplus optimization             │
├─────────────────────────────────────────────────────────────────────────────┤
│  PHASE 3 (Year 3-5): International expansion OpCos; potential EU/SG       │
│  IPCo migration; tokenization layer for villa program                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           DATA FLOW ARCHITECTURE                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  GUEST / PATIENT                                                             │
│  ┌──────────────┐                                                            │
│  │ Consent      │  Explicit, granular consent for:                          │
│  │ (Multi-layer)│  ├── Medical treatment                                    │
│  │              │  ├── Data collection (clinical)                           │
│  │              │  ├── Anonymized research use                              │
│  │              │  ├── AI model training                                    │
│  │              │  └── Third-party licensing (opt-in)                       │
│  └──────┬───────┘                                                            │
│         │                                                                     │
│         ▼                                                                     │
│  TE OPERATIONS MEXICO (Clinical Environment)                                │
│  ┌──────────────────────────────────────────────────┐                       │
│  │  RAW PHI ZONE (HIPAA + LFPDPPP Compliant)        │                       │
│  │  ├── Medical records (NOM-168 compliant)          │                       │
│  │  ├── Lab results, brain maps, biomarkers          │                       │
│  │  ├── Treatment notes, clinical assessments        │                       │
│  │  ├── AES-256 encryption, row-level security       │                       │
│  │  └── 7-year retention; audit logged               │                       │
│  └──────────────┬───────────────────────────────────┘                       │
│                 │                                                             │
│                 │  ANONYMIZATION PIPELINE                                    │
│                 │  (HIPAA Safe Harbor / Expert Determination)                │
│                 │  ├── 18 HIPAA identifiers removed                         │
│                 │  ├── K-anonymity applied                                  │
│                 │  ├── Re-identification risk < 0.04%                       │
│                 │  └── Documented, auditable process                        │
│                 │                                                             │
│                 ▼                                                             │
│  TE DATA & INTELLIGENCE (Delaware)                                          │
│  ┌──────────────────────────────────────────────────┐                       │
│  │  ANONYMIZED DATA ZONE                              │                       │
│  │  ├── De-identified outcome datasets                │                       │
│  │  ├── Pharmacogenomic correlations (aggregate)      │                       │
│  │  ├── AI/ML model training environment              │                       │
│  │  ├── Research-grade datasets                       │                       │
│  │  └── Licensed insights (back to OpCo & third parties) │                   │
│  └──────────────────────────────────────────────────┘                       │
│                                                                               │
│  COMPLIANCE: LFPDPPP cross-border transfer rules satisfied via:             │
│  ├── Data Processing Agreement (OpCo → DataCo)                              │
│  ├── Patient consent with cross-border disclosure                           │
│  ├── Adequate protection certification (DataCo HIPAA compliance)            │
│  └── Annual privacy impact assessment                                       │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 15. Open Questions for Counsel

The following questions must be resolved with qualified legal and tax advisors before finalizing the structure:

### Tax & Corporate Structure

1. **LLC vs. C-Corp for U.S. entry point:** Given the specific investor mix, which entity provides the best overall tax outcome? Need tax modeling with actual projected numbers.

2. **Barbados IBC timing:** At what revenue level does the Barbados IBC's compliance cost (~$40-60K/year) justify the exempt surplus benefit for Canadian investors? What is the break-even?

3. **Parent Co jurisdiction:** Delaware C-Corp vs. Barbados IBC as the master parent — what are the specific treaty implications for Mexico WHT on each intercompany flow?

4. **Intercompany loan quantum:** What is the optimal debt-to-equity ratio for capitalizing the Mexican subsidiaries, staying within thin-cap limits while maximizing interest deductions?

5. **Royalty rate defensibility:** What comparable uncontrolled transaction data supports a specific royalty rate for ibogaine treatment protocol licensing? This is novel IP — how do we benchmark?

6. **IEPS applicability:** Do any of the health/wellness services trigger Mexico's Impuesto Especial sobre Produccion y Servicios?

7. **PTU (profit sharing) planning:** How should the intercompany pricing strategy account for Mexico's 10% employee profit sharing obligation?

### Data & IP

8. **Data ownership vs. data stewardship:** Under LFPDPPP, can a separate U.S. entity "own" anonymized data derived from Mexican patient interactions, or must the Mexican entity retain ownership with a license to the U.S. entity?

9. **Consent form architecture:** What specific language is required in patient consent forms to enable all planned data uses (clinical, research, AI training, third-party licensing) under LFPDPPP, HIPAA, and PIPEDA simultaneously?

10. **Genetic data restrictions:** Mexico's General Health Law has specific provisions regarding genetic data. What are the precise limitations on collecting, storing, and transferring DNA/pharmacogenomic data across borders?

11. **AI model ownership:** If an AI model is trained on anonymized data derived from Mexican patient encounters, who owns the model — the entity that collected the data, the entity that trained the model, or the entity that paid for the training?

12. **Research ethics review:** Is an IRB (Institutional Review Board) or Mexican CONBIOETICA equivalent required for using anonymized patient data in AI training and research, even if the data is fully de-identified?

### Regulatory

13. **COFEPRIS scope:** Does the DataCo's use of anonymized clinical data for AI model development require separate COFEPRIS authorization beyond the OpCo's facility license?

14. **Marketing restrictions:** What specific claims can and cannot be made in U.S. and Canadian marketing materials about ibogaine treatment outcomes, given that ibogaine is Schedule I in the U.S.?

15. **Professional licensing:** Do any of the physicians, psychologists, or facilitators need dual licensing (Mexico + home country) if they are treating patients from their home jurisdiction?

---

## 16. Sources & References

### Tax Treaties & Corporate Tax

- [Mexico Tax Treaty - Freeman Law](https://freemanlaw.com/international-tax-treaties/mexico/)
- [Doing Business in Mexico: Tax Treaties - Prodensa](https://www.prodensa.com/insights/blog/doing-business-in-mexico-a-guide-to-tax-treaties)
- [Mexico WHT Rates - PwC Tax Summaries](https://taxsummaries.pwc.com/mexico/corporate/withholding-taxes)
- [Corporate Tax 2025 Mexico - Chambers](https://practiceguides.chambers.com/practice-guides/corporate-tax-2025/mexico)
- [Canada-Mexico Tax Convention Act, 2006](https://laws-lois.justice.gc.ca/eng/acts/C-6.85/FullText.html)
- [US-Mexico Tax Treaty Documents - IRS](https://www.irs.gov/businesses/international-businesses/mexico-tax-treaty-documents)

### Canadian Cross-Border Structures

- [LLC vs C-Corp for Canadian Business Owners - Lodder CPA](https://www.loddercpa.com/blog/u-s-entity-structures-explained-llc-vs-c-corp-for-canadian-business-owners)
- [Canadian Owning US LLC Tax - Nomad Tax Blueprint](https://nomadtaxblueprint.com/articles/ca-articles/canadian-owning-us-llc-tax/)
- [US-Canada Cross-Border Taxation 2025 - Houseblend](https://www.houseblend.io/articles/us-canada-cross-border-taxation-2025)
- [Barbados Tax Treaty Advantages - Rogerson Law](https://www.rogersonlaw.com/tax-lawyer/taking-advantage-of-the-double-tax-treaty-with-barbados/)
- [Canada-Barbados Tax Treaty - Offshore Freedom](https://offshore-freedom.com/blog-articles/canada-barbados-tax-treaty-comprehensive-guide/)

### Transfer Pricing

- [Transfer Pricing 2025 Mexico - Chambers](https://practiceguides.chambers.com/practice-guides/transfer-pricing-2025/mexico)
- [SAT 2026 Transfer Pricing Risks - QCG](https://qcgtransferpricing.com/en/blog/key-developments-in-transfer-pricing-in-mexico/)
- [USA to Mexico Transfer Pricing - Commenda](https://www.commenda.io/transfer-pricing/usa-to-mexico-transfer-pricing)
- [Mexico Transfer Pricing - Grant Thornton](https://www.grantthornton.global/en/insights/articles/transfer-pricing---Mexico/)

### Data Protection & Privacy

- [Mexico LFPDPPP 2025 Overhaul - White & Case](https://www.whitecase.com/insight-alert/mexico-enacts-new-data-protection-regime)
- [Mexico Privacy Law LFPDPPP 2025 Guide - SecurePrivacy](https://secureprivacy.ai/blog/mexico-privacy-law-lfpdppp-2025)
- [LFPDPPP 2025: Mexico's New Rules for Privacy and AI - Truyo](https://truyo.com/lfpdppp-2025-why-businesses-cant-ignore-mexicos-new-rules-for-privacy-and-ai-governance/)
- [Mexico's New Data Protection Law - Hogan Lovells](https://www.hoganlovells.com/en/publications/mexicos-new-federal-data-protection-law-what-it-means-for-companies)
- [Mexico's New Data Protection Law - Greenberg Traurig](https://www.gtlaw.com/en/insights/2025/3/nueva-ley-general-proteccion-de-datos)

### HIPAA Cross-Border

- [HIPAA for Cross-Border Healthcare - HIPAA Vault](https://www.hipaavault.com/resources/hipaa-compliant-hosting-insights/hipaa-for-cross-border-healthcare-partnerships/)
- [International HIPAA Considerations in Mexico - Physician's Practice](https://www.physicianspractice.com/view/international-hipaa-considerations-mexico)
- [HIPAA for US-Mexico Healthcare - Gil Vidals](https://www.linkedin.com/pulse/hipaa-cross-border-healthcare-what-us-mexico-must-know-gil-vidals-nvasc)

### Tokenization & Digital Assets

- [2026 Blockchain Regulatory Outlook - Sidley Austin](https://www.sidley.com/en/insights/newsupdates/2026/01/sidley-blockchain-bulletin-blockchain-in-2026-business-legal-and-regulatory-outlook)
- [Tokenization Trends for Real-World Assets 2026 - BDO](https://www.bdo.com/insights/industries/fintech/trends-in-tokenization-reimagining-real-world-assets)
- [Digital Assets 2026 - K&L Gates](https://www.klgates.com/Crypto-in-2026-The-Democratization-of-Digital-Assets-1-29-2026)

### Fideicomiso & Mexico Real Estate

- [Fideicomiso Trusts 2025 - MyCasa](https://mycasa.mx/blog/2025-fideicomiso-foreign-property-ownership-mexico)
- [Buying Property in Mexico's Restricted Zone - MexicoLife](https://www.mexicolife.com/blog/buying-property-in-mexicos-restricted-zone-complete-faq-for-foreign-buyers.html)
- [Fideicomiso Guide - Cabo La Estancia](https://cabolaestancia.com/villas-for-sale/understanding-fideicomiso-your-guide-to-owning-property-in-mexico/)

### IP Holding Structures

- [Best Jurisdiction for IP Holding Company 2024 - OCBF Consulting](https://ocbfconsulting.com/best-jurisdiction-for-ip-holding-company-a-2024-guide/)
- [IP Holding Companies - Flag Theory](https://flagtheory.com/ip-intellectual-property-holding/)
- [Biotech Data and IP Strategy - ICLG Digital Health](https://iclg.com/practice-areas/digital-health-laws-and-regulations/02-protecting-biotech-s-data-frontier-a-guide-to-ip-and-asset-strategy-in-the-age-of-ai)

---

## Appendix A: Glossary

| Term | Definition |
|------|-----------|
| **ABCA** | Alberta Business Corporations Act |
| **BAA** | Business Associate Agreement (HIPAA) |
| **BEPS** | Base Erosion and Profit Shifting (OECD) |
| **CbCR** | Country-by-Country Report |
| **COFEPRIS** | Federal Commission for the Protection against Sanitary Risks (Mexico) |
| **CRA** | Canada Revenue Agency |
| **CUT** | Comparable Uncontrolled Transaction (transfer pricing method) |
| **DataCo** | TE Data & Intelligence, LLC |
| **DPA** | Data Processing Agreement |
| **DPO** | Data Protection Officer |
| **FTC** | Foreign Tax Credit |
| **HoldCo** | Holding Company |
| **IBC** | International Business Company (Barbados) |
| **IEPS** | Impuesto Especial sobre Produccion y Servicios (Mexican special tax) |
| **IMSS** | Instituto Mexicano del Seguro Social |
| **IPCo** | TE IP Holdings, LLC |
| **IRB** | Institutional Review Board |
| **ITA** | Income Tax Act (Canada) |
| **LFPDPPP** | Ley Federal de Proteccion de Datos Personales en Posesion de los Particulares |
| **LISR** | Ley del Impuesto sobre la Renta (Mexican Income Tax Law) |
| **LOB** | Limitation on Benefits (treaty provision) |
| **ManagementCo** | TE Management Services entity |
| **NOM** | Norma Oficial Mexicana (Mexican Official Standard) |
| **OpCo** | TE Operations Mexico, S.A. de C.V. |
| **PE** | Permanent Establishment |
| **PHI** | Protected Health Information |
| **PIPEDA** | Personal Information Protection and Electronic Documents Act (Canada) |
| **PropCo** | TE Real Estate Mexico, S.A. de C.V. |
| **PTR** | Preferential Tax Regime |
| **PTU** | Participacion de los Trabajadores en las Utilidades (Mexico profit sharing) |
| **SAT** | Servicio de Administracion Tributaria (Mexican tax authority) |
| **TNMM** | Transactional Net Margin Method (transfer pricing) |
| **WHT** | Withholding Tax |

---

## Appendix B: Decision Matrix Summary

| Decision | Options | Recommendation | Urgency |
|----------|---------|---------------|---------|
| U.S. entity type | LLC vs. C-Corp | C-Corp (if mixed investors) | **Critical — decide before formation** |
| Parent Co jurisdiction | Delaware vs. Barbados | Delaware now; Barbados Phase 2 | High — impacts all flows |
| Canadian entity province | Alberta vs. BC vs. Ontario | Alberta (lowest rate) | Medium — before Canadian capital |
| DataCo jurisdiction | Delaware vs. Singapore vs. EU | Delaware (simplicity at scale) | Medium — before data collection |
| IPCo jurisdiction | Delaware vs. Ireland vs. Netherlands | Delaware now; reconsider at scale | Medium — before IP licensing |
| Intercompany debt ratio | Conservative (1:1) vs. Optimized (3:1) | Start 2:1; optimize with counsel | Medium — at capitalization |
| Royalty rate | 3% vs. 5% vs. 8% | 5% (defensible middle ground) | Medium — before operations |
| Barbados IBC insertion | Yes/No, timing | No at seed; evaluate Year 2-3 | Low — future optimization |

---

**Document Status:** DRAFT v0.1 — For Internal Team Review
**Last Updated:** February 2026
**Next Review:** Upon engagement of cross-border tax counsel
**Distribution:** Founding team and key advisors only

---

*This document represents an AI-assisted strategic analysis and does not constitute legal, tax, or financial advice. All recommendations must be validated by qualified professionals licensed in the relevant jurisdictions. Tax laws, treaty interpretations, and regulatory requirements are subject to change. The estimates and projections contained herein are directional only and should be confirmed through professional tax modeling with actual projected financials.*
