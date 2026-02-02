import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { env } from "@/env";
import { getPage } from "@/lib/fetchers/pages";
import { getPageSeo } from "@/lib/fetchers/seo";
import generatePageSeo from "@/lib/utilities/seo";
import { notFound } from "next/navigation";

export const generateMetadata = async () => {
  const seo = await getPageSeo("kontakt");
  return generatePageSeo(seo);
};

export default async function Page() {
  const data = await getPage("kontakt");
  const blocks = data?.blocks?.blocks;
  if (!data?.pageContent) notFound();

  return (
    <>
      <Hero data={data.pageContent} />
      <Blocks blocks={blocks} />
      <section className="section end-section">
        <iframe
          width="100%"
          height="750"
          className="mx-auto overflow-hidden rounded-xl"
          src={`https://www.google.com/maps/embed/v1/place?key=${env.GOOGLE_API_KEY}&q=Capace+Media+Group+AB`}
        />
      </section>
    </>
  );
}
