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
// Synced with Google Sheets financial model — formula-driven values as of Feb 2026
// Casita phasing: 30→60 rooms over 5 years, funded from operating cash flow
// Base case = 60% Y1 → 75% Y2 → 80% Y3-5 occupancy, ramping capacity, $2,000/night ADR
// Conservative = ~50-70% occupancy ramp | Aggressive = ~70-90% occupancy ramp
// Add-on revenue: Bio-opt 15%, Wellness 4%, Post-care 6%, Concierge 3% (28% total at maturity)
// Personnel: $236,510/mo (base $176,500 + 34% benefits), G&A: $117,833/mo (includes $83,333 management fee)
// Total fixed costs: $495,343/mo ($5,944,120/yr), inflating at 4%/yr

// ─── Casita Phasing Data ───────────────────────────────────────────────
export const CASITA_PHASING = {
  years: [
    { year: 1, startRooms: 15, added: 15, endRooms: 30, effectiveAvgRooms: 23, occupancy: 0.60, guests: 379 },
    { year: 2, startRooms: 30, added: 10, endRooms: 40, effectiveAvgRooms: 35, occupancy: 0.75, guests: 720 },
    { year: 3, startRooms: 40, added: 8, endRooms: 48, effectiveAvgRooms: 44, occupancy: 0.80, guests: 966 },
    { year: 4, startRooms: 48, added: 6, endRooms: 54, effectiveAvgRooms: 51, occupancy: 0.80, guests: 1120 },
    { year: 5, startRooms: 54, added: 6, endRooms: 60, effectiveAvgRooms: 57, occupancy: 0.80, guests: 1251 },
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
      maxGuestsPerYear: 1251, // 57 effective rooms × 365 days / 13-day avg stay × 80% occ
    },
    acquisition: {
      askingPrice: 11900000,
      negotiatedPrice: 11900000,
      closingCosts: 500000,
      totalAcquisitionCost: 12400000,
    },
    imageUrl: '/images/properties/hotel-alea-tulum.jpg',
  },
]

// Dashboard metrics - key investor-facing numbers (synced with spreadsheet model)
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
    totalProjectCost: 17323500,
    costPerRoom: 288725, // $17,323,500 / 60 rooms at full build
    revenue: {
      year1: { conservative: 9772000, base: 11720000, aggressive: 13668000 },
      year3: { conservative: 28771000, base: 32890000, aggressive: 37010000 },
      year5: { conservative: 37283000, base: 42594000, aggressive: 47940000 },
      fiveYearTotal: { conservative: 130438000, base: 149852000, aggressive: 169301000 },
    },
    projectIRR: { conservative: 0.78, base: 0.78, aggressive: 0.86 },
    fiveYearMOIC: { conservative: 6.7, base: 6.8, aggressive: 10.1 },
  },
}

