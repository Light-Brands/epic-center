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

// All financial data aligned with updated expansion model (Feb 2026)
// Casita phasing: 30→60 rooms over 5 years, funded from operating cash flow
// Base case = 60% Y1 → 75% Y2 → 80% Y3-5 occupancy, ramping capacity, $2,000/night ADR
// Conservative = ~50-70% occupancy ramp | Aggressive = ~70-85% occupancy ramp

// ─── Casita Phasing Data ───────────────────────────────────────────────
export const CASITA_PHASING = {
  years: [
    { year: 1, startRooms: 15, added: 15, endRooms: 30, effectiveAvgRooms: 23, occupancy: 0.60, guests: 387 },
    { year: 2, startRooms: 30, added: 10, endRooms: 40, effectiveAvgRooms: 35, occupancy: 0.75, guests: 737 },
    { year: 3, startRooms: 40, added: 8, endRooms: 48, effectiveAvgRooms: 44, occupancy: 0.80, guests: 988 },
    { year: 4, startRooms: 48, added: 6, endRooms: 54, effectiveAvgRooms: 51, occupancy: 0.80, guests: 1145 },
    { year: 5, startRooms: 54, added: 6, endRooms: 60, effectiveAvgRooms: 57, occupancy: 0.80, guests: 1280 },
  ],
  totalCapacity: 60,
  buildCostPerCasita: 225000, // ~$200-250K each
  totalExpansionCost: 6750000, // ~$6-7.5M total over Years 2-5
  fundedFrom: 'Operating cash flow (no additional equity raise)',
}

// ─── Villa Model Data ──────────────────────────────────────────────────
export const VILLA_MODEL = {
  totalVillas: 36,
  avgPrice: 2000000,
  priceRange: { min: 1000000, max: 3000000 },
  totalSalesRevenue: 72000000,
  managementFeeRate: 0.25, // 25% of rental revenue
  developmentFeeRate: 0.125, // 10-15% of sales
  fullOpsManagementFeeIncome: 1300000, // ~$1.3M/year at full operations
  tiers: [
    { name: 'Studio Villa', priceRange: '$1M - $1.5M', beds: 1, sqft: '1,200-1,500', count: 12 },
    { name: 'Garden Villa', priceRange: '$1.5M - $2.5M', beds: 2, sqft: '1,800-2,400', count: 16 },
    { name: 'Estate Villa', priceRange: '$2.5M - $3M', beds: 3, sqft: '2,800-3,500', count: 8 },
  ],
  phasing: [
    { year: 1, villasSold: 6, builtOperational: 4, salesRevenue: 12000000 },
    { year: 2, villasSold: 10, builtOperational: 12, salesRevenue: 20000000 },
    { year: 3, villasSold: 12, builtOperational: 24, salesRevenue: 24000000 },
    { year: 4, villasSold: 8, builtOperational: 36, salesRevenue: 16000000 },
    { year: 5, villasSold: 0, builtOperational: 36, salesRevenue: 0 },
  ],
  buyerFundedConstruction: true,
  revenueSplit: { owner: 75, management: 25 },
}

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
      totalRooms: 60,
      treatmentBeds: { conservative: 60, base: 60, aggressive: 60 },
      maxGuestsPerYear: 1280, // 57 effective rooms × 365 days / 13-day avg stay × 80% occ
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

// Dashboard metrics - key investor-facing numbers (updated for casita phasing model)
export const DASHBOARD_METRICS: DashboardMetrics = {
  propertyName: 'Riviera Maya Jungle Estate',
  location: 'Tulum, Q.R.',
  totalRooms: 60,
  treatmentBeds: 60,
  propertyScore: 88,
  recommendation: 'PROCEED',
  averageDailyRate: 2000,
  keyMetrics: {
    acquisitionPrice: 5800000,
    totalProjectCost: 14953500,
    costPerRoom: 249225, // $14,953,500 / 60 rooms at full build
    revenue: {
      year1: { conservative: 8240000, base: 10300000, aggressive: 11330000 },
      year3: { conservative: 21040000, base: 26300000, aggressive: 28930000 },
      year5: { conservative: 27200000, base: 34000000, aggressive: 37400000 },
      fiveYearTotal: { conservative: 96560000, base: 120700000, aggressive: 132770000 },
    },
    projectIRR: { conservative: 0.66, base: 0.78, aggressive: 0.87 },
    fiveYearMOIC: { conservative: 5.5, base: 7.8, aggressive: 10.0 },
  },
}

