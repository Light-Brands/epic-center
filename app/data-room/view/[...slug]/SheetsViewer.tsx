'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'

interface SheetsViewerProps {
  spreadsheetId: string
  title: string
}

export function SheetsViewer({ spreadsheetId, title }: SheetsViewerProps) {
  const [loading, setLoading] = useState(true)

  const embedUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/preview`

  return (
    <div className="relative w-full" style={{ minHeight: '80vh' }}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-50 rounded-lg">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
            <p className="text-sm text-neutral-500 font-accent uppercase tracking-wide">
              Loading {title}...
            </p>
          </div>
        </div>
      )}
      <iframe
        src={embedUrl}
        title={title}
        className="w-full rounded-lg border border-neutral-200"
        style={{ height: '80vh' }}
        onLoad={() => setLoading(false)}
        allowFullScreen
      />
    </div>
  )
}