// Revenue projections - updated for casita phasing (30→60 rooms) + add-on revenue streams
// Revenue per guest: $26,600 base program (13-day weighted avg × $2,000/night)
// Add-ons at maturity: Bio-opt 15%, Wellness 4%, Post-care 6%, Concierge 3% = 28% uplift
// Revenue per guest at maturity: ~$34,048
export const REVENUE_PROJECTIONS: RevenueProjection[] = [
  {
    year: 1,
    programRevenue: { conservative: 8406000, base: 10081000, aggressive: 11757000 },
    bioOptimizationPremium: { conservative: 946000, base: 1134000, aggressive: 1323000 },
    wellnessProducts: { conservative: 168000, base: 202000, aggressive: 235000 },
    postCareSubscriptions: { conservative: 0, base: 0, aggressive: 0 },
    conciergeServices: { conservative: 252000, base: 302000, aggressive: 353000 },
    totalRevenue: { conservative: 9772000, base: 11720000, aggressive: 13668000 },
  },
  {
    year: 2,
    programRevenue: { conservative: 16598000, base: 19152000, aggressive: 21706000 },
    bioOptimizationPremium: { conservative: 2490000, base: 2873000, aggressive: 3256000 },
    wellnessProducts: { conservative: 664000, base: 766000, aggressive: 868000 },
    postCareSubscriptions: { conservative: 996000, base: 1149000, aggressive: 1302000 },
    conciergeServices: { conservative: 498000, base: 575000, aggressive: 651000 },
    totalRevenue: { conservative: 21246000, base: 24515000, aggressive: 27783000 },
  },
  {
    year: 3,
    programRevenue: { conservative: 22477000, base: 25696000, aggressive: 28914000 },
    bioOptimizationPremium: { conservative: 3372000, base: 3854000, aggressive: 4337000 },
    wellnessProducts: { conservative: 899000, base: 1028000, aggressive: 1157000 },
    postCareSubscriptions: { conservative: 1349000, base: 1542000, aggressive: 1735000 },
    conciergeServices: { conservative: 674000, base: 771000, aggressive: 867000 },
    totalRevenue: { conservative: 28771000, base: 32890000, aggressive: 37010000 },
  },
  {
    year: 4,
    programRevenue: { conservative: 26068000, base: 29792000, aggressive: 33516000 },
    bioOptimizationPremium: { conservative: 3910000, base: 4469000, aggressive: 5027000 },
    wellnessProducts: { conservative: 1043000, base: 1192000, aggressive: 1341000 },
    postCareSubscriptions: { conservative: 1564000, base: 1788000, aggressive: 2011000 },
    conciergeServices: { conservative: 782000, base: 894000, aggressive: 1005000 },
    totalRevenue: { conservative: 33367000, base: 38134000, aggressive: 42900000 },
  },
  {
    year: 5,
    programRevenue: { conservative: 29127000, base: 33277000, aggressive: 37453000 },
    bioOptimizationPremium: { conservative: 4369000, base: 4991000, aggressive: 5618000 },
    wellnessProducts: { conservative: 1165000, base: 1331000, aggressive: 1498000 },
    postCareSubscriptions: { conservative: 1748000, base: 1997000, aggressive: 2247000 },
    conciergeServices: { conservative: 874000, base: 998000, aggressive: 1124000 },
    totalRevenue: { conservative: 37283000, base: 42594000, aggressive: 47940000 },
  },
]

export const REVENUE_CHART_DATA: RevenueChartData[] = [
  { year: 'Year 1', conservative: 9772000, base: 11720000, aggressive: 13668000 },
  { year: 'Year 2', conservative: 21246000, base: 24515000, aggressive: 27783000 },
  { year: 'Year 3', conservative: 28771000, base: 32890000, aggressive: 37010000 },
  { year: 'Year 4', conservative: 33367000, base: 38134000, aggressive: 42900000 },
  { year: 'Year 5', conservative: 37283000, base: 42594000, aggressive: 47940000 },
]

