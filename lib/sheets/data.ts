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
// Casita phasing: 15→60 rooms over 5 years, Year 1 foundation (15 only), funded from operating cash flow
// Base case = 60% Y1 → 75% Y2 → 80% Y3-5 occupancy, ramping capacity, $2,000/night ADR
// Conservative = ~50-70% occupancy ramp | Aggressive = ~70-90% occupancy ramp
// Add-on revenue: Bio-opt 15%, Wellness 4%, Post-care 6%, Concierge 3% (28% total at maturity)
// Personnel: $236,510/mo (base $176,500 + 34% benefits), G&A: $117,833/mo (includes $83,333 management fee)
// Total fixed costs: $495,343/mo ($5,944,120/yr), inflating at 4%/yr

// ─── Casita Phasing Data ───────────────────────────────────────────────
export const CASITA_PHASING = {
  years: [
    { year: 1, startRooms: 15, added: 0,  endRooms: 15, effectiveAvgRooms: 15, occupancy: 0.60, guests: 253 },
    { year: 2, startRooms: 15, added: 15, endRooms: 30, effectiveAvgRooms: 23, occupancy: 0.70, guests: 440 },
    { year: 3, startRooms: 30, added: 15, endRooms: 45, effectiveAvgRooms: 38, occupancy: 0.75, guests: 780 },
    { year: 4, startRooms: 45, added: 8,  endRooms: 53, effectiveAvgRooms: 49, occupancy: 0.80, guests: 1073 },
    { year: 5, startRooms: 53, added: 7,  endRooms: 60, effectiveAvgRooms: 57, occupancy: 0.80, guests: 1248 },
  ],
  totalCapacity: 60,
  buildCostPerCasita: 225000,
  totalExpansionCost: 10125000, // 45 additional casitas × $225K (was $6.75M for 30 casitas)
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
    { year: 1, villasSold: 0, builtOperational: 0, salesRevenue: 0 },
    { year: 2, villasSold: 4, builtOperational: 2, salesRevenue: 8000000 },
    { year: 3, villasSold: 10, builtOperational: 10, salesRevenue: 20000000 },
    { year: 4, villasSold: 16, builtOperational: 28, salesRevenue: 32000000 },
    { year: 5, villasSold: 18, builtOperational: 48, salesRevenue: 36000000 },
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
      askingPrice: 8000000,
      negotiatedPrice: 8000000,
      closingCosts: 500000,
      totalAcquisitionCost: 8500000,
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
    acquisitionPrice: 8000000,
    totalProjectCost: 13423500,
    costPerRoom: 223725, // $13,423,500 / 60 rooms at full build
    revenue: {
      year1: { conservative: 6451000, base: 7773000, aggressive: 9095000 },
      year3: { conservative: 21339000, base: 25710000, aggressive: 30081000 },
      year5: { conservative: 34830000, base: 41964000, aggressive: 49098000 },
      fiveYearTotal: { conservative: 104196000, base: 125538000, aggressive: 146880000 },
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
    programRevenue: { conservative: 5586000, base: 6730000, aggressive: 7874000 },
    bioOptimizationPremium: { conservative: 628000, base: 757000, aggressive: 886000 },
    wellnessProducts: { conservative: 112000, base: 135000, aggressive: 158000 },
    postCareSubscriptions: { conservative: 0, base: 0, aggressive: 0 },
    conciergeServices: { conservative: 125000, base: 151000, aggressive: 177000 },
    totalRevenue: { conservative: 6451000, base: 7773000, aggressive: 9095000 },
  },
  {
    year: 2,
    programRevenue: { conservative: 9714000, base: 11704000, aggressive: 13694000 },
    bioOptimizationPremium: { conservative: 1457000, base: 1756000, aggressive: 2055000 },
    wellnessProducts: { conservative: 388000, base: 468000, aggressive: 548000 },
    postCareSubscriptions: { conservative: 120000, base: 145000, aggressive: 170000 },
    conciergeServices: { conservative: 291000, base: 351000, aggressive: 411000 },
    totalRevenue: { conservative: 11972000, base: 14424000, aggressive: 16876000 },
  },
  {
    year: 3,
    programRevenue: { conservative: 17221000, base: 20748000, aggressive: 24275000 },
    bioOptimizationPremium: { conservative: 2583000, base: 3112000, aggressive: 3641000 },
    wellnessProducts: { conservative: 689000, base: 830000, aggressive: 971000 },
    postCareSubscriptions: { conservative: 330000, base: 398000, aggressive: 466000 },
    conciergeServices: { conservative: 517000, base: 622000, aggressive: 728000 },
    totalRevenue: { conservative: 21339000, base: 25710000, aggressive: 30081000 },
  },
  {
    year: 4,
    programRevenue: { conservative: 23690000, base: 28542000, aggressive: 33394000 },
    bioOptimizationPremium: { conservative: 3553000, base: 4281000, aggressive: 5009000 },
    wellnessProducts: { conservative: 948000, base: 1142000, aggressive: 1336000 },
    postCareSubscriptions: { conservative: 702000, base: 846000, aggressive: 990000 },
    conciergeServices: { conservative: 710000, base: 856000, aggressive: 1002000 },
    totalRevenue: { conservative: 29604000, base: 35667000, aggressive: 41730000 },
  },
  {
    year: 5,
    programRevenue: { conservative: 27554000, base: 33197000, aggressive: 38840000 },
    bioOptimizationPremium: { conservative: 4133000, base: 4980000, aggressive: 5827000 },
    wellnessProducts: { conservative: 1102000, base: 1328000, aggressive: 1554000 },
    postCareSubscriptions: { conservative: 1214000, base: 1463000, aggressive: 1712000 },
    conciergeServices: { conservative: 827000, base: 996000, aggressive: 1165000 },
    totalRevenue: { conservative: 34830000, base: 41964000, aggressive: 49098000 },
  },
]

