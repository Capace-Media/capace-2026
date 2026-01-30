import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { env } from "@/env";
import { getPage } from "@/lib/fetchers/pages";
import { notFound } from "next/navigation";
export default async function Page() {
  const data = await getPage("kontakt");
  const blocks = data?.blocks?.blocks;
  if (!data?.pageContent) notFound();

  return (
    <>
      <Hero data={data.pageContent} />
      <Blocks blocks={blocks} />
      <iframe
        width="100%"
        height="750"
        className="section end-section"
        src={`https://www.google.com/maps/embed/v1/place?key=${env.GOOGLE_API_KEY}&q=Capace+Media+Group+AB`}
      />
    </>
  );
}
