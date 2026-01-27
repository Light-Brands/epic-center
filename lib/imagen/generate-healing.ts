/**
 * Generate the healing transformation image for The Solution section
 *
 * Run with: npx tsx lib/imagen/generate-healing.ts
 */

import { generate, generateStyled, quickPrompt, saveImage } from "./index";

async function main() {
  console.log("Generating healing transformation image...\n");

  // Use the portrait style with meditation variant for transformational healing imagery
  const result = await generateStyled(
    "portrait",
    "Person experiencing deep transformational healing, surrounded by soft botanical elements and warm natural light, serene expression of inner peace and hope",
    "meditation",
    "1:1"
  );

  if (result.success) {
    const saved = await saveImage(result, "public/healing-transformation.png");
    if (saved) {
      console.log("✓ Image saved to public/healing-transformation.png");
    } else {
      console.error("✗ Failed to save image");
    }
  } else {
    console.error("✗ Generation failed:", result.error);
  }
}

main().catch(console.error);
