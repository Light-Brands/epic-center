'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  FileText,
  Eye as EyeIcon,
  Lock,
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
        description: 'Complete 7-entity architecture across 5 jurisdictions'
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

import { VaultGate } from '@/components/auth/VaultGate'

export default function CounselPage() {
  const totalDocs = DOCUMENT_CATEGORIES.reduce((sum, cat) => sum + cat.documents.length, 0)

  return (
    <VaultGate title="Counsel Review Portal" subtitle="Confidential tax structure documentation for legal review.">
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
            Seven entities across five jurisdictions with comprehensive defensibility analysis.
          </p>
        </section>

        {/* Structure Summary Cards */}
        <section className="mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card padding="md" className="text-center hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
              <Building2 className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="font-heading text-2xl text-neutral-900 mb-1">7</p>
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
                { name: 'Panamanian Holdings S.A.', jurisdiction: 'Panama', role: 'Intermediate Holdco (THE FORTRESS)', rate: '0%' },
                { name: 'Panama PIF', jurisdiction: 'Panama', role: 'Ultimate Asset Protection', rate: '0%' },
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
    </VaultGate>
  )
}
