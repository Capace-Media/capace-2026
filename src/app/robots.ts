import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://capace.se";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/wp-admin/", "/actions"],
    },
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/nyheter/sitemap.xml`,
      `${baseUrl}/kundcase/sitemap.xml`,
      `${baseUrl}/om-oss/sitemap.xml`,
      `${baseUrl}/tjanster/sitemap.xml`,
    ],
  };
}
