'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'
import {
  getBusinessUnits,
  getEnterpriseValuation,
  getVillaProgramFinancials,
  formatCurrency,
} from '@/lib/sheets'

const TREATMENT_PROGRAMS = [
  {
    id: 'ibogaine',
    name: 'Ibogaine Protocol',
    duration: '10-14 days',
    price: '$35,000-$55,000',
    icon: '/icons/program-ibogaine.png',
    description: 'Medically-supervised ibogaine treatment for addiction interruption and deep psychological reset.',
    outcomes: ['60-80% addiction interruption rate', 'Reduces withdrawal symptoms by 90%', 'Single treatment effectiveness'],
    color: 'bg-primary-600',
  },
  {
    id: 'psilocybin',
    name: 'Psilocybin Journey',
    duration: '7-10 days',
    price: '$25,000-$40,000',
    icon: '/icons/program-psilocybin.png',
    description: 'Guided psilocybin experiences for depression, anxiety, and existential distress.',
    outcomes: ['67% remission rate for treatment-resistant depression', 'Sustained effects at 6-month follow-up', 'Enhanced neuroplasticity'],
    color: 'bg-primary-500',
  },
  {
    id: 'integration',
    name: '5-MeO-DMT Integration',
    duration: '5-7 days',
    price: '$20,000-$30,000',
    icon: '/icons/program-5meo.png',
    description: 'Profound ego dissolution experiences with comprehensive integration support.',
    outcomes: ['Rapid mystical experiences', 'Deep trauma processing', 'Spiritual awakening'],
    color: 'bg-secondary-400',
  },
  {
    id: 'bio-optimization',
    name: 'Bio-Optimization',
    duration: 'Ongoing',
    price: '$5,000-$15,000',
    icon: '/icons/program-bio.png',
    description: 'Cutting-edge protocols for physical optimization enhancing treatment outcomes.',
    outcomes: ['NAD+ therapy', 'Hyperbaric oxygen', 'IV nutrient therapy'],
    color: 'bg-primary-400',
  },
]

const TECH_SYSTEMS = [
  'AI Treatment Personalization', 'Clinical Protocol Engine', 'Biometric Monitoring',
  'Guest Portal & CRM', 'Aftercare App', 'Telemedicine Platform',
  'EHR Integration', 'Inventory Management', 'Staff Scheduling',
  'Financial Analytics', 'Marketing Automation', 'Compliance Tracking',
  'Data Warehouse', 'Reporting Dashboard',
]

