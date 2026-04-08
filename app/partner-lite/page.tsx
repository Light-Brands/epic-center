'use client'

import { motion } from 'framer-motion'
import { Shield, Handshake, ArrowRight, Check } from 'lucide-react'
import { Card } from '@/components/ui'
import { Footer } from '@/components/layout'
import {
  PAYMENT_SCHEDULE,
  PAYMENT_TOTALS,
  TOTAL_RETURN,
  STEADY_STATE_DIVIDENDS,
  CUMULATIVE_RETURN,
  formatCurrency,
} from '@/lib/data/partner-scenarios'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
}

export default function PartnerLitePage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-800 to-primary-900" />
        <motion.div
          className="relative w-full sm:w-[70vw] mx-auto px-4 sm:px-0 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-400 mb-4">
            Partnership Proposal
          </p>
          <h1 className="text-3xl md:text-5xl font-display text-white mb-4 leading-tight">
            Full Asking Price. Full Recovery.
          </h1>
          <p className="text-lg text-primary-100 max-w-xl mx-auto">
            $11.9M purchase with a partnership structure designed to recover
            the full $25M you invested.
          </p>
        </motion.div>
      </section>

      <div className="w-full sm:w-[70vw] mx-auto py-10 px-4 sm:px-0">

        {/* Two Paths */}
        <motion.section className="mb-16" {...fadeUp}>
          <div className="grid md:grid-cols-2 gap-6">
            <Card padding="lg" className="border border-neutral-200">
              <p className="font-accent text-xs uppercase tracking-wider text-neutral-500 mb-2">Scenario A</p>
              <h3 className="font-heading text-xl text-neutral-900 mb-4">Clean Purchase</h3>
              <p className="font-heading text-4xl text-neutral-900 mb-2">$11.9M</p>
              <p className="text-sm text-neutral-500 mb-4">Full asking price. You walk away clean.</p>
              <div className="bg-neutral-50 rounded-lg p-3 text-center">
                <p className="text-xs font-accent uppercase text-neutral-500">Recovery</p>
                <p className="font-heading text-2xl text-neutral-800">48%</p>
              </div>
            </Card>

            <Card padding="lg" className="border-2 border-secondary-400 relative">
              <div className="absolute top-0 right-0 bg-secondary-500 text-white text-xs font-accent uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                Recommended
              </div>
              <p className="font-accent text-xs uppercase tracking-wider text-secondary-600 mb-2">Scenario B</p>
              <h3 className="font-heading text-xl text-neutral-900 mb-4">Partnership</h3>
              <p className="font-heading text-4xl text-secondary-600 mb-2">{formatCurrency(TOTAL_RETURN.totalFull)}</p>
              <p className="text-sm text-neutral-500 mb-4">Same price + interest + 10% equity + dividends for life.</p>
              <div className="bg-secondary-50 rounded-lg p-3 text-center">
                <p className="text-xs font-accent uppercase text-secondary-600">Recovery</p>
                <p className="font-heading text-2xl text-secondary-600">122%+</p>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* Key Terms */}
        <motion.section className="mb-16" {...fadeUp}>
          <h2 className="font-heading text-2xl text-neutral-900 mb-6">Partnership Terms</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {[
              { label: 'Purchase Price', value: '$11.9M' },
              { label: 'Down Payment', value: '$2.38M' },
              { label: 'Interest', value: '6%' },
              { label: 'Term', value: '6 Years' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-lg border border-neutral-100 p-4 text-center">
                <p className="text-xs font-accent uppercase tracking-wider text-neutral-500 mb-1">{item.label}</p>
                <p className="font-heading text-xl text-neutral-900">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Condensed payment schedule */}
          <Card padding="none" className="overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left px-3 py-2.5 font-accent text-xs uppercase tracking-wider">Period</th>
                    <th className="text-right px-3 py-2.5 font-accent text-xs uppercase tracking-wider">Payment</th>
                    <th className="text-right px-3 py-2.5 font-accent text-xs uppercase tracking-wider">Cumulative</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {PAYMENT_SCHEDULE.map((row) => (
                    <tr key={row.label}>
                      <td className="px-3 py-2 text-neutral-800">{row.label}</td>
                      <td className="px-3 py-2 text-right text-neutral-700">{formatCurrency(row.totalCash)}</td>
                      <td className="px-3 py-2 text-right font-medium text-neutral-900">{formatCurrency(row.cumulative)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-canvas-emphasis font-medium">
                    <td className="px-3 py-2.5">Total Cash to Jeff</td>
                    <td className="px-3 py-2.5 text-right">{formatCurrency(PAYMENT_TOTALS.totalCashToJeff)}</td>
                    <td className="px-3 py-2.5 text-right">{formatCurrency(PAYMENT_TOTALS.totalCashToJeff)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Card>

          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <Shield className="w-4 h-4 shrink-0" />
            <span>Jeff holds property title via fideicomiso until fully paid. He is the bank.</span>
          </div>
        </motion.section>

        {/* The $1M Reinvestment + Equity */}
        <motion.section className="mb-16" {...fadeUp}>
          <h2 className="font-heading text-2xl text-neutral-900 mb-4">The Reinvestment</h2>
          <Card padding="lg" className="bg-secondary-50 border border-secondary-200">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-xs font-accent uppercase tracking-wider text-secondary-600 mb-1">Reinvest</p>
                <p className="font-heading text-2xl text-neutral-900">$1M</p>
                <p className="text-xs text-neutral-500">Into property renovation</p>
              </div>
              <div>
                <p className="text-xs font-accent uppercase tracking-wider text-secondary-600 mb-1">Earn</p>
                <p className="font-heading text-2xl text-secondary-600">10%</p>
                <p className="text-xs text-neutral-500">Equity in the enterprise</p>
              </div>
              <div>
                <p className="text-xs font-accent uppercase tracking-wider text-secondary-600 mb-1">Worth</p>
                <p className="font-heading text-2xl text-secondary-600">{formatCurrency(TOTAL_RETURN.equityFull)}</p>
                <p className="text-xs text-neutral-500">At full expansion ($175M)</p>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Cumulative Return */}
        <motion.section className="mb-16" {...fadeUp}>
          <h2 className="font-heading text-2xl text-neutral-900 mb-4">Your Path Beyond $25M</h2>
          <Card padding="none" className="overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left px-3 py-2.5 font-accent text-xs uppercase tracking-wider">Year</th>
                    <th className="text-right px-3 py-2.5 font-accent text-xs uppercase tracking-wider">Cash</th>
                    <th className="text-right px-3 py-2.5 font-accent text-xs uppercase tracking-wider">Dividends</th>
                    <th className="text-right px-3 py-2.5 font-accent text-xs uppercase tracking-wider">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {CUMULATIVE_RETURN.map((row) => (
                    <tr key={row.label} className={row.year === 6 ? 'bg-secondary-50' : ''}>
                      <td className="px-3 py-2 text-neutral-800">{row.label}</td>
                      <td className="px-3 py-2 text-right text-neutral-700">{formatCurrency(row.cashReceived)}</td>
                      <td className="px-3 py-2 text-right text-neutral-500">{row.dividends > 0 ? formatCurrency(row.dividends) : '\u2014'}</td>
                      <td className="px-3 py-2 text-right font-medium text-neutral-900">
                        {formatCurrency(row.runningTotal)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="flex items-center gap-3 p-4 bg-success-50 border border-success-200 rounded-xl">
            <Check className="w-5 h-5 text-success-700 shrink-0" />
            <p className="text-sm text-success-800">
              <span className="font-medium">Year 6 total: {formatCurrency(CUMULATIVE_RETURN[6].runningTotal)}</span>
              {' '}(cash + dividends + 10% equity at $175M). Then {formatCurrency(STEADY_STATE_DIVIDENDS.low)}-{formatCurrency(STEADY_STATE_DIVIDENDS.high)}/yr in perpetual dividends.
            </p>
          </div>
        </motion.section>

        {/* Safety + Vision in one row */}
        <motion.section className="mb-16" {...fadeUp}>
          <div className="grid md:grid-cols-2 gap-6">
            <Card padding="lg">
              <h3 className="font-heading text-lg text-neutral-900 mb-4">Jeff's Safety Net</h3>
              <div className="space-y-3 text-sm">
                {[
                  'Title retained via fideicomiso until fully paid',
                  'First-position security. No creditor ahead of you.',
                  'Default = property back + all payments received',
                  'Equity is pure upside on top of secured debt',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card padding="lg">
              <h3 className="font-heading text-lg text-neutral-900 mb-4">What We Build Together</h3>
              <div className="space-y-3 text-sm">
                {[
                  'World\'s first luxury ibogaine medical retreat',
                  '60 casitas at full expansion on 45,000 m\u00B2',
                  'AI health intelligence platform (proprietary data)',
                  '$175M enterprise value at full expansion',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Handshake className="w-4 h-4 text-secondary-500 mt-0.5 shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section className="mb-12" {...fadeUp}>
          <Card padding="lg" className="bg-primary-800 text-white text-center py-12">
            <h2 className="text-2xl md:text-3xl font-display text-white mb-4">
              Let's Talk, Jeff
            </h2>
            <p className="text-primary-200 mb-6 max-w-lg mx-auto">
              Full asking price. No discount. Term sheet ready within days.
            </p>
            <a
              href="mailto:nick@light-brands.com?subject=Rancho%20Paraiso%20Oasis%20Partnership"
              className="inline-flex items-center justify-center font-accent font-semibold uppercase text-sm tracking-wider px-8 py-4 rounded-lg bg-secondary-500 text-primary-950 hover:bg-secondary-400 transition-all shadow-sm hover:shadow-glow-gold"
            >
              Schedule a Conversation <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Card>
        </motion.section>

        <div className="text-center text-xs text-neutral-400 pb-6">
          <p>Confidential. For discussion purposes only. All projections are forward-looking estimates.</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
