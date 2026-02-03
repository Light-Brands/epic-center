'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sun,
  Moon,
  Sunrise,
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

const SEGMENTS = [
  {
    number: 1,
    name: 'Medical & Scientific Oversight',
    icon: '/icons/diff-medical.png',
    description:
      'Evidence-based protocols. Rigorous safety screening. Continuous monitoring. Measurable outcomes. We honor the body\u2019s complexity with medical precision.',
    features: [
      'Full medical team on-site 24/7',
      'Hospital-grade monitoring and safety protocols',
      'Comprehensive health assessments before, during, and after',
      'Outcome tracking so guests can see measurable improvement',
    ],
    detail:
      'Comprehensive pre-arrival medical evaluation including cardiovascular screening, labs, and psychiatric assessment. 24/7 cardiac monitoring, vital signs tracking, and emergency preparedness with on-site physician, nursing staff, and established hospital transfer protocols.',
  },
  {
    number: 2,
    name: 'Plant Medicine - Iboga & Ibogaine',
    icon: '/icons/model-leaf.png',
    description:
      'Trauma-informed, ethically held plant medicine experiences with strong medical oversight. We work primarily with Iboga and Ibogaine, medicines with profound capacity for nervous system reset and trauma resolution.',
    features: [
      'Full cardiac screening and monitoring (critical for safety)',
      'Physicians present during experiences',
      'Months of preparation before and integration support after',
      'Sacred context with ethical framework',
    ],
    detail:
      'Sustainable cultivation with no wild-harvesting and support for indigenous communities. The ceremony is 10% of the transformation, the other 90% happens in the days, weeks, and months after.',
  },
  {
    number: 3,
    name: 'Advanced Bio-Optimization & Longevity',
    icon: '/icons/story-biohacking.png',
    description:
      'State-of-the-art modalities that restore the nervous system, accelerate recovery, and support long-term vitality. The body is the vehicle; we ensure it\u2019s optimized for the journey.',
    features: [
      'Evidence-based tools: hyperbaric oxygen, IV therapy, cryotherapy, neurofeedback',
      'Thermal therapies, cold therapy, light therapies',
      'Personalized protocols based on individual health data',
      'Focus on what works, not what\u2019s trendy',
    ],
    detail:
      'Infrared & traditional sauna for deep detoxification. Cold plunge therapy for stress resilience. Red light therapy for cellular regeneration. Breathwork sessions for autonomic nervous system rebalancing.',
  },
  {
    number: 4,
    name: 'Trauma Integration & Nervous System Restoration',
    icon: '/icons/story-trauma.png',
    description:
      'The medicine opens doors; integration walks through them. Personalized support through facilitators, somatic therapies, and practices that anchor transformation in the body.',
    features: [
      'Polyvagal framework for nervous system regulation',
      'Somatic Experiencing, TRE, EMDR, Parts Work',
      'Breathwork and movement practices',
      'Daily integration structure and group circles',
    ],
    detail:
      'Dedicated 1:1 facilitator presence throughout your journey, trained in trauma-informed and somatic approaches. Body-based modalities that process what the mind cannot articulate: movement, touch, breath.',
  },
  {
    number: 5,
    name: 'Five-Star Hospitality, Nutrition, Care & Functional Fitness',
    icon: '/icons/story-hospitality.png',
    description:
      'A luxury retreat environment where every detail supports healing.',
    features: [
      'Private villas, 3:1 staff-to-guest ratio',
      'Michelin-quality functional cuisine (food as medicine)',
      'Architecture designed to support healing (not just look nice)',
      'Daily therapeutic massage and functional fitness',
    ],
    detail:
      '90-minute therapeutic bodywork sessions each day. Organic chef-prepared cuisine tailored to support healing. Conscious architecture with biophilic design and natural materials. Staff trained not just in service, but in presence.',
  },
  {
    number: 6,
    name: 'Digital Ecosystem & Community Support',
    icon: '/icons/story-digital.png',
    description:
      'Technology that extends care beyond walls. Medical onboarding, preparation content, daily schedules, integration practices, and community connection, all in one cohesive platform powered by the AI Superintelligent System.',
    features: [
      'Secure HIPAA-compliant medical onboarding',
      'Stage-appropriate preparation content',
      'On-site integration: schedules, booking, facilitator connection',
      'Lifelong alumni network and community access',
    ],
    detail:
      'Smart status routing automatically places guests into Pre-Care, On-Site, or Post-Care communities. AI-moderated spaces prevent PHI sharing while fostering genuine connection.',
  },
  {
    number: 7,
    name: 'Pre-Care - Preparation',
    icon: '/icons/model-clock.png',
    description:
      'The foundation of transformation. 4\u20138 weeks of medical preparation, psychological readiness, nervous system priming, intention setting, and practical logistics. Preparation is not overhead, it determines the depth of what\u2019s possible.',
    features: [
      'Medical clearance and safety screening',
      'Intention setting and psychological preparation',
      'Dietary and lifestyle adjustments',
      'Nervous system readiness practices',
    ],
    detail:
      'Facilitator connection begins before arrival. Digital onboarding provides education and guided practices. Dietary preparation supports the body for the work ahead.',
  },
  {
    number: 8,
    name: 'Post-Care - Integration',
    icon: '/icons/model-shield.png',
    description:
      'Where transformation becomes embodiment. 3\u201312+ months of processing, understanding, anchoring, and living the changes. Coaching, community, practices, and support to ensure insights become lasting change.',
    features: [
      'Structured integration program',
      'Weekly/monthly coaching sessions',
      'Community platform and peer support',
      'Life restructuring and identity anchoring',
    ],
    detail:
      'Practice maintenance support ensures daily routines sustain transformation. Purpose alignment work translates insights into lasting life changes. Return visit options and continued bio-optimization access.',
  },
]

