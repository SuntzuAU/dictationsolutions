import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    author: z.string().optional().default('Voice Recognition Australia'),
    heroImage: z.string().optional().default(''),
    heroImageAlt: z.string().optional().default(''),
    breakImage1: z.string().optional().default(''),
    breakImage1Alt: z.string().optional().default(''),
    breakImage2: z.string().optional().default(''),
    breakImage2Alt: z.string().optional().default(''),
    context: z.string().optional().default('descriptive'),
    internalLinks: z.array(z.object({ to: z.string(), anchor: z.string() })).optional(),
    externalLinks: z.array(z.object({ to: z.string(), anchor: z.string(), url: z.string() })).optional(),
  }),
});

export const collections = { blog };
