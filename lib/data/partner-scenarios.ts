// ═══════════════════════════════════════════════════════════════════════════
// Jeff Partnership Offer - Financial Data
// Two scenarios: Clean $11.9M purchase vs Seller-financed partnership
// ═══════════════════════════════════════════════════════════════════════════

export const PROPERTY_FACTS = {
  ownerName: 'Jeff',
  propertyName: 'Rancho Paraiso Oasis',
  location: 'Tulum, Quintana Roo, Mexico',
  totalArea: '45,000 m\u00B2',
  lots: 9,
  ownerInvestment: 25_000_000,
  askingPrice: 11_900_000,
  brokerCommissionRate: 0.06,
  brokerCommission: 714_000,
  reinvestment: 1_000_000,
}

// ─── Scenario A: Clean Purchase ──────────────────────────────────────────

export const SCENARIO_A = {
  purchasePrice: 11_900_000,
  brokerCommission: 714_000,
  netToJeff: 11_900_000,
  percentRecovered: 0.476, // of $25M
  description: 'Full asking price. Clean sale. No ongoing relationship.',
}

// ─── Scenario B: Seller-Financed Partnership ─────────────────────────────

export const SELLER_FINANCE_TERMS = {
  purchasePrice: 11_900_000,
  downPaymentPercent: 0.20,
  downPayment: 2_380_000,
  financedBalance: 9_520_000,
  interestRate: 0.06,
  termYears: 6,
  brokerCommission: 714_000,
  equityPercent: 0.10,
  reinvestment: 1_000_000,
}

// Graduated principal payments (lower early, higher later)
export const PAYMENT_SCHEDULE = [
  { year: 0, label: 'Closing',  principal: 2_380_000, interest: 0,       totalCash: 2_380_000, cumulative: 2_380_000,  balanceAfter: 9_520_000 },
  { year: 1, label: 'Year 1',   principal: 952_000,   interest: 571_200, totalCash: 1_523_200, cumulative: 3_903_200,  balanceAfter: 8_568_000 },
  { year: 2, label: 'Year 2',   principal: 1_190_000, interest: 514_080, totalCash: 1_704_080, cumulative: 5_607_280,  balanceAfter: 7_378_000 },
  { year: 3, label: 'Year 3',   principal: 1_428_000, interest: 442_680, totalCash: 1_870_680, cumulative: 7_477_960,  balanceAfter: 5_950_000 },
  { year: 4, label: 'Year 4',   principal: 1_785_000, interest: 357_000, totalCash: 2_142_000, cumulative: 9_619_960,  balanceAfter: 4_165_000 },
  { year: 5, label: 'Year 5',   principal: 2_082_500, interest: 249_900, totalCash: 2_332_400, cumulative: 11_952_360, balanceAfter: 2_082_500 },
  { year: 6, label: 'Year 6',   principal: 2_082_500, interest: 124_950, totalCash: 2_207_450, cumulative: 14_159_810, balanceAfter: 0 },
]

export const PAYMENT_TOTALS = {
  totalPrincipal: 11_900_000,
  totalInterest: 2_259_810,
  totalCashToJeff: 14_159_810,
}

// ─── Equity ──────────────────────────────────────────────────────────────

export const EQUITY = {
  percent: 0.10,
  reinvestment: 1_000_000,
  description: 'Jeff reinvests $1M into property renovation and receives 10% equity in the enterprise.',
}

// Enterprise value projections at Year 5-6
export const ENTERPRISE_VALUATIONS = {
  conservative: { label: 'Conservative (30 casitas)', value: 44_500_000 },
  base:         { label: 'Base Case (30 casitas)',     value: 76_800_000 },
  fullExpansion:{ label: 'Full Expansion (60 casitas)', value: 175_000_000 },
}

// Jeff's total return (cash + equity)
export const TOTAL_RETURN = {
  cashReceived: 14_159_810,
  reinvestment: 1_000_000,
  netCash: 13_159_810,
  equityConservative: 44_500_000 * 0.10,   // $4,450,000
  equityBase: 76_800_000 * 0.10,            // $7,680,000
  equityFull: 175_000_000 * 0.10,           // $17,500,000
  totalConservative: 13_159_810 + 4_450_000, // $17,609,810
  totalBase: 13_159_810 + 7_680_000,         // $20,839,810
  totalFull: 13_159_810 + 17_500_000,        // $30,659_810
}

// ─── Ongoing Dividends (The Perpetual Income Stream) ─────────────────────

// Derived from term sheet: total enterprise distributions scaled to Jeff's 10% equity
export const ANNUAL_DISTRIBUTIONS = [
  { year: 1, totalDistributions: 0,          jeffShare: 0 },
  { year: 2, totalDistributions: 2_400_000,  jeffShare: 245_000 },
  { year: 3, totalDistributions: 8_000_000,  jeffShare: 796_000 },
  { year: 4, totalDistributions: 12_900_000, jeffShare: 1_286_000 },
  { year: 5, totalDistributions: 15_700_000, jeffShare: 1_571_000 },
  { year: 6, totalDistributions: 18_000_000, jeffShare: 1_800_000 },
]

// Steady-state annual income after buyback (Year 7+)
export const STEADY_STATE_DIVIDENDS = { low: 1_600_000, high: 2_000_000 }

// Cumulative return with dividends (10% equity, full expansion model)
export const CUMULATIVE_RETURN = [
  { year: 0, label: 'Closing',  cashReceived: 2_380_000,  dividends: 0,         equityValue: 0,          runningTotal: 2_380_000 },
  { year: 1, label: 'Year 1',   cashReceived: 3_903_200,  dividends: 0,         equityValue: 0,          runningTotal: 3_903_200 },
  { year: 2, label: 'Year 2',   cashReceived: 5_607_280,  dividends: 245_000,   equityValue: 0,          runningTotal: 5_852_280 },
  { year: 3, label: 'Year 3',   cashReceived: 7_477_960,  dividends: 1_041_000, equityValue: 0,          runningTotal: 8_518_960 },
  { year: 4, label: 'Year 4',   cashReceived: 9_619_960,  dividends: 2_327_000, equityValue: 0,          runningTotal: 11_946_960 },
  { year: 5, label: 'Year 5',   cashReceived: 11_952_360, dividends: 3_898_000, equityValue: 0,          runningTotal: 15_850_360 },
  { year: 6, label: 'Year 6',   cashReceived: 14_159_810, dividends: 5_698_000, equityValue: 17_500_000, runningTotal: 37_357_810 },
]

// ─── Downside Protection ─────────────────────────────────────────────────

export const DEFAULT_SCENARIOS = [
  {
    year: 1,
    cashReceived: 3_903_200,
    dividendsReceived: 0,
    totalReceived: 3_903_200,
    outcome: 'Jeff takes back the property plus $3.9M in payments already received.',
  },
  {
    year: 3,
    cashReceived: 7_477_960,
    dividendsReceived: 1_041_000,
    totalReceived: 8_518_960,
    outcome: 'Jeff takes back the improved property plus $8.5M in cash and dividends received.',
  },
  {
    year: 5,
    cashReceived: 11_952_360,
    dividendsReceived: 3_898_000,
    totalReceived: 15_850_360,
    outcome: 'Jeff takes back a significantly improved property plus $15.9M received. Already ahead of any sale outcome.',
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
