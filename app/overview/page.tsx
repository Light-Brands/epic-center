'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  MapPin,
  TrendingUp,
  Building2,
  Cpu,
  Home,
  Heart,
  Calendar,
  Mail,
  ArrowRight,
  Users,
  Zap,
  Globe,
  Brain,
  Pill,
  Sparkles,
} from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  ComposedChart,
} from 'recharts'
import { Card, Button } from '@/components/ui'
import { Footer } from '@/components/layout'
import { OverviewMetricCard } from '@/components/overview/MetricCard'
import { ScenarioTable } from '@/components/overview/ScenarioTable'
import { OverviewFundsChart } from '@/components/overview/FundsChart'
import {
  DASHBOARD_METRICS,
  PL_STATEMENTS,
  CONSOLIDATED_PL_STATEMENTS,
  BUSINESS_UNITS,
  UNIT_ECONOMICS,
  INVESTMENT_RETURNS,
  CASITA_PHASING,
  REVENUE_CHART_DATA,
} from '@/lib/sheets/data'
import {
  formatCurrency,
  formatCurrencyFull,
  formatPercent,
  formatMultiple,
} from '@/lib/sheets'

// ─── Animation Variants ──────────────────────────────────────────────────
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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

// ─── Derived Data ────────────────────────────────────────────────────────
const metrics = DASHBOARD_METRICS.keyMetrics
const fiveYearRevenue = metrics.revenue.fiveYearTotal.base
const y1Ebitda = PL_STATEMENTS[0].ebitda
const y5Ebitda = PL_STATEMENTS[4].ebitda
const y1Margin = PL_STATEMENTS[0].ebitdaMarginPercent
const y5Margin = PL_STATEMENTS[4].ebitdaMarginPercent
const grossMargin = PL_STATEMENTS[0].grossMarginPercent

// Payback period: year where cumulative net income >= total investment
const paybackYear = INVESTMENT_RETURNS.yearlyReturns.find(
  (yr) => yr.cumulativeNetIncome >= INVESTMENT_RETURNS.totalCapitalRequired
)?.year ?? 3

// Break-even guests: total annual fixed costs / gross profit per guest
const y1FixedCosts = PL_STATEMENTS[0].totalOpex
const breakEvenGuests = Math.ceil(y1FixedCosts / UNIT_ECONOMICS.grossProfitPerGuest)
const y1Rooms = CASITA_PHASING.years[0].effectiveAvgRooms
const breakEvenOccupancy = (breakEvenGuests * 13) / (y1Rooms * 365) // 13-day avg stay

// ─── Revenue chart data (mini) ──────────────────────────────────────────
const revenueChartData = REVENUE_CHART_DATA.map((d) => ({
  year: d.year,
  revenue: d.base / 1000000,
}))

// ─── Consolidated P&L for table ────────────────────────────────────────
const consolidatedData = CONSOLIDATED_PL_STATEMENTS

// ─── Market pillars ────────────────────────────────────────────────────
const MARKET_PILLARS = [
  { icon: Globe, name: 'Medical Tourism', size: '$48-94B', color: 'text-primary-600' },
  { icon: Sparkles, name: 'Wellness Tourism', size: '$850B+', color: 'text-secondary-500' },
  { icon: Brain, name: 'Longevity Medicine', size: '$27-33B', color: 'text-primary-700' },
  { icon: Pill, name: 'Psychedelic Therapy', size: '$3-5B', color: 'text-accent-500' },
]

// ─── Business unit cards ───────────────────────────────────────────────
const BU_DISPLAY = [
  {
    unit: BUSINESS_UNITS[0], // Healing Center
    icon: Heart,
    y5Rev: formatCurrency(BUSINESS_UNITS[0].y5Revenue.base),
    y5EBITDA: formatCurrency(BUSINESS_UNITS[0].y5EBITDA.base),
    value: formatCurrency(BUSINESS_UNITS[0].standaloneValue.base),
  },
  {
    unit: BUSINESS_UNITS[1], // Real Estate
    icon: Building2,
    y5Rev: '$12M cumulative',
    y5EBITDA: '$12M cumulative',
    value: formatCurrency(BUSINESS_UNITS[1].standaloneValue.base),
  },
  {
    unit: BUSINESS_UNITS[2], // Property Management
    icon: Home,
    y5Rev: formatCurrency(BUSINESS_UNITS[2].y5Revenue.base),
    y5EBITDA: formatCurrency(BUSINESS_UNITS[2].y5EBITDA.base),
    value: formatCurrency(BUSINESS_UNITS[2].standaloneValue.base),
  },
  {
    unit: BUSINESS_UNITS[3], // Technology
    icon: Cpu,
    y5Rev: '$750K invested',
    y5EBITDA: 'Internal platform',
    value: formatCurrency(BUSINESS_UNITS[3].standaloneValue.base),
  },
]

