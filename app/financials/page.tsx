'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, TrendingUp, DollarSign, BarChart3, PieChart, Receipt } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent, Button } from '@/components/ui'
import { Footer } from '@/components/layout'
import { MetricCard, ScenarioToggle } from '@/components/financial'
import { RevenueChart } from '@/components/charts'
import { AnimatedValue } from '@/components/animation/CountUp'
import { useScenario } from '@/lib/context/ScenarioContext'
import {
  getDashboardMetrics,
  getUnitEconomics,
  getUseOfFunds,
  getScenarioPLStatements,
  formatCurrency,
  formatCurrencyFull,
  formatPercent,
  getScenarioValue,
  getRevenueChartData,
} from '@/lib/sheets'

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Income Statement row component
function PLRow({
  label,
  values,
  bold = false,
  highlight = false,
  indent = false,
  negative = false,
  border = false,
  className = '',
}: {
  label: string
  values: number[]
  bold?: boolean
  highlight?: boolean
  indent?: boolean
  negative?: boolean
  border?: boolean
  className?: string
}) {
  return (
    <div
      className={`grid grid-cols-6 gap-2 py-2.5 px-3 ${
        highlight
          ? 'bg-gradient-to-r from-primary-50 to-primary-100/30 rounded-lg'
          : border
            ? 'border-t-2 border-neutral-300'
            : 'border-b border-neutral-100'
      } ${className}`}
    >
      <div className={`col-span-1 ${indent ? 'pl-4' : ''} ${bold ? 'font-semibold text-neutral-900' : 'text-neutral-600'}`}>
        {negative && !bold ? `  ${label}` : label}
      </div>
      {values.map((val, i) => (
        <div
          key={i}
          className={`text-right tabular-nums ${
            bold ? 'font-semibold text-neutral-900' : 'text-neutral-700'
          } ${highlight ? 'font-semibold text-primary-800' : ''}`}
        >
          {negative ? `(${formatCurrencyFull(Math.abs(val))})` : formatCurrencyFull(val)}
        </div>
      ))}
    </div>
  )
}

// Percentage row for margins
function MarginRow({ label, values, color = 'neutral' }: { label: string; values: number[]; color?: string }) {
  const colorMap: Record<string, string> = {
    neutral: 'text-neutral-500',
    success: 'text-success-700',
    primary: 'text-primary-700',
  }
  return (
    <div className="grid grid-cols-6 gap-2 py-1 px-3">
      <div className={`col-span-1 text-sm italic ${colorMap[color] || colorMap.neutral}`}>{label}</div>
      {values.map((val, i) => (
        <div key={i} className={`text-right text-sm italic tabular-nums ${colorMap[color] || colorMap.neutral}`}>
          {(val * 100).toFixed(1)}%
        </div>
      ))}
    </div>
  )
}

