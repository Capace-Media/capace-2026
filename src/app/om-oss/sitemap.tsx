import { getEmployeeSlugs } from "@/lib/fetchers/employees";
import buildSitemapEntries from "@/lib/utilities/build-sitemap-entries";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const employeeSlugs = await getEmployeeSlugs();
  if (!employeeSlugs || employeeSlugs.length === 0) return [];
  return buildSitemapEntries(employeeSlugs, 0.6, "yearly");
}
