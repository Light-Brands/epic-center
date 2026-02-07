# Living Light OS: AI-Powered Franchise Compliance Automation

> **Status:** System Design — requires engineering review + counsel validation of automated outputs
> **Depends on:** [508C1A_FRANCHISE_FRAMEWORK.md](./508C1A_FRANCHISE_FRAMEWORK.md), [US_508C1A_RELIGIOUS_ORGANIZATION_STRATEGY.md](./US_508C1A_RELIGIOUS_ORGANIZATION_STRATEGY.md)
> **Last Updated:** February 2026

---

## 1. The Premise

The franchise framework requires every affiliated church to maintain:

- Weekly worship services with attendance records
- Quarterly board meetings with documented minutes
- Annual compensation reviews with comparable data and 6-step process
- Annual housing allowance re-designations before December 31
- Monthly bank reconciliations reviewed by a second person
- Ongoing membership rolls, charitable programs, and doctrinal alignment
- State filings, payroll tax returns, and record retention

That's a lot of compliance for a healer who just wants to do their sacred work.

**The question:** What if none of it required the franchisee to think about it?

**The answer:** Deploy an AI system that runs the entire compliance layer. The franchisee does their ministry. The system does everything else.

---

## 2. What Living Light OS Is

Living Light OS is an AI-powered platform deployed to every franchisee church that **automates the entire compliance, governance, and financial administration layer** of operating a 508(c)(1)(A) church.

The franchisee interacts with it like a co-pastor who handles all the paperwork. It speaks in the language of the Living Light. It knows the Sacred Laws. It generates legal documents. It tracks every IRS requirement. It never forgets a deadline. It never misfiles a resolution.

### What the Franchisee Experiences

```
BEFORE LIVING LIGHT OS                    WITH LIVING LIGHT OS
─────────────────────────                 ────────────────────
"I need to draft board minutes"        → System drafts them from the meeting recording
"I need to find comparable salary      → System already has them benchmarked for
 data for my compensation review"         your market and revenue level
"Did I file the housing allowance      → System filed it in October, board signed
 designation?"                            digitally in November
"Is my state filing due?"              → System filed it last week
"I need to reconcile my bank account"  → System reconciled it when the statement hit
"Am I meeting the 14-point test?"      → System scores you monthly — you're at 13/14
"The IRS sent me something"            → System flagged it, notified Living Light
                                          counsel, and drafted a response strategy
"How do I run a board meeting?"        → System sent the agenda, tracked attendance,
                                          recorded the meeting, drafted the minutes
```

---

## 3. System Architecture

### 3.1 The Agent Layer

Living Light OS runs on a network of specialized AI agents. Each agent owns a compliance domain and operates autonomously within it. A central orchestrator coordinates them.

```
┌─────────────────────────────────────────────────────────────────────┐
│                      LIVING LIGHT OS                                 │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                    SHEPHERD (Orchestrator)                     │   │
│  │  Coordinates all agents · Manages calendar · Escalates to     │   │
│  │  Living Light HQ · Interfaces with franchisee                 │   │
│  └──────────┬───────────┬───────────┬───────────┬───────────┬──┘   │
│             │           │           │           │           │        │
│  ┌──────────▼──┐ ┌──────▼──────┐ ┌──▼───────┐ ┌▼─────────┐ ┌▼────┐│
│  │  STEWARD    │ │  SCRIBE     │ │ GUARDIAN  │ │ MINISTER │ │HERALD││
│  │  (Finance)  │ │  (Docs)     │ │ (IRS)    │ │ (Worship)│ │(Comm)││
│  └──────┬──────┘ └──────┬──────┘ └────┬─────┘ └────┬─────┘ └──┬──┘│
│         │               │             │             │          │    │
│  ┌──────▼──┐     ┌──────▼──┐   ┌─────▼────┐ ┌─────▼────┐ ┌──▼──┐ │
│  │ BUILDER  │     │ COUNSEL  │   │ SENTINEL │ │ DEACON   │ │TITHE│ │
│  │ (Entity) │     │ (Legal)  │   │ (State)  │ │ (Member) │ │(Fee) │ │
│  └──────────┘     └──────────┘   └──────────┘ └──────────┘ └─────┘ │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 3.2 Agent Definitions

| Agent | Domain | What It Does |
|---|---|---|
| **SHEPHERD** | Orchestration | Central coordinator. Manages the compliance calendar. Assigns tasks to agents. Interfaces with franchisee (chat, notifications, dashboard). Escalates to Living Light HQ when human judgment needed. |
| **STEWARD** | Finance | Bank reconciliation, financial reporting, budget tracking, compensation-to-revenue ratios, PPA distribution tracking, tithe calculation. Connects to bank feeds and accounting software. |
| **SCRIBE** | Documentation | Generates board meeting agendas, records meetings (audio → minutes), drafts resolutions, maintains corporate records, manages document retention schedule. |
| **GUARDIAN** | IRS Compliance | Monitors 14-point test scoring, tracks compensation reasonableness, manages housing allowance lifecycle, ensures UBIT tracking, handles Form 990-T if needed. |
| **MINISTER** | Worship & Congregation | Tracks worship service schedule and attendance, manages congregation records, monitors charitable programs, ensures regular religious services. |
| **HERALD** | Communication | Sends reminders, notifications, and alerts to franchisee. Generates quarterly compliance reports. Manages the franchisee dashboard. |
| **BUILDER** | Entity Formation | Used at onboarding only. Generates all formation documents from templates. Customizes articles, bylaws, Statement of Faith. Prepares EIN application. |
| **COUNSEL** | Legal Intelligence | Monitors IRS precedent changes, case law updates, state regulatory changes. Flags risks. Drafts IRS correspondence response strategies. Not a lawyer — escalates to human counsel. |
| **SENTINEL** | State Compliance | Tracks state filing deadlines, prepares annual reports, monitors property/sales tax exemption renewals, manages charitable solicitation registrations. |
| **DEACON** | Membership | Maintains membership roll, tracks Covenant signings, monitors membership categories (General → Ministry Partner → Ordained Minister), manages ordination progress tracking. |
| **TITHE** | Fee Management | Calculates association tithe, generates invoices, tracks payment status, manages licensing and compliance fee billing. |

---

## 4. The Compliance Calendar Engine

The core of the system. SHEPHERD maintains a per-church compliance calendar that triggers every required action automatically.

### 4.1 Automated Calendar

```
JANUARY
────────
□ W-2s generated and filed (STEWARD)
  → Housing allowance in Box 14, excluded from Box 1/3/5
  → Mailed/delivered to ministers by Jan 31
