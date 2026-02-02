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

// All financial data sourced from Riviera Maya Jungle Estate spreadsheet
// Source: Investment, Revenue, Proforma, CapEx, OpExStaff, OpExVariable tabs
// Base case = Proforma (75% steady-state occupancy, 30 rooms, $2,000/night ADR)
// Conservative = 65% steady-state | Aggressive = 85% steady-state

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
      treatmentBeds: { conservative: 22, base: 30, aggressive: 30 },
      maxGuestsPerYear: 1564, // Revenue tab: 30 rooms, 80% occ, 365 days, 7-day avg stay
    },
    acquisition: {
      askingPrice: 5800000, // RealEstate tab total
      negotiatedPrice: 5800000,
      closingCosts: 350000,
      totalAcquisitionCost: 6150000,
    },
    imageUrl: '/images/properties/riviera-maya-jungle-estate.jpg',
  },
]

// Dashboard metrics — key investor-facing numbers
export const DASHBOARD_METRICS: DashboardMetrics = {
  propertyName: 'Riviera Maya Jungle Estate',
  location: 'Tulum, Q.R.',
  totalRooms: 30,
  treatmentBeds: 30,
  propertyScore: 88,
  recommendation: 'PROCEED',
  averageDailyRate: 2000, // Revenue tab: ADR $2,000
  keyMetrics: {
    acquisitionPrice: 5800000, // RealEstate tab
    totalProjectCost: 10376000, // Investment tab: Property $5.8M + TI $3.076M + GC $1.5M
    costPerRoom: 345867, // $10,376,000 / 30 rooms
    revenue: {
      // Proforma-derived: Y1 ramp (20-75%), Y2 (100%+75%), Y3+ steady 75%
      // Conservative ~65% ss, Aggressive ~85% ss
      year1: { conservative: 10800000, base: 13050000, aggressive: 15120000 },
      year3: { conservative: 14040000, base: 16200000, aggressive: 18360000 },
      year5: { conservative: 14040000, base: 16200000, aggressive: 18360000 },
      fiveYearTotal: { conservative: 66960000, base: 78300000, aggressive: 88560000 },
    },
    projectIRR: { conservative: 0.25, base: 0.35, aggressive: 0.45 },
    fiveYearMOIC: { conservative: 3.0, base: 4.1, aggressive: 5.0 },
  },
}

// Revenue projections from Proforma tab (30 rooms, $2K/night, 30-day months)
// Y1: occupancy ramps 20%→75% | Y2: 100% month 13 then 75% | Y3+: 75% steady
export const REVENUE_PROJECTIONS: RevenueProjection[] = [
  {
    year: 1,
    programRevenue: { conservative: 10800000, base: 13050000, aggressive: 15120000 },
    bioOptimizationPremium: { conservative: 0, base: 0, aggressive: 0 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 0, base: 0, aggressive: 0 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 10800000, base: 13050000, aggressive: 15120000 },
  },
  {
    year: 2,
    programRevenue: { conservative: 14040000, base: 16650000, aggressive: 18360000 },
    bioOptimizationPremium: { conservative: 0, base: 0, aggressive: 0 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 0, base: 0, aggressive: 0 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 14040000, base: 16650000, aggressive: 18360000 },
  },
  {
    year: 3,
    programRevenue: { conservative: 14040000, base: 16200000, aggressive: 18360000 },
    bioOptimizationPremium: { conservative: 0, base: 0, aggressive: 0 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 0, base: 0, aggressive: 0 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 14040000, base: 16200000, aggressive: 18360000 },
  },
  {
    year: 4,
    programRevenue: { conservative: 14040000, base: 16200000, aggressive: 18360000 },
    bioOptimizationPremium: { conservative: 0, base: 0, aggressive: 0 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 0, base: 0, aggressive: 0 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 14040000, base: 16200000, aggressive: 18360000 },
  },
  {
    year: 5,
    programRevenue: { conservative: 14040000, base: 16200000, aggressive: 18360000 },
    bioOptimizationPremium: { conservative: 0, base: 0, aggressive: 0 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 0, base: 0, aggressive: 0 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 14040000, base: 16200000, aggressive: 18360000 },
  },
]

export const REVENUE_CHART_DATA: RevenueChartData[] = [
  { year: 'Year 1', conservative: 10800000, base: 13050000, aggressive: 15120000 },
  { year: 'Year 2', conservative: 14040000, base: 16650000, aggressive: 18360000 },
  { year: 'Year 3', conservative: 14040000, base: 16200000, aggressive: 18360000 },
  { year: 'Year 4', conservative: 14040000, base: 16200000, aggressive: 18360000 },
  { year: 'Year 5', conservative: 14040000, base: 16200000, aggressive: 18360000 },
]

