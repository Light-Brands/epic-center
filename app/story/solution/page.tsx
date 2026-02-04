'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  XCircle,
  CheckCircle2,
  Rocket,
} from 'lucide-react'
import { Button, Card } from '@/components/ui'
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

const MARKET_PILLARS = [
  {
    icon: '/icons/diff-medical.png',
    name: 'Medical & Longevity Clinics',
    market: '$27\u201333B',
    growth: '12\u201315%',
    color: 'from-blue-500 to-blue-600',
    offerings: [
      'Functional Medicine Diagnostics',
      'Hormonal Optimization',
      'Peptides & Regenerative Therapies',
      'Advanced Testing (Epigenetic, DNA)',
    ],
    gap: 'Clinical credibility, but lack spiritual and identity dimensions.',
  },
  {
    icon: '/icons/story-biohacking.png',
    name: 'Biohacking & Performance',
    market: '$24\u201333B',
    growth: '18\u201322%',
    color: 'from-amber-500 to-amber-600',
    offerings: [
      'Hyperbaric Oxygen Therapy',
      'Red Light & Photobiomodulation',
      'Cryotherapy & Cold Exposure',
      'Neurocognitive Optimization',
    ],
    gap: 'Cutting-edge technology, but transactional with no continuity of care.',
  },
  {
    icon: '/icons/model-leaf.png',
    name: 'Plant Medicine & Psychedelics',
    market: '$3\u20135B',
    growth: '15\u201320%',
    color: 'from-emerald-500 to-emerald-600',
    offerings: [
      'Ibogaine & Iboga',
      'Psychedelic-Assisted Therapy',
      'Addiction Interruption Protocols',
      'Nervous System Restoration',
    ],
    gap: 'Powerful addiction interruption, but often lack medical rigor.',
  },
  {
    icon: '/icons/story-gem.png',
    name: 'Luxury Wellness & Retreats',
    market: '$850B\u2013$1.1T',
    growth: '7\u201310%',
    color: 'from-purple-500 to-purple-600',
    offerings: [
      'High-Touch Hospitality',
      'Privacy & Discretion',
      'Concierge-Level Care',
      'Spiritual & Emotional Integration',
    ],
    gap: 'Hospitality excellence, but surface-level with no lasting transformation.',
  },
]

const COMPETITORS = [
  {
    type: 'Medical Clinics',
    examples: 'Clinique La Prairie, SHA Wellness',
    reason: "Won\u2019t touch plant medicine, too much brand and regulatory risk",
  },
  {
    type: 'Luxury Resorts',
    examples: 'Aman, Six Senses',
    reason: "Don\u2019t have medical expertise or clinical infrastructure",
  },
  {
    type: 'Plant Medicine Centers',
    examples: 'Beond, Rythmia',
    reason: "Can\u2019t attract luxury talent or afford medical infrastructure",
  },
  {
    type: 'Biohacking Centers',
    examples: 'Upgrade Labs, Restore',
    reason: 'Wrong business model: transactional, not transformational',
  },
]

const GUEST_PROFILES = [
  'Executives and entrepreneurs carrying the weight of constant performance',
  'Healthcare providers and healers who have given so much they\u2019ve depleted themselves',
  'Artists and creatives seeking to unlock deeper channels of expression',
  'Parents and partners wanting to show up more fully for those they love',
  'Seekers who have tried many modalities but haven\u2019t found the breakthrough',
  'Survivors of trauma ready to finally release what they\u2019ve been carrying',
]

const JOURNEY_PHASES = [
  {
    icon: '/icons/model-brain.png',
    phase: 'Awakening',
    subtitle: 'Pre-Retreat',
    duration: '4\u20138 weeks',
    color: 'from-primary-600 to-primary-700',
    items: [
      'Medical screening & safety clearance',
      'Psychological preparation & intention setting',
      'Nervous system preparation practices',
      'Dietary and lifestyle adjustments',
      'Digital onboarding and education',
    ],
  },
  {
    icon: '/icons/model-heart.png',
    phase: 'Immersion',
    subtitle: 'Retreat',
    duration: '7\u201328 days',
    color: 'from-secondary-400 to-secondary-500',
    items: [
      'Medical monitoring throughout',
      'Plant medicine ceremony/ceremonies',
      'Bio-optimization protocols',
      'Daily integration practices',
      'Therapeutic bodywork & personalized care',
    ],
  },
  {
    icon: '/icons/model-sparkles.png',
    phase: 'Integration',
    subtitle: 'Post-Retreat',
    duration: '3\u201312 months',
    color: 'from-accent-500 to-accent-600',
    items: [
      'Structured integration program',
      'Weekly/monthly coaching or group calls',
      'Community platform engagement',
      'Somatic practice maintenance',
      'Life restructuring support',
    ],
  },
  {
    icon: '/icons/model-users.png',
    phase: 'Embodiment',
    subtitle: 'Ongoing',
    duration: 'Lifetime',
    color: 'from-primary-500 to-primary-600',
    items: [
      'Alumni community membership',
      'Annual or bi-annual return visits',
      'Continued bio-optimization access',
      'Mentorship opportunities',
      'Contribution to the community',
    ],
  },
]

