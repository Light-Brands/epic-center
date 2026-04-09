'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  Users,
  Briefcase,
} from 'lucide-react'
import { Card } from '@/components/ui'
import { MetricCard } from '@/components/financial'
import { Footer } from '@/components/layout'
import {
  PROPERTY_FACTS,
  SCENARIO_A,
  SELLER_FINANCE_TERMS,
  PAYMENT_SCHEDULE,
  PAYMENT_TOTALS,
  ENTERPRISE_VALUATIONS,
  ANNUAL_DISTRIBUTIONS,
  STEADY_STATE_DIVIDENDS,
  CUMULATIVE_RETURN,
  DEFAULT_SCENARIOS,
  TOTAL_RETURN,
  SCENARIO_C,
  SCENARIO_C_DISTRIBUTIONS,
  SCENARIO_C_STEADY_STATE,
  SCENARIO_C_RETURN,
  SCENARIO_C_CUMULATIVE,
  formatCurrency,
} from '@/lib/data/partner-scenarios'

type Scenario = 'a' | 'b' | 'c'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
}

const sectionTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
}

export default function PartnerPage() {
  const [selected, setSelected] = useState<Scenario>('b')

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
            Jeff, We Want to Pay<br className="hidden md:block" /> Your Full Asking Price
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-4">
            Three paths forward. From a clean $8 million purchase to a deep
            partnership that could recover the full $25 million you invested and beyond.
          </p>
          <p className="text-lg text-primary-200/70">
            Three paths. One property. Your choice.
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
            vision, risk, and years of commitment. We see the value you created, and
            we have built three paths that honor it.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <MetricCard
              label="Your Investment"
              value="$25M+"
              subtitle="Total capital invested"
              accent
            />
            <MetricCard
              label="Our Offer"
              value={formatCurrency(PROPERTY_FACTS.askingPrice)}
              subtitle="Your full asking price"
              accent
            />
            <MetricCard
              label="Deep Partnership"
              value="$113M+"
              subtitle="Total value at full expansion (49% equity)"
              trend="up"
              trendValue="454% recovery"
              accent
            />
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            Section 3: Three Paths Forward - Clickable Cards
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-16" {...fadeUp}>
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">Three Paths Forward</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            Each path starts with your property. The difference is how deep the
            partnership goes. Click any option to see the full details.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Scenario A Card */}
            <button
              onClick={() => setSelected('a')}
              className="text-left transition-all duration-300"
            >
              <Card
                padding="lg"
                className={`h-full border-2 transition-all duration-300 ${
                  selected === 'a'
                    ? 'border-neutral-800 shadow-lg ring-2 ring-neutral-800/20'
                    : 'border-neutral-200 hover:border-neutral-400'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selected === 'a' ? 'bg-neutral-800' : 'bg-neutral-100'
                  }`}>
                    <DollarSign className={`w-5 h-5 ${selected === 'a' ? 'text-white' : 'text-neutral-600'}`} />
                  </div>
                  <div>
                    <p className="font-accent text-xs uppercase tracking-wider text-neutral-500">Option A</p>
                    <h3 className="font-heading text-lg text-neutral-900">Clean Purchase</h3>
                  </div>
                </div>
                <p className="font-heading text-3xl text-neutral-900 mb-2">{formatCurrency(SCENARIO_A.purchasePrice)}</p>
                <p className="text-sm text-neutral-500 mb-4">Full asking price. Clean sale. Certainty.</p>
                <div className="bg-neutral-50 rounded-lg p-3">
                  <p className="text-xs font-accent uppercase tracking-wider text-neutral-500 mb-1">Recovery</p>
                  <p className="font-heading text-2xl text-neutral-900">32%</p>
                  <p className="text-xs text-neutral-500">of your $25M investment</p>
                </div>
              </Card>
            </button>

            {/* Scenario B Card */}
            <button
              onClick={() => setSelected('b')}
              className="text-left transition-all duration-300"
            >
              <Card
                padding="lg"
                className={`h-full border-2 relative overflow-hidden transition-all duration-300 ${
                  selected === 'b'
                    ? 'border-secondary-500 shadow-lg ring-2 ring-secondary-500/20'
                    : 'border-secondary-300 hover:border-secondary-400'
                }`}
              >
                <div className="absolute top-0 right-0 bg-secondary-500 text-white text-xs font-accent uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                  Recommended
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selected === 'b' ? 'bg-secondary-500' : 'bg-secondary-100'
                  }`}>
                    <Handshake className={`w-5 h-5 ${selected === 'b' ? 'text-white' : 'text-secondary-600'}`} />
                  </div>
                  <div>
                    <p className="font-accent text-xs uppercase tracking-wider text-secondary-600">Option B</p>
                    <h3 className="font-heading text-lg text-neutral-900">Partnership</h3>
                  </div>
                </div>
                <p className="font-heading text-3xl text-secondary-600 mb-2">{formatCurrency(SELLER_FINANCE_TERMS.purchasePrice)}</p>
                <p className="text-sm text-neutral-500 mb-4">Seller-financed. 10% equity. Income for life.</p>
                <div className="bg-secondary-50 rounded-lg p-3">
                  <p className="text-xs font-accent uppercase tracking-wider text-secondary-600 mb-1">Recovery</p>
                  <p className="font-heading text-2xl text-secondary-600">104%+</p>
                  <p className="text-xs text-secondary-700">of your $25M investment</p>
                </div>
              </Card>
            </button>

            {/* Scenario C Card */}
            <button
              onClick={() => setSelected('c')}
              className="text-left transition-all duration-300"
            >
              <Card
                padding="lg"
                className={`h-full border-2 relative overflow-hidden transition-all duration-300 ${
                  selected === 'c'
                    ? 'border-primary-600 shadow-lg ring-2 ring-primary-600/20'
                    : 'border-primary-300 hover:border-primary-400'
                }`}
              >
                <div className="absolute top-0 right-0 bg-primary-700 text-white text-xs font-accent uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                  Maximum Value
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selected === 'c' ? 'bg-primary-700' : 'bg-primary-100'
                  }`}>
                    <Users className={`w-5 h-5 ${selected === 'c' ? 'text-white' : 'text-primary-700'}`} />
                  </div>
                  <div>
                    <p className="font-accent text-xs uppercase tracking-wider text-primary-600">Option C</p>
                    <h3 className="font-heading text-lg text-neutral-900">Full Partnership</h3>
                  </div>
                </div>
                <p className="font-heading text-3xl text-primary-700 mb-2">{formatCurrency(SCENARIO_C.totalDealValue)}</p>
                <p className="text-sm text-neutral-500 mb-4">True co-ownership. 49% equity. Build together.</p>
                <div className="bg-primary-50 rounded-lg p-3">
                  <p className="text-xs font-accent uppercase tracking-wider text-primary-600 mb-1">Recovery</p>
                  <p className="font-heading text-2xl text-primary-700">454%+</p>
                  <p className="text-xs text-primary-700">of your $25M investment</p>
                </div>
              </Card>
            </button>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            Detail Sections - Change based on selected scenario
        ═══════════════════════════════════════════════════════════ */}
        <AnimatePresence mode="wait">
          {/* ═══════════════════════════════════════════════════════════
              SCENARIO A DETAILS: Clean Purchase
          ═══════════════════════════════════════════════════════════ */}
          {selected === 'a' && (
            <motion.div key="scenario-a" {...sectionTransition}>
              <section className="mb-24">
                <h2 className="text-3xl font-heading text-neutral-900 mb-4">Clean Purchase</h2>
                <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
                  The simplest path. We buy the property at your full asking price.
                  You receive $8 million, we pay the broker commission, and the
                  transaction is complete.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  {[
                    { label: 'Purchase Price', value: '$8M', icon: Building2 },
                    { label: 'Broker Commission', value: '$480K (6%)', icon: DollarSign },
                    { label: 'Commission Paid By', value: 'Us', icon: Handshake },
                    { label: 'Net to You', value: '$8M', icon: Shield },
                  ].map((item) => (
                    <Card key={item.label} padding="md" className="text-center">
                      <item.icon className="w-6 h-6 text-neutral-600 mx-auto mb-2" />
                      <p className="text-xs font-accent uppercase tracking-wider text-neutral-500 mb-1">{item.label}</p>
                      <p className="font-heading text-2xl text-neutral-900">{item.value}</p>
                    </Card>
                  ))}
                </div>

                <Card padding="lg" className="bg-neutral-50 border border-neutral-200">
                  <h3 className="font-heading text-xl text-neutral-900 mb-4">What This Means</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">You Get</h4>
                      <ul className="space-y-2 text-neutral-600">
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-neutral-500 mt-1 shrink-0" />
                          <span>$8 million at closing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-neutral-500 mt-1 shrink-0" />
                          <span>Clean break. No ongoing obligations.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-neutral-500 mt-1 shrink-0" />
                          <span>Speed and certainty of a cash transaction</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">The Trade-off</h4>
                      <ul className="space-y-2 text-neutral-600">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-neutral-400 mt-1 shrink-0" />
                          <span>32% recovery on your $25M investment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-neutral-400 mt-1 shrink-0" />
                          <span>No participation in the upside</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-neutral-400 mt-1 shrink-0" />
                          <span>No ongoing income from the property</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <div className="mt-8 flex items-center gap-4 p-6 bg-canvas-emphasis rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center shrink-0">
                    <DollarSign className="w-6 h-6 text-neutral-600" />
                  </div>
                  <div>
                    <p className="font-heading text-lg text-neutral-800">
                      Simple and clean, but leaves value on the table.
                    </p>
                    <p className="text-sm text-neutral-600">
                      Options B and C offer paths to recovering significantly more of your $25M investment.
                    </p>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* ═══════════════════════════════════════════════════════════
              SCENARIO B DETAILS: Seller-Financed Partnership (10%)
          ═══════════════════════════════════════════════════════════ */}
          {selected === 'b' && (
            <motion.div key="scenario-b" {...sectionTransition}>
              {/* Partnership Terms */}
              <section className="mb-24">
                <h2 className="text-3xl font-heading text-neutral-900 mb-4">The Partnership Terms</h2>
                <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
                  Seller financing at your full asking price with you in the strongest possible
                  position. You hold the title. You set the pace. You are protected at every step.
                </p>

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
              </section>

              {/* The Reinvestment */}
              <section className="mb-24">
                <h2 className="text-3xl font-heading text-neutral-900 mb-4">The Reinvestment</h2>
                <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
                  As part of the partnership, you reinvest $1M back into the property for
                  renovation and buildout. This capital goes directly into improving the asset
                  you built and earns you 10% equity in the enterprise we create together.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card padding="lg" className="text-center">
                    <DollarSign className="w-8 h-8 text-secondary-500 mx-auto mb-3" />
                    <p className="font-heading text-3xl text-neutral-900 mb-1">$1M</p>
                    <p className="text-sm text-neutral-600">Reinvested into your property</p>
                  </Card>
                  <Card padding="lg" className="text-center border-2 border-secondary-300">
                    <TrendingUp className="w-8 h-8 text-secondary-500 mx-auto mb-3" />
                    <p className="font-heading text-3xl text-secondary-600 mb-1">10%</p>
                    <p className="text-sm text-neutral-600">Equity in the enterprise</p>
                  </Card>
                  <Card padding="lg" className="text-center">
                    <Building2 className="w-8 h-8 text-secondary-500 mx-auto mb-3" />
                    <p className="font-heading text-3xl text-neutral-900 mb-1">{formatCurrency(TOTAL_RETURN.equityFull)}</p>
                    <p className="text-sm text-neutral-600">Equity value at full expansion</p>
                  </Card>
                </div>

                <Card padding="lg" className="bg-secondary-50 border border-secondary-200 mt-8">
                  <p className="text-neutral-800">
                    <span className="font-medium">The math:</span> Your $1M reinvestment earns 10% equity
                    worth {formatCurrency(TOTAL_RETURN.equityFull)} at full expansion, plus {formatCurrency(STEADY_STATE_DIVIDENDS.low)} to{' '}
                    {formatCurrency(STEADY_STATE_DIVIDENDS.high)} in annual dividends after the buyback. The funds go
                    directly into improving the property you already know better than anyone.
                  </p>
                </Card>
              </section>

              {/* Path to $25M */}
              <section className="mb-24">
                <h2 className="text-3xl font-heading text-neutral-900 mb-4">Your Path Beyond $25M</h2>
                <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
                  Cash from the seller financing is only part of the picture. As an equity
                  partner, you also receive dividends from operations and own a share of the
                  enterprise value. Here is how it all adds up.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  <MetricCard
                    label="Total Cash Received"
                    value={formatCurrency(TOTAL_RETURN.cashReceived)}
                    subtitle="Over 6 years (principal + interest)"
                    accent
                  />
                  <MetricCard
                    label="Reinvestment"
                    value={`-${formatCurrency(TOTAL_RETURN.reinvestment)}`}
                    subtitle="Into property renovation"
                  />
                  <MetricCard
                    label="Equity Value (Full Expansion)"
                    value={formatCurrency(TOTAL_RETURN.equityFull)}
                    subtitle="10% of $175M enterprise"
                    accent
                  />
                  <MetricCard
                    label="Total at Year 6"
                    value={formatCurrency(TOTAL_RETURN.totalFull)}
                    subtitle="Cash + equity combined"
                    trend="up"
                    trendValue="104% of $25M recovered"
                    accent
                  />
                </div>

                {/* Equity across models */}
                <h3 className="font-heading text-xl text-neutral-900 mb-4">Equity Value Across Models</h3>
                <Card padding="none" className="overflow-hidden mb-8">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-800 text-white">
                          <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Model</th>
                          <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Enterprise Value</th>
                          <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Your 10% Equity</th>
                          <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Net Cash + Equity Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        {[
                          { ...ENTERPRISE_VALUATIONS.conservative, equity: TOTAL_RETURN.equityConservative, total: TOTAL_RETURN.totalConservative },
                          { ...ENTERPRISE_VALUATIONS.base, equity: TOTAL_RETURN.equityBase, total: TOTAL_RETURN.totalBase },
                          { ...ENTERPRISE_VALUATIONS.fullExpansion, equity: TOTAL_RETURN.equityFull, total: TOTAL_RETURN.totalFull },
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
              </section>

              {/* Income for Life */}
              <section className="mb-24">
                <div className="text-center mb-10">
                  <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
                    The Perpetual Income Stream
                  </p>
                  <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-4">Income for Life</h2>
                  <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    After Year 6, your buyback is complete. But your equity stays. You own
                    10% of a growing enterprise that pays dividends every year.
                  </p>
                </div>

                <Card padding="none" className="overflow-hidden mb-8">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-800 text-white">
                          <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Year</th>
                          <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Enterprise Distributes</th>
                          <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Your 10% Share</th>
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
                              {row.jeffShare > 0 ? formatCurrency(row.jeffShare) : '$0'}
                            </td>
                          </tr>
                        ))}
                        <tr className="bg-secondary-50">
                          <td className="px-4 py-3 font-medium text-secondary-800">Year 7+</td>
                          <td className="px-4 py-3 text-right text-secondary-700">Growing annually</td>
                          <td className="px-4 py-3 text-right font-heading text-lg text-secondary-600">
                            {formatCurrency(STEADY_STATE_DIVIDENDS.low)}-{formatCurrency(STEADY_STATE_DIVIDENDS.high)}/yr
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>

                <Card padding="lg" className="bg-primary-800 text-white text-center">
                  <p className="font-heading text-xl mb-2">
                    After Year 6, you receive {formatCurrency(STEADY_STATE_DIVIDENDS.low)} to {formatCurrency(STEADY_STATE_DIVIDENDS.high)} per year.
                  </p>
                  <p className="text-primary-200">
                    Every year. Growing. Passive income from a partnership built on your property.
                  </p>
                </Card>
              </section>

              {/* Cumulative Return Timeline */}
              <section className="mb-24">
                <h2 className="text-3xl font-heading text-neutral-900 mb-4">Cumulative Return Timeline</h2>
                <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
                  Here is how your total return accumulates year by year across cash payments,
                  dividends, and equity value at the full expansion model.
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
                        {CUMULATIVE_RETURN.map((row) => (
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

                <div className="flex items-center gap-4 p-6 bg-success-50 border border-success-200 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-success-100 flex items-center justify-center shrink-0">
                    <Check className="w-6 h-6 text-success-700" />
                  </div>
                  <div>
                    <p className="font-heading text-lg text-success-800">
                      You cross $25M in Year 6 with equity included
                    </p>
                    <p className="text-sm text-success-700">
                      By end of Year 6, your total reaches {formatCurrency(CUMULATIVE_RETURN[6].runningTotal)}.
                      Then dividends continue growing every year after.
                    </p>
                  </div>
                </div>
              </section>

              {/* Safety Net */}
              <section className="mb-24">
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
              </section>
            </motion.div>
          )}

          {/* ═══════════════════════════════════════════════════════════
              SCENARIO C DETAILS: Full Partnership (49%)
          ═══════════════════════════════════════════════════════════ */}
          {selected === 'c' && (
            <motion.div key="scenario-c" {...sectionTransition}>
              {/* Deal Structure */}
              <section className="mb-24">
                <h2 className="text-3xl font-heading text-neutral-900 mb-4">The Full Partnership</h2>
                <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
                  This is not a sale. This is a co-ownership. You contribute your property
                  and operations capital. We contribute the vision, team, and execution.
                  Together, we build something worth far more than the property alone.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  {[
                    { label: 'Total Deal Value', value: '$12.9M', icon: Briefcase },
                    { label: 'Property', value: '$8M', icon: Building2 },
                    { label: 'Operations Capital', value: '$4.9M', icon: DollarSign },
                    { label: 'Your Equity', value: '49%', icon: Users },
                  ].map((item) => (
                    <Card key={item.label} padding="md" className="text-center">
                      <item.icon className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                      <p className="text-xs font-accent uppercase tracking-wider text-neutral-500 mb-1">{item.label}</p>
                      <p className="font-heading text-2xl text-neutral-900">{item.value}</p>
                    </Card>
                  ))}
                </div>

                <Card padding="lg" className="bg-primary-50 border border-primary-200 mb-8">
                  <h3 className="font-heading text-lg text-primary-900 mb-4">How It Works</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-primary-800 mb-3">Jeff Contributes</h4>
                      <ul className="space-y-3 text-neutral-700">
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary-200 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-medium text-primary-700">1</span>
                          </div>
                          <span>The property ($8M value) as the physical foundation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary-200 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-medium text-primary-700">2</span>
                          </div>
                          <span>$4.9M in operations capital for buildout and launch</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary-200 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-medium text-primary-700">3</span>
                          </div>
                          <span>Total contribution: $12.9M</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-800 mb-3">Jeff Receives</h4>
                      <ul className="space-y-3 text-neutral-700">
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                          <span><span className="font-medium">49% equity</span> in the enterprise</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                          <span><span className="font-medium">Revenue distributions</span> from day one of operations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                          <span>We pay the <span className="font-medium">6% broker commission</span> ($480K)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <div className="flex items-start gap-3 text-sm text-neutral-600">
                  <Handshake className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
                  <p>
                    Jeff is a true co-owner and partner in building the enterprise. His $4.9M
                    operations capital and the property value are paid back from revenue generated
                    by the operation.
                  </p>
                </div>
              </section>

              {/* Equity Position */}
              <section className="mb-24">
                <h2 className="text-3xl font-heading text-neutral-900 mb-4">Your Equity Position</h2>
                <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
                  49% ownership means you are not a passive investor. You are a co-builder.
                  As the enterprise grows, your equity grows with it.
                </p>

                <h3 className="font-heading text-xl text-neutral-900 mb-4">Equity Value Across Models</h3>
                <Card padding="none" className="overflow-hidden mb-8">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-800 text-white">
                          <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Model</th>
                          <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Enterprise Value</th>
                          <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Your 49% Equity</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        {[
                          { ...ENTERPRISE_VALUATIONS.conservative, equity: SCENARIO_C_RETURN.equityConservative },
                          { ...ENTERPRISE_VALUATIONS.base, equity: SCENARIO_C_RETURN.equityBase },
                          { ...ENTERPRISE_VALUATIONS.fullExpansion, equity: SCENARIO_C_RETURN.equityFull },
                        ].map((row) => (
                          <tr key={row.label} className="hover:bg-canvas-subtle transition-colors">
                            <td className="px-4 py-3 text-neutral-800">{row.label}</td>
                            <td className="px-4 py-3 text-right text-neutral-700">{formatCurrency(row.value)}</td>
                            <td className="px-4 py-3 text-right font-heading text-lg text-primary-700">{formatCurrency(row.equity)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>

                <div className="grid md:grid-cols-3 gap-6">
                  <MetricCard
                    label="Conservative Equity"
                    value={formatCurrency(SCENARIO_C_RETURN.equityConservative)}
                    subtitle="49% of $44.5M"
                    accent
                  />
                  <MetricCard
                    label="Base Case Equity"
                    value={formatCurrency(SCENARIO_C_RETURN.equityBase)}
                    subtitle="49% of $76.8M"
                    accent
                  />
                  <MetricCard
                    label="Full Expansion Equity"
                    value={formatCurrency(SCENARIO_C_RETURN.equityFull)}
                    subtitle="49% of $175M"
                    trend="up"
                    trendValue="343% of $25M"
                    accent
                  />
                </div>
              </section>

              {/* Revenue Distributions */}
              <section className="mb-24">
                <div className="text-center mb-10">
                  <p className="font-accent text-sm uppercase tracking-widest text-primary-500 mb-4">
                    Revenue From Day One
                  </p>
                  <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-4">Your Revenue Share</h2>
                  <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    As a 49% owner, you receive 49% of all enterprise distributions. Your
                    contribution is paid back from the revenue the operation generates.
                  </p>
                </div>

                <Card padding="none" className="overflow-hidden mb-8">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-800 text-white">
                          <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Year</th>
                          <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Enterprise Distributes</th>
                          <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Your 49% Share</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        {SCENARIO_C_DISTRIBUTIONS.map((row) => (
                          <tr key={row.year} className="hover:bg-canvas-subtle transition-colors">
                            <td className="px-4 py-3 text-neutral-800">Year {row.year}</td>
                            <td className="px-4 py-3 text-right text-neutral-700">
                              {row.totalDistributions > 0 ? formatCurrency(row.totalDistributions) : 'Foundation year'}
                            </td>
                            <td className="px-4 py-3 text-right font-medium text-primary-700">
                              {row.jeffShare > 0 ? formatCurrency(row.jeffShare) : '$0'}
                            </td>
                          </tr>
                        ))}
                        <tr className="bg-primary-50">
                          <td className="px-4 py-3 font-medium text-primary-800">Year 7+</td>
                          <td className="px-4 py-3 text-right text-primary-700">Growing annually</td>
                          <td className="px-4 py-3 text-right font-heading text-lg text-primary-700">
                            {formatCurrency(SCENARIO_C_STEADY_STATE.low)}-{formatCurrency(SCENARIO_C_STEADY_STATE.high)}/yr
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>

                <Card padding="lg" className="bg-primary-800 text-white text-center">
                  <p className="font-heading text-xl mb-2">
                    {formatCurrency(SCENARIO_C_STEADY_STATE.low)} to {formatCurrency(SCENARIO_C_STEADY_STATE.high)} per year. Every year.
                  </p>
                  <p className="text-primary-200">
                    Nearly $10M annually in passive income from an enterprise built on your property.
                  </p>
                </Card>
              </section>

              {/* Cumulative Return */}
              <section className="mb-24">
                <h2 className="text-3xl font-heading text-neutral-900 mb-4">Cumulative Return Timeline</h2>
                <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
                  Here is how your total return accumulates year by year across revenue
                  distributions and equity value at the full expansion model.
                </p>

                <Card padding="none" className="overflow-hidden mb-8">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-800 text-white">
                          <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Period</th>
                          <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Cumulative Distributions</th>
                          <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Equity Value</th>
                          <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Running Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        {SCENARIO_C_CUMULATIVE.map((row) => (
                          <tr key={row.label} className={`hover:bg-canvas-subtle transition-colors ${row.year === 6 ? 'bg-primary-50' : ''}`}>
                            <td className="px-4 py-3 font-medium text-neutral-800">{row.label}</td>
                            <td className="px-4 py-3 text-right text-neutral-700">{row.dividends > 0 ? formatCurrency(row.dividends) : '\u2014'}</td>
                            <td className="px-4 py-3 text-right text-neutral-600">{row.equityValue > 0 ? formatCurrency(row.equityValue) : '\u2014'}</td>
                            <td className="px-4 py-3 text-right font-heading text-lg text-neutral-900">
                              {row.runningTotal > 0 ? formatCurrency(row.runningTotal) : '\u2014'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-6 bg-success-50 border border-success-200 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-success-100 flex items-center justify-center shrink-0">
                      <Check className="w-6 h-6 text-success-700" />
                    </div>
                    <div>
                      <p className="font-heading text-lg text-success-800">
                        $12.9M recovered by Year 4
                      </p>
                      <p className="text-sm text-success-700">
                        Your full contribution paid back from distributions alone.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-6 bg-success-50 border border-success-200 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-success-100 flex items-center justify-center shrink-0">
                      <Check className="w-6 h-6 text-success-700" />
                    </div>
                    <div>
                      <p className="font-heading text-lg text-success-800">
                        $25M recovered by Year 5
                      </p>
                      <p className="text-sm text-success-700">
                        Full original investment recovered through distributions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Total Value */}
              <section className="mb-24">
                <h2 className="text-3xl font-heading text-neutral-900 mb-4">Total Value at Year 6</h2>
                <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
                  Distributions plus equity value. At full expansion, your total position
                  exceeds $113 million.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <MetricCard
                    label="Conservative"
                    value={formatCurrency(SCENARIO_C_RETURN.totalConservative)}
                    subtitle="Distributions + 49% of $44.5M"
                    accent
                  />
                  <MetricCard
                    label="Base Case"
                    value={formatCurrency(SCENARIO_C_RETURN.totalBase)}
                    subtitle="Distributions + 49% of $76.8M"
                    accent
                  />
                  <MetricCard
                    label="Full Expansion"
                    value={formatCurrency(SCENARIO_C_RETURN.totalFull)}
                    subtitle="Distributions + 49% of $175M"
                    trend="up"
                    trendValue="454% of $25M"
                    accent
                  />
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ═══════════════════════════════════════════════════════════
            What We Build Together (hidden for clean purchase)
        ═══════════════════════════════════════════════════════════ */}
        {selected !== 'a' && <motion.section className="mb-24" {...fadeUp}>
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
        </motion.section>}

        {/* ═══════════════════════════════════════════════════════════
            Let's Talk (always visible)
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
              Three paths. From a clean purchase to a deep partnership.
              Every one of them starts with your full asking price.
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
