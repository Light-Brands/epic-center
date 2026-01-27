/**
 * Generate icons for the Market page
 *
 * Run with: npx tsx lib/imagen/generate-market-icons.ts
 */

import { generate, saveImage } from "./index";

// Artistic monochromatic icons on white background
const ICON_STYLE = `
Elegant hand-drawn illustration style, artistic but refined.
Monochromatic using only deep botanical green (#1F483A) on pure white background.
Organic flowing lines with varying stroke weights for visual interest.
Subtle artistic details - not flat or corporate, but not overly complex.
The sophistication of editorial illustration meets icon simplicity.
No background shapes, circles, or containers - just the icon floating on white.
Centered composition with balanced negative space.
`;

const icons = [
  // Market Size Breakdown icons
  {
    name: "market-depression",
    subject: "Artistic brain illustration with gentle flowing curves suggesting neural pathways and mental health",
  },
  {
    name: "market-anxiety",
    subject: "Artistic heart illustration with organic flowing lines, suggesting emotional wellbeing and care",
  },
  {
    name: "market-addiction",
    subject: "Artistic pill or capsule breaking apart with flowing organic lines, transformation and release",
  },
  {
    name: "market-affected",
    subject: "Artistic group of people silhouettes with flowing organic connection lines, community and shared experience",
  },
  // Psychedelic Therapy Revolution icons
  {
    name: "market-efficacy",
    subject: "Artistic pulse or heartbeat line with elegant flowing curves, clinical precision meets organic flow",
  },
  {
    name: "market-regulatory",
    subject: "Artistic globe with flowing organic meridian lines, worldwide movement and progress",
  },
  {
    name: "market-growth",
    subject: "Artistic upward flowing growth chart with organic ascending curves, prosperity and expansion",
  },
];

async function main() {
  console.log("Generating Market page icons...\n");

  for (const icon of icons) {
    console.log(`Generating ${icon.name}...`);

    const prompt = `${icon.subject}. ${ICON_STYLE}`;
    const result = await generate({ prompt, aspectRatio: "1:1", raw: true });

    if (result.success) {
      const filepath = `public/icons/${icon.name}.png`;
      const saved = await saveImage(result, filepath);
      if (saved) {
        console.log(`  ✓ Saved to ${filepath}`);
      } else {
        console.error(`  ✗ Failed to save ${icon.name}`);
      }
    } else {
      console.error(`  ✗ Generation failed: ${result.error}`);
    }
  }

  console.log("\nDone!");
}

main().catch(console.error);
