// Property scoring and gates data
// This is separated from client components to allow server-side access

export interface PropertyScoreData {
  category: string
  score: number
  fullMark: number
}

export interface PropertyGate {
  name: string
  status: 'pass' | 'fail' | 'conditional'
  notes?: string
}

export const PROPERTY_SCORES: Record<string, PropertyScoreData[]> = {
  'rancho-paraiso-oasis': [
    { category: 'Location', score: 90, fullMark: 100 },
    { category: 'Infrastructure', score: 85, fullMark: 100 },
    { category: 'Medical Ready', score: 80, fullMark: 100 },
    { category: 'Revenue', score: 92, fullMark: 100 },
    { category: 'Privacy', score: 95, fullMark: 100 },
    { category: 'Expansion', score: 90, fullMark: 100 },
  ],
}

export const PROPERTY_GATES: Record<string, PropertyGate[]> = {
  'rancho-paraiso-oasis': [
    { name: 'Legal Clear Title', status: 'pass', notes: 'All 9 lots verified through legal counsel' },
    { name: 'Zoning Compliance', status: 'pass', notes: 'Commercial hospitality permitted' },
    { name: 'Medical Infrastructure', status: 'conditional', notes: 'Medical suite build-out required ($750K budgeted)' },
    { name: 'Emergency Access', status: 'pass', notes: 'Road access to Tulum hospitals' },
    { name: 'Privacy Requirements', status: 'pass', notes: '45,000 m² jungle compound - exceptional privacy' },
    { name: 'Environmental Compliance', status: 'pass', notes: 'SEMARNAT permits in order' },
    { name: 'Structural Integrity', status: 'pass', notes: '16 rooms operational, 14 under construction' },
    { name: 'Water & Utilities', status: 'conditional', notes: 'Backup generator budgeted ($200K)' },
  ],
}

// Property-specific financials
export const PROPERTY_FINANCIALS: Record<string, {
  revenuePotential: { conservative: number; base: number; aggressive: number }
  renovationCost: number
  operatingCostPerYear: number
  projectedIRR: { conservative: number; base: number; aggressive: number }
  paybackYears: number
  guestsPerYear: { conservative: number; base: number; aggressive: number }
}> = {
  'rancho-paraiso-oasis': {
    revenuePotential: { conservative: 14600000, base: 17520000, aggressive: 18620000 },
    renovationCost: 3450000,
    operatingCostPerYear: 3015000,
    projectedIRR: { conservative: 0.25, base: 0.35, aggressive: 0.42 },
    paybackYears: 2,
    guestsPerYear: { conservative: 1095, base: 1251, aggressive: 1329 },
  },
}
