import { defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  blog: defineCollection({ schema: docsSchema() }),
  marketplace: defineCollection({ type: "data" }),
  marketplaceTags: defineCollection({ type: "data" }),
};
