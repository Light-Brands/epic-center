'use client'

import { motion } from 'framer-motion'
import {
  DollarSign,
  Calendar,
  TrendingUp,
  Shield,
  Lock,
  Building2,
  FileText,
  Check,
  ArrowRight,
  Briefcase,
  Clock,
} from 'lucide-react'
import { Card, Button } from '@/components/ui'
import { MetricCard } from '@/components/financial'
import { Footer } from '@/components/layout'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
}

const KEY_TERMS = [
  { label: 'Principal', value: '$8,000,000', icon: DollarSign },
  { label: 'Interest Rate', value: '9% p.a.', icon: TrendingUp },
  { label: 'Term', value: '36 Months', icon: Calendar },
  { label: 'Repayment', value: 'Bullet', icon: Briefcase },
]

const PAYMENT_SCHEDULE = [
  { period: 'Quarter 1', interest: 180_000, principal: 0, cumulative: 180_000 },
  { period: 'Quarter 2', interest: 180_000, principal: 0, cumulative: 360_000 },
  { period: 'Quarter 3', interest: 180_000, principal: 0, cumulative: 540_000 },
  { period: 'Quarter 4 (Year 1)', interest: 180_000, principal: 0, cumulative: 720_000 },
  { period: 'Year 2 Total', interest: 720_000, principal: 0, cumulative: 1_440_000 },
  { period: 'Year 3 Total', interest: 720_000, principal: 0, cumulative: 2_160_000 },
  { period: 'Maturity (Month 36)', interest: 0, principal: 8_000_000, cumulative: 10_160_000 },
]

const formatCurrency = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

