import { getPageSlugs } from "@/lib/fetchers/pages";
import buildSitemapEntries from "@/lib/utilities/build-sitemap-entries";
import type { MetadataRoute } from "next";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pageSlugs = await getPageSlugs();
  if (!pageSlugs || pageSlugs.length === 0) return [];
  return buildSitemapEntries(pageSlugs, 0.9, "yearly");
}