// ─── Team ──────────────────────────────────────────────────────────────
const TEAM = [
  { name: 'Nicholas Courchesne', role: 'Founder & CEO' },
  { name: 'Jason Sparks', role: 'Co-Founder & COO' },
  { name: 'Dan Lawless', role: 'Technical Lead' },
  { name: 'Dr. Mariana Hoyo', role: 'Chief Medical Advisor' },
  { name: 'Eyob Mebrahtu', role: 'Head of Marketing' },
]

// ─── Chart tooltip ─────────────────────────────────────────────────────
function ChartTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-card border border-neutral-200">
        <p className="font-medium text-neutral-900 text-sm">{label}</p>
        <p className="text-primary-600 font-semibold text-sm">
          ${payload[0].value.toFixed(1)}M
        </p>
      </div>
    )
  }
  return null
}

// ═════════════════════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═════════════════════════════════════════════════════════════════════════
export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* ─── 1. HERO BANNER ──────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-800 via-primary-900 to-primary-950" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-400 via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full sm:w-[70vw] mx-auto px-4 sm:px-0 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <MapPin className="w-3.5 h-3.5 text-secondary-400" />
            <span className="text-xs font-accent font-semibold uppercase tracking-[0.15em] text-white/90">
              Tulum, Mexico &middot; 45,000 m&sup2;
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-3">
            Transformational Epicenter
          </h1>
          <p className="text-lg md:text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Medical-grade wellness meets luxury hospitality
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-sm text-primary-200">The Ask:</span>
            <span className="font-heading text-2xl md:text-3xl text-secondary-400">
              {formatCurrency(metrics.totalProjectCost)}
            </span>
            <span className="text-sm text-primary-300">seed round &middot; ~30% equity</span>
          </div>
        </motion.div>
      </section>

      <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-0 py-12">

        {/* ─── 2. KEY METRICS STRIP ────────────────────────────────── */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-16 -mt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <OverviewMetricCard
              label="Total Capital"
              value={formatCurrency(metrics.totalProjectCost)}
            />
            <OverviewMetricCard
              label="5-Year Revenue"
              value={formatCurrency(fiveYearRevenue)}
            />
            <OverviewMetricCard
              label="EBITDA Margin"
              value={`${(y1Margin * 100).toFixed(0)}% → ${(y5Margin * 100).toFixed(0)}%`}
              subtitle="Y1 to Y5 expansion"
            />
            <OverviewMetricCard
              label="MOIC (Base)"
              value={formatMultiple(metrics.fiveYearMOIC.base)}
            />
            <OverviewMetricCard
              label="IRR (Base)"
              value={formatPercent(metrics.projectIRR.base)}
            />
            <OverviewMetricCard
              label="Y5 Enterprise Value"
              value="~$147M"
              subtitle="Sum-of-parts"
            />
            <OverviewMetricCard
              label="Gross Margin"
              value={formatPercent(grossMargin)}
            />
            <OverviewMetricCard
              label="Payback"
              value={`${paybackYear - 1 + (paybackYear === 3 ? 0.7 : 0)} yrs`}
              subtitle="Capital recovery"
            />
          </div>
        </motion.section>

        {/* ─── 3. THE OPPORTUNITY ─────────────────────────────────── */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-4">The Opportunity</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mb-8">
            Transformational Epicenter sits at the convergence of four explosive growth markets,
            delivering medical-grade psychedelic therapy, bio-optimization, and luxury hospitality
            from a single integrated facility — the first of its kind at this scale.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {MARKET_PILLARS.map((m) => (
              <motion.div
                key={m.name}
                variants={itemVariants}
                className="rounded-xl bg-white border border-neutral-200 p-5 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <m.icon className={`w-8 h-8 ${m.color} mx-auto mb-3`} />
                <p className="font-heading text-base text-neutral-900 mb-1">{m.name}</p>
                <p className="font-mono text-lg text-primary-800 font-semibold">{m.size}</p>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-sm font-accent uppercase tracking-[0.12em] text-secondary-600 mt-6">
            Only facility integrating all four pillars
          </p>
        </motion.section>

        {/* ─── 4. FINANCIAL PROJECTIONS ───────────────────────────── */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-6">Financial Projections</h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Compact P&L Table */}
            <Card padding="lg" className="overflow-x-auto">
              <h3 className="font-heading text-lg text-neutral-900 mb-4">5-Year P&L Summary</h3>
              <div className="min-w-[400px]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-neutral-300">
                      <th className="text-left py-2 text-[10px] font-accent uppercase tracking-[0.12em] text-neutral-500">Metric</th>
                      {PL_STATEMENTS.map((pl) => (
                        <th key={pl.year} className="text-right py-2 text-[10px] font-accent uppercase tracking-[0.12em] text-neutral-500">
                          Y{pl.year}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* HC Revenue */}
                    <tr className="border-b border-neutral-100">
                      <td className="py-2 text-neutral-600">HC Revenue</td>
                      {PL_STATEMENTS.map((pl) => (
                        <td key={pl.year} className="text-right py-2 font-mono tabular-nums text-neutral-900">
                          {formatCurrency(pl.revenue.total)}
                        </td>
                      ))}
                    </tr>
                    {/* HC EBITDA */}
                    <tr className="border-b border-neutral-100">
                      <td className="py-2 text-neutral-600">HC EBITDA</td>
                      {PL_STATEMENTS.map((pl) => (
                        <td key={pl.year} className="text-right py-2 font-mono tabular-nums text-neutral-900">
                          {formatCurrency(pl.ebitda)}
                        </td>
                      ))}
                    </tr>
                    {/* EBITDA Margin */}
                    <tr className="border-b border-neutral-100">
                      <td className="py-2 text-neutral-600 italic">Margin</td>
                      {PL_STATEMENTS.map((pl) => (
                        <td key={pl.year} className="text-right py-2 font-mono tabular-nums text-primary-700 italic text-xs">
                          {(pl.ebitdaMarginPercent * 100).toFixed(0)}%
                        </td>
                      ))}
                    </tr>
                    {/* HC Net Income */}
                    <tr className="border-b border-neutral-100">
                      <td className="py-2 text-neutral-600">HC Net Income</td>
                      {PL_STATEMENTS.map((pl) => (
                        <td key={pl.year} className="text-right py-2 font-mono tabular-nums text-neutral-900">
                          {formatCurrency(pl.netIncome)}
                        </td>
                      ))}
                    </tr>
                    {/* Divider */}
                    <tr>
                      <td colSpan={6} className="py-1">
                        <div className="h-px bg-neutral-300" />
                      </td>
                    </tr>
                    {/* Consolidated Revenue */}
                    <tr className="border-b border-neutral-100 bg-primary-50/50">
                      <td className="py-2 font-medium text-primary-800">Consol. Revenue</td>
                      {consolidatedData.map((c) => (
                        <td key={c.year} className="text-right py-2 font-mono tabular-nums font-medium text-primary-800">
                          {formatCurrency(c.totalConsolidatedRevenue)}
                        </td>
                      ))}
                    </tr>
                    {/* Consolidated EBITDA */}
                    <tr className="bg-primary-50/50">
                      <td className="py-2 font-medium text-primary-800">Consol. EBITDA</td>
                      {consolidatedData.map((c) => (
                        <td key={c.year} className="text-right py-2 font-mono tabular-nums font-medium text-primary-800">
                          {formatCurrency(c.totalConsolidatedEBITDA)}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Mini Revenue Chart */}
            <Card padding="lg">
              <h3 className="font-heading text-lg text-neutral-900 mb-1">Revenue Trajectory</h3>
              <p className="text-sm text-neutral-500 mb-4">Base case healing center revenue ($M)</p>
              <div className="h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={revenueChartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1a3a3a" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#1a3a3a" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e8e8e3" vertical={false} />
                    <XAxis
                      dataKey="year"
                      tick={{ fill: '#7a7a70', fontSize: 11 }}
                      axisLine={{ stroke: '#e8e8e3' }}
                      tickLine={false}
                    />
                    <YAxis
                      tickFormatter={(v: number) => `$${v}M`}
                      tick={{ fill: '#7a7a70', fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                      width={50}
                    />
                    <Tooltip content={<ChartTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      fill="url(#revenueGradient)"
                      stroke="none"
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#1a3a3a"
                      strokeWidth={3}
                      dot={{ fill: '#1a3a3a', r: 5 }}
                      activeDot={{ r: 7 }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* ─── 5. FOUR BUSINESS UNITS ─────────────────────────────── */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-6">Four Business Units</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {BU_DISPLAY.map((bu) => (
              <motion.div key={bu.unit.id} variants={itemVariants}>
                <Card padding="lg" hoverable className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-primary-100 rounded-lg flex-shrink-0">
                      <bu.icon className="w-5 h-5 text-primary-800" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-lg text-neutral-900 mb-1">{bu.unit.name}</h3>
                      <p className="text-xs text-neutral-500 mb-3 line-clamp-2">{bu.unit.description}</p>
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <p className="text-[9px] font-accent uppercase tracking-[0.12em] text-neutral-400">Y5 Revenue</p>
                          <p className="font-mono text-sm font-semibold text-neutral-900">{bu.y5Rev}</p>
                        </div>
                        <div>
                          <p className="text-[9px] font-accent uppercase tracking-[0.12em] text-neutral-400">Y5 EBITDA</p>
                          <p className="font-mono text-sm font-semibold text-neutral-900">{bu.y5EBITDA}</p>
                        </div>
                        <div>
                          <p className="text-[9px] font-accent uppercase tracking-[0.12em] text-neutral-400">Implied Value</p>
                          <p className="font-mono text-sm font-semibold text-primary-800">{bu.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ─── 6. UNIT ECONOMICS ──────────────────────────────────── */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-6">Unit Economics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <OverviewMetricCard
              label="Revenue / Guest"
              value={formatCurrencyFull(UNIT_ECONOMICS.totalGuestRevenue)}
            />
            <OverviewMetricCard
              label="Direct Cost / Guest"
              value={formatCurrencyFull(UNIT_ECONOMICS.totalDirectCosts)}
            />
            <OverviewMetricCard
              label="Gross Margin"
              value={formatPercent(UNIT_ECONOMICS.contributionMargin)}
            />
            <OverviewMetricCard
              label="LTV : CAC"
              value={`${UNIT_ECONOMICS.ltvCacRatio.toFixed(1)}x`}
            />
            <OverviewMetricCard
              label="Break-Even Occ."
              value={`~${(breakEvenOccupancy * 100).toFixed(0)}%`}
              subtitle={`${breakEvenGuests} guests/yr`}
            />
            <OverviewMetricCard
              label="Blended CAC"
              value={formatCurrencyFull(UNIT_ECONOMICS.blendedCAC)}
            />
          </div>
        </motion.section>

        {/* ─── 7. RETURN PROFILE ──────────────────────────────────── */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-6">Return Profile</h2>
          <ScenarioTable />
        </motion.section>

        {/* ─── 8. USE OF FUNDS ────────────────────────────────────── */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-6">Use of Funds</h2>
          <Card padding="lg">
            <OverviewFundsChart />
          </Card>
        </motion.section>

        {/* ─── 9. CAPACITY & PHASING ──────────────────────────────── */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-6">Capacity & Phasing</h2>
          <Card padding="lg">
            <div className="space-y-6">
              {/* Timeline track */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200" />
                {CASITA_PHASING.years.map((yr, i) => (
                  <motion.div
                    key={yr.year}
                    variants={itemVariants}
                    className="relative pl-10 pb-6 last:pb-0"
                  >
                    <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-primary-800 border-2 border-white" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <div>
                        <span className="font-heading text-lg text-neutral-900">Year {yr.year}</span>
                        <span className="text-neutral-400 mx-2">&middot;</span>
                        <span className="text-sm text-neutral-600">
                          {yr.startRooms} → {yr.endRooms} casitas
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="font-mono text-neutral-700">{(yr.occupancy * 100).toFixed(0)}% occ.</span>
                        <span className="font-mono text-primary-800 font-semibold">{yr.guests.toLocaleString()} guests</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-neutral-200">
                <Zap className="w-4 h-4 text-secondary-500" />
                <p className="text-sm text-neutral-600 italic">
                  Expansion funded from operating cash flow — no additional raise
                </p>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* ─── 10. LEADERSHIP + CTA ───────────────────────────────── */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-6">Leadership</h2>
          <Card padding="lg" className="mb-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {TEAM.map((member) => (
                <div key={member.name} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-primary-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-neutral-900 truncate">{member.name}</p>
                    <p className="text-xs text-neutral-500 truncate">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* CTA */}
          <Card padding="lg" className="bg-gradient-to-br from-primary-800 to-primary-900 text-white">
            <div className="text-center max-w-xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-heading mb-3">Ready to Learn More?</h3>
              <p className="text-primary-200 mb-6">
                Access the full data room or schedule a conversation with our team.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/data-room">
                  <Button variant="accent" size="sm">
                    Request Data Room Access
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="mailto:nicholas@lightbrands.ai">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="border-white/30 text-white hover:bg-white hover:text-primary-900"
                  >
                    <Calendar className="mr-2 w-4 h-4" />
                    Schedule a Call
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Disclaimer */}
        <section className="mb-16">
          <Card padding="md" className="bg-neutral-100 border border-neutral-200">
            <p className="text-xs text-neutral-500 leading-relaxed">
              <strong>Important Disclosures:</strong> This presentation is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Any such offer will be made only by means of a confidential private placement memorandum and only to qualified investors in jurisdictions where permitted by law. Past performance is not indicative of future results. The projections and estimates contained herein involve significant elements of subjective judgment and analysis. Actual results may differ materially from those projected. Investment involves substantial risk, including the potential loss of principal.
            </p>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  )
}
