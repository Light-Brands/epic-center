'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, LayoutGrid, Table2, MapPin, Building2 } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'
import { ScenarioToggle, ScenarioIndicator } from '@/components/financial'
import { PropertyGrid, ComparisonMatrix } from '@/components/property'
import { getProperties, getTotalPropertyValue, formatCurrency } from '@/lib/sheets'

type ViewMode = 'grid' | 'table'

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const properties = getProperties()
  const totalValue = getTotalPropertyValue()

  const shortlisted = properties.filter((p) => p.status === 'SHORTLIST')
  const onHold = properties.filter((p) => p.status === 'HOLD')

  return (
    <div className="min-h-screen bg-canvas pt-20">
      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
                Quintana Roo, Mexico
              </p>
              <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-3">
                Evaluated Properties
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl">
                Four carefully vetted properties in Mexico's premier wellness corridor,
                each scored against our 100-point evaluation matrix.
              </p>
            </div>
            <ScenarioToggle />
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary-600 mb-2">
                <Building2 className="w-5 h-5" />
              </div>
              <p className="font-heading text-3xl text-neutral-900">{properties.length}</p>
              <p className="text-sm text-neutral-500">Properties</p>
            </Card>
            <Card className="text-center">
              <div className="flex items-center justify-center gap-2 text-success-600 mb-2">
                <span className="w-3 h-3 rounded-full bg-success-500" />
              </div>
              <p className="font-heading text-3xl text-neutral-900">{shortlisted.length}</p>
              <p className="text-sm text-neutral-500">Shortlisted</p>
            </Card>
            <Card className="text-center">
              <div className="flex items-center justify-center gap-2 text-warning-600 mb-2">
                <span className="w-3 h-3 rounded-full bg-warning-500" />
              </div>
              <p className="font-heading text-3xl text-neutral-900">{onHold.length}</p>
              <p className="text-sm text-neutral-500">On Hold</p>
            </Card>
            <Card className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary-600 mb-2">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="font-heading text-3xl text-neutral-900">{formatCurrency(totalValue)}</p>
              <p className="text-sm text-neutral-500">Total Value</p>
            </Card>
          </div>
        </section>

        {/* View Toggle */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-heading text-neutral-900">All Properties</h3>
          <div className="flex items-center gap-2 bg-neutral-200 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-primary-800 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-800'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="text-sm font-medium">Grid</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                viewMode === 'table'
                  ? 'bg-white text-primary-800 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-800'
              }`}
            >
              <Table2 className="w-4 h-4" />
              <span className="text-sm font-medium">Compare</span>
            </button>
          </div>
        </div>

        {/* Properties Display */}
        <section className="mb-16">
          {viewMode === 'grid' ? (
            <PropertyGrid properties={properties} columns={2} />
          ) : (
            <Card padding="lg">
              <ComparisonMatrix properties={properties} />
            </Card>
          )}
        </section>

        {/* Lead Property Highlight */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-r from-primary-800 to-primary-900 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="font-accent text-sm uppercase tracking-widest text-secondary-400 mb-2">
                  Lead Property
                </p>
                <h3 className="text-3xl font-heading text-secondary-400 mb-2">Hotel Alea Tulum</h3>
                <p className="text-primary-200 max-w-xl">
                  Our primary acquisition target. An operating 21-room boutique hotel in
                  Tulum's prestigious Soliman Bay, scoring 75/100 on our evaluation matrix.
                </p>
              </div>
              <Link href="/properties/hotel-alea-tulum">
                <Button variant="accent" size="lg">
                  View Cut Sheet
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </Card>
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
