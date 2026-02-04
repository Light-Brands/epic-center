'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Home } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'

const CASITA_PHASES = [
  { year: 'Year 1', start: 15, add: '+15', end: 30, occ: '60%', guests: '~387', revenue: '$10.3M' },
  { year: 'Year 2', start: 30, add: '+10', end: 40, occ: '75%', guests: '~737', revenue: '$19.6M' },
  { year: 'Year 3', start: 40, add: '+8', end: 48, occ: '80%', guests: '~988', revenue: '$26.3M' },
  { year: 'Year 4', start: 48, add: '+6', end: 54, occ: '80%', guests: '~1,145', revenue: '$30.5M' },
  { year: 'Year 5', start: 54, add: '+6', end: 60, occ: '80%', guests: '~1,280', revenue: '$34.0M' },
]


export default function ExpansionPage() {
  return (
    <div className="min-h-screen bg-canvas pt-20">
      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            Growth Strategy
          </p>
          <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
            Layered Growth Strategy
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Two growth engines: campus expansion (15 → 60 casitas) and villa real estate (48 villas) -
            scaling capacity and revenue from a single, world-class facility.
          </p>
        </section>

        {/* ─── LOCAL CAMPUS EXPANSION ─────────────────────────────── */}
        <section className="mb-16">
          <Card padding="lg" className="bg-primary-800 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-accent text-sm uppercase tracking-widest text-secondary-400 mb-2">
                  Growth Engine 1
                </p>
                <h3 className="text-2xl font-heading mb-4">Campus Expansion: 15 → 60 Casitas</h3>
                <p className="text-primary-200 mb-6">
                  Double treatment capacity over 5 years, funded entirely from operating cash flow.
                  No additional equity raise required. Each casita costs ~$200-250K to build, with
                  the full expansion totaling ~$6-7.5M.
                </p>
                <div className="space-y-3">
                  {[
                    'Funded from operating cash flow - no dilution',
                    'Operational leverage: ~1.6x costs for 2x rooms',
                    'Revenue grows from $10.3M → $34.0M over 5 years',
                    'EBITDA margin expands from 42% to 60%',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                      <span className="text-primary-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '60', label: 'Total Casitas', sublabel: 'By Year 5' },
                  { value: '1,280', label: 'Guests/Year', sublabel: 'At full capacity' },
                  { value: '$34M', label: 'Year 5 Revenue', sublabel: 'Base case' },
                  { value: '$120.7M', label: '5-Year Revenue', sublabel: 'Cumulative' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-primary-700/50 rounded-xl p-4 text-center">
                    <p className="font-heading text-2xl text-secondary-400">{stat.value}</p>
                    <p className="text-sm font-medium">{stat.label}</p>
                    <p className="text-xs text-primary-300">{stat.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Casita Phasing Table */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Casita Phasing Plan</h3>
          <Card padding="lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-neutral-200">
                    <th className="text-left py-3 pr-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Year</th>
                    <th className="text-center py-3 px-3 font-accent text-xs uppercase tracking-wide text-neutral-500">Start</th>
                    <th className="text-center py-3 px-3 font-accent text-xs uppercase tracking-wide text-neutral-500">Added</th>
                    <th className="text-center py-3 px-3 font-accent text-xs uppercase tracking-wide text-neutral-500">End</th>
                    <th className="text-center py-3 px-3 font-accent text-xs uppercase tracking-wide text-neutral-500">Occupancy</th>
                    <th className="text-center py-3 px-3 font-accent text-xs uppercase tracking-wide text-neutral-500">Guests</th>
                    <th className="text-right py-3 pl-3 font-accent text-xs uppercase tracking-wide text-neutral-500">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {CASITA_PHASES.map((phase, index) => (
                    <tr
                      key={phase.year}
                      className={`border-b border-neutral-100 ${
                        index === CASITA_PHASES.length - 1 ? 'bg-primary-50' : ''
                      }`}
                    >
                      <td className="py-3 pr-4 font-medium text-neutral-900">{phase.year}</td>
                      <td className="py-3 px-3 text-center text-neutral-600">{phase.start}</td>
                      <td className="py-3 px-3 text-center font-medium text-secondary-600">{phase.add}</td>
                      <td className="py-3 px-3 text-center font-heading text-lg text-neutral-900">{phase.end}</td>
                      <td className="py-3 px-3 text-center text-neutral-600">{phase.occ}</td>
                      <td className="py-3 px-3 text-center text-neutral-600">{phase.guests}</td>
                      <td className="py-3 pl-3 text-right font-medium text-primary-600">{phase.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* ─── VILLA REAL ESTATE OPPORTUNITY ──────────────────────── */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-accent text-sm uppercase tracking-widest text-primary-700 mb-2">
                  Growth Engine 2
                </p>
                <h3 className="text-3xl font-heading mb-4">Villa Collection: 48 Luxury Villas</h3>
                <p className="text-primary-800 mb-6">
                  A buyer-funded condo-hotel program generating $96M in total villa sales revenue.
                  Deposits fund construction with minimal capital requirement from the company.
                  Ongoing 25% management fees create a recurring revenue stream.
                </p>
                <div className="space-y-3">
                  {[
                    'Buyer-funded construction - low capital requirement',
                    'Development/facilitation fees: 10-15% of sales (~$12M)',
                    'Management fees: 25% of rental revenue (~$1.7M/yr)',
                    '$1M - $3M per villa, $2M average',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Home className="w-5 h-5 text-primary-700 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/villas" className="inline-block mt-6">
                  <Button variant="primary">
                    View Villa Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '48', label: 'Total Villas', sublabel: '3 tiers: Studio, Garden, Estate' },
                  { value: '$96M', label: 'Total Sales', sublabel: 'Buyer-funded builds' },
                  { value: '$12M', label: 'Dev Fees', sublabel: '10-15% of sales' },
                  { value: '$1.7M', label: 'Mgmt Fees/Yr', sublabel: 'At full operations' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/20 rounded-lg p-4 text-center">
                    <p className="font-heading text-2xl">{stat.value}</p>
                    <p className="font-medium text-sm">{stat.label}</p>
                    <p className="text-xs text-primary-700">{stat.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* ─── FACILITY GROWTH TIMELINE ──────────────────────────── */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
              Execution Roadmap
            </p>
            <h3 className="text-2xl font-heading text-neutral-900">Phased Facility Growth</h3>
            <p className="text-neutral-600 max-w-2xl mx-auto mt-2">
              A disciplined build-out plan that scales capacity in lockstep with demand,
              funded from operating cash flow after the initial raise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { phase: 'Phase 1', period: '2026-2027', focus: 'Launch & Prove', details: 'Open with 15 casitas, ramp to 30. Establish clinical protocols, build brand, achieve 60% occupancy.' },
              { phase: 'Phase 2', period: '2027-2028', focus: 'Scale Operations', details: 'Expand to 40-48 casitas. Launch villa sales program. Reach 75-80% occupancy and operating profitability.' },
              { phase: 'Phase 3', period: '2029-2030', focus: 'Full Capacity', details: 'Complete 60-casita campus. 48-villa collection in progress. $34M annual revenue at 80% occupancy.' },
            ].map((phase, index) => (
              <Card key={phase.phase} padding="lg" className={index === 0 ? 'border-2 border-primary-600' : ''}>
                {index === 0 && (
                  <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded mb-4">
                    Current Focus
                  </span>
                )}
                <p className="font-accent text-xs uppercase tracking-wide text-neutral-500 mb-1">
                  {phase.period}
                </p>
                <h4 className="text-xl font-heading text-neutral-900 mb-2">{phase.phase}: {phase.focus}</h4>
                <p className="text-neutral-600">{phase.details}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Facility at Full Build-Out */}
        <section className="mb-16">
          <Card padding="lg" className="bg-primary-800 text-white">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-heading mb-6">The Facility at Full Build-Out</h3>
              <p className="text-lg text-primary-200 mb-8">
                A fully built-out 60-casita campus with a 48-villa collection creates a self-reinforcing
                ecosystem - treatment revenue, villa sales, and management fees compounding together.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { value: '60', label: 'Casitas', sublabel: 'Treatment capacity' },
                  { value: '48', label: 'Villas', sublabel: '$96M total sales' },
                  { value: '$34M', label: 'Annual Revenue', sublabel: 'Year 5 base case' },
                  { value: '60%', label: 'EBITDA Margin', sublabel: 'At maturity' },
                ].map((item) => (
                  <div key={item.label} className="bg-primary-700/50 rounded-lg p-4">
                    <p className="font-heading text-2xl text-secondary-400 mb-1">{item.value}</p>
                    <p className="font-medium text-sm">{item.label}</p>
                    <p className="text-xs text-primary-300">{item.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/moat" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Moat</span>
          </Link>
          <Link href="/properties/rancho-paraiso-oasis">
            <Button variant="primary">
              View the Property
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
