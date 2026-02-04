import type {
  Property,
  DashboardMetrics,
  RevenueProjection,
  PLStatement,
  UnitEconomics,
  InvestmentReturns,
  UseOfFunds,
  RevenueChartData,
  BusinessUnit,
  EnterpriseValuation,
  VillaProgramFinancials,
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
  totalVillas: 48,
  avgPrice: 2000000,
  priceRange: { min: 1000000, max: 3000000 },
  totalSalesRevenue: 96000000,
  managementFeeRate: 0.25, // 25% of rental revenue
  developmentFeeRate: 0.125, // 10-15% of sales
  fullOpsManagementFeeIncome: 1700000, // ~$1.7M/year at full operations
  tiers: [
    { name: 'Studio Villa', priceRange: '$1M - $1.5M', beds: 1, sqft: '1,200-1,500', count: 16 },
    { name: 'Garden Villa', priceRange: '$1.5M - $2.5M', beds: 2, sqft: '1,800-2,400', count: 22 },
    { name: 'Estate Villa', priceRange: '$2.5M - $3M', beds: 3, sqft: '2,800-3,500', count: 10 },
  ],
  phasing: [
    { year: 1, villasSold: 8, builtOperational: 6, salesRevenue: 16000000 },
    { year: 2, villasSold: 13, builtOperational: 16, salesRevenue: 26000000 },
    { year: 3, villasSold: 16, builtOperational: 32, salesRevenue: 32000000 },
    { year: 4, villasSold: 11, builtOperational: 48, salesRevenue: 22000000 },
    { year: 5, villasSold: 0, builtOperational: 48, salesRevenue: 0 },
  ],
  buyerFundedConstruction: true,
  revenueSplit: { owner: 75, management: 25 },
}

export const PROPERTIES: Property[] = [
  {
    id: 'rancho-paraiso-oasis',
    name: 'Rancho Paraiso Oasis',
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
      askingPrice: 11900000,
      negotiatedPrice: 11900000,
      closingCosts: 0,
      totalAcquisitionCost: 11900000,
    },
    imageUrl: '/images/properties/hotel-alea-tulum.jpg',
  },
]

// Dashboard metrics - key investor-facing numbers (updated for casita phasing model)
export const DASHBOARD_METRICS: DashboardMetrics = {
  propertyName: 'Rancho Paraiso Oasis',
  location: 'Tulum, Q.R.',
  totalRooms: 60,
  treatmentBeds: 60,
  propertyScore: 88,
  recommendation: 'PROCEED',
  averageDailyRate: 2000,
  keyMetrics: {
    acquisitionPrice: 11900000,
    totalProjectCost: 16823500,
    costPerRoom: 280392, // $16,823,500 / 60 rooms at full build
    revenue: {
      year1: { conservative: 8553000, base: 10748000, aggressive: 11867000 },
      year3: { conservative: 21839000, base: 27426000, aggressive: 30281000 },
      year5: { conservative: 28237000, base: 35461000, aggressive: 39153000 },
      fiveYearTotal: { conservative: 100232000, base: 125880000, aggressive: 138986000 },
    },
    projectIRR: { conservative: 0.66, base: 0.78, aggressive: 0.87 },
    fiveYearMOIC: { conservative: 5.3, base: 7.5, aggressive: 9.6 },
  },
}

