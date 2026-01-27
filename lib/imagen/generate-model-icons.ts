/**
 * Generate icons for the Model page
 *
 * Run with: npx tsx lib/imagen/generate-model-icons.ts
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
    name: "model-leaf",
    subject: "Artistic botanical leaf illustration with elegant flowing veins, organic plant medicine symbolism",
  },
  {
    name: "model-brain",
    subject: "Artistic brain illustration with flowing neural pathways, cognition and consciousness",
  },
  {
    name: "model-sparkles",
    subject: "Artistic starburst or sparkle cluster with flowing organic rays, mystical transformation and awakening",
  },
  {
    name: "model-activity",
    subject: "Artistic pulse wave with elegant flowing curves, vitality and bio-optimization",
  },
  {
    name: "model-shield",
    subject: "Artistic shield emblem with elegant organic curves, medical protection and safety",
  },
  {
    name: "model-heart",
    subject: "Artistic anatomical heart with flowing organic lines, emotional preparation and care",
  },
  {
    name: "model-users",
    subject: "Artistic group of figures with flowing connection lines, community integration and support",
  },
  {
    name: "model-clock",
    subject: "Artistic timepiece with elegant flowing hands and organic details, duration and timing",
  },
];

async function main() {
  console.log("Generating Model page icons...\n");

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