□ 1099s generated for contractors (STEWARD)
□ Form 941 — Q4 payroll tax filed (STEWARD)
□ Quarterly compliance score generated (GUARDIAN)
□ Association tithe invoice — Q4 (TITHE)

FEBRUARY
────────
□ Board meeting agenda generated (SCRIBE)
□ Q4 financial report prepared (STEWARD)
□ Charitable program annual review (MINISTER)
□ Annual state filing — [state-specific] (SENTINEL)

MARCH
─────
□ Board meeting held — Q1 (SCRIBE records + drafts minutes)
□ Annual internal financial review initiated (STEWARD)
□ Compensation comparable data updated (GUARDIAN)
□ Membership roll audit (DEACON)

APRIL
─────
□ Form 941 — Q1 payroll tax filed (STEWARD)
□ Internal financial review completed (STEWARD)
□ Annual compensation review — data package prepared (GUARDIAN)
□ State property tax exemption renewal — [if applicable] (SENTINEL)

MAY
───
□ Compensation Committee meeting scheduled (SCRIBE)
□ Comparable data package delivered to committee (GUARDIAN)
□ 6-step rebuttable presumption process initiated (GUARDIAN + SCRIBE)

JUNE
────
□ Board meeting held — Q2 (SCRIBE records + drafts minutes)
□ Compensation Committee meeting held (SCRIBE records + drafts resolution)
□ Q1 financial report prepared (STEWARD)
□ Mid-year 14-point test scoring (GUARDIAN)
□ Association tithe invoice — Q1 (TITHE)

JULY
────
□ Form 941 — Q2 payroll tax filed (STEWARD)
□ Compensation resolutions filed (SCRIBE)
□ Mid-year bank reconciliation review (STEWARD)

AUGUST
──────
□ State sales tax exemption renewal — [if applicable] (SENTINEL)
□ Annual ordination records update (DEACON)
□ Continuing education tracking for ministers (DEACON)

SEPTEMBER
─────────
□ Board meeting held — Q3 (SCRIBE records + drafts minutes)
□ Q2 financial report prepared (STEWARD)
□ Quarterly compliance score generated (GUARDIAN)
□ Association tithe invoice — Q2 (TITHE)

OCTOBER
───────
□ Form 941 — Q3 payroll tax filed (STEWARD)
□ Housing allowance designation — draft prepared (GUARDIAN)
□ Compensation Committee — housing allowance review scheduled (SCRIBE)
□ Annual fair rental value review initiated (GUARDIAN)

NOVEMBER
────────
□ Housing allowance designation — board vote (SCRIBE records + files)
□ Annual budget preparation initiated (STEWARD)
□ Charitable program year-end documentation (MINISTER)
□ Association tithe invoice — Q3 (TITHE)

DECEMBER
────────
□ Board meeting held — Q4 (SCRIBE records + drafts minutes)
□ Housing allowance designation — MUST BE FILED BEFORE DEC 31 (GUARDIAN)
  → If not filed by Dec 15, SHEPHERD escalates with RED ALERT
