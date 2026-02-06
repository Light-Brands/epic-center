'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, FileText, Eye as EyeIcon, Lock, Folder, Mail, Delete, Check, Sheet, ExternalLink } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'

const DOCUMENT_CATEGORIES = [
  {
    name: 'Investment Documents',
    icon: FileText,
    documents: [
      { name: 'Executive Summary', slug: 'investment/executive-summary', doc: '01' },
      { name: 'Pitch Deck', slug: 'investment/pitch-deck', doc: '02' },
      { name: 'Private Placement Memorandum', slug: 'investment/private-placement-memorandum', doc: '03' },
      { name: 'Subscription Agreement', slug: 'investment/subscription-agreement', doc: '04' },
      { name: 'Operating Agreement', slug: 'investment/operating-agreement', doc: '05' },
    ],
  },
  {
    name: 'Financial Model',
    icon: Folder,
    documents: [
      { name: 'Financial Projections (5-Year)', slug: 'financial/financial-projections-5-year', doc: '06' },
      { name: 'Unit Economics Model', slug: 'financial/unit-economics-model', doc: '07' },
      { name: 'Sensitivity Analysis', slug: 'financial/sensitivity-analysis', doc: '08' },
      { name: 'Cap Table', slug: 'financial/cap-table', doc: '09' },
      { name: 'Financial Model Spreadsheet', slug: 'financial/financial-model-spreadsheet', doc: '23', type: 'sheets' as const, externalUrl: 'https://docs.google.com/spreadsheets/d/1Z0_N_V2gM-0rpW3IP9oRO12nmj51XwcTV_9R9fNsyWo/edit?usp=drivesdk' },
      { name: 'Valuation Report (IPEV 9-Method)', slug: 'financial/valuation-report', doc: '22' },
    ],
  },
  {
    name: 'Property Documents',
    icon: Folder,
    documents: [
      { name: 'Property Evaluation Matrix', slug: 'property/property-evaluation-matrix', doc: '10' },
      { name: 'Rancho Paraiso Oasis - Full Assessment', slug: 'property/rancho-paraiso-oasis-assessment', doc: '11' },
      { name: 'Renovation Budget & Timeline', slug: 'property/renovation-budget-timeline', doc: '12' },
      { name: 'Comparable Market Analysis', slug: 'property/comparable-market-analysis', doc: '13' },
    ],
  },
  {
    name: 'Legal & Compliance',
    icon: Lock,
    documents: [
      { name: 'Corporate Structure Overview', slug: 'legal/corporate-structure-overview', doc: '14' },
      { name: 'Mexican Healthcare Regulations', slug: 'legal/mexican-healthcare-regulations', doc: '15' },
      { name: 'Fideicomiso Structure', slug: 'legal/fideicomiso-structure', doc: '16' },
      { name: 'Risk Disclosure Document', slug: 'legal/risk-disclosure-document', doc: '17' },
    ],
  },
  {
    name: 'Research & Evidence',
    icon: FileText,
    documents: [
      { name: 'Ibogaine Research Summary', slug: 'research/ibogaine-research-summary', doc: '18' },
      { name: 'Market Research Report', slug: 'research/market-research-report', doc: '19' },
      { name: 'Competitive Landscape Analysis', slug: 'research/competitive-landscape-analysis', doc: '20' },
      { name: 'Clinical Outcome Studies', slug: 'research/clinical-outcome-studies', doc: '21' },
    ],
  },
]

/** URL-safe id for category anchor (e.g. "Investment Documents" → "investment-documents") */
function categoryId(name: string): string {
  return name.toLowerCase().replace(/\s*&\s*/g, '-').replace(/\s+/g, '-')
}

import { useVault } from '@/lib/context/VaultContext'

