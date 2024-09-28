import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

const customDocsSchema = () => {
  return docsSchema({
    extend: z.object({
      relatedApps: z.array(z.string()).optional(),
      relatedTags: z.array(z.string()).optional(),
    }),
  });
};

export const collections = {
  docs: defineCollection({ schema: customDocsSchema() }),
  blog: defineCollection({ schema: customDocsSchema() }),
  marketplace: defineCollection({ type: "data" }),
  marketplaceTags: defineCollection({ type: "data" }),
  alternatives: defineCollection({ type: "data" }),
};
