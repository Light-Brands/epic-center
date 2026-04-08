// ═══════════════════════════════════════════════════════════════════════════
// Jeff Partnership Offer - Financial Data
// Two scenarios: Clean $8M purchase vs Seller-financed partnership
// ═══════════════════════════════════════════════════════════════════════════

export const PROPERTY_FACTS = {
  ownerName: 'Jeff',
  propertyName: 'Rancho Paraiso Oasis',
  location: 'Tulum, Quintana Roo, Mexico',
  totalArea: '45,000 m\u00B2',
  lots: 9,
  ownerInvestment: 25_000_000,
  listPrice: 11_900_000,
  ourOfferPrice: 8_000_000,
  agentCommissionRate: 0.20,
}

// What Jeff actually nets from a fire sale at various price points
export const FIRE_SALE_SCENARIOS = [
  { label: 'Sells at list price', salePrice: 11_900_000, commission: 2_380_000, netToJeff: 9_520_000 },
  { label: 'Sells at 90% of list', salePrice: 10_710_000, commission: 2_142_000, netToJeff: 8_568_000 },
  { label: 'Sells at 80% of list', salePrice: 9_520_000, commission: 1_904_000, netToJeff: 7_616_000 },
  { label: 'Our clean purchase', salePrice: 8_000_000, commission: 0, netToJeff: 8_000_000 },
]

// ─── Scenario A: Clean Purchase ──────────────────────────────────────────

export const SCENARIO_A = {
  purchasePrice: 8_000_000,
  commission: 0,
  netToJeff: 8_000_000,
  percentRecovered: 0.32, // of $25M
  description: 'Clean sale. Certainty. No ongoing relationship.',
}

// ─── Scenario B: Seller-Financed Partnership ─────────────────────────────

export const SELLER_FINANCE_TERMS = {
  purchasePrice: 8_000_000,
  downPaymentPercent: 0.20,
  downPayment: 1_600_000,
  financedBalance: 6_400_000,
  interestRate: 0.06,
  termYears: 6,
}

// Graduated principal payments (lower early, higher later)
export const PAYMENT_SCHEDULE = [
  { year: 0, label: 'Closing', principal: 1_600_000, interest: 0,       totalCash: 1_600_000, cumulative: 1_600_000, balanceAfter: 6_400_000 },
  { year: 1, label: 'Year 1',  principal: 640_000,   interest: 384_000, totalCash: 1_024_000, cumulative: 2_624_000, balanceAfter: 5_760_000 },
  { year: 2, label: 'Year 2',  principal: 800_000,   interest: 345_600, totalCash: 1_145_600, cumulative: 3_769_600, balanceAfter: 4_960_000 },
  { year: 3, label: 'Year 3',  principal: 960_000,   interest: 297_600, totalCash: 1_257_600, cumulative: 5_027_200, balanceAfter: 4_000_000 },
  { year: 4, label: 'Year 4',  principal: 1_200_000, interest: 240_000, totalCash: 1_440_000, cumulative: 6_467_200, balanceAfter: 2_800_000 },
  { year: 5, label: 'Year 5',  principal: 1_400_000, interest: 168_000, totalCash: 1_568_000, cumulative: 8_035_200, balanceAfter: 1_400_000 },
  { year: 6, label: 'Year 6',  principal: 1_400_000, interest: 84_000,  totalCash: 1_484_000, cumulative: 9_519_200, balanceAfter: 0 },
]

export const PAYMENT_TOTALS = {
  totalPrincipal: 8_000_000,
  totalInterest: 1_519_200,
  totalCashToJeff: 9_519_200,
}

// ─── Equity Tiers ────────────────────────────────────────────────────────

export const EQUITY_TIERS = {
  base: {
    label: 'Standard Partnership',
    equityPercent: 0.08,
    reinvestment: 0,
    description: '$8M purchase with seller financing. No additional capital from Jeff.',
  },
  withReinvestment: {
    label: 'Enhanced Partnership',
    equityPercent: 0.10,
    reinvestment: 1_000_000,
    description: 'Jeff reinvests $1M into renovation. Earns additional 2% equity.',
  },
}

// Enterprise value projections at Year 5-6
export const ENTERPRISE_VALUATIONS = {
  conservative: { label: 'Conservative (30 casitas)', value: 44_500_000 },
  base:         { label: 'Base Case (30 casitas)',     value: 76_800_000 },
  fullExpansion:{ label: 'Full Expansion (60 casitas)', value: 175_000_000 },
}

// Jeff's equity value across models
export function getEquityValue(enterpriseValue: number, equityPercent: number): number {
  return enterpriseValue * equityPercent
}

