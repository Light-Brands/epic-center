import type {
  Scenario,
  Property,
  DashboardMetrics,
  RevenueProjection,
  PLStatement,
  RevenueBreakdown,
  UnitEconomics,
  InvestmentReturns,
  UseOfFunds,
  RevenueChartData,
  ScenarioValue,
  BusinessUnit,
  EnterpriseValuation,
  VillaProgramFinancials,
} from '@/types/financial'

import {
  PROPERTIES,
  DASHBOARD_METRICS,
  REVENUE_PROJECTIONS,
  REVENUE_CHART_DATA,
  PL_STATEMENTS,
  UNIT_ECONOMICS,
  INVESTMENT_RETURNS,
  USE_OF_FUNDS,
  BUSINESS_UNITS,
  ENTERPRISE_VALUATION,
  VILLA_PROGRAM_FINANCIALS,
  CONSOLIDATED_PL_STATEMENTS,
} from './data'

// Helper to get scenario-specific value
export function getScenarioValue<T>(
  scenarioValue: ScenarioValue,
  scenario: Scenario
): number {
  return scenarioValue[scenario]
}

// Data fetching functions
export function getProperties(): Property[] {
  return PROPERTIES
}

export function getPropertyById(id: string): Property | undefined {
  return PROPERTIES.find((p) => p.id === id)
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((p) => p.id === slug)
}

export function getDashboardMetrics(): DashboardMetrics {
  return DASHBOARD_METRICS
}

export function getRevenueProjections(): RevenueProjection[] {
  return REVENUE_PROJECTIONS
}

export function getRevenueChartData(): RevenueChartData[] {
  return REVENUE_CHART_DATA
}

export function getPLStatements(): PLStatement[] {
  return PL_STATEMENTS
}

export function getUnitEconomics(): UnitEconomics {
  return UNIT_ECONOMICS
}

export function getInvestmentReturns(): InvestmentReturns {
  return INVESTMENT_RETURNS
}

export function getUseOfFunds(): UseOfFunds[] {
  return USE_OF_FUNDS
}

// Aggregated data for specific views
export function getExecutiveMetrics(scenario: Scenario) {
  const metrics = DASHBOARD_METRICS.keyMetrics
  return {
    totalProjectCost: metrics.totalProjectCost,
    year1Revenue: getScenarioValue(metrics.revenue.year1, scenario),
    year5Revenue: getScenarioValue(metrics.revenue.year5, scenario),
    fiveYearRevenue: getScenarioValue(metrics.revenue.fiveYearTotal, scenario),
    projectIRR: getScenarioValue(metrics.projectIRR, scenario),
    fiveYearMOIC: getScenarioValue(metrics.fiveYearMOIC, scenario),
  }
}

export function getRevenueChartDataForScenario(scenario: Scenario) {
  return REVENUE_CHART_DATA.map((data) => ({
    year: data.year,
    value: data[scenario],
  }))
}

export function getTotalPropertyValue(): number {
  return PROPERTIES.reduce((sum, p) => sum + p.acquisition.totalAcquisitionCost, 0)
}

export function getPropertiesByStatus(status: Property['status']): Property[] {
  return PROPERTIES.filter((p) => p.status === status)
}

// Enterprise valuation accessors
export function getBusinessUnits(): BusinessUnit[] {
  return BUSINESS_UNITS
}

export function getBusinessUnitById(id: string): BusinessUnit | undefined {
  return BUSINESS_UNITS.find((u) => u.id === id)
}

export function getEnterpriseValuation(): EnterpriseValuation {
  return ENTERPRISE_VALUATION
}

export function getSumOfPartsValue(scenario: Scenario): number {
  return ENTERPRISE_VALUATION.sumOfPartsValue[scenario]
}

export function getVillaProgramFinancials(): VillaProgramFinancials {
  return VILLA_PROGRAM_FINANCIALS
}

export function getConsolidatedPLStatements() {
  return CONSOLIDATED_PL_STATEMENTS
}

// Scenario-aware P&L: revenue scales by scenario, COGS scales proportionally (variable),
// OpEx stays fixed (operating leverage), downstream values recalculated
export function getScenarioPLStatements(scenario: Scenario): PLStatement[] {
  if (scenario === 'base') {
    return PL_STATEMENTS
  }

  return PL_STATEMENTS.map((basePL, i) => {
    const revProj = REVENUE_PROJECTIONS[i]

    const revenue: RevenueBreakdown = {
      programRevenue: revProj.programRevenue[scenario],
      bioOptimizationPremium: revProj.bioOptimizationPremium[scenario],
      wellnessProducts: revProj.wellnessProducts[scenario],
      postCareSubscriptions: revProj.postCareSubscriptions[scenario],
      conciergeServices: revProj.conciergeServices[scenario],
      total: revProj.totalRevenue[scenario],
    }

    // COGS scales proportionally with revenue (variable cost per guest)
    const revenueRatio = revenue.total / basePL.revenue.total
    const cogs = Math.round(basePL.cogs * revenueRatio)
    const grossProfit = revenue.total - cogs
    const grossMarginPercent = grossProfit / revenue.total

    // OpEx stays fixed (operating leverage)
    const operatingExpenses = { ...basePL.operatingExpenses }
    const totalOpex = basePL.totalOpex

    const ebitda = grossProfit - totalOpex
    const ebitdaMarginPercent = ebitda / revenue.total
    const depreciation = basePL.depreciation
    const ebit = ebitda - depreciation
    const interestExpense = basePL.interestExpense
    const ebt = ebit - interestExpense
    const taxes = Math.max(0, Math.round(ebt * 0.3))
    const netIncome = ebt - taxes

    return {
      year: basePL.year,
      revenue,
      cogs,
      grossProfit,
      grossMarginPercent,
      operatingExpenses,
      totalOpex,
      ebitda,
      ebitdaMarginPercent,
      depreciation,
      ebit,
      interestExpense,
      ebt,
      taxes,
      netIncome,
    }
  })
}

// Scenario-aware investment returns: recalculates net income, cumulative ROI, and NPV
export function getScenarioInvestmentReturns(scenario: Scenario): InvestmentReturns {
  if (scenario === 'base') {
    return INVESTMENT_RETURNS
  }

  const scenarioPL = getScenarioPLStatements(scenario)
  const totalCapital = INVESTMENT_RETURNS.totalCapitalRequired

  let cumulative = 0
  const yearlyReturns = scenarioPL.map((pl, i) => {
    cumulative += pl.netIncome
    return {
      year: pl.year,
      totalInvestment: totalCapital,
      annualNetIncome: pl.netIncome,
      cumulativeNetIncome: cumulative,
      roiCumulative: cumulative / totalCapital,
      roiAnnualized: cumulative / totalCapital / (i + 1),
    }
  })

  const discountedCF = (rate: number) =>
    scenarioPL.reduce((npv, pl, i) => npv + pl.netIncome / Math.pow(1 + rate, i + 1), -totalCapital)

  return {
    ...INVESTMENT_RETURNS,
    yearlyReturns,
    npv: {
      rate10: Math.round(discountedCF(0.10)),
      rate12: Math.round(discountedCF(0.12)),
      rate15: Math.round(discountedCF(0.15)),
    },
  }
}

// Format helpers
export function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`
  }
  return `$${value.toLocaleString()}`
}

export function formatCurrencyFull(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatPercent(value: number): string {
  const pct = value * 100
  // Show decimals for values like 78%, round for clean values
  return pct % 1 === 0 ? `${pct.toFixed(0)}%` : `${pct.toFixed(1)}%`
}

export function formatMultiple(value: number): string {
  return `${value.toFixed(1)}x`
}
