// Scenario types
export type Scenario = 'conservative' | 'base' | 'aggressive'

// Property types
export interface Property {
  id: string
  name: string
  location: string
  propertyType: string
  currentUse: string
  score: number
  targetMarket: string
  status: 'SHORTLIST' | 'HOLD' | 'PASS'
  capacity: PropertyCapacity
  acquisition: PropertyAcquisition
  imageUrl?: string
}

export interface PropertyCapacity {
  totalRooms: number
  treatmentBeds: {
    conservative: number
    base: number
    aggressive: number
  }
  maxGuestsPerYear: number
}

export interface PropertyAcquisition {
  askingPrice: number
  negotiatedPrice: number
  closingCosts: number
  totalAcquisitionCost: number
}

// Dashboard metrics
export interface DashboardMetrics {
  propertyName: string
  location: string
  totalRooms: number
  treatmentBeds: number
  propertyScore: number
  recommendation: string
  averageDailyRate: number
  keyMetrics: ScenarioMetrics
}

export interface ScenarioMetrics {
  acquisitionPrice: number
  totalProjectCost: number
  costPerRoom: number
  revenue: {
    year1: ScenarioValue
    year3: ScenarioValue
    year5: ScenarioValue
    fiveYearTotal: ScenarioValue
  }
  projectIRR: ScenarioValue
  fiveYearMOIC: ScenarioValue
}

export interface ScenarioValue {
  conservative: number
  base: number
  aggressive: number
}

// Revenue projections
export interface RevenueProjection {
  year: number
  programRevenue: ScenarioValue
  bioOptimizationPremium: ScenarioValue
  wellnessProducts: ScenarioValue
  postCareSubscriptions: ScenarioValue
  conciergeServices: ScenarioValue
  totalRevenue: ScenarioValue
}

// P&L Statement
export interface PLStatement {
  year: number
  revenue: RevenueBreakdown
  cogs: number
  grossProfit: number
  grossMarginPercent: number
  operatingExpenses: OperatingExpenses
  totalOpex: number
  ebitda: number
  ebitdaMarginPercent: number
  depreciation: number
  ebit: number
  interestExpense: number
  ebt: number
  taxes: number
  netIncome: number
}

export interface RevenueBreakdown {
  programRevenue: number
  bioOptimizationPremium: number
  wellnessProducts: number
  postCareSubscriptions: number
  conciergeServices: number
  total: number
}

export interface OperatingExpenses {
  facilityCosts: number
  personnel: number
  professionalServices: number
  technology: number
  marketing: number
  gAndA: number
  total: number
}

// Unit Economics
export interface UnitEconomics {
  revenuePerGuest: UnitEconomicsComponent[]
  totalGuestRevenue: number
  directCostsPerGuest: UnitEconomicsComponent[]
  totalDirectCosts: number
  grossProfitPerGuest: number
  contributionMargin: number
  blendedCAC: number
  ltv: number
  ltvCacRatio: number
}

export interface UnitEconomicsComponent {
  name: string
  amount: number
  percentOfRevenue: number
  notes?: string
}

// Investment Returns
export interface InvestmentReturns {
  totalCapitalRequired: number
  equityInvestment: number
  debtFinancing: number
  yearlyReturns: YearlyReturn[]
  npv: {
    rate10: number
    rate12: number
    rate15: number
  }
  irr: ScenarioValue
  moic: ScenarioValue
}

export interface YearlyReturn {
  year: number
  totalInvestment: number
  annualNetIncome: number
  cumulativeNetIncome: number
  roiCumulative: number
  roiAnnualized: number
}

// Cash Flow
export interface CashFlowProjection {
  year: number
  operatingCashFlow: number
  investingCashFlow: number
  financingCashFlow: number
  netCashFlow: number
  cumulativeCashFlow: number
}

// Use of Funds
export interface UseOfFunds {
  category: string
  amount: number
  percentage: number
  description?: string
}

// Sensitivity Analysis
export interface SensitivityAnalysis {
  variable: string
  scenarios: {
    pessimistic: { value: number; impact: number }
    base: { value: number; impact: number }
    optimistic: { value: number; impact: number }
  }
}

// Chart data types
export interface RevenueChartData {
  year: string
  conservative: number
  base: number
  aggressive: number
}

export interface PLChartData {
  category: string
  amount: number
  type: 'revenue' | 'expense' | 'profit'
}

export interface UseOfFundsChartData {
  name: string
  value: number
  fill: string
}

// API response types
export interface FinancialDataResponse {
  dashboard: DashboardMetrics
  revenueProjections: RevenueProjection[]
  plStatements: PLStatement[]
  unitEconomics: UnitEconomics
  investmentReturns: InvestmentReturns
  useOfFunds: UseOfFunds[]
  lastUpdated: string
}

export interface PropertyDataResponse {
  properties: Property[]
  lastUpdated: string
}
