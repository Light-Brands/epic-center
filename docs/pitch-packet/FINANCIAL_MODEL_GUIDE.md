<[Home](../../README.md) | [Pitch Packet](./README.md) | [Full Strategy](./DIGITAL_PITCH_PACKET.md) | [Quick Start](./QUICK_START.md) | [Checklist](./CONTENT_CHECKLIST.md)>

---

# Financial Model Structure Guide

## Overview

This document outlines the structure for our financial model - both the spreadsheet version for due diligence and the interactive web version for the investor portal.

---

## Model Philosophy

**Principles**:
1. **Transparency** - All assumptions clearly labeled and adjustable
2. **Conservatism** - Base case is realistic, not optimistic
3. **Simplicity** - Easy to understand, hard to misinterpret
4. **Defensibility** - Every number has a rationale

---

## Core Assumptions

### Capacity & Operations

| Assumption | Base Case | Conservative | Aggressive |
|------------|-----------|--------------|------------|
| Beds per location | 12 | 10 | 16 |
| Programs per bed/month | 2 | 1.5 | 2.5 |
| Occupancy rate (Year 1) | 50% | 40% | 60% |
| Occupancy rate (Year 2) | 70% | 60% | 80% |
| Occupancy rate (Year 3+) | 85% | 75% | 90% |
| Average stay (days) | 14 | 14 | 14 |
| Seasonality factor | 10% variance | 15% variance | 5% variance |

### Revenue Assumptions

| Program | Price Point | % Mix (Est.) |
|---------|-------------|--------------|
| 7-Day Reset | $XX,XXX | 25% |
| 14-Day Interruption | $XX,XXX | 40% |
| 21-Day Recalibration | $XX,XXX | 25% |
| 28-Day Transformation | $XX,XXX | 10% |
| **Blended Average** | **$XX,XXX** | 100% |

**Additional Revenue**:
- Bio-optimization add-ons: +10-15% of program revenue
- Alumni/post-care subscriptions: $XXX/month
- Corporate wellness (future): TBD

### Cost Assumptions

**Direct Costs (per guest)**:
| Cost Category | Amount | % of Revenue |
|---------------|--------|--------------|
| Medical staff & oversight | $X,XXX | X% |
| Facilitators & therapy | $X,XXX | X% |
| Food & hospitality | $X,XXX | X% |
| Bio-optimization supplies | $XXX | X% |
| Plant medicine & materials | $XXX | X% |
| **Total COGS** | **$X,XXX** | **XX%** |
| **Gross Margin** | | **XX%** |

**Fixed Costs (monthly)**:
| Cost Category | Amount |
|---------------|--------|
| Facility lease | $XX,XXX |
| Full-time staff (non-guest) | $XX,XXX |
| Platform/technology | $X,XXX |
| Insurance | $X,XXX |
| Marketing | $XX,XXX |
| G&A | $X,XXX |
| **Total Fixed** | **$XXX,XXX** |

### Growth Assumptions

| Metric | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
|--------|--------|--------|--------|--------|--------|
| Locations | 1 | 1 | 2 | 3 | 5 |
| Total beds | 12 | 12 | 28 | 44 | 72 |
| Avg occupancy | 50% | 70% | 80% | 85% | 85% |
| Guests/year | 75 | 150 | 350 | 600 | 1,000 |

---

## Model Tabs (Spreadsheet)

### Tab 1: Dashboard
- Key metrics at a glance
- Charts (revenue, EBITDA, guests)
- Scenario toggle

### Tab 2: Assumptions
- All inputs in one place
- Color-coded (adjustable vs. calculated)
- Source/rationale notes

### Tab 3: Revenue Model
- Monthly breakdown Year 1
- Annual breakdown Years 2-5
- By program type
- Additional revenue streams

### Tab 4: Cost Model
- Variable costs (per guest)
- Fixed costs (monthly)
- Staffing model
- Location expansion costs

### Tab 5: P&L
- Monthly Year 1
- Annual Years 1-5
- Key margins highlighted

### Tab 6: Cash Flow
- Monthly Year 1
- Annual Years 1-5
- Working capital needs
- Investment timing