// Revenue projections - updated for casita phasing (30→60 rooms)
// Revenue per guest: $26,600 weighted average (7/14/21/28-day program mix)
// Y1: 23 eff. rooms × 60% occ = ~387 guests → ~$10.3M
// Y2: 35 eff. rooms × 75% occ = ~737 guests → ~$19.6M
// Y3: 44 eff. rooms × 80% occ = ~988 guests → ~$26.3M
// Y4: 51 eff. rooms × 80% occ = ~1,145 guests → ~$30.5M
// Y5: 57 eff. rooms × 80% occ = ~1,280 guests → ~$34.0M
// Bio-optimization premium: ~30% upsell rate at ~$2,600 average add-on per guest
// Post-care subscriptions: ~36% uptake at ~$1,000/year
// wellnessProducts and conciergeServices kept at $0 (conservative)
export const REVENUE_PROJECTIONS: RevenueProjection[] = [
  {
    year: 1,
    programRevenue: { conservative: 8240000, base: 10300000, aggressive: 11330000 },
    bioOptimizationPremium: { conservative: 216000, base: 309000, aggressive: 370000 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 97000, base: 139000, aggressive: 167000 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 8553000, base: 10748000, aggressive: 11867000 },
  },
  {
    year: 2,
    programRevenue: { conservative: 15680000, base: 19600000, aggressive: 21560000 },
    bioOptimizationPremium: { conservative: 411000, base: 575000, aggressive: 690000 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 185000, base: 265000, aggressive: 318000 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 16276000, base: 20440000, aggressive: 22568000 },
  },
  {
    year: 3,
    programRevenue: { conservative: 21040000, base: 26300000, aggressive: 28930000 },
    bioOptimizationPremium: { conservative: 551000, base: 770000, aggressive: 924000 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 248000, base: 356000, aggressive: 427000 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 21839000, base: 27426000, aggressive: 30281000 },
  },
  {
    year: 4,
    programRevenue: { conservative: 24400000, base: 30500000, aggressive: 33550000 },
    bioOptimizationPremium: { conservative: 639000, base: 893000, aggressive: 1072000 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 288000, base: 412000, aggressive: 495000 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 25327000, base: 31805000, aggressive: 35117000 },
  },
  {
    year: 5,
    programRevenue: { conservative: 27200000, base: 34000000, aggressive: 37400000 },
    bioOptimizationPremium: { conservative: 715000, base: 1000000, aggressive: 1200000 },
    wellnessProducts: { conservative: 0, base: 0, aggressive: 0 },
    postCareSubscriptions: { conservative: 322000, base: 461000, aggressive: 553000 },
    conciergeServices: { conservative: 0, base: 0, aggressive: 0 },
    totalRevenue: { conservative: 28237000, base: 35461000, aggressive: 39153000 },
  },
]

export const REVENUE_CHART_DATA: RevenueChartData[] = [
  { year: 'Year 1', conservative: 8553000, base: 10748000, aggressive: 11867000 },
  { year: 'Year 2', conservative: 16276000, base: 20440000, aggressive: 22568000 },
  { year: 'Year 3', conservative: 21839000, base: 27426000, aggressive: 30281000 },
  { year: 'Year 4', conservative: 25327000, base: 31805000, aggressive: 35117000 },
  { year: 'Year 5', conservative: 28237000, base: 35461000, aggressive: 39153000 },
]