// P&L from updated model - base case with casita phasing
// Now includes all 4 add-on revenue streams (Bio-opt 15%, Wellness 4%, Post-care 6%, Concierge 3%)
// Personnel: $236,510/mo (base + 34% benefits), G&A: $117,833/mo (includes $83,333 management fee)
// Total fixed costs: $5,944,120/yr (Y1), inflating at 4%/yr
// D&A: $677,143/yr (flat - building 15yr, equip 7yr, FF&E 10yr, tech 5yr, pre-opening 5yr)
// 30% tax rate
export const PL_STATEMENTS: PLStatement[] = [
  {
    year: 1,
    revenue: {
      programRevenue: 10081000,
      bioOptimizationPremium: 1134000,
      wellnessProducts: 202000,
      postCareSubscriptions: 0,
      conciergeServices: 302000,
      total: 11720000,
    },
    cogs: 1754000,
    grossProfit: 9965000,
    grossMarginPercent: 0.85,
    operatingExpenses: {
      facilityCosts: 576000,
      personnel: 2838120,
      professionalServices: 228000,
      technology: 228000,
      marketing: 660000,
      gAndA: 1414000,
      total: 5944120,
    },
    totalOpex: 5944120,
    ebitda: 4021000,
    ebitdaMarginPercent: 0.34,
    depreciation: 677143,
    ebit: 3344000,
    interestExpense: 0,
    ebt: 3344000,
    taxes: 1003000,
    netIncome: 2341000,
  },
  {
    year: 2,
    revenue: {
      programRevenue: 19152000,
      bioOptimizationPremium: 2873000,
      wellnessProducts: 766000,
      postCareSubscriptions: 1149000,
      conciergeServices: 575000,
      total: 24515000,
    },
    cogs: 3466000,
    grossProfit: 21049000,
    grossMarginPercent: 0.86,
    operatingExpenses: {
      facilityCosts: 599040,
      personnel: 2951645,
      professionalServices: 237120,
      technology: 237120,
      marketing: 686400,
      gAndA: 1430560,
      total: 6141885,
    },
    totalOpex: 6141885,
    ebitda: 14906000,
    ebitdaMarginPercent: 0.61,
    depreciation: 677143,
    ebit: 14229000,
    interestExpense: 0,
    ebt: 14229000,
    taxes: 4269000,
    netIncome: 9961000,
  },
  {
    year: 3,
    revenue: {
      programRevenue: 25696000,
      bioOptimizationPremium: 3854000,
      wellnessProducts: 1028000,
      postCareSubscriptions: 1542000,
      conciergeServices: 771000,
      total: 32890000,
    },
    cogs: 4836000,
    grossProfit: 28054000,
    grossMarginPercent: 0.85,
    operatingExpenses: {
      facilityCosts: 623002,
      personnel: 3069711,
      professionalServices: 246605,
      technology: 246605,
      marketing: 713856,
      gAndA: 1447782,
      total: 6347560,
    },
    totalOpex: 6347560,
    ebitda: 21706000,
    ebitdaMarginPercent: 0.66,
    depreciation: 677143,
    ebit: 21029000,
    interestExpense: 0,
    ebt: 21029000,
    taxes: 6309000,
    netIncome: 14720000,
  },
  {
    year: 4,
    revenue: {
      programRevenue: 29792000,
      bioOptimizationPremium: 4469000,
      wellnessProducts: 1192000,
      postCareSubscriptions: 1788000,
      conciergeServices: 894000,
      total: 38134000,
    },
    cogs: 5832000,
    grossProfit: 32302000,
    grossMarginPercent: 0.85,
    operatingExpenses: {
      facilityCosts: 647922,
      personnel: 3192499,
      professionalServices: 256469,
      technology: 256469,
      marketing: 742410,
      gAndA: 1465694,
      total: 6561463,
    },
    totalOpex: 6561463,
    ebitda: 25740000,
    ebitdaMarginPercent: 0.67,
    depreciation: 677143,
    ebit: 25063000,
    interestExpense: 0,
    ebt: 25063000,
    taxes: 7519000,
    netIncome: 17544000,
  },
  {
    year: 5,
    revenue: {
      programRevenue: 33277000,
      bioOptimizationPremium: 4991000,
      wellnessProducts: 1331000,
      postCareSubscriptions: 1997000,
      conciergeServices: 998000,
      total: 42594000,
    },
    cogs: 6775000,
    grossProfit: 35820000,
    grossMarginPercent: 0.84,
    operatingExpenses: {
      facilityCosts: 673839,
      personnel: 3320199,
      professionalServices: 266728,
      technology: 266728,
      marketing: 772107,
      gAndA: 1484321,
      total: 6783921,
    },
    totalOpex: 6783921,
    ebitda: 29036000,
    ebitdaMarginPercent: 0.68,
    depreciation: 677143,
    ebit: 28359000,
    interestExpense: 0,
    ebt: 28359000,
    taxes: 8508000,
    netIncome: 19851000,
  },
]

// Unit economics from updated model
// Weighted average across program mix: 45% 7-day, 30% 14-day, 15% 21-day, 10% 28-day
// Average stay: 13 days at $2,000/night = $26,600 base per guest
// At maturity: +28% from add-ons = $34,048 total revenue per guest
export const UNIT_ECONOMICS: UnitEconomics = {
  revenuePerGuest: [
    { name: 'Weighted Average Program Fee', amount: 26600, percentOfRevenue: 78, notes: '13-day weighted avg stay at $2,000/night (7/14/21/28-day mix)' },
    { name: 'Bio-optimization Premium (15%)', amount: 3990, percentOfRevenue: 12, notes: 'Stem cells, NAD+, PRP, peptide therapy' },
    { name: 'Wellness Products (4%)', amount: 1064, percentOfRevenue: 3, notes: 'Supplements, protocols, take-home kits' },
    { name: 'Post-care Subscriptions (6%)', amount: 1596, percentOfRevenue: 5, notes: 'Aftercare app, integration coaching' },
    { name: 'Concierge Services (3%)', amount: 798, percentOfRevenue: 2, notes: 'Travel, experiences, luxury coordination' },
  ],
  totalGuestRevenue: 34048,
  directCostsPerGuest: [
    { name: 'Medical Staff & Oversight', amount: 1320, percentOfRevenue: 4, notes: 'Physicians, nurses, monitoring' },
    { name: 'Facilitators & Therapy', amount: 640, percentOfRevenue: 2, notes: 'Integration therapists, facilitators' },
    { name: 'Food & Hospitality', amount: 560, percentOfRevenue: 2, notes: 'Organic meals, chef, service' },
    { name: 'Bio-optimization Supplies', amount: 160, percentOfRevenue: 0, notes: 'IV therapy, supplements' },
    { name: 'Plant Medicine Materials', amount: 640, percentOfRevenue: 2, notes: 'Ibogaine, psilocybin, preparation' },
    { name: 'Guest Amenities', amount: 500, percentOfRevenue: 1, notes: 'Consumables, comfort items' },
    { name: 'Medical Evacuation Reserve', amount: 809, percentOfRevenue: 2, notes: 'Helipad + air evacuation protocol' },
  ],
  totalDirectCosts: 4629,
  grossProfitPerGuest: 29419,
  contributionMargin: 0.86,
  blendedCAC: 2613,
  ltv: 34048,
  ltvCacRatio: 13.0,
}

