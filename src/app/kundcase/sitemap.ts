import { env } from "@/env";
import { getAllCaseSlugs } from "@/lib/fetchers/cases";
import type { MetadataRoute } from "next";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = env.SITE_URL;
  const slugs = await getAllCaseSlugs();
  if (!slugs) return [];

  return [
    ...slugs.map((slug) => ({
      url: `${url}/kundcase/${slug.slug}`,
      lastModified: new Date(),
      priority: 0.9,
    })),
  ];
}
