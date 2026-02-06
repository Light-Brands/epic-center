'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  FileText,
  Eye as EyeIcon,
  Lock,
  Folder,
  Delete,
  Check,
  Scale,
  Building2,
  Globe,
  ShieldCheck,
  Users,
  HelpCircle,
  Layers,
  MapPin
} from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'

const DOCUMENT_CATEGORIES = [
  {
    name: 'Structure Overview',
    icon: Layers,
    description: 'Master architecture and ecosystem design',
    documents: [
      {
        name: 'Master Structure',
        slug: 'master-structure',
        doc: '01',
        description: 'Complete 6-entity architecture across 5 jurisdictions'
      },
      {
        name: 'Ecosystem Architecture',
        slug: 'ecosystem-architecture',
        doc: '07',
        description: 'Unified TE + Light Brands entity relationships'
      },
    ],
  },
  {
    name: 'Legal Defense',
    icon: ShieldCheck,
    description: 'Defensibility analysis and case law',
    documents: [
      {
        name: 'Legal Defense Framework',
        slug: 'legal-defense',
        doc: '02',
        description: 'Five walls of defense, anti-avoidance analysis, key case law'
      },
    ],
  },
  {
    name: 'Founder Playbooks',
    icon: Users,
    description: 'Jurisdiction-specific personal tax strategies',
    documents: [
      {
        name: 'US Founder Guide',
        slug: 'founder-guide-us',
        doc: '03',
        description: 'FEIE, church minister compensation, CFC elimination'
      },
      {
        name: 'Canadian Founder Guide',
        slug: 'founder-guide-canada',
        doc: '04',
        description: 'Departure tax timing, Dubai residency, PIF beneficiary'
      },
      {
        name: 'Cyprus Founder Guide',
        slug: 'founder-guide-cyprus',
        doc: '05',
        description: 'Deemed domicile, 90-day rule, SDC optimization'
      },
      {
        name: 'Profit Participation Framework',
        slug: 'profit-participation-framework',
        doc: '10',
        description: 'Phantom equity structure for Light Brands founders'
      },
    ],
  },
  {
    name: 'Entity Details',
    icon: Building2,
    description: 'Detailed entity documentation',
    documents: [
      {
        name: 'Cook Islands IBC Detail',
        slug: 'cook-islands-ibc-detail',
        doc: '08',
        description: 'Light Brands Consulting Ltd structure and operations'
      },
      {
        name: 'Cayman TE Holdings Detail',
        slug: 'cayman-te-holdings-detail',
        doc: '09',
        description: 'TE Wellness Holdings (Cayman) investable vehicle structure'
      },
    ],
  },
  {
    name: 'Counsel Questions',
    icon: HelpCircle,
    description: 'Open questions requiring legal validation',
    documents: [
      {
        name: 'Questions for Counsel',
        slug: 'counsel-questions',
        doc: '06',
        description: 'Gating questions and validation requirements by jurisdiction'
      },
    ],
  },
]

function categoryId(name: string): string {
  return name.toLowerCase().replace(/\s*&\s*/g, '-').replace(/\s+/g, '-')
}

import { useVault } from '@/lib/context/VaultContext'

