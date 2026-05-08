import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: "*", base: "./src/data/projects" }),
    schema: ({ image }) =>
      z.object({
        image: image(),
        title: z.string(),
        updatedAt: z.date(),
        githubRepository: z.string(),
        githubUrlPath: z.string().optional(),
      }),
  }),
};
