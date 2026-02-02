import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { getPage } from "@/lib/fetchers/pages";
import { getPageSeo } from "@/lib/fetchers/seo";
import generatePageSeo from "@/lib/utilities/seo";
import { notFound } from "next/navigation";

export const generateMetadata = async () => {
  const seo = await getPageSeo("cookies");
  return generatePageSeo(seo);
};

export default async function Page() {
  const data = await getPage("cookies");
  const blocks = data?.blocks?.blocks;
  if (!data?.pageContent) notFound();

  return (
    <>
      <Hero data={data.pageContent} />
      <Blocks blocks={blocks} />
    </>
  );
}
