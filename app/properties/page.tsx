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
                16 rooms operational today, expanding to 30 by end of 2026.
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
              <p className="font-heading text-3xl text-neutral-900">30</p>
              <p className="text-sm text-neutral-500">Total Rooms (Full Build)</p>
              <p className="text-xs text-neutral-400 mt-1">16 current + 14 expansion</p>
            </Card>
            <Card className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary-600 mb-2">
                <Users className="w-5 h-5" />
              </div>
              <p className="font-heading text-3xl text-neutral-900">659</p>
              <p className="text-sm text-neutral-500">Guests/Year</p>
              <p className="text-xs text-neutral-400 mt-1">At 80% occupancy (stabilized)</p>
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
                  A phased development opportunity: 16 rooms operational now with 14 additional
                  rooms under construction, completing end of 2026. Total investment of {formatCurrency(6150000)} for
                  acquisition plus {formatCurrency(3450000)} for construction and build-out.
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
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Phased Capacity</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card padding="lg">
              <p className="font-accent text-sm uppercase tracking-widest text-primary-600 mb-2">Phase 1 — Current</p>
              <p className="font-heading text-4xl text-neutral-900 mb-2">16 Rooms</p>
              <p className="text-neutral-600">Operational today. Existing structures ready for medical conversion and guest reception.</p>
            </Card>
            <Card padding="lg">
              <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">Phase 2 — Expansion</p>
              <p className="font-heading text-4xl text-neutral-900 mb-2">+14 Rooms</p>
              <p className="text-neutral-600">Under construction, completing by end of 2026. Includes medical suite build-out and treatment rooms.</p>
            </Card>
            <Card padding="lg" className="bg-primary-50">
              <p className="font-accent text-sm uppercase tracking-widest text-primary-800 mb-2">Full Capacity</p>
              <p className="font-heading text-4xl text-primary-800 mb-2">30 Rooms</p>
              <p className="text-primary-700">Full operational capacity from 2027 onward. $2,000/night ADR at 75% target occupancy.</p>
            </Card>
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
                  { label: 'Property Acquisition', value: '$6,150,000', pct: '44.7%' },
                  { label: 'Renovation & Conversion', value: '$4,050,000', pct: '29.4%' },
                  { label: 'Medical Equipment', value: '$750,000', pct: '5.4%' },
                  { label: 'FF&E', value: '$600,000', pct: '4.4%' },
                  { label: 'Working Capital & Reserves', value: '$2,223,500', pct: '16.1%' },
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
                    <span className="font-heading text-2xl text-primary-800">$13,773,500</span>
                  </div>
                </div>
              </div>
            </Card>
            <Card padding="lg">
              <h4 className="font-heading text-lg text-neutral-900 mb-4">Projected Returns</h4>
              <div className="space-y-3">
                {[
                  { label: 'Year 1 Net Income', value: '$5.1M' },
                  { label: 'Year 2 Net Income', value: '$6.9M' },
                  { label: 'Year 3-5 Net Income', value: '$7.2M avg/yr' },
                  { label: '5-Year Net Income', value: '$33.5M' },
                  { label: 'Y5 Enterprise Value', value: '$87.9M' },
                  { label: 'MOIC (Base)', value: '6.69x' },
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

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/expansion" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Expansion</span>
          </Link>
          <Link href="/team">
            <Button variant="primary">
              Meet the Team
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
