import type {
  Property,
  DashboardMetrics,
  RevenueProjection,
  PLStatement,
  UnitEconomics,
  InvestmentReturns,
  UseOfFunds,
  RevenueChartData,
} from '@/types/financial'

// All financial data aligned with IPEV-Compliant Valuation Report (Feb 2026)
// Source: docs/data-room/financial/22-valuation-report.md
// Base case = 60% Y1 → 75% Y2 → 80% Y3-5 occupancy, 30 rooms, $2,000/night ADR
// Conservative = ~40-70% occupancy ramp | Aggressive = ~70-85% occupancy ramp

export const PROPERTIES: Property[] = [
  {
    id: 'riviera-maya-jungle-estate',
    name: 'Riviera Maya Jungle Estate',
    location: 'Tulum, Q.R.',
    propertyType: 'Jungle estate compound (9 lots, 45,000 m²)',
    currentUse: 'Development',
    score: 88,
    targetMarket: 'HNW Individuals',
    status: 'LEAD',
    capacity: {
      totalRooms: 30,
      treatmentBeds: { conservative: 30, base: 30, aggressive: 30 },
      maxGuestsPerYear: 840, // 30 rooms × 365 days / 13-day avg stay
    },
    acquisition: {
      askingPrice: 5800000,
      negotiatedPrice: 5800000,
      closingCosts: 350000,
      totalAcquisitionCost: 6150000,
    },
    imageUrl: '/images/properties/hotel-alea-tulum.jpg',
  },
]

// Dashboard metrics — key investor-facing numbers (aligned with valuation report)
export const DASHBOARD_METRICS: DashboardMetrics = {
  propertyName: 'Riviera Maya Jungle Estate',
  location: 'Tulum, Q.R.',
  totalRooms: 30,
  treatmentBeds: 30,
  propertyScore: 88,
  recommendation: 'PROCEED',
  averageDailyRate: 2000,
  keyMetrics: {
    acquisitionPrice: 5800000,
    totalProjectCost: 13773500, // Valuation report: all-equity seed round
    costPerRoom: 459117, // $13,773,500 / 30 rooms
    revenue: {
      // Base from valuation report P&L; Conservative/Aggressive derived from scenario analysis
      year1: { conservative: 8751400, base: 13140400, aggressive: 15321600 },
      year3: { conservative: 12688200, base: 17529400, aggressive: 18620000 },
      year5: { conservative: 15321600, base: 17529400, aggressive: 18620000 },
      fiveYearTotal: { conservative: 61925000, base: 82140800, aggressive: 88711000 },
    },
    projectIRR: { conservative: 0.6654, base: 0.7350, aggressive: 0.8009 },
    fiveYearMOIC: { conservative: 4.65, base: 6.69, aggressive: 8.94 },
  },
}

// Revenue projections — base case from valuation report Section 11
// Conservative: ~40% Y1 → 70% Y5 | Aggressive: ~70% Y1 → 85% Y3-5
// Revenue per guest: $26,600 weighted average (7/14/21/28-day program mix)
export const REVENUE_PROJECTIONS: RevenueProjection[] = [
  {
    year: 1,
    programRevenue: { conservative: 8751400, base: 13140400, aggressive: 15321600 },
    bioOptimizationPremium: { conservative: 0, base: 0, aggressive: 0 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 0, base: 0, aggressive: 0 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 8751400, base: 13140400, aggressive: 15321600 },
  },
  {
    year: 2,
    programRevenue: { conservative: 10932600, base: 16412200, aggressive: 17529400 },
    bioOptimizationPremium: { conservative: 0, base: 0, aggressive: 0 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 0, base: 0, aggressive: 0 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 10932600, base: 16412200, aggressive: 17529400 },
  },
  {
    year: 3,
    programRevenue: { conservative: 12688200, base: 17529400, aggressive: 18620000 },
    bioOptimizationPremium: { conservative: 0, base: 0, aggressive: 0 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 0, base: 0, aggressive: 0 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 12688200, base: 17529400, aggressive: 18620000 },
  },
  {
    year: 4,
    programRevenue: { conservative: 14231000, base: 17529400, aggressive: 18620000 },
    bioOptimizationPremium: { conservative: 0, base: 0, aggressive: 0 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 0, base: 0, aggressive: 0 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 14231000, base: 17529400, aggressive: 18620000 },
  },
  {
    year: 5,
    programRevenue: { conservative: 15321600, base: 17529400, aggressive: 18620000 },
    bioOptimizationPremium: { conservative: 0, base: 0, aggressive: 0 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 0, base: 0, aggressive: 0 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 15321600, base: 17529400, aggressive: 18620000 },
  },
]

