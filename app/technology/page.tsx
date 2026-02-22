'use client'

import { useRef, useLayoutEffect } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Shield,
  Wifi,
  Activity,
  Heart,
  Users,
  Sparkles,
  CheckCircle2,
  Monitor,
  Lock,
  Radio,
  Server,
  Database,
  Zap,
  Globe,
  ChevronRight,
} from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'

// Animation variants
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

// Journey stages data
const JOURNEY_STAGES = [
  {
    phase: 'Pre-Care',
    icon: Brain,
    color: 'from-primary-600 to-primary-700',
    narrative:
      'Before you arrive, the system already knows you. AI-driven health screening builds a complete picture (medical history, psychological profile, treatment goals) so your care team can prepare a protocol tailored to your biology, not a template.',
    capabilities: [
      'AI health screening & risk stratification',
      'Personalized prep protocols',
      'Secure digital intake & consent',
      'Pre-arrival video consultations',
    ],
  },
  {
    phase: 'On-Site',
    icon: Activity,
    color: 'from-secondary-400 to-secondary-500',
    narrative:
      'During treatment, technology becomes invisible guardian. Wearable biosensors stream real-time vitals to the medical team. Adaptive protocols adjust in response to your body\'s signals. Staff receive intelligent handoff briefings, so nothing falls through the cracks.',
    capabilities: [
      'Real-time wearable biometric monitoring',
      'Adaptive treatment protocol engine',
      'Intelligent staff handoff system',
      'Distraction-free guest tablets',
    ],
  },
  {
    phase: 'Integration',
    icon: Heart,
    color: 'from-accent-500 to-accent-600',
    narrative:
      'After you leave, the relationship deepens. AI-updated weekly protocols evolve as you do. Guided journaling prompts surface insights at the right moments. And behind the scenes, the system watches for warning signs, so your care team can reach out before a crisis, not after.',
    capabilities: [
      'AI-updated weekly integration protocols',
      'Guided journaling with intelligent prompts',
      'Early crisis detection & outreach',
      'Longitudinal outcome tracking',
    ],
  },
  {
    phase: 'Community',
    icon: Users,
    color: 'from-primary-500 to-primary-600',
    narrative:
      'Transformation doesn\'t end. It compounds. AI-moderated spaces connect you with others on similar journeys. Cohort-based groups form naturally. And as outcomes accumulate, you become part of the evidence base that makes the next person\'s healing more precise.',
    capabilities: [
      'AI-moderated peer support spaces',
      'Cohort-based group matching',
      'Ambassador & referral engine',
      'Evidence-building & research contribution',
    ],
  },
]

const INFRASTRUCTURE_CARDS = [
  {
    icon: Wifi,
    title: 'Medical-Grade Network',
    description:
      'Redundant fiber and satellite connectivity ensures zero downtime for critical monitoring systems. Every biosensor signal reaches the medical team in real time, even during Tulum\'s storm season.',
  },
  {
    icon: Lock,
    title: 'Security & Privacy',
    description:
      'HIPAA-compliant from day one. End-to-end encryption, role-based access controls, and audit logging protect the most sensitive data a person can share: their medical and psychological history.',
  },
  {
    icon: Radio,
    title: 'Seamless Communication',
    description:
      'Facility-wide mesh communication keeps clinical, hospitality, and emergency teams in constant coordination. Guests experience seamless care; staff experience seamless information.',
  },
]

const SOFTWARE_BREAKDOWN = [
  { name: 'AI Personalization Engine', amount: 280000 },
  { name: 'Clinical Protocol System', amount: 180000 },
  { name: 'Biometric Monitoring Platform', amount: 150000 },
  { name: 'Integration & Aftercare App', amount: 120000 },
  { name: 'Staff Coordination Hub', amount: 80000 },
  { name: 'Community Platform', amount: 70000 },
  { name: 'Analytics & Outcomes Dashboard', amount: 60000 },
  { name: 'Security & Compliance Layer', amount: 60000 },
]

