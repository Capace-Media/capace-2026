"use client";
import { type FragmentType, useFragment } from "@/graphql/fragment-masking";
import { BlocksFragment } from "@/lib/queries/fragments";
import HeadingWithAccent from "../../shared/heading-with-accent";
import Image from "next/image";
import { Button } from "../../ui/button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CasesGrid from "./cases-grid";
gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
  data: FragmentType<typeof BlocksFragment>;
}

export default function CasesGridWrapper(props: Props) {
  const block = useFragment(BlocksFragment, props.data);

  if (block.__typename !== "BlocksBlocksCaseCardGridLayout") return null;

  return (
    <section
      className="section cases-container relative flex flex-col items-center"
      aria-labelledby="cases-heading"
    >
      <div id="cases-heading">
        <HeadingWithAccent
          accentedHeading={block.accentHeading?.accent || ""}
          mainHeading={block.accentHeading?.main || ""}
        />
      </div>
      <CasesGrid data={block.cases?.nodes} compact={!!block.compact} />
      <div className="py-12">
        <Button withArrow>Se fler kundprojekt</Button>
      </div>
      {!block.compact && (
        <div
          aria-hidden
          className="absolute right-0 bottom-0 ml-auto hidden aspect-square w-60 translate-x-[25%] md:block md:w-80"
        >
          <Image
            src={"/stickers/stickers-capace.webp"}
            alt={""}
            aria-hidden
            fill
            sizes="20vw"
            className="object-contain"
          />
        </div>
      )}
    </section>
  );
}
