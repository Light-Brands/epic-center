'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  TreePine,
  Volume2,
  Sun,
  Palette,
  Home,
  Bath,
  Thermometer,
  Flower2,
  CheckCircle2,
  Shield,
  Users,
  Award,
  Lock,
  Globe,
  MapPin,
  Plane,
  Building2,
  Stethoscope,
  Briefcase,
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

const DESIGN_PRINCIPLES = [
  {
    icon: TreePine,
    name: 'Biophilic Design',
    description: 'Nature integration throughout\u2014natural light, living plants, water features, and direct connection to the outdoors.',
  },
  {
    icon: Volume2,
    name: 'Acoustic Sanctuary',
    description: 'Sound-conscious design with natural sound barriers, quality insulation, and spaces for both connection and solitude.',
  },
  {
    icon: Sun,
    name: 'Light as Medicine',
    description: 'Circadian-aligned lighting throughout, with abundant natural light and warm, therapeutic color temperatures.',
  },
  {
    icon: Palette,
    name: 'Conscious Materials',
    description: 'Non-toxic, sustainable, beautiful materials\u2014natural wood, stone, organic textiles, and artisan craftsmanship.',
  },
]

const ROOM_AMENITIES = [
  { name: 'Organic Bedding', detail: 'Premium linens for restorative sleep' },
  { name: 'Private Bathroom', detail: 'En-suite facilities with natural products' },
  { name: 'Climate Control', detail: 'Individual temperature management' },
  { name: 'Natural Light', detail: 'Blackout options for rest periods' },
  { name: 'Outdoor Access', detail: 'Private terrace or garden view' },
  { name: 'Minimalist Design', detail: 'Calm, uncluttered spaces for clarity' },
]

const HEALING_SPACES = [
  { icon: Stethoscope, name: 'Medical Center', description: 'Fully equipped medical facility with monitoring stations, emergency equipment, and private consultation rooms.' },
  { icon: Flower2, name: 'Ceremony Space', description: 'Sacred container designed for deep work\u2014private rooms with 24/7 support access and peaceful ambiance.' },
  { icon: Thermometer, name: 'Bio-Optimization Center', description: 'State-of-the-art facility with sauna, cold plunge, red light therapy, hyperbaric chamber, and IV therapy.' },
  { icon: Home, name: 'Dining Pavilion', description: 'Open-air dining space with views of nature, designed for nourishing meals and community connection.' },
  { icon: Bath, name: 'Movement Studio', description: 'Dedicated space for yoga, breathwork, somatic practices, and gentle movement throughout your stay.' },
  { icon: TreePine, name: 'Gardens & Trails', description: 'Landscaped grounds with walking paths, meditation spots, and direct connection to nature.' },
  { icon: Sun, name: 'Pool & Water Features', description: 'Therapeutic pool for gentle movement and relaxation, surrounded by natural landscaping.' },
  { icon: Users, name: 'Integration Rooms', description: 'Private and group spaces designed for processing, reflection, and one-on-one sessions.' },
]

const WHY_MEXICO = [
  { icon: Shield, title: 'Legal Clarity', description: 'Ibogaine is legal/unregulated (unlike the U.S.)' },
  { icon: Plane, title: 'Accessibility', description: 'Short flights from major U.S. cities' },
  { icon: Building2, title: 'Infrastructure', description: 'World-class resort infrastructure already exists' },
  { icon: Stethoscope, title: 'Hospital Access', description: 'Quality emergency facilities within 15 minutes' },
  { icon: Briefcase, title: 'Talent Pool', description: 'Experienced hospitality and medical professionals available' },
]

const DEFENSE_LAYERS = [
  {
    number: 1,
    title: 'First-Mover Advantage',
    description: 'We\u2019re first to integrate all four pillars in a legal jurisdiction with luxury infrastructure.',
  },
  {
    number: 2,
    title: 'Talent Lock-Up',
    description: 'Top physicians, hospitality leaders, and practitioners on long-term contracts.',
  },
  {
    number: 3,
    title: 'Brand & Reputation',
    description: 'In this market, word-of-mouth among the wealthy is everything.',
  },
  {
    number: 4,
    title: 'Proprietary Protocols',
    description: 'Our methods are documented, refined, and proven with outcome data.',
  },
  {
    number: 5,
    title: 'Network Effects',
    description: 'Alumni community creates referrals and loyalty that compounds over time.',
  },
]

