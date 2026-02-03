'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Globe, MapPin, Building2, TrendingUp, Users, CheckCircle2, Home } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'

const CASITA_PHASES = [
  { year: 'Year 1', start: 15, add: '+15', end: 30, occ: '60%', guests: '~387', revenue: '$10.3M' },
  { year: 'Year 2', start: 30, add: '+10', end: 40, occ: '75%', guests: '~737', revenue: '$19.6M' },
  { year: 'Year 3', start: 40, add: '+8', end: 48, occ: '80%', guests: '~988', revenue: '$26.3M' },
  { year: 'Year 4', start: 48, add: '+6', end: 54, occ: '80%', guests: '~1,145', revenue: '$30.5M' },
  { year: 'Year 5', start: 54, add: '+6', end: 60, occ: '80%', guests: '~1,280', revenue: '$34.0M' },
]

const EXPANSION_LOCATIONS = [
  {
    region: 'Caribbean',
    locations: [
      { name: 'Jamaica', status: 'High Potential', notes: 'Legal psilocybin, growing wellness tourism' },
      { name: 'St. Kitts', status: 'Evaluating', notes: 'Investor-friendly, citizenship by investment' },
    ],
  },
  {
    region: 'Central America',
    locations: [
      { name: 'Costa Rica', status: 'High Potential', notes: 'Established wellness destination, ayahuasca legal' },
      { name: 'Guatemala', status: 'Evaluating', notes: 'Lake Atitlan wellness hub emerging' },
    ],
  },
  {
    region: 'Europe',
    locations: [
      { name: 'Portugal', status: 'Long-term', notes: 'Decriminalized, progressive drug policy' },
      { name: 'Netherlands', status: 'Long-term', notes: 'Legal psilocybin truffles, established market' },
    ],
  },
  {
    region: 'Asia-Pacific',
    locations: [
      { name: 'Australia', status: 'Watching', notes: 'Recently approved MDMA/psilocybin prescribing' },
      { name: 'Thailand', status: 'Evaluating', notes: 'Liberalizing psychedelic policy' },
    ],
  },
]