const VISION_PHASES = [
  {
    year: 'Year 1',
    title: 'Foundation',
    description: 'Launch first Transformational Epicenter in Mexico. Establish protocols, outcomes measurement, digital platform MVP, and training programs.',
  },
  {
    year: 'Year 2',
    title: 'Optimization',
    description: 'Refine all protocols based on outcomes data. Expand digital platform features. Build international reputation. Prepare expansion playbook.',
  },
  {
    year: 'Year 3',
    title: 'Full Capacity',
    description: 'Complete 60-casita campus. Villa collection in full sales. Training academy for clinical talent development. Published outcomes data.',
  },
  {
    year: 'Year 4\u20135',
    title: 'Maturity',
    description: 'Optimized operations at 80% occupancy. 48-villa program nearing completion. $34M annual revenue. Industry-leading clinical outcomes and research.',
  },
]

export default function SolutionPage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* ═══════════════════════════════════════════
          HERO - "The Bridge"
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary-900">
        {/* Atmospheric layers */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/40 to-transparent" />
        <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-secondary-500/8 blur-[180px]" />
        <div className="absolute top-1/3 left-[10%] w-[300px] h-[300px] rounded-full bg-primary-700/40 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-500/6 blur-[150px]" />
        <div className="absolute top-1/2 right-[5%] w-[200px] h-[200px] rounded-full bg-secondary-400/5 blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />

        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 py-32 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-secondary-500/30 bg-secondary-500/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
              <span className="font-accent text-[11px] uppercase tracking-[0.3em] text-secondary-400">
                Chapter Two
              </span>
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-6xl sm:text-7xl md:text-8xl font-light mb-10 leading-[0.9] text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            The{' '}
            <span className="relative inline-block">
              <span className="text-secondary-400">Bridge</span>
              <motion.span
                className="absolute -bottom-3 left-0 right-0 h-[3px] rounded-full overflow-hidden"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-secondary-400 via-secondary-500 to-secondary-400" />
              </motion.span>
            </span>
          </motion.h1>

          {/* Decorative divider */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-secondary-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary-400/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary-500/50" />
          </motion.div>

          <motion.p
            className="font-body text-xl md:text-2xl text-primary-200/90 mb-16 max-w-2xl mx-auto leading-[1.6] tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Transformational Epicenter is purpose-built to bridge all four market pillars.
            We&apos;re not adding wellness to a hotel or medicine to a spa. We&apos;re building
            something entirely new from the ground up.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <span className="font-accent text-sm text-white">$1T+ Combined Market</span>
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <span className="font-accent text-sm text-white">4 Pillars Unified</span>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="flex flex-col items-center gap-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-primary-300/40">
                Scroll
              </span>
              <div className="w-px h-8 bg-gradient-to-b from-primary-300/40 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOUR MARKET PILLARS
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-canvas relative overflow-hidden">
        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                The Four Market Pillars
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-6">
              A $1 Trillion Market, Waiting to Be Unified
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We don&apos;t need a large market share. Capturing even a small slice of
              ultra-high-net-worth individuals seeking transformation creates a substantial business.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {MARKET_PILLARS.map((pillar) => (
              <motion.div
                key={pillar.name}
                variants={scaleInVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <Card padding="lg" className="group h-full hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-28 h-28 flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
                        <Image
                          src={pillar.icon}
                          alt={pillar.name}
                          width={112}
                          height={112}
                          className="object-contain w-full h-full rounded-2xl"
                        />
                      </div>
                      <h3 className="font-heading text-lg text-neutral-900">{pillar.name}</h3>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-lg text-neutral-900">{pillar.market}</p>
                      <p className="text-xs text-neutral-500">{pillar.growth} CAGR</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {pillar.offerings.map((offering) => (
                      <div key={offering} className="flex items-center gap-2 text-sm text-neutral-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary-400 flex-shrink-0" />
                        <span>{offering}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-neutral-100">
                    <p className="text-sm text-neutral-500 italic">{pillar.gap}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY COMPETITORS CAN'T COPY
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                Competitive Advantage
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-6">
              Why Competitors Can&apos;t Copy This
            </h2>
          </motion.div>

          <motion.div
            className="space-y-4 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {COMPETITORS.map((comp) => (
              <motion.div
                key={comp.type}
                variants={fadeUpVariants}
                className="flex items-start gap-4 p-6 rounded-xl bg-canvas border border-neutral-100 hover:border-neutral-200 hover:shadow-sm transition-all duration-300"
              >
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <h4 className="font-heading text-base text-neutral-900">{comp.type}</h4>
                    <span className="text-xs text-neutral-400">({comp.examples})</span>
                  </div>
                  <p className="text-neutral-600">{comp.reason}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            <Card padding="lg" className="bg-gradient-to-r from-primary-800 to-primary-900 text-white inline-block">
              <p className="text-lg leading-relaxed max-w-2xl">
                <strong className="text-secondary-400">Our advantage:</strong> We&apos;re building this from scratch
                with all four pillars integrated from day one, operationalized through eight segments.
                You can&apos;t bolt this together after the fact.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHO WE SERVE
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-canvas relative overflow-hidden">
        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariants}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-secondary-400 to-secondary-600" />
                <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-600">
                  Our Guest
                </p>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-8">
                Who We Serve
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Our ideal guest is a <strong>successful person who senses something is missing</strong>.
                They&apos;ve achieved wealth and status, but they&apos;re ready for real change, not
                another temporary fix.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                They&apos;re willing to invest $50,000&ndash;$150,000+ for genuine transformation.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <div className="space-y-3">
                {GUEST_PROFILES.map((profile) => (
                  <div
                    key={profile}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white border border-neutral-100 hover:border-secondary-200 hover:shadow-sm transition-all duration-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 flex-shrink-0 mt-1" />
                    <span className="text-neutral-700">{profile}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GUEST JOURNEY ARC
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-accent-500/10 blur-[150px]" />

        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-secondary-400 to-secondary-600" />
              <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-400">
                The Arc
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-secondary-400 to-secondary-600" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              The Guest Journey
            </h2>
            <p className="text-lg text-primary-200/80 max-w-2xl mx-auto">
              Four phases of transformation, from first contact to lasting embodiment.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-400/40 to-transparent -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {JOURNEY_PHASES.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  variants={scaleInVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                >
                  <div className="group h-full bg-primary-800/50 rounded-2xl p-6 border border-primary-700/50 hover:border-primary-600/50 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${phase.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 lg:w-14 lg:h-14 xl:w-20 xl:h-20 flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
                        <Image
                          src={phase.icon}
                          alt={phase.phase}
                          width={96}
                          height={96}
                          className="object-contain w-full h-full rounded-2xl"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-accent text-[10px] uppercase tracking-[0.2em] text-primary-400">
                          Phase {index + 1}
                        </p>
                        <h3 className="font-heading text-base leading-tight">{phase.phase}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-primary-300">{phase.subtitle}</span>
                          <span className="text-xs text-secondary-400 font-medium">{phase.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {phase.items.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-primary-200/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          AI INTELLIGENCE LAYER
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-canvas relative overflow-hidden">
        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariants}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-secondary-400 to-secondary-600" />
                <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-600">
                  Intelligence Layer
                </p>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-8">
                AI Superintelligent System
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                A HIPAA-compliant AI system that functions as a centralized intelligence layer,
                weaving together all eight segments into a personalized, adaptive experience for
                each guest.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Data Ingestion', desc: 'Epigenetic testing, DNA data, blood biomarkers, brain mapping, medical intake, behavioral data' },
                  { title: 'Personalized Protocol Engine', desc: 'Pre-care, on-site treatment, bio-optimization, and integration, all tailored to individual biology' },
                  { title: 'Adaptive Intelligence', desc: 'Continuously refines recommendations based on new results, engagement patterns, and outcomes' },
                  { title: 'Digital Ecosystem', desc: 'Smart status routing, content personalization, community moderation, outcome tracking' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary-100 flex items-center justify-center">
                      <Image
                        src="/icons/model-sparkles.png"
                        alt="Sparkles"
                        width={64}
                        height={64}
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-neutral-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={scaleInVariants}>
              <Card padding="lg" className="bg-gradient-to-br from-primary-800 to-primary-900 text-white">
                <h3 className="font-heading text-xl mb-6 text-center text-secondary-400">
                  Data Sources Integrated
                </h3>
                <div className="space-y-3">
                  {[
                    { type: 'Epigenetic & DNA testing', purpose: 'Personalized genetic optimization' },
                    { type: 'Blood tests & biomarkers', purpose: 'Metabolic & inflammatory insights' },
                    { type: 'Hormonal & metabolic markers', purpose: 'Endocrine optimization' },
                    { type: 'Brain mapping & neurophysiology', purpose: 'Neural pathway assessment' },
                    { type: 'Medical intake & assessments', purpose: 'Safety & screening' },
                    { type: 'Behavioral & integration data', purpose: 'Long-term outcome tracking' },
                  ].map((item) => (
                    <div
                      key={item.type}
                      className="flex justify-between items-center py-2 border-b border-primary-700 hover:bg-primary-700/30 px-2 -mx-2 rounded transition-colors"
                    >
                      <span className="text-primary-200 text-sm">{item.type}</span>
                      <span className="text-secondary-400 text-sm">{item.purpose}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LONG-TERM VISION
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                The Roadmap
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-6">
              The Long-Term Vision
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {VISION_PHASES.map((phase, index) => (
              <motion.div
                key={phase.year}
                variants={scaleInVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <Card padding="lg" className="group h-full hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-400 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-accent text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                        Phase {index + 1}
                      </p>
                      <p className="font-heading text-sm text-secondary-600">{phase.year}</p>
                    </div>
                  </div>
                  <h3 className="font-heading text-lg text-neutral-900 mb-3">{phase.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{phase.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="py-16 bg-canvas">
        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-neutral-200">
            <Link href="/story/origin" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-accent text-sm uppercase tracking-wide">The Origin</span>
            </Link>
            <Link href="/story/experience">
              <Button variant="primary" size="lg">
                The Experience
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
