import Blocks from "@/components/blocks/blocks";
import AllCasesGridWrapper from "@/components/blocks/cases/all-cases-wrapper";
import Hero from "@/components/layout/hero";
import ButtonLink from "@/components/shared/link";
import { env } from "@/env";
import { getPage } from "@/lib/fetchers/pages";
import { notFound } from "next/navigation";

import { Suspense } from "react";

export default async function Page() {
  const data = await getPage("kundcase");
  if (!data?.pageContent) notFound();

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
      <ButtonLink href={env.GOOGLE_REVIEWS}>Lämna ett omdöme nu</ButtonLink>
    </section>
  );
}
