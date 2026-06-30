import { env } from "@/env";
import { getEmployeeSlugs } from "@/lib/fetchers/employees";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const employeeSlugs = await getEmployeeSlugs();
  if (!employeeSlugs || employeeSlugs.length === 0) return [];
  return employeeSlugs.map((item) => {
    const noSlashAtTheEndOfTheOriginalUri = item?.uri
      ?.replace(/ /g, "")
      .replace(/\/$/, "");
    return {
      url: `${env.SITE_URL}${noSlashAtTheEndOfTheOriginalUri}`,
      lastModified: item?.modified || new Date().toISOString(),
      priority: 0.6,
      changeFrequency: "yearly",
    };
  }) as MetadataRoute.Sitemap;
}