export const REVENUE_CHART_DATA: RevenueChartData[] = [
  { year: 'Year 1', conservative: 6451000, base: 7773000, aggressive: 9095000 },
  { year: 'Year 2', conservative: 11972000, base: 14424000, aggressive: 16876000 },
  { year: 'Year 3', conservative: 21339000, base: 25710000, aggressive: 30081000 },
  { year: 'Year 4', conservative: 29604000, base: 35667000, aggressive: 41730000 },
  { year: 'Year 5', conservative: 34830000, base: 41964000, aggressive: 49098000 },
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
      programRevenue: 6730000,
      bioOptimizationPremium: 757000,
      wellnessProducts: 135000,
      postCareSubscriptions: 0,
      conciergeServices: 151000,
      total: 7773000,
    },
    cogs: 1171000,
    grossProfit: 6602000,
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
    ebitda: 658000,
    ebitdaMarginPercent: 0.08,
    depreciation: 677143,
    ebit: -19000,
    interestExpense: 0,
    ebt: -19000,
    taxes: 0,
    netIncome: -19000,
  },
  {
    year: 2,
    revenue: {
      programRevenue: 11704000,
      bioOptimizationPremium: 1756000,
      wellnessProducts: 468000,
      postCareSubscriptions: 145000,
      conciergeServices: 351000,
      total: 14424000,
    },
    cogs: 2037000,
    grossProfit: 12387000,
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
    ebitda: 6245000,
    ebitdaMarginPercent: 0.43,
    depreciation: 677143,
    ebit: 5568000,
    interestExpense: 0,
    ebt: 5568000,
    taxes: 1670000,
    netIncome: 3898000,
  },
  {
    year: 3,
    revenue: {
      programRevenue: 20748000,
      bioOptimizationPremium: 3112000,
      wellnessProducts: 830000,
      postCareSubscriptions: 398000,
      conciergeServices: 622000,
      total: 25710000,
    },
    cogs: 3611000,
    grossProfit: 22099000,
    grossMarginPercent: 0.86,
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
    ebitda: 15751000,
    ebitdaMarginPercent: 0.61,
    depreciation: 677143,
    ebit: 15074000,
    interestExpense: 0,
    ebt: 15074000,
    taxes: 4522000,
    netIncome: 10552000,
  },
  {
    year: 4,
    revenue: {
      programRevenue: 28542000,
      bioOptimizationPremium: 4281000,
      wellnessProducts: 1142000,
      postCareSubscriptions: 846000,
      conciergeServices: 856000,
      total: 35667000,
    },
    cogs: 4967000,
    grossProfit: 30700000,
    grossMarginPercent: 0.86,
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
    ebitda: 24139000,
    ebitdaMarginPercent: 0.68,
    depreciation: 677143,
    ebit: 23462000,
    interestExpense: 0,
    ebt: 23462000,
    taxes: 7039000,
    netIncome: 16423000,
  },
  {
    year: 5,
    revenue: {
      programRevenue: 33197000,
      bioOptimizationPremium: 4980000,
      wellnessProducts: 1328000,
      postCareSubscriptions: 1463000,
      conciergeServices: 996000,
      total: 41964000,
    },
    cogs: 5778000,
    grossProfit: 36186000,
    grossMarginPercent: 0.86,
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
    ebitda: 29402000,
    ebitdaMarginPercent: 0.70,
    depreciation: 677143,
    ebit: 28725000,
    interestExpense: 0,
    ebt: 28725000,
    taxes: 8618000,
    netIncome: 20107000,
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
// Total: $13,423,500
export const USE_OF_FUNDS: UseOfFunds[] = [
  { category: 'Property Acquisition', amount: 8500000, percentage: 63.3, description: '$8.0M purchase + $500K closing costs' },
  { category: 'Working Capital', amount: 1126000, percentage: 8.4, description: 'Operating runway' },
  { category: 'Renovation & Conversion', amount: 1000000, percentage: 7.5, description: 'Renovations to make property operational' },
  { category: 'Medical + Biohacking', amount: 1000000, percentage: 7.5, description: 'ICU/monitoring, diagnostic, IV systems, biohacking equipment' },
  { category: 'Contingency', amount: 847500, percentage: 6.3, description: 'Risk buffer' },
  { category: 'Technology', amount: 750000, percentage: 5.6, description: 'Tech development' },
  { category: 'Pre-Opening', amount: 200000, percentage: 1.5, description: 'Licensing, training, soft launch' },
]

// ─── Villa Program Financials ────────────────────────────────────────────
// Centralized from villa page local data
// Dev fee: 12.5% of sales | Mgmt fee: 25% of rental revenue
// Rental revenue assumes ~70% occupancy, $300/night avg across villa types
export const VILLA_PROGRAM_FINANCIALS: VillaProgramFinancials = {
  yearly: [
    { year: 1, villasSold: 0, builtOperational: 0, salesRevenue: 0, developmentFee: 0, cumulativeDevFees: 0, mgmtFeeIncome: 0, rentalRevenue: 0 },
    { year: 2, villasSold: 4, builtOperational: 2, salesRevenue: 8000000, developmentFee: 1000000, cumulativeDevFees: 1000000, mgmtFeeIncome: 71000, rentalRevenue: 283000 },
    { year: 3, villasSold: 10, builtOperational: 10, salesRevenue: 20000000, developmentFee: 2500000, cumulativeDevFees: 3500000, mgmtFeeIncome: 354000, rentalRevenue: 1417000 },
    { year: 4, villasSold: 16, builtOperational: 28, salesRevenue: 32000000, developmentFee: 4000000, cumulativeDevFees: 7500000, mgmtFeeIncome: 992000, rentalRevenue: 3967000 },
    { year: 5, villasSold: 18, builtOperational: 48, salesRevenue: 36000000, developmentFee: 4500000, cumulativeDevFees: 12000000, mgmtFeeIncome: 1700000, rentalRevenue: 6800000 },
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
    description: '48-villa condo-hotel plus $8.5M property appreciating at 5-10% annually',
    y5Revenue: { conservative: 0, base: 0, aggressive: 0 }, // Y5 has no sales (all sold by Y4)
    y5EBITDA: { conservative: 0, base: 0, aggressive: 0 },
    y5Margin: 0,
    multiple: 1.4, // ~appreciation factor at Y5 base (7% compound on $8.5M)
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
const RE_BASE_VALUE = 8500000
const RE_APPRECIATION_RATES = { conservative: 0.05, base: 0.07, aggressive: 0.10 }
const TECH_BASE_VALUE = { conservative: 5000000, base: 7500000, aggressive: 10000000 }
const DATA_PREMIUM_PER_RECORD = { conservative: 5000, base: 10000, aggressive: 15000 }

// ─── Investor's 3-Entity Offer Projections ──────────────────────────────────
// Maps 4 business units into 3 investment entities with value appreciation:
//   Entity A (Real Estate) = $8.5M property appreciating at compound rates
//   Entity B (Clinic/Ops) = Healing Center EBITDA × 5.5x + Property Mgmt EBITDA × 10x
//   Entity C (Data/AI) = Technology platform base + per-patient-record data premium
// Y5 entity totals align with BUSINESS_UNITS standaloneValues and ENTERPRISE_VALUATION.
// Investor receives 30% across all three entities.
const CUMULATIVE_GUESTS = CASITA_PHASING.years.reduce<number[]>((acc, yr) => {
  const prev = acc.length > 0 ? acc[acc.length - 1] : 0
  acc.push(prev + yr.guests)
  return acc
}, [])

const healingCenter = BUSINESS_UNITS.find(u => u.id === 'healing-center')!
const propertyMgmt = BUSINESS_UNITS.find(u => u.id === 'property-management')!

export const INVESTOR_OFFER_PROJECTIONS = {
  investorEquityPercent: 0.30,
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

    // Investor's 30%
    const investorEquity = {
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
      investorEquity,
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