// Revenue projections - updated for casita phasing (30→60 rooms)
// Revenue per guest: $26,600 weighted average (7/14/21/28-day program mix)
// Y1: 23 eff. rooms × 60% occ = ~387 guests → ~$10.3M
// Y2: 35 eff. rooms × 75% occ = ~737 guests → ~$19.6M
// Y3: 44 eff. rooms × 80% occ = ~988 guests → ~$26.3M
// Y4: 51 eff. rooms × 80% occ = ~1,145 guests → ~$30.5M
// Y5: 57 eff. rooms × 80% occ = ~1,280 guests → ~$34.0M
export const REVENUE_PROJECTIONS: RevenueProjection[] = [
  {
    year: 1,
    programRevenue: { conservative: 8240000, base: 10300000, aggressive: 11330000 },
    bioOptimizationPremium: { conservative: 0, base: 0, aggressive: 0 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 0, base: 0, aggressive: 0 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 8240000, base: 10300000, aggressive: 11330000 },
  },
  {
    year: 2,
    programRevenue: { conservative: 15680000, base: 19600000, aggressive: 21560000 },
    bioOptimizationPremium: { conservative: 0, base: 0, aggressive: 0 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 0, base: 0, aggressive: 0 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 15680000, base: 19600000, aggressive: 21560000 },
  },
  {
    year: 3,
    programRevenue: { conservative: 21040000, base: 26300000, aggressive: 28930000 },
    bioOptimizationPremium: { conservative: 0, base: 0, aggressive: 0 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 0, base: 0, aggressive: 0 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 21040000, base: 26300000, aggressive: 28930000 },
  },
  {
    year: 4,
    programRevenue: { conservative: 24400000, base: 30500000, aggressive: 33550000 },
    bioOptimizationPremium: { conservative: 0, base: 0, aggressive: 0 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 0, base: 0, aggressive: 0 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 24400000, base: 30500000, aggressive: 33550000 },
  },
  {
    year: 5,
    programRevenue: { conservative: 27200000, base: 34000000, aggressive: 37400000 },
    bioOptimizationPremium: { conservative: 0, base: 0, aggressive: 0 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 0, base: 0, aggressive: 0 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 27200000, base: 34000000, aggressive: 37400000 },
  },
]

export const REVENUE_CHART_DATA: RevenueChartData[] = [
  { year: 'Year 1', conservative: 8240000, base: 10300000, aggressive: 11330000 },
  { year: 'Year 2', conservative: 15680000, base: 19600000, aggressive: 21560000 },
  { year: 'Year 3', conservative: 21040000, base: 26300000, aggressive: 28930000 },
  { year: 'Year 4', conservative: 24400000, base: 30500000, aggressive: 33550000 },
  { year: 'Year 5', conservative: 27200000, base: 34000000, aggressive: 37400000 },
]

