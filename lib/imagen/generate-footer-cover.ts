/**
 * Generate footer cover image to replace video background
 *
 * Run with: npx tsx lib/imagen/generate-footer-cover.ts
 */

import { generate, saveImage } from "./index";

async function main() {
  console.log("Generating footer cover image...\n");

  const prompt = `
Pure black background with subtle organic flowing forms barely visible.
Abstract, minimal, elegant. Like smoke or silk in darkness.
Very subtle texture - almost imperceptible organic movement.
Deep blacks with hints of very dark green (#0a1a15) in the shadows.
Sophisticated, luxurious, meditative emptiness.
No obvious subjects - pure abstraction, pure darkness with depth.
The elegance of nothing. Void with presence.
  `.trim();

  const result = await generate({ prompt, aspectRatio: "16:9", raw: true });

  if (result.success) {
    const saved = await saveImage(result, "public/footer-cover.png");
    if (saved) {
      console.log("✓ Saved to public/footer-cover.png");
    } else {
      console.error("✗ Failed to save image");
    }
  } else {
    console.error("✗ Generation failed:", result.error);
  }
}

main().catch(console.error);
