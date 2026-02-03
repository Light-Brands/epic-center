'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Calendar,
  Heart,
  Sparkles,
  Home,
  UtensilsCrossed,
  Activity,
  Stethoscope,
  Users,
} from 'lucide-react'
import { Button, Card, Badge } from '@/components/ui'
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

const PROGRAMS = [
  {
    name: '7-Day Reset',
    subtitle: 'Nervous System Reset',
    duration: '7 days',
    price: '$14,000',
    postCare: '3 months',
    ceremonies: '1',
    integrationSessions: '4',
    bestFor: ['First-time explorers', 'Busy professionals', 'Maintenance visits', 'Nervous system focus'],
    schedule: [
      { days: 'Day 1', focus: 'Arrival, medical assessment, settling into your space' },
      { days: 'Days 2\u20133', focus: 'Preparation, bio-optimization, intention deepening' },
      { days: 'Day 4', focus: 'Ceremony experience with full medical support' },
      { days: 'Days 5\u20136', focus: 'Recovery, integration sessions, bio-optimization' },
      { days: 'Day 7', focus: 'Departure preparation and transition support' },
    ],
  },
  {
    name: '14-Day Interruption',
    subtitle: 'Trauma Interruption & Integration',
    duration: '14 days',
    price: '$28,000',
    postCare: '6 months',
    ceremonies: '1\u20132',
    integrationSessions: '8',
    bestFor: ['Meaningful transformation', 'Trauma processing', 'Life transitions', 'Purpose clarity'],
    schedule: [
      { days: 'Days 1\u20132', focus: 'Arrival, medical assessment, deep settling' },
      { days: 'Days 3\u20135', focus: 'Extended preparation, bio-optimization, nervous system readiness' },
      { days: 'Day 6', focus: 'Ceremony experience with full medical support' },
      { days: 'Days 7\u201310', focus: 'Primary integration phase, daily sessions, bio-optimization' },
      { days: 'Days 11\u201313', focus: 'Deeper integration, life planning, identity work' },
      { days: 'Day 14', focus: 'Departure preparation and transition support' },
    ],
  },
  {
    name: '21-Day Recalibration',
    subtitle: 'Deep Recalibration',
    duration: '21 days',
    price: '$42,000',
    postCare: '9 months',
    ceremonies: '1\u20132',
    integrationSessions: '12',
    bestFor: ['Comprehensive transformation', 'Complex trauma', 'Major life restructuring', 'Deep spiritual work'],
    schedule: [
      { days: 'Days 1\u20133', focus: 'Arrival, assessment, deep settling and nervous system preparation' },
      { days: 'Days 4\u20137', focus: 'Extended preparation, bio-optimization, pre-ceremony work' },
      { days: 'Days 8\u20139', focus: 'Ceremony window with full medical support' },
      { days: 'Days 10\u201317', focus: 'Extended integration phase, deep processing, bio-optimization' },
      { days: 'Days 18\u201320', focus: 'Life restructuring, identity anchoring, purpose work' },
      { days: 'Day 21', focus: 'Departure preparation and transition support' },
    ],
  },
  {
    name: '28-Day Full Transformation',
    subtitle: 'Complete Transformation Arc',
    duration: '28 days',
    price: '$56,000',
    postCare: '12 months',
    ceremonies: '1\u20132',
    integrationSessions: '16',
    bestFor: ['Profound transformation', 'Complex histories', 'Major healing journeys', 'Full system reset'],
    schedule: [
      { days: 'Days 1\u20134', focus: 'Arrival, comprehensive assessment, deep settling' },
      { days: 'Days 5\u201310', focus: 'Extended preparation, bio-optimization, pre-ceremony work' },
      { days: 'Days 11\u201312', focus: 'Ceremony window with full medical support' },
      { days: 'Days 13\u201324', focus: 'Deep integration phase, comprehensive processing' },
      { days: 'Days 25\u201328', focus: 'New life preparation, identity anchoring, purpose alignment' },
    ],
  },
]

const INCLUSIONS = [
  { icon: Home, name: 'Luxury Accommodation', description: 'Private room with conscious design, quality linens, and everything needed for deep rest.' },
  { icon: UtensilsCrossed, name: 'Organic Cuisine', description: 'All meals prepared by our chef using organic, locally-sourced ingredients tailored to support healing.' },
  { icon: Heart, name: 'Daily Massage', description: '90-minute therapeutic bodywork each day to support physical integration and nervous system regulation.' },
  { icon: Activity, name: 'Bio-Optimization', description: 'Full access to sauna, cold plunge, red light therapy, hyperbaric oxygen, and IV therapy.' },
  { icon: Stethoscope, name: 'Medical Oversight', description: '24/7 medical team presence with continuous monitoring, on-site physician, and nursing staff.' },
  { icon: Users, name: 'Post-Care Support', description: 'Structured integration program, coaching sessions, and lifetime community access after departure.' },
]

const WELLNESS_PROGRAMS = [
  'Nervous system regulation',
  'Physical and neurological optimization',
  'Emotional resilience',
  'Longevity and regenerative health',
  'Recovery and preventive health',
  'Deep recalibration without plant medicine participation',
]

