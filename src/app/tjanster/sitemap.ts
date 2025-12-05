import { env } from "@/env";
import { getAllServiceCategoriesSlugs } from "@/lib/fetchers/services";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = env.SITE_URL;
  const categorySlugs = await getAllServiceCategoriesSlugs();
  if (!categorySlugs || categorySlugs.length === 0) return [];

  const entries: MetadataRoute.Sitemap = [];

  for (const category of categorySlugs) {
    if (!category?.slug) continue;

    // category page
    entries.push({
      url: `${url}/tjanster/${category.slug}`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "yearly",
    });

    // service pages inside the category
    const services = category.services?.nodes;
    if (services && services.length > 0) {
      for (const service of services) {
        if (!service?.slug) continue;
        entries.push({
          url: `${url}/tjanster/${category.slug}/${service.slug}`,
          lastModified: new Date(),
          changeFrequency: "yearly",
          priority: 0.9,
        });
      }
    }
  }

  return entries;
}
