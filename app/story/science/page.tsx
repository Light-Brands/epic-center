'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  HelpCircle,
  ClipboardCheck,
  BarChart3,
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

const SCREENING_PROTOCOLS = [
  {
    icon: '/icons/story-ecg.png',
    title: 'Cardiovascular Screening',
    subtitle: 'Critical for ibogaine safety',
    items: [
      'History of arrhythmias or heart conditions',
      'QT prolongation assessment',
      '12-lead ECG within 14 days of arrival',
      'Blood pressure and heart rate evaluation',
      'Family history of sudden cardiac death',
      'Current cardiac medication review',
    ],
  },
  {
    icon: '/icons/model-brain.png',
    title: 'Psychiatric Assessment',
    subtitle: 'Mental health evaluation',
    items: [
      'Depression and anxiety screening',
      'Bipolar disorder evaluation',
      'Psychosis history assessment',
      'Current psychiatric medication review',
      'Suicide risk assessment',
      'Trauma history evaluation',
    ],
  },
  {
    icon: '/icons/story-lab.png',
    title: 'Laboratory Testing',
    subtitle: 'Required within 30 days',
    items: [
      'Complete Blood Count (CBC)',
      'Comprehensive Metabolic Panel',
      'Thyroid function panel',
      'Liver function tests',
      'Electrolytes (K, Mg critical for QT)',
      'Lipid panel for cardiovascular risk',
    ],
  },
  {
    icon: '/icons/story-substance.png',
    title: 'Substance Assessment',
    subtitle: 'Critical for safety timing',
    items: [
      'Current substance use patterns',
      'Opioid use timing (critical for ibogaine)',
      'Benzodiazepine use evaluation',
      'Alcohol use assessment',
      'Withdrawal risk evaluation',
      'Medication interaction screening',
    ],
  },
]

const MONITORING_PHASES = [
  {
    phase: 'Pre-Ceremony',
    color: 'from-blue-500 to-blue-600',
    items: [
      'IV access established',
      'Baseline vitals documented',
      'ECG connected and recorded',
      'Emergency equipment verified',
      'Final medical clearance',
    ],
  },
  {
    phase: 'During Ceremony',
    color: 'from-secondary-400 to-secondary-500',
    items: [
      'Continuous 12-lead ECG',
      'Vital signs every 30 minutes',
      'QTc calculation every 2 hours',
      '1:1 nursing ratio',
      'Physician on-site 24/7',
    ],
  },
  {
    phase: 'Post-Ceremony',
    color: 'from-accent-500 to-accent-600',
    items: [
      'Continued cardiac monitoring',
      'Vital signs every 4 hours',
      'Daily ECG until stable',
      'Gradual activity return',
      'Ongoing medical assessment',
    ],
  },
]

const MECHANISMS = [
  { receptor: 'NMDA Receptor', effect: 'Modulation supporting neuroplasticity' },
  { receptor: 'Serotonin System', effect: 'Mood and emotional processing' },
  { receptor: 'Opioid Receptors', effect: 'Reset and addiction interruption' },
  { receptor: 'Dopamine Pathway', effect: 'Reward system recalibration' },
]

const OUTCOMES = [
  { name: 'HRV', full: 'Heart Rate Variability', description: 'Nervous system regulation measurement' },
  { name: 'PCL-5', full: 'PTSD Checklist', description: '20-item validated trauma symptom scale' },
  { name: 'PHQ-9', full: 'Patient Health Questionnaire', description: 'Standard measure of depressive symptoms' },
  { name: 'GAD-7', full: 'Generalized Anxiety Disorder', description: 'Anxiety disorder screening tool' },
]

const ABSOLUTE_CONTRAINDICATIONS = [
  'Long QT syndrome or QT-prolonging medications',
  'Recent myocardial infarction',
  'Uncontrolled arrhythmias or heart block',
  'Active psychosis or schizophrenia spectrum',
  'Severe bipolar disorder (manic phase)',
  'Pregnancy or breastfeeding',
  'Severe hepatic impairment',
  'Cerebellar disorders or seizure disorder',
]

