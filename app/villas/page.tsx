'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Home, Users, DollarSign, Calendar, CheckCircle2, Building2, MapPin, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'

const VILLA_TIERS = [
  {
    name: 'Studio Villa',
    priceRange: '$1M - $1.5M',
    beds: '1 Bedroom',
    sqft: '1,200 - 1,500 sq ft',
    count: 12,
    features: ['Open-plan living', 'Private terrace', 'Jungle views', 'Plunge pool'],
    color: 'bg-primary-600',
  },
  {
    name: 'Garden Villa',
    priceRange: '$1.5M - $2.5M',
    beds: '2 Bedrooms',
    sqft: '1,800 - 2,400 sq ft',
    count: 16,
    features: ['Wraparound garden', 'Private pool', 'Chef\'s kitchen', 'Meditation space'],
    color: 'bg-secondary-500',
  },
  {
    name: 'Estate Villa',
    priceRange: '$2.5M - $3M',
    beds: '3 Bedrooms',
    sqft: '2,800 - 3,500 sq ft',
    count: 8,
    features: ['Multi-level design', 'Infinity pool', 'Entertainment pavilion', 'Rooftop terrace'],
    color: 'bg-primary-800',
  },
]

const VILLA_PHASING = [
  { year: 'Year 1', sold: 6, built: 4, salesRevenue: '$12M' },
  { year: 'Year 2', sold: 10, built: 12, salesRevenue: '$20M' },
  { year: 'Year 3', sold: 12, built: 24, salesRevenue: '$24M' },
  { year: 'Year 4', sold: 8, built: 36, salesRevenue: '$16M' },
  { year: 'Year 5', sold: 0, built: 36, salesRevenue: '$0' },
]

