'use client'

import { motion } from 'framer-motion'
import {
  TrendingUp,
  DollarSign,
  Handshake,
  ArrowRight,
  Check,
  TreePine,
  Heart,
  Brain,
  Building2,
  Users,
  Briefcase,
  Shield,
  Lock,
  Home,
} from 'lucide-react'
import { Card } from '@/components/ui'
import { MetricCard } from '@/components/financial'
import { Footer } from '@/components/layout'
import {
  ENTERPRISE_VALUATIONS,
  JEFF_PROPERTY,
  SCENARIO_C,
  SCENARIO_C_DISTRIBUTIONS,
  SCENARIO_C_STEADY_STATE,
  SCENARIO_C_RETURN,
  SCENARIO_C_CUMULATIVE,
  SCENARIO_C_DEFAULT_SCENARIOS,
  formatCurrency,
} from '@/lib/data/partner-scenarios'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
}

export default function PartnerPage() {
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
            Jeff, We Honor Your Price.<br className="hidden md:block" /> And We Raise It.
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-4">
            You asked $11.9 million for the property. We are crediting you
            $14.6 million and securing it with a $20 million first-position
            lien. Because if we believe in this, we commit above your ask.
          </p>
          <p className="text-lg text-primary-200/70">
            One property. One partnership. Built together.
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
            You priced it at $11.9 million. We hear that price, and we honor it.
            Then we go further. A sale is a one-time number. A partnership is a
            commitment. If we are asking to build this with you, the commitment
            should sit above the ask, not below it.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <MetricCard
              label="Your Asking Price"
              value={formatCurrency(JEFF_PROPERTY.askingPrice)}
              subtitle="What you said the property is worth"
              accent
            />
            <MetricCard
              label="Our Partnership Credit"
              value={formatCurrency(JEFF_PROPERTY.partnerCredit)}
              subtitle={`$${(JEFF_PROPERTY.askingPremium / 1_000_000).toFixed(1)}M above your asking price`}
              trend="up"
              trendValue="Above ask"
              accent
            />
            <MetricCard
              label="Total Lien Position"
              value={formatCurrency(SCENARIO_C.totalLienAmount)}
              subtitle="First-position lien, property + enterprise"
              accent
            />
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            Section 3: The Partnership - Headline Card
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-16" {...fadeUp}>
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">The Partnership</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            A $20 million first-position lien plus 49% equity across three
            operating entities. The lien is your secured floor. The equity is
            your upside. You get both.
          </p>

          <Card
            padding="lg"
            className="border-2 border-primary-600 shadow-lg ring-2 ring-primary-600/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-primary-700 text-white text-xs font-accent uppercase tracking-wider px-3 py-1 rounded-bl-lg">
              Preferred Path
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-700">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-accent text-xs uppercase tracking-wider text-primary-600">Jeff + Light Brands</p>
                <h3 className="font-heading text-lg text-neutral-900">Full Partnership</h3>
              </div>
            </div>
            <p className="text-neutral-600 mb-4 max-w-2xl">
              $20M secured lien. 49% equity across three operating entities.
              Revenue distributions from day one. Property back on default.
            </p>
            <div className="bg-primary-50 rounded-lg p-4 max-w-sm">
              <p className="text-xs font-accent uppercase tracking-wider text-primary-600 mb-1">Your Position</p>
              <p className="font-heading text-3xl text-primary-700">$20M → $113M+</p>
              <p className="text-xs text-primary-700">Secured floor + equity upside</p>
            </div>
          </Card>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            Partnership Details
        ═══════════════════════════════════════════════════════════ */}
        <motion.div {...fadeUp}>
          {/* Deal Structure */}
          <section className="mb-24">
            <h2 className="text-3xl font-heading text-neutral-900 mb-4">The Deal Structure</h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
              This is not a sale. It is a co-ownership secured by a lien.
              You asked $11.9M for the property. We credit it at $14.6M.
              You add $5.4M in operations capital. Together that becomes a
              $20M first-position lien held by you, secured by the property
              and the operating entities, paid back from revenue.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { label: 'Total Lien Position', value: '$20M', icon: Briefcase },
                { label: 'Property Credit', value: '$14.6M', icon: Building2 },
                { label: 'Your Operations Capital', value: '$5.4M', icon: DollarSign },
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
                      <span>The property, credited at <span className="font-medium">$14.6M</span> ($2.7M above your $11.9M asking price)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-200 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-primary-700">2</span>
                      </div>
                      <span><span className="font-medium">$5.4M</span> in operations capital for buildout and launch</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-200 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-primary-700">3</span>
                      </div>
                      <span>Total contribution secured by the lien: <span className="font-medium">$20M</span></span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-primary-800 mb-3">Jeff Receives</h4>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span><span className="font-medium">$20M first-position lien</span> secured by the property and the operating entities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span><span className="font-medium">49% equity</span> across three operating entities, on top of the lien</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span><span className="font-medium">Revenue distributions</span> from day one of operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <span>We pay the <span className="font-medium">broker fee</span> at closing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <div className="flex items-start gap-3 text-sm text-neutral-600">
              <Handshake className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
              <p>
                Jeff is a true co-owner and a secured creditor. The $20M lien is
                paid back from revenue. The 49% equity is upside on top. If anything
                goes wrong, the property and the lien come back to you first.
              </p>
            </div>
          </section>

          {/* Equity Position */}
          <section className="mb-24">
            <h2 className="text-3xl font-heading text-neutral-900 mb-4">Your Equity Position</h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
              49% ownership across three operating entities means you are not a passive investor.
              You are a co-builder. As the entities grow, your equity grows with them.
            </p>

            <h3 className="font-heading text-xl text-neutral-900 mb-4">Equity Value Across Models</h3>
            <Card padding="none" className="overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary-800 text-white">
                      <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Model</th>
                      <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Enterprise Value</th>
                      <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Your 49% (3 Entities)</th>
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
                subtitle="49% across 3 entities"
                accent
              />
              <MetricCard
                label="Base Case Equity"
                value={formatCurrency(SCENARIO_C_RETURN.equityBase)}
                subtitle="49% across 3 entities"
                accent
              />
              <MetricCard
                label="Full Expansion Equity"
                value={formatCurrency(SCENARIO_C_RETURN.equityFull)}
                subtitle="49% across 3 entities"
                trend="up"
                trendValue="343% of $25M"
                accent
              />
            </div>

            <Card padding="lg" className="bg-primary-50 border border-primary-200 mt-8">
              <p className="text-neutral-800">
                <span className="font-medium">The structure:</span> Your 49% is held across three operating entities:
                TE PropCo (real estate), TE OpCo (clinical operations), and TE IP/Data Co (intellectual property
                and data). Each entity can be valued and exited independently.
              </p>
            </Card>
          </section>

          {/* Revenue Distributions */}
          <section className="mb-24">
            <div className="text-center mb-10">
              <p className="font-accent text-sm uppercase tracking-widest text-primary-500 mb-4">
                Revenue From Day One
              </p>
              <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 mb-4">Your Revenue Share</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                As a 49% owner across three operating entities, you receive 49% of all
                distributions. Your contribution is paid back from the revenue the operation generates.
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
                    $13.4M recovered by Year 4
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

        {/* ═══════════════════════════════════════════════════════════
            Downside Protection — What Happens If We Default
        ═══════════════════════════════════════════════════════════ */}
        <motion.section className="mb-24" {...fadeUp}>
          <h2 className="text-3xl font-heading text-neutral-900 mb-4">If Anything Goes Wrong</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            The $20M lien is not a formality. It is the spine of the structure.
            You hold a first-position claim against the property and the
            operating entities for the entire life of the partnership. If Light
            Brands defaults on any obligation, you foreclose, recover the
            property, and keep every revenue distribution already received.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Lock, title: 'First Position', desc: 'Your $20M lien sits ahead of every other creditor on the property and operating entities.' },
              { icon: Shield, title: 'You Are the Bank', desc: 'The lien is secured by both real property and enterprise assets. Two layers of collateral.' },
              { icon: Home, title: 'Property Returns on Default', desc: 'Foreclose and the property comes back to you, improved by any buildout already complete.' },
              { icon: TrendingUp, title: 'Distributions Are Yours', desc: 'Every dollar already distributed from operations stays with you. Those are not clawable.' },
            ].map((item) => (
              <Card key={item.title} padding="md">
                <item.icon className="w-6 h-6 text-primary-600 mb-3" />
                <h4 className="font-medium text-neutral-900 mb-1 text-sm">{item.title}</h4>
                <p className="text-xs text-neutral-600">{item.desc}</p>
              </Card>
            ))}
          </div>

          <h3 className="font-heading text-xl text-neutral-900 mb-4">What Happens If We Default</h3>
          <Card padding="none" className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Default At</th>
                    <th className="text-right px-4 py-3 font-accent text-xs uppercase tracking-wider">Distributions Received</th>
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Property Status</th>
                    <th className="text-left px-4 py-3 font-accent text-xs uppercase tracking-wider">Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {SCENARIO_C_DEFAULT_SCENARIOS.map((row) => (
                    <tr key={row.year} className="hover:bg-canvas-subtle transition-colors">
                      <td className="px-4 py-3 font-medium text-neutral-800">Year {row.year}</td>
                      <td className="px-4 py-3 text-right font-medium text-neutral-900">
                        {row.distributionsReceived > 0 ? formatCurrency(row.distributionsReceived) : '\u2014'}
                      </td>
                      <td className="px-4 py-3 text-neutral-700">{row.propertyStatus}</td>
                      <td className="px-4 py-3 text-neutral-700 max-w-md">{row.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="flex items-start gap-3 text-sm text-neutral-600 mt-6">
            <Shield className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
            <p>
              The lien is recorded at closing and held until the $20M position
              is fully recovered from revenue. The 49% equity position and
              revenue distributions sit on top of the lien — they are never a
              substitute for it.
            </p>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════
            What We Build Together
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
            Let's Talk
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
              Your asking price, honored and raised. A $20M first-position lien
              as your secured floor. 49% equity as your upside. And the partnership
              to build it together on the land you created.
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