// Investment returns - updated for corrected formula model
// Total investment: $17,323,500 | 5-year cumulative net income: ~$64.4M
// IRR with exit: 78-86% | MOIC: 6.7-10.1x
export const INVESTMENT_RETURNS: InvestmentReturns = {
  totalCapitalRequired: 17323500,
  equityInvestment: 17323500,
  debtFinancing: 0,
  yearlyReturns: [
    {
      year: 1,
      totalInvestment: 17323500,
      annualNetIncome: 2341000,
      cumulativeNetIncome: 2341000,
      roiCumulative: 0.135,
      roiAnnualized: 0.135,
    },
    {
      year: 2,
      totalInvestment: 17323500,
      annualNetIncome: 9961000,
      cumulativeNetIncome: 12302000,
      roiCumulative: 0.710,
      roiAnnualized: 0.308,
    },
    {
      year: 3,
      totalInvestment: 17323500,
      annualNetIncome: 14720000,
      cumulativeNetIncome: 27022000,
      roiCumulative: 1.560,
      roiAnnualized: 0.368,
    },
    {
      year: 4,
      totalInvestment: 17323500,
      annualNetIncome: 17544000,
      cumulativeNetIncome: 44566000,
      roiCumulative: 2.573,
      roiAnnualized: 0.374,
    },
    {
      year: 5,
      totalInvestment: 17323500,
      annualNetIncome: 19851000,
      cumulativeNetIncome: 64417000,
      roiCumulative: 3.719,
      roiAnnualized: 0.364,
    },
  ],
  npv: {
    rate10: 30936000,
    rate12: 28005000,
    rate15: 24060000,
  },
  irr: { conservative: 0.78, base: 0.78, aggressive: 0.86 },
  moic: { conservative: 6.7, base: 6.8, aggressive: 10.1 },
}

