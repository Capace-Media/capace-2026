import { env } from "@/env";
import { getPageSlugs } from "@/lib/fetchers/pages";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pageSlugs = await getPageSlugs();
  if (!pageSlugs || pageSlugs.length === 0) return [];
  return pageSlugs.map((item) => {
    const noSlashAtTheEndOfTheOriginalUri = item?.uri
      ?.replace(/ /g, "")
      .replace(/\/$/, "");
    return {
      url: `${env.SITE_URL}${noSlashAtTheEndOfTheOriginalUri}`,
      lastModified: item?.modified || new Date().toISOString(),
      priority: 0.9,
      changeFrequency: "yearly",
    };
  }) as MetadataRoute.Sitemap;
}
