/**
 * Generate section icons from a config file.
 * Portable: run from this folder or from repo root with path to config.
 *
 * Usage: npx tsx generate-section-icons.ts [config-file]
 * Config file exports: icons { name, subject }[], optional iconStyle?, optional outputDir?
 * Default outputDir: public/icons
 */

import fs from "fs/promises";
import path from "path";
import { generate, saveImage } from "./index";

const DEFAULT_ICON_STYLE = `
Elegant hand-drawn illustration style, artistic but refined.
Monochromatic using only deep botanical green (#1F483A) on pure white background.
Organic flowing lines with varying stroke weights for visual interest.
Subtle artistic details - not flat or corporate, but not overly complex.
The sophistication of editorial illustration meets icon simplicity.
No background shapes, circles, or containers - just the icon floating on white.
Centered composition with balanced negative space.
`.trim();

const DEFAULT_OUTPUT_DIR = "public/icons";

interface IconSpec {
  name: string;
  subject: string;
}

interface Config {
  icons: IconSpec[];
  iconStyle?: string;
  outputDir?: string;
}

async function loadConfig(configPath: string): Promise<Config> {
  const resolved = path.resolve(process.cwd(), configPath);
  const mod = await import(resolved);
  const icons = mod.icons;
  if (!Array.isArray(icons) || icons.length === 0) {
    throw new Error(`Config must export a non-empty "icons" array. Got: ${resolved}`);
  }
  return {
    icons,
    iconStyle: mod.iconStyle ?? DEFAULT_ICON_STYLE,
    outputDir: mod.outputDir ?? DEFAULT_OUTPUT_DIR,
  };
}

async function main() {
  const configPath = process.argv[2] ?? "icons-config.ts";
  const config = await loadConfig(configPath);

  const { icons, iconStyle, outputDir } = config;
  await fs.mkdir(outputDir, { recursive: true });
  console.log(`Generating ${icons.length} section icons → ${outputDir}\n`);

  for (const icon of icons) {
    console.log(`Generating ${icon.name}...`);

    const prompt = `${icon.subject}. ${iconStyle}`;
    const result = await generate({ prompt, aspectRatio: "1:1", raw: true });

    if (result.success) {
      const filepath = path.join(outputDir, `${icon.name}.png`);
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

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