export const REVENUE_CHART_DATA: RevenueChartData[] = [
  { year: 'Year 1', conservative: 8751400, base: 13140400, aggressive: 15321600 },
  { year: 'Year 2', conservative: 10932600, base: 16412200, aggressive: 17529400 },
  { year: 'Year 3', conservative: 12688200, base: 17529400, aggressive: 18620000 },
  { year: 'Year 4', conservative: 14231000, base: 17529400, aggressive: 18620000 },
  { year: 'Year 5', conservative: 15321600, base: 17529400, aggressive: 18620000 },
]

// P&L from valuation report Section 11 — base case
// Includes D&A ($487,143/yr), 30% tax rate, cost escalation (~4%/yr)
export const PL_STATEMENTS: PLStatement[] = [
  {
    year: 1,
    revenue: {
      programRevenue: 13140400,
      bioOptimizationPremium: 0,
      wellnessProducts: 0,
      postCareSubscriptions: 0,
      conciergeServices: 0,
      total: 13140400,
    },
    cogs: 2286726,
    grossProfit: 10853674,
    grossMarginPercent: 0.83,
    operatingExpenses: {
      facilityCosts: 300000,
      personnel: 2064996,
      professionalServices: 174996,
      technology: 75000,
      marketing: 200004,
      gAndA: 200004,
      total: 3015000,
    },
    totalOpex: 3015000,
    ebitda: 7838674,
    ebitdaMarginPercent: 0.60,
    depreciation: 487143,
    ebit: 7351531,
    interestExpense: 0,
    ebt: 7351531,
    taxes: 2205459,
    netIncome: 5146072,
  },
  {
    year: 2,
    revenue: {
      programRevenue: 16412200,
      bioOptimizationPremium: 0,
      wellnessProducts: 0,
      postCareSubscriptions: 0,
      conciergeServices: 0,
      total: 16412200,
    },
    cogs: 2970337,
    grossProfit: 13441863,
    grossMarginPercent: 0.82,
    operatingExpenses: {
      facilityCosts: 312000,
      personnel: 2147596,
      professionalServices: 181996,
      technology: 78000,
      marketing: 208004,
      gAndA: 208004,
      total: 3135600,
    },
    totalOpex: 3135600,
    ebitda: 10306263,
    ebitdaMarginPercent: 0.63,
    depreciation: 487143,
    ebit: 9819120,
    interestExpense: 0,
    ebt: 9819120,
    taxes: 2945736,
    netIncome: 6873384,
  },
  {
    year: 3,
    revenue: {
      programRevenue: 17529400,
      bioOptimizationPremium: 0,
      wellnessProducts: 0,
      postCareSubscriptions: 0,
      conciergeServices: 0,
      total: 17529400,
    },
    cogs: 3299433,
    grossProfit: 14229967,
    grossMarginPercent: 0.81,
    operatingExpenses: {
      facilityCosts: 324480,
      personnel: 2233500,
      professionalServices: 189276,
      technology: 81120,
      marketing: 216324,
      gAndA: 216324,
      total: 3261024,
    },
    totalOpex: 3261024,
    ebitda: 10968943,
    ebitdaMarginPercent: 0.63,
    depreciation: 487143,
    ebit: 10481800,
    interestExpense: 0,
    ebt: 10481800,
    taxes: 3144540,
    netIncome: 7337260,
  },
  {
    year: 4,
    revenue: {
      programRevenue: 17529400,
      bioOptimizationPremium: 0,
      wellnessProducts: 0,
      postCareSubscriptions: 0,
      conciergeServices: 0,
      total: 17529400,
    },
    cogs: 3431410,
    grossProfit: 14097990,
    grossMarginPercent: 0.80,
    operatingExpenses: {
      facilityCosts: 337459,
      personnel: 2322840,
      professionalServices: 196847,
      technology: 84365,
      marketing: 224977,
      gAndA: 224977,
      total: 3391465,
    },
    totalOpex: 3391465,
    ebitda: 10706525,
    ebitdaMarginPercent: 0.61,
    depreciation: 487143,
    ebit: 10219382,
    interestExpense: 0,
    ebt: 10219382,
    taxes: 3065815,
    netIncome: 7153568,
  },
  {
    year: 5,
    revenue: {
      programRevenue: 17529400,
      bioOptimizationPremium: 0,
      wellnessProducts: 0,
      postCareSubscriptions: 0,
      conciergeServices: 0,
      total: 17529400,
    },
    cogs: 3568666,
    grossProfit: 13960734,
    grossMarginPercent: 0.80,
    operatingExpenses: {
      facilityCosts: 350958,
      personnel: 2415753,
      professionalServices: 204721,
      technology: 87739,
      marketing: 233976,
      gAndA: 233976,
      total: 3527124,
    },
    totalOpex: 3527124,
    ebitda: 10433610,
    ebitdaMarginPercent: 0.60,
    depreciation: 487143,
    ebit: 9946467,
    interestExpense: 0,
    ebt: 9946467,
    taxes: 2983940,
    netIncome: 6962527,
  },
]

