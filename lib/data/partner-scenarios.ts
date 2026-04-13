// ═══════════════════════════════════════════════════════════════════════════
// Jeff Partnership Offer - Financial Data
// Two partnership paths based on $8M property value
// ═══════════════════════════════════════════════════════════════════════════

export const PROPERTY_FACTS = {
  ownerName: 'Jeff',
  propertyName: 'Rancho Paraiso Oasis',
  location: 'Tulum, Quintana Roo, Mexico',
  totalArea: '45,000 m\u00B2',
  lots: 9,
  ownerInvestment: 25_000_000,
  askingPrice: 8_000_000,
  operationsCapital: 5_400_000,
}

// ─── Partnership A: Seller-Financed (10% equity) ────────────────────────
// Jeff contributes: the building ($8M) + covers $1.6M broker commission
// Light Brands contributes: raises $5.4M for operations
// Jeff receives: 10% equity + seller-finance payments on $8M

export const SELLER_FINANCE_TERMS = {
  purchasePrice: 8_000_000,
  downPaymentPercent: 0.20,
  downPayment: 1_600_000,
  financedBalance: 6_400_000,
  interestRate: 0.06,
  termYears: 6,
  brokerCommission: 1_600_000,
  brokerPaidBy: 'Jeff',             // Jeff covers the broker commission
  equityPercent: 0.10,
  jeffContribution: 'building',     // Jeff contributes building only, no opex
  opexRaisedBy: 'Light Brands',    // We raise the $5.4M independently
}

// Graduated principal payments (lower early, higher later)
export const PAYMENT_SCHEDULE = [
  { year: 0, label: 'Closing',  principal: 1_600_000, interest: 0,       totalCash: 1_600_000, cumulative: 1_600_000,  balanceAfter: 6_400_000 },
  { year: 1, label: 'Year 1',   principal: 640_000,   interest: 384_000, totalCash: 1_024_000, cumulative: 2_624_000,  balanceAfter: 5_760_000 },
  { year: 2, label: 'Year 2',   principal: 800_000,   interest: 345_600, totalCash: 1_145_600, cumulative: 3_769_600,  balanceAfter: 4_960_000 },
  { year: 3, label: 'Year 3',   principal: 960_000,   interest: 297_600, totalCash: 1_257_600, cumulative: 5_027_200,  balanceAfter: 4_000_000 },
  { year: 4, label: 'Year 4',   principal: 1_200_000, interest: 240_000, totalCash: 1_440_000, cumulative: 6_467_200,  balanceAfter: 2_800_000 },
  { year: 5, label: 'Year 5',   principal: 1_400_000, interest: 168_000, totalCash: 1_568_000, cumulative: 8_035_200,  balanceAfter: 1_400_000 },
  { year: 6, label: 'Year 6',   principal: 1_400_000, interest: 84_000,  totalCash: 1_484_000, cumulative: 9_519_200,  balanceAfter: 0 },
]

export const PAYMENT_TOTALS = {
  totalPrincipal: 8_000_000,
  totalInterest: 1_519_200,
  totalCashToJeff: 9_519_200,
}

// ─── Equity (Partnership A) ─────────────────────────────────────────────

export const EQUITY = {
  percent: 0.10,
  description: 'Jeff contributes his building and covers the $1.6M broker commission. Light Brands raises $5.4M for operations. Jeff receives 10% equity in the enterprise.',
}

// Enterprise value projections at Year 5-6
export const ENTERPRISE_VALUATIONS = {
  conservative: { label: 'Conservative (30 casitas)', value: 44_500_000 },
  base:         { label: 'Base Case (30 casitas)',     value: 76_800_000 },
  fullExpansion:{ label: 'Full Expansion (60 casitas)', value: 175_000_000 },
}

// Jeff's total return - Partnership A (cash + equity at 10%)
// Jeff pays $1.6M commission out of pocket, so net cash = $9.5M - $1.6M = $7.9M
export const TOTAL_RETURN = {
  cashReceived: 9_519_200,
  commissionPaid: 1_600_000,
  netCash: 7_919_200,             // $9,519,200 - $1,600,000 commission
  equityConservative: 44_500_000 * 0.10,   // $4,450,000
  equityBase: 76_800_000 * 0.10,            // $7,680,000
  equityFull: 175_000_000 * 0.10,           // $17,500,000
  totalConservative: 7_919_200 + 4_450_000,  // $12,369,200
  totalBase: 7_919_200 + 7_680_000,          // $15,599,200
  totalFull: 7_919_200 + 17_500_000,         // $25,419,200
}