□ Q3 financial report prepared (STEWARD)
□ Annual budget adopted (STEWARD + SCRIBE)
□ Year-end 14-point test scoring (GUARDIAN)
□ Record retention review — destroy records past retention period (SCRIBE)
□ Annual compliance summary generated for Living Light HQ (SHEPHERD)
```

### 4.2 The Red Alert System

Certain compliance failures are catastrophic. SHEPHERD monitors for these and escalates immediately:

| Red Alert | Why It's Critical | Escalation |
|---|---|---|
| **Housing allowance not designated by Dec 15** | If missed by Dec 31, exclusion lost for entire next year. Potentially tens of thousands in unnecessary tax. | Franchisee + Living Light HQ + counsel. Daily alerts until resolved. |
| **No board meeting held for 6+ months** | Governance failure. Undermines independent governance defense. | Franchisee + Living Light HQ. |
| **No worship service held for 4+ weeks** | 14-point test failure (Point 12). Congregation requirement jeopardized. | Franchisee + Living Light HQ. |
| **Compensation paid without committee resolution** | IRC 4958 violation. Rebuttable presumption lost. Excess benefit excise tax risk. | Franchisee + Living Light HQ + counsel. |
| **IRS correspondence received** | Church Audit Procedures Act response required. | Franchisee + Living Light HQ + Legal Defense Fund counsel. Immediately. |
| **Association tithe unpaid 90+ days** | Charter agreement violation. Revocation process may initiate. | Franchisee + Living Light HQ. |
| **Bank accounts not reconciled 60+ days** | Financial controls lapse. Audit vulnerability. | Franchisee treasurer + Living Light HQ. |

---

## 5. Agent Deep Dives

### 5.1 STEWARD — The Finance Agent

**Inputs:**
- Bank feed (Plaid or direct API connection to church bank accounts)
- Accounting software integration (QuickBooks, Xero, or built-in ledger)
- Payroll system data
- PPA distribution notices
- Association tithe schedule

**What It Automates:**

| Task | How |
|---|---|
| **Monthly bank reconciliation** | Pulls bank statements via API. Matches transactions to recorded revenue/expenses. Flags unmatched items. Generates reconciliation report. Routes to second reviewer (board member) for digital sign-off. |
| **Quarterly financial reporting** | Auto-generates income statement, balance sheet, budget variance analysis, compensation summary, bank balances. Formats into board-ready report. |
| **W-2 and 1099 generation** | At year-end, calculates minister compensation. Housing allowance in Box 14, excluded from Boxes 1/3/5. Generates Forms W-2 and 1099-NEC. Franchisee reviews and files (or system e-files). |
| **Payroll tax (Form 941)** | Calculates quarterly employment tax. Generates Form 941. Flags for review and filing. |
| **Tithe calculation** | Calculates 3-5% association tithe on gross church revenue. Generates invoice. Tracks payment. |
| **Compensation-to-revenue ratio** | Monitors total compensation as % of revenue. Alerts if exceeding 60% (flags for documentation). |
| **UBIT monitoring** | Flags any revenue that may not be substantially related to the religious mission. If UBIT > $1,000, triggers Form 990-T preparation. |

**Output:** Clean books. Reconciled accounts. Board-ready reports. Filed tax forms. Zero manual accounting.

### 5.2 SCRIBE — The Documentation Agent

**Inputs:**
- Meeting recordings (audio/video via Zoom, in-person mic, or phone)
- Calendar events
- Resolution templates from the Living Light document library
- Prior meeting minutes

**What It Automates:**

| Task | How |
|---|---|
| **Board meeting agenda generation** | 7 days before each quarterly meeting, SCRIBE generates a draft agenda based on: compliance calendar items due, financial reports ready, open action items from prior meeting, and any SHEPHERD-flagged issues. Franchisee reviews and adjusts. |
| **Meeting recording → minutes** | Franchisee records the board meeting (audio or video). SCRIBE transcribes, identifies speakers, extracts: motions made, votes taken (by name), action items assigned, discussions of substance. Generates minutes in the E05 template format. |
| **Resolution drafting** | When the board needs to approve something (compensation, housing allowance, budget, policy), SCRIBE drafts the resolution from the appropriate template (B02, B03, etc.) pre-filled with current data. |
| **Digital signing** | Board members sign resolutions and minutes digitally. SCRIBE timestamps and archives. |
| **Document retention management** | Maintains the complete document library. Tracks retention periods (permanent vs. 7 years). Alerts when records are due for destruction. Generates destruction certificates. |
| **Contemporaneous documentation** | Minutes are generated within 24 hours of the meeting — satisfying the "real-time documentation" standard from the governance framework. |

**Output:** Every meeting documented. Every resolution drafted and signed. Every document archived and retrievable. Zero clerical work for the franchisee.

### 5.3 GUARDIAN — The IRS Compliance Agent

**Inputs:**
- All financial data (from STEWARD)
- Worship and congregation data (from MINISTER)
- Compensation data (from STEWARD + SCRIBE)
- Housing allowance data (from franchisee's housing expense tracking)
- IRS precedent feed (from COUNSEL)

**What It Automates:**

| Task | How |
|---|---|
| **14-Point Test Scoring** | Monthly scoring of the church against all 14 IRS criteria. Each point rated Green / Yellow / Red. Dashboard shows current score. Alerts on any point dropping below Green. |
| **Compensation reasonableness monitoring** | Maintains a database of comparable compensation data (NACBA surveys, Christianity Today data, Leadership Network, Bureau of Labor Statistics). Auto-benchmarks the franchisee's pastor compensation against comps for their revenue bracket and geography. Flags if compensation drifts outside the defensible range. |
| **Housing allowance lifecycle** | Tracks the entire annual cycle: (1) October — draft designation based on projected housing costs + fair rental value data. (2) November — schedule committee vote. (3) December — ensure resolution adopted before Dec 31. (4) Year-end — verify W-2 reporting. (5) Following year — provide housing expense tracking worksheet. |
| **Fair rental value automation** | Annually pulls comparable rental data from Zillow/Redfin APIs for the minister's address. Generates a Fair Rental Value report. Supplements with local real estate professional letter if high-value property. |
| **Rebuttable presumption tracker** | For every compensation decision, GUARDIAN verifies all 6 steps of the rebuttable presumption process were completed: (1) Comparables gathered, (2) Affected person excluded, (3) Independent deliberation, (4) Majority vote recorded, (5) Contemporaneous documentation, (6) Filed with Secretary. Dashboard shows Green if all 6 met, Red if any missing. |
| **UBIT classification** | Classifies each revenue stream as "substantially related to religious mission" or "unrelated business income." If any stream is classified as UBI, monitors the $1,000 threshold and triggers Form 990-T preparation. |

**Output:** The franchisee always knows their IRS compliance score. Every compensation decision is pre-validated. Housing allowance never lapses. The rebuttable presumption is always intact.

### 5.4 MINISTER — The Worship & Congregation Agent

**Inputs:**
- Worship service check-ins (franchisee confirms service held via app, or auto-detected from calendar + streaming platform)
- Attendance data (sign-in sheets digitized, or digital check-in)
- Charitable program records
- Community event tracking

**What It Automates:**

| Task | How |
|---|---|
| **Worship service tracking** | Confirms weekly service occurred. Logs date, time, location, format (in-person/online/hybrid), attendance count. Flags if a week is missed. Generates worship history report for IRS 14-point defense. |
| **Congregation record** | Maintains running attendance data. Tracks regularity of individual members. Identifies "regular congregation" (members who attend 2+ times per month). Generates congregation report. |
| **Charitable program monitoring** | Tracks active charitable programs (scholarships, free community events, outreach). Logs expenditures and participation. Ensures at least 1 active program at all times. |
| **Service content logging** | Franchisee provides brief description of each service (topic, scripture/doctrine referenced, format). MINISTER logs it as evidence of regular religious instruction and doctrinal teaching. |

**Output:** An airtight record of regular worship, regular congregation, and active charitable ministry — the three things the IRS scrutinizes most.

### 5.5 SENTINEL — The State Compliance Agent

**Inputs:**
- State of incorporation
- States of operation
- State filing deadline databases
- Property tax records
- Sales tax exemption records

**What It Automates:**

| Task | How |
|---|---|
| **State annual filing** | Tracks deadline by state. Prepares annual report/registration. Flags for review and filing. |
| **Property tax exemption** | Monitors exemption status. Prepares renewal applications. Alerts if exemption is at risk. |
| **Sales tax exemption** | Maintains exemption certificates. Tracks renewal dates. |
| **Charitable solicitation registration** | If required in the franchisee's state(s), tracks registration and renewal. |
| **Multi-state monitoring** | If the church operates programs in multiple states (retreats, conferences), SENTINEL tracks nexus obligations and filing requirements in each state. |

**Output:** No missed state deadlines. No lapsed exemptions. No surprise state tax bills.

### 5.6 DEACON — The Membership Agent

**Inputs:**
- Membership application submissions
- Covenant signature tracking
- Ordination program enrollment and progress
- Attendance data (from MINISTER)

**What It Automates:**

| Task | How |
|---|---|
| **Membership onboarding** | New member signs Covenant (E03) digitally. DEACON records the membership, assigns category (General Member), notifies the pastor, and adds to the congregation roll. |
| **Category progression** | Tracks members progressing from General → Ministry Partner → Ordained Minister. Monitors requirements for each level (1 year active membership, ministry team participation, ordination program completion). |
| **Ordination progress** | For ministers in the ordination program (E01), tracks completion of all 7 modules, mentorship hours, supervised ministry, examination status. Alerts when a candidate is ready for ordination. |
| **Membership roll maintenance** | Annual roll review. Identifies inactive members (no attendance in 12 months). Flags for pastoral follow-up. Maintains accurate roll count for IRS defense. |

**Output:** A living membership roll that proves the church has a real, tracked, active congregation.

---

## 6. The Franchisee Dashboard

Everything flows into a single interface.

### 6.1 Home Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  LIVING LIGHT OS — Church of the Living Light of [City]          │
│                                                                   │
│  ┌─────────────────┐  ┌──────────────────┐  ┌────────────────┐  │
│  │  COMPLIANCE      │  │  14-POINT SCORE   │  │  NEXT ACTION   │  │
│  │  SCORE           │  │                   │  │                │  │
│  │    97/100        │  │    13 / 14        │  │  Board meeting │  │
│  │    ● Green       │  │    ● Green        │  │  due March 15  │  │
│  └─────────────────┘  └──────────────────┘  └────────────────┘  │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │  UPCOMING (Next 30 Days)                                     │ │
│  │                                                               │ │
│  │  Mar 5  — Bank reconciliation (Feb) ready for review   [→]  │ │
│  │  Mar 10 — Q4 financial report draft ready              [→]  │ │
│  │  Mar 15 — Board meeting — agenda sent                  [→]  │ │
│  │  Mar 15 — Association tithe Q4 — $4,200 due            [→]  │ │
│  │  Mar 31 — Internal financial review deadline            [→]  │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │ Finance  │  │ Worship  │  │ Members  │  │ Documents│        │
│  │    ●     │  │    ●     │  │    ●     │  │    ●     │        │
│  │  Green   │  │  Green   │  │  Green   │  │  Green   │        │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘        │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │  ALERTS                                                      │ │
│  │  (none)                                                      │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  💬 Ask Shepherd anything...                                     │
└─────────────────────────────────────────────────────────────────┘
```

