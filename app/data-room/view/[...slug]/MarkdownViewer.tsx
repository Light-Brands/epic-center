'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'

/* ─── Gantt Chart Parser & Renderer ─── */

interface GanttItem {
  type: 'phase' | 'task' | 'milestone'
  label: string
  startMonth?: number
  endMonth?: number
  phase?: number
}

function parseGantt(raw: string): GanttItem[] | null {
  const lines = raw.split('\n')
  const ruler = lines.find(l => l.includes('|----|'))
  if (!ruler) return null

  const base = ruler.indexOf('|')
  const w = 5 // chars per month segment: |----|
  const items: GanttItem[] = []
  let phase = 0
  let milestoneMo: number | null = null

  for (const line of lines) {
    const t = line.trim()
    if (!t || t.startsWith('Month:') || t.includes('|----|')) continue

    // Phase headers
    if (t.startsWith('PHASE')) {
      phase = t.includes('1') ? 1 : 2
      items.push({ type: 'phase', label: t })
      continue
    }

    // Milestone caret position
    if (t === '^') {
      milestoneMo = Math.round((line.indexOf('^') - base) / w) + 1
      continue
    }

    // Milestone labels
    if (/^(SOFT|FULL)\s+OPEN$/i.test(t) || /^\d+\s+ROOMS$/i.test(t)) {
      items.push({ type: 'milestone', label: t, startMonth: milestoneMo ?? undefined })
      continue
    }

    // Task bars [====]
    const bo = line.indexOf('[')
    const bc = line.indexOf(']')
    if (bo >= 0 && bc > bo && line.includes('=')) {
      const label = line.substring(0, bo).trim()
      if (label) {
        const s = Math.max(1, Math.floor((bo - base) / w) + 1)
        const e = Math.min(12, Math.max(s, Math.ceil((bc - base) / w)))
        items.push({ type: 'task', label, startMonth: s, endMonth: e, phase })
      }
    }
  }

  // Group consecutive milestone lines into single items
  const out: GanttItem[] = []
  for (let i = 0; i < items.length; i++) {
    if (items[i].type !== 'milestone') { out.push(items[i]); continue }
    const labels = [items[i].label]
    let mo = items[i].startMonth
    while (i + 1 < items.length && items[i + 1].type === 'milestone') {
      i++
      labels.push(items[i].label)
      if (items[i].startMonth) mo = items[i].startMonth
    }
    out.push({ type: 'milestone', label: labels.join(' \u00b7 '), startMonth: mo })
  }

  return out.length ? out : null
}

const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1)

