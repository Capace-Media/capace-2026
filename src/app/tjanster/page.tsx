import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { getPage } from "@/lib/fetchers/pages";
import { notFound } from "next/navigation";

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
