'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Building2, Users, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'
import { MetricCard, ScenarioToggle } from '@/components/financial'
import { AnimatedValue } from '@/components/animation/CountUp'
import { useScenario } from '@/lib/context/ScenarioContext'
import {
  getInvestmentReturns,
  getDashboardMetrics,
  getPLStatements,
  getEnterpriseValuation,
  getBusinessUnits,
  formatCurrency,
  formatCurrencyFull,
  formatPercent,
  formatMultiple,
  getScenarioValue,
} from '@/lib/sheets'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

export default function ReturnsPage() {
  const { scenario } = useScenario()
  const returns = getInvestmentReturns()
  const metrics = getDashboardMetrics()
  const plStatements = getPLStatements()
  const enterprise = getEnterpriseValuation()
  const businessUnits = getBusinessUnits()

  const irr = getScenarioValue(returns.irr, scenario)
  const moic = getScenarioValue(returns.moic, scenario)

  // Year 5 enterprise values from enterprise valuation data
  const exitValue = enterprise.sumOfPartsValue[scenario]

  return (
    <div className="min-h-screen bg-canvas pt-20">
      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* Hero Section */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8"
          >
            <div>
              <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
                Exit Strategy
              </p>
              <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-3">
                Investor Returns
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl">
                A clear path to liquidity with multiple exit options and strong projected returns
                across all four operating units.
              </p>
            </div>
            <ScenarioToggle showDescriptions />
          </motion.div>

          {/* Key Return Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              label="Project IRR"
              rawValue={irr * 100}
              formatFn={(v) => `${v.toFixed(0)}%`}
              value={formatPercent(irr)}
              subtitle="5-year internal rate of return"
              accent
              delay={0.1}
            />
            <MetricCard
              label="5-Year MOIC"
              rawValue={moic}
              formatFn={(v) => `${v.toFixed(1)}x`}
              value={formatMultiple(moic)}
              subtitle="Multiple on invested capital"
              delay={0.2}
            />
            <MetricCard
              label="Total Investment"
              value={formatCurrency(returns.totalCapitalRequired)}
              subtitle="All-equity structure"
              delay={0.3}
            />
            <MetricCard
              label="Y5 Enterprise Value"
              value={formatCurrency(exitValue)}
              subtitle="Sum-of-parts (4 units)"
              trend="up"
              trendValue="Year 5"
              delay={0.4}
            />
          </div>
        </section>

        {/* Enterprise Value Bridge */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16"
        >
          <Card padding="lg" className="hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-heading text-neutral-900 mb-6">Enterprise Value Bridge</h3>
            <p className="text-neutral-600 mb-8">
              Year 5 enterprise value of {formatCurrency(exitValue)} built from four distinct operating units.
            </p>
            <div className="space-y-4">
              {businessUnits.map((unit) => {
                const unitValue = unit.standaloneValue[scenario]
                const percentage = (unitValue / exitValue) * 100
                return (
                  <div key={unit.id}>
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <span className="font-medium text-neutral-900">{unit.name}</span>
                        <span className="text-sm text-neutral-500 ml-2">
                          {unit.y5EBITDA[scenario] > 0
                            ? `${unit.multiple.toFixed(1)}x EBITDA`
                            : unit.multipleLabel}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-heading text-lg text-primary-800">{formatCurrency(unitValue)}</span>
                        <span className="text-sm text-neutral-500 ml-2">({percentage.toFixed(0)}%)</span>
                      </div>
                    </div>
                    <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-primary-600"
                      />
                    </div>
                  </div>
                )
              })}
              <div className="pt-4 mt-4 border-t-2 border-primary-800 flex justify-between items-center">
                <span className="font-heading text-lg text-primary-900">Combined Enterprise Value</span>
                <span className="font-heading text-2xl text-primary-900">{formatCurrency(exitValue)}</span>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Return Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <Card padding="lg" className="hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-heading text-neutral-900 mb-8">Return Timeline</h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-neutral-200 hidden md:block" />

              {/* Year markers */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-5 gap-6"
              >
                {returns.yearlyReturns.map((year, index) => (
                  <motion.div key={year.year} variants={itemVariants} className="relative">
                    {/* Dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 300 }}
                      className="hidden md:flex absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 border-4 border-white shadow"
                    />

                    <Card
                      className={`mt-12 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                        index === returns.yearlyReturns.length - 1 ? 'border-2 border-secondary-400' : ''
                      }`}
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
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Card>
        </motion.section>

        {/* Exit Strategies */}
        <section className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl font-heading text-neutral-900 mb-6"
          >
            Exit Pathways
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Building2,
                title: 'Strategic Sale',
                timeline: 'Year 5-7',
                description: 'Sale to hospitality group, healthcare system, or wellness conglomerate seeking turnkey medical retreat operations with integrated real estate.',
                multiple: '8-10x EBITDA',
                likelihood: 'Primary',
              },
              {
                icon: Users,
                title: 'Private Equity',
                timeline: 'Year 4-6',
                description: 'Acquisition by PE firm building a platform in the wellness or alternative healthcare space. Four-unit structure appeals to platform-oriented buyers.',
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
            ].map((exit, index) => (
              <motion.div key={exit.title} variants={itemVariants}>
                <Card padding="lg" className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, type: 'spring', stiffness: 200 }}
                      className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center"
                    >
                      <exit.icon className="w-6 h-6 text-primary-600" />
                    </motion.div>
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
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Return Scenarios */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-16"
        >
          <Card padding="lg" className="hover:shadow-lg transition-shadow duration-300">
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
                  {[
                    {
                      label: '5-Year Healing Center Revenue',
                      conservative: formatCurrency(metrics.keyMetrics.revenue.fiveYearTotal.conservative),
                      base: formatCurrency(metrics.keyMetrics.revenue.fiveYearTotal.base),
                      aggressive: formatCurrency(metrics.keyMetrics.revenue.fiveYearTotal.aggressive),
                    },
                    {
                      label: 'Project IRR',
                      conservative: formatPercent(returns.irr.conservative),
                      base: formatPercent(returns.irr.base),
                      aggressive: formatPercent(returns.irr.aggressive),
                    },
                    {
                      label: '5-Year MOIC',
                      conservative: formatMultiple(returns.moic.conservative),
                      base: formatMultiple(returns.moic.base),
                      aggressive: formatMultiple(returns.moic.aggressive),
                    },
                    {
                      label: 'Y5 Enterprise Value (SOTP)',
                      conservative: formatCurrency(enterprise.sumOfPartsValue.conservative),
                      base: formatCurrency(enterprise.sumOfPartsValue.base),
                      aggressive: formatCurrency(enterprise.sumOfPartsValue.aggressive),
                    },
                    {
                      label: '9-Method Post-Money Valuation',
                      conservative: formatCurrency(enterprise.weightedAvgPostMoney.conservative),
                      base: formatCurrency(enterprise.weightedAvgPostMoney.base),
                      aggressive: formatCurrency(enterprise.weightedAvgPostMoney.aggressive),
                    },
                  ].map((row, index) => (
                    <motion.tr
                      key={row.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors"
                    >
                      <td className="py-4 pr-4 text-neutral-700">{row.label}</td>
                      <td className="text-center py-4 px-4">{row.conservative}</td>
                      <td className={`text-center py-4 px-4 font-medium ${scenario === 'base' ? 'bg-primary-50 text-primary-800' : ''}`}>
                        {row.base}
                      </td>
                      <td className="text-center py-4 pl-4">{row.aggressive}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.section>

        {/* Value Creation Drivers */}
        <section className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-2xl font-heading text-neutral-900 mb-6"
          >
            Value Creation Drivers
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                title: 'Healing Center Growth',
                description: 'Revenue growth driven by phased capacity expansion from 30 to 60 casitas over 5 years, plus bio-optimization and aftercare add-ons reaching $35.5M Y5 revenue.',
                impact: `${formatCurrency(businessUnits[0].standaloneValue[scenario])} value`,
              },
              {
                title: 'Margin Expansion',
                description: 'EBITDA margin improvement from 43% in Year 1 to 61% at full capacity through operational leverage on doubled room count.',
                impact: '+18pp margin expansion',
              },
              {
                title: 'Villa Real Estate',
                description: '48-villa condo-hotel program generating $12M cumulative development fees (Y1-Y4) plus recurring management fees ($1.7M/yr at full operations).',
                impact: `${formatCurrency(businessUnits[1].standaloneValue[scenario] + businessUnits[2].standaloneValue[scenario])} combined`,
              },
              {
                title: 'Technology Platform',
                description: '14 integrated systems valued at $7.5M (cost-replacement + scalability). Enables 60% cost reduction for new-site deployment.',
                impact: `${formatCurrency(businessUnits[3].standaloneValue[scenario])} IP value`,
              },
            ].map((driver) => (
              <motion.div key={driver.title} variants={itemVariants}>
                <Card padding="lg" className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-medium text-neutral-900">{driver.title}</h4>
                    <span className="text-sm font-accent text-success-600 bg-success-50 px-2 py-1 rounded whitespace-nowrap ml-2">
                      {driver.impact}
                    </span>
                  </div>
                  <p className="text-neutral-600">{driver.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Investment Summary */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-16"
        >
          <Card padding="lg" className="bg-gradient-to-r from-primary-800 to-primary-900 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-display font-semibold mb-4 text-white">Investment Summary</h3>
                <p className="text-primary-200 mb-6">
                  A compelling risk-adjusted opportunity in a rapidly growing market with
                  multiple paths to attractive returns across four integrated business units.
                </p>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3"
                >
                  {[
                    { label: 'Investment Required', value: formatCurrencyFull(returns.totalCapitalRequired) },
                    { label: 'Target IRR', value: formatPercent(returns.irr.base) },
                    { label: 'Target MOIC', value: formatMultiple(returns.moic.base) },
                    { label: 'Y5 Enterprise Value', value: formatCurrency(enterprise.sumOfPartsValue.base) },
                    { label: 'Investment Horizon', value: '5-7 Years' },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      variants={itemVariants}
                      className="flex justify-between items-center py-2 border-b border-primary-700 hover:bg-primary-700/30 px-2 -mx-2 rounded transition-colors"
                    >
                      <span className="text-primary-200">{item.label}</span>
                      <span className="font-medium">{item.value}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.4, type: 'spring', stiffness: 150 }}
                  className="text-center"
                >
                  <p className="text-primary-300 text-sm uppercase tracking-wide mb-2">Projected Return</p>
                  <p className="font-heading text-6xl text-secondary-400 mb-2">
                    <AnimatedValue value={moic} format={(v) => `${v.toFixed(1)}x`} duration={0.8} />
                  </p>
                  <p className="text-primary-200">on invested capital</p>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-between items-center pt-8 border-t border-neutral-200"
        >
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
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
