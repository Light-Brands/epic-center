'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'

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
  pre: ({ children }) => (
    <pre className="bg-primary-950 rounded-xl overflow-hidden my-6 shadow-lg">
      {children}
    </pre>
  ),
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
