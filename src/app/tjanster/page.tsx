import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { getPage } from "@/lib/fetchers/pages";
import { getPageSeo } from "@/lib/fetchers/seo";
import generatePageSeo from "@/lib/utilities/seo";
import { notFound } from "next/navigation";

export const generateMetadata = async () => {
  const seo = await getPageSeo("tjanster");
  return generatePageSeo(seo);
};

export default async function Page() {
  const data = await getPage("/tjanster");
  if (!data || !data.pageContent) notFound();
  return (
    <section>
      <Hero data={data.pageContent} />
      <Blocks blocks={data.blocks?.blocks} />
    </section>
  );
}
