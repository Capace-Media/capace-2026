import Image from "next/image";
import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { Button } from "@/components/ui/button";
import { getPage } from "@/lib/fetchers/pages";
import Link from "next/link";
import { notFound } from "next/navigation";
import ButtonLink from "@/components/shared/link";

export default async function Page() {
  const data = await getPage("/om-oss");
  if (!data) notFound();
  console.log("om oss data:", data);

  return (
    <div>
      <Hero data={data.pageContent} />
      <Blocks blocks={data.blocks?.blocks} />
      <section className="section relative mb-40 items-center overflow-hidden">
        <h2 className="text-3xl font-bold">Vill du bli en del av Capace?</h2>
        <p className="prose prose-invert text-center">
          På Capace Media handlar det om att växa och skapa tillsammans. Vi
          välkomnar nya idéer och perspektiv. Är du redo för nästa steg? Kolla
          in våra lediga tjänster och hör gärna av dig.
        </p>

        <ButtonLink href={"/karriar/lediga-tjanster"}>
          Se lediga tjänster
        </ButtonLink>

        <div
          className="absolute right-0 hidden aspect-auto h-80 w-80 translate-x-[15%] lg:block"
          aria-hidden
        >
          <Image
            src={"/stickers/sticker-group.webp"}
            fill
            className="object-contain"
            alt={""}
            sizes="20vw"
          />
        </div>
      </section>
    </div>
  );
}