// P&L from Proforma — base case only (scenario toggle affects revenue pages)
// Annual costs: $7,241,000 flat (Staff $2,065K + Variable $3,076K + Lease $2,100K)
// COGS = food ($876K) + medical supplies ($250K) + plant medicine ($1M) = $2,126K
// OpEx = staff ($2,065K) + facility ($2,400K incl lease) + professional ($325K) + tech ($75K) + marketing ($200K) + G&A ($50K) = $5,115K
// Source model has no depreciation or tax lines — net profit = operating profit
export const PL_STATEMENTS: PLStatement[] = [
  {
    year: 1,
    revenue: {
      programRevenue: 13050000,
      bioOptimizationPremium: 0,
      wellnessProducts: 0,
      postCareSubscriptions: 0,
      conciergeServices: 0,
      total: 13050000, // Proforma months 1-12 sum
    },
    cogs: 2126000, // Food $876K + Medical Supplies $250K + Plant Medicine $1M
    grossProfit: 10924000,
    grossMarginPercent: 0.84,
    operatingExpenses: {
      facilityCosts: 2400000, // Lease $2,100K + Utilities $250K + Generator $50K
      personnel: 2065000, // OpExStaff tab total
      professionalServices: 325000, // Insurance $150K + Legal $100K + Accounting $75K
      technology: 75000, // IT/Software
      marketing: 200000, // Marketing
      gAndA: 50000, // Cleaning supplies
      total: 5115000,
    },
    totalOpex: 5115000,
    ebitda: 5809000, // = Investment tab Net Profit Yr 1
    ebitdaMarginPercent: 0.445,
    depreciation: 0,
    ebit: 5809000,
    interestExpense: 0,
    ebt: 5809000,
    taxes: 0,
    netIncome: 5809000, // Investment tab: $5,809,000
  },
  {
    year: 2,
    revenue: {
      programRevenue: 16650000,
      bioOptimizationPremium: 0,
      wellnessProducts: 0,
      postCareSubscriptions: 0,
      conciergeServices: 0,
      total: 16650000, // Proforma months 13-24 sum
    },
    cogs: 2126000,
    grossProfit: 14524000,
    grossMarginPercent: 0.87,
    operatingExpenses: {
      facilityCosts: 2400000,
      personnel: 2065000,
      professionalServices: 325000,
      technology: 75000,
      marketing: 200000,
      gAndA: 50000,
      total: 5115000,
    },
    totalOpex: 5115000,
    ebitda: 9409000, // = Investment tab Net Profit Yr 2
    ebitdaMarginPercent: 0.565,
    depreciation: 0,
    ebit: 9409000,
    interestExpense: 0,
    ebt: 9409000,
    taxes: 0,
    netIncome: 9409000, // Investment tab: $9,409,000
  },
  {
    year: 3,
    revenue: {
      programRevenue: 16200000,
      bioOptimizationPremium: 0,
      wellnessProducts: 0,
      postCareSubscriptions: 0,
      conciergeServices: 0,
      total: 16200000, // Proforma months 25-36: $1,350K × 12
    },
    cogs: 2126000,
    grossProfit: 14074000,
    grossMarginPercent: 0.87,
    operatingExpenses: {
      facilityCosts: 2400000,
      personnel: 2065000,
      professionalServices: 325000,
      technology: 75000,
      marketing: 200000,
      gAndA: 50000,
      total: 5115000,
    },
    totalOpex: 5115000,
    ebitda: 8959000, // = Investment tab Net Profit Yr 3
    ebitdaMarginPercent: 0.553,
    depreciation: 0,
    ebit: 8959000,
    interestExpense: 0,
    ebt: 8959000,
    taxes: 0,
    netIncome: 8959000, // Investment tab: $8,959,000
  },
  {
    year: 4,
    revenue: {
      programRevenue: 16200000,
      bioOptimizationPremium: 0,
      wellnessProducts: 0,
      postCareSubscriptions: 0,
      conciergeServices: 0,
      total: 16200000,
    },
    cogs: 2126000,
    grossProfit: 14074000,
    grossMarginPercent: 0.87,
    operatingExpenses: {
      facilityCosts: 2400000,
      personnel: 2065000,
      professionalServices: 325000,
      technology: 75000,
      marketing: 200000,
      gAndA: 50000,
      total: 5115000,
    },
    totalOpex: 5115000,
    ebitda: 8959000,
    ebitdaMarginPercent: 0.553,
    depreciation: 0,
    ebit: 8959000,
    interestExpense: 0,
    ebt: 8959000,
    taxes: 0,
    netIncome: 8959000, // Investment tab: $8,959,000
  },
  {
    year: 5,
    revenue: {
      programRevenue: 16200000,
      bioOptimizationPremium: 0,
      wellnessProducts: 0,
      postCareSubscriptions: 0,
      conciergeServices: 0,
      total: 16200000,
    },
    cogs: 2126000,
    grossProfit: 14074000,
    grossMarginPercent: 0.87,
    operatingExpenses: {
      facilityCosts: 2400000,
      personnel: 2065000,
      professionalServices: 325000,
      technology: 75000,
      marketing: 200000,
      gAndA: 50000,
      total: 5115000,
    },
    totalOpex: 5115000,
    ebitda: 8959000,
    ebitdaMarginPercent: 0.553,
    depreciation: 0,
    ebit: 8959000,
    interestExpense: 0,
    ebt: 8959000,
    taxes: 0,
    netIncome: 8959000, // Investment tab: $8,959,000
  },
]