// P&L from updated model - base case with casita phasing
// Healing center P&L includes bio-opt premium + post-care subscriptions
// Costs scale with capacity but with operational leverage (~1.6x costs for 2x rooms)
// Includes D&A ($677,143/yr base, increasing with casita capex)
// 30% tax rate, cost escalation (~4%/yr)
export const PL_STATEMENTS: PLStatement[] = [
  {
    year: 1,
    revenue: {
      programRevenue: 10300000,
      bioOptimizationPremium: 309000,
      wellnessProducts: 0,
      postCareSubscriptions: 139000,
      conciergeServices: 0,
      total: 10748000,
    },
    cogs: 1870000, // 17.4% of total
    grossProfit: 8878000,
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
    ebitda: 4672000,
    ebitdaMarginPercent: 0.43,
    depreciation: 677143,
    ebit: 3994857,
    interestExpense: 0,
    ebt: 3994857,
    taxes: 1198457,
    netIncome: 2796400,
  },
  {
    year: 2,
    revenue: {
      programRevenue: 19600000,
      bioOptimizationPremium: 575000,
      wellnessProducts: 0,
      postCareSubscriptions: 265000,
      conciergeServices: 0,
      total: 20440000,
    },
    cogs: 3475000, // 17% COGS ratio
    grossProfit: 16965000,
    grossMarginPercent: 0.83,
    operatingExpenses: {
      facilityCosts: 718848,
      personnel: 2790515,
      professionalServices: 209395,
      technology: 260832,
      marketing: 789825,
      gAndA: 596496,
      total: 5365911,
    },
    totalOpex: 5365911,
    ebitda: 11599089,
    ebitdaMarginPercent: 0.57,
    depreciation: 827143,
    ebit: 10771946,
    interestExpense: 0,
    ebt: 10771946,
    taxes: 3231584,
    netIncome: 7540362,
  },
  {
    year: 3,
    revenue: {
      programRevenue: 26300000,
      bioOptimizationPremium: 770000,
      wellnessProducts: 0,
      postCareSubscriptions: 356000,
      conciergeServices: 0,
      total: 27426000,
    },
    cogs: 4662000, // 17% COGS ratio
    grossProfit: 22764000,
    grossMarginPercent: 0.83,
    operatingExpenses: {
      facilityCosts: 873389,
      personnel: 3388200,
      professionalServices: 240172,
      technology: 293669,
      marketing: 914534,
      gAndA: 681395,
      total: 6391359,
    },
    totalOpex: 6391359,
    ebitda: 16372641,
    ebitdaMarginPercent: 0.60,
    depreciation: 947143,
    ebit: 15425498,
    interestExpense: 0,
    ebt: 15425498,
    taxes: 4627649,
    netIncome: 10797849,
  },
  {
    year: 4,
    revenue: {
      programRevenue: 30500000,
      bioOptimizationPremium: 893000,
      wellnessProducts: 0,
      postCareSubscriptions: 412000,
      conciergeServices: 0,
      total: 31805000,
    },
    cogs: 5407000, // 17% COGS ratio
    grossProfit: 26398000,
    grossMarginPercent: 0.83,
    operatingExpenses: {
      facilityCosts: 1005327,
      personnel: 3836388,
      professionalServices: 266099,
      technology: 322730,
      marketing: 1023116,
      gAndA: 756091,
      total: 7209751,
    },
    totalOpex: 7209751,
    ebitda: 19188249,
    ebitdaMarginPercent: 0.60,
    depreciation: 1037143,
    ebit: 18151106,
    interestExpense: 0,
    ebt: 18151106,
    taxes: 5445332,
    netIncome: 12705774,
  },
  {
    year: 5,
    revenue: {
      programRevenue: 34000000,
      bioOptimizationPremium: 1000000,
      wellnessProducts: 0,
      postCareSubscriptions: 461000,
      conciergeServices: 0,
      total: 35461000,
    },
    cogs: 6028000, // 17% COGS ratio
    grossProfit: 29433000,
    grossMarginPercent: 0.83,
    operatingExpenses: {
      facilityCosts: 1115542,
      personnel: 4221683,
      professionalServices: 289543,
      technology: 349239,
      marketing: 1120041,
      gAndA: 824735,
      total: 7920783,
    },
    totalOpex: 7920783,
    ebitda: 21512217,
    ebitdaMarginPercent: 0.61,
    depreciation: 1127143,
    ebit: 20385074,
    interestExpense: 0,
    ebt: 20385074,
    taxes: 6115522,
    netIncome: 14269552,
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

// Investment returns - updated for enterprise valuation (all 4 business units)
// Total investment: $16,823,500 | Y5 EV (base): ~$147M | MOIC: 7.5x
// 5-year cumulative net income: ~$48.3M (healing center P&L)
export const INVESTMENT_RETURNS: InvestmentReturns = {
  totalCapitalRequired: 16823500,
  equityInvestment: 16823500,
  debtFinancing: 0,
  yearlyReturns: [
    {
      year: 1,
      totalInvestment: 16823500,
      annualNetIncome: 2796400,
      cumulativeNetIncome: 2796400,
      roiCumulative: 0.166,
      roiAnnualized: 0.166,
    },
    {
      year: 2,
      totalInvestment: 16823500,
      annualNetIncome: 7540362,
      cumulativeNetIncome: 10336762,
      roiCumulative: 0.614,
      roiAnnualized: 0.307,
    },
    {
      year: 3,
      totalInvestment: 16823500,
      annualNetIncome: 10797849,
      cumulativeNetIncome: 21134611,
      roiCumulative: 1.256,
      roiAnnualized: 0.419,
    },
    {
      year: 4,
      totalInvestment: 16823500,
      annualNetIncome: 12705774,
      cumulativeNetIncome: 33840385,
      roiCumulative: 2.012,
      roiAnnualized: 0.503,
    },
    {
      year: 5,
      totalInvestment: 16823500,
      annualNetIncome: 14269552,
      cumulativeNetIncome: 48109937,
      roiCumulative: 2.861,
      roiAnnualized: 0.572,
    },
  ],
  npv: {
    rate10: 19500000,
    rate12: 17200000,
    rate15: 14300000,
  },
  irr: { conservative: 0.66, base: 0.78, aggressive: 0.87 },
  moic: { conservative: 5.3, base: 7.5, aggressive: 9.6 },
}

// Use of funds from valuation report Section 6
// Total: $16,823,500
export const USE_OF_FUNDS: UseOfFunds[] = [
  { category: 'Property Acquisition', amount: 11900000, percentage: 70.7, description: '$11.9M acquisition price (all-in)' },
  { category: 'Working Capital', amount: 1126000, percentage: 6.7, description: 'Operating runway' },
  { category: 'Renovation & Conversion', amount: 1000000, percentage: 5.9, description: 'Renovations to make property operational' },
  { category: 'Medical + Biohacking', amount: 1000000, percentage: 5.9, description: 'ICU/monitoring, diagnostic, IV systems, biohacking equipment' },
  { category: 'Contingency', amount: 847500, percentage: 5.0, description: 'Risk buffer' },
  { category: 'Technology', amount: 750000, percentage: 4.5, description: 'Tech development' },
  { category: 'Pre-Opening', amount: 200000, percentage: 1.2, description: 'Licensing, training, soft launch' },
]

// ─── Villa Program Financials ────────────────────────────────────────────
// Centralized from villa page local data
// Dev fee: 12.5% of sales | Mgmt fee: 25% of rental revenue
// Rental revenue assumes ~70% occupancy, $300/night avg across villa types
export const VILLA_PROGRAM_FINANCIALS: VillaProgramFinancials = {
  yearly: [
    { year: 1, villasSold: 8, builtOperational: 6, salesRevenue: 16000000, developmentFee: 2000000, cumulativeDevFees: 2000000, mgmtFeeIncome: 164000, rentalRevenue: 657000 },
    { year: 2, villasSold: 13, builtOperational: 16, salesRevenue: 26000000, developmentFee: 3250000, cumulativeDevFees: 5250000, mgmtFeeIncome: 438000, rentalRevenue: 1752000 },
    { year: 3, villasSold: 16, builtOperational: 32, salesRevenue: 32000000, developmentFee: 4000000, cumulativeDevFees: 9250000, mgmtFeeIncome: 876000, rentalRevenue: 3504000 },
    { year: 4, villasSold: 11, builtOperational: 48, salesRevenue: 22000000, developmentFee: 2750000, cumulativeDevFees: 12000000, mgmtFeeIncome: 1314000, rentalRevenue: 5256000 },
    { year: 5, villasSold: 0, builtOperational: 48, salesRevenue: 0, developmentFee: 0, cumulativeDevFees: 12000000, mgmtFeeIncome: 1700000, rentalRevenue: 6800000 },
  ],
  cumulativeDevFees: 12000000,
  totalVillaSales: 96000000,
  fullOpsMgmtFeeIncome: 1700000,
}

// ─── Business Units ──────────────────────────────────────────────────────
// 4 operating units with standalone valuations
export const BUSINESS_UNITS: BusinessUnit[] = [
  {
    id: 'healing-center',
    name: 'Healing Center',
    description: 'Clinical operations: ibogaine, psilocybin, 5-MeO-DMT, bio-optimization treatment programs',
    y5Revenue: { conservative: 28237000, base: 35461000, aggressive: 39153000 },
    y5EBITDA: { conservative: 16942000, base: 21512000, aggressive: 23912000 },
    y5Margin: 0.61,
    multiple: 5.5,
    multipleLabel: 'Behavioral health operators',
    standaloneValue: { conservative: 93200000, base: 117000000, aggressive: 131500000 },
    yearlyRevenue: [
      { conservative: 8553000, base: 10748000, aggressive: 11867000 },
      { conservative: 16276000, base: 20440000, aggressive: 22568000 },
      { conservative: 21839000, base: 27426000, aggressive: 30281000 },
      { conservative: 25327000, base: 31805000, aggressive: 35117000 },
      { conservative: 28237000, base: 35461000, aggressive: 39153000 },
    ],
    yearlyEBITDA: [
      { conservative: 3580000, base: 4672000, aggressive: 5260000 },
      { conservative: 8920000, base: 11599000, aggressive: 12970000 },
      { conservative: 12590000, base: 16373000, aggressive: 18430000 },
      { conservative: 14760000, base: 19188000, aggressive: 21500000 },
      { conservative: 16942000, base: 21512000, aggressive: 23912000 },
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate Development',
    description: '48-villa condo-hotel with buyer-funded construction and development fees',
    y5Revenue: { conservative: 0, base: 0, aggressive: 0 }, // Y5 has no sales (all sold by Y4)
    y5EBITDA: { conservative: 0, base: 0, aggressive: 0 },
    y5Margin: 0,
    multiple: 1.0, // Valued on cumulative profit
    multipleLabel: 'Cumulative dev fees + asset base',
    standaloneValue: { conservative: 9600000, base: 12000000, aggressive: 14400000 },
    yearlyRevenue: [
      { conservative: 1600000, base: 2000000, aggressive: 2400000 },
      { conservative: 2600000, base: 3250000, aggressive: 3900000 },
      { conservative: 3200000, base: 4000000, aggressive: 4800000 },
      { conservative: 2200000, base: 2750000, aggressive: 3300000 },
      { conservative: 0, base: 0, aggressive: 0 },
    ],
    yearlyEBITDA: [
      { conservative: 1600000, base: 2000000, aggressive: 2400000 },
      { conservative: 2600000, base: 3250000, aggressive: 3900000 },
      { conservative: 3200000, base: 4000000, aggressive: 4800000 },
      { conservative: 2200000, base: 2750000, aggressive: 3300000 },
      { conservative: 0, base: 0, aggressive: 0 },
    ],
  },
  {
    id: 'property-management',
    name: 'Property Management',
    description: '25% of villa rental revenue — recurring, contractual management fees',
    y5Revenue: { conservative: 1360000, base: 1700000, aggressive: 2040000 },
    y5EBITDA: { conservative: 816000, base: 1020000, aggressive: 1224000 },
    y5Margin: 0.60,
    multiple: 10.0,
    multipleLabel: 'Property management comps',
    standaloneValue: { conservative: 8160000, base: 10200000, aggressive: 12240000 },
    yearlyRevenue: [
      { conservative: 131000, base: 164000, aggressive: 197000 },
      { conservative: 350000, base: 438000, aggressive: 526000 },
      { conservative: 701000, base: 876000, aggressive: 1051000 },
      { conservative: 1051000, base: 1314000, aggressive: 1577000 },
      { conservative: 1360000, base: 1700000, aggressive: 2040000 },
    ],
    yearlyEBITDA: [
      { conservative: 79000, base: 98000, aggressive: 118000 },
      { conservative: 210000, base: 263000, aggressive: 316000 },
      { conservative: 421000, base: 526000, aggressive: 631000 },
      { conservative: 631000, base: 788000, aggressive: 946000 },
      { conservative: 816000, base: 1020000, aggressive: 1224000 },
    ],
  },
  {
    id: 'technology-platform',
    name: 'Technology & Digital Platform',
    description: '14 integrated systems: AI personalization, clinical protocols, biometric monitoring, aftercare app',
    y5Revenue: { conservative: 0, base: 0, aggressive: 0 }, // Internal platform, no external revenue
    y5EBITDA: { conservative: 0, base: 0, aggressive: 0 },
    y5Margin: 0,
    multiple: 1.0, // Cost-replacement method
    multipleLabel: 'IP + scalability optionality',
    standaloneValue: { conservative: 5000000, base: 7500000, aggressive: 10000000 },
    yearlyRevenue: [
      { conservative: 0, base: 0, aggressive: 0 },
      { conservative: 0, base: 0, aggressive: 0 },
      { conservative: 0, base: 0, aggressive: 0 },
      { conservative: 0, base: 0, aggressive: 0 },
      { conservative: 0, base: 0, aggressive: 0 },
    ],
    yearlyEBITDA: [
      { conservative: 0, base: 0, aggressive: 0 },
      { conservative: 0, base: 0, aggressive: 0 },
      { conservative: 0, base: 0, aggressive: 0 },
      { conservative: 0, base: 0, aggressive: 0 },
      { conservative: 0, base: 0, aggressive: 0 },
    ],
  },
]

// ─── Enterprise Valuation ────────────────────────────────────────────────
// Sum-of-parts rollup + recalculated 9-method IPEV framework
export const ENTERPRISE_VALUATION: EnterpriseValuation = {
  businessUnits: BUSINESS_UNITS,
  combinedY5Revenue: { conservative: 29597000, base: 37161000, aggressive: 41193000 },
  combinedY5EBITDA: { conservative: 17758000, base: 22532000, aggressive: 25136000 },
  combinedY5NetIncome: { conservative: 12430000, base: 15600000, aggressive: 17595000 },
  combinedY5FCF: { conservative: 11557000, base: 14500000, aggressive: 16363000 },
  sumOfPartsValue: { conservative: 115960000, base: 146700000, aggressive: 168140000 },
  valuationMethods: [
    {
      id: 1,
      name: 'Scorecard Method',
      value: { conservative: 12800000, base: 16000000, aggressive: 19200000 },
      weight: 0.20,
      contribution: { conservative: 2560000, base: 3200000, aggressive: 3840000 },
    },
    {
      id: 2,
      name: 'Checklist Method',
      value: { conservative: 16800000, base: 21000000, aggressive: 25200000 },
      weight: 0.20,
      contribution: { conservative: 3360000, base: 4200000, aggressive: 5040000 },
    },
    {
      id: 3,
      name: 'Cost Approach',
      value: { conservative: 19200000, base: 24000000, aggressive: 28800000 },
      weight: 0.05,
      contribution: { conservative: 960000, base: 1200000, aggressive: 1440000 },
    },
    {
      id: 4,
      name: 'Tiered Revenue VC Method',
      value: { conservative: 33600000, base: 42000000, aggressive: 50400000 },
      weight: 0.10,
      contribution: { conservative: 3360000, base: 4200000, aggressive: 5040000 },
    },
    {
      id: 5,
      name: 'Simple VC Method (Revenue)',
      value: { conservative: 24000000, base: 30000000, aggressive: 36000000 },
      weight: 0.07,
      contribution: { conservative: 1680000, base: 2100000, aggressive: 2520000 },
    },
    {
      id: 6,
      name: 'Simple VC Method (EBITDA)',
      value: { conservative: 26400000, base: 33000000, aggressive: 39600000 },
      weight: 0.05,
      contribution: { conservative: 1320000, base: 1650000, aggressive: 1980000 },
    },
    {
      id: 7,
      name: 'Simple VC Method (Net Income)',
      value: { conservative: 24000000, base: 30000000, aggressive: 36000000 },
      weight: 0.03,
      contribution: { conservative: 720000, base: 900000, aggressive: 1080000 },
    },
    {
      id: 8,
      name: 'DCF Growth-Adjusted',
      value: { conservative: 25600000, base: 32000000, aggressive: 38400000 },
      weight: 0.20,
      contribution: { conservative: 5120000, base: 6400000, aggressive: 7680000 },
    },
    {
      id: 9,
      name: 'DCF with Multiples',
      value: { conservative: 44000000, base: 55000000, aggressive: 66000000 },
      weight: 0.10,
      contribution: { conservative: 4400000, base: 5500000, aggressive: 6600000 },
    },
  ],
  weightedAvgPostMoney: { conservative: 23480000, base: 29350000, aggressive: 35220000 },
}

// ─── Consolidated P&L (all business units) ───────────────────────────────
// Healing center P&L + villa dev fees + management income
// Villa dev fees are high-margin (essentially pass-through with coordination overhead)
// Management fees operate at ~60% margin
export const CONSOLIDATED_PL_STATEMENTS = PL_STATEMENTS.map((pl, index) => {
  const villaYear = VILLA_PROGRAM_FINANCIALS.yearly[index]
  const additionalRevenue = villaYear.developmentFee + villaYear.mgmtFeeIncome
  const additionalCosts = villaYear.developmentFee * 0.15 + villaYear.mgmtFeeIncome * 0.40 // 15% dev overhead, 40% mgmt costs
  const additionalEBITDA = additionalRevenue - additionalCosts
  const additionalTaxes = additionalEBITDA * 0.30

  return {
    year: pl.year,
    healingCenterRevenue: pl.revenue.total,
    villaDevFees: villaYear.developmentFee,
    managementFees: villaYear.mgmtFeeIncome,
    totalConsolidatedRevenue: pl.revenue.total + additionalRevenue,
    healingCenterEBITDA: pl.ebitda,
    villaDevEBITDA: villaYear.developmentFee * 0.85,
    managementEBITDA: villaYear.mgmtFeeIncome * 0.60,
    totalConsolidatedEBITDA: pl.ebitda + additionalEBITDA,
    totalConsolidatedNetIncome: pl.netIncome + (additionalEBITDA - additionalTaxes),
  }
})
