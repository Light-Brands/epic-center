'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, Mail, Phone, Calendar, Download, Shield, TrendingUp, Building2, Users } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'
import { MetricCard, ScenarioToggle, ScenarioIndicator } from '@/components/financial'
import { UseOfFundsChart } from '@/components/charts'
import { useScenario } from '@/lib/context/ScenarioContext'
import {
  getInvestmentReturns,
  getDashboardMetrics,
  getUseOfFunds,
  formatCurrency,
  formatCurrencyFull,
  formatPercent,
  formatMultiple,
  getScenarioValue,
} from '@/lib/sheets'

export default function InvestPage() {
  const { scenario } = useScenario()
  const returns = getInvestmentReturns()
  const metrics = getDashboardMetrics()
  const useOfFunds = getUseOfFunds()

  const irr = getScenarioValue(returns.irr, scenario)
  const moic = getScenarioValue(returns.moic, scenario)

  return (
    <div className="min-h-screen bg-canvas pt-28">
      <div className="w-full sm:w-[70vw] mx-auto py-12 px-4 sm:px-0">
        {/* Hero Section - The Ask */}
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
              The Ask
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-neutral-900 mb-6">
              {formatCurrency(returns.totalCapitalRequired)}
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Equity investment to develop and launch Rancho Paraiso Oasis as a
              world-class medical retreat facility.
            </p>
            <ScenarioToggle showDescriptions />
          </div>

          {/* Key Terms */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              label="Equity Raise"
              value={formatCurrency(returns.totalCapitalRequired)}
              subtitle="100% equity structure"
              accent
            />
            <MetricCard
              label="Target IRR"
              value={formatPercent(irr)}
              subtitle="5-year projected return"
            />
            <MetricCard
              label="Target MOIC"
              value={formatMultiple(moic)}
              subtitle="Multiple on invested capital"
            />
            <MetricCard
              label="Investment Horizon"
              value="5-7 Years"
              subtitle="Target exit timeline"
            />
          </div>
        </section>

        {/* Use of Funds */}
        <section className="mb-16 mt-4">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Use of Funds</h3>
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <Card padding="lg" className="flex flex-col">
              <UseOfFundsChart fillHeight showLegend />
            </Card>

            <Card padding="lg">
              <h3 className="text-2xl font-heading text-neutral-900 mb-4">Capital Allocation</h3>
              <div className="space-y-4">
                {useOfFunds.map((item, index) => (
                  <div key={item.category}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-neutral-700">{item.category}</span>
                      <span className="font-medium text-neutral-900">{formatCurrency(item.amount)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${item.percentage}%`,
                            backgroundColor: index < 3 ? '#1a3a3a' : index < 5 ? '#c4a962' : '#a8a89e',
                          }}
                        />
                      </div>
                      <span className="text-sm text-neutral-500 w-12 text-right">
                        {item.percentage.toFixed(1)}%
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-sm text-neutral-500 mt-1">{item.description}</p>
                    )}
                  </div>
                ))}

                <div className="pt-4 mt-4 border-t-2 border-primary-800">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-neutral-900">Total Capital Required</span>
                    <span className="font-heading text-2xl text-primary-800">
                      {formatCurrencyFull(returns.totalCapitalRequired)}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Investment Terms */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Investment Structure</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Security Type',
                value: 'Common Equity',
                description: 'Direct ownership in operating entity with full equity participation',
              },
              {
                title: 'Minimum Investment',
                value: '$500,000',
                description: 'Qualified investors only. Subject to subscription agreement.',
              },
              {
                title: 'Target Close',
                value: 'Q2 2026',
                description: 'Initial close upon reaching minimum threshold',
              },
              {
                title: 'Governance',
                value: 'Board Seat',
                description: 'Lead investors receive board representation and quarterly reporting',
              },
              {
                title: 'Distributions',
                value: 'Annual',
                description: 'Distributions of available cash flow after reserves, beginning Year 2',
              },
              {
                title: 'Exit Rights',
                value: 'Tag-Along',
                description: 'Pro-rata participation in any strategic sale transaction',
              },
            ].map((term) => (
              <Card key={term.title} padding="lg">
                <p className="text-sm font-accent text-primary-600 uppercase tracking-wide mb-2">
                  {term.title}
                </p>
                <p className="font-heading text-2xl text-neutral-900 mb-2">{term.value}</p>
                <p className="text-sm text-neutral-600">{term.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Invest */}
        <section className="mb-16">
          <Card padding="lg" className="bg-primary-800 text-white">
            <h3 className="text-2xl font-heading mb-8 text-center">Why This Investment?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: 'Explosive Market',
                  description: 'Psychedelic therapy market growing 15%+ annually with mainstream adoption accelerating',
                },
                {
                  icon: Shield,
                  title: 'First-Mover Advantage',
                  description: 'Medical-grade facility positioned ahead of regulatory wave in premium destination',
                },
                {
                  icon: Building2,
                  title: 'Hard Asset Base',
                  description: 'Real estate provides downside protection with operating business upside',
                },
                {
                  icon: Users,
                  title: 'Experienced Team',
                  description: 'Operators with track record in hospitality, healthcare, and alternative medicine',
                },
              ].map((reason) => (
                <div key={reason.title} className="text-center">
                  <reason.icon className="w-10 h-10 text-secondary-400 mx-auto mb-4" />
                  <h4 className="font-medium mb-2">{reason.title}</h4>
                  <p className="text-sm text-primary-200">{reason.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Next Steps */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Next Steps</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Schedule a Call',
                description: 'Connect with our team to discuss the opportunity and answer your questions.',
                cta: 'Book Meeting',
                icon: Calendar,
              },
              {
                step: '2',
                title: 'Review Materials',
                description: 'Access the full data room with detailed financials, legal documents, and due diligence.',
                cta: 'Request Access',
                icon: Download,
              },
              {
                step: '3',
                title: 'Make Your Investment',
                description: 'Complete subscription documents and wire funds to participate in this opportunity.',
                cta: 'Begin Process',
                icon: Check,
              },
            ].map((step) => (
              <Card key={step.step} padding="lg" className="relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="font-heading text-2xl text-primary-600">{step.step}</span>
                </div>
                <step.icon className="w-8 h-8 text-primary-600 mb-4" />
                <h4 className="text-lg font-medium text-neutral-900 mb-2">{step.title}</h4>
                <p className="text-neutral-600 mb-6">{step.description}</p>
                <a href="mailto:nicholas@lightbrands.ai">
                  <Button variant="secondary" size="sm">
                    {step.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-heading mb-4">Ready to Transform Healthcare?</h3>
                <p className="text-primary-800 mb-6">
                  Join a select group of investors pioneering the future of mental health treatment.
                  Limited allocation available.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:nicholas@lightbrands.ai">
                    <Button variant="primary" size="lg">
                      <Calendar className="mr-2 w-5 h-5" />
                      Schedule Call
                    </Button>
                  </a>
                  <a href="mailto:nicholas@lightbrands.ai">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white"
                    >
                      <Mail className="mr-2 w-5 h-5" />
                      Contact Us
                    </Button>
                  </a>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm text-primary-800 mb-2">Contact</p>
                <p className="text-xl font-medium mb-1">Nicholas Courchesne</p>
                <p className="text-primary-800">Founder & CEO</p>
                <div className="mt-4 space-y-1 text-primary-800">
                  <p className="flex items-center justify-center md:justify-end gap-2">
                    <Mail className="w-4 h-4" />
                    nicholas@lightbrands.ai
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Disclaimer */}
        <section className="mb-16">
          <Card padding="md" className="bg-neutral-100 border border-neutral-200">
            <p className="text-xs text-neutral-500 leading-relaxed">
              <strong>Important Disclosures:</strong> This presentation is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Any such offer will be made only by means of a confidential private placement memorandum and only to qualified investors in jurisdictions where permitted by law. Past performance is not indicative of future results. The projections and estimates contained herein involve significant elements of subjective judgment and analysis and are based on assumptions that may not prove to be accurate. Actual results may differ materially from those projected. Investment in private securities involves substantial risk, including the potential loss of principal. Prospective investors should consult their own legal, tax, and financial advisors before making any investment decision.
            </p>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/faq" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">FAQ</span>
          </Link>
          <Link href="/">
            <Button variant="primary">
              Back to Overview
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
