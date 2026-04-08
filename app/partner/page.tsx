'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  TrendingUp,
  DollarSign,
  Home,
  Handshake,
  ArrowRight,
  Check,
  Lock,
  TreePine,
  Heart,
  Brain,
  Building2,
} from 'lucide-react'
import { Card } from '@/components/ui'
import { MetricCard } from '@/components/financial'
import { Footer } from '@/components/layout'
import {
  PROPERTY_FACTS,
  FIRE_SALE_SCENARIOS,
  SCENARIO_A,
  SELLER_FINANCE_TERMS,
  PAYMENT_SCHEDULE,
  PAYMENT_TOTALS,
  EQUITY_TIERS,
  ENTERPRISE_VALUATIONS,
  ANNUAL_DISTRIBUTIONS,
  STEADY_STATE_DIVIDENDS,
  CUMULATIVE_RETURN_10PCT,
  DEFAULT_SCENARIOS,
  TOTAL_RETURN_SUMMARY,
  formatCurrency,
} from '@/lib/data/partner-scenarios'

type EquityTier = 'base' | 'withReinvestment'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
}

export default function PartnerPage() {
  const [selectedTier, setSelectedTier] = useState<EquityTier>('withReinvestment')
  const tier = EQUITY_TIERS[selectedTier]
  const equityPct = tier.equityPercent
  const summary = selectedTier === 'base' ? TOTAL_RETURN_SUMMARY.at8Percent : TOTAL_RETURN_SUMMARY.at10Percent
  const dividendKey = selectedTier === 'base' ? 'at8Pct' : 'at10Pct'
  const steadyState = STEADY_STATE_DIVIDENDS[dividendKey]

  return (
    <div className="min-h-screen bg-canvas">
      {/* ═══════════════════════════════════════════════════════════════
          Section 1: Hero
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-800 to-primary-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(212, 166, 59, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(212, 114, 77, 0.2) 0%, transparent 40%)',
          }} />
        </div>
        <motion.div
          className="relative w-full sm:w-[70vw] mx-auto px-4 sm:px-0 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-400 mb-6">
            A Private Partnership Proposal
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6 leading-tight">
            Jeff, Your Land Could Be<br className="hidden md:block" /> Worth More Than You Think
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-4">
            You put $25 million into Rancho Paraiso Oasis. We believe that investment
            can come back to you. Not through a fire sale. Through a partnership.
          </p>
          <p className="text-lg text-primary-200/70">
            Two paths. One property. Your choice.
          </p>
        </motion.div>
      </section>

      <div className="w-full sm:w-[70vw] mx-auto py-12 px-4 sm:px-0">

        {/* ═══════════════════════════════════════════════════════════
            Section 2: What You Built
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-24" {...fadeUp}>
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">What You Built</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            Nine lots. 45,000 square meters of jungle compound in one of the most
            sought-after corridors in the Riviera Maya. Over $25 million invested into
            creating something extraordinary.
          </p>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            That investment represents more than construction costs. It represents
            vision, risk, and years of commitment. We see the value you created. The
            market may not reflect it right now, but we believe the right use of this
            property can.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <MetricCard
              label="Your Investment"
              value="$25M+"
              subtitle="Total capital invested"
              accent
            />
            <MetricCard
              label="Current List Price"
              value={formatCurrency(PROPERTY_FACTS.listPrice)}
              subtitle="Public asking price"
            />
            <MetricCard
              label="Implied Loss"
              value="-$13M+"
              subtitle="At current list price"
              trend="down"
              trendValue="53% loss"
            />
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            Section 3: The Fire Sale Reality
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-24" {...fadeUp}>
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">The Fire Sale Reality</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            A 20% agent commission on an $11.9M listing is $2.38 million that goes to
            someone else. And fire sales rarely close at list price. Here is what you
            actually net at various sale prices.
          </p>

          <Card padding="none" className="overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Scenario</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Sale Price</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Commission (20%)</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Net to You</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {FIRE_SALE_SCENARIOS.map((row) => (
                    <tr key={row.label} className="hover:bg-canvas-subtle transition-colors">
                      <td className="px-4 py-3 text-neutral-800">{row.label}</td>
                      <td className="px-4 py-3 text-right text-neutral-700">{formatCurrency(row.salePrice)}</td>
                      <td className="px-4 py-3 text-right text-error-600">{row.commission > 0 ? `-${formatCurrency(row.commission)}` : '$0'}</td>
                      <td className="px-4 py-3 text-right font-medium text-neutral-900">{formatCurrency(row.netToJeff)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card padding="lg" className="bg-secondary-50 border border-secondary-200">
            <p className="text-neutral-800">
              <span className="font-medium">The reality:</span> After commissions, a fire sale at list
              price nets you $9.52M. If it sells below list (common in fire sales), you
              could net less than $8M. Our clean offer of $8M with zero commission puts
              you in the same position with certainty.
            </p>
          </Card>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            Section 4: Two Paths Forward
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-24" {...fadeUp}>
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">Two Paths Forward</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            We are offering you a choice. One path is simple and immediate. The other
            is the path to recovering the full value of what you built.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Scenario A */}
            <Card padding="lg" className="border-2 border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-neutral-600" />
                </div>
                <div>
                  <p className="font-accent text-xs uppercase tracking-wider text-neutral-500">Scenario A</p>
                  <h3 className="font-heading text-xl text-neutral-900">Clean Purchase</h3>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Purchase price</span>
                  <span className="font-medium text-neutral-900">$8,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Commission</span>
                  <span className="font-medium text-success-700">$0</span>
                </div>
                <div className="border-t border-neutral-200 pt-3 flex justify-between">
                  <span className="font-medium text-neutral-800">Net to you</span>
                  <span className="font-heading text-2xl text-neutral-900">$8M</span>
                </div>
              </div>
              <p className="text-sm text-neutral-500 mb-4">
                Certainty. Speed. No ongoing relationship. You walk away clean.
                You recover 32% of your $25M investment.
              </p>
              <div className="bg-neutral-50 rounded-lg p-4">
                <p className="text-xs font-accent uppercase tracking-wider text-neutral-500 mb-1">Recovery</p>
                <p className="font-heading text-3xl text-neutral-900">32%</p>
                <p className="text-sm text-neutral-500">of your $25M investment</p>
              </div>
            </Card>

            {/* Scenario B */}
            <Card padding="lg" className="border-2 border-secondary-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary-500 text-white text-xs font-accent uppercase tracking-wider px-4 py-1.5 rounded-bl-lg">
                Recommended
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
                  <Handshake className="w-5 h-5 text-secondary-600" />
                </div>
                <div>
                  <p className="font-accent text-xs uppercase tracking-wider text-secondary-600">Scenario B</p>
                  <h3 className="font-heading text-xl text-neutral-900">Partnership</h3>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Day-one cash</span>
                  <span className="font-medium text-neutral-900">$1,600,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Total cash (6 years)</span>
                  <span className="font-medium text-neutral-900">$9,519,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Equity stake</span>
                  <span className="font-medium text-secondary-600">8-10%</span>
                </div>
                <div className="border-t border-neutral-200 pt-3 flex justify-between">
                  <span className="font-medium text-neutral-800">Total value at Year 6</span>
                  <span className="font-heading text-2xl text-secondary-600">$26M+</span>
                </div>
              </div>
              <p className="text-sm text-neutral-500 mb-4">
                You hold the title. You are the bank. You earn cash, equity, and
                dividends. Your $25M comes back, and then some.
              </p>
              <div className="bg-secondary-50 rounded-lg p-4">
                <p className="text-xs font-accent uppercase tracking-wider text-secondary-600 mb-1">Recovery</p>
                <p className="font-heading text-3xl text-secondary-600">104%+</p>
                <p className="text-sm text-secondary-700">of your $25M investment (at 10% equity, full expansion)</p>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            Section 5: The Partnership Terms
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-24" {...fadeUp}>
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">The Partnership Terms</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            Seller financing with you in the strongest possible position. You hold the
            title. You set the pace. You are protected at every step.
          </p>

          {/* Key terms */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Purchase Price', value: '$8M', icon: Building2 },
              { label: 'Down Payment', value: '$1.6M (20%)', icon: DollarSign },
              { label: 'Interest Rate', value: '6%', icon: TrendingUp },
              { label: 'Term', value: '6 Years', icon: Shield },
            ].map((item) => (
              <Card key={item.label} padding="md" className="text-center">
                <item.icon className="w-6 h-6 text-secondary-500 mx-auto mb-2" />
                <p className="text-xs font-accent uppercase tracking-wider text-neutral-500 mb-1">{item.label}</p>
                <p className="font-heading text-2xl text-neutral-900">{item.value}</p>
              </Card>
            ))}
          </div>

          {/* Payment schedule */}
          <h3 className="font-heading text-xl text-neutral-900 mb-4">Payment Schedule</h3>
          <p className="text-neutral-600 mb-6">
            Payments are graduated: lower in the early years while the business builds,
            higher in later years when cash flow is strong.
          </p>
          <Card padding="none" className="overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Period</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Principal</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Interest</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Total Payment</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Cumulative</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {PAYMENT_SCHEDULE.map((row) => (
                    <tr key={row.label} className="hover:bg-canvas-subtle transition-colors">
                      <td className="px-4 py-3 font-medium text-neutral-800">{row.label}</td>
                      <td className="px-4 py-3 text-right text-neutral-700">{formatCurrency(row.principal)}</td>
                      <td className="px-4 py-3 text-right text-neutral-500">{row.interest > 0 ? formatCurrency(row.interest) : '\u2014'}</td>
                      <td className="px-4 py-3 text-right text-neutral-700">{formatCurrency(row.totalCash)}</td>
                      <td className="px-4 py-3 text-right font-medium text-neutral-900">{formatCurrency(row.cumulative)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-canvas-emphasis font-medium">
                    <td className="px-4 py-3 text-neutral-900">Total</td>
                    <td className="px-4 py-3 text-right text-neutral-900">{formatCurrency(PAYMENT_TOTALS.totalPrincipal)}</td>
                    <td className="px-4 py-3 text-right text-neutral-700">{formatCurrency(PAYMENT_TOTALS.totalInterest)}</td>
                    <td className="px-4 py-3 text-right text-neutral-900">{formatCurrency(PAYMENT_TOTALS.totalCashToJeff)}</td>
                    <td className="px-4 py-3 text-right text-neutral-900">{formatCurrency(PAYMENT_TOTALS.totalCashToJeff)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Card>

          <div className="flex items-start gap-3 text-sm text-neutral-600">
            <Lock className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
            <p>
              You hold the property title through the fideicomiso for the entire term.
              Title transfers only after the final payment is received. You are the bank.
            </p>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            Section 6: Your Path to $25M
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-24" {...fadeUp}>
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">Your Path to $25M</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            Cash from the seller financing is only part of the picture. As an equity
            partner, you also receive dividends from operations and own a share of the
            enterprise value. Here is how it all adds up.
          </p>

          {/* Equity tier toggle */}
          <div className="flex gap-3 mb-8">
            <button
              onClick={() => setSelectedTier('base')}
              className={`px-5 py-2.5 rounded-lg font-accent text-sm uppercase tracking-wider transition-all ${
                selectedTier === 'base'
                  ? 'bg-primary-800 text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              8% Equity
            </button>
            <button
              onClick={() => setSelectedTier('withReinvestment')}
              className={`px-5 py-2.5 rounded-lg font-accent text-sm uppercase tracking-wider transition-all ${
                selectedTier === 'withReinvestment'
                  ? 'bg-secondary-500 text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              10% Equity (+$1M Reinvest)
            </button>
          </div>

          {/* Summary cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <MetricCard
              label="Cash Received"
              value={formatCurrency(summary.cashReceived)}
              subtitle="Over 6 years"
              accent
            />
            <MetricCard
              label={selectedTier === 'withReinvestment' ? 'Reinvestment' : 'Reinvestment'}
              value={summary.reinvestment > 0 ? `-${formatCurrency(summary.reinvestment)}` : '$0'}
              subtitle={summary.reinvestment > 0 ? 'Into renovation (earns 2% more equity)' : 'No additional capital needed'}
            />
            <MetricCard
              label="Equity Value (Full Expansion)"
              value={formatCurrency(summary.equityFull)}
              subtitle={`${(equityPct * 100).toFixed(0)}% of $175M enterprise`}
              accent
            />
            <MetricCard
              label="Total at Year 6"
              value={formatCurrency(summary.totalFull)}
              subtitle="Cash + equity combined"
              trend="up"
              trendValue={`${((summary.totalFull / PROPERTY_FACTS.ownerInvestment) * 100).toFixed(0)}% of $25M recovered`}
              accent
            />
          </div>

          {/* Equity value across models */}
          <h3 className="font-heading text-xl text-neutral-900 mb-4">Equity Value Across Models</h3>
          <Card padding="none" className="overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Model</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Enterprise Value</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Your {(equityPct * 100).toFixed(0)}% Equity</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Cash + Equity Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {[
                    { ...ENTERPRISE_VALUATIONS.conservative, equity: summary.equityConservative, total: summary.totalConservative },
                    { ...ENTERPRISE_VALUATIONS.base, equity: summary.equityBase, total: summary.totalBase },
                    { ...ENTERPRISE_VALUATIONS.fullExpansion, equity: summary.equityFull, total: summary.totalFull },
                  ].map((row) => (
                    <tr key={row.label} className="hover:bg-canvas-subtle transition-colors">
                      <td className="px-4 py-3 text-neutral-800">{row.label}</td>
                      <td className="px-4 py-3 text-right text-neutral-700">{formatCurrency(row.value)}</td>
                      <td className="px-4 py-3 text-right font-medium text-secondary-600">{formatCurrency(row.equity)}</td>
                      <td className="px-4 py-3 text-right font-medium text-neutral-900">{formatCurrency(row.total)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {selectedTier === 'withReinvestment' && (
            <Card padding="lg" className="bg-secondary-50 border border-secondary-200">
              <p className="text-neutral-800">
                <span className="font-medium">The reinvestment math:</span> Your $1M earns you an additional
                2% equity worth $3.5M at full expansion. That is a 3.5x return on the reinvestment alone,
                on top of everything else you receive.
              </p>
            </Card>
          )}
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            Section 7: The Reinvestment Option
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-24" {...fadeUp}>
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">The Reinvestment Option</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            This is your choice, not an obligation. If you reinvest $1M into the
            property renovation, your equity increases from 8% to 10%. That $1M is
            the single highest-return investment in this entire structure.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card padding="lg">
              <h3 className="font-heading text-lg text-neutral-900 mb-4">Without Reinvestment</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Equity stake</span>
                  <span className="font-medium">8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Equity value (full expansion)</span>
                  <span className="font-medium">{formatCurrency(TOTAL_RETURN_SUMMARY.at8Percent.equityFull)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Annual dividends (steady state)</span>
                  <span className="font-medium">{formatCurrency(STEADY_STATE_DIVIDENDS.at8Pct.low)}-{formatCurrency(STEADY_STATE_DIVIDENDS.at8Pct.high)}/yr</span>
                </div>
                <div className="border-t border-neutral-200 pt-3 flex justify-between">
                  <span className="font-medium">Total at Year 6</span>
                  <span className="font-heading text-xl">{formatCurrency(TOTAL_RETURN_SUMMARY.at8Percent.totalFull)}</span>
                </div>
              </div>
            </Card>

            <Card padding="lg" className="border-2 border-secondary-300 relative">
              <div className="absolute -top-3 left-4 bg-secondary-500 text-white text-xs font-accent uppercase tracking-wider px-3 py-1 rounded-full">
                +$1M Reinvestment
              </div>
              <h3 className="font-heading text-lg text-neutral-900 mb-4 mt-2">With Reinvestment</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Equity stake</span>
                  <span className="font-medium text-secondary-600">10%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Equity value (full expansion)</span>
                  <span className="font-medium text-secondary-600">{formatCurrency(TOTAL_RETURN_SUMMARY.at10Percent.equityFull)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Annual dividends (steady state)</span>
                  <span className="font-medium text-secondary-600">{formatCurrency(STEADY_STATE_DIVIDENDS.at10Pct.low)}-{formatCurrency(STEADY_STATE_DIVIDENDS.at10Pct.high)}/yr</span>
                </div>
                <div className="border-t border-neutral-200 pt-3 flex justify-between">
                  <span className="font-medium">Total at Year 6</span>
                  <span className="font-heading text-xl text-secondary-600">{formatCurrency(TOTAL_RETURN_SUMMARY.at10Percent.totalFull)}</span>
                </div>
              </div>
              <div className="mt-4 bg-secondary-50 rounded-lg p-3">
                <p className="text-sm text-secondary-800">
                  <span className="font-medium">Return on your $1M:</span> 3.5x
                  (earns $3.5M in additional equity value at full expansion)
                </p>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            Section 8: Income for Life
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-24" {...fadeUp}>
          <div className="text-center mb-10">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
              The Perpetual Income Stream
            </p>
            <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-4">Income for Life</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              After Year 6, your buyback is complete. But your equity stays. You own
              {' '}{(equityPct * 100).toFixed(0)}% of a growing enterprise that pays
              dividends every year. This is passive income from a property you were about
              to fire sale.
            </p>
          </div>

          <Card padding="none" className="overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Year</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Enterprise Distributes</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Your Share</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {ANNUAL_DISTRIBUTIONS.map((row) => (
                    <tr key={row.year} className="hover:bg-canvas-subtle transition-colors">
                      <td className="px-4 py-3 text-neutral-800">Year {row.year}</td>
                      <td className="px-4 py-3 text-right text-neutral-700">
                        {row.totalDistributions > 0 ? formatCurrency(row.totalDistributions) : 'Foundation year'}
                      </td>
                      <td className="px-4 py-3 text-right font-medium text-secondary-600">
                        {row[dividendKey] > 0 ? formatCurrency(row[dividendKey]) : '$0'}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-secondary-50">
                    <td className="px-4 py-3 font-medium text-secondary-800">Year 7+</td>
                    <td className="px-4 py-3 text-right text-secondary-700">Growing annually</td>
                    <td className="px-4 py-3 text-right font-heading text-lg text-secondary-600">
                      {formatCurrency(steadyState.low)}-{formatCurrency(steadyState.high)}/yr
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Card padding="lg" className="bg-primary-800 text-white text-center">
            <p className="font-heading text-xl mb-2">
              After Year 6, you receive {formatCurrency(steadyState.low)} to {formatCurrency(steadyState.high)} per year.
            </p>
            <p className="text-primary-200">
              Every year. Growing. From a property you were about to sell at a loss.
            </p>
          </Card>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            Section 9: Cumulative Return Timeline
        ═══════════════════════════════════════════════════════════ */}
        {selectedTier === 'withReinvestment' && (
          <motion.section className="mb-24" {...fadeUp}>
            <h2 className="text-3xl font-heading text-neutral-900 mb-4">Cumulative Return Timeline</h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
              Here is how your total return accumulates year by year across cash payments,
              dividends, and equity value. At the 10% equity level with full expansion.
            </p>

            <Card padding="none" className="overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary-800 text-white">
                      <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Period</th>
                      <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Cash Received</th>
                      <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Dividends</th>
                      <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Equity Value</th>
                      <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Running Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {CUMULATIVE_RETURN_10PCT.map((row) => (
                      <tr key={row.label} className={`hover:bg-canvas-subtle transition-colors ${row.year === 6 ? 'bg-secondary-50' : ''}`}>
                        <td className="px-4 py-3 font-medium text-neutral-800">{row.label}</td>
                        <td className="px-4 py-3 text-right text-neutral-700">{formatCurrency(row.cashReceived)}</td>
                        <td className="px-4 py-3 text-right text-neutral-600">{row.dividends > 0 ? formatCurrency(row.dividends) : '\u2014'}</td>
                        <td className="px-4 py-3 text-right text-neutral-600">{row.equityValue > 0 ? formatCurrency(row.equityValue) : '\u2014'}</td>
                        <td className="px-4 py-3 text-right font-heading text-lg text-neutral-900">
                          {formatCurrency(row.runningTotal)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* $25M crossing marker */}
            <div className="flex items-center gap-4 p-6 bg-success-50 border border-success-200 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-success-100 flex items-center justify-center shrink-0">
                <Check className="w-6 h-6 text-success-700" />
              </div>
              <div>
                <p className="font-heading text-lg text-success-800">
                  You cross $25M between Year 5 and Year 6
                </p>
                <p className="text-sm text-success-700">
                  And it keeps growing. By end of Year 6, your total reaches {formatCurrency(CUMULATIVE_RETURN_10PCT[6].runningTotal)}.
                </p>
              </div>
            </div>
          </motion.section>
        )}

        {/* ═══════════════════════════════════════════════════════════
            Section 10: Your Safety Net
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-24" {...fadeUp}>
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">Your Safety Net</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            This structure is designed so you cannot lose the asset. You hold the
            property title for the entire term. If anything goes wrong, you get the
            property back plus every payment we have already made to you.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Lock, title: 'Title Retained', desc: 'You hold the deed through the fideicomiso until fully paid.' },
              { icon: Shield, title: 'You Are the Bank', desc: 'First-position security. No other creditor ahead of you.' },
              { icon: Home, title: 'Asset Returns on Default', desc: 'If we default, you get the property back. Period.' },
              { icon: TrendingUp, title: 'Equity Is Upside', desc: 'Your equity is on top of the secured position. Pure bonus.' },
            ].map((item) => (
              <Card key={item.title} padding="md">
                <item.icon className="w-6 h-6 text-primary-600 mb-3" />
                <h4 className="font-medium text-neutral-900 mb-1 text-sm">{item.title}</h4>
                <p className="text-xs text-neutral-600">{item.desc}</p>
              </Card>
            ))}
          </div>

          <h3 className="font-heading text-xl text-neutral-900 mb-4">What Happens If We Default?</h3>
          <Card padding="none" className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Default At</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Cash + Dividends Received</th>
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {DEFAULT_SCENARIOS.map((row) => (
                    <tr key={row.year} className="hover:bg-canvas-subtle transition-colors">
                      <td className="px-4 py-3 font-medium text-neutral-800">Year {row.year}</td>
                      <td className="px-4 py-3 text-right text-neutral-900 font-medium">{formatCurrency(row.totalReceived)}</td>
                      <td className="px-4 py-3 text-neutral-700 max-w-md">{row.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            Section 11: What We Build Together
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-24" {...fadeUp}>
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">What We Build Together</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            Your property becomes the foundation for the world's first luxury medical
            retreat specializing in ibogaine-assisted therapy, addiction recovery, and
            total human optimization. A facility that does not exist anywhere on earth today.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { icon: Heart, title: 'Medical-Grade Healing', desc: 'Full ICU capability, 24/7 physician coverage, cardiac monitoring. The safest ibogaine facility in the world.' },
              { icon: TreePine, title: 'Luxury Sanctuary', desc: '60 treatment casitas at full expansion on your 45,000 m\u00B2 jungle compound. Five-star hospitality meets clinical excellence.' },
              { icon: Brain, title: 'AI Health Intelligence', desc: 'Every guest generates proprietary brain health data. The resulting dataset becomes one of the most valuable neurological assets on earth.' },
              { icon: TrendingUp, title: '$175M Enterprise', desc: 'Conservative Year 5 valuation at full expansion. Built on your land, powered by your property, generating real revenue.' },
            ].map((item) => (
              <Card key={item.title} padding="lg">
                <item.icon className="w-8 h-8 text-secondary-500 mb-4" />
                <h4 className="font-medium text-neutral-900 mb-2">{item.title}</h4>
                <p className="text-sm text-neutral-600">{item.desc}</p>
              </Card>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <MetricCard
              label="Year 5 Revenue"
              value="$17.7M+"
              subtitle="Annual operating revenue"
              accent
            />
            <MetricCard
              label="Break-Even"
              value="~3%"
              subtitle="Occupancy needed (25 guests/year)"
              accent
            />
            <MetricCard
              label="Gross Margin"
              value="82%"
              subtitle="Per guest contribution margin"
              accent
            />
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            Section 12: Let's Talk
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-16" {...fadeUp}>
          <Card padding="lg" className="bg-primary-800 text-white text-center py-16">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-400 mb-6">
              Next Steps
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-white mb-6">
              Let's Talk, Jeff
            </h2>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-4">
              This is a real offer from a team that sees the real value in what you built.
              We can have a term sheet ready within days of our conversation.
            </p>
            <p className="text-primary-200 mb-8">
              No agents. No commissions. No uncertainty. Just a direct conversation
              about which path makes sense for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:nick@light-brands.com?subject=Rancho%20Paraiso%20Oasis%20Partnership"
                className="inline-flex items-center justify-center font-accent font-semibold uppercase text-sm tracking-wider px-8 py-4 rounded-lg bg-secondary-500 text-primary-950 hover:bg-secondary-400 transition-all shadow-sm hover:shadow-glow-gold"
              >
                Schedule a Conversation <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </Card>
        </motion.section>

        {/* Disclaimer */}
        <div className="text-center text-xs text-neutral-400 pb-8">
          <p>
            This document is provided for discussion purposes only and does not constitute
            a binding offer or solicitation. All projections are forward-looking estimates
            based on management assumptions. Confidential.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
