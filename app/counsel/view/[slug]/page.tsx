import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Scale } from 'lucide-react'
import { Footer } from '@/components/layout'
import { CounselMarkdownViewer } from './CounselMarkdownViewer'
import { PrintButton } from './PrintButton'

const DOCS_DIR = join(process.cwd(), 'docs/tax-structure')

interface DocumentEntry {
  file: string
  title: string
  category: string
  prev?: string
  next?: string
}

const DOCUMENT_MAP: Record<string, DocumentEntry> = {
  'master-structure': {
    file: '01-MASTER-STRUCTURE.md',
    title: 'Master Structure',
    category: 'Structure Overview',
    next: 'legal-defense'
  },
  'legal-defense': {
    file: '02-LEGAL-DEFENSE.md',
    title: 'Legal Defense Framework',
    category: 'Legal Defense',
    prev: 'master-structure',
    next: 'founder-guide-us'
  },
  'founder-guide-us': {
    file: '03-FOUNDER-GUIDE-US.md',
    title: 'US Founder Guide',
    category: 'Founder Playbooks',
    prev: 'legal-defense',
    next: 'founder-guide-canada'
  },
  'founder-guide-canada': {
    file: '04-FOUNDER-GUIDE-CANADA.md',
    title: 'Canadian Founder Guide',
    category: 'Founder Playbooks',
    prev: 'founder-guide-us',
    next: 'founder-guide-cyprus'
  },
  'founder-guide-cyprus': {
    file: '05-FOUNDER-GUIDE-CYPRUS.md',
    title: 'Cyprus Founder Guide',
    category: 'Founder Playbooks',
    prev: 'founder-guide-canada',
    next: 'profit-participation-framework'
  },
  'profit-participation-framework': {
    file: '10-LB-PROFIT-PARTICIPATION-FRAMEWORK.md',
    title: 'Profit Participation Framework',
    category: 'Founder Playbooks',
    prev: 'founder-guide-cyprus',
    next: 'counsel-questions'
  },
  'counsel-questions': {
    file: '06-COUNSEL-QUESTIONS.md',
    title: 'Questions for Counsel',
    category: 'Counsel Questions',
    prev: 'profit-participation-framework',
    next: 'ecosystem-architecture'
  },
  'ecosystem-architecture': {
    file: '07-ECOSYSTEM-ARCHITECTURE.md',
    title: 'Ecosystem Architecture',
    category: 'Structure Overview',
    prev: 'counsel-questions',
    next: 'cook-islands-ibc-detail'
  },
  'cook-islands-ibc-detail': {
    file: '08-COOK-ISLANDS-IBC-DETAIL.md',
    title: 'Cook Islands IBC Detail',
    category: 'Entity Details',
    prev: 'ecosystem-architecture',
    next: 'cayman-te-holdings-detail'
  },
  'cayman-te-holdings-detail': {
    file: '09-CAYMAN-TE-HOLDINGS-DETAIL.md',
    title: 'Cayman TE Holdings Detail',
    category: 'Entity Details',
    prev: 'cook-islands-ibc-detail'
  },
}

export function generateStaticParams() {
  return Object.keys(DOCUMENT_MAP).map(slug => ({ slug }))
}

export default async function CounselDocumentPage({
  params,
}: {
  params: { slug: string }
}) {
  const doc = DOCUMENT_MAP[params.slug]

  if (!doc) notFound()

  let content: string
  try {
    content = await readFile(join(DOCS_DIR, doc.file), 'utf-8')
  } catch {
    notFound()
  }

  const prevDoc = doc.prev ? DOCUMENT_MAP[doc.prev] : null
  const nextDoc = doc.next ? DOCUMENT_MAP[doc.next] : null

  return (
    <div className="min-h-screen bg-canvas print:bg-white relative pt-20 print:pt-0">
      <div className="pointer-events-none fixed inset-0 bg-gradient-warm-glow print:hidden" aria-hidden />

      {/* Sticky bar below main nav */}
      <div className="sticky top-20 z-30 bg-canvas/90 backdrop-blur-xl border-b border-neutral-200 shadow-nav print:hidden">
        <div className="w-full sm:w-[70vw] mx-auto flex items-center justify-between py-3 px-4 sm:px-6">
          <Link
            href="/counsel"
            className="group inline-flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors font-accent text-sm uppercase tracking-wide"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Counsel Portal
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-2 font-accent text-xs uppercase tracking-widest text-neutral-500">
              <Scale className="w-4 h-4" />
              {doc.category}
            </span>
            <PrintButton />
          </div>
        </div>
      </div>

      {/* Document content */}
      <article className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-12 sm:pb-16 print:py-0 print:w-full print:px-0 relative">
        <div className="max-w-4xl mx-auto print:max-w-none">
          <div className="bg-white rounded-xl shadow-card border border-neutral-100 overflow-hidden print:shadow-none print:border-0 print:rounded-none">
            <div className="px-6 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-12 print:px-0 print:py-0">
              <CounselMarkdownViewer content={content} />
            </div>
          </div>
        </div>
      </article>

      {/* Document navigation */}
      <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 pb-12 print:hidden relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-stretch gap-4 pt-8 border-t border-neutral-200">
            {prevDoc ? (
              <Link
                href={`/counsel/view/${doc.prev}`}
                className="flex-1 group p-4 rounded-lg border-2 border-neutral-200 hover:border-primary-400 hover:bg-primary-50 transition-all duration-200"
              >
                <div className="flex items-center gap-2 text-neutral-500 text-xs font-accent uppercase tracking-wide mb-1">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                  Previous
                </div>
                <p className="font-medium text-neutral-900 group-hover:text-primary-800 transition-colors">
                  {prevDoc.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {nextDoc && (
              <Link
                href={`/counsel/view/${doc.next}`}
                className="flex-1 group p-4 rounded-lg border-2 border-neutral-200 hover:border-primary-400 hover:bg-primary-50 transition-all duration-200 text-right"
              >
                <div className="flex items-center justify-end gap-2 text-neutral-500 text-xs font-accent uppercase tracking-wide mb-1">
                  Next
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="font-medium text-neutral-900 group-hover:text-primary-800 transition-colors">
                  {nextDoc.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="print:hidden relative">
        <Footer />
      </div>
    </div>
  )
}
