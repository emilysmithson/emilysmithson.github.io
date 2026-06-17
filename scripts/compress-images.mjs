import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = new URL('../src/assets/images', import.meta.url).pathname;
const MAX_WIDTH = 1200;
const IMAGE_PATTERN = /\.(png|jpe?g)$/i;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (IMAGE_PATTERN.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function compressImage(filePath) {
  const original = await readFile(filePath);
  const metadata = await sharp(original).metadata();
  let pipeline = sharp(original);

  if (metadata.width && metadata.width > MAX_WIDTH) {
    pipeline = pipeline.resize(MAX_WIDTH, null, {
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  const isPng = filePath.toLowerCase().endsWith('.png');
  const output = isPng
    ? await pipeline.png({ compressionLevel: 9, effort: 10 }).toBuffer()
    : await pipeline.jpeg({ quality: 85, mozjpeg: true }).toBuffer();

  if (output.length >= original.length) {
    return { filePath, saved: 0, skipped: true };
  }

  await writeFile(filePath, output);
  return { filePath, saved: original.length - output.length, skipped: false };
}

function formatBytes(bytes) {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }
  return `${Math.round(bytes / 1024)} KB`;
}

const files = await walk(ROOT);
let totalSaved = 0;
let compressedCount = 0;

console.log(`Compressing ${files.length} images in ${ROOT}...`);

for (const filePath of files) {
  const before = (await stat(filePath)).size;
  const result = await compressImage(filePath);
  const after = (await stat(filePath)).size;

  if (result.skipped) {
    console.log(`  skip ${path.relative(ROOT, filePath)} (${formatBytes(before)})`);
    continue;
  }

  compressedCount += 1;
  totalSaved += result.saved;
  console.log(
    `  done ${path.relative(ROOT, filePath)}: ${formatBytes(before)} -> ${formatBytes(after)}`,
  );
}

console.log(
  `\nCompressed ${compressedCount}/${files.length} files, saved ${formatBytes(totalSaved)} total.`,
);