const SELECTION_CRITERIA = [
  {
    title: 'Available Time',
    description: 'What window can you genuinely create for this work? Rushing transformation creates friction.',
  },
  {
    title: 'Depth of Work Needed',
    description: 'Complex trauma histories and major life restructuring benefit from longer containers.',
  },
  {
    title: 'Previous Experience',
    description: 'First-time guests may begin with shorter programs; those experienced may choose depth.',
  },
  {
    title: 'Support System',
    description: 'What integration support awaits you at home? Stronger support may allow shorter stays.',
  },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* ═══════════════════════════════════════════
          HERO — "Journeys Designed for Depth"
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
                Chapter Four
              </span>
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl font-light mb-8 leading-[0.95] text-white max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Journeys Designed for{' '}
            <span className="relative inline-block">
              <span className="text-secondary-400">Depth</span>
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
            Different depths of work require different amounts of time. We honor that truth
            in how we&apos;ve structured each journey. Base rate: $2,000 per day, all-inclusive.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <Calendar className="w-5 h-5 text-secondary-400" />
              <span className="font-accent text-sm text-white">7 to 28+ Day Programs</span>
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <Sparkles className="w-5 h-5 text-secondary-400" />
              <span className="font-accent text-sm text-white">$2,000/Day All-Inclusive</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOUR PROGRAMS
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
                Treatment Programs
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900">
              Four Paths to Transformation
            </h2>
          </motion.div>

          <div className="space-y-12">
            {PROGRAMS.map((program, index) => (
              <motion.div
                key={program.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUpVariants}
              >
                <div className="bg-white rounded-2xl shadow-card border border-neutral-100 overflow-hidden">
                  {/* Program Header */}
                  <div className="p-8 pb-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="info">{program.duration}</Badge>
                          <span className="font-heading text-2xl text-secondary-600">{program.price}</span>
                        </div>
                        <h3 className="font-heading text-2xl text-neutral-900">{program.name}</h3>
                        <p className="text-neutral-500">{program.subtitle}</p>
                      </div>
                      <div className="flex gap-6 text-sm">
                        <div>
                          <p className="text-neutral-400 font-accent text-xs uppercase tracking-wider">Ceremonies</p>
                          <p className="font-heading text-lg text-neutral-900">{program.ceremonies}</p>
                        </div>
                        <div>
                          <p className="text-neutral-400 font-accent text-xs uppercase tracking-wider">Integration</p>
                          <p className="font-heading text-lg text-neutral-900">{program.integrationSessions} sessions</p>
                        </div>
                        <div>
                          <p className="text-neutral-400 font-accent text-xs uppercase tracking-wider">Post-Care</p>
                          <p className="font-heading text-lg text-neutral-900">{program.postCare}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="px-8 pb-6">
                    <p className="font-accent text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4">
                      Day-by-Day Structure
                    </p>
                    <div className="space-y-2">
                      {program.schedule.map((day) => (
                        <div key={day.days} className="flex items-start gap-4 py-2">
                          <span className="font-accent text-sm font-medium text-primary-800 w-24 flex-shrink-0">
                            {day.days}
                          </span>
                          <span className="text-neutral-600">{day.focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="px-8 py-4 bg-canvas border-t border-neutral-100">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm text-neutral-500 mr-2">Best for:</span>
                      {program.bestFor.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs text-neutral-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Custom Extended */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariants}
            >
              <Card padding="lg" className="bg-gradient-to-r from-primary-800 to-primary-900 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <Badge variant="info">30+ days</Badge>
                    <h3 className="font-heading text-2xl mt-2">Custom Extended Programs</h3>
                    <p className="text-primary-200/80 mt-1">Starting at $60,000+</p>
                  </div>
                  <p className="text-primary-200/80 max-w-md">
                    For guests requiring extended time, we design fully bespoke journeys.
                    Duration, modalities, and scheduling tailored to individual needs.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WELLNESS-ONLY PROGRAMS
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="w-full sm:w-[70vw] mx-auto relative">
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
                  Wellness-Only
                </p>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-8">
                Programs Without Plant Medicine
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Dedicated wellness and health-focused programs that leverage the same medical,
                bio-optimization, hospitality, functional fitness, and integration infrastructure&mdash;offering
                true healing, restoration, and transformation without plant medicine participation.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <div className="space-y-3">
                {WELLNESS_PROGRAMS.map((program) => (
                  <div
                    key={program}
                    className="flex items-start gap-3 p-4 rounded-xl bg-canvas border border-neutral-100 hover:border-secondary-200 hover:shadow-sm transition-all duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{program}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ALL-INCLUSIVE
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
                Every Program Includes
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900">
              All-Inclusive Experience
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {INCLUSIONS.map((item) => (
              <motion.div
                key={item.name}
                variants={scaleInVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <div className="group h-full bg-white rounded-2xl p-6 shadow-card hover:shadow-xl transition-all duration-500 border border-neutral-100 hover:border-neutral-200">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-heading text-lg text-neutral-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW TO CHOOSE
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />

        <div className="w-full sm:w-[70vw] mx-auto relative">
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
                Guidance
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-secondary-400 to-secondary-600" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              How to Choose Your Journey
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {SELECTION_CRITERIA.map((criterion, index) => (
              <motion.div
                key={criterion.title}
                variants={scaleInVariants}
              >
                <div className="h-full bg-primary-800/50 rounded-2xl p-6 border border-primary-700/50 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-secondary-500/20 border border-secondary-500/30 flex items-center justify-center">
                      <span className="font-heading text-sm text-secondary-400">{index + 1}</span>
                    </div>
                    <h3 className="font-heading text-lg">{criterion.title}</h3>
                  </div>
                  <p className="text-primary-200/80 text-sm leading-relaxed">{criterion.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <div className="bg-canvas">
        <div className="w-full sm:w-[70vw] mx-auto py-8">
          <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
            <Link href="/story/experience" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-accent text-sm uppercase tracking-wide">The Experience</span>
            </Link>
            <Link href="/story/science">
              <Button variant="primary">
                The Science
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
