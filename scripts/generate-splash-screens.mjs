#!/usr/bin/env node
/**
 * Generate iOS splash screens for PWA "Add to Home Screen".
 * These show the TEC logo on the brand background while the app loads.
 * Run: node scripts/generate-splash-screens.mjs
 */
import sharp from 'sharp'
import { mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const splashDir = join(root, 'public', 'splash')

// iOS device splash screen sizes (width x height at device pixel ratio)
const screens = [
  { name: 'iphone-se', width: 640, height: 1136 },
  { name: 'iphone-8', width: 750, height: 1334 },
  { name: 'iphone-8-plus', width: 1242, height: 2208 },
  { name: 'iphone-x', width: 1125, height: 2436 },
  { name: 'iphone-xr', width: 828, height: 1792 },
  { name: 'iphone-xsmax', width: 1242, height: 2688 },
  { name: 'iphone-12', width: 1170, height: 2532 },
  { name: 'iphone-14-pro', width: 1179, height: 2556 },
  { name: 'iphone-14-promax', width: 1290, height: 2796 },
  { name: 'iphone-16-pro', width: 1206, height: 2622 },
  { name: 'iphone-16-promax', width: 1320, height: 2868 },
  { name: 'ipad', width: 1536, height: 2048 },
  { name: 'ipad-pro-11', width: 1668, height: 2388 },
  { name: 'ipad-pro-13', width: 2048, height: 2732 },
]

function createSplashSvg(width, height) {
  const iconSize = Math.min(width, height) * 0.2
  const iconX = (width - iconSize) / 2
  const iconY = (height - iconSize) / 2 - height * 0.05

  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" fill="#1A3A3A"/>
    <svg x="${iconX}" y="${iconY}" width="${iconSize}" height="${iconSize}" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="16" fill="#1A3A3A"/>
      <circle cx="16" cy="16" r="13" fill="none" stroke="#C4A962" stroke-width="0.5" opacity="0.3"/>
      <path d="M16 6C16 6 13 11 13 15C13 19 14.5 22 16 24C17.5 22 19 19 19 15C19 11 16 6 16 6Z" fill="none" stroke="#C4A962" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 12C10 12 11 15 13 17C14.5 18.5 16 19 16 19" fill="none" stroke="#C4A962" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
      <path d="M22 12C22 12 21 15 19 17C17.5 18.5 16 19 16 19" fill="none" stroke="#C4A962" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
      <path d="M12 26C12 26 14 24 16 24C18 24 20 26 20 26" fill="none" stroke="#C4A962" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>
    </svg>
    <text x="${width / 2}" y="${iconY + iconSize + height * 0.06}" text-anchor="middle" fill="#C4A962" font-family="serif" font-size="${Math.round(width * 0.04)}" letter-spacing="0.15em" opacity="0.9">TRANSFORMATIONAL EPICENTER</text>
  </svg>`)
}

async function generate() {
  mkdirSync(splashDir, { recursive: true })

  for (const screen of screens) {
    await sharp(createSplashSvg(screen.width, screen.height))
      .png({ quality: 80 })
      .toFile(join(splashDir, `${screen.name}.png`))
    console.log(`Generated splash/${screen.name}.png (${screen.width}x${screen.height})`)
  }

  console.log('\nAll splash screens generated!')
}

generate().catch(console.error)