// Unit economics from valuation report Section 11.3
// Weighted average across program mix: 45% 7-day, 30% 14-day, 15% 21-day, 10% 28-day
// Average stay: 13 days at $2,000/night = $26,600 per guest
export const UNIT_ECONOMICS: UnitEconomics = {
  revenuePerGuest: [
    { name: 'Weighted Average Program Fee', amount: 26600, percentOfRevenue: 100, notes: '13-day weighted avg stay at $2,000/night (7/14/21/28-day mix)' },
  ],
  totalGuestRevenue: 26600,
  directCostsPerGuest: [
    { name: 'Medical Staff & Oversight', amount: 1320, percentOfRevenue: 5, notes: 'Physicians, nurses, monitoring' },
    { name: 'Facilitators & Therapy', amount: 640, percentOfRevenue: 2, notes: 'Integration therapists, facilitators' },
    { name: 'Food & Hospitality', amount: 560, percentOfRevenue: 2, notes: 'Organic meals, chef, service' },
    { name: 'Bio-optimization Supplies', amount: 160, percentOfRevenue: 1, notes: 'IV therapy, supplements' },
    { name: 'Plant Medicine Materials', amount: 640, percentOfRevenue: 2, notes: 'Ibogaine, psilocybin, preparation' },
    { name: 'Guest Amenities', amount: 500, percentOfRevenue: 2, notes: 'Consumables, comfort items' },
    { name: 'Medical Evacuation Reserve', amount: 809, percentOfRevenue: 3, notes: 'Helipad + air evacuation protocol' },
  ],
  totalDirectCosts: 4629,
  grossProfitPerGuest: 21971,
  contributionMargin: 0.83,
  blendedCAC: 2613,
  ltv: 33929,
  ltvCacRatio: 13.0,
}

// Investment returns from valuation report — includes enterprise value at exit
// Total investment: $13,773,500 | Y5 EV (base): $87,924,380 | MOIC: 6.69x
export const INVESTMENT_RETURNS: InvestmentReturns = {
  totalCapitalRequired: 13773500,
  equityInvestment: 13773500,
  debtFinancing: 0,
  yearlyReturns: [
    {
      year: 1,
      totalInvestment: 13773500,
      annualNetIncome: 5146072,
      cumulativeNetIncome: 5146072,
      roiCumulative: 0.374,
      roiAnnualized: 0.374,
    },
    {
      year: 2,
      totalInvestment: 13773500,
      annualNetIncome: 6873384,
      cumulativeNetIncome: 12019456,
      roiCumulative: 0.873,
      roiAnnualized: 0.436,
    },
    {
      year: 3,
      totalInvestment: 13773500,
      annualNetIncome: 7337260,
      cumulativeNetIncome: 19356716,
      roiCumulative: 1.405,
      roiAnnualized: 0.468,
    },
    {
      year: 4,
      totalInvestment: 13773500,
      annualNetIncome: 7153568,
      cumulativeNetIncome: 26510284,
      roiCumulative: 1.924,
      roiAnnualized: 0.481,
    },
    {
      year: 5,
      totalInvestment: 13773500,
      annualNetIncome: 6962527,
      cumulativeNetIncome: 33472811,
      roiCumulative: 2.431,
      roiAnnualized: 0.486,
    },
  ],
  npv: {
    rate10: 11638848,
    rate12: 10357300,
    rate15: 8617799,
  },
  irr: { conservative: 0.6654, base: 0.7350, aggressive: 0.8009 },
  moic: { conservative: 4.65, base: 6.69, aggressive: 8.94 },
}

// Use of funds from valuation report Section 6
// Total: $13,773,500
export const USE_OF_FUNDS: UseOfFunds[] = [
  { category: 'Property Acquisition', amount: 6150000, percentage: 44.7, description: '$5.8M purchase + $350K closing/legal/diligence' },
  { category: 'Renovation & Conversion', amount: 4050000, percentage: 29.4, description: 'Medical suites, treatment rooms, kitchen, bio-optimization center' },
  { category: 'Medical Equipment', amount: 750000, percentage: 5.4, description: 'ICU/monitoring, diagnostic, IV systems, pharmacy' },
  { category: 'FF&E', amount: 600000, percentage: 4.4, description: 'Furniture, fixtures, equipment' },
  { category: 'Working Capital', amount: 1126000, percentage: 8.2, description: 'Operating runway' },
  { category: 'Contingency', amount: 847500, percentage: 6.2, description: 'Risk buffer (15%)' },
  { category: 'Pre-Opening', amount: 200000, percentage: 1.5, description: 'Licensing, training, soft launch' },
  { category: 'Technology', amount: 50000, percentage: 0.4, description: 'Systems, EMR, booking' },
]
