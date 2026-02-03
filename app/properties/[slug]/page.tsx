import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, MapPin, Bed, Users, Building2 } from 'lucide-react'
import { Button, Card, Badge, StatusBadge } from '@/components/ui'
import { Footer } from '@/components/layout'
import { ScenarioToggle } from '@/components/financial'
import { RadarChart } from '@/components/charts/RadarChart'
import { PassFailGates } from '@/components/property/PassFailGates'
import { PropertyFinancialSummary } from '@/components/property/PropertyFinancialSummary'
import {
  getPropertyBySlug,
  getProperties,
  formatCurrency,
  formatCurrencyFull,
  PROPERTY_SCORES,
  PROPERTY_GATES,
} from '@/lib/sheets'

interface PropertyPageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all properties
export async function generateStaticParams() {
  const properties = getProperties()
  return properties.map((property) => ({
    slug: property.id,
  }))
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params
  const property = getPropertyBySlug(slug)

  if (!property) {
    notFound()
  }

  const scores = PROPERTY_SCORES[property.id] || []
  const gates = PROPERTY_GATES[property.id] || []

  return (
    <div className="min-h-screen bg-canvas pt-20">
      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
              {property.imageUrl ? (
                <Image
                  src={property.imageUrl}
                  alt={property.name}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                  <span className="font-heading text-6xl text-primary-600">{property.name.charAt(0)}</span>
                </div>
              )}
              <div className="absolute top-4 left-4">
                <StatusBadge status={property.status} />
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="info">{property.targetMarket}</Badge>
                <span className="text-neutral-400">|</span>
                <span className="font-accent text-sm text-primary-600 font-semibold">
                  Score: {property.score}/100
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-3">
                {property.name}
              </h2>

              <div className="flex items-center gap-2 text-neutral-600 mb-6">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{property.location}</span>
              </div>

              <p className="text-lg text-neutral-600 mb-6">
                {property.propertyType}. {property.currentUse}.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <Card className="text-center py-4">
                  <Bed className="w-5 h-5 mx-auto text-primary-600 mb-2" />
                  <p className="font-heading text-2xl text-neutral-900">{property.capacity.totalRooms}</p>
                  <p className="text-xs text-neutral-500">Total Rooms</p>
                </Card>
                <Card className="text-center py-4">
                  <Users className="w-5 h-5 mx-auto text-primary-600 mb-2" />
                  <p className="font-heading text-2xl text-neutral-900">{property.capacity.treatmentBeds.base}</p>
                  <p className="text-xs text-neutral-500">Treatment Beds</p>
                </Card>
                <Card className="text-center py-4">
                  <Building2 className="w-5 h-5 mx-auto text-primary-600 mb-2" />
                  <p className="font-heading text-2xl text-neutral-900">{property.capacity.maxGuestsPerYear}</p>
                  <p className="text-xs text-neutral-500">Guests/Year</p>
                </Card>
              </div>

              {/* Price */}
              <Card padding="lg" className="bg-primary-800 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary-200 text-sm mb-1">Asking Price</p>
                    <p className="font-heading text-3xl">{formatCurrencyFull(property.acquisition.askingPrice)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary-200 text-sm mb-1">Price per Room</p>
                    <p className="font-heading text-2xl">
                      {formatCurrency(Math.round(property.acquisition.askingPrice / property.capacity.totalRooms))}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Scenario Toggle */}
        <div className="flex justify-center mb-12">
          <ScenarioToggle showDescriptions size="lg" />
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Scoring */}
          <div className="space-y-8">
            {/* Radar Chart */}
            <Card padding="lg">
              <h3 className="text-xl font-heading text-neutral-900 mb-6">Scoring Breakdown</h3>
              <RadarChart data={scores} height={320} />
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-neutral-200">
                {scores.map((score) => (
                  <div key={score.category} className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">{score.category}</span>
                    <span className="font-medium text-neutral-900">{score.score}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Pass/Fail Gates */}
            <Card padding="lg">
              <h3 className="text-xl font-heading text-neutral-900 mb-6">Due Diligence Gates</h3>
              <PassFailGates gates={gates} />
            </Card>
          </div>

          {/* Right Column - Financials */}
          <div>
            <h3 className="text-xl font-heading text-neutral-900 mb-6">Financial Summary</h3>
            <PropertyFinancialSummary property={property} />
          </div>
        </div>

        {/* Capacity by Scenario */}
        <section className="mb-12">
          <Card padding="lg">
            <h3 className="text-xl font-heading text-neutral-900 mb-6">Capacity by Scenario</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-neutral-200">
                    <th className="text-left py-3 pr-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      Metric
                    </th>
                    <th className="text-center py-3 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      Conservative
                    </th>
                    <th className="text-center py-3 px-4 font-accent text-xs uppercase tracking-wide text-primary-600 bg-primary-50 rounded-t">
                      Base
                    </th>
                    <th className="text-center py-3 pl-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      Aggressive
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <td className="py-3 pr-4 text-neutral-700">Treatment Beds</td>
                    <td className="text-center py-3 px-4 text-neutral-600">{property.capacity.treatmentBeds.conservative}</td>
                    <td className="text-center py-3 px-4 font-medium text-primary-800 bg-primary-50">{property.capacity.treatmentBeds.base}</td>
                    <td className="text-center py-3 pl-4 text-neutral-600">{property.capacity.treatmentBeds.aggressive}</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="py-3 pr-4 text-neutral-700">Occupancy Rate</td>
                    <td className="text-center py-3 px-4 text-neutral-600">75%</td>
                    <td className="text-center py-3 px-4 font-medium text-primary-800 bg-primary-50">85%</td>
                    <td className="text-center py-3 pl-4 text-neutral-600">95%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-neutral-700">Annual Guest Capacity</td>
                    <td className="text-center py-3 px-4 text-neutral-600">{Math.round(property.capacity.maxGuestsPerYear * 0.75)}</td>
                    <td className="text-center py-3 px-4 font-medium text-primary-800 bg-primary-50">{property.capacity.maxGuestsPerYear}</td>
                    <td className="text-center py-3 pl-4 text-neutral-600">{Math.round(property.capacity.maxGuestsPerYear * 1.15)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

      </div>

      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* Page Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/properties" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Property Overview</span>
          </Link>
          <Link href="/virtual-tour">
            <Button variant="primary">
              Virtual Tour
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
