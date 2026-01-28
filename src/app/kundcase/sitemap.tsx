import { getCaseSlugs } from "@/lib/fetchers/cases";
import buildSitemapEntries from "@/lib/utilities/build-sitemap-entries";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const serviceSlugs = await getCaseSlugs();
  if (!serviceSlugs || serviceSlugs.length === 0) return [];
  return buildSitemapEntries(serviceSlugs, 0.8, "monthly");
}
