import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';

// Originals stay outside public/. Only the generated, web-sized assets ship.
const source = process.argv[2];
if (!source) throw new Error('Usage: npm run images:generate -- /path/to/portraits');
const destination = resolve('public/images/portraits');
await mkdir(destination, { recursive: true });
const portraits = [
  { name: 'hero', file: '015', widths: [768, 1280, 1920, 2560] },
  { name: 'hero-mobile', file: '015', widths: [480, 768, 1080], crop: { left: 1600, top: 300, width: 3700, height: 3700 } },
  { name: 'about', file: '009', widths: [480, 800, 1200] },
  { name: 'contact', file: '027', widths: [480, 800, 1200] },
];
const manifest = {};
for (const portrait of portraits) {
  const original = join(source, `ANTOINE_HD ${portrait.file}.jpg`);
  const metadata = await sharp(original).metadata();
  const width = portrait.crop?.width ?? metadata.width;
  const height = portrait.crop?.height ?? metadata.height;
  manifest[portrait.name] = { width, height, widths: portrait.widths };
  for (const size of portrait.widths) {
    for (const format of ['avif', 'webp']) {
      let pipeline = sharp(original).rotate();
      if (portrait.crop) pipeline = pipeline.extract(portrait.crop);
      await pipeline.resize({ width: size, withoutEnlargement: true })
        .toColourspace('srgb')
        .toFormat(format, { quality: format === 'avif' ? 65 : 85, effort: 6 })
        .toFile(join(destination, `${portrait.name}-${size}.${format}`));
    }
  }
  console.log(`${portrait.name}: ${portrait.widths.join(', ')}px — AVIF + WebP`);
}
await writeFile(resolve('src/components/portraits.json'), JSON.stringify(manifest, null, 2) + '\n');
