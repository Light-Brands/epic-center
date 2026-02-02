# Reference Images for Team Portraits

Place reference photos for each team member in this folder.

## Required Files

- `nicholas-courchesne.jpg` (or .png, .webp)
- `jason-sparks.jpg`
- `dan-lawless.jpg`
- `mariana-hoyo.jpg`
- `eyob-mebrahtu.jpg`
- `julien-leblanc.jpg`

## Supported Formats

- JPG/JPEG
- PNG
- WebP

## Usage

Once you've added the reference photos, run:

```bash
npx tsx --env-file=.env.local lib/imagen/generate-team-images.ts
```

The script will generate botanical green monochromatic portrait illustrations that match the reference photos while maintaining the same artistic style as your property images.
