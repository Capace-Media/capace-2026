import Blocks from "@/components/blocks/blocks";
import AllCasesGridWrapper from "@/components/blocks/cases/all-cases-wrapper";
import Hero from "@/components/layout/hero";
import { Button } from "@/components/ui/button";
import { getPage } from "@/lib/fetchers/pages";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Page() {
  const data = await getPage("kundcase");
  if (!data) notFound();

  return (
    <section className="section flex w-full flex-col items-center justify-center gap-8">
      <Hero data={data.pageContent} />
      {/* TODO fixa loading */}
      <Suspense fallback={<div>laddar...</div>}>
        <AllCasesGridWrapper />
      </Suspense>
      <Blocks blocks={data.blocks?.blocks} />
      <div className="flex flex-col items-center">
        <p className="text-xl font-medium">
          Är du kund men har ännu inte lämnat ett omdöme?
        </p>
        <p className="font-caveat text-accent text-4xl">
          Klicka på knappen nedan
        </p>
      </div>
      <Button withArrow className={"mb-30"}>
        Lämna ett omdöme nu
      </Button>
    </section>
  );
}