// Unit economics at 75% occupancy (Proforma steady-state)
// 1,157 guests/year = $16,200,000 / ($2,000 × 7 days)
// Costs allocated per guest from OpExStaff + OpExVariable (excl lease)
export const UNIT_ECONOMICS: UnitEconomics = {
  revenuePerGuest: [
    { name: 'All-Inclusive Program Fee', amount: 14000, percentOfRevenue: 100, notes: 'Average 7-day stay at $2,000/night' },
  ],
  totalGuestRevenue: 14000,
  directCostsPerGuest: [
    { name: 'Medical Staff', amount: 960, percentOfRevenue: 7, notes: 'Head physician, 15 nurses, 2 physiologists' },
    { name: 'Plant Medicine & Supplements', amount: 864, percentOfRevenue: 6, notes: 'Ibogaine, psilocybin, supplements ($1M/yr)' },
    { name: 'Food & Hospitality', amount: 757, percentOfRevenue: 5, notes: 'Organic meals, chef, wait staff ($876K/yr)' },
    { name: 'Support Staff', amount: 825, percentOfRevenue: 6, notes: 'Massage, cleaning, admin, wellness ($955K/yr)' },
    { name: 'Medical Supplies', amount: 216, percentOfRevenue: 2, notes: 'IVs, disposables, meds ($250K/yr)' },
    { name: 'Facility & Overhead', amount: 821, percentOfRevenue: 6, notes: 'Utilities, insurance, legal, IT ($950K/yr)' },
  ],
  totalDirectCosts: 4443, // $5,141K/yr (all costs excl lease) / 1,157 guests
  grossProfitPerGuest: 9557,
  contributionMargin: 0.68,
  blendedCAC: 173, // $200K marketing / 1,157 guests
  ltv: 14000,
  ltvCacRatio: 80.9,
}

// Investment returns from Investment tab
// Total investment: $10,376,000 (Property $5.8M + TI/CapEx $3.076M + GC $1.5M)
// Net profits: Y1 $5,809K, Y2 $9,409K, Y3-5 $8,959K each = $42,095K total
export const INVESTMENT_RETURNS: InvestmentReturns = {
  totalCapitalRequired: 10376000,
  equityInvestment: 10376000,
  debtFinancing: 0,
  yearlyReturns: [
    {
      year: 1,
      totalInvestment: 10376000,
      annualNetIncome: 5809000,
      cumulativeNetIncome: 5809000,
      roiCumulative: 0.56, // $5,809K / $10,376K
      roiAnnualized: 0.56,
    },
    {
      year: 2,
      totalInvestment: 10376000,
      annualNetIncome: 9409000,
      cumulativeNetIncome: 15218000,
      roiCumulative: 1.47, // $15,218K / $10,376K
      roiAnnualized: 0.73,
    },
    {
      year: 3,
      totalInvestment: 10376000,
      annualNetIncome: 8959000,
      cumulativeNetIncome: 24177000,
      roiCumulative: 2.33, // $24,177K / $10,376K
      roiAnnualized: 0.78,
    },
    {
      year: 4,
      totalInvestment: 10376000,
      annualNetIncome: 8959000,
      cumulativeNetIncome: 33136000,
      roiCumulative: 3.19,
      roiAnnualized: 0.80,
    },
    {
      year: 5,
      totalInvestment: 10376000,
      annualNetIncome: 8959000,
      cumulativeNetIncome: 42095000, // Investment tab: $42,095,000
      roiCumulative: 4.06,
      roiAnnualized: 0.81,
    },
  ],
  npv: {
    rate10: 21100000,
    rate12: 19500000,
    rate15: 17300000,
  },
  irr: { conservative: 0.25, base: 0.35, aggressive: 0.45 }, // Base = Investment tab Gross ROI 35%
  moic: { conservative: 3.0, base: 4.1, aggressive: 5.0 },
}

// Use of funds: Investment tab breakdown
// Property $5.8M + TI/CapEx $3.076M + GC $1.5M = $10.376M
// TI/CapEx $3.076M = CapEx tab $1.95M + working capital $1.126M
export const USE_OF_FUNDS: UseOfFunds[] = [
  { category: 'Real Estate Acquisition', amount: 5800000, percentage: 55.9, description: 'Land ($1.5M) + building ($3.25M) + closing, IT, landscaping, kitchen' },
  { category: 'Capital Expenditures', amount: 1950000, percentage: 18.8, description: 'Generator, rooms, medical equipment, spa, vehicles, IT' },
  { category: 'General Contractor', amount: 1500000, percentage: 14.5, description: 'Project management & construction oversight' },
  { category: 'Working Capital', amount: 1126000, percentage: 10.8, description: 'Operating reserve for launch period' },
]
