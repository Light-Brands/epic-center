'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'
import { MermaidDiagram } from './MermaidDiagram'

/* ─── Heading Slug Generator ─── */

function extractText(node: any): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (!node) return ''
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (node?.props?.children != null) return extractText(node.props.children)
  return ''
}

function slugify(children: any): string {
  return extractText(children)
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s/g, '-')
    .replace(/^-+|-+$/g, '')
}

/* ─── Markdown Components ─── */

const components: Components = {
  h1: ({ children }) => (
    <h1 id={slugify(children)} className="font-heading text-3xl sm:text-4xl text-primary-800 mb-6 mt-0 pb-4 border-b-2 border-secondary-400/60 leading-tight scroll-mt-32 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 id={slugify(children)} className="font-heading text-2xl sm:text-[1.65rem] text-primary-800 mt-12 mb-4 pb-2 border-b border-neutral-200 leading-snug scroll-mt-32">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 id={slugify(children)} className="font-body text-lg sm:text-xl font-semibold text-primary-800 mt-8 mb-3 leading-snug scroll-mt-32">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 id={slugify(children)} className="font-accent text-xs uppercase tracking-[0.15em] text-neutral-600 mt-6 mb-2 font-semibold scroll-mt-32">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-neutral-700 leading-relaxed mb-4 text-[15px] sm:text-base">
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
      className="text-primary-600 hover:text-primary-800 underline underline-offset-2 decoration-primary-300 hover:decoration-primary-600 transition-colors"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-secondary-400 bg-secondary-50/50 pl-5 pr-4 py-3 my-6 rounded-r-lg text-neutral-700 italic text-[15px] sm:text-base">
      {children}
    </blockquote>
  ),
  hr: () => (
    <hr className="my-10 border-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
  ),
  ul: ({ children }) => (
    <ul className="my-4 space-y-2 text-[15px] sm:text-base list-none pl-0 [&>li]:flex [&>li]:items-start [&>li]:gap-2 [&>li]:leading-relaxed">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 space-y-2 text-[15px] sm:text-base list-decimal list-outside ml-5 pl-0.5 [&>li]:pl-1 [&>li]:leading-relaxed [&>li_.counsel-bullet]:hidden">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-neutral-700 flex items-start gap-2">
      <span className="counsel-bullet w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" aria-hidden />
      <span className="flex-1 min-w-0">{children}</span>
    </li>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-neutral-200 shadow-sm">
      <table className="min-w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-primary-800 text-white">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="px-3 sm:px-4 py-3 text-left font-accent text-[10px] uppercase tracking-[0.1em] font-semibold whitespace-nowrap text-white">
      {children}
    </th>
  ),
  tbody: ({ children }) => (
    <tbody className="bg-white [&>tr:nth-child(even)]:bg-neutral-50/60">{children}</tbody>
  ),
  tr: ({ children }) => (
    <tr className="border-b border-neutral-100 last:border-0 hover:bg-primary-50/30 transition-colors">{children}</tr>
  ),
  td: ({ children }) => {
    const text = extractText(children)
    const isNumeric = /^[\s$%()\-\d,.×x*+/=]+$/.test(text.trim()) || text.trim() === '' || text.trim() === '--'
    // Highlight key tax values
    const isHighlight = /^0%|^\$0|^~?0-|^~?1\.[0-9]%/.test(text.trim())
    return (
      <td className={`px-3 sm:px-4 py-3 text-neutral-700 first:font-medium first:text-neutral-900 tabular-nums ${isNumeric ? 'whitespace-nowrap' : ''} ${isHighlight ? 'text-primary-700 font-semibold' : ''}`}>
        {children}
      </td>
    )
  },
  code: ({ children, className }) => {
    const isBlock = className?.includes('language-')
    if (isBlock) {
      return (
        <code className={`block bg-neutral-100 border border-neutral-200 text-neutral-800 rounded-lg p-5 text-xs font-mono overflow-x-auto my-4 leading-relaxed ${className || ''}`}>
          {children}
        </code>
      )
    }
    return (
      <code className="bg-neutral-100 text-primary-700 border border-neutral-200 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    )
  },
  pre: ({ children, node }) => {
    // Extract text from code element
    let codeText: string | null = null
    let language: string | null = null
    if (node?.children?.length === 1) {
      const codeEl = node.children[0] as any
      if (codeEl.type === 'element' && codeEl.tagName === 'code') {
        // Get language from className
        const className = codeEl.properties?.className as string[] | undefined
        if (className) {
          const langClass = className.find((c: string) => c.startsWith('language-'))
          if (langClass) {
            language = langClass.replace('language-', '')
          }
        }
        if (codeEl.children?.length === 1) {
          const txt = codeEl.children[0]
          if (txt.type === 'text') {
            codeText = txt.value
          }
        }
      }
    }

    // Mermaid diagram - render with real Mermaid library
    if (language === 'mermaid' && codeText) {
      return <MermaidDiagram code={codeText} />
    }

    // Regular code blocks
    if (codeText) {
      return (
        <div className="my-6 rounded-xl border border-neutral-200 bg-neutral-50/80 shadow-sm overflow-hidden">
          {language && (
            <div className="px-4 py-2 bg-neutral-100 border-b border-neutral-200">
              <span className="font-accent text-[10px] uppercase tracking-wide text-neutral-500">{language}</span>
            </div>
          )}
          <pre className="overflow-x-auto">
            <code className="block px-5 py-4 text-[13px] font-mono leading-[1.75] text-neutral-800 whitespace-pre">
              {codeText}
            </code>
          </pre>
        </div>
      )
    }

    return (
      <pre className="bg-neutral-50/80 border border-neutral-200 rounded-xl overflow-hidden my-6 shadow-sm">
        {children}
      </pre>
    )
  },
}

export function CounselMarkdownViewer({ content }: { content: string }) {
  return (
    <div className="counsel-prose [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
