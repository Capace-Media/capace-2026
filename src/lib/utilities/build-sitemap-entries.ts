import { env } from "@/env";
import type { MetadataRoute } from "next";

export default function buildSitemapEntries(
  slugs: { uri?: string | null; modified?: string | null }[],
  priority: number,
  changeFrequency:
    | "yearly"
    | "monthly"
    | "daily"
    | "always"
    | "never"
    | "weekly"
    | "weekly",
): MetadataRoute.Sitemap {
  return slugs
    .filter((category) => category?.uri)
    .map((category) => ({
      url: `${env.SITE_URL}${category!.uri}`,
      lastModified: category.modified || new Date(),
      priority: priority,
      changeFrequency: changeFrequency,
    }));
}