### 6.2 Key Dashboard Views

| View | What It Shows |
|---|---|
| **Compliance Score** | Aggregate score (0-100) across all compliance dimensions. Green (90+), Yellow (70-89), Red (<70). Drill down to see which dimensions need attention. |
| **14-Point Test** | Each of the 14 IRS criteria scored individually. Green = solid evidence. Yellow = needs attention. Red = deficiency. Drill down for evidence supporting each point. |
| **Finance** | Current bank balances, month-to-date revenue/expenses, last reconciliation date, budget vs. actual, association tithe status. |
| **Worship** | Calendar of services held, average attendance trend, consecutive weeks without a gap, next scheduled service. |
| **Members** | Total membership count, active vs. inactive, new members this month, ordination candidates in pipeline. |
| **Documents** | Full document library. Search and retrieve any corporate record. Status indicators for pending signatures, upcoming expirations. |
| **Compensation** | Current compensation for each minister. Rebuttable presumption status (6-step checklist). Housing allowance designation status. Comparison to benchmarks. |
| **Calendar** | Full compliance calendar for the year. Color-coded by agent. Click any event for detail and action. |

### 6.3 Chat Interface (Shepherd)

The franchisee can ask Shepherd anything:

```
Franchisee: "Am I compliant on housing allowance for next year?"
Shepherd:   "Your 2027 housing allowance designation was adopted by the
            Compensation Committee on November 18, 2026. Daniel signed
            digitally on November 20. The resolution designates $65,000
            for you. Your actual 2026 housing costs were $58,000 and the
            fair rental value estimate is $72,000, so the excludable
            amount will be the lesser: your actual costs. You're fully
            compliant. The resolution is filed in Documents > B-Series > B03."

Franchisee: "I want to give myself a raise."
Shepherd:   "I can help with that. Your current salary is $120,000. Based
            on comparable data for churches in your revenue range ($800K)
            in your metro area, the defensible range is $95,000-$155,000.
            A raise to $140,000 would be within range.

            To maintain the rebuttable presumption, the Compensation
            Committee must follow the 6-step process. I'll:
            1. Prepare the updated comparable data package
            2. Draft a resolution for the committee
            3. Schedule a committee meeting
            4. Generate the agenda

            Want me to proceed?"

Franchisee: "I got a letter from the IRS."
Shepherd:   "🔴 RED ALERT — IRS Correspondence Received.

            DO NOT RESPOND to the IRS directly.

            I'm notifying Living Light HQ and Legal Defense Fund counsel
            immediately. Please upload or photograph the letter so I can
            analyze it.

            Under the Church Audit Procedures Act (IRC 7611), you have
            significant protections. The letter must meet specific
            requirements. I'll review it with counsel and advise next steps.

            Living Light HQ has been notified: [timestamp]
            Counsel notification: [pending confirmation]"
```

