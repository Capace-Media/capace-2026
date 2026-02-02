import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { getServiceSeo } from "@/lib/fetchers/seo";
import { getServicePage } from "@/lib/fetchers/services";
import generatePageSeo from "@/lib/utilities/seo";
import { notFound } from "next/navigation";

export const generateMetadata = async (
  props: PageProps<"/tjanster/[category]/[service]">,
) => {
  const { service } = await props.params;
  const seo = await getServiceSeo(service);
  return generatePageSeo(seo);
};

export default async function Page(
  props: PageProps<"/tjanster/[category]/[service]">,
) {
  const { service } = await props.params;

  const data = await getServicePage(service);
  if (!data || !data.pageContent) notFound();

  return (
    <div className="">
      <Hero data={data.pageContent} />
      <section className="section pb-0">
        <h1 className="orange-dot">{data.title}</h1>
      </section>
      <Blocks blocks={data.blocks?.blocks} />
    </div>
  );
}