// Use of funds from valuation report Section 6
// Total: $17,323,500
export const USE_OF_FUNDS: UseOfFunds[] = [
  { category: 'Property Acquisition', amount: 12400000, percentage: 71.6, description: '$11.9M purchase + $500K closing costs' },
  { category: 'Working Capital', amount: 1126000, percentage: 6.5, description: 'Operating runway' },
  { category: 'Renovation & Conversion', amount: 1000000, percentage: 5.8, description: 'Renovations to make property operational' },
  { category: 'Medical + Biohacking', amount: 1000000, percentage: 5.8, description: 'ICU/monitoring, diagnostic, IV systems, biohacking equipment' },
  { category: 'Contingency', amount: 847500, percentage: 4.9, description: 'Risk buffer' },
  { category: 'Technology', amount: 750000, percentage: 4.3, description: 'Tech development' },
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
    y5Revenue: { conservative: 37283000, base: 42594000, aggressive: 47940000 },
    y5EBITDA: { conservative: 24568000, base: 29036000, aggressive: 33530000 },
    y5Margin: 0.68,
    multiple: 5.5,
    multipleLabel: 'Behavioral health operators',
    standaloneValue: { conservative: 135100000, base: 159700000, aggressive: 184400000 },
    yearlyRevenue: [
      { conservative: 9772000, base: 11720000, aggressive: 13668000 },
      { conservative: 21246000, base: 24515000, aggressive: 27783000 },
      { conservative: 28771000, base: 32890000, aggressive: 37010000 },
      { conservative: 33367000, base: 38134000, aggressive: 42900000 },
      { conservative: 37283000, base: 42594000, aggressive: 47940000 },
    ],
    yearlyEBITDA: [
      { conservative: 2364000, base: 4021000, aggressive: 5678000 },
      { conservative: 12101000, base: 14906000, aggressive: 17713000 },
      { conservative: 18194000, base: 21706000, aggressive: 25222000 },
      { conservative: 21703000, base: 25740000, aggressive: 29781000 },
      { conservative: 24568000, base: 29036000, aggressive: 33530000 },
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate Development',
    description: '48-villa condo-hotel plus $12.4M property appreciating at 5-10% annually',
    y5Revenue: { conservative: 0, base: 0, aggressive: 0 }, // Y5 has no sales (all sold by Y4)
    y5EBITDA: { conservative: 0, base: 0, aggressive: 0 },
    y5Margin: 0,
    multiple: 1.4, // ~appreciation factor at Y5 base (7% compound on $12.4M)
    multipleLabel: 'Property appreciation (5/7/10% compound)',
    standaloneValue: { conservative: 15826000, base: 17392000, aggressive: 19970000 },
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
    description: '14 integrated systems generating proprietary clinical data — IP base plus per-patient-record data premium',
    y5Revenue: { conservative: 0, base: 0, aggressive: 0 }, // Internal platform, no external revenue
    y5EBITDA: { conservative: 0, base: 0, aggressive: 0 },
    y5Margin: 0,
    multiple: 1.0, // Base platform cost-replacement
    multipleLabel: 'IP base + data premium ($10K/record)',
    standaloneValue: { conservative: 27180000, base: 51860000, aggressive: 76540000 },
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
  combinedY5Revenue: { conservative: 38643000, base: 44294000, aggressive: 49980000 },
  combinedY5EBITDA: { conservative: 25384000, base: 30056000, aggressive: 34754000 },
  combinedY5NetIncome: { conservative: 17295000, base: 20565000, aggressive: 23854000 },
  combinedY5FCF: { conservative: 17972000, base: 21242000, aggressive: 24531000 },
  sumOfPartsValue: { conservative: 186266000, base: 239152000, aggressive: 293150000 },
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
      value: { conservative: 40300000, base: 50400000, aggressive: 60500000 },
      weight: 0.10,
      contribution: { conservative: 4030000, base: 5040000, aggressive: 6050000 },
    },
    {
      id: 5,
      name: 'Simple VC Method (Revenue)',
      value: { conservative: 28800000, base: 36000000, aggressive: 43200000 },
      weight: 0.07,
      contribution: { conservative: 2016000, base: 2520000, aggressive: 3024000 },
    },
    {
      id: 6,
      name: 'Simple VC Method (EBITDA)',
      value: { conservative: 36800000, base: 46000000, aggressive: 55200000 },
      weight: 0.05,
      contribution: { conservative: 1840000, base: 2300000, aggressive: 2760000 },
    },
    {
      id: 7,
      name: 'Simple VC Method (Net Income)',
      value: { conservative: 33900000, base: 42400000, aggressive: 50900000 },
      weight: 0.03,
      contribution: { conservative: 1017000, base: 1272000, aggressive: 1527000 },
    },
    {
      id: 8,
      name: 'DCF Growth-Adjusted',
      value: { conservative: 35800000, base: 44700000, aggressive: 53600000 },
      weight: 0.20,
      contribution: { conservative: 7160000, base: 8940000, aggressive: 10720000 },
    },
    {
      id: 9,
      name: 'DCF with Multiples',
      value: { conservative: 61400000, base: 76800000, aggressive: 92200000 },
      weight: 0.10,
      contribution: { conservative: 6140000, base: 7680000, aggressive: 9220000 },
    },
  ],
  weightedAvgPostMoney: { conservative: 29083000, base: 36352000, aggressive: 43621000 },
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

// ─── Value Appreciation Constants ────────────────────────────────────────
// Real estate appreciates at 5%/7%/10% compound annually (cons/base/agg)
// Technology data premium: cumulative patient records × $5K/$10K/$15K per record
const RE_BASE_VALUE = 12400000
const RE_APPRECIATION_RATES = { conservative: 0.05, base: 0.07, aggressive: 0.10 }
const TECH_BASE_VALUE = { conservative: 5000000, base: 7500000, aggressive: 10000000 }
const DATA_PREMIUM_PER_RECORD = { conservative: 5000, base: 10000, aggressive: 15000 }

