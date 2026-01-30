import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { getPage } from "@/lib/fetchers/pages";
import { getPageSeo } from "@/lib/fetchers/seo";
import generatePageSeo from "@/lib/utilities/seo";
import { notFound } from "next/navigation";

export const generateMetadata = async () => {
  const seo = await getPageSeo("/");
  return generatePageSeo(seo);
};

export default async function Page() {
  const data = await getPage("hem");

  const blocks = data?.blocks?.blocks;
  if (!data || !data.pageContent) notFound();
  return (
    <>
      <Hero data={data.pageContent} />
      <Blocks blocks={blocks} />
    </>
  );
}
