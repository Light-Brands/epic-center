import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join } from 'path';

const GALLERY_DIR = 'public/gallery';
const OUTPUT_DIR = 'public/gallery-optimized';
const THUMBS_DIR = join(OUTPUT_DIR, 'thumbs');
const FULL_DIR = join(OUTPUT_DIR, 'full');

const THUMB_WIDTH = 400;
const FULL_WIDTH = 1400;
const THUMB_QUALITY = 75;
const FULL_QUALITY = 80;

async function optimizeImages() {
  // Create output directories
  await mkdir(THUMBS_DIR, { recursive: true });
  await mkdir(FULL_DIR, { recursive: true });

  const files = (await readdir(GALLERY_DIR)).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  console.log(`Found ${files.length} images to optimize...\n`);

  let totalOriginal = 0;
  let totalThumb = 0;
  let totalFull = 0;
  let processed = 0;

  // Process in batches of 10 for performance
  const BATCH_SIZE = 10;
  for (let i = 0; i < files.length; i += BATCH_SIZE) {
    const batch = files.slice(i, i + BATCH_SIZE);

    await Promise.all(batch.map(async (file) => {
      const inputPath = join(GALLERY_DIR, file);
      const baseName = file.replace(/\.(jpg|jpeg|png)$/i, '');

      try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();
        const originalSize = metadata.size || 0;
        totalOriginal += originalSize;

        // Create thumbnail (WebP)
        const thumbResult = await sharp(inputPath)
          .resize(THUMB_WIDTH, null, { withoutEnlargement: true })
          .webp({ quality: THUMB_QUALITY })
          .toFile(join(THUMBS_DIR, `${baseName}.webp`));
        totalThumb += thumbResult.size;

        // Create full-size optimized (WebP)
        const fullResult = await sharp(inputPath)
          .resize(FULL_WIDTH, null, { withoutEnlargement: true })
          .webp({ quality: FULL_QUALITY })
          .toFile(join(FULL_DIR, `${baseName}.webp`));
        totalFull += fullResult.size;

        processed++;
        if (processed % 10 === 0 || processed === files.length) {
          console.log(`  Processed ${processed}/${files.length} images...`);
        }
      } catch (err) {
        console.error(`  Error processing ${file}:`, err.message);
      }
    }));
  }

  const toMB = (bytes) => (bytes / 1024 / 1024).toFixed(1);
  const toKB = (bytes) => (bytes / 1024).toFixed(0);

  console.log('\n========================================');
  console.log('  OPTIMIZATION COMPLETE');
  console.log('========================================');
  console.log(`  Images processed: ${processed}/${files.length}`);
  console.log(`  Original total:   ${toMB(totalOriginal)} MB`);
  console.log(`  Thumbnails total: ${toMB(totalThumb)} MB (avg ${toKB(totalThumb / processed)} KB each)`);
  console.log(`  Full-size total:  ${toMB(totalFull)} MB (avg ${toKB(totalFull / processed)} KB each)`);
  console.log(`  Combined output:  ${toMB(totalThumb + totalFull)} MB`);
  console.log(`  Reduction:        ${((1 - (totalThumb + totalFull) / totalOriginal) * 100).toFixed(1)}%`);
  console.log('========================================');
}

optimizeImages().catch(console.error);
