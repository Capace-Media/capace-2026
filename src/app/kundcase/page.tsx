import Blocks from "@/components/blocks/blocks";
import AllCasesGridWrapper from "@/components/blocks/cases/all-cases-wrapper";
import Hero from "@/components/layout/hero";
import { getPage } from "@/lib/fetchers/pages";
import { notFound } from "next/navigation";

export default async function Page() {
  const data = await getPage("kundcase");
  if (!data) notFound();

  return (
    <section className="section flex w-full flex-col justify-center">
      <Hero data={data.pageContent} />
      <AllCasesGridWrapper />
      <Blocks blocks={data.blocks?.blocks} />
    </section>
  );
}
