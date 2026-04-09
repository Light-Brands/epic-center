// ═══════════════════════════════════════════════════════════════════════════
// Jeff Partnership Offer - Financial Data (Partner8 variant)
// Two scenarios: Clean $8M purchase vs Seller-financed partnership
// ═══════════════════════════════════════════════════════════════════════════

export const PROPERTY_FACTS = {
  ownerName: 'Jeff',
  propertyName: 'Rancho Paraiso Oasis',
  location: 'Tulum, Quintana Roo, Mexico',
  totalArea: '45,000 m\u00B2',
  lots: 9,
  ownerInvestment: 25_000_000,
  askingPrice: 8_000_000,
  brokerCommissionRate: 0.06,
  brokerCommission: 480_000,
  reinvestment: 1_000_000,
}

// ─── Scenario A: Clean Purchase ──────────────────────────────────────────

export const SCENARIO_A = {
  purchasePrice: 8_000_000,
  brokerCommission: 480_000,
  netToJeff: 8_000_000,
  percentRecovered: 0.32, // of $25M
  description: 'Full asking price. Clean sale. No ongoing relationship.',
}

// ─── Scenario B: Seller-Financed Partnership ─────────────────────────────

export const SELLER_FINANCE_TERMS = {
  purchasePrice: 8_000_000,
  downPaymentPercent: 0.20,
  downPayment: 1_600_000,
  financedBalance: 6_400_000,
  interestRate: 0.06,
  termYears: 6,
  brokerCommission: 480_000,
  equityPercent: 0.10,
  reinvestment: 1_000_000,
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
  cashReceived: 9_519_200,
  reinvestment: 1_000_000,
  netCash: 8_519_200,
  equityConservative: 44_500_000 * 0.10,   // $4,450,000
  equityBase: 76_800_000 * 0.10,            // $7,680,000
  equityFull: 175_000_000 * 0.10,           // $17,500,000
  totalConservative: 8_519_200 + 4_450_000,  // $12,969,200
  totalBase: 8_519_200 + 7_680_000,          // $16,199,200
  totalFull: 8_519_200 + 17_500_000,         // $26,019,200
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
  { year: 0, label: 'Closing',  cashReceived: 1_600_000,  dividends: 0,         equityValue: 0,          runningTotal: 1_600_000 },
  { year: 1, label: 'Year 1',   cashReceived: 2_624_000,  dividends: 0,         equityValue: 0,          runningTotal: 2_624_000 },
  { year: 2, label: 'Year 2',   cashReceived: 3_769_600,  dividends: 245_000,   equityValue: 0,          runningTotal: 4_014_600 },
  { year: 3, label: 'Year 3',   cashReceived: 5_027_200,  dividends: 1_041_000, equityValue: 0,          runningTotal: 6_068_200 },
  { year: 4, label: 'Year 4',   cashReceived: 6_467_200,  dividends: 2_327_000, equityValue: 0,          runningTotal: 8_794_200 },
  { year: 5, label: 'Year 5',   cashReceived: 8_035_200,  dividends: 3_898_000, equityValue: 0,          runningTotal: 11_933_200 },
  { year: 6, label: 'Year 6',   cashReceived: 9_519_200,  dividends: 5_698_000, equityValue: 17_500_000, runningTotal: 32_717_200 },
]

// ─── Downside Protection ─────────────────────────────────────────────────

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
