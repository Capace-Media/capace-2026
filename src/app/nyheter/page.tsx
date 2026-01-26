import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { getPage } from "@/lib/fetchers/pages";
import { notFound } from "next/navigation";
export default async function Page() {
  const data = await getPage("nyheter");

  const blocks = data?.blocks?.blocks;
  console.log("news page data:", data);

  if (!data) notFound();
  return (
    <>
      <Hero data={data.pageContent!} />
      <Blocks blocks={blocks} />
    </>
  );
}