export default function PabloPage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* ═══════════════════════════════════════════════════════════════
          Hero
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-800 to-primary-900" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 50%, rgba(212, 166, 59, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(212, 114, 77, 0.2) 0%, transparent 40%)',
            }}
          />
        </div>
        <motion.div
          className="relative w-full sm:w-[70vw] mx-auto px-4 sm:px-0 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-400 mb-6">
            A Private Bridge Loan Proposal
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6 leading-tight">
            Pablo, A Lender Role.<br className="hidden md:block" /> Not a Partnership.
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-4">
            An $8 million senior secured bridge loan. 9% interest paid quarterly.
            36 month term. First lien on a property publicly listed at $11.9 million
            with over $25 million of construction capital built into it.
          </p>
          <p className="text-lg text-primary-200/70">
            Clean exit. Senior position. Hard asset collateral.
          </p>
        </motion.div>
      </section>

      <div className="w-full sm:w-[70vw] mx-auto py-12 px-4 sm:px-0">
        {/* ═══════════════════════════════════════════════════════════
            Why This, Why Now
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-24" {...fadeUp}>
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">Why We Are Back</h2>
          <p className="text-lg text-neutral-600 mb-6 max-w-3xl">
            The partnership conversation was not the right fit, and we respect
            that. What we have for you now is a different shape entirely. You
            are not an investor in the operation. You are a senior lender sitting
            at the top of the capital stack, with a clean exit and a real asset
            behind every dollar.
          </p>
          <p className="text-lg text-neutral-600 mb-6 max-w-3xl">
            This is how sophisticated capital gets into hard-to-finance jurisdictions
            like Quintana Roo: senior secured bridge debt, short duration, strong
            collateral, clear enforcement. Your role is simple. Fund the bridge.
            Collect quarterly interest. Get your principal back at month 36.
          </p>
          <p className="text-lg text-neutral-600 max-w-3xl">
            No equity. No operating risk. No co-ownership. Just a loan with teeth.
          </p>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            Key Terms
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-24" {...fadeUp}>
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">Key Terms at a Glance</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            A simple, senior secured bridge. Open prepayment at any time with
            no penalty. No equity kicker. No participation in upside. Straight debt.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {KEY_TERMS.map((item) => (
              <Card key={item.label} padding="md" className="text-center">
                <item.icon className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                <p className="text-xs font-accent uppercase tracking-wider text-neutral-500 mb-1">
                  {item.label}
                </p>
                <p className="font-heading text-2xl text-neutral-900">{item.value}</p>
              </Card>
            ))}
          </div>

          <Card padding="lg" className="bg-primary-50 border border-primary-200 mb-8">
            <h3 className="font-heading text-lg text-primary-900 mb-4">The Structure in One Sentence</h3>
            <p className="text-neutral-700 leading-relaxed">
              You lend <span className="font-medium">$8 million</span> at{' '}
              <span className="font-medium">9% simple interest</span>, secured
              by a <span className="font-medium">first lien</span> on the Tulum
              property held through the Mexican real estate trust (fideicomiso).
              We pay you <span className="font-medium">$180,000 every quarter</span>{' '}
              for 36 months, then return your{' '}
              <span className="font-medium">$8 million principal</span> in full
              at maturity.
            </p>
          </Card>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            Payment Schedule
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-24" {...fadeUp}>
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">How You Get Paid</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            Interest-only payments, quarterly, for three years. Bullet repayment
            of the full $8 million principal at month 36. Total interest over the
            life of the loan: $2.16 million.
          </p>

          <Card padding="none" className="overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">
                      Period
                    </th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">
                      Interest
                    </th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">
                      Principal
                    </th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">
                      Cumulative Paid
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {PAYMENT_SCHEDULE.map((row) => (
                    <tr key={row.period} className="hover:bg-canvas-subtle transition-colors">
                      <td className="px-4 py-3 font-medium text-neutral-800">{row.period}</td>
                      <td className="px-4 py-3 text-right text-neutral-700">
                        {row.interest > 0 ? formatCurrency(row.interest) : '\u2014'}
                      </td>
                      <td className="px-4 py-3 text-right text-neutral-700">
                        {row.principal > 0 ? formatCurrency(row.principal) : '\u2014'}
                      </td>
                      <td className="px-4 py-3 text-right font-medium text-neutral-900">
                        {formatCurrency(row.cumulative)}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-canvas-emphasis font-medium">
                    <td className="px-4 py-3 text-neutral-900">Total Received</td>
                    <td className="px-4 py-3 text-right text-neutral-900">$2,160,000</td>
                    <td className="px-4 py-3 text-right text-neutral-900">$8,000,000</td>
                    <td className="px-4 py-3 text-right text-primary-700">$10,160,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <div className="grid sm:grid-cols-3 gap-6">
            <MetricCard label="Total Interest" value="$2.16M" subtitle="Over 36 months" accent />
            <MetricCard label="Principal Returned" value="$8.0M" subtitle="At maturity" accent />
            <MetricCard label="Total to Lender" value="$10.16M" subtitle="27% gross return" accent />
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            How You Are Protected
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-24" {...fadeUp}>
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">How You Are Protected</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            Your $8 million sits behind a hard asset currently listed on
            Christie's International Real Estate at $11.9 million, with over
            $25 million of prior construction capital built into it. This is a
            67% loan-to-value position against the public listing, with the
            construction capital embedded as a replacement-cost backstop underneath.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card padding="lg" className="border border-primary-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-neutral-900 mb-1">First Lien Position</h3>
                  <p className="text-sm text-neutral-600">Senior to every other claim</p>
                </div>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                First priority lien recorded against the Mexican real estate
                trust (fideicomiso) that holds title to the Tulum property. No
                other debt sits ahead of you. No subordinate mezzanine carve-outs.
                Senior position, full stop.
              </p>
            </Card>

            <Card padding="lg" className="border border-primary-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-neutral-900 mb-1">Hard Asset Collateral</h3>
                  <p className="text-sm text-neutral-600">$11.9M listed, $25M+ built in</p>
                </div>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                The property is currently listed on Christie's International
                Real Estate at $11.9 million. More than $25 million of prior
                construction capital is built into it: nine lots, 45,000 square
                meters of jungle compound, main house, guest house, spa, gym,
                cenote pool, and full infrastructure. Your $8 million loan sits
                at 67% LTV against the listing price, with the construction
                capital as a replacement-cost backstop.
              </p>
            </Card>

            <Card padding="lg" className="border border-primary-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-neutral-900 mb-1">Step-In Rights</h3>
                  <p className="text-sm text-neutral-600">Upon event of default</p>
                </div>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                If the borrower defaults, you have the contractual right to
                step into the trust position and assume control of the asset.
                Not just a claim, a mechanism. Enforcement is mapped, not theoretical.
              </p>
            </Card>

            <Card padding="lg" className="border border-primary-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-neutral-900 mb-1">Cross-Border Enforceability</h3>
                  <p className="text-sm text-neutral-600">Structured for international lenders</p>
                </div>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                Loan documentation governed by New York law with Mexican trust
                enforcement, structured so your rights survive jurisdictional
                complexity. Bankruptcy remote, with clear foreclosure pathways
                mapped in advance.
              </p>
            </Card>
          </div>

          <Card padding="lg" className="bg-neutral-900 text-white">
            <h3 className="font-heading text-lg text-white mb-4">Loan-to-Value Math</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center mb-6">
              <div>
                <p className="text-xs font-accent uppercase tracking-wider text-neutral-400 mb-1">
                  Market Value (Christie's Listing)
                </p>
                <p className="font-heading text-2xl text-white">$11,900,000</p>
              </div>
              <div>
                <p className="text-xs font-accent uppercase tracking-wider text-neutral-400 mb-1">
                  Bridge Loan
                </p>
                <p className="font-heading text-2xl text-secondary-400">$8,000,000</p>
              </div>
              <div>
                <p className="text-xs font-accent uppercase tracking-wider text-neutral-400 mb-1">
                  Loan-to-Value
                </p>
                <p className="font-heading text-2xl text-white">67%</p>
              </div>
            </div>
            <div className="border-t border-neutral-700 pt-4 text-center">
              <p className="text-xs font-accent uppercase tracking-wider text-neutral-400 mb-1">
                Prior Construction Capital (Replacement-Cost Backstop)
              </p>
              <p className="font-heading text-xl text-neutral-300">$25,000,000+</p>
            </div>
          </Card>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            Why This Works For You
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-24" {...fadeUp}>
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">Why This Works For You</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card padding="lg">
              <div className="flex items-start gap-3 mb-3">
                <Check className="w-5 h-5 text-primary-600 mt-1 shrink-0" />
                <div>
                  <h3 className="font-medium text-neutral-900 mb-1">Known asset, known team</h3>
                  <p className="text-sm text-neutral-600">
                    You already know this property and the people behind it. No
                    learning curve, no due diligence from zero.
                  </p>
                </div>
              </div>
            </Card>

            <Card padding="lg">
              <div className="flex items-start gap-3 mb-3">
                <Clock className="w-5 h-5 text-primary-600 mt-1 shrink-0" />
                <div>
                  <h3 className="font-medium text-neutral-900 mb-1">Short duration</h3>
                  <p className="text-sm text-neutral-600">
                    36 months. Your capital is not locked up for a decade. This
                    is bridge debt, not a long-term commitment.
                  </p>
                </div>
              </div>
            </Card>

            <Card padding="lg">
              <div className="flex items-start gap-3 mb-3">
                <Shield className="w-5 h-5 text-primary-600 mt-1 shrink-0" />
                <div>
                  <h3 className="font-medium text-neutral-900 mb-1">Senior position</h3>
                  <p className="text-sm text-neutral-600">
                    First lien, first paid. No subordination, no equity holders
                    taking distributions ahead of you.
                  </p>
                </div>
              </div>
            </Card>

            <Card padding="lg">
              <div className="flex items-start gap-3 mb-3">
                <DollarSign className="w-5 h-5 text-primary-600 mt-1 shrink-0" />
                <div>
                  <h3 className="font-medium text-neutral-900 mb-1">Predictable cash flow</h3>
                  <p className="text-sm text-neutral-600">
                    $180,000 every quarter. Boring, scheduled, secured. No
                    operational volatility to manage.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            Next Steps
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-16" {...fadeUp}>
          <Card padding="lg" className="bg-gradient-to-br from-primary-800 to-primary-900 text-white">
            <h2 className="text-3xl font-heading text-white mb-4">Next Steps</h2>
            <p className="text-lg text-primary-100 mb-6 max-w-2xl">
              If the structure is interesting, the next step is a call to walk
              through the term sheet and answer questions. We have a draft ready
              to share under NDA, prepared for attorney review on both sides.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" size="lg">
                Review the Term Sheet
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white/30">
                Schedule a Call
              </Button>
            </div>
          </Card>
        </motion.section>

        <div className="text-xs text-neutral-500 text-center max-w-3xl mx-auto">
          This page is a private proposal prepared for Pablo. It does not
          constitute an offer to sell or a solicitation of an offer to buy any
          security or financial instrument. All terms are subject to definitive
          documentation, legal review, and customary closing conditions.
        </div>
      </div>

      <Footer />
    </div>
  )
}
