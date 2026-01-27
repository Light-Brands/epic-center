/**
 * Generate healing transformation image in our brand style
 *
 * Run with: npx tsx --env-file=.env.local lib/imagen/generate-healing-v2.ts
 */

import { generate, saveImage } from "./index";

const BRAND_STYLE = `
Elegant hand-drawn illustration style, artistic but refined.
Monochromatic using only deep botanical green (#1F483A) on pure white background.
Organic flowing lines with varying stroke weights for visual interest.
Soft watercolor-like washes with fine ink line details.
The sophistication of editorial illustration meets spiritual depth.
No text, labels, or UI elements - just pure artistic illustration.
`;

async function main() {
  console.log("Generating healing transformation image...\n");

  const prompt = `
A powerful visual metaphor of transformation and healing.
Left side: fragmented, scattered pieces - broken shards, disconnected dots, chaotic lines dispersing outward.
Right side: the same elements coming together into a whole, unified form - a complete human silhouette or profile emerging.
The transition flows naturally from chaos to wholeness, from broken to integrated.
Flowing organic energy connects the fragments as they reform.
Botanical elements (leaves, vines, roots) weave through, representing natural healing.
The composition tells the story: what was shattered becomes whole again.
Square composition, balanced but with clear left-to-right transformation narrative.

${BRAND_STYLE}
`;

  const result = await generate({ prompt, aspectRatio: "1:1", raw: true });

  if (result.success) {
    const saved = await saveImage(result, "public/healing-transformation.png");
    console.log(saved ? "✓ Saved to public/healing-transformation.png" : "✗ Failed to save");
  } else {
    console.error("✗ Generation failed:", result.error);
  }
}

main().catch(console.error);