function GanttChart({ text }: { text: string }) {
  const items = parseGantt(text)
  if (!items) return null

  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-neutral-200 shadow-sm">
      <div className="min-w-[680px]">
        {/* Month header */}
        <div className="grid grid-cols-[160px_repeat(12,1fr)] bg-primary-800">
          <div className="px-4 py-3 font-accent text-[10px] uppercase tracking-[0.12em] text-white/70">
            Task
          </div>
          {MONTHS.map(m => (
            <div
              key={m}
              className="py-3 text-center font-accent text-[10px] tracking-wider text-white/70 border-l border-primary-700/50"
            >
              M{m}
            </div>
          ))}
        </div>

        {/* Rows */}
        {items.map((item, idx) => {
          // Phase header
          if (item.type === 'phase') {
            return (
              <div key={idx} className="px-4 py-2 bg-primary-50 border-t border-neutral-200">
                <span className="font-accent text-[11px] uppercase tracking-[0.1em] text-primary-800 font-semibold">
                  {item.label}
                </span>
              </div>
            )
          }

          // Milestone
          if (item.type === 'milestone') {
            return (
              <div
                key={idx}
                className="border-t-2 border-secondary-300 bg-gradient-to-r from-secondary-50/80 to-transparent px-4 py-2.5 flex items-center gap-2.5"
              >
                <span className="inline-block w-2 h-2 rotate-45 bg-secondary-500 flex-shrink-0" />
                <span className="font-heading text-[13px] text-secondary-700">{item.label}</span>
                {item.startMonth && (
                  <span className="ml-auto font-accent text-[10px] text-secondary-500/80 tracking-wider">
                    Month {item.startMonth}
                  </span>
                )}
              </div>
            )
          }

          // Task bar
          return (
            <div
              key={idx}
              className="grid grid-cols-[160px_repeat(12,1fr)] border-t border-neutral-100 hover:bg-neutral-50/50 transition-colors"
            >
              <div className="px-4 py-[7px] text-[13px] text-neutral-700 font-medium flex items-center leading-tight">
                {item.label}
              </div>
              {MONTHS.map(m => {
                const active = m >= (item.startMonth ?? 0) && m <= (item.endMonth ?? 0)
                const first = m === item.startMonth
                const last = m === item.endMonth
                return (
                  <div key={m} className="py-[7px] px-[2px] border-l border-neutral-100/50 flex items-center">
                    {active && (
                      <div
                        className={`w-full h-[18px] ${
                          item.phase === 1 ? 'bg-primary-600' : 'bg-secondary-500'
                        } ${first && last ? 'rounded' : first ? 'rounded-l' : last ? 'rounded-r' : ''}`}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          )
        })}

        {/* Legend */}
        <div className="flex items-center gap-6 px-4 py-2.5 border-t border-neutral-200 bg-canvas">
          <div className="flex items-center gap-2">
            <div className="w-4 h-2.5 rounded-sm bg-primary-600" />
            <span className="font-accent text-[10px] uppercase tracking-wider text-neutral-500">Phase 1</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-2.5 rounded-sm bg-secondary-500" />
            <span className="font-accent text-[10px] uppercase tracking-wider text-neutral-500">Phase 2</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rotate-45 bg-secondary-500" />
            <span className="font-accent text-[10px] uppercase tracking-wider text-neutral-500">Milestone</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Markdown Components ─── */

const components: Components = {
  h1: ({ children }) => (
    <h1 className="font-heading text-3xl sm:text-4xl text-primary-800 mb-6 mt-0 pb-4 border-b-[3px] border-secondary-400 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-heading text-2xl sm:text-[1.65rem] text-primary-800 mt-12 mb-4 pb-2 border-b border-neutral-200 leading-snug">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-body text-lg sm:text-xl font-semibold text-accent-600 mt-8 mb-3 leading-snug">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="font-accent text-xs uppercase tracking-[0.15em] text-neutral-500 mt-6 mb-2 font-semibold">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-neutral-700 leading-relaxed mb-4 text-[15px]">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-primary-800">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="text-neutral-600 italic">{children}</em>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-accent-500 hover:text-accent-600 underline underline-offset-2 decoration-accent-300 hover:decoration-accent-500 transition-colors"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-secondary-400 bg-secondary-50/40 pl-5 pr-4 py-3 my-6 rounded-r-lg text-neutral-600 italic">
      {children}
    </blockquote>
  ),
  hr: () => (
    <hr className="my-10 border-0 h-[2px] bg-gradient-to-r from-transparent via-secondary-400/40 to-transparent" />
  ),
  ul: ({ children }) => (
    <ul className="my-3 ml-1 space-y-1.5 text-[15px]">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-3 ml-1 space-y-1.5 text-[15px] list-decimal list-inside">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-neutral-700 leading-relaxed flex items-start gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-accent-400 mt-2.5 flex-shrink-0" />
      <span className="flex-1">{children}</span>
    </li>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-neutral-200 shadow-sm">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-primary-800 text-white">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left font-accent text-[10px] uppercase tracking-[0.1em] font-semibold whitespace-nowrap">
      {children}
    </th>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-neutral-100">{children}</tbody>
  ),
  tr: ({ children }) => (
    <tr className="even:bg-canvas hover:bg-secondary-50/30 transition-colors">{children}</tr>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2.5 text-neutral-700 whitespace-nowrap first:font-medium first:text-neutral-900">
      {children}
    </td>
  ),
  code: ({ children, className }) => {
    const isBlock = className?.includes('language-')
    if (isBlock) {
      return (
        <code className={`block bg-primary-950 text-primary-100 rounded-lg p-5 text-xs font-mono overflow-x-auto my-4 leading-relaxed ${className || ''}`}>
          {children}
        </code>
      )
    }
    return (
      <code className="bg-neutral-100 text-accent-600 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    )
  },
  pre: ({ children, node }) => {
    // Detect Gantt chart code blocks and render visual component
    if (node?.children?.length === 1) {
      const codeEl = node.children[0]
      if (codeEl.type === 'element' && codeEl.tagName === 'code' && codeEl.children?.length === 1) {
        const txt = codeEl.children[0]
        if (txt.type === 'text' && txt.value?.includes('|----|') && txt.value?.includes('[=')) {
          return <GanttChart text={txt.value} />
        }
      }
    }
    return (
      <pre className="bg-primary-950 rounded-xl overflow-hidden my-6 shadow-lg">
        {children}
      </pre>
    )
  },
}

export function MarkdownViewer({ content }: { content: string }) {
  return (
    <div className="data-room-prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