### Tab 7: Unit Economics
- Per-guest analysis
- Per-location analysis
- Payback calculations

### Tab 8: Scenarios
- Conservative case
- Base case
- Aggressive case
- Comparison view

### Tab 9: Sensitivity
- Key variable sensitivities
- Break-even analysis
- Risk scenarios

### Tab 10: Funding
- Use of funds detail
- Milestone mapping
- Runway analysis

---

## Interactive Model (Web)

### Adjustable Inputs (Sliders)

**Capacity**:
```
Beds per location    [──●──────────] 12
                      8    12    20
```

**Pricing**:
```
Average program      [────────●───] $XX,XXX
price                $XX    $XX    $XX
```

**Occupancy**:
```
Year 1 occupancy     [────●───────] 50%
                     30%   50%   80%
```

**Growth**:
```
Locations by Y5      [───────●────] 5
                      2     5    10
```

### Real-Time Outputs

```
┌─────────────────────────────────────────────────────────┐
│                    5-YEAR PROJECTIONS                    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Revenue         [▁▂▄▆█]  Year 5: $XX.XM               │
│                                                          │
│  EBITDA          [▁▁▂▄█]  Year 5: $X.XM                │
│                                                          │
│  Guests          [▁▂▄▆█]  Year 5: 1,000                │
│                                                          │
│  Locations       [▁▁▂▃█]  Year 5: 5                    │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  UNIT ECONOMICS                                         │
│  ─────────────────────────                              │
│  Revenue/Guest:      $XX,XXX                            │
│  Gross Margin:       XX%                                │
│  CAC:                $X,XXX                             │
│  LTV:                $XX,XXX                            │
│  LTV:CAC:            X.Xx                               │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  FUNDING IMPACT                                         │
│  ─────────────────────────                              │
│  Runway:             XX months                          │
│  Break-even:         Month XX                           │
│  Cash at break-even: $X.XM                             │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Visualization Components

1. **Revenue Waterfall Chart**
   - Starting point
   - + New guests
   - + Add-on services
   - + Post-care revenue
   - = Total revenue

2. **Cost Breakdown Pie Chart**
   - COGS %
   - Staff %
   - Facility %
   - Marketing %
   - G&A %

3. **Cumulative Cash Flow Line**
   - Investment injection
   - Operating cash flow
   - Runway indicator

4. **Scenario Comparison Bar Chart**
   - Bear / Base / Bull
   - Side-by-side metrics

---

## Unit Economics Deep Dive

### Per-Guest Analysis

```
GUEST UNIT ECONOMICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Revenue per Guest
├── Program fee                          $XX,XXX
├── Bio-optimization add-ons            + $X,XXX
├── Post-care subscription (12 mo)      + $X,XXX
└── Total Lifetime Revenue              = $XX,XXX

Cost per Guest
├── Direct medical/facilitation          $X,XXX
├── Hospitality (food, room)             $X,XXX
├── Materials & supplies                   $XXX
├── Acquisition cost (blended)           $X,XXX
├── Post-care support cost                 $XXX
└── Total Lifetime Cost                 = $X,XXX

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Gross Profit per Guest                   $XX,XXX
Gross Margin                                  XX%
Lifetime Value (LTV)                     $XX,XXX
Customer Acquisition Cost (CAC)          $X,XXX
LTV:CAC Ratio                               X.Xx
Payback Period                           X months

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Per-Location Analysis

```
LOCATION UNIT ECONOMICS (at 85% occupancy)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Annual Revenue
├── 12 beds × 2 turns/month × 12 months × 85%
├── = ~245 guests/year
└── @ $XX,XXX average = $X.XM annual revenue

Annual Costs
├── Direct costs (245 guests × $X,XXX)    $X.XM
├── Facility costs                        $XXX,XXX
├── Staff (location-specific)             $XXX,XXX
├── Local marketing                       $XX,XXX
└── Total                                 $X.XM

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Location EBITDA                          $X.XM
Location EBITDA Margin                      XX%
Payback on Location Investment           X years
ROI (5-year)                               XXX%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Sensitivity Analysis

### Key Variables to Stress-Test

| Variable | -20% | Base | +20% | Impact |
|----------|------|------|------|--------|
| Occupancy rate | | | | HIGH |
| Average price | | | | HIGH |
| COGS % | | | | MEDIUM |
| Fixed costs | | | | MEDIUM |
| CAC | | | | MEDIUM |
| Growth rate | | | | LOW (near-term) |

### Break-Even Analysis

```
BREAK-EVEN SCENARIOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Monthly Break-Even (1 location):
├── Fixed costs/month:               $XXX,XXX
├── Contribution margin/guest:       $XX,XXX
└── Guests needed/month:             XX guests
    = XX% occupancy

