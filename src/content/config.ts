import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    author: z.string().optional().default('Voice Recognition Australia'),
    heroImage: z.string().optional().default(''),
    context: z.string().optional().default('descriptive'),
  }),
});

export const collections = { blog };