const HARDWARE_BREAKDOWN = [
  { name: 'Network Infrastructure', amount: 80000 },
  { name: 'Wearable Biosensors (fleet)', amount: 60000 },
  { name: 'Guest Tablets & Devices', amount: 40000 },
  { name: 'Server & Edge Computing', amount: 30000 },
  { name: 'AV & Communication Systems', amount: 20000 },
]

function AnimatedBar({ percentage, delay }: { percentage: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="h-2 bg-neutral-200 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-secondary-400 to-secondary-500"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  )
}

export default function TechnologyPage() {
  const animatedTextRef = useRef<HTMLDivElement>(null)

  // GSAP text animation on scroll
  useLayoutEffect(() => {
    if (!animatedTextRef.current) return

    let cleanup: (() => void) | undefined

    const initGsap = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!animatedTextRef.current) return

      const lines = animatedTextRef.current.querySelectorAll('.line')
      const highlights = animatedTextRef.current.querySelectorAll('.highlight')

      gsap.set(lines, { opacity: 0, y: 50, filter: 'blur(4px)' })
      gsap.set(highlights, { opacity: 0, scale: 0.95 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animatedTextRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      })

      tl.to(lines[0], {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
      })
        .to(
          lines[1],
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.2,
            ease: 'power3.out',
          },
          '-=0.8'
        )
        .to(
          highlights,
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.5)',
            stagger: 0.15,
          },
          '-=0.6'
        )

      cleanup = () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }

    initGsap()
    return () => cleanup?.()
  }, [])

  const softwareTotal = SOFTWARE_BREAKDOWN.reduce((sum, item) => sum + item.amount, 0)
  const hardwareTotal = HARDWARE_BREAKDOWN.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className="min-h-screen bg-canvas">
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO - "The Intelligence Behind Transformation"
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary-900">
        {/* Warm gold gradient accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/40 to-transparent" />
        <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary-500/8 blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent-500/6 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />

        <div className="w-full sm:w-[70vw] mx-auto py-32 relative">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-secondary-500/30 bg-secondary-500/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
              <span className="font-accent text-[11px] uppercase tracking-[0.3em] text-secondary-400">
                Technology Platform
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl font-light mb-8 leading-[0.95] text-white max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            The Intelligence Behind{' '}
            <span className="relative inline-block">
              <span className="text-secondary-400">Transformation</span>
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

          {/* Subtitle */}
          <motion.p
            className="font-body text-lg md:text-xl text-primary-200/90 mb-14 max-w-2xl leading-[1.7] tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Technology doesn't replace the human experience. It deepens it.
            Our platform weaves AI, biosensors, and adaptive protocols into a seamless
            system that makes every guest feel profoundly cared for.
          </motion.p>

          {/* Floating stat badges */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <Database className="w-5 h-5 text-secondary-400" />
              <span className="font-accent text-sm text-white">$750K Platform Investment</span>
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <Server className="w-5 h-5 text-secondary-400" />
              <span className="font-accent text-sm text-white">14 Integrated Systems</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          PHILOSOPHY - GSAP Scroll-Triggered Text Reveal
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-40 bg-white overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-accent-500/5 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-secondary-500/5 blur-3xl" />

        <div className="w-full sm:w-[70vw] mx-auto relative">
          <div ref={animatedTextRef} className="text-center space-y-6">
            <p className="line font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-primary-800 leading-[1.25] tracking-tight">
              We didn't build technology to be impressive.{' '}
              <span className="highlight text-accent-600 inline-block">We built it to be invisible.</span>
            </p>
            <p className="line font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-primary-800 leading-[1.25] tracking-tight">
              When technology works, you feel{' '}
              <span className="highlight text-secondary-600 inline-block">cared for</span>, not managed.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          THE JOURNEY - "Technology Woven Into Every Moment"
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-canvas relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F483A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

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
                The Guest Journey
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-6">
              Technology Woven Into Every Moment
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From the first inquiry to years of sustained growth, intelligent systems
              ensure nothing falls through the cracks, and every interaction feels personal.
            </p>
          </motion.div>

          {/* Journey cards with connecting thread */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {/* Golden connecting thread (desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-400/40 to-transparent -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {JOURNEY_STAGES.map((stage, index) => (
                <motion.div
                  key={stage.phase}
                  variants={scaleInVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                >
                  <div className="group h-full bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-500 border border-neutral-100 hover:border-neutral-200 relative overflow-hidden">
                    {/* Top accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stage.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Phase number + icon */}
                    <div className="flex items-center gap-3 mb-5">
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-md`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <stage.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <p className="font-accent text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                          Stage {index + 1}
                        </p>
                        <h3 className="font-heading text-lg text-neutral-900">{stage.phase}</h3>
                      </div>
                    </div>

                    {/* Narrative description */}
                    <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                      {stage.narrative}
                    </p>

                    {/* Capabilities */}
                    <div className="pt-4 border-t border-neutral-100 space-y-2">
                      {stage.capabilities.map((cap) => (
                        <div key={cap} className="flex items-start gap-2 text-sm text-neutral-500">
                          <ChevronRight className="w-3.5 h-3.5 text-secondary-400 mt-0.5 flex-shrink-0" />
                          <span>{cap}</span>
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

      {/* ═══════════════════════════════════════════════════════════════════════════
          "A SYSTEM THAT LEARNS YOU" - AI Deep Dive
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-accent-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-secondary-500/8 blur-[120px]" />

        <div className="w-full sm:w-[70vw] mx-auto relative">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Left: Narrative */}
            <motion.div variants={fadeUpVariants}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-secondary-400 to-secondary-600" />
                <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-400">
                  AI Personalization
                </p>
              </div>

              <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-tight">
                A System That Learns You
              </h2>

              <p className="text-lg text-primary-200 mb-8 leading-relaxed">
                The AI Superintelligent System draws from 7+ data sources (medical records,
                biometric streams, psychological assessments, behavioral patterns, treatment
                responses, integration progress, and long-term outcomes) to build a living
                model of each guest's healing trajectory.
              </p>
              <p className="text-primary-200/80 mb-10 leading-relaxed">
                This isn't automation. It's augmentation. Every recommendation is reviewed by
                physicians. Every protocol adjustment is clinically validated. The AI accelerates
                insight; humans hold the relationship.
              </p>

              <div className="space-y-4">
                {[
                  'Protocols that adapt to biometric responses in real time',
                  'Treatment plans that evolve with each session',
                  'Integration guidance personalized to psychological profile',
                  'Outcome predictions that improve with every guest',
                ].map((item) => (
                  <motion.div
                    key={item}
                    className="flex items-start gap-4 group"
                    variants={fadeUpVariants}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-success-500/20 border border-success-500/30 flex items-center justify-center group-hover:bg-success-500/30 transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-success-400" />
                    </div>
                    <p className="text-primary-100 pt-2">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Data flow visualization */}
            <motion.div variants={scaleInVariants}>
              <div className="bg-primary-800/50 rounded-2xl p-8 border border-primary-700/50 backdrop-blur-sm">
                <h3 className="font-heading text-xl mb-8 text-center text-secondary-400">
                  Adaptive Intelligence Flow
                </h3>

                {/* Data Sources */}
                <div className="mb-6">
                  <p className="font-accent text-xs uppercase tracking-[0.2em] text-primary-400 mb-3">
                    Data Sources
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Medical Records',
                      'Biometric Streams',
                      'Psychological Assessment',
                      'Behavioral Patterns',
                      'Treatment Response',
                      'Integration Progress',
                    ].map((source) => (
                      <div
                        key={source}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-700/40 text-sm text-primary-200"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary-400" />
                        {source}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center my-4">
                  <div className="w-px h-8 bg-gradient-to-b from-secondary-400/60 to-secondary-400/20" />
                </div>

                {/* AI Layer */}
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-secondary-500/20 to-secondary-400/10 border border-secondary-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="w-5 h-5 text-secondary-400" />
                    <p className="font-accent text-sm text-secondary-400 uppercase tracking-wide">
                      AI Engine
                    </p>
                  </div>
                  <p className="text-sm text-primary-200">
                    Pattern recognition, predictive modeling, protocol optimization, continuously
                    refined by physician oversight and outcome data.
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center my-4">
                  <div className="w-px h-8 bg-gradient-to-b from-secondary-400/60 to-secondary-400/20" />
                </div>

                {/* Outputs */}
                <div>
                  <p className="font-accent text-xs uppercase tracking-[0.2em] text-primary-400 mb-3">
                    Personalized Outputs
                  </p>
                  <div className="space-y-2">
                    {[
                      'Adaptive treatment protocols',
                      'Personalized integration plans',
                      'Predictive risk alerts',
                      'Outcome-driven recommendations',
                    ].map((output) => (
                      <div
                        key={output}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-success-500/10 border border-success-500/20 text-sm text-success-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-success-400" />
                        {output}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          INFRASTRUCTURE - "You Never Have to Think About"
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
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
                Foundation
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-6">
              Infrastructure You Never Have to Think About
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The best infrastructure is the kind you never notice. It just works:
              reliably, securely, and invisibly.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {INFRASTRUCTURE_CARDS.map((card) => (
              <motion.div
                key={card.title}
                variants={scaleInVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <div className="group h-full bg-canvas rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-500 border border-neutral-100 hover:border-neutral-200 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.div
                    className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <card.icon className="w-7 h-7 text-primary-600" />
                  </motion.div>

                  <h3 className="font-heading text-xl text-neutral-900 mb-4 group-hover:text-primary-800 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          PLATFORM INVESTMENT - The Business Case
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-canvas-muted relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-radial from-secondary-500/8 to-transparent rounded-full blur-3xl" />

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
                Capital Allocation
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900">
              Platform Investment
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Budget breakdown with bars */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariants}
            >
              <Card padding="lg">
                <h3 className="font-heading text-xl text-neutral-900 mb-6">
                  Software Platform - $1,000,000
                </h3>
                <div className="space-y-4">
                  {SOFTWARE_BREAKDOWN.map((item, index) => (
                    <div key={item.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-neutral-700">{item.name}</span>
                        <span className="text-sm font-medium text-neutral-900">
                          ${(item.amount / 1000).toFixed(0)}K
                        </span>
                      </div>
                      <AnimatedBar
                        percentage={(item.amount / softwareTotal) * 100}
                        delay={index * 0.05}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <h3 className="font-heading text-xl text-neutral-900 mb-6">
                    Physical Infrastructure - $230,000
                  </h3>
                  <div className="space-y-4">
                    {HARDWARE_BREAKDOWN.map((item, index) => (
                      <div key={item.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-neutral-700">{item.name}</span>
                          <span className="text-sm font-medium text-neutral-900">
                            ${(item.amount / 1000).toFixed(0)}K
                          </span>
                        </div>
                        <AnimatedBar
                          percentage={(item.amount / hardwareTotal) * 100}
                          delay={0.4 + index * 0.05}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Right: Key metrics card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariants}
              className="flex flex-col gap-6"
            >
              <Card padding="lg" className="bg-gradient-to-r from-primary-800 to-primary-900 text-white flex-1">
                <h3 className="font-heading text-xl mb-6">Key Metrics</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Total Technology CapEx', value: '$750,000' },
                    { label: 'Annual Technology OpEx', value: '$228,000' },
                    { label: 'Percentage of Total Raise', value: '4.8%' },
                    { label: 'Engineering Team', value: '2 FTE' },
                    { label: 'Integrated Systems', value: '14' },
                    { label: 'D&A (Technology)', value: '$200,000/yr' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between items-center py-2 border-b border-primary-700 hover:bg-primary-700/30 px-2 -mx-2 rounded transition-colors"
                    >
                      <span className="text-primary-200">{item.label}</span>
                      <span className="font-medium text-secondary-400">{item.value}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card padding="lg" className="bg-neutral-100">
                <div className="flex items-start gap-3">
                  <Monitor className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-2">Financial Model Integrity</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Technology costs are fully integrated into the financial model. The $750K CapEx
                      is reflected in the total raise of $17.3M. Annual OpEx of $228K is included in
                      operating expenses across all P&L projections. D&A of $200K/yr (5-year straight-line)
                      is captured in the depreciation schedule.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SCALABILITY - "Built Once. Deployed Everywhere."
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-canvas relative overflow-hidden">
        <div className="w-full sm:w-[70vw] mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariants}
          >
            <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="font-accent text-sm uppercase tracking-widest text-primary-700 mb-2">
                    Platform Scale
                  </p>
                  <h3 className="text-3xl font-heading mb-4">
                    Built Once. Deployed Everywhere.
                  </h3>
                  <p className="text-primary-800 mb-6">
                    Every system is designed for multi-location deployment from day one.
                    The AI models improve with each guest, the protocols are location-agnostic,
                    and the infrastructure stack deploys to a new site for 60% less than the
                    initial build.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Cloud-native architecture scales across locations',
                      'AI models trained on pooled, anonymized data improve globally',
                      'Standardized hardware spec deploys in weeks, not months',
                      'Central engineering team supports multiple sites',
                    ].map((point) => (
                      <div key={point} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary-800" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link href="/expansion">
                      <Button variant="primary" size="lg">
                        See Expansion Strategy
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4"
                >
                  {[
                    { value: '60%', label: 'Cost Reduction', sublabel: 'Per additional site' },
                    { value: '$750K', label: 'Initial Build', sublabel: 'Flagship investment' },
                    { value: '~$500K', label: 'Subsequent Sites', sublabel: 'Marginal tech cost' },
                    { value: '14', label: 'Shared Systems', sublabel: 'Cross-location' },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      variants={scaleInVariants}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="bg-white/20 rounded-lg p-4 text-center hover:bg-white/30 transition-colors cursor-default"
                    >
                      <p className="font-heading text-3xl">{stat.value}</p>
                      <p className="font-medium text-sm">{stat.label}</p>
                      <p className="text-xs text-primary-700">{stat.sublabel}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CTA + NAVIGATION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/40 to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-secondary-500/10 blur-[150px]" />

        <motion.div
          className="w-full sm:w-[70vw] mx-auto text-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
            See How the Numbers Work
          </h2>
          <p className="text-xl text-primary-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            The $750K technology investment is fully integrated into our financial projections.
            Explore the complete model.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/financials">
              <button className="group inline-flex items-center gap-2 px-10 py-5 rounded-xl font-accent text-sm font-semibold uppercase tracking-wider text-primary-950 bg-gradient-to-r from-secondary-400 to-secondary-500 hover:from-secondary-500 hover:to-secondary-600 shadow-xl shadow-secondary-500/25 hover:shadow-secondary-500/40 transition-all duration-300">
                View Financials
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <Link href="/invest">
              <button className="inline-flex items-center gap-2 px-10 py-5 rounded-xl font-accent text-sm font-semibold uppercase tracking-wider text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                View Investment
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Page Navigation */}
      <div className="bg-canvas">
        <div className="w-full sm:w-[70vw] mx-auto py-8">
          <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
            <Link href="/properties/rancho-paraiso-oasis" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-accent text-sm uppercase tracking-wide">The Property</span>
            </Link>
            <Link href="/technology/data">
              <Button variant="primary">
                Data & Intelligence
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
