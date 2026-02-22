// Google Sheets Configuration
export const SPREADSHEET_ID = '1Z0_N_V2gM-0rpW3IP9oRO12nmj51XwcTV_9R9fNsyWo'

// Sheet names
export const SHEETS = {
  DASHBOARD: 'Dashboard',
  ASSUMPTIONS: 'Assumptions',
  ACQUISITION_COSTS: 'Acquisition Costs',
  REVENUE_MODEL: 'Revenue Model',
  OPERATING_EXPENSES: 'Operating Expenses',
  PL_STATEMENT: 'P&L Statement',
  CASH_FLOW: 'Cash Flow',
  UNIT_ECONOMICS: 'Unit Economics',
  SENSITIVITY: 'Sensitivity',
  INVESTMENT_RETURNS: 'Investment Returns',
  PROPERTY_DATA: 'Property Data',
  VILLA_MODEL: 'Villa Model',
} as const

// Data ranges for each sheet
export const RANGES = {
  DASHBOARD_SUMMARY: 'Dashboard!A1:H30',
  DASHBOARD_METRICS: 'Dashboard!A18:D30',
  PROPERTY_DATA_ALL: 'Property Data!A1:E50',
  REVENUE_MODEL: 'Revenue Model!A1:H40',
  PL_STATEMENT: 'P&L Statement!A1:G50',
  UNIT_ECONOMICS: 'Unit Economics!A1:E50',
  INVESTMENT_RETURNS: 'Investment Returns!A1:F40',
  USE_OF_FUNDS: 'Acquisition Costs!A1:D30',
} as const

// Scenario multipliers for adjusting base values
// Aligned with updated model: Base IRR 78%, MOIC 6.8x (casita phasing 30→60 rooms)
export const SCENARIO_MULTIPLIERS = {
  conservative: {
    revenue: 0.80, // ~$96M vs $120.7M 5-year total
    occupancy: 0.875, // 70% vs 80% steady-state
    irr: 1.000, // 78% vs 78%
    moic: 0.985, // 6.7x vs 6.8x
  },
  base: {
    revenue: 1.0,
    occupancy: 1.0,
    irr: 1.0,
    moic: 1.0,
  },
  aggressive: {
    revenue: 1.10, // ~$133M vs $120.7M 5-year total
    occupancy: 1.063, // 85% vs 80% steady-state
    irr: 1.103, // 86% vs 78%
    moic: 1.485, // 10.1x vs 6.8x
  },
} as const
