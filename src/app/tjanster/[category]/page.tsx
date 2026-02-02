import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { getPageSeo } from "@/lib/fetchers/seo";
import { getServicePage } from "@/lib/fetchers/services";
import generatePageSeo from "@/lib/utilities/seo";
import { notFound } from "next/navigation";

export const generateMetadata = async (
  props: PageProps<"/tjanster/[category]">,
) => {
  const { category } = await props.params;
  const seo = await getPageSeo(category);
  return generatePageSeo(seo);
};

export default async function Page(props: PageProps<"/tjanster/[category]">) {
  const { category } = await props.params;

  const data = await getServicePage(category);
  if (!data || !data.pageContent) notFound();

  return (
    <div>
      <Hero data={data?.pageContent} />
      <Blocks blocks={data?.blocks?.blocks} />
    </div>
  );
}
