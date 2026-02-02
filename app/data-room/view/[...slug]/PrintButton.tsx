'use client'

import { Printer } from 'lucide-react'

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-neutral-500 hover:text-primary-800 hover:bg-neutral-100 transition-colors"
      title="Print / Save as PDF"
    >
      <Printer className="w-4 h-4" />
      <span className="hidden sm:inline font-accent text-xs uppercase tracking-wider">Print</span>
    </button>
  )
}
