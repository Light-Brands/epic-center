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
  'hotel-alea-tulum': [
    { category: 'Location', score: 85, fullMark: 100 },
    { category: 'Infrastructure', score: 70, fullMark: 100 },
    { category: 'Medical Ready', score: 65, fullMark: 100 },
    { category: 'Revenue', score: 80, fullMark: 100 },
    { category: 'Privacy', score: 75, fullMark: 100 },
    { category: 'Expansion', score: 70, fullMark: 100 },
  ],
  'hacienda-caracol': [
    { category: 'Location', score: 90, fullMark: 100 },
    { category: 'Infrastructure', score: 80, fullMark: 100 },
    { category: 'Medical Ready', score: 60, fullMark: 100 },
    { category: 'Revenue', score: 70, fullMark: 100 },
    { category: 'Privacy', score: 85, fullMark: 100 },
    { category: 'Expansion', score: 65, fullMark: 100 },
  ],
  'mini-hotel-cancun': [
    { category: 'Location', score: 75, fullMark: 100 },
    { category: 'Infrastructure', score: 85, fullMark: 100 },
    { category: 'Medical Ready', score: 80, fullMark: 100 },
    { category: 'Revenue', score: 85, fullMark: 100 },
    { category: 'Privacy', score: 70, fullMark: 100 },
    { category: 'Expansion', score: 80, fullMark: 100 },
  ],
  'casa-sueno-de-mar': [
    { category: 'Location', score: 80, fullMark: 100 },
    { category: 'Infrastructure', score: 55, fullMark: 100 },
    { category: 'Medical Ready', score: 50, fullMark: 100 },
    { category: 'Revenue', score: 60, fullMark: 100 },
    { category: 'Privacy', score: 85, fullMark: 100 },
    { category: 'Expansion', score: 55, fullMark: 100 },
  ],
}

export const PROPERTY_GATES: Record<string, PropertyGate[]> = {
  'hotel-alea-tulum': [
    { name: 'Legal Clear Title', status: 'pass', notes: 'Verified through legal counsel' },
    { name: 'Zoning Compliance', status: 'pass', notes: 'Commercial hospitality permitted' },
    { name: 'Medical Infrastructure', status: 'conditional', notes: 'Requires ICU-grade electrical upgrades' },
    { name: 'Emergency Access', status: 'pass', notes: 'Within 15 min of hospital' },
    { name: 'Privacy Requirements', status: 'pass', notes: 'Gated with security protocols' },
    { name: 'Environmental Compliance', status: 'pass', notes: 'SEMARNAT permits in order' },
    { name: 'Structural Integrity', status: 'pass', notes: 'Engineering report satisfactory' },
    { name: 'Water & Utilities', status: 'conditional', notes: 'Backup generator recommended' },
  ],
  'hacienda-caracol': [
    { name: 'Legal Clear Title', status: 'pass', notes: 'Fideicomiso established' },
    { name: 'Zoning Compliance', status: 'conditional', notes: 'May need change of use permit' },
    { name: 'Medical Infrastructure', status: 'conditional', notes: 'Significant conversion required' },
    { name: 'Emergency Access', status: 'pass', notes: 'Air ambulance accessible' },
    { name: 'Privacy Requirements', status: 'pass', notes: 'Exceptional privacy' },
    { name: 'Environmental Compliance', status: 'pass', notes: 'Beach-front permits valid' },
    { name: 'Structural Integrity', status: 'pass', notes: 'Recently renovated' },
    { name: 'Water & Utilities', status: 'pass', notes: 'Full infrastructure in place' },
  ],
  'mini-hotel-cancun': [
    { name: 'Legal Clear Title', status: 'pass', notes: 'Clean ownership record' },
    { name: 'Zoning Compliance', status: 'pass', notes: 'Hotel zone - fully compliant' },
    { name: 'Medical Infrastructure', status: 'pass', notes: 'Near medical district' },
    { name: 'Emergency Access', status: 'pass', notes: 'Hospital within 5 min' },
    { name: 'Privacy Requirements', status: 'conditional', notes: 'Urban location - less private' },
    { name: 'Environmental Compliance', status: 'pass', notes: 'All permits current' },
    { name: 'Structural Integrity', status: 'pass', notes: 'Modern construction' },
    { name: 'Water & Utilities', status: 'pass', notes: 'City infrastructure' },
  ],
  'casa-sueno-de-mar': [
    { name: 'Legal Clear Title', status: 'pass', notes: 'Residential title' },
    { name: 'Zoning Compliance', status: 'fail', notes: 'Residential only - commercial use prohibited' },
    { name: 'Medical Infrastructure', status: 'conditional', notes: 'Full conversion needed' },
    { name: 'Emergency Access', status: 'pass', notes: 'Good road access' },
    { name: 'Privacy Requirements', status: 'pass', notes: 'Gated community' },
    { name: 'Environmental Compliance', status: 'pass', notes: 'Residential permits only' },
    { name: 'Structural Integrity', status: 'pass', notes: 'Well maintained' },
    { name: 'Water & Utilities', status: 'conditional', notes: 'Residential capacity only' },
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
  'hotel-alea-tulum': {
    revenuePotential: { conservative: 5784167, base: 7614215, aggressive: 9497964 },
    renovationCost: 5350000,
    operatingCostPerYear: 4122000,
    projectedIRR: { conservative: 0.23, base: 0.30, aggressive: 0.36 },
    paybackYears: 4,
    guestsPerYear: { conservative: 130, base: 166, aggressive: 205 },
  },
  'hacienda-caracol': {
    revenuePotential: { conservative: 3200000, base: 4200000, aggressive: 5100000 },
    renovationCost: 3200000,
    operatingCostPerYear: 2400000,
    projectedIRR: { conservative: 0.18, base: 0.24, aggressive: 0.29 },
    paybackYears: 5,
    guestsPerYear: { conservative: 65, base: 85, aggressive: 105 },
  },
  'mini-hotel-cancun': {
    revenuePotential: { conservative: 4800000, base: 6300000, aggressive: 7800000 },
    renovationCost: 2200000,
    operatingCostPerYear: 3200000,
    projectedIRR: { conservative: 0.28, base: 0.35, aggressive: 0.42 },
    paybackYears: 3,
    guestsPerYear: { conservative: 120, base: 155, aggressive: 190 },
  },
  'casa-sueno-de-mar': {
    revenuePotential: { conservative: 1800000, base: 2400000, aggressive: 3000000 },
    renovationCost: 2800000,
    operatingCostPerYear: 1600000,
    projectedIRR: { conservative: 0.08, base: 0.12, aggressive: 0.16 },
    paybackYears: 7,
    guestsPerYear: { conservative: 40, base: 55, aggressive: 70 },
  },
}
