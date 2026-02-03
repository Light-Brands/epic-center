'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ArrowLeftRight,
  Stethoscope,
  Zap,
  Leaf,
  Gem,
  Shield,
  Sparkles,
  Star,
  Layers,
} from 'lucide-react'
import { Button } from '@/components/ui'
import { Footer } from '@/components/layout'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const PILLARS = [
  {
    icon: Stethoscope,
    name: 'Medical & Longevity Clinics',
    problem: 'Great doctors, but clinical and cold',
    gap: 'Clinical credibility and diagnostic depth, but lack spiritual and identity dimensions.',
    color: 'from-blue-500 to-blue-600',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Zap,
    name: 'Biohacking & Performance',
    problem: 'Trendy tech, but no real medical oversight',
    gap: 'Cutting-edge technology and bio-optimization, but transactional with no continuity of care.',
    color: 'from-amber-500 to-amber-600',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    icon: Leaf,
    name: 'Plant Medicine & Psychedelics',
    problem: 'Powerful, but often unsafe or unprofessional',
    gap: 'Powerful addiction interruption, but often lack medical rigor and no integration support.',
    color: 'from-emerald-500 to-emerald-600',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Gem,
    name: 'Luxury Wellness & Retreats',
    problem: 'Beautiful, but surface-level wellness',
    gap: 'Hospitality excellence and beautiful settings, but surface-level with no lasting transformation.',
    color: 'from-purple-500 to-purple-600',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
]

const BRIDGES = [
  { left: 'Medical rigor', right: 'Sacred reverence' },
  { left: 'Scientific measurement', right: 'Embodied wisdom' },
  { left: 'Luxury hospitality', right: 'Authentic care' },
  { left: 'Deep transformation', right: 'Practical integration' },
  { left: 'Individual healing', right: 'Community support' },
]

const TRANSFORMATIONS = [
  { from: 'Nervous system dysregulation', to: 'Nervous system coherence' },
  { from: 'Unprocessed trauma', to: 'Integrated experience' },
  { from: 'Disconnection from body', to: 'Embodied presence' },
  { from: 'Chronic stress and anxiety', to: 'Calm, grounded resilience' },
  { from: 'Identity fragmentation', to: 'Coherent sense of self' },
  { from: 'Lost purpose', to: 'Aligned mission' },
  { from: 'Isolation', to: 'Connected community' },
  { from: 'Surviving', to: 'Thriving' },
  { from: 'Asleep', to: 'Awake' },
]

const BELIEFS = [
  {
    title: 'Healing Happens at the Root',
    description:
      'Surface-level interventions create surface-level change. True transformation requires addressing the root: unprocessed trauma, dysregulated nervous systems, fragmented identity, and spiritual disconnection. We go to the root.',
  },
  {
    title: 'The Body Keeps the Score',
    description:
      'Transformation is not merely cognitive. It is somatic. Neurological. Cellular. Our protocols honor the body as the primary vessel of healing\u2014supporting it with medical precision and nurturing it with exceptional care.',
  },
  {
    title: 'Safety Creates Surrender',
    description:
      'The nervous system cannot heal in a state of vigilance. We create environments of profound safety\u2014medical, physical, emotional, and spiritual\u2014so guests can fully surrender to their process.',
  },
  {
    title: 'Medicine is a Catalyst, Not a Destination',
    description:
      'Plant medicine can open doors that years of therapy cannot. But the medicine alone is not the transformation. The real work is the integration\u2014anchoring insights into daily life, identity, and purpose.',
  },
  {
    title: 'Luxury is Love Made Material',
    description:
      'We reject the false dichotomy between spiritual depth and material comfort. Luxury at Transformational Epicenter is not indulgence\u2014it is the physical expression of care. Every thread count, every meal, every design choice says: \u201CYou are worth this attention.\u201D',
  },
  {
    title: 'Transformation Requires a Continuum',
    description:
      'A retreat is not an event. It is a phase in a longer arc. We support guests before they arrive (preparation), during their stay (experience), and long after they leave (integration). The full arc creates lasting change.',
  },
  {
    title: 'Community Sustains Change',
    description:
      'Individual transformation flourishes within supportive community. We build containers for ongoing connection\u2014both digital and physical\u2014so no one walks the integration path alone.',
  },
]

const VALUES = [
  {
    icon: Shield,
    name: 'Safety',
    description: 'Medical rigor and sacred containment as the foundation of everything we do.',
  },
  {
    icon: Sparkles,
    name: 'Transformation',
    description: 'Deep, lasting change at the root\u2014not just symptom management or temporary relief.',
  },
  {
    icon: Star,
    name: 'Excellence',
    description: 'Care expressed through exceptional quality in every detail and interaction.',
  },
  {
    icon: Layers,
    name: 'Integration',
    description: 'Supporting the full arc, not just the peak experience\u2014lasting change takes time.',
  },
]

export default function OriginPage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* ═══════════════════════════════════════════
          HERO — "Why We Exist"
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary-900">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/40 to-transparent" />
        <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary-500/8 blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent-500/6 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />

        <div className="w-full sm:w-[70vw] mx-auto py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-secondary-500/30 bg-secondary-500/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
              <span className="font-accent text-[11px] uppercase tracking-[0.3em] text-secondary-400">
                Chapter One
              </span>
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl font-light mb-8 leading-[0.95] text-white max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Why We{' '}
            <span className="relative inline-block">
              <span className="text-secondary-400">Exist</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full overflow-hidden"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-secondary-400 via-secondary-500 to-secondary-400" />
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            className="font-body text-lg md:text-xl text-primary-200/90 mb-14 max-w-2xl leading-[1.7] tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Modern humans are suffering from a crisis of disconnection&mdash;from their bodies,
            their nervous systems, their emotions, their purpose, and their essential nature.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE GAP — Four Market Pillars
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-canvas relative overflow-hidden">
        <div className="w-full sm:w-[70vw] mx-auto relative">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary-500" />
              <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-600">
                The Gap
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-6">
              Four Market Pillars, Each Missing a Piece
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Wealthy individuals seeking deep transformation have to choose between
              four incomplete options. No one offers all four together.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {PILLARS.map((pillar) => (
              <motion.div
                key={pillar.name}
                variants={scaleInVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <div className="group h-full bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-500 border border-neutral-100 hover:border-neutral-200 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${pillar.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <pillar.icon className={`w-6 h-6 ${pillar.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-neutral-900 mb-1">{pillar.name}</h3>
                      <p className="font-medium text-neutral-800">{pillar.problem}</p>
                    </div>
                  </div>
                  <p className="text-neutral-600 leading-relaxed pl-16">{pillar.gap}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OUR MISSION — "The Bridge"
          ═══════════════════════════════════════════ */}
      <section className="relative py-32 md:py-40 bg-white overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-accent-500/5 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-secondary-500/5 blur-3xl" />

        <div className="w-full sm:w-[70vw] mx-auto relative">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            <p className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-primary-800 leading-[1.25] tracking-tight max-w-4xl mx-auto">
              We bridge between{' '}
              <span className="text-secondary-600">medical rigor</span> and{' '}
              <span className="text-accent-600">sacred reverence</span>,{' '}
              scientific measurement and embodied wisdom.
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {BRIDGES.map((bridge) => (
              <motion.div
                key={bridge.left}
                variants={fadeUpVariants}
                className="flex items-center justify-between gap-4 px-6 py-4 rounded-xl bg-canvas border border-neutral-100 hover:border-secondary-200 hover:shadow-sm transition-all duration-300"
              >
                <span className="font-medium text-primary-800 flex-1 text-right">{bridge.left}</span>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-secondary-400 to-secondary-500 flex items-center justify-center">
                  <ArrowLeftRight className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-accent-700 flex-1">{bridge.right}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE TRANSFORMATION — "From → To"
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-canvas relative overflow-hidden">
        <div className="w-full sm:w-[70vw] mx-auto relative">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary-500" />
              <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-600">
                The Shift
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900">
              The Transformation We Facilitate
            </h2>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {/* Header row */}
            <div className="grid grid-cols-[1fr_40px_1fr] gap-4 mb-4 px-6">
              <p className="font-accent text-xs uppercase tracking-[0.2em] text-neutral-400">From</p>
              <div />
              <p className="font-accent text-xs uppercase tracking-[0.2em] text-neutral-400">To</p>
            </div>

            {TRANSFORMATIONS.map((t) => (
              <motion.div
                key={t.from}
                variants={fadeUpVariants}
                className="grid grid-cols-[1fr_40px_1fr] gap-4 items-center px-6 py-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 border border-transparent hover:border-neutral-100"
              >
                <span className="text-neutral-500">{t.from}</span>
                <div className="flex justify-center">
                  <ArrowRight className="w-4 h-4 text-secondary-500" />
                </div>
                <span className="font-medium text-primary-800">{t.to}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SEVEN CORE BELIEFS + FOUR CORE VALUES
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-accent-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-secondary-500/8 blur-[120px]" />

        <div className="w-full sm:w-[70vw] mx-auto relative">
          {/* Seven Beliefs */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-secondary-400 to-secondary-600" />
              <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-400">
                Our Foundation
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-secondary-400 to-secondary-600" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-6">What We Believe</h2>
          </motion.div>

          <motion.div
            className="space-y-8 mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {BELIEFS.map((belief, index) => (
              <motion.div
                key={belief.title}
                variants={fadeUpVariants}
                className="flex gap-6 md:gap-8"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary-500/20 border border-secondary-500/30 flex items-center justify-center">
                  <span className="font-heading text-lg text-secondary-400">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl mb-3">{belief.title}</h3>
                  <p className="text-primary-200/90 leading-relaxed max-w-3xl">{belief.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Four Core Values */}
          <motion.div
            className="pt-16 border-t border-primary-700/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-12" variants={fadeUpVariants}>
              <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-400 mb-4">
                Our Values
              </p>
              <h3 className="font-heading text-3xl md:text-4xl">Four Core Values</h3>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((value) => (
                <motion.div
                  key={value.name}
                  variants={scaleInVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                >
                  <div className="h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-500">
                    <div className="w-12 h-12 rounded-xl bg-secondary-500/20 border border-secondary-500/30 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-secondary-400" />
                    </div>
                    <h4 className="font-heading text-lg mb-2">{value.name}</h4>
                    <p className="text-primary-200/80 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <div className="bg-canvas">
        <div className="w-full sm:w-[70vw] mx-auto py-8">
          <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
            <Link href="/" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-accent text-sm uppercase tracking-wide">Vision</span>
            </Link>
            <Link href="/story/solution">
              <Button variant="primary">
                The Solution
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
