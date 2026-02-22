'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Brain,
  Database,
  Shield,
  TrendingUp,
  Activity,
  Layers,
  Globe,
  Heart,
  Scale,
  Server,
  Banknote,
  Home,
} from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { VaultGate } from '@/components/auth/VaultGate'
import { Footer } from '@/components/layout'
import { MetricCard } from '@/components/financial'
import { ScenarioToggle } from '@/components/financial/ScenarioToggle'
import { useScenario, type Scenario } from '@/lib/context/ScenarioContext'
import {
  PABLO_OFFER_PROJECTIONS,
  CASITA_PHASING,
} from '@/lib/sheets/data'
import {
  formatCurrency,
  formatCurrencyFull,
  formatPercent,
} from '@/lib/sheets/service'

const proj = PABLO_OFFER_PROJECTIONS

function fmtM(value: number): string {
  return `$${Math.round(value / 1000000)}M`
}

const SCENARIO_LABELS: Record<Scenario, string> = {
  conservative: 'Conservative',
  base: 'Base',
  aggressive: 'Strong Performance',
}

function OfferContent() {
  const { scenario } = useScenario()
  const y5 = proj.years[4]

  return (
    <div className="min-h-screen bg-canvas pt-28">
      <div className="w-full sm:w-[70vw] mx-auto py-12 px-4 sm:px-0">

        {/* ═══════════════════════════════════════════════════════════
            Section 1 — Hero: "The Offer"
        ═══════════════════════════════════════════════════════════ */}
        <section className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
              Strategic Partnership Proposal
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-neutral-900 mb-6">
              The Offer
            </h1>
            <p className="text-xl text-neutral-600 mb-4">
              A once-in-a-generation opportunity to own 30% of a vertically integrated
              health intelligence platform spanning real estate, clinical operations,
              and proprietary data at the frontier of psychedelic medicine.
            </p>
            <p className="text-lg text-neutral-500 mb-8">
              This is a legacy investment. Not a fund allocation.
            </p>

            {/* Scenario toggle */}
            <div className="flex justify-center">
              <ScenarioToggle size="md" showDescriptions />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <MetricCard
              label="Total Enterprise Value"
              value={fmtM(y5.totalEnterprise[scenario])}
              subtitle="Across 3 entities"
              accent
            />
            <MetricCard
              label="Pablo's 30% Equity"
              value={fmtM(y5.pabloEquity[scenario])}
              subtitle="Combined stake"
              accent
            />
            <MetricCard
              label="5 Year Growth"
              value={`${fmtM(proj.years[0].pabloEquity[scenario])} to ${fmtM(y5.pabloEquity[scenario])}`}
              subtitle="Year 1 to Year 5"
              className="[&_.font-heading]:text-3xl [&_.font-heading]:md:text-4xl [&_.font-heading]:whitespace-nowrap"
            />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            Section 2 — Vision & Purpose
        ═══════════════════════════════════════════════════════════ */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">Vision & Purpose</h2>
          <p className="text-neutral-600 mb-8 max-w-3xl">
            Nicholas and Jason's personal journey through addiction, recovery, and
            radical transformation fuels every dimension of this venture. What began as
            a quest for healing became an architecture for human renewal. Medically
            rigorous, data-driven, and designed to compound in value with every guest served.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Heart, title: 'Medical Ibogaine & Psilocybin', description: 'Evidence-based psychedelic protocols with full cardiac monitoring, medical oversight, and integration therapy.' },
              { icon: Activity, title: 'Biohacking & Bio-Optimization', description: 'Stem cells, NAD+, peptide therapy, IV micronutrient infusions, and precision wellness protocols.' },
              { icon: Layers, title: 'Pre & Post-Care Ecosystem', description: 'Months of preparation and integration creating a continuous care model that compounds clinical outcomes.' },
              { icon: Database, title: 'Longitudinal Data Intelligence', description: 'Every guest generates rich biomarker, neurological, and outcomes data that forms the foundation of a health AI engine.' },
            ].map((pillar) => (
              <Card key={pillar.title} padding="lg">
                <pillar.icon className="w-8 h-8 text-secondary-500 mb-4" />
                <h4 className="font-medium text-neutral-900 mb-2">{pillar.title}</h4>
                <p className="text-sm text-neutral-600">{pillar.description}</p>
              </Card>
            ))}
          </div>

          <Card padding="lg" className="bg-primary-800 text-white text-center">
            <p className="text-lg font-heading">
              "This is not a retreat center. It is a transformational intelligence platform."
            </p>
          </Card>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            Section 3 — AI & Data-Driven Differentiation
        ═══════════════════════════════════════════════════════════ */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">AI & Data-Driven Differentiation</h2>
          <p className="text-neutral-600 mb-8 max-w-3xl">
            Every guest who passes through the Epicenter generates a proprietary dataset
            that no competitor possesses. This data becomes exponentially more valuable
            with scale, powering clinical outcomes, research partnerships, and future AI applications.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card padding="lg">
              <h4 className="font-heading text-lg text-neutral-900 mb-4">Data Collected Per Guest</h4>
              <div className="space-y-2">
                {[
                  'Brain mapping & qEEG (pre/post)',
                  'Full epigenetic panels',
                  'DNA sequencing & pharmacogenomics',
                  'Blood biomarkers (50+ markers)',
                  'HRV & autonomic nervous system',
                  'Cardiac telemetry (continuous)',
                  'Psychometric assessments (validated)',
                  'Sleep architecture analysis',
                  'Gut microbiome profiling',
                  'Inflammatory marker panels',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 shrink-0" />
                    <span className="text-sm text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card padding="lg">
              <h4 className="font-heading text-lg text-neutral-900 mb-4">Tracking & Outcomes Metrics</h4>
              <div className="space-y-2">
                {[
                  'Treatment success ratios by protocol',
                  'Relapse rates at 30/90/180/365 days',
                  'Cognitive improvement scores (qEEG delta)',
                  'Emotional regulation indices',
                  'Physical biomarker recovery curves',
                  'Post-care engagement & compliance',
                  'Long-term wellness trajectory modeling',
                  'Comparative protocol efficacy',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 shrink-0" />
                    <span className="text-sm text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card padding="lg" className="bg-neutral-50 border border-neutral-200 mb-8">
            <p className="text-sm text-neutral-700 mb-4 font-medium">
              Positioning: The Epicenter operates simultaneously as a:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Premium medical clinic',
                'Clinical research platform',
                'Data intelligence company',
                'Future AI engine',
              ].map((role, idx) => (
                <div key={role} className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary-800 text-white text-xs flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-sm text-neutral-800">{role}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Comparable valuations */}
          <h4 className="font-heading text-lg text-neutral-900 mb-4">Comparable Health Data Asset Valuations</h4>
          <Card padding="none" className="overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Company</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Valuation</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Records</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">$/Record</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {[
                    { company: 'Flatiron Health (Roche)', valuation: '$1.9B', records: '~2M', perRecord: '$950' },
                    { company: 'Tempus AI', valuation: '$6.1B', records: '~700K', perRecord: '$8,700' },
                    { company: 'Foundation Medicine', valuation: '$5.3B', records: '~500K', perRecord: '$10,600' },
                    { company: 'Veracyte', valuation: '$3.2B', records: '~300K', perRecord: '$10,700' },
                  ].map((row, i) => (
                    <tr key={row.company} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-4 py-3 text-neutral-800 font-medium">{row.company}</td>
                      <td className="px-4 py-3 text-right text-neutral-700">{row.valuation}</td>
                      <td className="px-4 py-3 text-right text-neutral-700">{row.records}</td>
                      <td className="px-4 py-3 text-right text-secondary-600 font-medium">{row.perRecord}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Dataset accumulation */}
          <h4 className="font-heading text-lg text-neutral-900 mb-4">Dataset Accumulation Projections</h4>
          <Card padding="none" className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider text-neutral-600">Year</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider text-neutral-600">New Guests</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider text-neutral-600">Cumulative Records</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider text-neutral-600">Data Points (Est.)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {proj.years.map((yr, i) => (
                    <tr key={yr.year} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-4 py-3 text-neutral-800 font-medium">Year {yr.year}</td>
                      <td className="px-4 py-3 text-right text-neutral-700">
                        {CASITA_PHASING.years[i].guests.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-right text-neutral-700">
                        {yr.cumulativeGuests.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-right text-secondary-600 font-medium">
                        {(yr.cumulativeGuests * 250).toLocaleString()}+
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            Section 4 — The Three Investment Pillars
        ═══════════════════════════════════════════════════════════ */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">The Three Investment Pillars</h2>
          <p className="text-neutral-600 mb-8 max-w-3xl">
            The Epicenter is structured as three distinct but synergistic entities.
            Pablo receives 30% equity across all three, participating in real asset
            appreciation, operational cash flow, and exponential data value.
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Pillar A: Real Estate */}
            <Card padding="lg" className="border-t-4 border-t-primary-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <p className="text-xs font-accent text-primary-600 uppercase tracking-wider">Entity A</p>
                  <h4 className="font-heading text-lg text-neutral-900">Real Estate</h4>
                </div>
              </div>
              <p className="text-sm text-neutral-600 mb-4">
                Acquisition and appreciation of prime Mexican hospitality real estate
                in Tulum's fastest-growing corridor. 45,000 m² jungle compound with
                existing infrastructure.
              </p>
              <div className="space-y-2 pt-4 border-t border-neutral-100">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Acquisition Cost</span>
                  <span className="text-neutral-800 font-medium">{formatCurrency(12400000)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Y5 Value ({SCENARIO_LABELS[scenario]})</span>
                  <span className="text-neutral-800 font-medium">{formatCurrency(y5.realEstate[scenario])}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Pablo&apos;s 30%</span>
                  <span className="text-secondary-600 font-medium">{formatCurrency(Math.round(y5.realEstate[scenario] * 0.30))}</span>
                </div>
              </div>
            </Card>

            {/* Pillar B: Clinic + Operations + IP */}
            <Card padding="lg" className="border-t-4 border-t-secondary-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary-100 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-secondary-600" />
                </div>
                <div>
                  <p className="text-xs font-accent text-secondary-600 uppercase tracking-wider">Entity B</p>
                  <h4 className="font-heading text-lg text-neutral-900">Clinic + Operations + IP</h4>
                </div>
              </div>
              <p className="text-sm text-neutral-600 mb-4">
                Luxury medical retreat operations, proprietary treatment protocols,
                bio-optimization programs, brand equity, and licensing potential.
                Valued at EBITDA × 5.5x behavioral health multiple.
              </p>
              <div className="space-y-2 pt-4 border-t border-neutral-100">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Y5 EBITDA ({SCENARIO_LABELS[scenario]})</span>
                  <span className="text-neutral-800 font-medium">{formatCurrency(Math.round(y5.clinicOpsIP[scenario] / 5.5))}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Y5 Enterprise ({SCENARIO_LABELS[scenario]})</span>
                  <span className="text-neutral-800 font-medium">{formatCurrency(y5.clinicOpsIP[scenario])}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Pablo&apos;s 30%</span>
                  <span className="text-secondary-600 font-medium">{formatCurrency(Math.round(y5.clinicOpsIP[scenario] * 0.30))}</span>
                </div>
              </div>
            </Card>

            {/* Pillar C: Data + AI */}
            <Card padding="lg" className="border-t-4 border-t-primary-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary-800" />
                </div>
                <div>
                  <p className="text-xs font-accent text-primary-800 uppercase tracking-wider">Entity C</p>
                  <h4 className="font-heading text-lg text-neutral-900">Data + AI + Health Intelligence</h4>
                </div>
              </div>
              <p className="text-sm text-neutral-600 mb-4">
                Proprietary neurological, epigenetic, and biomarker datasets.
                AI-powered treatment optimization, research value, and future
                licensing of predictive health models.
              </p>
              <div className="space-y-2 pt-4 border-t border-neutral-100">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Cumulative Records (Y5)</span>
                  <span className="text-neutral-800 font-medium">{y5.cumulativeGuests.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Y5 Data Value ({SCENARIO_LABELS[scenario]})</span>
                  <span className="text-neutral-800 font-medium">{formatCurrency(y5.dataAI[scenario])}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Pablo&apos;s 30%</span>
                  <span className="text-secondary-600 font-medium">{formatCurrency(Math.round(y5.dataAI[scenario] * 0.30))}</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            Section 5 — Financial Projections (scenario-driven)
        ═══════════════════════════════════════════════════════════ */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">Proposed Equity Offer: Financial Projections</h2>
          <p className="text-neutral-600 mb-8 max-w-3xl">
            Pablo's 30% stake across all three entities. Use the scenario toggle above
            to switch between conservative, base, and strong performance projections.
          </p>

          <Card padding="none" className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Year</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Real Estate</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Clinic/Ops/IP</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Data/AI</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Total Enterprise</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider font-bold">Pablo&apos;s 30%</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {proj.years.map((yr, i) => (
                    <tr key={yr.year} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-4 py-3 text-neutral-800 font-medium">Year {yr.year}</td>
                      <td className="px-4 py-3 text-right text-neutral-700">{formatCurrency(yr.realEstate[scenario])}</td>
                      <td className="px-4 py-3 text-right text-neutral-700">{formatCurrency(yr.clinicOpsIP[scenario])}</td>
                      <td className="px-4 py-3 text-right text-neutral-700">{formatCurrency(yr.dataAI[scenario])}</td>
                      <td className="px-4 py-3 text-right text-neutral-800 font-medium">{formatCurrency(yr.totalEnterprise[scenario])}</td>
                      <td className="px-4 py-3 text-right text-secondary-600 font-bold">{formatCurrency(yr.pabloEquity[scenario])}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Summary cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <Card padding="lg">
              <p className="text-xs font-accent text-neutral-500 uppercase tracking-wider mb-2">Dividend Potential</p>
              <p className="font-heading text-2xl text-neutral-900 mb-2">Y2 Onwards</p>
              <p className="text-sm text-neutral-600">
                Operating cash flow supports annual distributions beginning Year 2,
                with the healing center generating 60%+ EBITDA margins at maturity.
              </p>
            </Card>
            <Card padding="lg">
              <p className="text-xs font-accent text-neutral-500 uppercase tracking-wider mb-2">Exit Scenarios</p>
              <p className="font-heading text-2xl text-neutral-900 mb-2">Year 5 to 7</p>
              <p className="text-sm text-neutral-600">
                Strategic acquisition by behavioral health consolidators, healthcare PE,
                or health data/AI companies. Each entity can exit independently or combined.
              </p>
            </Card>
            <Card padding="lg">
              <p className="text-xs font-accent text-neutral-500 uppercase tracking-wider mb-2">Strategic Acquirers</p>
              <p className="font-heading text-2xl text-neutral-900 mb-2">Multiple Paths</p>
              <p className="text-sm text-neutral-600">
                Hospitality (RE entity), healthcare PE (clinic entity), and
                health tech/pharma (data entity) represent three distinct acquirer pools.
              </p>
            </Card>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            Section 6 — Pre-Care & Post-Care Revenue Multiplier
        ═══════════════════════════════════════════════════════════ */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">Pre-Care & Post-Care as Revenue Multiplier</h2>
          <p className="text-neutral-600 mb-8 max-w-3xl">
            The continuous care model wraps around each guest's treatment with months of
            preparation before arrival and structured integration after departure.
            This extends revenue per guest, improves outcomes, and generates the
            longitudinal data that powers Entity C.
          </p>

          {/* Program tiers */}
          <h4 className="font-heading text-lg text-neutral-900 mb-4">Post-Care Program Tiers</h4>
          <Card padding="none" className="overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider text-neutral-600">Program</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider text-neutral-600">Price</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider text-neutral-600">Enrollment Rate</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider text-neutral-600">Rev / Enrolled Guest</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {proj.careTiers.map((tier, i) => (
                    <tr key={tier.name} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-4 py-3 text-neutral-800 font-medium">{tier.name}</td>
                      <td className="px-4 py-3 text-right text-neutral-700">{formatCurrencyFull(tier.price)}</td>
                      <td className="px-4 py-3 text-right text-neutral-700">{formatPercent(tier.retentionRate)}</td>
                      <td className="px-4 py-3 text-right text-secondary-600 font-medium">{formatCurrencyFull(tier.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* LTV projection */}
          <h4 className="font-heading text-lg text-neutral-900 mb-4">Client Retention & LTV Model</h4>
          <Card padding="none" className="overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider text-neutral-600">Year</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider text-neutral-600">Guests</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider text-neutral-600">3-Mo Enroll (70%)</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider text-neutral-600">6-Mo Enroll (50%)</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider text-neutral-600">Post-Care Rev</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {CASITA_PHASING.years.map((yr, i) => {
                    const threeMonth = Math.round(yr.guests * 0.70)
                    const sixMonth = Math.round(yr.guests * 0.50)
                    const postCareRev = threeMonth * 4500 + sixMonth * 8000
                    return (
                      <tr key={yr.year} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                        <td className="px-4 py-3 text-neutral-800 font-medium">Year {yr.year}</td>
                        <td className="px-4 py-3 text-right text-neutral-700">{yr.guests.toLocaleString()}</td>
                        <td className="px-4 py-3 text-right text-neutral-700">{threeMonth.toLocaleString()}</td>
                        <td className="px-4 py-3 text-right text-neutral-700">{sixMonth.toLocaleString()}</td>
                        <td className="px-4 py-3 text-right text-secondary-600 font-medium">{formatCurrency(postCareRev)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </Card>

          <Card padding="lg" className="bg-primary-50 border border-primary-200">
            <div className="flex items-start gap-3">
              <Database className="w-5 h-5 text-primary-700 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-primary-800 mb-1">Data Compounding Effect</p>
                <p className="text-sm text-primary-700">
                  Every post-care enrollment generates 3 to 12 additional months of longitudinal
                  outcome data per patient, dramatically increasing per-record value and
                  research dataset quality. This is the flywheel. Better data produces better outcomes,
                  which drives higher enrollment, which produces more data.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            Section 7 — Strategic Positioning & Scalability
        ═══════════════════════════════════════════════════════════ */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">Strategic Positioning & Scalability</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card padding="lg">
              <Server className="w-8 h-8 text-primary-700 mb-4" />
              <h4 className="font-medium text-neutral-900 mb-2">Health Infrastructure, Not Hospitality</h4>
              <p className="text-sm text-neutral-600">
                This is not a hotel that offers treatments. It is medical infrastructure
                with a hospitality wrapper. The technology platform, clinical protocols,
                and data architecture are the core value. The real estate is the vehicle.
              </p>
            </Card>
            <Card padding="lg">
              <Scale className="w-8 h-8 text-primary-700 mb-4" />
              <h4 className="font-medium text-neutral-900 mb-2">Licensing Potential</h4>
              <p className="text-sm text-neutral-600">
                Proprietary treatment protocols, technology systems, and the operational
                playbook can be licensed to third-party facilities. Revenue without
                additional real estate or operational risk.
              </p>
            </Card>
            <Card padding="lg">
              <Globe className="w-8 h-8 text-secondary-600 mb-4" />
              <h4 className="font-medium text-neutral-900 mb-2">Multi-Location Model</h4>
              <p className="text-sm text-neutral-600">
                Tulum is location one. The model is designed for replication across
                Costa Rica, Portugal, Thailand, and other jurisdictions with favorable
                regulatory environments for psychedelic-assisted therapy.
              </p>
            </Card>
            <Card padding="lg">
              <TrendingUp className="w-8 h-8 text-secondary-600 mb-4" />
              <h4 className="font-medium text-neutral-900 mb-2">First-Mover Data Advantage</h4>
              <p className="text-sm text-neutral-600">
                No competitor is collecting structured neurological, epigenetic, and
                outcomes data at this scale. By Year 5, the Epicenter's dataset
                will be the largest proprietary psychedelic treatment database in existence.
              </p>
            </Card>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            Section 8 — Risk Mitigation
        ═══════════════════════════════════════════════════════════ */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">Risk Mitigation</h2>
          <p className="text-neutral-600 mb-8 max-w-3xl">
            Every investment carries risk. Here is how the Epicenter's structure
            specifically addresses the five primary risk categories.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Regulatory',
                description: 'Mexico permits ibogaine and psilocybin-assisted therapy under medical supervision. Multi-jurisdiction strategy diversifies regulatory exposure.',
              },
              {
                icon: Activity,
                title: 'Medical',
                description: 'Full cardiac monitoring, ICU-grade equipment, helicopter evacuation protocol. Medical director oversight with licensed physicians on-site 24/7.',
              },
              {
                icon: Database,
                title: 'Data Ethics',
                description: 'HIPAA-equivalent data governance, IRB-style ethics review, patient consent architecture, and de-identification protocols from day one.',
              },
              {
                icon: Banknote,
                title: 'Revenue Diversification',
                description: 'Three distinct revenue engines (treatment, real estate, data/licensing) prevent single-point-of-failure exposure. Villa program provides non-correlated cash flow.',
              },
              {
                icon: Home,
                title: 'Real Estate Floor',
                description: 'The $12.4M property provides hard asset protection. Even in a worst case, prime Tulum real estate retains and appreciates in value independently of operations.',
              },
            ].map((risk) => (
              <Card key={risk.title} padding="lg">
                <risk.icon className="w-8 h-8 text-primary-600 mb-4" />
                <h4 className="font-medium text-neutral-900 mb-2">{risk.title}</h4>
                <p className="text-sm text-neutral-600">{risk.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            Section 9 — Disclaimer
        ═══════════════════════════════════════════════════════════ */}
        <section className="mb-16">
          <Card padding="md" className="bg-neutral-100 border border-neutral-200">
            <p className="text-xs text-neutral-500 leading-relaxed">
              <strong>Important Disclosures:</strong> This presentation is for informational purposes only
              and does not constitute an offer to sell or a solicitation of an offer to buy any securities.
              Any such offer will be made only by means of a confidential private placement memorandum
              and only to qualified investors in jurisdictions where permitted by law. Past performance
              is not indicative of future results. The projections and estimates contained herein involve
              significant elements of subjective judgment and analysis and are based on assumptions that
              may not prove to be accurate. Actual results may differ materially from those projected.
              Investment in private securities involves substantial risk, including the potential loss of
              principal. Data asset valuations are modeled from comparable health data companies and
              represent potential rather than guaranteed values. Prospective investors should consult
              their own legal, tax, and financial advisors before making any investment decision.
            </p>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/invest" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">The Ask</span>
          </Link>
          <Link href="/financials">
            <Button variant="primary">
              View Financials
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default function OfferPage() {
  return (
    <VaultGate title="Strategic Proposal" subtitle="Enter your 4-digit PIN to access the equity offer.">
      <OfferContent />
    </VaultGate>
  )
}
