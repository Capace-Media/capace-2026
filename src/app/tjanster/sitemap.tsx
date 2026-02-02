import { env } from "@/env";
import { getServiceCategorySlugs } from "@/lib/fetchers/services";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const serviceSlugs = await getServiceCategorySlugs();

  return serviceSlugs?.map((item) => {
    const noSlashAtTheEndOfTheOriginalUri = item?.uri?.replace(/ /g, "").replace(/\/$/, "");
    return {
      url: `${env.SITE_URL}${noSlashAtTheEndOfTheOriginalUri}`,
      lastModified: item?.modified || new Date().toISOString(),
      priority: 0.9,
      changeFrequency: "yearly",
    }
  }) as MetadataRoute.Sitemap;
}