export default function SanctuaryPage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* ═══════════════════════════════════════════
          HERO — "Where Healing Takes Root"
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
                Chapter Six
              </span>
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl font-light mb-8 leading-[0.95] text-white max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Where Healing{' '}
            <span className="relative inline-block">
              <span className="text-secondary-400">Takes Root</span>
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
            The Transformational Epicenter is not merely a building&mdash;it is a therapeutic
            environment. Every design choice serves the nervous system&apos;s need for safety,
            beauty, and coherence.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <MapPin className="w-5 h-5 text-secondary-400" />
              <span className="font-accent text-sm text-white">Mexico, Quintana Roo</span>
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <Home className="w-5 h-5 text-secondary-400" />
              <span className="font-accent text-sm text-white">10 Private Guest Rooms</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DESIGN PHILOSOPHY
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
                Conscious Architecture
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-6">
              Design Philosophy
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto italic">
              &ldquo;Spaces have the power to calm or agitate, to inspire or deplete. We&apos;ve created a
              sanctuary that does the healing work alongside you.&rdquo;
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {DESIGN_PRINCIPLES.map((principle) => (
              <motion.div
                key={principle.name}
                variants={scaleInVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <div className="group h-full bg-white rounded-2xl p-6 shadow-card hover:shadow-xl transition-all duration-500 border border-neutral-100 hover:border-neutral-200 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-400 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                    <principle.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-heading text-lg text-neutral-900 mb-2">{principle.name}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GUEST ROOMS
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
                  Private Sanctuaries
                </p>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-8">
                Guest Rooms
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Each guest room is a private sanctuary designed for deep rest, reflection,
                and recovery. Private villas with a 3:1 staff-to-guest ratio. Low-density
                buildings ensure privacy, while thoughtful design supports every aspect of
                your healing journey.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <div className="grid grid-cols-2 gap-4">
                {ROOM_AMENITIES.map((amenity) => (
                  <div
                    key={amenity.name}
                    className="p-4 rounded-xl bg-canvas border border-neutral-100 hover:border-secondary-200 hover:shadow-sm transition-all duration-300"
                  >
                    <h4 className="font-medium text-neutral-900 text-sm mb-1">{amenity.name}</h4>
                    <p className="text-xs text-neutral-500">{amenity.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HEALING SPACES
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
                The Facility
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900">
              Healing Spaces
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {HEALING_SPACES.map((space) => (
              <motion.div
                key={space.name}
                variants={scaleInVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <div className="group h-full bg-white rounded-2xl p-6 shadow-card hover:shadow-xl transition-all duration-500 border border-neutral-100 hover:border-neutral-200">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-3 group-hover:bg-primary-200 transition-colors duration-300">
                    <space.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="font-heading text-base text-neutral-900 mb-2">{space.name}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{space.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY MEXICO
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-accent-500/10 blur-[150px]" />

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
                <p className="font-accent text-sm uppercase tracking-[0.2em] text-secondary-400">
                  Location Strategy
                </p>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl mb-8">
                Why Mexico
              </h2>
              <p className="text-lg text-primary-200/90 mb-8 leading-relaxed">
                After evaluating multiple countries, Mexico (specifically the Quintana Roo region)
                is our top choice for the first Transformational Epicenter.
              </p>

              <div className="space-y-4">
                {WHY_MEXICO.map((reason) => (
                  <div key={reason.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary-500/20 border border-secondary-500/30 flex items-center justify-center">
                      <reason.icon className="w-5 h-5 text-secondary-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-0.5">{reason.title}</h4>
                      <p className="text-sm text-primary-200/80">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={scaleInVariants}>
              <div className="bg-primary-800/50 rounded-2xl p-8 border border-primary-700/50 backdrop-blur-sm">
                <h3 className="font-heading text-xl mb-6 text-center text-secondary-400">
                  The First Location
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Location', value: 'Mexico (Quintana Roo region)' },
                    { label: 'Land', value: '0.5 to 1 hectare' },
                    { label: 'Capacity', value: '10 private guest rooms' },
                    { label: 'Structure', value: 'Low-density, nature-integrated' },
                    { label: 'Staff Ratio', value: '3:1 staff-to-guest' },
                    { label: 'Hospital Access', value: 'Within 15 minutes' },
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
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FIVE LAYERS OF DEFENSE
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
                Competitive Defense
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900">
              Five Layers of Defense
            </h2>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {DEFENSE_LAYERS.map((layer) => (
              <motion.div
                key={layer.number}
                variants={fadeUpVariants}
                className="flex items-start gap-4 p-6 rounded-xl bg-white border border-neutral-100 hover:border-secondary-200 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-500 flex items-center justify-center">
                  <span className="font-heading text-sm text-white">{layer.number}</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-neutral-900 mb-1">{layer.title}</h3>
                  <p className="text-neutral-600">{layer.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GLOBAL VISION CTA
          ═══════════════════════════════════════════ */}
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
          <Globe className="w-12 h-12 text-secondary-400 mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
            30+ Epicenters Globally
          </h2>
          <p className="text-xl text-primary-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Our Mexico sanctuary is just the beginning. We envision a global network of
            Transformational Epicenters, each honoring local culture while maintaining the same
            ethical, medical, and spiritual standards.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/expansion">
              <button className="group inline-flex items-center gap-2 px-10 py-5 rounded-xl font-accent text-sm font-semibold uppercase tracking-wider text-primary-950 bg-gradient-to-r from-secondary-400 to-secondary-500 hover:from-secondary-500 hover:to-secondary-600 shadow-xl shadow-secondary-500/25 hover:shadow-secondary-500/40 transition-all duration-300">
                Expansion Strategy
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

      {/* Prev/Next Navigation */}
      <div className="bg-canvas">
        <div className="w-full sm:w-[70vw] mx-auto py-8">
          <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
            <Link href="/story/science" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-accent text-sm uppercase tracking-wide">The Science</span>
            </Link>
            <Link href="/expansion">
              <Button variant="primary">
                Expansion
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