export default function ModelPage() {
  const [expandedUnit, setExpandedUnit] = useState<string | null>('healing-center')
  const businessUnits = getBusinessUnits()
  const enterprise = getEnterpriseValuation()
  const villaFinancials = getVillaProgramFinancials()

  const toggleUnit = (id: string) => {
    setExpandedUnit(expandedUnit === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-canvas pt-20">
      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            Enterprise Model
          </p>
          <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
            Enterprise Business Model
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Four integrated operating units — clinical operations, real estate development,
            property management, and technology — combine to create a diversified enterprise
            positioned for a {formatCurrency(enterprise.sumOfPartsValue.base)} Year 5 valuation.
          </p>
        </section>

        {/* Enterprise Value Summary */}
        <section className="mb-16">
          <Card variant="custom" padding="lg" className="bg-primary-800 text-white rounded-xl">
            <div className="text-center mb-10">
              <p className="font-accent text-sm uppercase tracking-widest text-secondary-400 mb-2">
                Year 5 Enterprise Value
              </p>
              <p className="font-heading text-5xl md:text-6xl text-white mb-2">
                {formatCurrency(enterprise.sumOfPartsValue.base)}
              </p>
              <p className="text-primary-300 text-lg">Sum-of-Parts Valuation (Base Case)</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {businessUnits.map((unit) => (
                <div key={unit.id} className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/15 transition-colors">
                  <p className="font-heading text-2xl text-white">{formatCurrency(unit.standaloneValue.base)}</p>
                  <p className="text-sm text-primary-200 mt-1">{unit.name}</p>
                  {unit.y5Revenue.base > 0 && (
                    <p className="text-xs text-primary-400 mt-1">{formatCurrency(unit.y5Revenue.base)} Y5 Rev</p>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* The Transformational Model Phases */}
        <section className="mb-16">
          <Card variant="custom" padding="lg" className="bg-primary-800 text-white rounded-xl">
            <h3 className="text-2xl font-heading text-center text-white mb-12">The Transformational Epicenter Model</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  phase: '1',
                  title: 'Assessment',
                  icon: '/icons/phase-assessment.png',
                  items: ['Medical screening', 'Psychological evaluation', 'Treatment planning', 'Goal setting'],
                },
                {
                  phase: '2',
                  title: 'Preparation',
                  icon: '/icons/phase-preparation.png',
                  items: ['Dietary protocols', 'Intention setting', 'Bio-optimization', 'Emotional readiness'],
                },
                {
                  phase: '3',
                  title: 'Treatment',
                  icon: '/icons/phase-treatment.png',
                  items: ['24/7 medical supervision', 'Guided ceremonies', 'Multiple modalities', 'Crisis support'],
                },
                {
                  phase: '4',
                  title: 'Integration',
                  icon: '/icons/phase-integration.png',
                  items: ['Processing sessions', 'Behavioral coaching', 'Aftercare planning', 'Community support'],
                },
              ].map((phase) => (
                <div key={phase.phase} className="text-center group">
                  <div className="w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden bg-white/10 p-3 transition-all duration-500 group-hover:bg-white/20 group-hover:scale-105">
                    <Image
                      src={phase.icon}
                      alt={phase.title}
                      width={160}
                      height={160}
                      className="object-contain rounded-xl"
                    />
                  </div>
                  <div className="font-accent text-xs uppercase tracking-widest text-secondary-400 mb-2">
                    Phase {phase.phase}
                  </div>
                  <h4 className="text-xl font-heading text-white mb-4">{phase.title}</h4>
                  <ul className="space-y-2 text-sm text-primary-200">
                    {phase.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Business Unit Deep-Dives */}
        <section className="mb-16">
          <div className="mb-8">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
              Operating Units
            </p>
            <h3 className="text-3xl font-heading text-neutral-900">Business Unit Deep-Dives</h3>
          </div>

          <div className="space-y-4">
            {/* Healing Center */}
            <Card padding="none" className="overflow-hidden">
              <button
                onClick={() => toggleUnit('healing-center')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-heading text-neutral-900">Healing Center</h4>
                    <p className="text-sm text-neutral-500">Clinical operations — {formatCurrency(businessUnits[0].standaloneValue.base)} standalone value</p>
                  </div>
                </div>
                {expandedUnit === 'healing-center' ? (
                  <ChevronUp className="w-5 h-5 text-neutral-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-400" />
                )}
              </button>
              {expandedUnit === 'healing-center' && (
                <div className="px-6 pb-6 border-t border-neutral-200">
                  <div className="grid sm:grid-cols-3 gap-4 py-4 mb-4">
                    <div className="text-center p-3 bg-neutral-50 rounded-lg">
                      <p className="font-heading text-xl text-primary-800">{formatCurrency(businessUnits[0].y5Revenue.base)}</p>
                      <p className="text-xs text-neutral-500">Y5 Revenue</p>
                    </div>
                    <div className="text-center p-3 bg-neutral-50 rounded-lg">
                      <p className="font-heading text-xl text-primary-800">{formatCurrency(businessUnits[0].y5EBITDA.base)}</p>
                      <p className="text-xs text-neutral-500">Y5 EBITDA (61% margin)</p>
                    </div>
                    <div className="text-center p-3 bg-neutral-50 rounded-lg">
                      <p className="font-heading text-xl text-primary-800">5.5x</p>
                      <p className="text-xs text-neutral-500">EBITDA Multiple</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {TREATMENT_PROGRAMS.map((program) => (
                      <Card key={program.id} padding="lg" hoverable className="group">
                        <div className="flex items-start gap-6 mb-4">
                          <div className="w-36 h-36 flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                            <Image
                              src={program.icon}
                              alt={program.name}
                              width={144}
                              height={144}
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1 pt-2">
                            <h4 className="text-2xl font-heading text-neutral-900">{program.name}</h4>
                            <div className="flex gap-4 text-sm text-neutral-500 mt-2">
                              <span className="flex items-center gap-2">
                                <Image src="/icons/util-clock.png" alt="Duration" width={20} height={20} className="object-contain" />
                                {program.duration}
                              </span>
                              <span className="font-medium text-primary-600">{program.price}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-neutral-600 mb-4">{program.description}</p>
                        <div className="pt-4 border-t border-neutral-200">
                          <p className="text-xs font-accent uppercase tracking-wide text-neutral-500 mb-2">
                            Key Outcomes
                          </p>
                          <ul className="space-y-1">
                            {program.outcomes.map((outcome) => (
                              <li key={outcome} className="flex items-center gap-2 text-sm text-neutral-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-success-500" />
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </Card>

            {/* Real Estate Development */}
            <Card padding="none" className="overflow-hidden">
              <button
                onClick={() => toggleUnit('real-estate')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary-100 flex items-center justify-center">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-heading text-neutral-900">Real Estate Development</h4>
                    <p className="text-sm text-neutral-500">48-villa condo-hotel — {formatCurrency(businessUnits[1].standaloneValue.base)} standalone value</p>
                  </div>
                </div>
                {expandedUnit === 'real-estate' ? (
                  <ChevronUp className="w-5 h-5 text-neutral-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-400" />
                )}
              </button>
              {expandedUnit === 'real-estate' && (
                <div className="px-6 pb-6 border-t border-neutral-200">
                  <div className="grid sm:grid-cols-3 gap-4 py-4 mb-4">
                    <div className="text-center p-3 bg-neutral-50 rounded-lg">
                      <p className="font-heading text-xl text-primary-800">$96M</p>
                      <p className="text-xs text-neutral-500">Total Villa Sales</p>
                    </div>
                    <div className="text-center p-3 bg-neutral-50 rounded-lg">
                      <p className="font-heading text-xl text-primary-800">{formatCurrency(villaFinancials.cumulativeDevFees)}</p>
                      <p className="text-xs text-neutral-500">Cumulative Dev Fees</p>
                    </div>
                    <div className="text-center p-3 bg-neutral-50 rounded-lg">
                      <p className="font-heading text-xl text-primary-800">48</p>
                      <p className="text-xs text-neutral-500">Villas (Buyer-Funded)</p>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-neutral-200">
                          <th className="text-left py-3 font-accent text-xs uppercase tracking-wide text-neutral-500">Year</th>
                          <th className="text-right py-3 font-accent text-xs uppercase tracking-wide text-neutral-500">Villas Sold</th>
                          <th className="text-right py-3 font-accent text-xs uppercase tracking-wide text-neutral-500">Sales Revenue</th>
                          <th className="text-right py-3 font-accent text-xs uppercase tracking-wide text-neutral-500">Dev Fee (12.5%)</th>
                          <th className="text-right py-3 font-accent text-xs uppercase tracking-wide text-neutral-500">Cumulative Fees</th>
                        </tr>
                      </thead>
                      <tbody>
                        {villaFinancials.yearly.map((y) => (
                          <tr key={y.year} className="border-b border-neutral-100">
                            <td className="py-3 text-neutral-700">Year {y.year}</td>
                            <td className="py-3 text-right text-neutral-700">{y.villasSold}</td>
                            <td className="py-3 text-right text-neutral-700">{formatCurrency(y.salesRevenue)}</td>
                            <td className="py-3 text-right text-neutral-700">{formatCurrency(y.developmentFee)}</td>
                            <td className="py-3 text-right font-medium text-primary-700">{formatCurrency(y.cumulativeDevFees)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-neutral-500 mt-4">
                    All construction is buyer-funded. Development fees are earned on sale with minimal capital at risk.
                  </p>
                </div>
              )}
            </Card>

            {/* Property Management */}
            <Card padding="none" className="overflow-hidden">
              <button
                onClick={() => toggleUnit('property-management')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-success-100 flex items-center justify-center">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-heading text-neutral-900">Property Management</h4>
                    <p className="text-sm text-neutral-500">25% villa rental revenue — {formatCurrency(businessUnits[2].standaloneValue.base)} standalone value</p>
                  </div>
                </div>
                {expandedUnit === 'property-management' ? (
                  <ChevronUp className="w-5 h-5 text-neutral-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-400" />
                )}
              </button>
              {expandedUnit === 'property-management' && (
                <div className="px-6 pb-6 border-t border-neutral-200">
                  <div className="grid sm:grid-cols-3 gap-4 py-4 mb-4">
                    <div className="text-center p-3 bg-neutral-50 rounded-lg">
                      <p className="font-heading text-xl text-primary-800">{formatCurrency(businessUnits[2].y5Revenue.base)}</p>
                      <p className="text-xs text-neutral-500">Y5 Revenue (Recurring)</p>
                    </div>
                    <div className="text-center p-3 bg-neutral-50 rounded-lg">
                      <p className="font-heading text-xl text-primary-800">{formatCurrency(businessUnits[2].y5EBITDA.base)}</p>
                      <p className="text-xs text-neutral-500">Y5 EBITDA (60% margin)</p>
                    </div>
                    <div className="text-center p-3 bg-neutral-50 rounded-lg">
                      <p className="font-heading text-xl text-primary-800">10.0x</p>
                      <p className="text-xs text-neutral-500">EBITDA Multiple</p>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-neutral-200">
                          <th className="text-left py-3 font-accent text-xs uppercase tracking-wide text-neutral-500">Year</th>
                          <th className="text-right py-3 font-accent text-xs uppercase tracking-wide text-neutral-500">Villas Operational</th>
                          <th className="text-right py-3 font-accent text-xs uppercase tracking-wide text-neutral-500">Rental Revenue</th>
                          <th className="text-right py-3 font-accent text-xs uppercase tracking-wide text-neutral-500">Mgmt Fee (25%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {villaFinancials.yearly.map((y) => (
                          <tr key={y.year} className="border-b border-neutral-100">
                            <td className="py-3 text-neutral-700">Year {y.year}</td>
                            <td className="py-3 text-right text-neutral-700">{y.builtOperational}</td>
                            <td className="py-3 text-right text-neutral-700">{formatCurrency(y.rentalRevenue)}</td>
                            <td className="py-3 text-right font-medium text-primary-700">{formatCurrency(y.mgmtFeeIncome)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-neutral-500 mt-4">
                    Contractual, recurring revenue stream that grows as villas come online. High-margin (60%) with minimal incremental cost.
                  </p>
                </div>
              )}
            </Card>

            {/* Technology Platform */}
            <Card padding="none" className="overflow-hidden">
              <button
                onClick={() => toggleUnit('technology-platform')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-heading text-neutral-900">Technology & Digital Platform</h4>
                    <p className="text-sm text-neutral-500">14 integrated systems — {formatCurrency(businessUnits[3].standaloneValue.base)} standalone value</p>
                  </div>
                </div>
                {expandedUnit === 'technology-platform' ? (
                  <ChevronUp className="w-5 h-5 text-neutral-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-400" />
                )}
              </button>
              {expandedUnit === 'technology-platform' && (
                <div className="px-6 pb-6 border-t border-neutral-200">
                  <div className="grid sm:grid-cols-3 gap-4 py-4 mb-4">
                    <div className="text-center p-3 bg-neutral-50 rounded-lg">
                      <p className="font-heading text-xl text-primary-800">$1.23M</p>
                      <p className="text-xs text-neutral-500">Total Investment</p>
                    </div>
                    <div className="text-center p-3 bg-neutral-50 rounded-lg">
                      <p className="font-heading text-xl text-primary-800">14</p>
                      <p className="text-xs text-neutral-500">Integrated Systems</p>
                    </div>
                    <div className="text-center p-3 bg-neutral-50 rounded-lg">
                      <p className="font-heading text-xl text-primary-800">60%</p>
                      <p className="text-xs text-neutral-500">Cost Reduction (New Site)</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {TECH_SYSTEMS.map((system) => (
                      <div key={system} className="bg-neutral-50 rounded-lg px-3 py-2 text-sm text-neutral-700 text-center">
                        {system}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-neutral-500 mt-4">
                    Valued using cost-replacement method plus scalability optionality. Proprietary platform enables 60% cost reduction for new-site deployment.
                  </p>
                </div>
              )}
            </Card>
          </div>
        </section>

        {/* Sum-of-Parts Valuation Table */}
        <section className="mb-16">
          <div className="mb-8">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
              Valuation
            </p>
            <h3 className="text-3xl font-heading text-neutral-900">Sum-of-Parts Analysis</h3>
          </div>
          <Card padding="lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-neutral-200">
                    <th className="text-left py-4 pr-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Business Unit</th>
                    <th className="text-right py-4 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Y5 Revenue</th>
                    <th className="text-right py-4 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Y5 EBITDA</th>
                    <th className="text-right py-4 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Multiple</th>
                    <th className="text-right py-4 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Methodology</th>
                    <th className="text-right py-4 pl-4 font-accent text-xs uppercase tracking-wide text-neutral-500">Standalone Value</th>
                  </tr>
                </thead>
                <tbody>
                  {businessUnits.map((unit) => (
                    <tr key={unit.id} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                      <td className="py-4 pr-4 font-medium text-neutral-900">{unit.name}</td>
                      <td className="py-4 px-4 text-right text-neutral-700">
                        {unit.y5Revenue.base > 0 ? formatCurrency(unit.y5Revenue.base) : '—'}
                      </td>
                      <td className="py-4 px-4 text-right text-neutral-700">
                        {unit.y5EBITDA.base > 0 ? formatCurrency(unit.y5EBITDA.base) : '—'}
                      </td>
                      <td className="py-4 px-4 text-right text-neutral-700">{unit.multiple.toFixed(1)}x</td>
                      <td className="py-4 px-4 text-right text-sm text-neutral-500">{unit.multipleLabel}</td>
                      <td className="py-4 pl-4 text-right font-heading text-lg text-primary-800">
                        {formatCurrency(unit.standaloneValue.base)}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-primary-800 bg-primary-50">
                    <td className="py-4 pr-4 font-heading text-lg text-primary-900">Combined Enterprise</td>
                    <td className="py-4 px-4 text-right font-medium text-primary-800">
                      {formatCurrency(enterprise.combinedY5Revenue.base)}
                    </td>
                    <td className="py-4 px-4 text-right font-medium text-primary-800">
                      {formatCurrency(enterprise.combinedY5EBITDA.base)}
                    </td>
                    <td className="py-4 px-4" />
                    <td className="py-4 px-4 text-right text-sm text-primary-600">Sum-of-Parts</td>
                    <td className="py-4 pl-4 text-right font-heading text-2xl text-primary-900">
                      {formatCurrency(enterprise.sumOfPartsValue.base)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Revenue Composition */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
                Revenue Mix
              </p>
              <h3 className="text-3xl font-heading text-neutral-900 mb-6">Revenue Composition</h3>
              <p className="text-neutral-600 mb-8">
                Treatment programs remain the core revenue driver, with bio-optimization add-ons,
                villa development fees, and management income providing diversification.
              </p>
              <div className="space-y-4">
                {[
                  { name: 'Treatment Programs', percentage: 72, description: 'Core ibogaine, psilocybin, 5-MeO-DMT, and integration programs' },
                  { name: 'Villa Development Fees', percentage: 13, description: 'Y1-Y4 cumulative $12M from 48-villa condo-hotel' },
                  { name: 'Bio-Optimization', percentage: 8, description: 'NAD+, IV therapy, hyperbaric — 30% guest upsell' },
                  { name: 'Management Fees', percentage: 4, description: '25% of villa rental revenue, recurring' },
                  { name: 'Post-Care Subscriptions', percentage: 3, description: '36% uptake at $1,000/yr aftercare program' },
                ].map((stream, index) => (
                  <div key={stream.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-neutral-900">{stream.name}</span>
                      <span className="font-heading text-lg text-primary-600">{stream.percentage}%</span>
                    </div>
                    <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${stream.percentage}%`,
                          backgroundColor: index === 0 ? '#1a3a3a' : index === 1 ? '#c4a962' : index === 2 ? '#1a5a57' : index === 3 ? '#4d9f9a' : '#2a6a67',
                        }}
                      />
                    </div>
                    <p className="text-sm text-neutral-500 mt-1">{stream.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card padding="lg" className="bg-neutral-100">
              <h4 className="text-xl font-heading text-neutral-900 mb-6">Unit Economics Summary</h4>
              <div className="space-y-4">
                {[
                  { label: 'Avg Revenue per Guest', value: '$26,600' },
                  { label: 'Direct Cost per Guest', value: '$4,629' },
                  { label: 'Gross Profit per Guest', value: '$21,971' },
                  { label: 'Gross Margin', value: '83%' },
                  { label: 'Customer Acquisition Cost', value: '$2,613' },
                  { label: 'LTV:CAC Ratio', value: '13.0x' },
                ].map((metric) => (
                  <div key={metric.label} className="flex justify-between items-center py-3 border-b border-neutral-200 last:border-0">
                    <span className="text-neutral-700">{metric.label}</span>
                    <span className="font-heading text-xl text-primary-800">{metric.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Differentiators */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
              Our Differentiators
            </p>
            <h3 className="text-3xl font-heading text-neutral-900">What Sets Us Apart</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Medical-Grade Protocols',
                description: 'Full cardiac monitoring, physician oversight, and emergency protocols. Not a retreat center, but a medical facility.',
                icon: '/icons/diff-medical.png',
              },
              {
                title: 'Integrated Approach',
                description: 'Combining plant medicine with bio-optimization, therapy, and integration creates compounded healing effects.',
                icon: '/icons/diff-integrated.png',
              },
              {
                title: 'Luxury Experience',
                description: 'World-class accommodations and hospitality ensure comfort during the most vulnerable moments of treatment.',
                icon: '/icons/diff-luxury.png',
              },
              {
                title: 'Comprehensive Integration',
                description: '12-month aftercare program with coaching, community support, and continued bio-optimization.',
                icon: '/icons/diff-aftercare.png',
              },
              {
                title: 'Evidence-Based',
                description: 'Protocols developed from the latest clinical research with outcome tracking and continuous improvement.',
                icon: '/icons/diff-evidence.png',
              },
              {
                title: 'Location Advantage',
                description: 'Tulum provides legal treatment access, proximity to US patients, and a healing environment.',
                icon: '/icons/diff-location.png',
              },
            ].map((diff) => (
              <Card key={diff.title} padding="lg" className="group hover:shadow-xl transition-all duration-500 text-center">
                <div className="w-40 h-40 mx-auto mb-4 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={diff.icon}
                    alt={diff.title}
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-heading text-neutral-900 mb-2">{diff.title}</h4>
                <p className="text-sm text-neutral-600">{diff.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Designed for Scale */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-heading mb-4">Designed for Scale</h3>
                <p className="text-primary-800 mb-6">
                  Our integrated campus model — 60 casitas plus 48 villas — is designed for
                  operational maturity and compounding returns as the facility reaches full capacity.
                </p>
                <div className="space-y-3">
                  {[
                    'Standardized clinical protocols and training programs',
                    'Technology-enabled operations across 14 integrated systems',
                    'Brand equity driving referrals and premium pricing',
                    'Phased capacity expansion funded from operating cash flow',
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary-800" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '60', label: 'Casitas', sublabel: 'Full campus (Year 5)' },
                  { value: '1,280', label: 'Guests/Year', sublabel: 'At 80% occupancy' },
                  { value: formatCurrency(enterprise.combinedY5Revenue.base), label: 'Y5 Revenue', sublabel: 'All business units' },
                  { value: '61%', label: 'EBITDA Margin', sublabel: 'Healing center at maturity' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/20 rounded-lg p-4 text-center">
                    <p className="font-heading text-3xl">{stat.value}</p>
                    <p className="font-medium text-sm">{stat.label}</p>
                    <p className="text-xs text-primary-700">{stat.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/market" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Market</span>
          </Link>
          <Link href="/moat">
            <Button variant="primary">
              Competitive Moat
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