---

## 7. Onboarding Automation (BUILDER Agent)

When a new franchisee is accepted, BUILDER generates the entire formation package:

### 7.1 Automated Document Generation

```
INPUT FROM SCREENING:
─────────────────────
• Franchisee name and personal details
• Business name and type (healing, wellness, breathwork, etc.)
• State of incorporation
• Ministry focus and modality
• Board member names and independence verification
• Projected revenue
• Minister(s) to be ordained
• Physical location(s)

BUILDER GENERATES:
──────────────────
A-SERIES (Entity Formation)
  ✓ A01 — Articles of Incorporation (customized for state + franchisee)
  ✓ A02 — Church Bylaws (governance structure tailored to board composition)
  ✓ A03 — Statement of Faith (core doctrine + ministry-specific adaptation)
  ✓ A04 — Organizational Meeting Minutes (pre-filled for first meeting)
  ✓ A05 — EIN Application (Form SS-4 pre-populated)

B-SERIES (Governance & Compensation)
  ✓ B01 — Compensation Committee Charter (members named, independence verified)
  ✓ B02 — Initial Compensation Resolutions (with local market comparables)
  ✓ B03 — Housing Allowance Designation (projected costs researched)
  ✓ B04 — Founder Protections Acknowledgment (adapted)
  ✓ B05 — Governance Pause Procedures
  ✓ B06 — For-Cause Removal Procedures

C-SERIES (Compliance & Operations)
  ✓ C01 — Church Audit Procedures
  ✓ C02 — Employment Agreement Template
  ✓ C03 — Retirement Plan Guidance
  ✓ C04 — Bank Account Setup Guidance

D-SERIES (Agreements)
  ✓ Charter Agreement (Association ↔ Affiliated Church)
  ✓ Content Sub-License Agreement
  ✓ Brand License Agreement

E-SERIES (Ministry & Membership)
  ✓ E01 — Ordination Program Enrollment (for franchisee ministers)
  ✓ E02 — Charitable Programs Documentation
  ✓ E03 — Church Membership Covenant (adapted)
  ✓ E04 — Confidentiality Agreement
  ✓ E05 — Board Meeting Minutes Template
  ✓ E06 — Committee Meeting Minutes Template

TOTAL: 20+ documents generated in minutes, ready for counsel review.
```

