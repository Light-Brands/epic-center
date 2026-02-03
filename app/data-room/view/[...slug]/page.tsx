import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Footer } from '@/components/layout'
import { MarkdownViewer } from './MarkdownViewer'
import { SheetsViewer } from './SheetsViewer'
import { PrintButton } from './PrintButton'

const DOCS_DIR = join(process.cwd(), 'docs/data-room')

type MarkdownDoc = {
  type?: 'markdown'
  file: string
  category: string
}

type SheetsDoc = {
  type: 'sheets'
  spreadsheetId: string
  externalUrl: string
  title: string
  category: string
}

type DocumentEntry = MarkdownDoc | SheetsDoc

const DOCUMENT_MAP: Record<string, DocumentEntry> = {
  'investment/executive-summary': { file: 'investment/01-executive-summary.md', category: 'Investment Documents' },
  'investment/pitch-deck': { file: 'investment/02-pitch-deck.md', category: 'Investment Documents' },
  'investment/private-placement-memorandum': { file: 'investment/03-private-placement-memorandum.md', category: 'Investment Documents' },
  'investment/subscription-agreement': { file: 'investment/04-subscription-agreement.md', category: 'Investment Documents' },
  'investment/operating-agreement': { file: 'investment/05-operating-agreement.md', category: 'Investment Documents' },
  'financial/financial-projections-5-year': { file: 'financial/06-financial-projections-5-year.md', category: 'Financial Model' },
  'financial/unit-economics-model': { file: 'financial/07-unit-economics-model.md', category: 'Financial Model' },
  'financial/sensitivity-analysis': { file: 'financial/08-sensitivity-analysis.md', category: 'Financial Model' },
  'financial/cap-table': { file: 'financial/09-cap-table.md', category: 'Financial Model' },
  'financial/financial-model-spreadsheet': {
    type: 'sheets',
    spreadsheetId: '1Z0_N_V2gM-0rpW3IP9oRO12nmj51XwcTV_9R9fNsyWo',
    externalUrl: 'https://docs.google.com/spreadsheets/d/1Z0_N_V2gM-0rpW3IP9oRO12nmj51XwcTV_9R9fNsyWo/edit?usp=drivesdk',
    title: 'Financial Model Spreadsheet',
    category: 'Financial Model',
  },
  'property/property-evaluation-matrix': { file: 'property/10-property-evaluation-matrix.md', category: 'Property Documents' },
  'property/rancho-paraiso-oasis-assessment': { file: 'property/11-rancho-paraiso-oasis-assessment.md', category: 'Property Documents' },
  'property/renovation-budget-timeline': { file: 'property/12-renovation-budget-timeline.md', category: 'Property Documents' },
  'property/comparable-market-analysis': { file: 'property/13-comparable-market-analysis.md', category: 'Property Documents' },
  'legal/corporate-structure-overview': { file: 'legal/14-corporate-structure-overview.md', category: 'Legal & Compliance' },
  'legal/mexican-healthcare-regulations': { file: 'legal/15-mexican-healthcare-regulations.md', category: 'Legal & Compliance' },
  'legal/fideicomiso-structure': { file: 'legal/16-fideicomiso-structure.md', category: 'Legal & Compliance' },
  'legal/risk-disclosure-document': { file: 'legal/17-risk-disclosure-document.md', category: 'Legal & Compliance' },
  'research/ibogaine-research-summary': { file: 'research/18-ibogaine-research-summary.md', category: 'Research & Evidence' },
  'research/market-research-report': { file: 'research/19-market-research-report.md', category: 'Research & Evidence' },
  'research/competitive-landscape-analysis': { file: 'research/20-competitive-landscape-analysis.md', category: 'Research & Evidence' },
  'research/clinical-outcome-studies': { file: 'research/21-clinical-outcome-studies.md', category: 'Research & Evidence' },
  'financial/valuation-report': { file: 'financial/22-valuation-report.md', category: 'Financial Model' },
}

