'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, FileText, Eye as EyeIcon, Lock, Folder, Mail, Delete } from 'lucide-react'
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
      { name: 'Valuation Report (IPEV 9-Method)', slug: 'financial/valuation-report', doc: '22' },
    ],
  },
  {
    name: 'Property Documents',
    icon: Folder,
    documents: [
      { name: 'Property Evaluation Matrix', slug: 'property/property-evaluation-matrix', doc: '10' },
      { name: 'Riviera Maya Jungle Estate - Full Assessment', slug: 'property/riviera-maya-jungle-estate-assessment', doc: '11' },
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

const VAULT_CODE = '8888'
const VAULT_STORAGE_KEY = 'te_dr_access'
const VAULT_TTL_MS = 60 * 60 * 1000 // 1 hour

function isVaultCached(): boolean {
  if (typeof window === 'undefined') return false
  const stored = localStorage.getItem(VAULT_STORAGE_KEY)
  if (!stored) return false
  const ts = parseInt(stored, 10)
  return Date.now() - ts < VAULT_TTL_MS
}

function cacheVaultAccess(): void {
  localStorage.setItem(VAULT_STORAGE_KEY, Date.now().toString())
}

function VaultDoor({ onUnlock }: { onUnlock: () => void }) {
  const [code, setCode] = useState('')
  const [phase, setPhase] = useState<'locked' | 'error' | 'unlocking' | 'opening'>('locked')

  const handleDigit = useCallback((digit: string) => {
    if (phase !== 'locked' || code.length >= 4) return
    const next = code + digit

    setCode(next)

    if (next.length === 4) {
      if (next === VAULT_CODE) {
        setPhase('unlocking')
        setTimeout(() => setPhase('opening'), 1200)
        setTimeout(onUnlock, 2200)
      } else {
        setPhase('error')
        setTimeout(() => {
          setPhase('locked')
          setCode('')
        }, 600)
      }
    }
  }, [code, phase, onUnlock])

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
  const isOpening = phase === 'opening'

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      <div className="absolute inset-0 bg-neutral-950" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isOpening ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(180,140,50,0.2),transparent_70%)]"
      />

      {/* Left vault door */}
      <motion.div
        animate={isOpening ? { x: '-105%' } : {}}
        transition={{ duration: 1, ease: [0.7, 0, 0.15, 1] }}
        className="absolute top-0 left-0 w-1/2 h-full"
      >
        <div className="relative w-full h-full bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-600 border-r border-neutral-500/50">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg,transparent,transparent 2px,rgba(255,255,255,0.5) 2px,rgba(255,255,255,0.5) 3px)',
            }}
          />
          {[20, 50, 80].map(top => (
            <div key={top} className="absolute right-3" style={{ top: `${top}%` }}>
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-neutral-500 to-neutral-700 shadow-inner border border-neutral-500/50" />
            </div>
          ))}
          {['top-4 left-4', 'top-4 right-8', 'bottom-4 left-4', 'bottom-4 right-8'].map(pos => (
            <div key={pos} className={`absolute ${pos}`}>
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-neutral-500 to-neutral-700 shadow-inner" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right vault door */}
      <motion.div
        animate={isOpening ? { x: '105%' } : {}}
        transition={{ duration: 1, ease: [0.7, 0, 0.15, 1] }}
        className="absolute top-0 right-0 w-1/2 h-full"
      >
        <div className="relative w-full h-full bg-gradient-to-l from-neutral-800 via-neutral-700 to-neutral-600 border-l border-neutral-500/50">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg,transparent,transparent 2px,rgba(255,255,255,0.5) 2px,rgba(255,255,255,0.5) 3px)',
            }}
          />
          {[20, 50, 80].map(top => (
            <div key={top} className="absolute left-3" style={{ top: `${top}%` }}>
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-neutral-500 to-neutral-700 shadow-inner border border-neutral-500/50" />
            </div>
          ))}
          {['top-4 right-4', 'top-4 left-8', 'bottom-4 right-4', 'bottom-4 left-8'].map(pos => (
            <div key={pos} className={`absolute ${pos}`}>
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-neutral-500 to-neutral-700 shadow-inner" />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isOpening ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-gradient-to-r from-transparent via-amber-300/20 to-transparent"
      />

      {/* Keypad overlay */}
      <motion.div
        animate={isOpening ? { opacity: 0, scale: 0.92 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center px-4">
          <p className="font-accent text-[10px] sm:text-xs uppercase tracking-[0.3em] text-neutral-500 mb-1">
            Investor Data Room
          </p>
          <h2 className="font-heading text-xl sm:text-2xl text-neutral-300 mb-6 sm:mb-8">
            Enter Access Code
          </h2>

          {/* Vault wheel */}
          <motion.div
            animate={
              isUnlocking
                ? { rotate: 720 }
                : phase === 'error'
                  ? { rotate: [0, -15, 15, -10, 10, 0] }
                  : {}
            }
            transition={
              isUnlocking
                ? { duration: 1.2, ease: [0.4, 0, 0.2, 1] }
                : { duration: 0.5 }
            }
            className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8"
          >
            <div className="absolute inset-0 rounded-full border-[3px] border-neutral-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]" />
            <div className="absolute inset-[3px] rounded-full border border-neutral-600/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              {[0, 45, 90, 135].map(deg => (
                <div
                  key={deg}
                  className="absolute w-full h-[2px] bg-neutral-500/80"
                  style={{ transform: `rotate(${deg}deg)` }}
                />
              ))}
            </div>
            <div className="absolute inset-0 m-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-neutral-600 to-neutral-700 border-2 border-neutral-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]" />
            <motion.div
              animate={isUnlocking ? { opacity: [0, 0.6, 0.3] } : { opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute -inset-2 rounded-full border-2 border-amber-400/50 shadow-[0_0_24px_rgba(180,140,50,0.3)]"
            />
          </motion.div>

          {/* Code display */}
          <motion.div
            animate={phase === 'error' ? { x: [-8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center gap-3 mb-6 sm:mb-8"
          >
            {[0, 1, 2, 3].map(i => {
              const filled = i < code.length
              return (
                <div
                  key={i}
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg border-2 flex items-center justify-center transition-colors duration-200 ${
                    phase === 'error'
                      ? 'border-red-500/80 bg-red-500/10'
                      : isUnlocking && filled
                        ? 'border-amber-400/80 bg-amber-400/10'
                        : filled
                          ? 'border-neutral-400 bg-neutral-800'
                          : 'border-neutral-700 bg-neutral-900/60'
                  }`}
                >
                  {filled && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
                        phase === 'error'
                          ? 'bg-red-500'
                          : isUnlocking
                            ? 'bg-amber-400 shadow-[0_0_8px_rgba(180,140,50,0.6)]'
                            : 'bg-neutral-300'
                      }`}
                    />
                  )}
                </div>
              )
            })}
          </motion.div>

          {/* Keypad */}
          <div className="grid grid-cols-3 gap-2 max-w-[210px] mx-auto">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(digit => (
              <motion.button
                key={digit}
                whileTap={{ scale: 0.93 }}
                onClick={() => handleDigit(digit)}
                className="h-14 rounded-lg bg-gradient-to-b from-neutral-700 to-neutral-800 border border-neutral-600/80 text-neutral-200 font-heading text-xl hover:from-neutral-600 hover:to-neutral-700 active:from-neutral-800 active:to-neutral-900 transition-colors shadow-md"
              >
                {digit}
              </motion.button>
            ))}
            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={handleClear}
              className="h-14 rounded-lg bg-gradient-to-b from-neutral-800 to-neutral-900 border border-neutral-700 text-neutral-500 text-[10px] font-accent uppercase tracking-wider hover:text-neutral-300 transition-colors"
            >
              Clear
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={() => handleDigit('0')}
              className="h-14 rounded-lg bg-gradient-to-b from-neutral-700 to-neutral-800 border border-neutral-600/80 text-neutral-200 font-heading text-xl hover:from-neutral-600 hover:to-neutral-700 transition-colors shadow-md"
            >
              0
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={handleDelete}
              className="h-14 rounded-lg bg-gradient-to-b from-neutral-800 to-neutral-900 border border-neutral-700 text-neutral-500 hover:text-neutral-300 transition-colors flex items-center justify-center"
            >
              <Delete className="w-5 h-5" />
            </motion.button>
          </div>

          <p className="mt-5 text-[10px] sm:text-xs text-neutral-600 tracking-wide">
            Use keypad or keyboard
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default function DataRoomPage() {
  const [isLocked, setIsLocked] = useState(true)

  useEffect(() => {
    if (isVaultCached()) setIsLocked(false)
  }, [])

  const handleUnlock = useCallback(() => {
    cacheVaultAccess()
    setIsLocked(false)
  }, [])

  if (isLocked) {
    return <VaultDoor onUnlock={handleUnlock} />
  }

  const totalDocs = DOCUMENT_CATEGORIES.reduce((sum, cat) => sum + cat.documents.length, 0)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-canvas pt-20"
    >
      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            Due Diligence
          </p>
          <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
            Investor Data Room
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Access all investment materials, financial models, property documentation,
            and research supporting this opportunity.
          </p>
        </section>

        {/* Access Stats */}
        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <Card padding="lg" className="text-center">
              <FileText className="w-10 h-10 text-primary-600 mx-auto mb-3" />
              <p className="font-heading text-3xl text-neutral-900 mb-1">{totalDocs}</p>
              <p className="text-neutral-600">Documents Available</p>
              <p className="text-sm text-neutral-500 mt-2">Full data room access</p>
            </Card>
            <Card padding="lg" className="text-center">
              <Folder className="w-10 h-10 text-secondary-500 mx-auto mb-3" />
              <p className="font-heading text-3xl text-neutral-900 mb-1">5</p>
              <p className="text-neutral-600">Document Categories</p>
              <p className="text-sm text-neutral-500 mt-2">Investment, financial, property, legal, research</p>
            </Card>
            <Card padding="lg" className="text-center">
              <Lock className="w-10 h-10 text-primary-600 mx-auto mb-3" />
              <p className="font-heading text-3xl text-neutral-900 mb-1">NDA</p>
              <p className="text-neutral-600">Protected Access</p>
              <p className="text-sm text-neutral-500 mt-2">Confidential materials</p>
            </Card>
          </div>
        </section>

        {/* Document Categories */}
        <section className="mb-12">
          <div className="space-y-8">
            {DOCUMENT_CATEGORIES.map((category) => (
              <Card key={category.name} padding="lg">
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-heading text-neutral-900">{category.name}</h3>
                </div>
                <div className="divide-y divide-neutral-100">
                  {category.documents.map((doc) => (
                    <div key={doc.name} className="flex items-center justify-between py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary-50">
                          <FileText className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <p className="font-medium text-neutral-900">{doc.name}</p>
                          <p className="text-xs text-neutral-400 font-accent">Document {doc.doc}</p>
                        </div>
                      </div>
                      <Link
                        href={`/data-room/view/${doc.slug}`}
                        className="inline-flex items-center gap-2 font-accent font-semibold uppercase text-xs tracking-wider px-5 py-2.5 rounded-lg bg-transparent text-primary-800 border-2 border-primary-800 hover:bg-primary-800 hover:text-white transition-all duration-300"
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
          <Card padding="lg" className="bg-primary-800 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-heading mb-4">Confidential Materials</h3>
                <p className="text-primary-200 mb-6">
                  All documents in this data room are confidential and protected under NDA.
                  By accessing these materials you acknowledge the following obligations.
                </p>
                <div className="space-y-3">
                  {[
                    'Materials are for qualified investors and partners only',
                    'Do not distribute without written consent',
                    'Share with legal and financial advisors under NDA only',
                    'Forward-looking statements are subject to risk factors',
                  ].map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary-400 text-primary-900 text-sm font-medium flex items-center justify-center">
                        {index + 1}
                      </div>
                      <span className="text-primary-100">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="bg-primary-700/50 rounded-xl p-8">
                  <Mail className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
                  <p className="text-primary-200 mb-4">
                    Questions about the data room or investment opportunity?
                  </p>
                  <Button variant="accent" size="lg">
                    Contact Investor Relations
                  </Button>
                  <p className="text-sm text-primary-300 mt-4">
                    invest@transformational-epicenter.com
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Data Room FAQ */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
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
                  <div key={item.q} className="bg-white/20 rounded-lg p-4">
                    <p className="font-medium mb-2">{item.q}</p>
                    <p className="text-sm text-primary-800">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/outcomes" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Outcomes</span>
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