### 7.2 Formation Timeline Automation

BUILDER also manages the formation timeline:

```
WEEK 1:  BUILDER generates all documents → Counsel review queue
WEEK 2:  Counsel returns reviewed documents → BUILDER incorporates edits
WEEK 3:  Articles filed with state → BUILDER tracks filing status
WEEK 4:  EIN application submitted → BUILDER monitors IRS response
WEEK 5:  Organizational meeting held → SCRIBE records and generates minutes
WEEK 6:  Bank account opened → STEWARD connects bank feeds
WEEK 7:  Compensation committee meets → GUARDIAN validates 6-step process
WEEK 8:  Housing allowance designated → GUARDIAN files and tracks
WEEK 9:  First worship service → MINISTER begins tracking
WEEK 10: Membership covenant deployed → DEACON begins enrollment
WEEK 12: FORMATION COMPLETE → SHEPHERD takes over ongoing operations
```

---

## 8. The Network Dashboard (Living Light HQ)

Living Light HQ sees everything across all franchisees in one view.

### 8.1 Network Overview

```
┌─────────────────────────────────────────────────────────────────┐
│  LIVING LIGHT HQ — Network Dashboard                             │
│                                                                   │
│  Active Churches: 47          Total Network Revenue: $28.4M      │
│  Avg Compliance Score: 94     Avg 14-Point Score: 12.8 / 14     │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │  COMPLIANCE HEATMAP                                        │  │
│  │                                                             │  │
│  │  ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●  Green (38)   │  │
│  │  ◐ ◐ ◐ ◐ ◐ ◐                                Yellow (6)   │  │
│  │  ○ ○ ○                                        Red (3)      │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │  ALERTS (Network-Wide)                                     │  │
│  │                                                             │  │
│  │  🔴 Church of Austin — No worship service in 3 weeks       │  │
│  │  🟡 Church of Portland — Housing allowance due in 18 days  │  │
│  │  🟡 Church of Miami — Association tithe 45 days overdue    │  │
│  │  🔴 Church of Denver — Compensation paid without resolution│  │
│  │  🟡 Church of Sedona — Bank reconciliation 40 days stale   │  │
│  │  🔴 Church of Nashville — IRS letter received              │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │ Revenue  │  │ Tithes   │  │ Filings  │  │ Legal    │        │
│  │ $28.4M   │  │ $1.14M   │  │ 188/192  │  │ 1 active │        │
│  │ +12% QoQ │  │ 96% paid │  │ 98% rate │  │ matter   │        │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘        │
└─────────────────────────────────────────────────────────────────┘
```

### 8.2 Per-Church Drill-Down

Click any church to see its full compliance dashboard — same view the franchisee sees, plus:

- Charter agreement status and payment history
- Compliance trend over time (improving, declining, stable)
- Risk score (low, medium, high — based on compliance gaps + revenue size + geography)
- Communication log (all SHEPHERD interactions)
- Document vault (all corporate records)
- Ordination status of all ministers

### 8.3 Automated Network Intelligence

