import { env } from "@/env";
import type { MetadataRoute } from "next";
// TODO Add all slugs
export default function sitemap(): MetadataRoute.Sitemap {
  const url = env.SITE_URL;

  return [
    {
      url: `${url}`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "monthly",
    },
    {
      url: `${url}/tjanster`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "yearly",
    },
    {
      url: `${url}/om-oss`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "yearly",
    },
    {
      url: `${url}/kundcase`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "monthly",
    },
  ];
}
