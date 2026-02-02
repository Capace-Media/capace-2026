import { env } from "@/env";
import { getCaseSlugs } from "@/lib/fetchers/cases";

import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const serviceSlugs = await getCaseSlugs();
  if (!serviceSlugs || serviceSlugs.length === 0) return [];

  return serviceSlugs?.map((item) => {
    return {
      url: `${env.SITE_URL}/kundcase/${item.slug}`,
      lastModified: item.modified || new Date().toISOString(),
      priority: item.slug === "mobile-friend" ? 0.9 : 0.8,
      changeFrequency: "monthly",
    }
  }) as MetadataRoute.Sitemap;

}
