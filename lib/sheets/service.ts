import type {
  Scenario,
  Property,
  DashboardMetrics,
  RevenueProjection,
  PLStatement,
  UnitEconomics,
  InvestmentReturns,
  UseOfFunds,
  RevenueChartData,
  ScenarioValue,
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
  return `${(value * 100).toFixed(0)}%`
}

export function formatMultiple(value: number): string {
  return `${value.toFixed(1)}x`
}