export default function FinancialsPage() {
  const { scenario } = useScenario()
  const metrics = getDashboardMetrics()
  const unitEconomics = getUnitEconomics()
  const useOfFunds = getUseOfFunds()
  const chartData = getRevenueChartData()
  const plStatements = getScenarioPLStatements(scenario)

  // Get scenario-specific values
  const year1Revenue = getScenarioValue(metrics.keyMetrics.revenue.year1, scenario)
  const fiveYearRevenue = getScenarioValue(metrics.keyMetrics.revenue.fiveYearTotal, scenario)
  const year5Revenue = getScenarioValue(metrics.keyMetrics.revenue.year5, scenario)

  // Sparkline data for revenue trend
  const revenueSparkline = chartData.map((d) => d[scenario])

  // Derived P&L arrays for the income statement table
  const plYears = plStatements.map((pl) => pl.year)
  const plRevenue = plStatements.map((pl) => pl.revenue.total)
  const plCogs = plStatements.map((pl) => pl.cogs)
  const plGrossProfit = plStatements.map((pl) => pl.grossProfit)
  const plGrossMargin = plStatements.map((pl) => pl.grossMarginPercent)
  const plFacility = plStatements.map((pl) => pl.operatingExpenses.facilityCosts)
  const plPersonnel = plStatements.map((pl) => pl.operatingExpenses.personnel)
  const plProfServices = plStatements.map((pl) => pl.operatingExpenses.professionalServices)
  const plTech = plStatements.map((pl) => pl.operatingExpenses.technology)
  const plMarketing = plStatements.map((pl) => pl.operatingExpenses.marketing)
  const plGA = plStatements.map((pl) => pl.operatingExpenses.gAndA)
  const plTotalOpex = plStatements.map((pl) => pl.totalOpex)
  const plEbitda = plStatements.map((pl) => pl.ebitda)
  const plEbitdaMargin = plStatements.map((pl) => pl.ebitdaMarginPercent)
  const plDepreciation = plStatements.map((pl) => pl.depreciation)
  const plEbit = plStatements.map((pl) => pl.ebit)
  const plTaxes = plStatements.map((pl) => pl.taxes)
  const plNetIncome = plStatements.map((pl) => pl.netIncome)
  const plNetMargin = plStatements.map((_, i) => plStatements[i].netIncome / plStatements[i].revenue.total)

  // Five-year totals for the income statement
  const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0)
  const totalRevenue = sum(plRevenue)
  const totalCogs = sum(plCogs)
  const totalGrossProfit = sum(plGrossProfit)
  const totalOpex = sum(plTotalOpex)
  const totalEbitda = sum(plEbitda)
  const totalNetIncome = sum(plNetIncome)

  // EBITDA growth rates (YoY)
  const ebitdaGrowth = plEbitda.map((val, i) => (i === 0 ? 0 : (val - plEbitda[i - 1]) / plEbitda[i - 1]))

  // OpEx categories for the breakdown
  const opexCategories = [
    { name: 'Personnel', values: plPersonnel, color: 'bg-primary-600' },
    { name: 'Facility Costs', values: plFacility, color: 'bg-primary-500' },
    { name: 'Marketing', values: plMarketing, color: 'bg-secondary-500' },
    { name: 'G&A', values: plGA, color: 'bg-primary-400' },
    { name: 'Technology', values: plTech, color: 'bg-primary-300' },
    { name: 'Professional Services', values: plProfServices, color: 'bg-neutral-400' },
  ]

  return (
    <div className="min-h-screen bg-canvas pt-20">
      <div className="w-full sm:w-[70vw] mx-auto py-12 px-4 sm:px-0">
        {/* Page Header with Scenario Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-2">
              5-Year Financial Model
            </h2>
            <p className="text-lg text-neutral-600">
              Comprehensive projections for Rancho Paraiso Oasis
            </p>
          </div>
          <ScenarioToggle showDescriptions />
        </motion.div>

        {/* Executive Metrics */}
        <section className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-heading text-neutral-900 mb-6"
          >
            Key Investment Metrics
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              label="Total Project Cost"
              value={formatCurrency(metrics.keyMetrics.totalProjectCost)}
              subtitle="All-in capital requirement"
              accent
              delay={0.1}
            />
            <MetricCard
              label="Year 1 Revenue"
              rawValue={year1Revenue}
              formatFn={formatCurrency}
              value={formatCurrency(year1Revenue)}
              subtitle="First year operations"
              trend="up"
              trendValue="+12% vs prior"
              sparklineData={revenueSparkline}
              delay={0.2}
            />
            <MetricCard
              label="Year 5 Revenue"
              rawValue={year5Revenue}
              formatFn={formatCurrency}
              value={formatCurrency(year5Revenue)}
              subtitle="At full 60-casita capacity"
              accent
              delay={0.3}
            />
            <MetricCard
              label="5-Year Revenue"
              rawValue={fiveYearRevenue}
              formatFn={formatCurrency}
              value={formatCurrency(fiveYearRevenue)}
              subtitle="Cumulative program revenue"
              delay={0.4}
            />
          </div>
        </section>

        {/* Revenue Chart */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <Card padding="lg" className="hover:shadow-lg transition-shadow duration-300">
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
                    <AnimatedValue value={fiveYearRevenue} format={formatCurrency} />
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <RevenueChart height={400} />
            </CardContent>
          </Card>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            INCOME STATEMENT (P&L)
            ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary-100 rounded-lg">
              <Receipt className="w-5 h-5 text-primary-800" />
            </div>
            <div>
              <h3 className="text-2xl font-heading text-neutral-900">Income Statement</h3>
              <p className="text-neutral-600">5-year projected P&L ({scenario} case)</p>
            </div>
          </div>

          <Card padding="lg" className="hover:shadow-lg transition-shadow duration-300 overflow-x-auto">
            <div className="min-w-[700px]">
              {/* Header row */}
              <div className="grid grid-cols-6 gap-2 py-3 px-3 border-b-2 border-neutral-300 mb-1">
                <div className="col-span-1 font-semibold text-neutral-500 text-sm uppercase tracking-wide">
                  Line Item
                </div>
                {plYears.map((year) => (
                  <div key={year} className="text-right font-semibold text-neutral-500 text-sm uppercase tracking-wide">
                    Year {year}
                  </div>
                ))}
              </div>

              {/* Revenue */}
              <PLRow label="Revenue" values={plRevenue} bold highlight />

              {/* COGS */}
              <PLRow label="Cost of Goods Sold" values={plCogs} negative indent />

              {/* Gross Profit */}
              <PLRow label="Gross Profit" values={plGrossProfit} bold border />
              <MarginRow label="Gross Margin" values={plGrossMargin} color="success" />

              {/* Operating Expenses Header */}
              <div className="px-3 pt-5 pb-2">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                  Operating Expenses
                </span>
              </div>
              <PLRow label="Facility Costs" values={plFacility} negative indent />
              <PLRow label="Personnel" values={plPersonnel} negative indent />
              <PLRow label="Professional Services" values={plProfServices} negative indent />
              <PLRow label="Technology" values={plTech} negative indent />
              <PLRow label="Marketing" values={plMarketing} negative indent />
              <PLRow label="G&A" values={plGA} negative indent />
              <PLRow label="Total OpEx" values={plTotalOpex} bold negative border />

              {/* EBITDA */}
              <PLRow label="EBITDA" values={plEbitda} bold highlight className="mt-2" />
              <MarginRow label="EBITDA Margin" values={plEbitdaMargin} color="primary" />

              {/* Below EBITDA */}
              <PLRow label="Depreciation & Amort." values={plDepreciation} negative indent className="mt-2" />
              <PLRow label="EBIT" values={plEbit} bold border />

              {/* Taxes */}
              <PLRow label="Taxes (30%)" values={plTaxes} negative indent />

              {/* Net Income */}
              <div className="mt-2">
                <PLRow label="Net Income" values={plNetIncome} bold highlight />
                <MarginRow label="Net Margin" values={plNetMargin} color="success" />
              </div>
            </div>

            {/* 5-Year Summary Bar */}
            <div className="mt-6 pt-6 border-t-2 border-neutral-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-caption text-neutral-500 uppercase mb-1">5-Yr Revenue</p>
                  <p className="font-heading text-2xl text-neutral-900">{formatCurrency(totalRevenue)}</p>
                </div>
                <div className="text-center">
                  <p className="text-caption text-neutral-500 uppercase mb-1">5-Yr Gross Profit</p>
                  <p className="font-heading text-2xl text-neutral-900">{formatCurrency(totalGrossProfit)}</p>
                </div>
                <div className="text-center">
                  <p className="text-caption text-neutral-500 uppercase mb-1">5-Yr EBITDA</p>
                  <p className="font-heading text-2xl text-primary-800">{formatCurrency(totalEbitda)}</p>
                </div>
                <div className="text-center">
                  <p className="text-caption text-neutral-500 uppercase mb-1">5-Yr Net Income</p>
                  <p className="font-heading text-2xl text-success-700">{formatCurrency(totalNetIncome)}</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            EBITDA & PROFITABILITY ANALYSIS
            ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-primary-800" />
            </div>
            <div>
              <h3 className="text-2xl font-heading text-neutral-900">EBITDA & Profitability</h3>
              <p className="text-neutral-600">Margin progression and earnings growth</p>
            </div>
          </div>

          {/* EBITDA Progression Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {plStatements.map((pl, i) => (
              <motion.div
                key={pl.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
              >
                <Card className="relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="text-center space-y-2">
                    <p className="text-caption text-neutral-500 uppercase">Year {pl.year}</p>
                    <p className="font-heading text-2xl md:text-3xl text-primary-800">
                      {formatCurrency(pl.ebitda)}
                    </p>
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-sm font-medium text-neutral-600">
                        {(pl.ebitdaMarginPercent * 100).toFixed(0)}% margin
                      </span>
                    </div>
                    {i > 0 && (
                      <div className="flex items-center justify-center gap-1 text-success-700">
                        <TrendingUp className="w-3 h-3" />
                        <span className="text-xs font-medium">
                          +{(ebitdaGrowth[i] * 100).toFixed(0)}% YoY
                        </span>
                      </div>
                    )}
                  </div>
                  {/* EBITDA margin visual bar at bottom */}
                  <div className="mt-3 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${pl.ebitdaMarginPercent * 100}%` }}
                      transition={{ duration: 1, delay: 0.8 + i * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Margin Trend Comparison */}
          <Card padding="lg" className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle as="h4">Margin Analysis</CardTitle>
              <p className="text-neutral-600 mt-1">Gross, EBITDA, and net margin trends over 5 years</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Gross Margin */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-neutral-700">Gross Margin</span>
                    <span className="text-sm font-medium text-success-700">{(plGrossMargin[4] * 100).toFixed(0)}%</span>
                  </div>
                  <div className="flex gap-1">
                    {plGrossMargin.map((margin, i) => (
                      <div key={i} className="flex-1">
                        <div className="h-8 bg-neutral-100 rounded relative overflow-hidden">
                          <motion.div
                            className="absolute bottom-0 w-full bg-success-400/60 rounded"
                            initial={{ height: 0 }}
                            animate={{ height: `${margin * 100}%` }}
                            transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                          />
                        </div>
                        <p className="text-xs text-neutral-500 text-center mt-1">Y{i + 1}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* EBITDA Margin */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-neutral-700">EBITDA Margin</span>
                    <span className="text-sm font-medium text-primary-700">
                      {(plEbitdaMargin[0] * 100).toFixed(0)}% → {(plEbitdaMargin[4] * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {plEbitdaMargin.map((margin, i) => (
                      <div key={i} className="flex-1">
                        <div className="h-8 bg-neutral-100 rounded relative overflow-hidden">
                          <motion.div
                            className="absolute bottom-0 w-full bg-primary-400/60 rounded"
                            initial={{ height: 0 }}
                            animate={{ height: `${margin * 100}%` }}
                            transition={{ duration: 0.8, delay: 0.7 + i * 0.1 }}
                          />
                        </div>
                        <p className="text-xs text-neutral-500 text-center mt-1">Y{i + 1}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Net Margin */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-neutral-700">Net Margin</span>
                    <span className="text-sm font-medium text-neutral-600">
                      {(plNetMargin[0] * 100).toFixed(0)}% → {(plNetMargin[4] * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {plNetMargin.map((margin, i) => (
                      <div key={i} className="flex-1">
                        <div className="h-8 bg-neutral-100 rounded relative overflow-hidden">
                          <motion.div
                            className="absolute bottom-0 w-full bg-secondary-400/60 rounded"
                            initial={{ height: 0 }}
                            animate={{ height: `${margin * 100}%` }}
                            transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                          />
                        </div>
                        <p className="text-xs text-neutral-500 text-center mt-1">Y{i + 1}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            OPERATING EXPENSE BREAKDOWN
            ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary-100 rounded-lg">
              <BarChart3 className="w-5 h-5 text-primary-800" />
            </div>
            <div>
              <h3 className="text-2xl font-heading text-neutral-900">Operating Expenses</h3>
              <p className="text-neutral-600">Cost structure and scaling efficiency</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Expense Category Breakdown */}
            <Card padding="lg" className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle as="h4">Expense Categories</CardTitle>
                <p className="text-neutral-600 mt-1">Year 5 operating cost breakdown</p>
              </CardHeader>
              <CardContent>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4"
                >
                  {opexCategories.map((cat, index) => {
                    const year5Val = cat.values[4]
                    const pctOfOpex = (year5Val / plTotalOpex[4]) * 100
                    return (
                      <motion.div key={cat.name} variants={itemVariants} className="group">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-neutral-700 group-hover:text-primary-800 transition-colors">
                            {cat.name}
                          </span>
                          <span className="font-medium text-neutral-900 tabular-nums">
                            {formatCurrencyFull(year5Val)}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full ${cat.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: `${pctOfOpex}%` }}
                              transition={{ duration: 0.8, delay: 0.6 + index * 0.1, ease: 'easeOut' }}
                            />
                          </div>
                          <span className="text-sm text-neutral-500 w-12 text-right tabular-nums">
                            {pctOfOpex.toFixed(1)}%
                          </span>
                        </div>
                      </motion.div>
                    )
                  })}

                  <motion.div variants={itemVariants} className="pt-4 mt-4 border-t-2 border-neutral-300">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-neutral-900">Total Year 5 OpEx</span>
                      <span className="font-heading text-xl text-neutral-900">
                        {formatCurrencyFull(plTotalOpex[4])}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>

            {/* OpEx as % of Revenue + Efficiency */}
            <Card padding="lg" className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle as="h4">Cost Efficiency</CardTitle>
                <p className="text-neutral-600 mt-1">Operating leverage as the business scales</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* OpEx / Revenue ratio per year */}
                  {plStatements.map((pl, i) => {
                    const opexPct = (pl.totalOpex / pl.revenue.total) * 100
                    const cogsPct = (pl.cogs / pl.revenue.total) * 100
                    const totalCostPct = opexPct + cogsPct
                    return (
                      <motion.div
                        key={pl.year}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + i * 0.08 }}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium text-neutral-700">Year {pl.year}</span>
                          <div className="flex items-center gap-3 text-sm">
                            <span className="text-neutral-500">
                              COGS: {cogsPct.toFixed(1)}%
                            </span>
                            <span className="text-neutral-500">
                              OpEx: {opexPct.toFixed(1)}%
                            </span>
                            <span className="font-medium text-neutral-900">
                              Total: {totalCostPct.toFixed(1)}%
                            </span>
                          </div>
                        </div>
                        {/* Stacked cost bar */}
                        <div className="h-3 bg-neutral-100 rounded-full overflow-hidden flex">
                          <motion.div
                            className="h-full bg-neutral-400"
                            initial={{ width: 0 }}
                            animate={{ width: `${cogsPct}%` }}
                            transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                          />
                          <motion.div
                            className="h-full bg-primary-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${opexPct}%` }}
                            transition={{ duration: 0.8, delay: 0.9 + i * 0.1 }}
                          />
                          <div className="h-full flex-1 bg-success-300" />
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-neutral-400">Costs</span>
                          <span className="text-xs text-success-600 font-medium">
                            {(100 - totalCostPct).toFixed(1)}% profit
                          </span>
                        </div>
                      </motion.div>
                    )
                  })}

                  {/* Legend */}
                  <div className="flex items-center gap-4 pt-2 border-t border-neutral-200">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-sm bg-neutral-400" />
                      <span className="text-xs text-neutral-500">COGS</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-sm bg-primary-500" />
                      <span className="text-xs text-neutral-500">OpEx</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-sm bg-success-300" />
                      <span className="text-xs text-neutral-500">Profit</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            UNIT ECONOMICS + USE OF FUNDS (existing)
            ═══════════════════════════════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Unit Economics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Card padding="lg" className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <DollarSign className="w-5 h-5 text-primary-800" />
                  </div>
                  <div>
                    <CardTitle as="h3">Unit Economics</CardTitle>
                    <p className="text-neutral-600 mt-1">Per-guest revenue and cost breakdown</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Revenue per guest */}
                  <div>
                    <p className="text-caption text-neutral-500 uppercase mb-3">Revenue per Guest</p>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-2"
                    >
                      {unitEconomics.revenuePerGuest.map((item) => (
                        <motion.div
                          key={item.name}
                          variants={itemVariants}
                          className="flex justify-between items-center py-2 border-b border-neutral-200 hover:bg-neutral-50 px-2 -mx-2 rounded transition-colors"
                        >
                          <span className="text-neutral-700">{item.name}</span>
                          <span className="font-medium text-neutral-900">{formatCurrencyFull(item.amount)}</span>
                        </motion.div>
                      ))}
                      <motion.div
                        variants={itemVariants}
                        className="flex justify-between items-center py-3 bg-gradient-to-r from-primary-50 to-primary-100/50 px-3 rounded-lg"
                      >
                        <span className="font-medium text-primary-800">Total Guest Revenue</span>
                        <span className="font-heading text-xl text-primary-800">
                          {formatCurrencyFull(unitEconomics.totalGuestRevenue)}
                        </span>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Direct costs */}
                  <div>
                    <p className="text-caption text-neutral-500 uppercase mb-3">Direct Costs per Guest</p>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-2"
                    >
                      {unitEconomics.directCostsPerGuest.slice(0, 4).map((item) => (
                        <motion.div
                          key={item.name}
                          variants={itemVariants}
                          className="flex justify-between items-center py-2 border-b border-neutral-200 hover:bg-neutral-50 px-2 -mx-2 rounded transition-colors"
                        >
                          <span className="text-neutral-700">{item.name}</span>
                          <span className="font-medium text-neutral-900">{formatCurrencyFull(item.amount)}</span>
                        </motion.div>
                      ))}
                      <motion.div
                        variants={itemVariants}
                        className="flex justify-between items-center py-3 bg-neutral-100 px-3 rounded-lg"
                      >
                        <span className="font-medium text-neutral-700">Total Direct Costs</span>
                        <span className="font-medium text-neutral-900">
                          {formatCurrencyFull(unitEconomics.totalDirectCosts)}
                        </span>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Gross profit */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="pt-4 border-t-2 border-secondary-400"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-neutral-900">Gross Profit per Guest</p>
                        <p className="text-sm text-neutral-500">{formatPercent(unitEconomics.contributionMargin)} margin</p>
                      </div>
                      <span className="font-heading text-3xl text-success-700">
                        {formatCurrencyFull(unitEconomics.grossProfitPerGuest)}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Use of Funds */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Card padding="lg" className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <PieChart className="w-5 h-5 text-primary-800" />
                  </div>
                  <div>
                    <CardTitle as="h3">Use of Funds</CardTitle>
                    <p className="text-neutral-600 mt-1">Capital allocation breakdown</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4"
                >
                  {useOfFunds.map((item, index) => (
                    <motion.div
                      key={item.category}
                      variants={itemVariants}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-neutral-700 group-hover:text-primary-800 transition-colors">
                          {item.category}
                        </span>
                        <span className="font-medium text-neutral-900">{formatCurrency(item.amount)}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary-600 to-primary-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${item.percentage}%` }}
                            transition={{ duration: 0.8, delay: 0.6 + index * 0.1, ease: 'easeOut' }}
                          />
                        </div>
                        <span className="text-sm text-neutral-500 w-12 text-right tabular-nums">
                          {item.percentage.toFixed(1)}%
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-neutral-500 mt-1">{item.description}</p>
                      )}
                    </motion.div>
                  ))}

                  {/* Total */}
                  <motion.div
                    variants={itemVariants}
                    className="pt-4 mt-4 border-t-2 border-primary-800"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-neutral-900">Total Capital Required</span>
                      <span className="font-heading text-2xl text-primary-800">
                        {formatCurrency(metrics.keyMetrics.totalProjectCost)}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Customer Acquisition Metrics */}
        <section className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-2xl font-heading text-neutral-900 mb-6"
          >
            Customer Acquisition
          </motion.h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                label: 'Blended CAC',
                value: formatCurrencyFull(unitEconomics.blendedCAC),
                subtitle: 'Cost to acquire one guest',
                delay: 0.8,
              },
              {
                label: 'Lifetime Value',
                value: formatCurrencyFull(unitEconomics.ltv),
                subtitle: 'Average revenue per guest',
                delay: 0.9,
              },
              {
                label: 'LTV:CAC Ratio',
                value: `${unitEconomics.ltvCacRatio.toFixed(1)}x`,
                subtitle: 'Exceptional unit economics',
                highlight: true,
                delay: 1.0,
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay, duration: 0.5 }}
              >
                <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="text-center">
                    <p className="text-caption text-neutral-500 uppercase mb-2">{item.label}</p>
                    <p className={`font-heading text-4xl ${item.highlight ? 'text-success-700' : 'text-neutral-900'}`}>
                      {item.value}
                    </p>
                    <p className="text-sm text-neutral-500 mt-2">{item.subtitle}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex justify-between items-center pt-8 border-t border-neutral-200"
        >
          <Link href="/team" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Team</span>
          </Link>
          <Link href="/risks">
            <Button variant="primary">
              Risk Factors
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
