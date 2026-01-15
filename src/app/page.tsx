import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { getPage } from "@/lib/fetchers/pages";
import { notFound } from "next/navigation";

export default async function Page() {
  const data = await getPage("hem");

  const blocks = data?.blocks?.blocks;
  if (!data) notFound();
  return (
    <>
      <Hero data={data.pageContent} />
      <Blocks blocks={blocks} />
    </>
  );
}