// Jeff's total return (cash + equity) for each scenario
export const TOTAL_RETURN_SUMMARY = {
  at8Percent: {
    cashReceived: 9_519_200,
    reinvestment: 0,
    netCash: 9_519_200,
    equityConservative: 44_500_000 * 0.08,   // $3,560,000
    equityBase: 76_800_000 * 0.08,            // $6,144,000
    equityFull: 175_000_000 * 0.08,           // $14,000,000
    totalConservative: 9_519_200 + 3_560_000, // $13,079,200
    totalBase: 9_519_200 + 6_144_000,         // $15,663,200
    totalFull: 9_519_200 + 14_000_000,        // $23,519,200
  },
  at10Percent: {
    cashReceived: 9_519_200,
    reinvestment: 1_000_000,
    netCash: 8_519_200,
    equityConservative: 44_500_000 * 0.10,    // $4,450,000
    equityBase: 76_800_000 * 0.10,            // $7,680,000
    equityFull: 175_000_000 * 0.10,           // $17,500,000
    totalConservative: 8_519_200 + 4_450_000, // $12,969,200
    totalBase: 8_519_200 + 7_680_000,         // $16,199,200
    totalFull: 8_519_200 + 17_500_000,        // $26,019,200
  },
}

// ─── Ongoing Dividends (The Perpetual Income Stream) ─────────────────────

// Derived from term sheet: total enterprise distributions scaled to Jeff's equity
// Original term sheet shows distributions to 49% holder; we scale proportionally.
export const ANNUAL_DISTRIBUTIONS = [
  { year: 1, totalDistributions: 0,          at8Pct: 0,       at10Pct: 0 },
  { year: 2, totalDistributions: 2_400_000,  at8Pct: 196_000, at10Pct: 245_000 },
  { year: 3, totalDistributions: 8_000_000,  at8Pct: 637_000, at10Pct: 796_000 },
  { year: 4, totalDistributions: 12_900_000, at8Pct: 1_029_000, at10Pct: 1_286_000 },
  { year: 5, totalDistributions: 15_700_000, at8Pct: 1_257_000, at10Pct: 1_571_000 },
  { year: 6, totalDistributions: 18_000_000, at8Pct: 1_440_000, at10Pct: 1_800_000 },
]

// Steady-state annual income after buyback (Year 7+)
export const STEADY_STATE_DIVIDENDS = {
  at8Pct: { low: 1_300_000, high: 1_600_000 },
  at10Pct: { low: 1_600_000, high: 2_000_000 },
}

// Cumulative return with dividends (10% equity, full expansion model)
export const CUMULATIVE_RETURN_10PCT = [
  { year: 0, label: 'Closing',  cashReceived: 1_600_000, dividends: 0,         equityValue: 0,          runningTotal: 1_600_000 },
  { year: 1, label: 'Year 1',   cashReceived: 2_624_000, dividends: 0,         equityValue: 0,          runningTotal: 2_624_000 },
  { year: 2, label: 'Year 2',   cashReceived: 3_769_600, dividends: 245_000,   equityValue: 0,          runningTotal: 4_014_600 },
  { year: 3, label: 'Year 3',   cashReceived: 5_027_200, dividends: 1_041_000, equityValue: 0,          runningTotal: 6_068_200 },
  { year: 4, label: 'Year 4',   cashReceived: 6_467_200, dividends: 2_327_000, equityValue: 0,          runningTotal: 8_794_200 },
  { year: 5, label: 'Year 5',   cashReceived: 8_035_200, dividends: 3_898_000, equityValue: 0,          runningTotal: 11_933_200 },
  { year: 6, label: 'Year 6',   cashReceived: 9_519_200, dividends: 5_698_000, equityValue: 17_500_000, runningTotal: 32_717_200 },
]

// ─── Downside Protection ─────────────────────────────────────────────────

export const DEFAULT_SCENARIOS = [
  {
    year: 1,
    cashReceived: 2_624_000,
    dividendsReceived: 0,
    totalReceived: 2_624_000,
    outcome: 'Jeff takes back the property + $2.6M in payments already received.',
  },
  {
    year: 3,
    cashReceived: 5_027_200,
    dividendsReceived: 1_041_000,
    totalReceived: 6_068_200,
    outcome: 'Jeff takes back the improved property + $6.1M in cash and dividends received.',
  },
  {
    year: 5,
    cashReceived: 8_035_200,
    dividendsReceived: 3_898_000,
    totalReceived: 11_933_200,
    outcome: 'Jeff takes back a significantly improved property + $11.9M received. Already ahead of any fire sale outcome.',
  },
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
