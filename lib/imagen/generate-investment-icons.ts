/**
 * Generate icons for the "Investment Opportunity" section
 *
 * Run with: npx tsx lib/imagen/generate-investment-icons.ts
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
    name: "project-cost",
    subject: "Artistic building or foundation illustration with elegant architectural lines, sense of solid investment and structure",
  },
  {
    name: "year-5-revenue",
    subject: "Artistic upward trending line with flowing organic curves, growth and prosperity visualization",
  },
  {
    name: "project-irr",
    subject: "Artistic target or bullseye with elegant concentric flowing lines, precision and achievement",
  },
  {
    name: "moic",
    subject: "Artistic shield or protective emblem with flowing organic details, security and multiplied returns",
  },
];

async function main() {
  console.log("Generating Investment Opportunity section icons...\n");

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
