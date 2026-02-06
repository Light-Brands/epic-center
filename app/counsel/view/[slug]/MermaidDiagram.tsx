'use client'

import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

// Initialize mermaid with custom theme - using SVG labels for better control
mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  themeVariables: {
    // Primary colors - navy nodes
    primaryColor: '#1e3a5f',
    primaryTextColor: '#ffffff',
    primaryBorderColor: '#1e3a5f',
    // Secondary colors - gold/brown nodes
    secondaryColor: '#8b5e3c',
    secondaryTextColor: '#ffffff',
    secondaryBorderColor: '#8b5e3c',
    // Tertiary - teal nodes
    tertiaryColor: '#0d7377',
    tertiaryTextColor: '#ffffff',
    tertiaryBorderColor: '#0d7377',
    // Background and default node colors - light slate for default nodes
    background: '#ffffff',
    mainBkg: '#f1f5f9',
    nodeBkg: '#f1f5f9',
    // Text - dark navy for readability
    textColor: '#1e3a5f',
    lineColor: '#374151',
    // Flowchart specific
    nodeBorder: '#1e3a5f',
    nodeTextColor: '#1e3a5f',
    clusterBkg: '#f8fafc',
    clusterBorder: '#94a3b8',
    // Default link colors
    defaultLinkColor: '#374151',
    // Gantt chart - white text on dark bars
    taskTextColor: '#ffffff',
    taskTextOutsideColor: '#1e3a5f',
    taskBkgColor: '#1e3a5f',
    activeTaskBkgColor: '#2c4f7c',
    activeTaskBorderColor: '#1e3a5f',
    doneTaskBkgColor: '#374151',
    doneTaskBorderColor: '#374151',
    sectionBkgColor: '#f1f5f9',
    sectionBkgColor2: '#e8edf3',
    gridColor: '#cbd5e1',
    todayLineColor: '#d4a853',
    // Fonts
    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
    fontSize: '13px',
  },
  flowchart: {
    htmlLabels: false, // Use SVG text for better CSS control
    curve: 'basis',
    padding: 15,
    nodeSpacing: 50,
    rankSpacing: 50,
  },
  securityLevel: 'loose',
})

interface MermaidDiagramProps {
  code: string
  id?: string
}

export function MermaidDiagram({ code, id }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const uniqueId = id || `mermaid-${Math.random().toString(36).substr(2, 9)}`

  useEffect(() => {
    const renderDiagram = async () => {
      if (!containerRef.current) return

      try {
        // Clear previous content
        setError(null)

        // Render the diagram
        const { svg: renderedSvg } = await mermaid.render(uniqueId, code)
        setSvg(renderedSvg)
      } catch (err) {
        console.error('Mermaid rendering error:', err)
        setError(err instanceof Error ? err.message : 'Failed to render diagram')
      }
    }

    renderDiagram()
  }, [code, uniqueId])

  if (error) {
    return (
      <div className="my-6 p-6 bg-red-50 border border-red-200 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-accent text-xs uppercase tracking-wide text-red-500">Diagram Error</p>
            <p className="font-medium text-red-700">Failed to render Mermaid diagram</p>
          </div>
        </div>
        <pre className="text-xs font-mono text-red-600 bg-white p-4 rounded-lg border border-red-100 overflow-x-auto">
          {code}
        </pre>
      </div>
    )
  }

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm mermaid-wrapper">
      <div
        ref={containerRef}
        className="p-6 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  )
}
