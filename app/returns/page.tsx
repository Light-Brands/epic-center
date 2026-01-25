'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, TrendingUp, DollarSign, Calendar, Target, Building2, Users, Briefcase } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { MetricCard, ScenarioToggle, ScenarioIndicator } from '@/components/financial'
import { useScenario } from '@/lib/context/ScenarioContext'
import {
  getInvestmentReturns,
  getDashboardMetrics,
  formatCurrency,
  formatCurrencyFull,
  formatPercent,
  formatMultiple,
  getScenarioValue,
} from '@/lib/sheets'

export default function ReturnsPage() {
  const { scenario } = useScenario()
  const returns = getInvestmentReturns()
  const metrics = getDashboardMetrics()

  const irr = getScenarioValue(returns.irr, scenario)
  const moic = getScenarioValue(returns.moic, scenario)
  const fiveYearRevenue = getScenarioValue(metrics.keyMetrics.revenue.fiveYearTotal, scenario)

  // Calculate exit value based on EBITDA multiple
  const year5EBITDA = 6014560 // From data
  const exitMultiple = 8 // Industry standard
  const exitValue = year5EBITDA * exitMultiple
  const totalReturns = exitValue + returns.yearlyReturns.reduce((sum, y) => sum + y.annualNetIncome, 0)

  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
                Exit Strategy
              </p>
              <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-3">
                Investor Returns
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl">
                A clear path to liquidity with multiple exit options and strong projected returns.
              </p>
            </div>
            <ScenarioToggle showDescriptions />
          </div>

          {/* Key Return Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              label="Project IRR"
              value={formatPercent(irr)}
              subtitle="5-year internal rate of return"
              accent
            />
            <MetricCard
              label="5-Year MOIC"
              value={formatMultiple(moic)}
              subtitle="Multiple on invested capital"
            />
            <MetricCard
              label="Total Investment"
              value={formatCurrency(returns.totalCapitalRequired)}
              subtitle="All-equity structure"
            />
            <MetricCard
              label="Est. Exit Value"
              value={formatCurrency(exitValue)}
              subtitle="8x EBITDA multiple"
              trend="up"
              trendValue="Year 5"
            />
          </div>
        </section>

        {/* Return Timeline */}
        <section className="mb-16">
          <Card padding="lg">
            <h3 className="text-2xl font-heading text-neutral-900 mb-8">Return Timeline</h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-neutral-200 hidden md:block" />

              {/* Year markers */}
              <div className="grid md:grid-cols-5 gap-6">
                {returns.yearlyReturns.map((year, index) => (
                  <div key={year.year} className="relative">
                    {/* Dot */}
                    <div className="hidden md:flex absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 border-4 border-white shadow" />

                    <Card
                      className={`mt-12 ${index === returns.yearlyReturns.length - 1 ? 'border-2 border-secondary-400' : ''}`}
                      padding="md"
                    >
                      <p className="font-accent text-sm text-primary-600 uppercase tracking-wide mb-2">
                        Year {year.year}
                      </p>
                      <p className="font-heading text-2xl text-neutral-900 mb-1">
                        {formatCurrency(year.annualNetIncome)}
                      </p>
                      <p className="text-sm text-neutral-500">Net Income</p>
                      <div className="mt-3 pt-3 border-t border-neutral-200">
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-500">Cumulative ROI</span>
                          <span className="font-medium text-neutral-900">{formatPercent(year.roiCumulative)}</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Exit Strategies */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Exit Pathways</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: 'Strategic Sale',
                timeline: 'Year 5-7',
                description: 'Sale to hospitality group, healthcare system, or wellness conglomerate seeking turnkey medical retreat operations.',
                multiple: '8-10x EBITDA',
                likelihood: 'Primary',
              },
              {
                icon: Users,
                title: 'Private Equity',
                timeline: 'Year 4-6',
                description: 'Acquisition by PE firm building a platform in the wellness or alternative healthcare space.',
                multiple: '7-9x EBITDA',
                likelihood: 'Secondary',
              },
              {
                icon: Briefcase,
                title: 'Management Buyout',
                timeline: 'Year 5+',
                description: 'Existing management team acquires equity stake, often with seller financing component.',
                multiple: '6-8x EBITDA',
                likelihood: 'Tertiary',
              },
            ].map((exit) => (
              <Card key={exit.title} padding="lg" hoverable>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                    <exit.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900">{exit.title}</h4>
                    <p className="text-sm text-neutral-500">{exit.timeline}</p>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4">{exit.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-neutral-200">
                  <div>
                    <p className="text-xs text-neutral-500 uppercase">Multiple</p>
                    <p className="font-medium text-primary-600">{exit.multiple}</p>
                  </div>
                  <span className={`text-xs font-accent uppercase tracking-wide px-2 py-1 rounded ${
                    exit.likelihood === 'Primary' ? 'bg-success-100 text-success-700' :
                    exit.likelihood === 'Secondary' ? 'bg-warning-100 text-warning-700' :
                    'bg-neutral-100 text-neutral-600'
                  }`}>
                    {exit.likelihood}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Return Scenarios */}
        <section className="mb-16">
          <Card padding="lg">
            <h3 className="text-2xl font-heading text-neutral-900 mb-6">Return by Scenario</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-neutral-200">
                    <th className="text-left py-4 pr-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      Metric
                    </th>
                    <th className="text-center py-4 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      Conservative
                    </th>
                    <th className={`text-center py-4 px-4 font-accent text-xs uppercase tracking-wide ${
                      scenario === 'base' ? 'text-primary-600 bg-primary-50' : 'text-neutral-500'
                    }`}>
                      Base
                    </th>
                    <th className="text-center py-4 pl-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      Aggressive
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <td className="py-4 pr-4 text-neutral-700">5-Year Total Revenue</td>
                    <td className="text-center py-4 px-4">{formatCurrency(metrics.keyMetrics.revenue.fiveYearTotal.conservative)}</td>
                    <td className={`text-center py-4 px-4 font-medium ${scenario === 'base' ? 'bg-primary-50 text-primary-800' : ''}`}>
                      {formatCurrency(metrics.keyMetrics.revenue.fiveYearTotal.base)}
                    </td>
                    <td className="text-center py-4 pl-4">{formatCurrency(metrics.keyMetrics.revenue.fiveYearTotal.aggressive)}</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="py-4 pr-4 text-neutral-700">Project IRR</td>
                    <td className="text-center py-4 px-4">{formatPercent(returns.irr.conservative)}</td>
                    <td className={`text-center py-4 px-4 font-medium ${scenario === 'base' ? 'bg-primary-50 text-primary-800' : ''}`}>
                      {formatPercent(returns.irr.base)}
                    </td>
                    <td className="text-center py-4 pl-4">{formatPercent(returns.irr.aggressive)}</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="py-4 pr-4 text-neutral-700">5-Year MOIC</td>
                    <td className="text-center py-4 px-4">{formatMultiple(returns.moic.conservative)}</td>
                    <td className={`text-center py-4 px-4 font-medium ${scenario === 'base' ? 'bg-primary-50 text-primary-800' : ''}`}>
                      {formatMultiple(returns.moic.base)}
                    </td>
                    <td className="text-center py-4 pl-4">{formatMultiple(returns.moic.aggressive)}</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 text-neutral-700">Est. Exit Value (8x)</td>
                    <td className="text-center py-4 px-4">{formatCurrency(year5EBITDA * 0.75 * exitMultiple)}</td>
                    <td className={`text-center py-4 px-4 font-medium ${scenario === 'base' ? 'bg-primary-50 text-primary-800' : ''}`}>
                      {formatCurrency(exitValue)}
                    </td>
                    <td className="text-center py-4 pl-4">{formatCurrency(year5EBITDA * 1.25 * exitMultiple)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Value Creation Drivers */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Value Creation Drivers</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Revenue Growth',
                description: 'Year-over-year revenue growth through increased occupancy, premium pricing, and expanded service offerings.',
                impact: '+101% Y1-Y5 growth',
              },
              {
                title: 'Margin Expansion',
                description: 'EBITDA margin improvement from 18% in Year 1 to 39% in Year 5 through operational leverage.',
                impact: '+21pp margin expansion',
              },
              {
                title: 'Brand Premium',
                description: 'Building category-leading brand equity in medical-grade psychedelic therapy commands premium multiples.',
                impact: '8-10x EBITDA at exit',
              },
              {
                title: 'Expansion Optionality',
                description: 'Proven playbook enables multi-location expansion, creating platform value for strategic acquirers.',
                impact: 'Platform premium',
              },
            ].map((driver) => (
              <Card key={driver.title} padding="lg">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-medium text-neutral-900">{driver.title}</h4>
                  <span className="text-sm font-accent text-success-600 bg-success-50 px-2 py-1 rounded">
                    {driver.impact}
                  </span>
                </div>
                <p className="text-neutral-600">{driver.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Investment Summary */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-r from-primary-800 to-primary-900 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-heading mb-4">Investment Summary</h3>
                <p className="text-primary-200 mb-6">
                  A compelling risk-adjusted opportunity in a rapidly growing market with
                  multiple paths to attractive returns.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-primary-700">
                    <span className="text-primary-200">Investment Required</span>
                    <span className="font-medium">{formatCurrencyFull(returns.totalCapitalRequired)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-primary-700">
                    <span className="text-primary-200">Target IRR</span>
                    <span className="font-medium">{formatPercent(returns.irr.base)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-primary-700">
                    <span className="text-primary-200">Target MOIC</span>
                    <span className="font-medium">{formatMultiple(returns.moic.base)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-primary-200">Investment Horizon</span>
                    <span className="font-medium">5-7 Years</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="text-primary-300 text-sm uppercase tracking-wide mb-2">Projected Return</p>
                  <p className="font-heading text-6xl text-secondary-400 mb-2">{formatMultiple(moic)}</p>
                  <p className="text-primary-200">on invested capital</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/financials" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Financials</span>
          </Link>
          <Link href="/risks">
            <Button variant="primary">
              Risk Factors
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