| Intelligence | How |
|---|---|
| **Risk-based prioritization** | Churches with the lowest compliance scores get the most attention. SHEPHERD auto-escalates to human reviewers at Living Light HQ. |
| **Pattern detection** | If multiple churches start failing the same compliance point (e.g., charitable programs), COUNSEL flags it as a network-level vulnerability and recommends corrective action. |
| **Compensation benchmarking** | GUARDIAN maintains a network-wide compensation database. Anonymized, aggregated — shows what ministers at similar-size churches across the network are earning. Helps every church's compensation committee make informed decisions. |
| **IRS precedent alerts** | COUNSEL monitors Tax Court decisions, IRS rulings, and regulatory changes affecting 508(c)(1)(A) churches. When a new precedent emerges, it's analyzed for network impact and pushed to all affected churches. |

---

## 9. Technology Stack

### 9.1 Where It Lives

| Component | Technology |
|---|---|
| **AI backbone** | Claude API (Anthropic) — Opus for complex legal reasoning (document generation, IRS analysis, compensation benchmarking), Sonnet for routine tasks (reminders, formatting, data entry), Haiku for classification and monitoring |
| **Agent orchestration** | Claude Agent SDK — multi-agent coordination, tool use, persistent memory per church |
| **Frontend** | React/Next.js dashboard (web + mobile) |
| **Backend** | Node.js/Python API layer |
| **Database** | PostgreSQL (structured data — financials, compliance scores, calendar) + vector store (document search, legal precedent retrieval) |
| **Document generation** | Markdown templates → PDF generation (for legal documents, resolutions, minutes) |
| **Bank integration** | Plaid API (bank feeds, transaction data, account balances) |
| **Accounting** | QuickBooks Online API or built-in ledger |
| **Meeting recording** | Zoom API / audio upload → Whisper transcription → Claude summarization |
| **Real estate data** | Zillow/Redfin API (fair rental value for housing allowance) |
| **Compensation data** | BLS API + NACBA survey data + Christianity Today data + network aggregates |
| **State filing databases** | Manually maintained per-state deadline and requirement database |
| **Digital signatures** | DocuSign API or built-in e-signature |
| **Notifications** | Email + SMS + in-app push |
| **Hosting** | AWS / GCP — SOC 2 compliant (church financial data requires security) |

### 9.2 Who Builds It

Per the master architecture: **Light Brands Studio (Dubai)** builds it. IP assigned to the appropriate entity:

- **TE Wellness Holdings (Cayman)** — if this is a TE product
- **Light Brands Consulting (Cook Islands)** — if this is a Light Brands product

Given this is a franchise management platform for the Living Light denomination, it likely falls under the **spiritual technology license** from the Church to Light Brands Consulting (D08). The Church owns the doctrinal templates; LBC owns the technology implementation; Studio builds it all.

### 9.3 Data Security and Privacy

| Requirement | Implementation |
|---|---|
| **Church financial data** | Encrypted at rest and in transit. No shared access between franchisee churches. Each church's data is isolated. |
| **First Amendment protection** | The system's records are church records. Church Audit Procedures Act (IRC 7611) protections apply. The IRS cannot compel access without the formal inquiry process. |
| **No Form 990** | The system does not generate or store Form 990 data (churches are exempt). This keeps financial data out of public disclosure. |
| **Counsel privilege** | COUNSEL agent's analysis is marked attorney work product (when generated at counsel's direction). Not discoverable. |
| **SOC 2 Type II** | Annual audit of security controls. Required for handling financial data. |

---

## 10. What the Franchisee's Life Actually Looks Like

### Before Living Light OS

```
Monday:    Run healing sessions
Tuesday:   Try to figure out bookkeeping
Wednesday: Run healing sessions
Thursday:  Panic about whether the board meeting minutes got filed
Friday:    Run healing sessions
Saturday:  Google "508c1a housing allowance" for the 15th time
Sunday:    Run a worship service, forget to track attendance
```

### After Living Light OS

```
Monday:    Run healing sessions
Tuesday:   Run healing sessions
Wednesday: Run healing sessions. Glance at dashboard — all green.
Thursday:  Run healing sessions
Friday:    Run healing sessions
Saturday:  Run healing sessions
Sunday:    Run worship service. Check in congregants on the app.
           Shepherd handled everything else.

Quarterly: Show up to board meeting. System prepared the agenda,
           the financial report, and the draft minutes. Sign.

Annually:  Review your compensation package — system already ran
           the comparables. Sign the housing allowance resolution
           the system prepared. Done.
```

**The franchisee does ministry. The system does compliance. Living Light does oversight.**

---

## 11. Revenue Impact on the Franchise Model

Living Light OS changes the franchise economics:

### 11.1 Updated Fee Structure

| Fee | Without OS | With OS | Change |
|---|---|---|---|
| **Formation Fee** | $15-35K | $25-50K | Higher — includes OS deployment + onboarding |
| **Annual Licensing** | $5-15K | $8-18K | Higher — includes OS access |
| **Compliance Management** | $8-20K (human-managed) | $3-8K (AI-managed, human oversight) | **Lower** — AI does 90% of the work |
| **Association Tithe** | 3-5% | 3-5% | Same |
| **Total annual cost to franchisee** | $16-40K + tithe | $14-30K + tithe | **Lower or comparable — but far more service** |