// ─── Ongoing Dividends - Partnership A (10% equity) ─────────────────────

export const ANNUAL_DISTRIBUTIONS = [
  { year: 1, totalDistributions: 0,          jeffShare: 0 },
  { year: 2, totalDistributions: 2_400_000,  jeffShare: 245_000 },
  { year: 3, totalDistributions: 8_000_000,  jeffShare: 796_000 },
  { year: 4, totalDistributions: 12_900_000, jeffShare: 1_286_000 },
  { year: 5, totalDistributions: 15_700_000, jeffShare: 1_571_000 },
  { year: 6, totalDistributions: 18_000_000, jeffShare: 1_800_000 },
]

export const STEADY_STATE_DIVIDENDS = { low: 1_600_000, high: 2_000_000 }

// Cumulative return - Partnership A (10% equity, full expansion model)
// cashReceived is gross (before commission); netCash accounts for $1.6M commission
export const CUMULATIVE_RETURN = [
  { year: 0, label: 'Closing',  cashReceived: 1_600_000,  dividends: 0,         equityValue: 0,          runningTotal: 0 },
  { year: 1, label: 'Year 1',   cashReceived: 2_624_000,  dividends: 0,         equityValue: 0,          runningTotal: 1_024_000 },
  { year: 2, label: 'Year 2',   cashReceived: 3_769_600,  dividends: 245_000,   equityValue: 0,          runningTotal: 2_414_600 },
  { year: 3, label: 'Year 3',   cashReceived: 5_027_200,  dividends: 1_041_000, equityValue: 0,          runningTotal: 4_468_200 },
  { year: 4, label: 'Year 4',   cashReceived: 6_467_200,  dividends: 2_327_000, equityValue: 0,          runningTotal: 7_194_200 },
  { year: 5, label: 'Year 5',   cashReceived: 8_035_200,  dividends: 3_898_000, equityValue: 0,          runningTotal: 10_333_200 },
  { year: 6, label: 'Year 6',   cashReceived: 9_519_200,  dividends: 5_698_000, equityValue: 17_500_000, runningTotal: 31_117_200 },
]

// ─── Downside Protection (Partnership A) ────────────────────────────────

export const DEFAULT_SCENARIOS = [
  {
    year: 1,
    cashReceived: 2_624_000,
    dividendsReceived: 0,
    totalReceived: 2_624_000,
    outcome: 'Jeff takes back the property plus $2.6M in payments already received.',
  },
  {
    year: 3,
    cashReceived: 5_027_200,
    dividendsReceived: 1_041_000,
    totalReceived: 6_068_200,
    outcome: 'Jeff takes back the improved property plus $6.1M in cash and dividends received.',
  },
  {
    year: 5,
    cashReceived: 8_035_200,
    dividendsReceived: 3_898_000,
    totalReceived: 11_933_200,
    outcome: 'Jeff takes back a significantly improved property plus $11.9M received. Already ahead of any sale outcome.',
  },
]

// ═══════════════════════════════════════════════════════════════════════════
// Partnership B: Full Partnership (49% equity) — $20M Lien Structure
//
// Jeff's asking price: $11.9M
// Light Brands partnership credit: $14.6M (above ask — a commitment premium)
// Jeff adds: $5.4M operations capital
// Total lien position: $20M, first-position, secured by property + enterprise
// Jeff also receives 49% equity across three operating entities
// ═══════════════════════════════════════════════════════════════════════════

export const JEFF_PROPERTY = {
  askingPrice: 11_900_000,          // Jeff's asking price — what he said the property is worth
  partnerCredit: 14_600_000,        // Light Brands partnership credit — above ask
  askingPremium: 2_700_000,         // $14.6M - $11.9M — the commitment premium
}

export const SCENARIO_C = {
  totalLienAmount: 20_000_000,      // Jeff's first-position lien
  propertyCredit: 14_600_000,       // credited property value (above $11.9M ask)
  askingPrice: 11_900_000,          // Jeff's stated asking price
  operationsCapital: 5_400_000,     // Jeff's cash contribution for buildout
  brokerCommission: 1_600_000,
  brokerPaidBy: 'Light Brands',
  jeffEquityPercent: 0.49,
  jeffContribution: 20_000_000,     // property credit + operations capital
  jeffCashContribution: 5_400_000,
  lienPosition: 'first',
  lienSecuredBy: 'property + operating entities',
  paidFromRevenue: true,
}