// P&L from updated model - base case with casita phasing
// Costs scale with capacity but with operational leverage (~1.6x costs for 2x rooms)
// Includes D&A ($677,143/yr base, increasing with casita capex)
// 30% tax rate, cost escalation (~4%/yr)
export const PL_STATEMENTS: PLStatement[] = [
  {
    year: 1,
    revenue: {
      programRevenue: 10300000,
      bioOptimizationPremium: 0,
      wellnessProducts: 0,
      postCareSubscriptions: 0,
      conciergeServices: 0,
      total: 10300000,
    },
    cogs: 1792200, // 17.4% - lower volume, higher per-unit
    grossProfit: 8507800,
    grossMarginPercent: 0.83,
    operatingExpenses: {
      facilityCosts: 576000,
      personnel: 2064996,
      professionalServices: 174996,
      technology: 228000,
      marketing: 660004,
      gAndA: 502004,
      total: 4206000,
    },
    totalOpex: 4206000,
    ebitda: 4301800,
    ebitdaMarginPercent: 0.42,
    depreciation: 677143,
    ebit: 3624657,
    interestExpense: 0,
    ebt: 3624657,
    taxes: 1087397,
    netIncome: 2537260,
  },
  {
    year: 2,
    revenue: {
      programRevenue: 19600000,
      bioOptimizationPremium: 0,
      wellnessProducts: 0,
      postCareSubscriptions: 0,
      conciergeServices: 0,
      total: 19600000,
    },
    cogs: 3332000, // 17% COGS ratio
    grossProfit: 16268000,
    grossMarginPercent: 0.83,
    operatingExpenses: {
      facilityCosts: 718848, // scaled for ~35 rooms + 4% escalation
      personnel: 2790515,
      professionalServices: 209395,
      technology: 260832,
      marketing: 789825,
      gAndA: 596496,
      total: 5365911,
    },
    totalOpex: 5365911,
    ebitda: 10902089,
    ebitdaMarginPercent: 0.56,
    depreciation: 827143, // base + casita capex depreciation
    ebit: 10074946,
    interestExpense: 0,
    ebt: 10074946,
    taxes: 3022484,
    netIncome: 7052462,
  },
  {
    year: 3,
    revenue: {
      programRevenue: 26300000,
      bioOptimizationPremium: 0,
      wellnessProducts: 0,
      postCareSubscriptions: 0,
      conciergeServices: 0,
      total: 26300000,
    },
    cogs: 4468900, // 17% COGS ratio
    grossProfit: 21831100,
    grossMarginPercent: 0.83,
    operatingExpenses: {
      facilityCosts: 873389, // scaled for ~44 rooms + escalation
      personnel: 3388200,
      professionalServices: 240172,
      technology: 293669,
      marketing: 914534,
      gAndA: 681395,
      total: 6391359,
    },
    totalOpex: 6391359,
    ebitda: 15439741,
    ebitdaMarginPercent: 0.59,
    depreciation: 947143, // base + cumulative casita capex
    ebit: 14492598,
    interestExpense: 0,
    ebt: 14492598,
    taxes: 4347779,
    netIncome: 10144819,
  },
  {
    year: 4,
    revenue: {
      programRevenue: 30500000,
      bioOptimizationPremium: 0,
      wellnessProducts: 0,
      postCareSubscriptions: 0,
      conciergeServices: 0,
      total: 30500000,
    },
    cogs: 5185000, // 17% COGS ratio
    grossProfit: 25315000,
    grossMarginPercent: 0.83,
    operatingExpenses: {
      facilityCosts: 1005327, // scaled for ~51 rooms + escalation
      personnel: 3836388,
      professionalServices: 266099,
      technology: 322730,
      marketing: 1023116,
      gAndA: 756091,
      total: 7209751,
    },
    totalOpex: 7209751,
    ebitda: 18105249,
    ebitdaMarginPercent: 0.59,
    depreciation: 1037143,
    ebit: 17068106,
    interestExpense: 0,
    ebt: 17068106,
    taxes: 5120432,
    netIncome: 11947674,
  },
  {
    year: 5,
    revenue: {
      programRevenue: 34000000,
      bioOptimizationPremium: 0,
      wellnessProducts: 0,
      postCareSubscriptions: 0,
      conciergeServices: 0,
      total: 34000000,
    },
    cogs: 5780000, // 17% COGS ratio
    grossProfit: 28220000,
    grossMarginPercent: 0.83,
    operatingExpenses: {
      facilityCosts: 1115542, // scaled for ~57 rooms + escalation
      personnel: 4221683,
      professionalServices: 289543,
      technology: 349239,
      marketing: 1120041,
      gAndA: 824735,
      total: 7920783,
    },
    totalOpex: 7920783,
    ebitda: 20299217,
    ebitdaMarginPercent: 0.60,
    depreciation: 1127143,
    ebit: 19172074,
    interestExpense: 0,
    ebt: 19172074,
    taxes: 5751622,
    netIncome: 13420452,
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

// Investment returns - updated for casita phasing model
// Total investment: $14,953,500 | Y5 EV (base): $81.2M | MOIC: 7.8x
// 5-year cumulative net income: ~$45.1M
export const INVESTMENT_RETURNS: InvestmentReturns = {
  totalCapitalRequired: 14953500,
  equityInvestment: 14953500,
  debtFinancing: 0,
  yearlyReturns: [
    {
      year: 1,
      totalInvestment: 14953500,
      annualNetIncome: 2537260,
      cumulativeNetIncome: 2537260,
      roiCumulative: 0.170,
      roiAnnualized: 0.170,
    },
    {
      year: 2,
      totalInvestment: 14953500,
      annualNetIncome: 7052462,
      cumulativeNetIncome: 9589722,
      roiCumulative: 0.641,
      roiAnnualized: 0.321,
    },
    {
      year: 3,
      totalInvestment: 14953500,
      annualNetIncome: 10144819,
      cumulativeNetIncome: 19734541,
      roiCumulative: 1.320,
      roiAnnualized: 0.440,
    },
    {
      year: 4,
      totalInvestment: 14953500,
      annualNetIncome: 11947674,
      cumulativeNetIncome: 31682215,
      roiCumulative: 2.119,
      roiAnnualized: 0.530,
    },
    {
      year: 5,
      totalInvestment: 14953500,
      annualNetIncome: 13420452,
      cumulativeNetIncome: 45102667,
      roiCumulative: 3.016,
      roiAnnualized: 0.603,
    },
  ],
  npv: {
    rate10: 18200000,
    rate12: 16100000,
    rate15: 13400000,
  },
  irr: { conservative: 0.66, base: 0.78, aggressive: 0.87 },
  moic: { conservative: 5.5, base: 7.8, aggressive: 10.0 },
}

// Use of funds from valuation report Section 6
// Total: $14,953,500
export const USE_OF_FUNDS: UseOfFunds[] = [
  { category: 'Property Acquisition', amount: 6150000, percentage: 41.1, description: '$5.8M purchase + $350K closing/legal/diligence' },
  { category: 'Renovation & Conversion', amount: 4050000, percentage: 27.1, description: 'Medical suites, treatment rooms, kitchen, bio-optimization center' },
  { category: 'Technology', amount: 1230000, percentage: 8.2, description: '$1M AI platform + $230K physical infrastructure' },
  { category: 'Working Capital', amount: 1126000, percentage: 7.5, description: 'Operating runway' },
  { category: 'Contingency', amount: 847500, percentage: 5.7, description: 'Risk buffer (15%)' },
  { category: 'Medical Equipment', amount: 750000, percentage: 5.0, description: 'ICU/monitoring, diagnostic, IV systems, pharmacy' },
  { category: 'FF&E', amount: 600000, percentage: 4.0, description: 'Furniture, fixtures, equipment' },
  { category: 'Pre-Opening', amount: 200000, percentage: 1.3, description: 'Licensing, training, soft launch' },
]
