import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    type: z.enum(['indie', 'professional', 'community']),
    platforms: z.array(z.string()),
    tags: z.array(z.string()),
    links: z
      .object({
        github: z.string().optional(),
        playStore: z.string().optional(),
        appStore: z.string().optional(),
        website: z.string().optional(),
        blog: z.string().optional(),
      })
      .optional(),
    images: z.array(z.string()),
    demo: z.string().nullable().optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    start: z.string(),
    end: z.string(),
    order: z.number(),
    tags: z.array(z.string()),
    highlight: z.string(),
  }),
});

export const collections = { projects, experience };
