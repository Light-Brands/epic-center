# Light Brands AI — Corporate Setup & Equity Structure

> **Status:** Formation-ready specification — requires international counsel validation
> **Last Updated:** February 15, 2026
> **Scope:** Clean-slate corporate formation for Light Brands AI. Real equity ownership. Four entities: PIF → Panama Holdings → LBC (Cook Islands IBC) / LBS (Cyprus Studio).
> **Brand:** Light Brands AI — an AI consulting, SaaS, and product company
> **Founder:** Daniel Lawless (renouncing US citizenship prior to formation)

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Light Brands AI — What It Is](#2-light-brands-ai)
3. [Corporate Architecture](#3-corporate-architecture)
4. [Ownership & Cap Table](#4-ownership-and-cap-table)
5. [Entity Detail: Panama PIF](#5-panama-pif)
6. [Entity Detail: Panamanian Holdings S.A.](#6-panamanian-holdings-sa)
7. [Entity Detail: Light Brands AI Ltd (Cook Islands IBC)](#7-light-brands-ai-ltd)
8. [Founder Roles & Compensation](#8-founder-compensation)
9. [Wife's Position](#9-wife-position)
10. [Remote Team Structure](#10-remote-team)
11. [IP Ownership](#11-ip-ownership)
12. [Banking & Payments](#12-banking-and-payments)
13. [Revenue Flow & Tax Waterfall](#13-revenue-flow)
14. [Annual Cost Analysis](#14-cost-analysis)
15. [Governance & Decision-Making](#15-governance)
16. [Jason Sparks — US Citizen Considerations](#16-jason-sparks)
17. [Open Questions for Counsel](#17-open-questions)

---

## 1. Executive Summary {#1-executive-summary}

Light Brands AI is a new AI consulting, SaaS, and product company. Nothing has been formed. Nothing has been signed. This document specifies the corporate structure from scratch.

### Design Principles

| Principle | Implementation |
|-----------|---------------|
| **Real equity ownership** | Founders hold actual shares (not phantom equity, not PPAs). Standard corporate mechanics. |
| **Minimum viable structure** | Four entities total. PIF → S.A. → CI IBC (consulting) + Cyprus Studio (development). |
| **Near-zero entity-level tax** | PIF (0%) → S.A. (0% territorial) → CI IBC (0%) + Cyprus Studio (15% on cost-plus margin only). Total entity tax: ~0.4% of revenue. |
| **100% remote** | No office, no employees on payroll. Contractors + EOR worldwide. |
| **Asset protection** | Panama PIF + Cook Islands IBC = strongest protection stack available. |
| **Divorce protection** | Dan's equity held through PIF, not personally. PIF is independent legal person. |
| **Simplicity** | One consulting entity, one development studio, one holding company, one foundation. Clean split. |

### The Math

| Metric | Value |
|--------|-------|
| Total entities | **4** |
| Total annual overhead | **~$27-43K** |
| Entity-level tax rate | **~0.4% of revenue** (15% Cyprus tax on cost-plus margin only) |
| Dan's personal tax rate (post-renunciation) | **0%** |
| Wife's personal tax rate ($130K salary via FEIE) | **0%** |
| Combined household tax | **$0-$7,400/yr** (only if wife has additional income beyond FEIE) |

---

## 2. Light Brands AI — What It Is {#2-light-brands-ai}

| Attribute | Detail |
|-----------|--------|
| **Brand** | Light Brands AI |
| **Legal entity** | Light Brands AI Ltd (Cook Islands IBC) |
| **Business lines** | AI consulting, SaaS products, AI-powered tools, digital products |
| **Team** | 100% remote — developers, designers, AI/ML engineers worldwide |
| **Clients** | Global — B2B and B2C |
| **Physical presence** | None. No office. No country of operations. |
| **Headquarters** | Registered office: Cook Islands (via registered agent). Banking: Singapore. Team: everywhere. |

### Revenue Streams

| Stream | Description | Example |
|--------|-------------|---------|
| **Consulting** | AI strategy, implementation, and advisory for enterprise clients | Custom AI agent builds, system architecture |
| **SaaS** | Recurring subscription products | AI tools, platforms, automation suites |
| **Products** | One-time digital product sales | Frameworks, templates, AI models |
| **Licensing** | IP licensing to third parties | Technology licenses, white-label agreements |

All revenue streams flow through LBC — Light Brands AI Ltd (CI IBC). Development delivery is contracted to LBS — Light Brands Studio Ltd (Cyprus).

---

## 3. Corporate Architecture {#3-corporate-architecture}

### Four Entities. Clean Split: PIF → Panama Holdings → LBC CI / LBS CY

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  LAYER 1: ASSET PROTECTION + OWNERSHIP                               │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │              FUNDACIÓN LIGHT BRANDS (PIF)                     │   │
│  │              Panama Private Interest Foundation               │   │
│  │                                                               │   │
│  │  Independent legal person — has no "owner"                    │   │
│  │  Beneficiaries: Dan + other non-US founders                   │   │
│  │  Tax: 0% on all foreign income                                │   │
│  │  Asset protection: Panama Law 25 of 1995                      │   │
│  │  Divorce protection: PIF assets ≠ personal property           │   │
│  └────────────────────────┬──────────────────────────────────────┘   │
│                           │ 100% ownership                            │
│                           ▼                                           │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │         LIGHT BRANDS HOLDINGS S.A.                            │   │
│  │         (Panamanian Corporation)                               │   │
│  │                                                               │   │
│  │  Central holding company — ALL founders are shareholders:      │   │
│  │    PIF (Dan) 30% │ Nicholas 30% │ Andreas 30% │ Jason 10%    │   │
│  │  Owns 100% of BOTH operating entities                         │   │
│  │  Tax: 0% on foreign-source income (territorial)               │   │
│  │  Banking: Panama account for operational flexibility          │   │
│  └──────────┬──────────────────────────────────┬─────────────────┘   │
│             │ 100% ownership                   │ 100% ownership       │
│             ▼                                  ▼                      │
│  LAYER 2: REVENUE + DELIVERY                                         │
│                                                                      │
│  ┌────────────────────────────┐   ┌──────────────────────────────┐  │
│  │  LBC — LIGHT BRANDS AI LTD │   │  LBS — LIGHT BRANDS STUDIO   │  │
│  │  (Cook Islands IBC)         │   │  LTD                         │  │
│  │  "THE BRAIN"                │   │  (Cyprus Private Company)    │  │
│  │                             │   │  "THE HANDS"                 │  │
│  │  • Client-facing            │   │                              │  │
│  │  • Owns IP + methodology   │──►│  • Development delivery      │  │
│  │  • Bears credit risk        │   │  • Real office in Cyprus     │  │
│  │  • Invoices clients         │   │  • Real employees (devs)     │  │
│  │  • Contracts dev to Cyprus  │   │  • Andreas Demou = Director  │  │
│  │  • 0% tax (unconditional)   │   │  • Cost-plus pricing         │  │
│  │                             │   │  • 15% tax on margin only    │  │
│  │  Asset protection: #1       │   │                              │  │
│  │  Banking: Singapore, Wise   │   │  Banking: Cyprus (EU/SEPA)   │  │
│  └────────────────────────────┘   └──────────────────────────────┘  │
│                                                                      │
│  LAYER 3: PEOPLE                                                     │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  Dan Lawless — Director of CI IBC. Client relationships.      │   │
│  │  Andreas Demou — Director of Cyprus Studio. Runs the office.  │   │
│  │  Nicholas Courschesne — Co-founder (via his own PIF)           │   │
│  │  Jason Sparks — Co-founder (direct S.A. shareholder, US)      │   │
│  │  Wife — Contractor to CI IBC (US citizen, NOT a shareholder)  │   │
│  │  Dev team — Employees of Cyprus Studio + CI IBC contractors   │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Why Each Entity Exists

| Entity | Why It Exists | What Happens Without It |
|--------|--------------|------------------------|
| **Fundación Light Brands (PIF)** | Asset protection. Divorce protection. Dan's equity is held by an independent legal person, not Dan personally. | Dan's shares are personal property — exposed in divorce, lawsuits, creditor claims |
| **Light Brands Holdings S.A.** | Central holding company. All founders are shareholders (Dan's PIF 30%, Nicholas's PIF 30%, Andreas 30%, Jason 10%). Owns 100% of both operating entities. Banking flexibility + asset protection. | No central governance — each founder would hold shares directly in each operating entity, complicating management |
| **LBC — Light Brands AI Ltd (CI IBC)** | The consulting principal. Client-facing, owns all IP, bears risk. 0% tax. Strongest asset protection jurisdiction globally. | No client-facing entity exists |
| **LBS — Light Brands Studio Ltd (Cyprus)** | The development shop. Employs team, runs office, delivers work. Provides ironclad substance for the group. 15% tax on cost-plus margin only. | Zero substance — PE claims, banking friction, enterprise client hesitancy |

### Why Cyprus Studio Instead of Dubai

| Dubai Element | Why It Was Considered | Why Cyprus Studio Is Better |
|--------------|----------------------|---------------------------|
| FZ-LLC with QFZP status | 0% corporate tax + employs team for substance | Cyprus provides real substance (EU jurisdiction, real office, real employees) with only 12.5% on cost-plus markup — the CI IBC retains 0% on all revenue |
| Golden Visa | FEIE bona fide residence for US tax | Dan won't be a US citizen — no FEIE needed for him |
| Office space + visas | Required for FZ-LLC license, expensive | Cyprus office is cheaper (~$2-3K/mo), and Andreas (Cyprus citizen) handles all local operations |
| QFZP compliance risk | Complex qualifying conditions, audit risk | No equivalent compliance risk in Cyprus — standard corporate tax regime |
| **Dubai overhead saved: ~$35-65K/yr** | | **Cyprus overhead: ~$30K/yr + minimal tax** |

---

## 4. Ownership & Cap Table {#4-ownership-and-cap-table}

### Real Equity — Not Phantom Equity

Previous planning documents referenced PPAs (Profit Participation Agreements) — phantom equity that mimics real ownership without triggering US tax consequences. PPAs existed because the lead founder was a US citizen, and real ownership of foreign corporations triggers CFC, GILTI, and Form 5471 requirements.

**With Dan renouncing US citizenship before formation, PPAs are unnecessary.** Real shares are simpler, standard, and enforceable under corporate law.

### Cap Table — Light Brands Holdings S.A.

All equity lives at the S.A. level. Both operating entities (LBC + LBS) are **100% owned by the S.A.**

| S.A. Shareholder | Shares | Ownership | Held Through | Citizenship/Residence |
|------------------|--------|-----------|-------------|----------------------|
| **Fundación Light Brands** (Dan's PIF) | 300 | **30%** | PIF → S.A. | Dan: Grenada citizen (renounced US), Costa Rica/Panama resident |
| **Nicholas's PIF** | 300 | **30%** | PIF → S.A. | Nicholas: renounced Canadian citizen |
| **Andreas Demou** | 300 | **30%** | Direct | Cyprus citizen |
| **Jason Sparks** | 100 | **10%** | Direct | US citizen |
| **Total** | **1,000** | **100%** | | |

| Operating Entity | Ownership |
|------------------|-----------|
| **LBC — Light Brands AI Ltd (CI IBC)** | 100% owned by S.A. |
| **LBS — Light Brands Studio Ltd (Cyprus)** | 100% owned by S.A. |

### Share Structure (S.A.)

| Parameter | Value |
|-----------|-------|
| Authorized shares | 1,000 ordinary shares |
| Par value | $1.00 per share |
| Issued shares | 1,000 |
| Share classes | Single class (one vote per share) |
| Vesting | As agreed by founders (recommend 4-year vest, 1-year cliff) |
| Transfer restrictions | Board approval required. Right of first refusal for existing shareholders. |

### How Dan's Equity Is Protected

```
Dan (personally) owns NOTHING in Light Brands.

Instead:

Fundación Light Brands (Dan's PIF)
    → holds 30% of Light Brands Holdings S.A.
        → S.A. owns 100% of LBC (CI IBC)
        → S.A. owns 100% of LBS (Cyprus Studio)

Dan is a BENEFICIARY of the PIF.
Dan is NOT a shareholder, director, or officer of the S.A.
Dan IS a director of LBC (CI IBC) — operational role only.

In divorce:
    Dan's personal assets = divisible
    PIF assets = NOT divisible (independent legal person under Panama Law 25)
    S.A. shares = owned by PIF, not Dan
    LBC + LBS = owned by S.A., not Dan

Result: Dan's 30% equity is protected by three legal layers.

Nicholas has the same protection through his own PIF.
```

### What Each Founder Owns

| Founder | Economic Rights | Voting Rights | Dividend Rights | Board Seat |
|---------|----------------|---------------|-----------------|------------|
| Dan (via S.A.) | 30% of distributable profits | 30% of votes | 30% of declared dividends | Yes (CI IBC Director) |
| Nicholas | 30% of distributable profits | 30% of votes | 30% of declared dividends | Yes (Director) |
| Andreas | 30% of distributable profits | 30% of votes | 30% of declared dividends | Yes (Cyprus Studio Director) |
| Jason | 10% of distributable profits | 10% of votes | 10% of declared dividends | Optional |

---

## 5. Entity Detail: Panama PIF {#5-panama-pif}

### Fundación Light Brands

| Element | Detail |
|---------|--------|
| **Type** | Private Interest Foundation (Fundación de Interés Privado) |
| **Governing law** | Panama Law 25 of June 12, 1995 |
| **Legal status** | Independent legal person — not a trust, not a company |
| **"Owner"** | None. A PIF has no owner. The founder creates it, endows it, and it becomes independent. |
| **Founder** | Dan Lawless (irrevocable after formation) |
| **Foundation Council** | 3 members minimum — manages the PIF. At least 1 must be Panamanian resident (typically the registered agent's nominee). |
| **Protector** | Independent advisor (optional but recommended). Can veto Foundation Council decisions, replace Council members. |
| **Beneficiaries** | Dan Lawless, Nicholas Courschesne, Andreas Demou. **NOT wife. NOT Jason Sparks (US citizen).** |
| **Foundation Charter** | Public document filed with Panama Public Registry. States name, registered agent, Foundation Council members, initial endowment. Does NOT name beneficiaries. |
| **Private Regulations** | Private document. Names beneficiaries, distribution rules, succession. NOT filed publicly. |
| **Registered agent** | Required — must be a Panamanian law firm |
| **Initial endowment** | Minimum $10,000 (typically in cash) |

### Tax Treatment

| Income Type | Tax Rate |
|-------------|----------|
| Foreign-source income (dividends from S.A.) | **0%** |
| Foreign-source interest | **0%** |
| Foreign-source capital gains | **0%** |
| Distributions to non-Panamanian beneficiaries | **0% WHT** |
| Local Panamanian income | 25% (not applicable — PIF has no Panama operations) |

### PIF Structure

Two PIFs exist — one for Dan, one for Nicholas. Each PIF holds its founder's 30% of the S.A.

| PIF | Beneficiary | S.A. Ownership |
|-----|------------|----------------|
| **Fundación Light Brands** (Dan's PIF) | Dan Lawless | 30% of S.A. |
| **Nicholas's PIF** (name TBD) | Nicholas Courschesne | 30% of S.A. |

**Not in a PIF:**

| Person | Why Direct | S.A. Ownership |
|--------|-----------|----------------|
| **Andreas Demou** | Cyprus citizen — no need for PIF protection (stays in Cyprus, no renunciation). Holds S.A. shares directly. | 30% direct |
| **Jason Sparks** | US citizen — PIF beneficiary status could create foreign trust attribution under IRC 679/684. Holds S.A. shares directly. | 10% direct |

**Wife is excluded from all PIFs and equity.** She receives money through contractor fees from CI IBC and gifts from Dan.

### Annual Requirements

| Requirement | Cost |
|-------------|------|
| Registered agent fee | ~$1,000-2,000/yr |
| Government annual fee | ~$400/yr |
| Foundation Council fees (if nominees used) | ~$500-1,000/yr |
| **Total** | **~$2,000-3,500/yr** |

---

## 6. Entity Detail: Panamanian Holdings S.A. {#6-panamanian-holdings-sa}

### Light Brands Holdings S.A.

| Element | Detail |
|---------|--------|
| **Type** | Sociedad Anónima (Panamanian corporation) |
| **Governing law** | Panama Law 32 of 1927 |
| **Shareholders** | Dan's PIF (30%), Nicholas's PIF (30%), Andreas Demou (30%), Jason Sparks (10%) |
| **Directors** | 3 minimum under Panama law. Nominee directors from registered agent + PIF Foundation Council overlap |
| **Officers** | President, Secretary, Treasurer (can be same as directors) |
| **Purpose** | Central holding company. Owns 100% of LBC (CI IBC) and LBS (Cyprus Studio). All founders are shareholders. |
| **Registered agent** | Same firm as PIF (simplifies) |
| **Bearer shares** | Not used (eliminated by Panama in 2015 — all shares must be registered or immobilized) |

### Tax Treatment

| Income Type | Tax Rate |
|-------------|----------|
| Dividends received from CI IBC (foreign-source) | **0%** (territorial — Panama only taxes domestic income) |
| Capital gains on foreign assets | **0%** |
| Dividends paid to PIF (sole shareholder) | **0% WHT** |

### Why This Entity Exists

The S.A. serves as the **central holding company** for all founders and both operating entities. This is standard practice because:

1. **Single cap table** — one shareholders' agreement governs all equity. No need to mirror cap tables across entities.
2. **100% ownership of operating entities** — clean, simple ownership. Both LBC and LBS are wholly-owned subsidiaries.
3. **Asset protection** — Dan and Nicholas hold their shares through PIFs. A creditor must pierce PIF + S.A. to reach operating entity value.
4. **Banking flexibility** — the S.A. can hold bank accounts for operational purposes
5. **Standard mechanics** — dividends flow operating entities → S.A. → shareholders through well-understood corporate channels

### Annual Requirements

| Requirement | Cost |
|-------------|------|
| Registered agent fee | ~$800-1,500/yr |
| Government annual franchise tax | ~$300-500/yr |
| Nominee director fees (if used) | ~$500-1,000/yr |
| **Total** | **~$1,600-3,000/yr** |

---

## 7. Entity Detail: Light Brands AI Ltd (Cook Islands IBC) {#7-light-brands-ai-ltd}

### The Operating Entity

| Element | Detail |
|---------|--------|
| **Type** | International Business Company |
| **Governing law** | Cook Islands International Companies Act 1981-82 |
| **Registered agent** | Required — licensed CI trustee company in Rarotonga |
| **Registered office** | At registered agent's address |
| **Share capital** | 1,000 ordinary shares at $1.00 par value |
| **Shareholders** | Light Brands Holdings S.A. (sole shareholder — 100%) |
| **Directors** | Dan Lawless (operational) + nominee director (CI or Singapore) |
| **Secretary** | Optional (recommended) |
| **Employees** | Zero. All team are contractors. |
| **Office space** | None. Registered office only. |
| **Public registry** | Company name, agent, incorporation date. Directors/shareholders are private. |

### Tax Treatment

| Income Type | Tax Rate | Basis |
|-------------|----------|-------|
| Consulting revenue | **0%** | IBC international income exemption |
| SaaS/subscription revenue | **0%** | IBC international income exemption |
| Product sales revenue | **0%** | IBC international income exemption |
| Licensing/royalty income | **0%** | IBC international income exemption |
| Interest income | **0%** | IBC international income exemption |
| Capital gains | **0%** | IBC international income exemption |
| Dividends paid to shareholders | **0% WHT** | No withholding on IBC distributions |

**The 0% is unconditional.** No substance requirements. No qualifying activity test. No revenue threshold. As long as the entity does not transact with Cook Islands residents or hold CI real property.

### What This Entity Does — "The Brain"

The CI IBC is the **principal entity** — it owns the clients, the IP, and the risk:

- Signs all client contracts (consulting agreements, SaaS terms of service, license agreements)
- Collects all revenue (Stripe for recurring, bank transfers for enterprise, Wise for international)
- Owns all intellectual property (AI tools, platforms, frameworks, code, designs)
- Contracts all development work to **Light Brands Studio Ltd (Cyprus)**
- Pays non-Cyprus contractors worldwide (via Wise, Deel, or direct bank transfer)
- Holds the Singapore bank account (primary operating account)
- Manages operational expenses (cloud infrastructure, SaaS tools, marketing)
- Bears all client credit risk and entrepreneurial risk

### What This Entity Does NOT Do

- Employ anyone (zero payroll — developers are employed by Cyprus Studio)
- Maintain physical office space (zero premises)
- Perform development work (contracted to Cyprus Studio via MDSA)
- Conduct business with Cook Islands residents
- Hold Cook Islands real property
- Have 3+ CI-resident directors (which would trigger domestic tax)

### Annual Requirements

| Requirement | Cost |
|-------------|------|
| Registered agent annual fee | ~$1,500-2,500/yr |
| Government annual license | ~$300-500/yr |
| Nominee director fee | ~$500-1,000/yr |
| Bank account maintenance (Singapore) | ~$200-500/yr |
| **Total** | **~$2,500-4,500/yr** |

---

## 8. Founder Roles & Compensation {#8-founder-compensation}

### How Founders Get Paid

With real equity, founders receive income through two standard corporate channels:

| Channel | Mechanism | Frequency |
|---------|-----------|-----------|
| **Dividends** | Board declares dividend. Distributed pro-rata by shareholding. | Quarterly (recommended) |
| **Contractor/director fees** | For active founders providing services. CI IBC pays per contractor agreement. | Monthly |

### Dan's Compensation (Post-Renunciation)

| Channel | Amount | Tax to Dan | Rate |
|---------|--------|-----------|------|
| Director/contractor fee | $120-250K/yr | $0 (Grenada citizen, territorial country resident) | **0%** |
| Dividends (30% of declared dividends) | Variable — based on profits | $0 (0% WHT from CI, 0% in Panama, 0% PIF → beneficiary) | **0%** |
| PIF distributions (from retained earnings) | As needed | $0 | **0%** |
| **Total effective rate** | | | **0%** |

Dan's dividend path: CI IBC → S.A. (0% WHT) → PIF (0% Panama territorial) → Dan (0% distribution, territorial country)

### Nicholas & Andreas (Cyprus Residents)

| Channel | Tax Treatment |
|---------|--------------|
| Director/contractor fee | Taxed in Cyprus at personal rates (0% on first €19,500, 20-35% above) |
| Dividends from CI IBC | Cyprus taxes dividends at 17% Special Defence Contribution on dividends from companies not meeting substance tests. **Counsel should model this.** |

**Note for Nicholas/Andreas:** They may benefit from holding their shares through their own holding entities (Cyprus IPCo or Maltese holding) to optimize dividend taxation. This is separate from Dan's PIF structure and should be modeled by their tax advisors.

### Jason's Compensation (US Citizen)

See [Section 16](#16-jason-sparks) for full US-specific analysis.

| Channel | Tax Treatment |
|---------|--------------|
| Contractor fee | Ordinary income, taxed at US rates. FEIE available if abroad 330+ days. |
| Dividends (10% of declared) | Qualified foreign corporation dividends — 15-20% capital gains rate. Subject to PFIC analysis. |

---

## 9. Wife's Position {#9-wife-position}

### Core Principle: She Is Outside the Corporate Structure

Wife is a US citizen. Giving her equity in a foreign corporation triggers Form 5471, potential CFC issues, and complex reporting. Instead:

| What She Is | What She Is NOT |
|-------------|-----------------|
| Contractor of CI IBC | Shareholder of CI IBC |
| Paid a salary/fee for real services | Equity holder |
| Protected by marriage agreement | PIF beneficiary |
| Receives gifts from Dan (unlimited, tax-free if Dan avoids covered expatriate) | Director or officer of any entity |

### Her Income Structure

| Source | Amount | Tax Treatment | Federal Tax |
|--------|--------|--------------|-------------|
| **Contractor fee from CI IBC** | $130,000/yr | Excluded by FEIE (Form 2555) | **$0** |
| **Gifts from Dan** | Unlimited | Not income. Report on Form 3520 if > $100K/yr from foreign person | **$0** |

### FEIE Requirements

For the $130K exclusion to apply, she must:

1. Have a **tax home** in a foreign country (live abroad)
2. Meet the **330-day test** (cannot spend more than 35 days in the US per 12-month period) OR the **bona fide residence test** (genuine foreign residence for full calendar year)

### Her Annual US Filing Obligations

| Form | Purpose | Penalty for Non-Filing |
|------|---------|----------------------|
| Form 1040 | Annual income tax return | Standard IRS penalties |
| Form 2555 | Claim FEIE exclusion | Loses the exclusion |
| FBAR (FinCEN 114) | Report foreign accounts > $10K aggregate | $10K+ per account per year |
| Form 8938 | Report foreign financial assets > $200K (overseas filer threshold) | $10K + continuing penalties |
| Form 3520 | Report gifts from Dan if > $100K | $10K or 35% of gross gift |

### Divorce Protection for Wife

Per the marriage agreement, wife receives half of everything. Her protections:

| Protection | Mechanism |
|-----------|-----------|
| **Independent income** | Her contractor fee continues regardless of marriage status |
| **Marriage agreement** | Entitles her to 50% of marital assets |
| **Dan's personal assets** | Whatever Dan holds personally is divisible |
| **PIF assets** | NOT divisible — PIF is independent legal person. This is a trade-off: PIF protects Dan's equity from divorce, but wife's 50% claim only reaches Dan's personal assets. |

**The honest reality:** The PIF means wife's divorce claim cannot reach the 30% CI IBC equity. She can reach Dan's personal assets (bank accounts, property, personal investments). If the marriage agreement is important, Dan should maintain meaningful personal assets outside the PIF — or the agreement should account for PIF distributions.

---

## 10. Remote Team Structure {#10-remote-team}

### The Model: Dual-Entity Team

The team is split across two entities. Cyprus Studio (LBS) employs developers in Cyprus for substance. CI IBC (LBC) engages remote contractors worldwide.

### Engagement Methods

| Method | Best For | Cost | How It Works |
|--------|----------|------|-------------|
| **Direct contractor agreement** | Senior devs, specialists, long-term team | $0 platform fee | CI IBC signs agreement directly. Contractor invoices monthly. Paid via Wise. |
| **Deel Contractor** | Mid-tier contractors who want simple payments | ~$49/month per person | Deel manages contract, payments, compliance. CI IBC pays Deel. |
| **Deel EOR** | Team in countries with strict labor laws (EU, Brazil, India) | ~$500-700/month per person | Deel legally employs the person. CI IBC pays Deel. No PE risk. |

### Permanent Establishment (PE) Risk Management

If a contractor works exclusively for CI IBC from one country, that country could argue CI IBC has a PE there — subjecting profits to local tax.

| Mitigation | Detail |
|-----------|--------|
| Use EOR for high-risk countries | The EOR is the legal employer — CI IBC has no presence |
| Contractor independence | Multiple clients, own equipment, flexible schedule, not on CI IBC's org chart |
| Geographic distribution | Don't concentrate 80%+ of the team in one country |
| No physical office anywhere | CI IBC has no premises — contractors work from home/coworking |
| Governance in Cook Islands | Board decisions via nominee director in CI |

### Team Structure

```
LBC — Light Brands AI Ltd (CI IBC)
    │
    ├── Dan Lawless — Director + Lead Consultant
    │   (Grenada citizen, Costa Rica/Panama resident)
    │   (Contractor agreement with CI IBC)
    │
    ├── Wife — Operations / Admin / Marketing
    │   (US citizen, lives abroad with Dan)
    │   (Contractor agreement with CI IBC, $130K/yr)
    │
    ├── Remote contractors (non-Cyprus)
    │   └── Paid via CI IBC Singapore bank → Wise / Deel
    │
    └── Contracts all development to ──►

LBS — Light Brands Studio Ltd (Cyprus)
    │
    ├── Andreas Demou — Director + Employee
    │   (Cyprus citizen, lives in Cyprus)
    │
    ├── Cyprus-based developers (employees)
    │   └── Real employment, real office, real payroll
    │
    └── Office in Limassol or Nicosia
```

---

## 11. IP Ownership {#11-ip-ownership}

### All IP Belongs to LBC — Light Brands AI Ltd

IP is created by two sources but owned by one entity:

```
Cyprus Studio employees build software / AI model / platform
    │
    ▼
IP assigned to LBC (CI IBC) upon creation
    via Master Development Services Agreement (MDSA)
    │
CI IBC contractors create methodology / strategy / tools
    │
    ▼
IP assigned to LBC (CI IBC)
    via contractor agreement IP assignment clause
    │
    ▼
CI IBC owns ALL IP — can license, sell, distribute, sublicense
```

### Required Contract Clauses

1. **MDSA (Cyprus Studio → CI IBC):** All deliverables and IP created by Studio automatically assigned to CI IBC upon creation
2. **Contractor agreements:** IP assignment / work-for-hire — all work product belongs to LBC
3. **Pre-existing IP exclusion:** Contractors/Studio retain their own pre-existing tools (specifically enumerated)
4. **Confidentiality:** Standard NDA provisions
5. **Non-compete:** As enforceable in contractor's jurisdiction (typically narrow scope)

### No Separate IP Entity Needed

The CI IBC owns IP directly. The Cyprus Studio develops under contract — it never owns the IP it creates. There is no need for:
- A Delaware IP holding company (no US operations)
- A Dutch royalty conduit (no treaty routing needed)
- A separate licensing entity (CI IBC licenses directly)

IP licensing to third parties (if any) is done directly by the CI IBC. Royalty income is 0% taxed.

---

## 12. Banking & Payments {#12-banking-and-payments}

### Account Structure

| Account | Bank | Purpose |
|---------|------|---------|
| **CI IBC primary operating** | Singapore (DBS, OCBC, or Statrys) | Revenue collection, contractor payments, operational expenses |
| **S.A. holding** | Panama (Banco General or Banistmo) | Receive dividends from CI IBC, operational flexibility |
| **PIF account** | Panama or Singapore | Hold distributions, invest retained earnings |
| **Dan personal** | Costa Rica or Panama bank | Receive PIF distributions, personal expenses |

### Payment Processing

| Method | Use Case | Fees |
|--------|----------|------|
| **Stripe** (connected to Singapore bank) | SaaS subscriptions, recurring billing, online product sales | ~2.9% + $0.30 per transaction |
| **Wise Business** | International contractor payments, multi-currency receiving | ~0.5-1.5% FX fee |
| **Direct bank transfer** | Enterprise consulting contracts, large payments | Bank wire fees (~$15-30) |
| **Deel** | Contractor and EOR payments (handles FX, compliance, tax docs) | Included in Deel fees |

### KYC Documentation Required (Singapore Bank)

The CI IBC account opening will require:

- Certificate of Incorporation (CI IBC)
- Certificate of Good Standing
- Memorandum and Articles of Association
- Register of Directors and Shareholders (certified by registered agent)
- UBO declaration (identifying S.A. → PIF → founders chain)
- PIF documentation (Foundation Charter, Foundation Council details)
- S.A. documentation (Certificate of Incorporation, board resolution)
- Founder passports + proof of address (all four founders)
- Business plan / description of Light Brands AI activities
- Source of funds letter
- Expected transaction volumes

**Note:** Singapore banks typically require at least one founder to appear in person for account opening. Budget for a Singapore trip (~$1,500-2,500 travel + bank fees).

---

## 13. Revenue Flow & Tax Waterfall {#13-revenue-flow}

### How Money Moves

```
CLIENT PAYS INVOICE / SUBSCRIPTION
    │
    ▼
LBC — Light Brands AI Ltd (CI IBC)       TAX: 0%
    Singapore bank receives payment
    │
    ├──→ Pay Cyprus Studio (cost-plus 10%) TAX: 15% on margin only
    │       │
    │       ▼
    │    LBS — Light Brands Studio (Cyprus)
    │    ├── Pay developer salaries (Cyprus payroll)
    │    ├── Pay office costs
    │    └── 15% tax on ~10% margin = ~0.4% of total revenue
    │
    ├──→ Pay contractors (Wise / Deel)     TAX: N/A (expense)
    ├──→ Pay operational costs (AWS, etc.) TAX: N/A (expense)
    │
    ▼
OPEX FUND — CI IBC retains $600K-$1.2M    TAX: 0%
    Singapore bank operating reserve
    Covers 12-24 months at $50K/mo burn
    │
    ▼ (distributable profit ABOVE reserve)
CI IBC DISTRIBUTES TO S.A. (sole shareholder)
    │  CI→Panama WHT: 0%
    ▼
S.A. receives dividend                    TAX: 0% (territorial)
    │
    ▼
S.A. DISTRIBUTES TO ITS SHAREHOLDERS (board resolution)
    │
    ├──→ 30% to Dan's PIF                  TAX: 0%
    │        │
    │        ▼
    │    PIF distributes to Dan             TAX: 0%
    │        │
    │        ▼
    │    Dan receives in Costa Rica/Panama  TAX: 0% (territorial)
    │
    ├──→ 30% to Nicholas's PIF             TAX: 0%
    │        └──→ PIF distributes to Nicholas (0% in territorial country)
    │
    ├──→ 30% to Andreas (direct)           TAX: ~7.65% Cyprus SDC+GESY
    └──→ 10% to Jason (direct)             TAX: US qualified dividend rate (15-20%)


TOTAL ENTITY-LEVEL TAX: ~0.4% of revenue (Cyprus margin tax only)
TOTAL TAX ON DAN'S SHARE: $0
```

### Tax Waterfall Summary

| Step | Entity/Person | Tax Event | Rate |
|------|--------------|-----------|------|
| Revenue received by CI IBC | LBC (CI IBC) | Corporate income tax | **0%** |
| Payment to Cyprus Studio | LBS (Cyprus) | Corporate tax on cost-plus margin | **15% on ~10% margin** |
| Dividend to S.A. | CI IBC → S.A. (100%) | Withholding tax | **0%** |
| S.A. receives | S.A. | Panama territorial tax | **0%** |
| S.A. distributes to Dan's PIF | S.A. → PIF (30%) | WHT | **0%** |
| PIF distributes to Dan | PIF → Dan | Beneficiary distribution | **0%** |
| Dan receives in Costa Rica | Dan | Personal income tax | **0%** (territorial) |
| **Cumulative tax on Dan's share** | | | **~0.4% entity + 0% personal** |

### Wife's Income Flow

```
Light Brands AI Ltd (CI IBC)
    │
    ├──→ Pay wife $130,000/yr (contractor fee)
    │        │
    │        ▼
    │    Wife reports on US 1040
    │    Claims FEIE (Form 2555): -$130,000
    │    Taxable income: $0
    │    Federal tax: $0
    │
    └──→ Dan gifts additional amounts to wife
             │
             ▼
         Not income (gifts are not taxable to recipient)
         Wife reports on Form 3520 if > $100K/yr
         Tax: $0
```

### Treasury Policy — OpEx Reserve Fund

The CI IBC's Singapore bank account serves as the company's operating treasury. Before any distributions to shareholders, the company maintains a mandatory operating reserve:

| Parameter | Detail |
|-----------|--------|
| **Reserve location** | CI IBC Singapore bank account |
| **Minimum reserve** | **$600,000** (12 months at $50K/mo burn) |
| **Target reserve** | **$1,200,000** (24 months at $50K/mo burn) |
| **Burn rate basis** | $50,000/month — covers all team salaries, contractor fees, Cyprus Studio costs, SaaS infrastructure, and operational expenses |
| **Tax on reserves** | **0%** — funds sit in 0% CI IBC, earning interest (also 0% taxed) |

**What gets paid from this fund:** Everything. All expenses flow through the CI IBC — Cyprus Studio cost-plus payments, contractor fees, Dan's and wife's contractor fees, SaaS costs, operational overhead. The fund is the single source of truth for company cash.

**Distribution policy:**

| Phase | Condition | Bonus Allocation | Distributions to Partners |
|-------|-----------|-----------------|--------------------------|
| **Buildup** | OpEx Fund < $600K | 50% to OpEx Fund, 50% to bonus pool | **None** — all profit builds the reserve |
| **Funded** | OpEx Fund ≥ $600K | 100% to bonus pool | Quarterly distributions of profit above reserve, pro-rata by S.A. equity (30/30/30/10) |
| **Fully funded** | OpEx Fund ≥ $1M+ | 100% to bonus pool | Quarterly distributions, maintain fund at $1M+ |

**How quarterly distributions work (once funded):**

1. Calculate CI IBC revenue for the quarter
2. Subtract all expenses (Cyprus Studio, contractors, fees, wife's salary, SaaS, overhead)
3. Confirm remaining balance keeps OpEx Fund at or above $600K minimum
4. Distribute excess to S.A. (100% → sole shareholder) via board resolution
5. S.A. distributes to shareholders: 30% Dan's PIF, 30% Nicholas's PIF, 30% Andreas, 10% Jason

**Key principle:** The OpEx Fund is a safety net, not a profit center. It ensures the entire team — developers, contractors, founders — can be paid for 12-24 months even if revenue drops to zero. This is non-negotiable. Partners get paid after the company is secure.

---

## 14. Annual Cost Analysis {#14-cost-analysis}

### Entity Maintenance

| Entity | Formation (One-Time) | Annual Ongoing |
|--------|---------------------|----------------|
| **Panama PIF** | ~$3,000-5,000 | ~$2,000-3,500 |
| **Panama S.A.** | ~$2,000-3,500 | ~$1,600-3,000 |
| **Cook Islands IBC (LBC)** | ~$3,000-5,000 | ~$2,500-4,500 |
| **Cyprus Studio (LBS)** | ~$4,000 | ~$19,600 (audit, bookkeeping, TP docs, legal) |
| **Cyprus office setup** | ~$8,000 | — |
| **Transfer pricing study (initial)** | ~$10,000 | ~$3,000-5,000/yr maintenance |
| **MDSA + employment contracts** | ~$8,000 | — |
| **Singapore bank setup** | ~$1,500-2,500 (incl. travel) | ~$200-500 |
| **Stripe + Wise setup** | $0 | ~$0 (transaction fees only) |
| **Deel setup** | $0 | ~$49-700/person/month |
| **Legal (formation counsel)** | ~$5,000-10,000 | — |
| **Total formation** | **~$44,500-56,000** | |
| **Total annual (entities only)** | | **~$27,000-43,000** |

### Cost in Context

| Annual LB AI Revenue | Entity Overhead | Cyprus Tax (~0.4%) | Total Cost | % of Revenue |
|---------------------|-----------------|-------------------|------------|--------------|
| $500,000 | ~$35K | ~$3K | ~$38K | 7.6% |
| $1,000,000 | ~$35K | ~$6K | ~$41K | 4.1% |
| $2,000,000 | ~$35K | ~$9K | ~$44K | 2.2% |
| $3,000,000+ | ~$35K | ~$12K | ~$47K | 1.6% |

### What You're NOT Paying

| Item | Cost Avoided |
|------|-------------|
| Dubai FZ-LLC (license, office, visas, audit) | ~$35-65K/yr saved |
| Cayman Holdings (registered office, compliance) | ~$5-10K/yr saved |
| Dan's personal US tax (post-renunciation) | $85-117K/yr saved at Y5 |
| Form 5471 preparation | ~$1-3K/yr per form saved |
| CFC/GILTI compliance | ~$5-10K/yr in professional fees saved |

---

## 15. Governance & Decision-Making {#15-governance}

### Board of Directors (CI IBC)

| Director | Role | Authority |
|----------|------|-----------|
| Dan Lawless | Managing Director | Day-to-day operations, client relationships, product direction |
| Nominee Director (CI or Singapore) | Governance director | Signs routine filings, provides CI governance nexus |
| (Optional) Nicholas or Andreas | Board member | Strategic direction, major decisions |

### Decision Thresholds

| Decision | Required Approval |
|----------|-------------------|
| Day-to-day operations (contracts < $X, hiring contractors) | Managing Director alone |
| Major contracts (> threshold TBD) | Board majority |
| Declare dividends | Board resolution (majority) |
| Issue new shares / dilute | Shareholder vote (>50% or as per Articles) |
| Sell the company / IP | Supermajority (75% or unanimous — per Articles) |
| Change Articles of Association | Shareholder special resolution |

### Shareholder Agreement

A shareholders' agreement should be executed between all four S.A. shareholders covering:

1. **Vesting schedule** — 4-year vest, 1-year cliff (recommended)
2. **Right of first refusal** — existing shareholders can buy shares before outside sale
3. **Tag-along / drag-along** — standard protections for minority shareholders
4. **Non-compete** — founders agree not to compete during involvement
5. **Governance control** — the three 30% founders (Dan, Nicholas, Andreas) control the S.A. with 2/3 majority vote on all major decisions. Jason (10%) participates but does not have a controlling vote.
6. **Deadlock resolution** — what happens if 30/30/30 founders disagree
6. **Departure terms** — what happens to unvested shares if a founder leaves
7. **Valuation methodology** — how shares are valued for transfers
8. **Dividend policy** — minimum distribution frequency and percentage
9. **Reserved matters** — decisions requiring supermajority or unanimity

---

## 16. Jason Sparks — US Citizen Considerations {#16-jason-sparks}

### Jason's Position — 10% of S.A.

Jason holds 10% of Light Brands Holdings S.A. (Panama), which owns 100% of both CI IBC and Cyprus Studio. He does not hold shares directly in either operating entity.

**Governance:** The three 30% founders (Dan, Nicholas, Andreas) control the S.A. with 2/3 majority vote on all major decisions. Jason participates in votes but does not have a controlling vote.

### US Tax Implications for Jason

| Factor | Detail |
|--------|--------|
| **What Jason owns** | 10% of a Panamanian S.A. (which owns 100% of CI IBC + Cyprus Studio) |
| **Form 5471** | **Likely required** — Jason owns 10%+ of a foreign corporation. Counsel must confirm category. |
| **CFC status** | S.A. is **NOT a CFC** — US shareholders hold only 10% (need >50% for CFC). No GILTI, no Subpart F. |
| **PFIC risk** | Must be analyzed — depends on whether S.A. (holding company) or underlying entities are tested. If consulting revenue dominates, not a PFIC. |
| **Dividend taxation** | Dividends from S.A. → Jason. Qualified foreign corporation dividends at 15-20% if applicable. |
| **Real ownership** | 10% of S.A. = voting rights, shareholder protections, sale proceeds under Panamanian corporate law. |

### Jason's Annual US Obligations

| Filing | Required? | Detail |
|--------|-----------|--------|
| Form 1040 | Yes | Standard US tax return |
| Form 5471 | **Yes** | Report ownership in foreign corporation |
| Schedule B (Part III) | Yes | Report foreign account interests |
| FBAR | Yes (if foreign accounts > $10K) | If Jason has signatory authority on any CI IBC account |
| Form 8938 | Depends on threshold | If foreign financial assets exceed filing threshold |

---

## 17. Open Questions for Counsel {#17-open-questions}

### Critical (Before Formation)

1. **Jason's position as S.A. shareholder:** Jason holds 10% of a Panama S.A. that owns 100% of CI IBC and Cyprus Studio. What are the Form 5471 / CFC / PFIC implications? Is the S.A. the relevant entity for PFIC analysis, or the underlying operating entities?

2. **Wife's contractor arrangement and FEIE:** Does wife working as a contractor (not employee) of the CI IBC qualify for FEIE? FEIE requires "earned income" — confirm contractor income from a foreign entity qualifies.

3. **PIF beneficiary distributions and Dan's tax residence:** If Dan resides in Costa Rica (territorial tax) or Panama (territorial tax), confirm PIF distributions are not taxable in either jurisdiction.

4. **S.A. as shareholder of CI IBC — CI registered agent acceptance:** Will CI registered agents accept a Panamanian S.A. (owned by a PIF) as a shareholder? Any KYC complications?

5. **Covered expatriate and business value:** Dan's 30% equity in CI IBC (even pre-formation, if deals are in progress) — does the IRS count anticipated business value toward the $2M net worth test? Or only assets held at the date of renunciation?

6. **Vesting and covered expatriate:** If shares are subject to 4-year vesting, are unvested shares counted in the $2M net worth calculation?

### Important (During Formation)

7. **Nicholas and Andreas — Cyprus dividend tax on CI IBC distributions:** What is the effective Cyprus tax rate on dividends received from a Cook Islands IBC? Does the CI IBC meet Cyprus "substance" requirements for reduced dividend taxation?

8. **Shareholders' agreement — governing law:** Should the shareholders' agreement be governed by Cook Islands law (where the company is incorporated), Singapore law (neutral, sophisticated), or English law (standard for international commercial agreements)?

9. **Dan as director of CI IBC — PE risk:** If Dan (Costa Rica resident) serves as director and performs management functions, does this create a PE for the CI IBC in Costa Rica? Mitigation: nominee CI director makes board decisions, Dan provides advisory services under contractor agreement.

10. **Transfer pricing — CI IBC ↔ Cyprus Studio:** Confirm cost-plus 8-12% is defensible for a Cyprus captive software development center. Cyprus requires TP documentation for related-party transactions — confirm documentation level needed at our revenue scale.

11. **Singapore bank — which banks accept CI IBCs with PIF ownership?** Current market: DBS, OCBC, Statrys, Aspire — which are currently onboarding CI IBCs?

12. **Deel and CI IBC:** Does Deel accept a Cook Islands IBC as a client entity for EOR and contractor management? Any restrictions?

### Future Planning

13. **Adding new shareholders (future hires with equity):** Process for issuing new shares from authorized but unissued capital. Should we authorize more than 1,000 shares initially for future grants?

14. **Converting to a different structure later:** If Light Brands AI grows to the point where a holding company structure (Cayman, Singapore, etc.) makes more sense for investors/acquisition, how complex is the conversion from CI IBC?

15. **Church IP licensing (future):** When the international church is established, Light Brands AI may license spiritual/consciousness technology to it. Structure: CI IBC → Church (royalty license). No current planning needed — flag for future.

---

## Cross-References

- **Dan's US exit plan:** [13-DAN-EXIT-US-AND-LB-SIMPLIFIED-STRUCTURE.md](./13-DAN-EXIT-US-AND-LB-SIMPLIFIED-STRUCTURE.md)
- **Cyprus Studio substance layer (definitive):** [16-CYPRUS-STUDIO-SUBSTANCE-LAYER.md](./16-CYPRUS-STUDIO-SUBSTANCE-LAYER.md)
- **Dan's action plan:** [15-DAN-ACTION-PLAN.md](./15-DAN-ACTION-PLAN.md)
- **Cook Islands IBC detail:** [08-COOK-ISLANDS-IBC-DETAIL.md](./08-COOK-ISLANDS-IBC-DETAIL.md)
- **Citizenship strategy:** [../CITIZENSHIP_STRATEGY.md](../CITIZENSHIP_STRATEGY.md)

---

*This document specifies the corporate formation plan for Light Brands AI — an AI consulting, SaaS, and product company structured through four entities: PIF → Panama Holdings → CI IBC (consulting principal) + Cyprus Studio (development delivery). The structure uses the OECD-standard principal/routine service provider model with cost-plus transfer pricing. All tax treatments described are based on current law in the Cook Islands (International Companies Act 1981-82), Panama (Law 25 of 1995, Law 32 of 1927), Cyprus (Companies Law Cap. 113), and the US Internal Revenue Code (FEIE under IRC 911, covered expatriate rules under IRC 877A). Real equity ownership replaces previous phantom equity (PPA) planning. Implementation requires validation by Cook Islands registered agent, Panama PIF counsel, Cyprus corporate counsel, transfer pricing advisor, US expat tax attorney, and Singapore banking specialist. This is not legal or tax advice.*
