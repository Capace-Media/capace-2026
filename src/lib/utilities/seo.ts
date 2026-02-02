import type { getPageSeo } from "../fetchers/seo";

export default function generatePageSeo(
  seo: Awaited<ReturnType<typeof getPageSeo>>,
) {
  return {
    title: seo?.title,
    description: seo?.metaDesc,
    openGraph: {
      title: seo?.opengraphTitle || seo?.title,
      description: seo?.opengraphDescription || seo?.metaDesc,
      images: seo?.opengraphImage?.mediaItemUrl
        ? [seo.opengraphImage.mediaItemUrl]
        : [],
      url: seo?.canonical,
    },
    alternates: {
      canonical: seo?.canonical,
    },
  };
}
