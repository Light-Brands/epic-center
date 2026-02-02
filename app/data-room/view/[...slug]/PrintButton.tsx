'use client'

import { Printer } from 'lucide-react'

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-accent text-xs font-semibold uppercase tracking-wider text-primary-800 border-2 border-primary-800 bg-transparent hover:bg-primary-800 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
      title="Print / Save as PDF"
    >
      <Printer className="w-4 h-4" />
      <span className="hidden sm:inline">Print</span>
    </button>
  )
}
