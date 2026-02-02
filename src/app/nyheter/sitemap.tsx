import { getNewsSlugs } from "@/lib/fetchers/news";
import buildSitemapEntries from "@/lib/utilities/build-sitemap-entries";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const newsSlugs = await getNewsSlugs();
  if (!newsSlugs || newsSlugs.length === 0) return [];
  return buildSitemapEntries(newsSlugs, 0.8, "monthly");
}
