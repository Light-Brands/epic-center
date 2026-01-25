'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Globe, MapPin, Building2, TrendingUp, Users, CheckCircle2 } from 'lucide-react'
import { Button, Card } from '@/components/ui'

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

const EXPANSION_TIMELINE = [
  { phase: 'Phase 1', period: '2026-2028', focus: 'Tulum flagship', details: 'Prove model, optimize operations, build brand' },
  { phase: 'Phase 2', period: '2028-2029', focus: 'Second location', details: 'Expand to Caribbean or Central America' },
  { phase: 'Phase 3', period: '2029-2031', focus: 'Platform scale', details: 'Multi-location network, potential US entry' },
]

export default function ExpansionPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            Growth Strategy
          </p>
          <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
            Global Expansion Vision
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Once proven in Tulum, our model can be replicated across multiple
            jurisdictions, creating a global network of transformation centers.
          </p>
        </section>

        {/* Strategy Overview */}
        <section className="mb-16">
          <Card padding="lg" className="bg-primary-800 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-heading mb-4">The Platform Opportunity</h3>
                <p className="text-primary-200 mb-6">
                  Transformational Epicenter is designed from day one as a replicable platform.
                  Standardized protocols, training programs, and technology enable efficient
                  multi-location expansion while maintaining quality and brand consistency.
                </p>
                <div className="space-y-3">
                  {[
                    'Proven playbook from Tulum flagship',
                    'Standardized medical protocols',
                    'Scalable technology infrastructure',
                    'Brand equity enabling premium positioning',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary-400" />
                      <span className="text-primary-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '3+', label: 'Target Locations', sublabel: 'By 2031' },
                  { value: '$50M+', label: 'Platform Revenue', sublabel: 'At scale' },
                  { value: '10x', label: 'Exit Multiple', sublabel: 'Platform premium' },
                  { value: 'Global', label: 'Market Access', sublabel: 'Multi-jurisdiction' },
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

        {/* Expansion Timeline */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Expansion Roadmap</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {EXPANSION_TIMELINE.map((phase, index) => (
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
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-heading mb-6">Building Platform Value</h3>
              <p className="text-lg text-primary-800 mb-8">
                Multi-location platforms command significant premiums at exit. Strategic acquirers
                pay 10-12x EBITDA for proven, scalable healthcare platforms—versus 6-8x for
                single-location operations.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: 'Single Location', multiple: '6-8x EBITDA', type: 'Operating business' },
                  { title: 'Regional Platform', multiple: '8-10x EBITDA', type: '2-3 locations' },
                  { title: 'Global Platform', multiple: '10-12x EBITDA', type: '4+ locations' },
                ].map((item) => (
                  <div key={item.title} className="bg-white/20 rounded-lg p-4">
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="font-heading text-2xl mb-1">{item.multiple}</p>
                    <p className="text-sm text-primary-800">{item.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/model" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Business Model</span>
          </Link>
          <Link href="/properties">
            <Button variant="primary">
              View Properties
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
