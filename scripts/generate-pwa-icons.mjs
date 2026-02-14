#!/usr/bin/env node
/**
 * Generate PWA icons from the brand SVG icon.
 * Run: node scripts/generate-pwa-icons.mjs
 */
import sharp from 'sharp'
import { readFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const svgPath = join(root, 'app', 'icon.svg')
const publicDir = join(root, 'public')

// Read the SVG source
const svgBuffer = readFileSync(svgPath)

// Upscale the SVG viewBox for crisp rendering at all sizes
function createSvgAtSize(size) {
  const svg = svgBuffer.toString('utf-8')
    .replace('viewBox="0 0 32 32"', `viewBox="0 0 32 32" width="${size}" height="${size}"`)
  return Buffer.from(svg)
}

// Create a maskable icon variant with 20% safe-zone padding (per PWA spec)
function createMaskableSvg(size) {
  const innerSize = Math.round(size * 0.6)
  const offset = Math.round((size - innerSize) / 2)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <rect width="${size}" height="${size}" fill="#1A3A3A"/>
    <svg x="${offset}" y="${offset}" width="${innerSize}" height="${innerSize}" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="16" fill="#1A3A3A"/>
      <circle cx="16" cy="16" r="13" fill="none" stroke="#C4A962" stroke-width="0.5" opacity="0.3"/>
      <path d="M16 6C16 6 13 11 13 15C13 19 14.5 22 16 24C17.5 22 19 19 19 15C19 11 16 6 16 6Z" fill="none" stroke="#C4A962" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 12C10 12 11 15 13 17C14.5 18.5 16 19 16 19" fill="none" stroke="#C4A962" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
      <path d="M22 12C22 12 21 15 19 17C17.5 18.5 16 19 16 19" fill="none" stroke="#C4A962" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
      <path d="M12 26C12 26 14 24 16 24C18 24 20 26 20 26" fill="none" stroke="#C4A962" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>
    </svg>
  </svg>`
  return Buffer.from(svg)
}

const icons = [
  // Standard PWA icons
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-384.png', size: 384 },
  { name: 'icon-512.png', size: 512 },
  // Apple touch icon
  { name: 'apple-touch-icon.png', size: 180 },
  // Maskable icons (safe zone padding for adaptive icons on Android)
  { name: 'icon-maskable-192.png', size: 192, maskable: true },
  { name: 'icon-maskable-512.png', size: 512, maskable: true },
]

async function generate() {
  mkdirSync(publicDir, { recursive: true })

  for (const icon of icons) {
    const svgInput = icon.maskable
      ? createMaskableSvg(icon.size)
      : createSvgAtSize(icon.size)

    await sharp(svgInput, { density: 300 })
      .resize(icon.size, icon.size)
      .png()
      .toFile(join(publicDir, icon.name))

    console.log(`Generated ${icon.name} (${icon.size}x${icon.size}${icon.maskable ? ', maskable' : ''})`)
  }

  console.log('\nAll PWA icons generated successfully!')
}

generate().catch(console.error)