// ─── Pablo's 3-Entity Offer Projections ──────────────────────────────────
// Maps 4 business units into 3 investment entities with value appreciation:
//   Entity A (Real Estate) = $12.4M property appreciating at compound rates
//   Entity B (Clinic/Ops) = Healing Center EBITDA × 5.5x + Property Mgmt EBITDA × 10x
//   Entity C (Data/AI) = Technology platform base + per-patient-record data premium
// Y5 entity totals align with BUSINESS_UNITS standaloneValues and ENTERPRISE_VALUATION.
// Pablo receives 30% across all three entities.
const CUMULATIVE_GUESTS = CASITA_PHASING.years.reduce<number[]>((acc, yr) => {
  const prev = acc.length > 0 ? acc[acc.length - 1] : 0
  acc.push(prev + yr.guests)
  return acc
}, [])

const healingCenter = BUSINESS_UNITS.find(u => u.id === 'healing-center')!
const propertyMgmt = BUSINESS_UNITS.find(u => u.id === 'property-management')!

export const PABLO_OFFER_PROJECTIONS = {
  pabloEquityPercent: 0.30,
  realEstateBase: RE_BASE_VALUE,

  // Per-year projections across 3 scenarios
  years: [1, 2, 3, 4, 5].map((year, i) => {
    const cumulativeGuests = CUMULATIVE_GUESTS[i]

    // Entity A: Real Estate — property appreciation at 5%/7%/10% compound
    const reAppreciation = {
      conservative: Math.round(RE_BASE_VALUE * Math.pow(1 + RE_APPRECIATION_RATES.conservative, year)),
      base:         Math.round(RE_BASE_VALUE * Math.pow(1 + RE_APPRECIATION_RATES.base, year)),
      aggressive:   Math.round(RE_BASE_VALUE * Math.pow(1 + RE_APPRECIATION_RATES.aggressive, year)),
    }

    // Entity B: Clinic/Ops — Healing Center EBITDA × 5.5x + Property Mgmt EBITDA × 10x
    const clinicValue = {
      conservative: Math.round(healingCenter.yearlyEBITDA[i].conservative * 5.5) + Math.round(propertyMgmt.yearlyEBITDA[i].conservative * 10),
      base:         Math.round(healingCenter.yearlyEBITDA[i].base * 5.5) + Math.round(propertyMgmt.yearlyEBITDA[i].base * 10),
      aggressive:   Math.round(healingCenter.yearlyEBITDA[i].aggressive * 5.5) + Math.round(propertyMgmt.yearlyEBITDA[i].aggressive * 10),
    }

    // Entity C: Data/AI — technology platform base + per-patient-record data premium
    const dataValue = {
      conservative: Math.round(TECH_BASE_VALUE.conservative + (DATA_PREMIUM_PER_RECORD.conservative * cumulativeGuests)),
      base:         Math.round(TECH_BASE_VALUE.base + (DATA_PREMIUM_PER_RECORD.base * cumulativeGuests)),
      aggressive:   Math.round(TECH_BASE_VALUE.aggressive + (DATA_PREMIUM_PER_RECORD.aggressive * cumulativeGuests)),
    }

    // Combined enterprise value
    const totalEnterprise = {
      conservative: reAppreciation.conservative + clinicValue.conservative + dataValue.conservative,
      base:         reAppreciation.base + clinicValue.base + dataValue.base,
      aggressive:   reAppreciation.aggressive + clinicValue.aggressive + dataValue.aggressive,
    }

    // Pablo's 30%
    const pabloEquity = {
      conservative: Math.round(totalEnterprise.conservative * 0.30),
      base:         Math.round(totalEnterprise.base * 0.30),
      aggressive:   Math.round(totalEnterprise.aggressive * 0.30),
    }

    return {
      year,
      cumulativeGuests,
      realEstate: reAppreciation,
      clinicOpsIP: clinicValue,
      dataAI: dataValue,
      totalEnterprise,
      pabloEquity,
    }
  }),

  // Pre-care / post-care revenue tiers
  careTiers: [
    { name: '3-Month Foundation', price: 4500, retentionRate: 0.70 },
    { name: '6-Month Integration', price: 8000, retentionRate: 0.50 },
    { name: '9-Month Transformation', price: 12000, retentionRate: 0.35 },
    { name: '12-Month Executive', price: 18000, retentionRate: 0.25 },
  ],
}