function DataRoomLogin({ onUnlock }: { onUnlock: () => void }) {
  const [code, setCode] = useState('')
  const [phase, setPhase] = useState<'locked' | 'error' | 'unlocking' | 'opening'>('locked')
  const { vaultCode } = useVault()

  const handleDigit = useCallback((digit: string) => {
    if (phase !== 'locked' || code.length >= 4) return
    const next = code + digit

    setCode(next)

    if (next.length === 4) {
      if (next === vaultCode) {
        setPhase('unlocking')
        setTimeout(() => setPhase('opening'), 800)
        setTimeout(onUnlock, 1400)
      } else {
        setPhase('error')
        setTimeout(() => {
          setPhase('locked')
          setCode('')
        }, 600)
      }
    }
  }, [code, phase, onUnlock, vaultCode])

  const handleDelete = useCallback(() => {
    if (phase !== 'locked') return
    setCode(prev => prev.slice(0, -1))
  }, [phase])

  const handleClear = useCallback(() => {
    if (phase !== 'locked') return
    setCode('')
  }, [phase])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') handleDigit(e.key)
      else if (e.key === 'Backspace') handleDelete()
      else if (e.key === 'Escape') handleClear()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handleDigit, handleDelete, handleClear])

  const isUnlocking = phase === 'unlocking' || phase === 'opening'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-canvas p-4">
      {/* Subtle warm glow matching site hero sections */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-warm-glow"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-sm"
      >
        <Card padding="lg" className="bg-white shadow-xl border border-neutral-200">
          {/* Section label - matches data room / invest hero */}
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2 text-center">
            Investor Data Room
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl text-neutral-900 mb-2 text-center">
            Enter Access Code
          </h2>
          <p className="text-sm text-neutral-600 text-center mb-8">
            Enter your 4-digit PIN to access confidential materials.
          </p>

          {/* Pin slots - design system borders and focus */}
          <motion.div
            animate={phase === 'error' ? { x: [-6, 6, -4, 4, -2, 2, 0] } : { x: 0 }}
            transition={{ duration: 0.35 }}
            className="flex justify-center gap-3 mb-8"
          >
            {[0, 1, 2, 3].map(i => {
              const filled = i < code.length
              return (
                <div
                  key={i}
                  className={`
                    w-12 h-14 sm:w-14 sm:h-16 rounded-lg border-2 flex items-center justify-center
                    transition-colors duration-200
                    ${phase === 'error'
                      ? 'border-error-500 bg-error-50'
                      : isUnlocking && filled
                        ? 'border-primary-600 bg-primary-50'
                        : filled
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-neutral-300 bg-neutral-50'
                    }
                  `}
                >
                  {filled && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                      className={`
                        w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full
                        ${phase === 'error'
                          ? 'bg-error-500'
                          : isUnlocking
                            ? 'bg-primary-600'
                            : 'bg-primary-800'
                        }
                      `}
                    />
                  )}
                </div>
              )
            })}
          </motion.div>

          {/* Keypad - secondary/outline style to match site buttons */}
          <div className="grid grid-cols-3 gap-2 max-w-[220px] mx-auto">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(digit => (
              <motion.button
                key={digit}
                type="button"
                whileTap={{ scale: 0.97 }}
                onClick={() => handleDigit(digit)}
                className="h-12 sm:h-14 rounded-lg border-2 border-neutral-200 bg-neutral-50 text-neutral-900 font-body text-lg font-medium hover:border-primary-400 hover:bg-primary-50 hover:text-primary-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                {digit}
              </motion.button>
            ))}
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={handleClear}
              className="h-12 sm:h-14 rounded-lg border-2 border-neutral-200 bg-neutral-100 text-neutral-600 text-xs font-accent uppercase tracking-wider hover:border-neutral-400 hover:text-neutral-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            >
              Clear
            </motion.button>
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={() => handleDigit('0')}
              className="h-12 sm:h-14 rounded-lg border-2 border-neutral-200 bg-neutral-50 text-neutral-900 font-body text-lg font-medium hover:border-primary-400 hover:bg-primary-50 hover:text-primary-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            >
              0
            </motion.button>
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={handleDelete}
              className="h-12 sm:h-14 rounded-lg border-2 border-neutral-200 bg-neutral-100 text-neutral-600 hover:border-neutral-400 hover:text-neutral-800 transition-colors duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            >
              <Delete className="w-5 h-5" />
            </motion.button>
          </div>

          <p className="mt-6 text-xs text-neutral-500 text-center">
            Use keypad above or your keyboard (0–9, Backspace, Escape)
          </p>
        </Card>

        {/* Success state: brief checkmark before transition */}
        {isUnlocking && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center rounded-xl bg-white/95 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22, delay: 0.05 }}
              className="w-14 h-14 rounded-full border-2 border-primary-600 bg-primary-50 flex items-center justify-center"
            >
              <Check className="w-7 h-7 text-primary-600" strokeWidth={2.5} />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default function DataRoomPage() {
  const { isUnlocked, unlock } = useVault()

  if (!isUnlocked) {
    return <DataRoomLogin onUnlock={unlock} />
  }

  const totalDocs = DOCUMENT_CATEGORIES.reduce((sum, cat) => sum + cat.documents.length, 0)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-canvas pt-20"
    >
      {/* Subtle warm glow matching rest of site */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-warm-glow" aria-hidden />

      <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 py-12 relative">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            Due Diligence
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-neutral-900 mb-6">
            Investor Data Room
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Access all investment materials, financial models, property documentation,
            and research supporting this opportunity.
          </p>
        </section>

        {/* Access Stats */}
        <section className="mb-16">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card padding="lg" className="text-center hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
              <FileText className="w-10 h-10 text-primary-600 mx-auto mb-3" />
              <p className="font-heading text-3xl md:text-4xl text-neutral-900 mb-1">{totalDocs}</p>
              <p className="font-medium text-neutral-800">Documents Available</p>
              <p className="text-sm text-neutral-500 mt-2">Full data room access</p>
            </Card>
            <Card padding="lg" className="text-center hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 border-l-4 border-l-secondary-400">
              <Folder className="w-10 h-10 text-secondary-500 mx-auto mb-3" />
              <p className="font-heading text-3xl md:text-4xl text-neutral-900 mb-1">5</p>
              <p className="font-medium text-neutral-800">Document Categories</p>
              <p className="text-sm text-neutral-500 mt-2">Investment, financial, property, legal, research</p>
            </Card>
            <Card padding="lg" className="text-center hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
              <Lock className="w-10 h-10 text-primary-600 mx-auto mb-3" />
              <p className="font-heading text-3xl md:text-4xl text-neutral-900 mb-1">NDA</p>
              <p className="font-medium text-neutral-800">Protected Access</p>
              <p className="text-sm text-neutral-500 mt-2">Confidential materials</p>
            </Card>
          </div>
        </section>

        {/* Document Categories */}
        <section className="mb-16" aria-labelledby="doc-categories-heading">
          <h3 id="doc-categories-heading" className="text-2xl font-heading text-neutral-900 mb-4">Document Categories</h3>
          <nav aria-label="Jump to category" className="mb-8 flex flex-wrap gap-2">
            {DOCUMENT_CATEGORIES.map((category) => {
              const id = categoryId(category.name)
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-neutral-200 bg-neutral-50 text-neutral-800 font-accent text-sm font-medium uppercase tracking-wide hover:border-primary-400 hover:bg-primary-50 hover:text-primary-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                >
                  <category.icon className="w-4 h-4 shrink-0 text-primary-600" />
                  {category.name}
                </a>
              )
            })}
          </nav>
          <div className="space-y-8">
            {DOCUMENT_CATEGORIES.map((category) => (
              <Card
                key={category.name}
                id={categoryId(category.name)}
                padding="lg"
                hoverable
                className="transition-all duration-300 scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary-50">
                    <category.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-heading text-neutral-900">{category.name}</h4>
                </div>
                <div className="divide-y divide-neutral-200">
                  {category.documents.map((doc) => {
                    const isSheets = 'type' in doc && doc.type === 'sheets'
                    return (
                      <div key={doc.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
                        <div className="flex items-start gap-4 min-w-0">
                          <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center ${isSheets ? 'bg-green-50' : 'bg-primary-50'}`}>
                            {isSheets ? (
                              <Sheet className="w-5 h-5 text-green-600" />
                            ) : (
                              <FileText className="w-5 h-5 text-primary-600" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-neutral-900">{doc.name}</p>
                            <p className="text-xs text-neutral-500 font-accent uppercase tracking-wide mt-0.5">
                              {isSheets ? 'Google Sheets' : `Document ${doc.doc}`}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {isSheets && 'externalUrl' in doc && (
                            <a
                              href={doc.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 inline-flex items-center justify-center gap-2 font-accent font-semibold uppercase text-xs tracking-wider px-4 py-2.5 rounded-lg bg-transparent text-neutral-600 border-2 border-neutral-300 hover:border-neutral-500 hover:text-neutral-800 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Google Sheets
                            </a>
                          )}
                          <Link
                            href={`/data-room/view/${doc.slug}`}
                            className="shrink-0 inline-flex items-center justify-center gap-2 font-accent font-semibold uppercase text-xs tracking-wider px-5 py-2.5 rounded-lg bg-transparent text-primary-800 border-2 border-primary-800 hover:bg-primary-800 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                          >
                            <EyeIcon className="w-4 h-4" />
                            View
                          </Link>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Confidentiality Notice */}
        <section className="mb-16">
          <Card padding="lg" className="bg-primary-800 text-white shadow-xl border-0">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl font-heading mb-4 text-white">Confidential Materials</h3>
                <p className="text-primary-200 mb-6 leading-relaxed">
                  All documents in this data room are confidential and protected under NDA.
                  By accessing these materials you acknowledge the following obligations.
                </p>
                <ul className="space-y-3" role="list">
                  {[
                    'Materials are for qualified investors and partners only',
                    'Do not distribute without written consent',
                    'Share with legal and financial advisors under NDA only',
                    'Forward-looking statements are subject to risk factors',
                  ].map((step, index) => (
                    <li key={step} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-secondary-400 text-primary-900 text-sm font-medium flex items-center justify-center shrink-0" aria-hidden>
                        {index + 1}
                      </span>
                      <span className="text-primary-100">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-left">
                <div className="bg-primary-700/50 rounded-xl p-8 border border-primary-600/30">
                  <Mail className="w-12 h-12 text-secondary-400 mx-auto md:mx-0 mb-4" />
                  <p className="text-primary-200 mb-4">
                    Questions about the data room or investment opportunity?
                  </p>
                  <a href="mailto:nicholas@lightbrands.ai">
                    <Button variant="accent" size="lg">
                      Contact Investor Relations
                    </Button>
                  </a>
                  <p className="text-sm text-primary-300 mt-4">
                    nicholas@lightbrands.ai
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Data Room FAQ */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900 shadow-xl border-0">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-heading text-center mb-8">Data Room FAQ</h3>
              <div className="space-y-4">
                {[
                  {
                    q: 'What is required to access restricted documents?',
                    a: 'You must verify accredited investor status and execute our mutual NDA.',
                  },
                  {
                    q: 'How long does access approval take?',
                    a: 'Typically 24-48 hours after submitting required documentation.',
                  },
                  {
                    q: 'Can I share documents with my advisors?',
                    a: 'Yes, you may share with legal and financial advisors under the NDA terms.',
                  },
                  {
                    q: 'Are financial models available in editable format?',
                    a: 'Yes, Excel models are provided for detailed analysis and scenario modeling.',
                  },
                ].map((item) => (
                  <div key={item.q} className="bg-white/20 rounded-xl p-5 border border-white/10">
                    <p className="font-medium text-primary-900 mb-2">{item.q}</p>
                    <p className="text-sm text-primary-800 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-neutral-200">
          <Link href="/outcomes" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors font-accent text-sm uppercase tracking-wide">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Outcomes
          </Link>
          <Link href="/faq">
            <Button variant="primary">
              FAQ
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}