const CASE_BY_CASE = [
  'Age over 65 (additional cardiac workup)',
  'Controlled hypertension (medication review)',
  'Mild hepatic impairment (dose adjustment)',
  'History of seizures (neurology clearance)',
  'Recent SSRI use (proper washout period)',
  'Complex psychiatric history',
  'Other significant medical conditions',
]

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* ═══════════════════════════════════════════
          HERO - "The Science of Transformation"
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary-900">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/40 to-transparent" />
        <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary-500/8 blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent-500/6 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />

        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-secondary-500/30 bg-secondary-500/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
              <span className="font-accent text-[11px] uppercase tracking-[0.3em] text-secondary-400">
                Chapter Five
              </span>
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl font-light mb-8 leading-[0.95] text-white max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            The Science of{' '}
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

          <motion.p
            className="font-body text-lg md:text-xl text-primary-200/90 mb-14 max-w-2xl leading-[1.7] tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Hospital-grade protocols. Rigorous safety screening. Continuous monitoring.
            Measurable outcomes. We honor the body&apos;s complexity with medical precision.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <span className="font-accent text-sm text-white">24/7 Medical Staff</span>
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <span className="font-accent text-sm text-white">12-Lead Continuous ECG</span>
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <span className="font-accent text-sm text-white">1:1 Nursing Ratio</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MEDICAL TEAM
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
                Medical Excellence
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-6">
              Hospital-Grade Safety
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Full medical team on-site 24/7. Hospital-grade monitoring and safety protocols.
              Comprehensive health assessments before, during, and after every treatment.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              { icon: '/icons/diff-medical.png', label: 'On-Site Physician', detail: '24/7 during ceremonies' },
              { icon: '/icons/story-nursing.png', label: '1:1 Nursing', detail: 'Dedicated nursing care' },
              { icon: '/icons/story-ecg.png', label: 'Continuous ECG', detail: '12-lead cardiac monitoring' },
              { icon: '/icons/model-shield.png', label: 'Emergency Ready', detail: '<5 min response time' },
            ].map((item) => (
              <motion.div key={item.label} variants={scaleInVariants}>
                <div className="text-center p-6 bg-white rounded-2xl shadow-card border border-neutral-100">
                  <div className="w-28 h-28 flex items-center justify-center mx-auto mb-4">
                    <Image src={item.icon} alt={item.label} width={112} height={112} className="object-contain w-full h-full rounded-2xl" />
                  </div>
                  <h3 className="font-heading text-base text-neutral-900 mb-1">{item.label}</h3>
                  <p className="text-sm text-neutral-500">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SCREENING PROTOCOLS
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
                Safety First
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900">
              Screening Protocols
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {SCREENING_PROTOCOLS.map((protocol) => (
              <motion.div
                key={protocol.title}
                variants={scaleInVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <div className="group h-full bg-canvas rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-500 border border-neutral-100 hover:border-neutral-200 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-24 h-24 flex items-center justify-center flex-shrink-0">
                      <Image src={protocol.icon} alt={protocol.title} width={96} height={96} className="object-contain w-full h-full rounded-2xl" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-neutral-900">{protocol.title}</h3>
                      <p className="text-xs text-neutral-400">{protocol.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mt-4">
                    {protocol.items.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-neutral-600">
                        <ClipboardCheck className="w-3.5 h-3.5 text-secondary-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTINUOUS MONITORING
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-secondary-500/10 blur-[150px]" />

        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                Monitoring
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-secondary-400 to-secondary-600" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              Continuous Medical Oversight
            </h2>
            <p className="text-primary-200/80 max-w-2xl mx-auto">
              Comprehensive health assessments before, during, and after every ceremony.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {MONITORING_PHASES.map((phase) => (
              <motion.div
                key={phase.phase}
                variants={scaleInVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <div className="group h-full bg-primary-800/50 rounded-2xl p-6 border border-primary-700/50 backdrop-blur-sm relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${phase.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <h3 className="font-heading text-xl mb-4">{phase.phase}</h3>
                  <div className="space-y-3">
                    {phase.items.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-primary-200/80">
                        <CheckCircle2 className="w-4 h-4 text-secondary-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          UNDERSTANDING IBOGAINE
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
                  Pharmacology
                </p>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-8">
                Understanding Ibogaine
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Ibogaine is the primary psychoactive alkaloid found in the root bark of the Iboga
                plant (<em>Tabernanthe iboga</em>), native to Central Africa. It has profound
                capacity for nervous system reset and trauma resolution.
              </p>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Therapeutic applications include trauma resolution, addiction interruption
                (particularly opioids), treatment-resistant depression and anxiety, PTSD, and
                existential exploration.
              </p>
            </motion.div>

            <motion.div variants={scaleInVariants}>
              <Card padding="lg">
                <h3 className="font-heading text-xl text-neutral-900 mb-6">Mechanisms of Action</h3>
                <div className="space-y-4">
                  {MECHANISMS.map((mech) => (
                    <div
                      key={mech.receptor}
                      className="flex justify-between items-center py-3 border-b border-neutral-100 last:border-0"
                    >
                      <span className="font-medium text-neutral-800">{mech.receptor}</span>
                      <span className="text-sm text-neutral-500">{mech.effect}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OUTCOMES MEASUREMENT
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
                Measurable Results
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-6">
              Outcomes Measurement
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We track guest outcomes using validated clinical instruments at pre-arrival,
              Day 1, last day, 30-day, 90-day, and 12-month intervals.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {OUTCOMES.map((outcome) => (
              <motion.div
                key={outcome.name}
                variants={scaleInVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <div className="group h-full bg-canvas rounded-2xl p-6 shadow-card hover:shadow-xl transition-all duration-500 border border-neutral-100 hover:border-neutral-200 text-center">
                  <div className="w-14 h-14 rounded-xl bg-secondary-100 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-7 h-7 text-secondary-600" />
                  </div>
                  <h3 className="font-heading text-2xl text-neutral-900 mb-1">{outcome.name}</h3>
                  <p className="text-sm font-medium text-secondary-600 mb-2">{outcome.full}</p>
                  <p className="text-xs text-neutral-500">{outcome.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            <p className="text-sm text-neutral-500">
              Plus quality-of-life improvement measures and integration success tracking at 3, 6, and 12 months.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          RISK MITIGATION
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
                Risk Management
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900">
              How We Mitigate Risk
            </h2>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              { risk: 'Safety incident', mitigation: 'Hospital-grade protocols, full insurance, crisis communication plan' },
              { risk: 'Regulatory change', mitigation: 'Multi-country strategy, diversified medicine offerings, government relationships' },
              { risk: 'Key person leaves', mitigation: 'Equity vesting, deep bench, documented systems' },
              { risk: 'Competitors catch up', mitigation: 'Speed to market, talent locked up, brand established early' },
            ].map((item) => (
              <motion.div
                key={item.risk}
                variants={fadeUpVariants}
                className="flex items-start gap-4 p-6 rounded-xl bg-white border border-neutral-100 hover:border-neutral-200 hover:shadow-sm transition-all duration-300 mb-4"
              >
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-base text-neutral-900 mb-1">{item.risk}</h4>
                  <p className="text-neutral-600">{item.mitigation}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTRAINDICATIONS
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />

        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                Safety Boundaries
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-secondary-400 to-secondary-600" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              Contraindications
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariants}>
              <div className="bg-primary-800/50 rounded-2xl p-6 border border-primary-700/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <h3 className="font-heading text-xl">Absolute Contraindications</h3>
                </div>
                <div className="space-y-3">
                  {ABSOLUTE_CONTRAINDICATIONS.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-primary-200/80">
                      <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <div className="bg-primary-800/50 rounded-2xl p-6 border border-primary-700/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="w-5 h-5 text-amber-400" />
                  <h3 className="font-heading text-xl">Case-by-Case Evaluation</h3>
                </div>
                <div className="space-y-3">
                  {CASE_BY_CASE.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-primary-200/80">
                      <HelpCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="py-16 bg-canvas">
        <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-neutral-200">
            <Link href="/story/programs" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-accent text-sm uppercase tracking-wide">The Programs</span>
            </Link>
            <Link href="/story/sanctuary">
              <Button variant="primary" size="lg">
                The Sanctuary
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