const DAILY_RHYTHM = [
  {
    period: 'Morning',
    icon: Sunrise,
    color: 'from-amber-400 to-orange-400',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-700',
    accentColor: 'text-amber-500',
    items: [
      { time: '6:30 AM', activity: 'Optional morning practice: yoga, breathwork, or meditation' },
      { time: '7:30 AM', activity: 'Nourishing breakfast in community' },
      { time: '9:00 AM', activity: 'Integration session, bio-optimization, or workshop' },
      { time: '11:00 AM', activity: 'Free time for nature walks, journaling, or rest' },
    ],
  },
  {
    period: 'Afternoon',
    icon: Sun,
    color: 'from-blue-400 to-sky-400',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    accentColor: 'text-blue-500',
    items: [
      { time: '12:30 PM', activity: 'Organic lunch prepared by our chef' },
      { time: '2:00 PM', activity: 'Massage, individual session, or bio-optimization' },
      { time: '4:00 PM', activity: 'Rest and personal reflection time' },
    ],
  },
  {
    period: 'Evening',
    icon: Moon,
    color: 'from-indigo-400 to-violet-400',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-700',
    accentColor: 'text-indigo-500',
    items: [
      { time: '5:30 PM', activity: 'Movement or breathwork practice' },
      { time: '7:00 PM', activity: 'Dinner and community connection' },
      { time: '8:30 PM', activity: 'Optional evening program or early rest' },
    ],
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* ═══════════════════════════════════════════
          HERO - "Eight Segments of Transformation"
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
                Chapter Three
              </span>
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-6xl sm:text-7xl md:text-8xl font-light mb-10 leading-[0.9] text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Eight Segments of{' '}
            <span className="relative inline-block">
              <span className="text-secondary-400">Transformation</span>
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
            Each segment amplifies the others. Medical oversight makes plant medicine safe enough
            for cautious high-achievers. Luxury environment supports nervous system healing. Technology
            accelerates recovery. The whole is greater than the sum of parts.
          </motion.p>

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
          EIGHT SEGMENTS - Alternating Layout
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-canvas relative overflow-hidden">
        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="space-y-16 md:space-y-24">
            {SEGMENTS.map((segment, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={segment.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerContainer}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:[direction:rtl]' : ''}`}
                >
                  <motion.div variants={fadeUpVariants} className={!isEven ? 'lg:[direction:ltr]' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-28 h-28 flex-shrink-0">
                        <Image src={segment.icon} alt={segment.name} width={112} height={112} className="object-contain w-full h-full rounded-2xl" />
                      </div>
                      <div>
                        <p className="font-accent text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                          Segment {segment.number}
                        </p>
                        <h3 className="font-heading text-xl md:text-2xl text-neutral-900">{segment.name}</h3>
                      </div>
                    </div>

                    <p className="text-neutral-600 leading-relaxed mb-6">{segment.description}</p>
                    <p className="text-sm text-neutral-500 leading-relaxed">{segment.detail}</p>
                  </motion.div>

                  <motion.div variants={scaleInVariants} className={!isEven ? 'lg:[direction:ltr]' : ''}>
                    <Card padding="lg">
                      <p className="font-accent text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4">
                        Key Capabilities
                      </p>
                      <div className="space-y-3">
                        {segment.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY THIS COMBINATION
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-accent-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-secondary-500/8 blur-[120px]" />

        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariants}>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-secondary-400 to-secondary-600" />
                <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-400">
                  The Synergy
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-secondary-400 to-secondary-600" />
              </div>
              <h2 className="font-heading text-4xl md:text-5xl mb-16">
                Why This Combination Matters
              </h2>
            </motion.div>

            <div className="space-y-10">
              {[
                { emphasis: 'Medical oversight', rest: 'makes plant medicine safe enough for cautious high-achievers.' },
                { emphasis: 'Luxury environment', rest: 'supports nervous system healing.' },
                { emphasis: 'Technology', rest: 'accelerates recovery.' },
                { emphasis: 'Pre-care', rest: 'maximizes depth.' },
                { emphasis: 'Post-care', rest: 'ensures lasting change.' },
              ].map((point, index) => (
                <motion.div key={point.emphasis} variants={fadeUpVariants} className="text-center">
                  <p className="font-display text-xl md:text-2xl font-light leading-relaxed text-primary-100/90">
                    <span className="text-secondary-400">{point.emphasis}</span>{' '}
                    {point.rest}
                  </p>
                  {index < 4 && (
                    <div className="flex justify-center mt-10">
                      <div className="w-px h-6 bg-gradient-to-b from-secondary-500/40 to-transparent" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUpVariants}>
              <div className="mt-16 pt-12 border-t border-primary-700/50">
                <p className="font-display text-2xl md:text-3xl font-light text-secondary-400 leading-snug">
                  The whole is greater than the sum of parts.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DAILY RHYTHM
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-canvas relative overflow-hidden">
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
                A Day at the Epicenter
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-6">
              The Daily Rhythm
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Each day is designed to honor the body&apos;s natural rhythms while creating space
              for deep transformation.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {DAILY_RHYTHM.map((group) => (
              <motion.div
                key={group.period}
                variants={scaleInVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <div className="group h-full bg-white rounded-2xl shadow-card border border-neutral-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${group.color}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-10 h-10 rounded-full ${group.bgColor} flex items-center justify-center`}>
                        <group.icon className={`w-5 h-5 ${group.accentColor}`} />
                      </div>
                      <h3 className={`font-heading text-lg ${group.textColor}`}>{group.period}</h3>
                    </div>
                    <div className="space-y-4">
                      {group.items.map((item) => (
                        <div key={item.time} className="flex items-start gap-3">
                          <span className="flex-shrink-0 font-accent text-xs font-medium text-neutral-400 pt-0.5 w-16">
                            {item.time}
                          </span>
                          <p className="text-sm text-neutral-600 leading-relaxed">{item.activity}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="py-16 bg-canvas">
        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-neutral-200">
            <Link href="/story/solution" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-accent text-sm uppercase tracking-wide">The Solution</span>
            </Link>
            <Link href="/story/programs">
              <Button variant="primary" size="lg">
                The Programs
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