const REVENUE_PROJECTIONS = [
  { year: 'Year 1', devFees: '$1.5M', mgmtFees: '$0.1M', totalFees: '$1.6M' },
  { year: 'Year 2', devFees: '$2.5M', mgmtFees: '$0.3M', totalFees: '$2.8M' },
  { year: 'Year 3', devFees: '$3.0M', mgmtFees: '$0.7M', totalFees: '$3.7M' },
  { year: 'Year 4', devFees: '$2.0M', mgmtFees: '$1.0M', totalFees: '$3.0M' },
  { year: 'Year 5', devFees: '$0', mgmtFees: '$1.3M', totalFees: '$1.3M' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export default function VillasPage() {
  return (
    <div className="min-h-screen bg-canvas pt-20">
      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* ─── HERO ───────────────────────────────────────────────── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-16 text-center"
        >
          <motion.p variants={fadeUp} className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            Real Estate Opportunity
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
            Villa Collection at Transformational Epicenter
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-neutral-600 max-w-3xl mx-auto">
            36 luxury villas integrated into the healing campus — a buyer-funded condo-hotel
            program generating development fees and recurring management income.
          </motion.p>
        </motion.section>

        {/* ─── OPPORTUNITY STATS ──────────────────────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Home, value: '36', label: 'Luxury Villas', sublabel: '3 tiers available' },
              { icon: DollarSign, value: '$72M', label: 'Total Villa Sales', sublabel: '$1M - $3M each' },
              { icon: TrendingUp, value: '25%', label: 'Management Fee', sublabel: 'Of rental revenue' },
              { icon: Calendar, value: '$1.3M/yr', label: 'Recurring Income', sublabel: 'At full operations' },
            ].map((stat, index) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <Card padding="lg" className="text-center h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <p className="font-heading text-3xl text-neutral-900 mb-1">{stat.value}</p>
                  <p className="text-sm font-medium text-neutral-700">{stat.label}</p>
                  <p className="text-xs text-neutral-400 mt-1">{stat.sublabel}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ─── VILLA TIERS ───────────────────────────────────────── */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
              Villa Collection
            </p>
            <h3 className="text-3xl font-heading text-neutral-900">Three Tiers of Luxury</h3>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {VILLA_TIERS.map((tier) => (
              <motion.div key={tier.name} variants={fadeUp}>
                <Card padding="lg" className="h-full relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className={`absolute top-0 left-0 right-0 h-1 ${tier.color}`} />
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-heading text-neutral-900">{tier.name}</h4>
                      <span className="text-xs font-accent uppercase tracking-wide px-2 py-1 bg-neutral-100 text-neutral-600 rounded">
                        {tier.count} units
                      </span>
                    </div>
                    <p className="font-heading text-2xl text-primary-600 mb-1">{tier.priceRange}</p>
                    <div className="flex gap-4 text-sm text-neutral-500">
                      <span>{tier.beds}</span>
                      <span>{tier.sqft}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-neutral-200">
                    <p className="text-xs font-accent uppercase tracking-wide text-neutral-500 mb-3">Features</p>
                    <ul className="space-y-2">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-neutral-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ─── BUILD-OUT TIMELINE ─────────────────────────────────── */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Villa Build-Out Timeline</h3>
          <Card padding="lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-neutral-200">
                    <th className="text-left py-3 pr-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Year</th>
                    <th className="text-center py-3 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Villas Sold</th>
                    <th className="text-center py-3 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Built & Operational</th>
                    <th className="text-right py-3 pl-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Sales Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {VILLA_PHASING.map((phase, index) => (
                    <tr
                      key={phase.year}
                      className={`border-b border-neutral-100 ${
                        index === 3 ? 'bg-primary-50' : ''
                      }`}
                    >
                      <td className="py-3 pr-4 font-medium text-neutral-900">{phase.year}</td>
                      <td className="py-3 px-4 text-center text-neutral-600">{phase.sold}</td>
                      <td className="py-3 px-4 text-center font-heading text-lg text-neutral-900">{phase.built}</td>
                      <td className="py-3 pl-4 text-right font-medium text-primary-600">{phase.salesRevenue}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-neutral-300">
                    <td className="py-3 pr-4 font-medium text-neutral-900">Total</td>
                    <td className="py-3 px-4 text-center font-medium text-neutral-900">36</td>
                    <td className="py-3 px-4 text-center font-heading text-lg text-neutral-900">36</td>
                    <td className="py-3 pl-4 text-right font-heading text-lg text-primary-800">$72M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* ─── CONDO-HOTEL MODEL ──────────────────────────────────── */}
        <section className="mb-16">
          <Card padding="lg" className="bg-primary-800 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-accent text-sm uppercase tracking-widest text-secondary-400 mb-2">
                  How It Works
                </p>
                <h3 className="text-2xl font-heading mb-4">Condo-Hotel Model</h3>
                <p className="text-primary-200 mb-6">
                  Villa owners purchase their unit and place it in a professionally managed rental
                  pool when not personally using it. This creates a win-win: owners get a turnkey
                  investment property, and Transformational Epicenter earns recurring management fees.
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'Buyer purchases villa', detail: '$1M - $3M, deposits fund construction' },
                    { label: 'Villa enters rental pool', detail: 'Managed by Transformational Epicenter team' },
                    { label: 'Revenue split: 75/25', detail: '75% to villa owner, 25% management fee' },
                    { label: 'Owner personal use', detail: 'Blocked dates for owner stays, flexible scheduling' },
                  ].map((step, index) => (
                    <div key={step.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-400 text-primary-900 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-white">{step.label}</p>
                        <p className="text-sm text-primary-300">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-heading text-xl text-secondary-400 mb-4">Buyer Benefits</h4>
                <div className="space-y-3">
                  {[
                    'Turnkey luxury property in Tulum wellness corridor',
                    'Professional management — no landlord hassle',
                    'Access to campus amenities and healing programs',
                    'Rental income from growing wellness tourism market',
                    'Potential property appreciation in premium location',
                    'Personal use for retreats and vacations',
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                      <span className="text-primary-100 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* ─── REVENUE PROJECTIONS ────────────────────────────────── */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Villa Fee Income Projections</h3>
          <Card padding="lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-neutral-200">
                    <th className="text-left py-3 pr-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Year</th>
                    <th className="text-right py-3 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Dev/Facilitation Fees</th>
                    <th className="text-right py-3 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Management Fees</th>
                    <th className="text-right py-3 pl-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Total Fee Income</th>
                  </tr>
                </thead>
                <tbody>
                  {REVENUE_PROJECTIONS.map((year, index) => (
                    <tr
                      key={year.year}
                      className={`border-b border-neutral-100 ${
                        index === REVENUE_PROJECTIONS.length - 1 ? 'bg-primary-50' : ''
                      }`}
                    >
                      <td className="py-3 pr-4 font-medium text-neutral-900">{year.year}</td>
                      <td className="py-3 px-4 text-right text-neutral-600">{year.devFees}</td>
                      <td className="py-3 px-4 text-right text-neutral-600">{year.mgmtFees}</td>
                      <td className="py-3 pl-4 text-right font-medium text-primary-600">{year.totalFees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-neutral-500 mt-4">
              Development fees based on 10-15% of villa sales. Management fees at 25% of rental revenue,
              growing as more villas become operational. Year 5+ management fees are fully recurring.
            </p>
          </Card>
        </section>

        {/* ─── LOCATION & LIFESTYLE ──────────────────────────────── */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-accent text-sm uppercase tracking-widest text-primary-700 mb-2">
                  Location & Lifestyle
                </p>
                <h3 className="text-3xl font-heading mb-4">Integrated Campus Living</h3>
                <p className="text-primary-800 mb-6">
                  Villa owners become part of the Transformational Epicenter community, with
                  access to the full campus amenities and healing programs. Located in Tulum's
                  premier wellness corridor — one of the world's fastest-growing luxury
                  real estate markets.
                </p>
                <div className="space-y-3">
                  {[
                    'Shared campus amenities: pool, spa, restaurant, gym',
                    'Access to bio-optimization and wellness programs',
                    'Tulum: 30%+ annual property appreciation',
                    'Privacy within a curated healing community',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary-700 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '45,000', label: 'm² Campus', sublabel: '9 lots, jungle setting' },
                  { value: '36', label: 'Villas', sublabel: 'Studio, Garden, Estate' },
                  { value: '60', label: 'Casitas', sublabel: 'Treatment capacity' },
                  { value: 'Tulum', label: 'Q.R., Mexico', sublabel: 'Wellness corridor' },
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

        {/* ─── CTA ───────────────────────────────────────────────── */}
        <section className="mb-16">
          <Card padding="lg" className="bg-primary-800 text-white text-center">
            <Building2 className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
            <h3 className="text-2xl font-heading mb-4">Interested in Villa Ownership?</h3>
            <p className="text-primary-200 max-w-2xl mx-auto mb-8">
              Join a select community of wellness-minded individuals investing in luxury
              real estate within the Transformational Epicenter campus. Contact our team
              for villa availability, pricing, and reservation details.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/invest">
                <Button variant="accent" size="lg">
                  Investment Inquiry
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/expansion">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-primary-800"
                >
                  View Growth Strategy
                </Button>
              </Link>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/properties/rancho-paraiso-oasis" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">The Property</span>
          </Link>
          <Link href="/expansion">
            <Button variant="primary">
              Growth Strategy
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
