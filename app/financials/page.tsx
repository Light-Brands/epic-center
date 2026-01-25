'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Download } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent, Button } from '@/components/ui'
import { MetricCard, ScenarioToggle } from '@/components/financial'
import { RevenueChart } from '@/components/charts'
import { useScenario } from '@/lib/context/ScenarioContext'
import {
  getDashboardMetrics,
  getUnitEconomics,
  getUseOfFunds,
  formatCurrency,
  formatCurrencyFull,
  formatPercent,
  formatMultiple,
  getScenarioValue,
} from '@/lib/sheets'

export default function FinancialsPage() {
  const { scenario } = useScenario()
  const metrics = getDashboardMetrics()
  const unitEconomics = getUnitEconomics()
  const useOfFunds = getUseOfFunds()

  // Get scenario-specific values
  const year1Revenue = getScenarioValue(metrics.keyMetrics.revenue.year1, scenario)
  const year5Revenue = getScenarioValue(metrics.keyMetrics.revenue.year5, scenario)
  const fiveYearRevenue = getScenarioValue(metrics.keyMetrics.revenue.fiveYearTotal, scenario)
  const projectIRR = getScenarioValue(metrics.keyMetrics.projectIRR, scenario)
  const fiveYearMOIC = getScenarioValue(metrics.keyMetrics.fiveYearMOIC, scenario)

  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header with Scenario Toggle */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-2">
              5-Year Financial Model
            </h2>
            <p className="text-lg text-neutral-600">
              Comprehensive projections for Hotel Alea Tulum
            </p>
          </div>
          <ScenarioToggle showDescriptions />
        </div>

        {/* Executive Metrics */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Key Investment Metrics</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              label="Total Project Cost"
              value={formatCurrency(metrics.keyMetrics.totalProjectCost)}
              subtitle="All-in capital requirement"
              accent
            />
            <MetricCard
              label="Year 1 Revenue"
              value={formatCurrency(year1Revenue)}
              subtitle="First year operations"
              trend="up"
              trendValue="+12% vs prior model"
            />
            <MetricCard
              label="Project IRR"
              value={formatPercent(projectIRR)}
              subtitle="5-year internal rate of return"
              accent
            />
            <MetricCard
              label="5-Year MOIC"
              value={formatMultiple(fiveYearMOIC)}
              subtitle="Multiple on invested capital"
            />
          </div>
        </section>

        {/* Revenue Chart */}
        <section className="mb-16">
          <Card padding="lg">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle as="h3">5-Year Revenue Projection</CardTitle>
                  <p className="text-neutral-600 mt-1">
                    Annual revenue across all scenarios
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-caption text-neutral-500">5-Year Total</p>
                  <p className="font-heading text-3xl text-neutral-900">
                    {formatCurrency(fiveYearRevenue)}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <RevenueChart height={400} />
            </CardContent>
          </Card>
        </section>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Unit Economics */}
          <Card padding="lg">
            <CardHeader>
              <CardTitle as="h3">Unit Economics</CardTitle>
              <p className="text-neutral-600 mt-1">Per-guest revenue and cost breakdown</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Revenue per guest */}
                <div>
                  <p className="text-caption text-neutral-500 uppercase mb-3">Revenue per Guest</p>
                  <div className="space-y-2">
                    {unitEconomics.revenuePerGuest.map((item) => (
                      <div key={item.name} className="flex justify-between items-center py-2 border-b border-neutral-200">
                        <span className="text-neutral-700">{item.name}</span>
                        <span className="font-medium text-neutral-900">{formatCurrencyFull(item.amount)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center py-2 bg-primary-50 px-3 rounded">
                      <span className="font-medium text-primary-800">Total Guest Revenue</span>
                      <span className="font-heading text-xl text-primary-800">
                        {formatCurrencyFull(unitEconomics.totalGuestRevenue)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct costs */}
                <div>
                  <p className="text-caption text-neutral-500 uppercase mb-3">Direct Costs per Guest</p>
                  <div className="space-y-2">
                    {unitEconomics.directCostsPerGuest.slice(0, 4).map((item) => (
                      <div key={item.name} className="flex justify-between items-center py-2 border-b border-neutral-200">
                        <span className="text-neutral-700">{item.name}</span>
                        <span className="font-medium text-neutral-900">{formatCurrencyFull(item.amount)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center py-2 bg-neutral-100 px-3 rounded">
                      <span className="font-medium text-neutral-700">Total Direct Costs</span>
                      <span className="font-medium text-neutral-900">
                        {formatCurrencyFull(unitEconomics.totalDirectCosts)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Gross profit */}
                <div className="pt-4 border-t-2 border-secondary-400">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-neutral-900">Gross Profit per Guest</p>
                      <p className="text-sm text-neutral-500">{formatPercent(unitEconomics.contributionMargin)} margin</p>
                    </div>
                    <span className="font-heading text-3xl text-success-700">
                      {formatCurrencyFull(unitEconomics.grossProfitPerGuest)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Use of Funds */}
          <Card padding="lg">
            <CardHeader>
              <CardTitle as="h3">Use of Funds</CardTitle>
              <p className="text-neutral-600 mt-1">Capital allocation breakdown</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {useOfFunds.map((item) => (
                  <div key={item.category}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-neutral-700">{item.category}</span>
                      <span className="font-medium text-neutral-900">{formatCurrency(item.amount)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary-600 rounded-full transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
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

                {/* Total */}
                <div className="pt-4 mt-4 border-t-2 border-primary-800">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-neutral-900">Total Capital Required</span>
                    <span className="font-heading text-2xl text-primary-800">
                      {formatCurrency(metrics.keyMetrics.totalProjectCost)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Metrics Row */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading text-neutral-900 mb-6">Customer Acquisition</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <Card>
              <div className="text-center">
                <p className="text-caption text-neutral-500 uppercase mb-2">Blended CAC</p>
                <p className="font-heading text-4xl text-neutral-900">
                  {formatCurrencyFull(unitEconomics.blendedCAC)}
                </p>
                <p className="text-sm text-neutral-500 mt-2">Cost to acquire one guest</p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <p className="text-caption text-neutral-500 uppercase mb-2">Lifetime Value</p>
                <p className="font-heading text-4xl text-neutral-900">
                  {formatCurrencyFull(unitEconomics.ltv)}
                </p>
                <p className="text-sm text-neutral-500 mt-2">Average revenue per guest</p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <p className="text-caption text-neutral-500 uppercase mb-2">LTV:CAC Ratio</p>
                <p className="font-heading text-4xl text-success-700">
                  {unitEconomics.ltvCacRatio.toFixed(1)}x
                </p>
                <p className="text-sm text-neutral-500 mt-2">Exceptional unit economics</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/moat" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Moat</span>
          </Link>
          <Link href="/returns">
            <Button variant="primary">
              View Returns
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
