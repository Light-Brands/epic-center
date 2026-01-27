/**
 * Generate property cover images
 *
 * Run with: npx tsx --env-file=.env.local lib/imagen/generate-property-covers.ts
 */

import { generate, saveImage } from "./index";

// Artistic architectural illustration style matching our icons
const PROPERTY_STYLE = `
Elegant hand-drawn architectural illustration style, artistic but refined.
Monochromatic using only deep botanical green (#1F483A) on pure white background.
Organic flowing lines with varying stroke weights for visual interest.
The sophistication of editorial illustration meets architectural rendering.
Soft watercolor-like washes with fine ink line details.
Artistic perspective view showing the property's character and setting.
No text, labels, or UI elements - just pure architectural illustration.
Landscape orientation, 16:9 aspect ratio composition.
`;

const properties = [
  {
    name: "hotel-alea-tulum",
    subject: `Elegant 4-star boutique hotel in Tulum jungle setting. Two-story contemporary tropical architecture with clean lines, large windows, lush palm trees and tropical vegetation surrounding the building. Infinity pool visible. Caribbean sea in the distance. Bohemian luxury aesthetic.`,
  },
  {
    name: "hacienda-caracol",
    subject: `Stunning beachfront luxury hacienda villa on Soliman Bay. Traditional Mexican hacienda architecture with modern touches, terracotta roof tiles, arched doorways, private beach access. Palm trees, white sand beach, turquoise Caribbean waters. Ultra-luxury estate feel.`,
  },
  {
    name: "mini-hotel-cancun",
    subject: `Intimate boutique mini hotel in Cancun hotel zone. Modern tropical minimalist architecture, 3-story building with balconies, rooftop terrace. Urban tropical setting with palm trees, pool area. Contemporary Mexican design with clean geometric forms.`,
  },
  {
    name: "casa-sueno-de-mar",
    subject: `Exclusive residential villa in gated golf community. Contemporary Mediterranean-style villa with curved architecture, large terraces, lush landscaped gardens. Golf course visible in background. Privacy and exclusivity emphasized through high walls and tropical hedges.`,
  },
];

async function main() {
  console.log("Generating property cover images...\n");

  // Ensure the directory exists
  const fs = await import("fs/promises");
  await fs.mkdir("public/images/properties", { recursive: true });

  for (const property of properties) {
    console.log(`Generating ${property.name}...`);

    const prompt = `${property.subject}\n\n${PROPERTY_STYLE}`;
    const result = await generate({ prompt, aspectRatio: "16:9", raw: true });

    if (result.success) {
      const filepath = `public/images/properties/${property.name}.jpg`;
      const saved = await saveImage(result, filepath);
      if (saved) {
        console.log(`  ✓ Saved to ${filepath}`);
      } else {
        console.error(`  ✗ Failed to save ${property.name}`);
      }
    } else {
      console.error(`  ✗ Generation failed: ${result.error}`);
    }
  }

  console.log("\nDone!");
}

main().catch(console.error);
