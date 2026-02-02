import { mdToPdf } from 'md-to-pdf'
import { readdir, readFile, mkdir } from 'node:fs/promises'
import { join, basename, dirname } from 'node:path'
import { existsSync } from 'node:fs'

const DOCS_DIR = 'docs/data-room'
const OUTPUT_DIR = 'public/documents'

const PDF_OPTIONS = {
  pdf_options: {
    format: 'A4',
    margin: { top: '60px', right: '50px', bottom: '60px', left: '50px' },
    printBackground: true,
  },
  stylesheet: [],
  css: `
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600;700&family=Libre+Baskerville:wght@400;700&display=swap');

    :root {
      --primary: #1F483A;
      --accent: #D4724D;
      --secondary: #D4A63B;
      --canvas: #FDFBF7;
    }

    body {
      font-family: 'Source Sans 3', 'Segoe UI', sans-serif;
      color: #1a1a1a;
      line-height: 1.6;
      font-size: 11pt;
      background: white;
    }

    h1 {
      font-family: 'Libre Baskerville', Georgia, serif;
      color: var(--primary);
      font-size: 24pt;
      border-bottom: 3px solid var(--secondary);
      padding-bottom: 12px;
      margin-top: 0;
    }

    h2 {
      font-family: 'Libre Baskerville', Georgia, serif;
      color: var(--primary);
      font-size: 16pt;
      margin-top: 28px;
      border-bottom: 1px solid #e5e5e5;
      padding-bottom: 8px;
    }

    h3 {
      font-family: 'Source Sans 3', sans-serif;
      color: var(--accent);
      font-size: 13pt;
      font-weight: 600;
      margin-top: 20px;
    }

    h4 {
      font-family: 'Source Sans 3', sans-serif;
      color: #444;
      font-size: 11pt;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      font-size: 10pt;
    }

    th {
      background: var(--primary);
      color: white;
      padding: 10px 12px;
      text-align: left;
      font-weight: 600;
      font-size: 9pt;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }

    td {
      padding: 8px 12px;
      border-bottom: 1px solid #e8e8e8;
    }

    tr:nth-child(even) td {
      background: #fafaf8;
    }

    blockquote {
      border-left: 4px solid var(--secondary);
      margin: 16px 0;
      padding: 12px 20px;
      background: #fdf8ef;
      color: #555;
      font-style: italic;
    }

    code {
      background: #f0ede6;
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 9.5pt;
    }

    hr {
      border: none;
      border-top: 2px solid var(--secondary);
      margin: 32px 0;
    }

    .cover-page {
      text-align: center;
      padding-top: 200px;
    }

    strong {
      color: var(--primary);
    }

    a {
      color: var(--accent);
      text-decoration: none;
    }

    ul, ol {
      margin: 8px 0;
      padding-left: 24px;
    }

    li {
      margin: 4px 0;
    }

    p {
      margin: 8px 0;
    }
  `,
}

const CATEGORIES = ['investment', 'financial', 'property', 'legal', 'research']

async function buildPdfs() {
  let total = 0
  let success = 0
  let errors = []

  for (const category of CATEGORIES) {
    const srcDir = join(DOCS_DIR, category)
    const outDir = join(OUTPUT_DIR, category)

    if (!existsSync(srcDir)) {
      console.log(`  ⚠ No source dir: ${srcDir}`)
      continue
    }

    await mkdir(outDir, { recursive: true })

    const files = (await readdir(srcDir)).filter(f => f.endsWith('.md')).sort()

    for (const file of files) {
      total++
      const srcPath = join(srcDir, file)
      // Strip numeric prefix: 01-executive-summary.md → executive-summary.pdf
      const pdfName = file.replace(/^\d+-/, '').replace(/\.md$/, '.pdf')
      const outPath = join(outDir, pdfName)

      try {
        const md = await readFile(srcPath, 'utf-8')
        const pdf = await mdToPdf({ content: md }, {
          ...PDF_OPTIONS,
          dest: outPath,
        })

        if (pdf) {
          success++
          console.log(`  ✓ ${outPath}`)
        }
      } catch (err) {
        errors.push({ file: srcPath, error: err.message })
        console.error(`  ✗ ${srcPath}: ${err.message}`)
      }
    }
  }

  console.log(`\n  ${success}/${total} PDFs generated successfully`)
  if (errors.length > 0) {
    console.log(`  ${errors.length} errors:`)
    errors.forEach(e => console.log(`    - ${e.file}: ${e.error}`))
    process.exit(1)
  }
}

console.log('\n📄 Building Data Room PDFs...\n')
buildPdfs()
  .then(() => console.log('\n✅ Data room build complete\n'))
  .catch(err => {
    console.error('\n❌ Build failed:', err)
    process.exit(1)
  })