function CounselLogin({ onUnlock }: { onUnlock: () => void }) {
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
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center">
              <Scale className="w-7 h-7 text-primary-600" />
            </div>
          </div>
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2 text-center">
            Counsel Review Portal
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl text-neutral-900 mb-2 text-center">
            Enter Access Code
          </h2>
          <p className="text-sm text-neutral-600 text-center mb-8">
            Confidential tax structure documentation for legal review.
          </p>

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
            Use keypad above or your keyboard (0-9, Backspace, Escape)
          </p>
        </Card>

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

export default function CounselPage() {
  const { isUnlocked, unlock } = useVault()

  if (!isUnlocked) {
    return <CounselLogin onUnlock={unlock} />
  }

  const totalDocs = DOCUMENT_CATEGORIES.reduce((sum, cat) => sum + cat.documents.length, 0)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-canvas pt-20"
    >
      <div className="pointer-events-none fixed inset-0 bg-gradient-warm-glow" aria-hidden />

      <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 py-12 relative">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center">
              <Scale className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            Privileged & Confidential
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-neutral-900 mb-6">
            Tax Structure Documentation
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Complete multi-jurisdictional structure for legal counsel review.
            Six entities across five jurisdictions with comprehensive defensibility analysis.
          </p>
        </section>

        {/* Structure Summary Cards */}
        <section className="mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card padding="md" className="text-center hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
              <Building2 className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="font-heading text-2xl text-neutral-900 mb-1">6</p>
              <p className="text-sm font-medium text-neutral-700">Entities</p>
            </Card>
            <Card padding="md" className="text-center hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
              <Globe className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="font-heading text-2xl text-neutral-900 mb-1">5</p>
              <p className="text-sm font-medium text-neutral-700">Jurisdictions</p>
            </Card>
            <Card padding="md" className="text-center hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
              <ShieldCheck className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="font-heading text-2xl text-neutral-900 mb-1">~1.2%</p>
              <p className="text-sm font-medium text-neutral-700">Effective Rate</p>
            </Card>
            <Card padding="md" className="text-center hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
              <FileText className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="font-heading text-2xl text-neutral-900 mb-1">{totalDocs}</p>
              <p className="text-sm font-medium text-neutral-700">Documents</p>
            </Card>
          </div>
        </section>

        {/* Entity Overview */}
        <section className="mb-16">
          <Card padding="lg" className="bg-primary-800 text-white border-0">
            <h3 className="text-xl font-heading mb-6 text-white">Entity Architecture</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'TE Wellness Holdings', jurisdiction: 'Cayman Islands', role: 'TE IP + Revenue + Investor Vehicle', rate: '0%' },
                { name: 'Light Brands Studio FZ-LLC', jurisdiction: 'Dubai, UAE', role: 'Shared Service Center (Builds All)', rate: '0% QFZP' },
                { name: 'Light Brands Consulting Ltd', jurisdiction: 'Cook Islands', role: 'External Consulting + SaaS', rate: '0%' },
                { name: 'Panama PIF', jurisdiction: 'Panama', role: 'Holding + Asset Protection', rate: '0%' },
                { name: 'Church of the Living Light', jurisdiction: 'US', role: 'Mission + Minister Comp', rate: '0% Exempt' },
                { name: 'TE Ops Mexico', jurisdiction: 'Tulum, Mexico', role: 'Facility Operations', rate: '30% on margin' },
              ].map((entity) => (
                <div key={entity.name} className="bg-primary-700/50 rounded-lg p-4 border border-primary-600/30">
                  <p className="font-medium text-white text-sm mb-1">{entity.name}</p>
                  <p className="text-xs text-primary-300 mb-2 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {entity.jurisdiction}
                  </p>
                  <p className="text-xs text-primary-200 mb-2">{entity.role}</p>
                  <span className="inline-block px-2 py-0.5 bg-secondary-400 text-primary-900 text-xs font-accent font-semibold rounded">
                    {entity.rate}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Document Categories */}
        <section className="mb-16" aria-labelledby="doc-categories-heading">
          <h3 id="doc-categories-heading" className="text-2xl font-heading text-neutral-900 mb-4">Documentation</h3>
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
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary-50 shrink-0">
                    <category.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading text-neutral-900">{category.name}</h4>
                    <p className="text-sm text-neutral-600 mt-1">{category.description}</p>
                  </div>
                </div>
                <div className="divide-y divide-neutral-200">
                  {category.documents.map((doc) => (
                    <div key={doc.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
                      <div className="flex items-start gap-4 min-w-0">
                        <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center bg-primary-50">
                          <FileText className="w-5 h-5 text-primary-600" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-neutral-900">{doc.name}</p>
                          <p className="text-sm text-neutral-600 mt-0.5">{doc.description}</p>
                          <p className="text-xs text-neutral-500 font-accent uppercase tracking-wide mt-1">
                            Document {doc.doc}
                          </p>
                        </div>
                      </div>
                      <Link
                        href={`/counsel/view/${doc.slug}`}
                        className="shrink-0 inline-flex items-center justify-center gap-2 font-accent font-semibold uppercase text-xs tracking-wider px-5 py-2.5 rounded-lg bg-transparent text-primary-800 border-2 border-primary-800 hover:bg-primary-800 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                      >
                        <EyeIcon className="w-4 h-4" />
                        View
                      </Link>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Confidentiality Notice */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900 shadow-xl border-0">
            <div className="max-w-3xl mx-auto text-center">
              <Lock className="w-10 h-10 text-primary-800 mx-auto mb-4" />
              <h3 className="text-xl font-heading mb-4">Attorney-Client Privilege</h3>
              <p className="text-primary-800 leading-relaxed mb-6">
                These materials are provided for legal counsel review in connection with
                structure validation and implementation planning. All documents contain
                confidential business strategy and are protected by attorney-client privilege.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="px-3 py-1.5 bg-white/30 rounded-lg font-medium">Do not distribute</span>
                <span className="px-3 py-1.5 bg-white/30 rounded-lg font-medium">Privileged & confidential</span>
                <span className="px-3 py-1.5 bg-white/30 rounded-lg font-medium">For counsel review only</span>
              </div>
            </div>
          </Card>
        </section>

        {/* Key Questions */}
        <section className="mb-16">
          <Card padding="lg">
            <h3 className="text-xl font-heading text-neutral-900 mb-6">Priority Validation Questions</h3>
            <div className="space-y-4">
              {[
                { jurisdiction: 'UAE', question: 'Does QFZP "natural persons" exclusion apply to platform revenue from copyrighted IP?', priority: 'Gating' },
                { jurisdiction: 'US', question: 'Does no-ownership structure eliminate all CFC/GILTI/Subpart F exposure for US founder?', priority: 'Critical' },
                { jurisdiction: 'Mexico', question: 'Does inbound service fee structure avoid REFIPRE triggers?', priority: 'Critical' },
                { jurisdiction: 'Canada', question: 'What is the optimal departure timing relative to seed round?', priority: 'Time-sensitive' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg">
                  <span className={`shrink-0 px-2 py-1 text-xs font-accent font-semibold rounded ${
                    item.priority === 'Gating' ? 'bg-error-100 text-error-700' :
                    item.priority === 'Critical' ? 'bg-amber-100 text-amber-700' :
                    'bg-primary-100 text-primary-700'
                  }`}>
                    {item.priority}
                  </span>
                  <div>
                    <p className="text-xs font-accent uppercase tracking-wide text-neutral-500 mb-1">{item.jurisdiction}</p>
                    <p className="text-neutral-800">{item.question}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-neutral-200">
              <Link
                href="/counsel/view/counsel-questions"
                className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-900 font-medium transition-colors"
              >
                View all questions for counsel
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-neutral-200">
          <Link href="/" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors font-accent text-sm uppercase tracking-wide">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Home
          </Link>
          <Link href="/counsel/view/master-structure">
            <Button variant="primary">
              Start with Master Structure
              <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}
