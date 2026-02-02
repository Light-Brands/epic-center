'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
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
  formatCurrency,
  formatCurrencyFull,
  formatPercent,
  formatMultiple,
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

export default function FinancialsPage() {
  const { scenario } = useScenario()
  const metrics = getDashboardMetrics()
  const unitEconomics = getUnitEconomics()
  const useOfFunds = getUseOfFunds()
  const chartData = getRevenueChartData()

  // Get scenario-specific values
  const year1Revenue = getScenarioValue(metrics.keyMetrics.revenue.year1, scenario)
  const fiveYearRevenue = getScenarioValue(metrics.keyMetrics.revenue.fiveYearTotal, scenario)
  const projectIRR = getScenarioValue(metrics.keyMetrics.projectIRR, scenario)
  const fiveYearMOIC = getScenarioValue(metrics.keyMetrics.fiveYearMOIC, scenario)

  // Sparkline data for revenue trend
  const revenueSparkline = chartData.map((d) => d[scenario])

  return (
    <div className="min-h-screen bg-canvas pt-20">
      <div className="w-full sm:w-[70vw] mx-auto py-12">
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
              Comprehensive projections for Riviera Maya Jungle Estate
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
              label="Project IRR"
              rawValue={projectIRR * 100}
              formatFn={(v) => `${v.toFixed(0)}%`}
              value={formatPercent(projectIRR)}
              subtitle="5-year internal rate of return"
              accent
              delay={0.3}
            />
            <MetricCard
              label="5-Year MOIC"
              rawValue={fiveYearMOIC}
              formatFn={(v) => `${v.toFixed(1)}x`}
              value={formatMultiple(fiveYearMOIC)}
              subtitle="Multiple on invested capital"
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

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Unit Economics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Card padding="lg" className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle as="h3">Unit Economics</CardTitle>
                <p className="text-neutral-600 mt-1">Per-guest revenue and cost breakdown</p>
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
                <CardTitle as="h3">Use of Funds</CardTitle>
                <p className="text-neutral-600 mt-1">Capital allocation breakdown</p>
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
            ].map((item, index) => (
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
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