const EXPANSION_CRITERIA = [
  { criterion: 'Legal framework for treatments', weight: 'Critical' },
  { criterion: 'Accessibility from US', weight: 'High' },
  { criterion: 'Existing wellness infrastructure', weight: 'High' },
  { criterion: 'Real estate availability', weight: 'Medium' },
  { criterion: 'Local talent pool', weight: 'Medium' },
  { criterion: 'Political/economic stability', weight: 'High' },
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
            Three growth engines: campus expansion (30 → 60 casitas), villa real estate (36 villas),
            and global platform replication — each building on the last.
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
                <h3 className="text-2xl font-heading mb-4">Campus Expansion: 30 → 60 Casitas</h3>
                <p className="text-primary-200 mb-6">
                  Double treatment capacity over 5 years, funded entirely from operating cash flow.
                  No additional equity raise required. Each casita costs ~$200-250K to build, with
                  the full expansion totaling ~$6-7.5M.
                </p>
                <div className="space-y-3">
                  {[
                    'Funded from operating cash flow — no dilution',
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
                <h3 className="text-3xl font-heading mb-4">Villa Collection: 36 Luxury Villas</h3>
                <p className="text-primary-800 mb-6">
                  A buyer-funded condo-hotel program generating $72M in total villa sales revenue.
                  Deposits fund construction with minimal capital requirement from the company.
                  Ongoing 25% management fees create a recurring revenue stream.
                </p>
                <div className="space-y-3">
                  {[
                    'Buyer-funded construction — low capital requirement',
                    'Development/facilitation fees: 10-15% of sales (~$9M)',
                    'Management fees: 25% of rental revenue (~$1.3M/yr)',
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
                  { value: '36', label: 'Total Villas', sublabel: '3 tiers: Studio, Garden, Estate' },
                  { value: '$72M', label: 'Total Sales', sublabel: 'Buyer-funded builds' },
                  { value: '$9M+', label: 'Dev Fees', sublabel: '10-15% of sales' },
                  { value: '$1.3M', label: 'Mgmt Fees/Yr', sublabel: 'At full operations' },
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

        {/* ─── GLOBAL EXPANSION VISION ────────────────────────────── */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
              Growth Engine 3
            </p>
            <h3 className="text-2xl font-heading text-neutral-900">Global Platform Expansion</h3>
            <p className="text-neutral-600 max-w-2xl mx-auto mt-2">
              Once proven in Tulum with 60 casitas and 36 villas, our model can be replicated
              across multiple jurisdictions, creating a global network of transformation centers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { phase: 'Phase 1', period: '2026-2028', focus: 'Tulum flagship', details: 'Prove model, expand to 60 casitas, launch villa program, build brand' },
              { phase: 'Phase 2', period: '2028-2029', focus: 'Second location', details: 'Expand to Caribbean or Central America leveraging proven playbook' },
              { phase: 'Phase 3', period: '2029-2031', focus: 'Platform scale', details: 'Multi-location network, potential US entry, 10-12x exit multiple' },
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

        {/* Target Regions */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Target Expansion Regions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {EXPANSION_LOCATIONS.map((region) => (
              <Card key={region.region} padding="lg">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-primary-600" />
                  <h4 className="text-lg font-heading text-neutral-900">{region.region}</h4>
                </div>
                <div className="space-y-4">
                  {region.locations.map((location) => (
                    <div key={location.name} className="flex items-start gap-3 pl-9">
                      <MapPin className="w-4 h-4 text-neutral-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-neutral-900">{location.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            location.status === 'High Potential' ? 'bg-success-100 text-success-700' :
                            location.status === 'Evaluating' ? 'bg-warning-100 text-warning-700' :
                            'bg-neutral-100 text-neutral-600'
                          }`}>
                            {location.status}
                          </span>
                        </div>
                        <p className="text-sm text-neutral-500">{location.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Expansion Criteria */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-heading text-neutral-900 mb-6">Location Selection Criteria</h3>
              <Card padding="lg">
                <div className="space-y-4">
                  {EXPANSION_CRITERIA.map((item) => (
                    <div key={item.criterion} className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0">
                      <span className="text-neutral-700">{item.criterion}</span>
                      <span className={`text-xs px-2 py-1 rounded font-medium ${
                        item.weight === 'Critical' ? 'bg-error-100 text-error-700' :
                        item.weight === 'High' ? 'bg-warning-100 text-warning-700' :
                        'bg-neutral-100 text-neutral-600'
                      }`}>
                        {item.weight}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-heading text-neutral-900 mb-6">US Market Opportunity</h3>
              <Card padding="lg" className="bg-neutral-100">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-primary-600" />
                  <div>
                    <h4 className="font-medium text-neutral-900">Watching US Regulatory Progress</h4>
                    <p className="text-sm text-neutral-500">Position for domestic expansion</p>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4">
                  We are closely monitoring US regulatory developments. MDMA and psilocybin are on
                  track for FDA approval, potentially enabling US-based treatment centers within our
                  investment horizon.
                </p>
                <div className="space-y-2">
                  {[
                    'Oregon: Psilocybin services legal (2023)',
                    'Colorado: Psilocybin decriminalized (2024)',
                    'FDA: MDMA approval expected 2024-2025',
                    'FDA: Psilocybin approval expected 2025-2026',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-neutral-700">
                      <TrendingUp className="w-4 h-4 text-success-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Platform Value */}
        <section className="mb-16">
          <Card padding="lg" className="bg-primary-800 text-white">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-heading mb-6">Building Platform Value</h3>
              <p className="text-lg text-primary-200 mb-8">
                Multi-location platforms command significant premiums at exit. A proven 60-casita
                campus with 36-villa program establishes the playbook for global replication.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: 'Single Campus', multiple: '6-8x EBITDA', type: '60 casitas + villas' },
                  { title: 'Regional Platform', multiple: '8-10x EBITDA', type: '2-3 locations' },
                  { title: 'Global Platform', multiple: '10-12x EBITDA', type: '4+ locations' },
                ].map((item) => (
                  <div key={item.title} className="bg-primary-700/50 rounded-lg p-4">
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="font-heading text-2xl text-secondary-400 mb-1">{item.multiple}</p>
                    <p className="text-sm text-primary-300">{item.type}</p>
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
