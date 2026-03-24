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
    projectIRR: { conservative: 0.65, base: 0.74, aggressive: 0.85 },
    fiveYearMOIC: { conservative: 6.2, base: 8.4, aggressive: 10.5 },
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

// Investment returns - updated for $13.4M raise at 49% equity
// Total investment: $13,423,500 | 5-year cumulative net income: ~$51.0M
// IRR with exit: 65-85% | MOIC: 6.2-10.5x
export const INVESTMENT_RETURNS: InvestmentReturns = {
  totalCapitalRequired: 13423500,
  equityInvestment: 13423500,
  debtFinancing: 0,
  yearlyReturns: [
    {
      year: 1,
      totalInvestment: 13423500,
      annualNetIncome: -19000,
      cumulativeNetIncome: -19000,
      roiCumulative: -0.001,
      roiAnnualized: -0.001,
    },
    {
      year: 2,
      totalInvestment: 13423500,
      annualNetIncome: 3898000,
      cumulativeNetIncome: 3879000,
      roiCumulative: 0.289,
      roiAnnualized: 0.145,
    },
    {
      year: 3,
      totalInvestment: 13423500,
      annualNetIncome: 10552000,
      cumulativeNetIncome: 14431000,
      roiCumulative: 1.075,
      roiAnnualized: 0.358,
    },
    {
      year: 4,
      totalInvestment: 13423500,
      annualNetIncome: 16423000,
      cumulativeNetIncome: 30854000,
      roiCumulative: 2.299,
      roiAnnualized: 0.575,
    },
    {
      year: 5,
      totalInvestment: 13423500,
      annualNetIncome: 20107000,
      cumulativeNetIncome: 50961000,
      roiCumulative: 3.797,
      roiAnnualized: 0.759,
    },
  ],
  npv: {
    rate10: 21410000,
    rate12: 19023000,
    rate15: 15833000,
  },
  irr: { conservative: 0.65, base: 0.74, aggressive: 0.85 },
  moic: { conservative: 6.2, base: 8.4, aggressive: 10.5 },
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
    y5Revenue: { conservative: 34830000, base: 41964000, aggressive: 49098000 },
    y5EBITDA: { conservative: 23267000, base: 29402000, aggressive: 35537000 },
    y5Margin: 0.70,
    multiple: 5.5,
    multipleLabel: 'Behavioral health operators',
    standaloneValue: { conservative: 127969000, base: 161711000, aggressive: 195454000 },
    yearlyRevenue: [
      { conservative: 6451000, base: 7773000, aggressive: 9095000 },
      { conservative: 11972000, base: 14424000, aggressive: 16876000 },
      { conservative: 21339000, base: 25710000, aggressive: 30081000 },
      { conservative: 29604000, base: 35667000, aggressive: 41730000 },
      { conservative: 34830000, base: 41964000, aggressive: 49098000 },
    ],
    yearlyEBITDA: [
      { conservative: -466000, base: 658000, aggressive: 1782000 },
      { conservative: 4136000, base: 6245000, aggressive: 8354000 },
      { conservative: 11992000, base: 15751000, aggressive: 19510000 },
      { conservative: 18925000, base: 24139000, aggressive: 29353000 },
      { conservative: 23267000, base: 29402000, aggressive: 35537000 },
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate Development',
    description: '48-villa condo-hotel plus $8.5M property appreciating at 5-10% annually',
    y5Revenue: { conservative: 4500000, base: 4500000, aggressive: 4500000 },
    y5EBITDA: { conservative: 4500000, base: 4500000, aggressive: 4500000 },
    y5Margin: 1.0,
    multiple: 1.4, // ~appreciation factor at Y5 base (7% compound on $8.5M)
    multipleLabel: 'Property appreciation (5/7/10% compound)',
    standaloneValue: { conservative: 10848000, base: 11922000, aggressive: 13689000 },
    yearlyRevenue: [
      { conservative: 0, base: 0, aggressive: 0 },
      { conservative: 1000000, base: 1000000, aggressive: 1000000 },
      { conservative: 2500000, base: 2500000, aggressive: 2500000 },
      { conservative: 4000000, base: 4000000, aggressive: 4000000 },
      { conservative: 4500000, base: 4500000, aggressive: 4500000 },
    ],
    yearlyEBITDA: [
      { conservative: 0, base: 0, aggressive: 0 },
      { conservative: 1000000, base: 1000000, aggressive: 1000000 },
      { conservative: 2500000, base: 2500000, aggressive: 2500000 },
      { conservative: 4000000, base: 4000000, aggressive: 4000000 },
      { conservative: 4500000, base: 4500000, aggressive: 4500000 },
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
      { conservative: 0, base: 0, aggressive: 0 },
      { conservative: 57000, base: 71000, aggressive: 85000 },
      { conservative: 283000, base: 354000, aggressive: 425000 },
      { conservative: 794000, base: 992000, aggressive: 1190000 },
      { conservative: 1360000, base: 1700000, aggressive: 2040000 },
    ],
    yearlyEBITDA: [
      { conservative: 0, base: 0, aggressive: 0 },
      { conservative: 34200, base: 42600, aggressive: 51000 },
      { conservative: 169800, base: 212400, aggressive: 255000 },
      { conservative: 476400, base: 595200, aggressive: 714000 },
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
    standaloneValue: { conservative: 23970000, base: 45440000, aggressive: 66910000 },
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
  combinedY5Revenue: { conservative: 40690000, base: 48164000, aggressive: 55638000 },
  combinedY5EBITDA: { conservative: 28583000, base: 34922000, aggressive: 41261000 },
  combinedY5NetIncome: { conservative: 19000000, base: 23500000, aggressive: 28000000 },
  combinedY5FCF: { conservative: 19677000, base: 24177000, aggressive: 28677000 },
  sumOfPartsValue: { conservative: 170947000, base: 229273000, aggressive: 288293000 },
  valuationMethods: [
    {
      id: 1,
      name: 'Scorecard Method',
      value: { conservative: 11700000, base: 15300000, aggressive: 18900000 },
      weight: 0.20,
      contribution: { conservative: 2340000, base: 3060000, aggressive: 3780000 },
    },
    {
      id: 2,
      name: 'Checklist Method',
      value: { conservative: 15400000, base: 20100000, aggressive: 24800000 },
      weight: 0.20,
      contribution: { conservative: 3080000, base: 4020000, aggressive: 4960000 },
    },
    {
      id: 3,
      name: 'Cost Approach',
      value: { conservative: 17600000, base: 23000000, aggressive: 28300000 },
      weight: 0.05,
      contribution: { conservative: 880000, base: 1150000, aggressive: 1415000 },
    },
    {
      id: 4,
      name: 'Tiered Revenue VC Method',
      value: { conservative: 37000000, base: 48300000, aggressive: 59500000 },
      weight: 0.10,
      contribution: { conservative: 3700000, base: 4830000, aggressive: 5950000 },
    },
    {
      id: 5,
      name: 'Simple VC Method (Revenue)',
      value: { conservative: 26400000, base: 34500000, aggressive: 42500000 },
      weight: 0.07,
      contribution: { conservative: 1848000, base: 2415000, aggressive: 2975000 },
    },
    {
      id: 6,
      name: 'Simple VC Method (EBITDA)',
      value: { conservative: 33800000, base: 44100000, aggressive: 54300000 },
      weight: 0.05,
      contribution: { conservative: 1690000, base: 2205000, aggressive: 2715000 },
    },
    {
      id: 7,
      name: 'Simple VC Method (Net Income)',
      value: { conservative: 31100000, base: 40600000, aggressive: 50100000 },
      weight: 0.03,
      contribution: { conservative: 933000, base: 1218000, aggressive: 1503000 },
    },
    {
      id: 8,
      name: 'DCF Growth-Adjusted',
      value: { conservative: 32900000, base: 42900000, aggressive: 52700000 },
      weight: 0.20,
      contribution: { conservative: 6580000, base: 8580000, aggressive: 10540000 },
    },
    {
      id: 9,
      name: 'DCF with Multiples',
      value: { conservative: 56400000, base: 73600000, aggressive: 90700000 },
      weight: 0.10,
      contribution: { conservative: 5640000, base: 7360000, aggressive: 9070000 },
    },
  ],
  weightedAvgPostMoney: { conservative: 26691000, base: 34838000, aggressive: 42908000 },
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
// Investor receives 49% across all three entities.
const CUMULATIVE_GUESTS = CASITA_PHASING.years.reduce<number[]>((acc, yr) => {
  const prev = acc.length > 0 ? acc[acc.length - 1] : 0
  acc.push(prev + yr.guests)
  return acc
}, [])

const healingCenter = BUSINESS_UNITS.find(u => u.id === 'healing-center')!
const propertyMgmt = BUSINESS_UNITS.find(u => u.id === 'property-management')!

export const INVESTOR_OFFER_PROJECTIONS = {
  investorEquityPercent: 0.49,
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

    // Investor's 49%
    const investorEquity = {
      conservative: Math.round(totalEnterprise.conservative * 0.49),
      base:         Math.round(totalEnterprise.base * 0.49),
      aggressive:   Math.round(totalEnterprise.aggressive * 0.49),
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