Annual Break-Even:
├── Fixed costs + platform:          $X.XM
├── Contribution margin:             XX%
└── Revenue needed:                  $X.XM
    = XXX guests/year

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Use of Funds Detail

### $5M Allocation

```
USE OF FUNDS BREAKDOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FACILITY & OPERATIONS (40% = $2.0M)
├── Facility buildout/renovation        $XXX,XXX
├── Equipment & furnishings             $XXX,XXX
├── Medical equipment                   $XXX,XXX
├── Initial inventory                   $XX,XXX
├── Deposits & working capital          $XXX,XXX
└── Operations buffer                   $XXX,XXX

PLATFORM DEVELOPMENT (30% = $1.5M)
├── Engineering team (12 months)        $XXX,XXX
├── Design & UX                         $XXX,XXX
├── Infrastructure & hosting            $XX,XXX
├── Third-party integrations            $XX,XXX
├── Security audit & compliance         $XX,XXX
└── Contingency                         $XX,XXX

TEAM EXPANSION (15% = $750K)
├── Key hires (4-5 positions)           $XXX,XXX
├── Medical director retainer           $XXX,XXX
├── Recruiting & onboarding             $XX,XXX
└── Training programs                   $XX,XXX

MARKETING & GROWTH (10% = $500K)
├── Brand development                   $XX,XXX
├── Content creation                    $XX,XXX
├── Ambassador program launch           $XX,XXX
├── PR & awareness                      $XX,XXX
└── Digital marketing                   $XXX,XXX

LEGAL & COMPLIANCE (5% = $250K)
├── Corporate legal                     $XX,XXX
├── Regulatory compliance               $XX,XXX
├── Insurance setup                     $XX,XXX
├── IP protection                       $XX,XXX
└── Contracts & agreements              $XX,XXX

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL                                   $5,000,000
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Milestone Mapping

| Milestone | Funding Required | Target |
|-----------|-----------------|--------|
| Facility operational | $1.5M | Month 6 |
| Platform MVP live | $1.0M | Month 8 |
| First guests | $0.2M | Month 9 |
| 50 guests served | $0.3M | Month 12 |
| Cash flow positive (monthly) | - | Month 18 |
| Series A ready | $1.0M | Month 18 |

---

## Scenario Modeling

### Conservative Case
- Slower occupancy ramp (40% → 60% → 70%)
- Lower pricing (15% below base)
- Higher costs (10% above base)
- Delayed expansion

### Base Case
- Moderate occupancy ramp (50% → 70% → 85%)
- Current pricing assumptions
- Current cost assumptions
- Planned expansion timeline

### Aggressive Case
- Fast occupancy ramp (60% → 80% → 90%)
- Premium pricing (+10%)
- Efficient operations (-5% costs)
- Accelerated expansion

---

## Model Maintenance

### Update Frequency
- Monthly: Actual vs. projected comparison
- Quarterly: Assumption review
- Per-milestone: Full model refresh

### Version Control
- Save dated versions before major changes
- Document assumption changes
- Track variance explanations

---

## Investor Q&A Preparation

### Common Financial Questions

1. **"What's your CAC assumption based on?"**
   - [Answer with channel breakdown and industry comps]

2. **"How did you arrive at pricing?"**
   - [Answer with value-based rationale and comp analysis]

3. **"What happens if occupancy is lower?"**
   - [Walk through sensitivity analysis]

4. **"When do you need more capital?"**
   - [Show runway analysis and Series A timing]

5. **"What's the path to profitability?"**
   - [Walk through break-even and margin expansion]

---

*Document Version: 1.0*
*Last Updated: [Date]*
