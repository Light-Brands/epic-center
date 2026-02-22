'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui'
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

const HIGHLIGHTS = [
  {
    icon: '/icons/project-cost.png',
    stat: '$17.3M',
    label: 'Total Project',
    description:
      'A vertically integrated health intelligence platform spanning real estate, clinical operations, and proprietary data.',
  },
  {
    icon: '/icons/diff-luxury.png',
    stat: '60 Rooms',
    label: 'Luxury Medical Campus',
    description:
      'Private casitas set within 45,000 m\u00B2 of jungle, purpose-built for deep healing with world-class hospitality.',
  },
  {
    icon: '/icons/story-accommodation.png',
    stat: '48 Villas',
    label: 'Villa Program',
    description:
      'Premium branded residences generating non-correlated revenue and strengthening the community ecosystem.',
  },
  {
    icon: '/icons/story-digital.png',
    stat: '14 Systems',
    label: 'Technology Platform',
    description:
      'Proprietary health intelligence infrastructure capturing neurological, epigenetic, and biomarker data at scale.',
  },
]

const NEXT_STEPS = [
  {
    step: 1,
    title: 'Due Diligence Period',
    description:
      'You now have full access to our data room. Review financials, legal structure, property documentation, and clinical protocols at your pace.',
  },
  {
    step: 2,
    title: 'Legal & Documentation',
    description:
      'Our legal team will prepare the formal agreements. You\u2019ll receive the subscription documents and operating agreement for review with your counsel.',
  },
  {
    step: 3,
    title: 'Capital Call Schedule',
    description:
      'Funds are deployed in structured tranches tied to construction milestones \u2014 your capital is put to work as the project materializes.',
  },
  {
    step: 4,
    title: 'Site Visit',
    description:
      'You\u2019re invited to walk the property in person. See the jungle compound, meet the local team, and feel the energy of Rancho Paraiso Oasis firsthand.',
  },
  {
    step: 5,
    title: 'Team Introductions',
    description:
      'Meet the full leadership team, medical advisors, and operational partners. You\u2019re not just an investor \u2014 you\u2019re part of the inner circle.',
  },
]

export default function OfferThankYouPage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* ═══════════════════════════════════════════
          HERO — "This Is Just the Beginning"
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary-900">
        {/* Atmospheric layers */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/40 to-transparent" />
        <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-secondary-500/8 blur-[180px]" />
        <div className="absolute top-1/3 left-[10%] w-[300px] h-[300px] rounded-full bg-primary-700/40 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-500/6 blur-[150px]" />
        <div className="absolute top-1/2 right-[5%] w-[200px] h-[200px] rounded-full bg-secondary-400/5 blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />

        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-0 py-32 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-secondary-500/30 bg-secondary-500/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
              <span className="font-accent text-[11px] uppercase tracking-[0.3em] text-secondary-400">
                Welcome, Partner
              </span>
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-6xl sm:text-7xl md:text-8xl font-light mb-10 leading-[0.9] text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            This Is Just{' '}
            <span className="relative inline-block">
              <span className="text-secondary-400">the Beginning</span>
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
            className="font-body text-xl md:text-2xl text-primary-200/90 mb-6 max-w-2xl mx-auto leading-[1.6] tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Thank you for signing the Letter of Intent. What you&apos;ve just committed to
            isn&apos;t a transaction &mdash; it&apos;s an invitation into something
            extraordinary.
          </motion.p>

          <motion.p
            className="font-body text-lg text-primary-300/70 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            You are now part of a very small circle building the future of
            transformational medicine.
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
          WHAT YOU'VE JUST JOINED
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-canvas relative overflow-hidden">
        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-0 relative">
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
                The Scope
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-6">
              What You&apos;ve Just Joined
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The Transformational Epicenter is not a retreat center. It is a vertically integrated
              health intelligence platform &mdash; the first of its kind at this scale, combining
              medical rigor, sacred healing, luxury hospitality, and proprietary data in a single
              compound.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {HIGHLIGHTS.map((item) => (
              <motion.div
                key={item.label}
                variants={scaleInVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <Card padding="lg" className="group h-full hover:shadow-xl transition-all duration-500 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={80}
                      height={80}
                      className="object-contain w-full h-full rounded-2xl"
                    />
                  </div>
                  <p className="font-heading text-3xl text-primary-800 mb-1">{item.stat}</p>
                  <p className="font-accent text-xs uppercase tracking-[0.2em] text-secondary-600 mb-3">
                    {item.label}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT HAPPENS NEXT — Timeline
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-secondary-500/5 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-accent-500/5 blur-3xl" />

        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-0 relative">
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
                Your Path Forward
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-6">
              What Happens Next
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The LOI marks the beginning of our formal partnership process.
              Here&apos;s what to expect in the coming weeks.
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200" />
              {NEXT_STEPS.map((item) => (
                <motion.div
                  key={item.step}
                  variants={fadeUpVariants}
                  className="relative pl-12 pb-10 last:pb-0"
                >
                  <div className="absolute left-1.5 top-1 w-6 h-6 rounded-full bg-primary-800 border-2 border-white flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-xl text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE VISION — Emotional Close
          ═══════════════════════════════════════════ */}
      <section className="relative py-32 md:py-40 bg-primary-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-accent-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-secondary-500/8 blur-[120px]" />

        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-0 relative">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariants}>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-secondary-400 to-secondary-600" />
                <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-400">
                  The Vision
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-secondary-400 to-secondary-600" />
              </div>
            </motion.div>

            <motion.h2
              variants={fadeUpVariants}
              className="font-heading text-4xl md:text-5xl mb-10"
            >
              Beyond the Numbers
            </motion.h2>

            <motion.div variants={fadeUpVariants} className="space-y-8 mb-16">
              <p className="text-xl text-primary-200/90 leading-relaxed">
                Every number on the financials represents a human being who arrives
                broken and leaves whole. Every casita is a sanctuary. Every data point
                is a life measured, understood, and improved.
              </p>
              <p className="text-lg text-primary-300/70 leading-relaxed">
                What we are building in Tulum is not just a medical facility or an
                investment vehicle. It is a place where the lost travelers come home to
                the gardens of their hearts and souls. Where modern science meets
                ancient wisdom. Where luxury is not indulgence &mdash; it is love made
                material.
              </p>
              <p className="text-lg text-primary-300/70 leading-relaxed">
                You chose to be part of this before the world catches on. That takes
                vision. That takes courage. And that is exactly the kind of partner we
                want building this alongside us.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="pt-10 border-t border-primary-700/50"
            >
              <p className="font-display text-3xl sm:text-4xl font-light text-secondary-400 leading-[1.3]">
                Welcome to the Epicenter.
              </p>
              <p className="text-primary-300/60 mt-4 text-sm">
                &mdash; Nicholas, Jason & the entire team
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
