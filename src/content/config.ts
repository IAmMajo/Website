import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
      image: image(),
      title: z.string(),
      updatedAt: z.date(),
      githubRepository: z.string(),
      githubUrlPath: z.string().optional(),
    }),
  }),
};