export function generateStaticParams() {
  return Object.keys(DOCUMENT_MAP).map(key => ({
    slug: key.split('/'),
  }))
}

export default async function DocumentViewerPage({
  params,
}: {
  params: { slug: string[] }
}) {
  const slugPath = params.slug.join('/')
  const doc = DOCUMENT_MAP[slugPath]

  if (!doc) notFound()

  const isSheets = doc.type === 'sheets'

  let content: string | null = null
  if (!isSheets) {
    try {
      content = await readFile(join(DOCS_DIR, (doc as MarkdownDoc).file), 'utf-8')
    } catch {
      notFound()
    }
  }

  return (
    <div className="min-h-screen bg-canvas print:bg-white relative pt-20 print:pt-0">
      {/* Warm glow matching rest of site */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-warm-glow print:hidden" aria-hidden />

      {/* Sticky bar below main nav - hidden on print */}
      <div className="sticky top-20 z-30 bg-canvas/90 backdrop-blur-xl border-b border-neutral-200 shadow-nav print:hidden">
        <div className="w-full sm:w-[70vw] mx-auto flex items-center justify-between py-3 px-4 sm:px-6">
          <Link
            href="/data-room"
            className="group inline-flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors font-accent text-sm uppercase tracking-wide"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Data Room
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block font-accent text-xs uppercase tracking-widest text-neutral-500">
              {doc.category}
            </span>
            {isSheets ? (
              <a
                href={(doc as SheetsDoc).externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-accent font-semibold uppercase text-xs tracking-wider px-4 py-2 rounded-lg bg-primary-800 text-white hover:bg-primary-900 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                <ExternalLink className="w-4 h-4" />
                View in Google Sheets
              </a>
            ) : (
              <PrintButton />
            )}
          </div>
        </div>
      </div>

      {/* Document content */}
      {isSheets ? (
        <article className="w-full sm:w-[90vw] mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-12 sm:pb-16 relative">
          <div className="mx-auto">
            <div className="bg-white rounded-xl shadow-card border border-neutral-100 overflow-hidden">
              <div className="px-4 sm:px-6 py-6 sm:py-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h1 className="text-2xl font-heading text-neutral-900">
                      {(doc as SheetsDoc).title}
                    </h1>
                    <p className="text-sm text-neutral-500 mt-1">
                      Live financial model - embedded from Google Sheets
                    </p>
                  </div>
                  <a
                    href={(doc as SheetsDoc).externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 font-accent font-semibold uppercase text-xs tracking-wider px-5 py-2.5 rounded-lg bg-transparent text-primary-800 border-2 border-primary-800 hover:bg-primary-800 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open in Google Sheets
                  </a>
                </div>
                <SheetsViewer
                  spreadsheetId={(doc as SheetsDoc).spreadsheetId}
                  title={(doc as SheetsDoc).title}
                />
              </div>
            </div>
          </div>
        </article>
      ) : (
        <article className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-12 sm:pb-16 print:py-0 print:w-full print:px-0 relative">
          <div className="max-w-4xl mx-auto print:max-w-none">
            <div className="bg-white rounded-xl shadow-card border border-neutral-100 overflow-hidden print:shadow-none print:border-0 print:rounded-none">
              <div className="px-6 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-12 print:px-0 print:py-0">
                <MarkdownViewer content={content!} />
              </div>
            </div>
          </div>
        </article>
      )}

      {/* Bottom navigation - hidden on print */}
      <div className="w-full sm:w-[70vw] mx-auto px-4 sm:px-6 pb-12 print:hidden relative">
        <div className="max-w-4xl mx-auto flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link
            href="/data-room"
            className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors font-accent text-sm uppercase tracking-wide"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Data Room
          </Link>
        </div>
      </div>
      <div className="print:hidden relative">
        <Footer />
      </div>
    </div>
  )
}
