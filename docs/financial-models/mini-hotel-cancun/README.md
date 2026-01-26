# Mini Hotel Cancún - Financial Model

> **Property Investment Analysis for Transformational Epicenter**
>
> Analysis Date: January 25, 2026

---

## Executive Summary

This financial model provides a comprehensive analysis of the Mini Hotel Cancún property as a potential acquisition for the Transformational Epicenter wellness facility.

### Key Findings

| Metric | Value | Assessment |
|--------|-------|------------|
| **Acquisition Price** | $1,100,000 USD | Excellent value |
| **Total Project Cost** | $10,867,500 USD | Within budget |
| **Cost Per Room** | $543,375 | Well below $1M target |
| **Property Score** | 79/100 | Very Good |
| **5-Year IRR** | 18.5% | Strong returns |
| **Recommendation** | ❌ PASS | Brand misalignment |

### Critical Concern

**Despite strong financial metrics, the property is NOT RECOMMENDED as a primary treatment facility due to fundamental brand misalignment:**

- Urban Cancún location lacks the natural healing environment expected by guests
- No beach, jungle, cenotes, or natural features
- Limited privacy in commercial/urban setting
- Zero strategic fit score for wellness retreat brand

**Alternative Use Cases:**
- Administrative hub
- Guest check-in/transfer point
- Staff training facility

---

## Model Structure

This financial model consists of 10 tabs:

| Tab | File | Description |
|-----|------|-------------|
| 1 | `01_DASHBOARD.csv` | Executive summary and key metrics |
| 2 | `02_ASSUMPTIONS.csv` | All adjustable inputs and parameters |
| 3 | `03_ACQUISITION_COSTS.csv` | Property and development costs |
| 4 | `04_REVENUE_MODEL.csv` | 5-year revenue projections |
| 5 | `05_OPERATING_EXPENSES.csv` | Cost structure and OpEx |
| 6 | `06_PL_STATEMENT.csv` | Profit & Loss projections |
| 7 | `07_CASH_FLOW.csv` | Cash flow analysis |
| 8 | `08_UNIT_ECONOMICS.csv` | Per-guest and per-location metrics |
| 9 | `09_SENSITIVITY.csv` | Risk analysis and scenarios |
| 10 | `10_INVESTMENT_RETURNS.csv` | ROI and valuation analysis |

---

## How to Import to Google Sheets

### Method 1: Direct Import (Recommended)

1. Open Google Sheets: https://sheets.google.com
2. Create a new blank spreadsheet
3. Rename it "Mini Hotel Cancún - Financial Model"
4. For each CSV file:
   - Go to **File → Import**
   - Click **Upload** and select the CSV file
   - Choose **"Insert new sheet(s)"**
   - Set separator to **"Comma"**
   - Click **Import data**
5. Rename each sheet tab to match the file name
6. Repeat for all 10 CSV files

### Method 2: Copy-Paste from Opened CSV

1. Open each CSV file in a text editor or Excel
2. Select all content (Ctrl+A / Cmd+A)
3. Copy (Ctrl+C / Cmd+C)
4. In Google Sheets, create a new tab
5. Click cell A1
6. Paste (Ctrl+V / Cmd+V)
7. Use **Data → Split text to columns** with comma separator

### Method 3: Google Drive Upload

1. Upload all CSV files to Google Drive
2. Right-click on each file
3. Select **Open with → Google Sheets**
4. Copy each sheet into a master workbook

---

## Formatting Recommendations

After importing, apply these formatting improvements:

### Currency Formatting
- Select columns with dollar amounts
- Format → Number → Currency
- Reduce decimal places as needed

### Percentage Formatting
- Select columns with percentages
- Format → Number → Percent
- Adjust decimal places

### Header Formatting
- Bold row 1 headers
- Apply background color (light blue recommended)
- Freeze top row: View → Freeze → 1 row

### Conditional Formatting
Apply conditional formatting to highlight:
- Positive/negative values (green/red)
- Key thresholds (occupancy targets, break-even points)
- Risk indicators

---

## Key Assumptions (Editable)

The following assumptions in Tab 2 can be adjusted to run different scenarios:

| Parameter | Base Case | Range |
|-----------|-----------|-------|
| Occupancy Year 1 | 50% | 40-60% |
| Occupancy Year 3 | 75% | 65-85% |
| Average Price/Guest | $30,100 | $25,000-$36,000 |
| Direct Cost/Guest | $9,600 | $8,000-$11,000 |
| Fixed Costs/Month | $245,370 | ±15% |
| Discount Rate | 10% | 8-15% |

---

## Scenario Summary

| Scenario | Year 5 Revenue | Year 5 EBITDA | 5-Year NPV | IRR |
|----------|----------------|---------------|------------|-----|
| **Conservative** | $9.7M | $3.4M | $2.9M | 12.3% |
| **Base Case** | $11.6M | $4.6M | $4.5M | 18.5% |
| **Aggressive** | $11.6M | $4.8M | $6.4M | 24.7% |

---

## Files Included

```
/docs/financial-models/mini-hotel-cancun/
├── README.md                    # This documentation
├── 01_DASHBOARD.csv             # Executive summary
├── 02_ASSUMPTIONS.csv           # Model inputs
├── 03_ACQUISITION_COSTS.csv     # Development budget
├── 04_REVENUE_MODEL.csv         # Revenue projections
├── 05_OPERATING_EXPENSES.csv    # Cost model
├── 06_PL_STATEMENT.csv          # P&L projections
├── 07_CASH_FLOW.csv             # Cash flow analysis
├── 08_UNIT_ECONOMICS.csv        # Unit economics
├── 09_SENSITIVITY.csv           # Risk analysis
└── 10_INVESTMENT_RETURNS.csv    # ROI analysis
```

---

## Data Sources

- Property data: `/docs/quintana-roo/properties/MINI_HOTEL_CANCUN.md`
- Pricing framework: `/docs/pitch-packet/FINANCIAL_MODEL_GUIDE.md`
- Regulatory costs: `/docs/quintana-roo/MEXICO_REGULATORY_REQUIREMENTS.md`
- Market assumptions: Industry benchmarks and comparable transactions

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-25 | Initial comprehensive model |

---

## Contact

For questions about this financial model, contact the Transformational Epicenter team.

---

*Document generated: January 25, 2026*