### 11.2 Living Light Margin Improvement

| Metric | Without OS | With OS |
|---|---|---|
| **Human compliance staff per 10 churches** | 1-2 FTEs | 0.2-0.5 FTEs (oversight only) |
| **Time to onboard a new church** | 12-16 weeks | 6-8 weeks |
| **Cost to serve per church/year** | $12-18K (human labor) | $2-4K (AI compute + human oversight) |
| **Gross margin on compliance fees** | 30-50% | **80-90%** |
| **Max churches per compliance manager** | 8-12 | 50-100 |

### 11.3 Scalability Unlock

Without OS: Scaling to 100 churches requires 8-12 compliance staff. That's $600K-$1M in salary.

With OS: Scaling to 100 churches requires 1-2 compliance managers who oversee the AI. Cost: $150-250K. **The AI handles the other 95% of the work.**

This means the franchise can scale to 500+ churches with a small team. The economics become:

| Year | Churches | Network Revenue | Living Light Revenue | Living Light Cost | Gross Profit |
|---|---|---|---|---|---|
| Y1 | 10 | $5M | $800K | $350K | $450K |
| Y2 | 30 | $22M | $2.8M | $550K | $2.25M |
| Y3 | 75 | $75M | $7.5M | $900K | $6.6M |
| Y5 | 200 | $300M | $25M | $2M | $23M |

All tax-exempt.

---

## 12. Competitive Moat

Living Light OS creates a moat that no competitor can easily replicate:

| Moat Layer | What It Is |
|---|---|
| **Doctrinal IP** | The Statement of Faith, Sacred Laws, ordination curriculum — no one else has this |
| **Legal template library** | 38+ formation documents, battle-tested — took significant counsel investment to create |
| **AI compliance system** | Purpose-built for 508(c)(1)(A) church management — no commercial product does this |
| **Network data** | As more churches join, the compensation benchmarking, compliance patterns, and risk intelligence improve for everyone |
| **Switching cost** | Once a church is formed under the Living Light denomination, with all its documents, ordination, and brand — moving to a different system means abandoning the entire structure |
| **Trust** | The network's IRS compliance track record becomes its own defense. A 10-year-old denomination with 200 churches and zero successful IRS challenges is the strongest possible credential. |

---

## 13. Build Roadmap

### Phase 1: Core System (Months 1-4)

| Component | Priority | Agents |
|---|---|---|
| **Compliance calendar engine** | P0 | SHEPHERD |
| **Document generation (formation)** | P0 | BUILDER |
| **Dashboard (franchisee)** | P0 | HERALD |
| **Board meeting automation** | P1 | SCRIBE |
| **14-point test scoring** | P1 | GUARDIAN |
| **Notification system** | P1 | HERALD |

### Phase 2: Financial Automation (Months 4-7)

| Component | Priority | Agents |
|---|---|---|
| **Bank feed integration** | P0 | STEWARD |
| **Automated reconciliation** | P0 | STEWARD |
| **Financial reporting** | P1 | STEWARD |
| **Compensation benchmarking** | P1 | GUARDIAN |
| **Housing allowance lifecycle** | P0 | GUARDIAN |
| **Tithe calculation + invoicing** | P1 | TITHE |

### Phase 3: Full Automation (Months 7-10)

| Component | Priority | Agents |
|---|---|---|
| **Meeting recording → minutes** | P1 | SCRIBE |
| **State compliance tracking** | P1 | SENTINEL |
| **Membership management** | P2 | DEACON |
| **Network dashboard (HQ)** | P1 | SHEPHERD + HERALD |
| **IRS precedent monitoring** | P2 | COUNSEL |
| **Payroll tax automation** | P1 | STEWARD |

### Phase 4: Intelligence Layer (Months 10-14)

| Component | Priority | Agents |
|---|---|---|
| **Network-wide risk scoring** | P1 | COUNSEL + GUARDIAN |
| **Pattern detection (compliance failures)** | P2 | COUNSEL |
| **Compensation network benchmarks** | P2 | GUARDIAN |
| **Predictive alerts** | P2 | SHEPHERD |
| **IRS correspondence AI analysis** | P1 | COUNSEL |

---

## 14. The Promise, Restated

```
THE FRANCHISEE'S DEAL
─────────────────────
You do the sacred work.
The AI does the paperwork.
Living Light does the oversight.
The IRS sees a perfectly compliant church.

You never miss a deadline.
You never draft a resolution.
You never reconcile a bank statement.
You never research comparable salaries.
You never worry about the 14-point test.

You heal. You teach. You serve.
The system handles the rest.
```

---

*This document proposes an AI-powered compliance automation system for the Living Light franchise network. The system's outputs (documents, resolutions, financial reports) require human review and approval — AI generates, humans govern. Legal documents generated by the system must be reviewed by qualified counsel before execution. The system does not provide legal advice. It provides administrative automation under human oversight.*
