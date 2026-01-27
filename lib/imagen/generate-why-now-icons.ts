/**
 * Generate icons for the "Why Now?" section
 *
 * Run with: npx tsx lib/imagen/generate-why-now-icons.ts
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
  {
    name: "scientific-validation",
    subject: "Artistic brain illustration with elegant flowing neural pathways, organic curves suggesting discovery and breakthrough",
  },
  {
    name: "regulatory-momentum",
    subject: "Artistic globe illustration with flowing organic meridian lines, sense of movement and global connection",
  },
  {
    name: "demand-explosion",
    subject: "Artistic upward flowing growth visualization, organic ascending lines suggesting abundance and expansion",
  },
];

async function main() {
  console.log("Generating Why Now? section icons...\n");

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
