'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin, Building2, Bed, Users, TreePine } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'
import { ScenarioToggle } from '@/components/financial'
import { getProperties, formatCurrency, formatCurrencyFull } from '@/lib/sheets'

export default function PropertiesPage() {
  const properties = getProperties()
  const property = properties[0]

  return (
    <div className="min-h-screen bg-canvas pt-20">
      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
                Tulum, Quintana Roo
              </p>
              <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-3">
                {property.name}
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl">
                A 45,000 m² jungle compound across 9 lots in Tulum's premier wellness corridor.
                15 casitas operational at launch, expanding to 60 over 5 years.
              </p>
            </div>
            <ScenarioToggle />
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary-600 mb-2">
                <Bed className="w-5 h-5" />
              </div>
              <p className="font-heading text-3xl text-neutral-900">60</p>
              <p className="text-sm text-neutral-500">Total Casitas (Full Build)</p>
              <p className="text-xs text-neutral-400 mt-1">15 at launch → 60 by Year 5</p>
            </Card>
            <Card className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary-600 mb-2">
                <Users className="w-5 h-5" />
              </div>
              <p className="font-heading text-3xl text-neutral-900">1,280</p>
              <p className="text-sm text-neutral-500">Guests/Year</p>
              <p className="text-xs text-neutral-400 mt-1">At 80% occupancy (Year 5)</p>
            </Card>
            <Card className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary-600 mb-2">
                <TreePine className="w-5 h-5" />
              </div>
              <p className="font-heading text-3xl text-neutral-900">45,000</p>
              <p className="text-sm text-neutral-500">m² Compound</p>
              <p className="text-xs text-neutral-400 mt-1">9 lots, jungle setting</p>
            </Card>
            <Card className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary-600 mb-2">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="font-heading text-3xl text-neutral-900">{property.score}/100</p>
              <p className="text-sm text-neutral-500">Property Score</p>
              <p className="text-xs text-neutral-400 mt-1">Evaluation matrix</p>
            </Card>
          </div>
        </section>

        {/* Property Highlights */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-r from-primary-800 to-primary-900 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="font-accent text-sm uppercase tracking-widest text-secondary-400 mb-2">
                  Lead Property
                </p>
                <h3 className="text-3xl font-heading text-secondary-400 mb-2">{property.name}</h3>
                <p className="text-primary-200 max-w-xl">
                  A phased development opportunity: 15 casitas operational at launch, expanding
                  to 60 over 5 years. Expansion funded from operating cash flow. Total seed investment
                  of {formatCurrency(16823500)} for acquisition, build-out, and technology.
                </p>
              </div>
              <Link href={`/properties/${property.id}`}>
                <Button variant="accent" size="lg">
                  View Full Details
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </Card>
        </section>

        {/* Phased Build-Out */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Casita Expansion Plan</h3>
          <p className="text-neutral-600 mb-6">
            Expanding from 30 to 60 casitas over 5 years, funded entirely from operating cash flow, no additional equity raise required.
          </p>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { year: 'Year 1', start: 15, add: '+15', end: 30, occ: '60%', guests: '~387' },
              { year: 'Year 2', start: 30, add: '+10', end: 40, occ: '75%', guests: '~737' },
              { year: 'Year 3', start: 40, add: '+8', end: 48, occ: '80%', guests: '~988' },
              { year: 'Year 4', start: 48, add: '+6', end: 54, occ: '80%', guests: '~1,145' },
              { year: 'Year 5', start: 54, add: '+6', end: 60, occ: '80%', guests: '~1,280' },
            ].map((phase, index) => (
              <Card key={phase.year} padding="lg" className={index === 4 ? 'bg-primary-50' : ''}>
                <p className="font-accent text-sm uppercase tracking-widest text-primary-600 mb-2">{phase.year}</p>
                <p className="font-heading text-3xl text-neutral-900 mb-1">{phase.end} Casitas</p>
                <p className="text-sm text-secondary-500 font-medium mb-2">{phase.add} added</p>
                <div className="space-y-1 text-sm text-neutral-600">
                  <p>{phase.occ} occupancy</p>
                  <p>{phase.guests} guests/yr</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Financial Summary */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Investment Overview</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card padding="lg">
              <h4 className="font-heading text-lg text-neutral-900 mb-4">Capital Allocation</h4>
              <div className="space-y-3">
                {[
                  { label: 'Property Acquisition', value: '$11,900,000', pct: '70.7%' },
                  { label: 'Working Capital', value: '$1,126,000', pct: '6.7%' },
                  { label: 'Renovation & Conversion', value: '$1,000,000', pct: '5.9%' },
                  { label: 'Medical + Biohacking', value: '$1,000,000', pct: '5.9%' },
                  { label: 'Contingency', value: '$847,500', pct: '5.0%' },
                  { label: 'Technology', value: '$750,000', pct: '4.5%' },
                  { label: 'Pre-Opening', value: '$200,000', pct: '1.2%' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-0">
                    <span className="text-neutral-700">{item.label}</span>
                    <div className="text-right">
                      <span className="font-medium text-neutral-900">{item.value}</span>
                      <span className="text-xs text-neutral-400 ml-2">{item.pct}</span>
                    </div>
                  </div>
                ))}
                <div className="pt-3 border-t-2 border-primary-800">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-neutral-900">Total Investment</span>
                    <span className="font-heading text-2xl text-primary-800">$16,823,500</span>
                  </div>
                </div>
              </div>
            </Card>
            <Card padding="lg">
              <h4 className="font-heading text-lg text-neutral-900 mb-4">Financial Projections</h4>
              <div className="space-y-3">
                {[
                  { label: 'Year 1 Net Income', value: '$2.8M' },
                  { label: 'Year 2 Net Income', value: '$7.5M' },
                  { label: 'Year 3-5 Net Income', value: '$12.6M avg/yr' },
                  { label: '5-Year Net Income', value: '$48.1M' },
                  { label: 'Y5 Enterprise Value', value: '$194.9M' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-0">
                    <span className="text-neutral-700">{item.label}</span>
                    <span className="font-medium text-neutral-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Evaluation Criteria Summary */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Evaluation Criteria</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Location & Access',
                weight: '25%',
                criteria: ['Airport proximity', 'Medical facility access', 'Privacy & security', 'Natural setting'],
              },
              {
                title: 'Physical Infrastructure',
                weight: '35%',
                criteria: ['Treatment room capacity', 'Medical-grade conversion', 'Guest amenities', 'Expansion potential'],
              },
              {
                title: 'Financial Viability',
                weight: '40%',
                criteria: ['Acquisition cost', 'Renovation budget', 'Revenue potential', 'Operating efficiency'],
              },
            ].map((category) => (
              <Card key={category.title} padding="lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-neutral-900">{category.title}</h4>
                  <span className="font-accent text-sm text-primary-600">{category.weight}</span>
                </div>
                <ul className="space-y-2">
                  {category.criteria.map((criterion) => (
                    <li key={criterion} className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-400" />
                      {criterion}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Location Map */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-2">Location</h3>
          <p className="text-neutral-600 mb-6">
            Calle Perico Lts 79-80, Av Las Palmas, Akumal, Tulum, Q.R. 77776, Mexico
          </p>
          <Card padding="none" className="overflow-hidden">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1zWdhsKxu79V9pHnFDfXNA3M_48-rPUw&ll=20.46140448887278,-87.2875594&z=18"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rancho Paraiso Oasis - Master Overview Map"
            />
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/expansion" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Expansion</span>
          </Link>
          <Link href="/technology">
            <Button variant="primary">
              The Platform
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