// Jeff's 49% share of enterprise distributions
export const SCENARIO_C_DISTRIBUTIONS = [
  { year: 1, totalDistributions: 0,          jeffShare: 0 },
  { year: 2, totalDistributions: 2_400_000,  jeffShare: 1_176_000 },
  { year: 3, totalDistributions: 8_000_000,  jeffShare: 3_920_000 },
  { year: 4, totalDistributions: 12_900_000, jeffShare: 6_321_000 },
  { year: 5, totalDistributions: 15_700_000, jeffShare: 7_693_000 },
  { year: 6, totalDistributions: 18_000_000, jeffShare: 8_820_000 },
]

export const SCENARIO_C_STEADY_STATE = { low: 7_840_000, high: 9_800_000 }

// Jeff's total return - Partnership B (49% equity)
export const SCENARIO_C_RETURN = {
  equityConservative: 44_500_000 * 0.49,   // $21,805,000
  equityBase: 76_800_000 * 0.49,            // $37,632,000
  equityFull: 175_000_000 * 0.49,           // $85,750,000
  cumulativeDividendsY6: 27_930_000,        // sum of 6 years of distributions
  totalConservative: 27_930_000 + 21_805_000, // $49,735,000
  totalBase: 27_930_000 + 37_632_000,         // $65,562,000
  totalFull: 27_930_000 + 85_750_000,         // $113,680,000
}

// ─── Downside Protection (Partnership B) ────────────────────────────────
// If Light Brands defaults on the $20M lien at any point, Jeff forecloses on
// his first-position lien. He recovers:
//   1. The property (now improved with operations buildout)
//   2. All revenue distributions received up to that point (49% of enterprise payouts)
//   3. Any unrecovered portion of the $20M lien as a claim against remaining assets
// Revenue distributions are ADDITIONAL to the lien — they flow from equity, not principal.

export const SCENARIO_C_DEFAULT_SCENARIOS = [
  {
    year: 1,
    distributionsReceived: 0,
    propertyStatus: 'Initial buildout underway',
    lienEnforced: 20_000_000,
    outcome: 'Jeff forecloses on the $20M first-position lien, recovers the property with initial buildout, and the full lien is enforceable against remaining enterprise assets. Jeff is whole on his position.',
  },
  {
    year: 3,
    distributionsReceived: 5_096_000,
    propertyStatus: 'Operational, partial buildout complete',
    lienEnforced: 20_000_000,
    outcome: 'Jeff recovers the improved operational property plus $5.1M in revenue distributions already received. The $20M lien remains enforceable. Combined position: property back + $5.1M in hand + lien claim.',
  },
  {
    year: 5,
    distributionsReceived: 19_110_000,
    propertyStatus: 'Fully operational, substantial buildout',
    lienEnforced: 20_000_000,
    outcome: 'Jeff recovers a fully operational property plus $19.1M in distributions already received. He has already recovered nearly the entire $20M lien amount in cash alone, and the property comes back on top of that.',
  },
]

// Cumulative return - Partnership B (49% equity, full expansion model)
export const SCENARIO_C_CUMULATIVE = [
  { year: 0, label: 'Closing',  dividends: 0,          equityValue: 0,          runningTotal: 0 },
  { year: 1, label: 'Year 1',   dividends: 0,          equityValue: 0,          runningTotal: 0 },
  { year: 2, label: 'Year 2',   dividends: 1_176_000,  equityValue: 0,          runningTotal: 1_176_000 },
  { year: 3, label: 'Year 3',   dividends: 5_096_000,  equityValue: 0,          runningTotal: 5_096_000 },
  { year: 4, label: 'Year 4',   dividends: 11_417_000, equityValue: 0,          runningTotal: 11_417_000 },
  { year: 5, label: 'Year 5',   dividends: 19_110_000, equityValue: 0,          runningTotal: 19_110_000 },
  { year: 6, label: 'Year 6',   dividends: 27_930_000, equityValue: 85_750_000, runningTotal: 113_680_000 },
]

// ─── Formatting Helpers ──────────────────────────────────────────────────

export function formatCurrency(value: number): string {
  if (Math.abs(value) >= 1_000_000) {
    const millions = value / 1_000_000
    return `$${millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1)}M`
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatPercent(value: number): string {
  return `${(value * 100).toFixed(0)}%`
}
