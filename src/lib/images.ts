import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/**/*.{png,jpg,jpeg,webp}',
  { eager: true },
);

export function resolveImage(src: string): ImageMetadata | undefined {
  if (!src.startsWith('/images/')) return undefined;
  const assetPath = `../assets${src}`;
  return images[assetPath]?.default;
}

export const imagePresets = {
  icon: { width: 128, height: 128 },
  'icon-lg': { width: 160, height: 160 },
  screenshot: { width: 280 },
  feature: { width: 480 },
  avatar: { width: 384, height: 384 },
} as const;

export type ImagePreset = keyof typeof imagePresets;
