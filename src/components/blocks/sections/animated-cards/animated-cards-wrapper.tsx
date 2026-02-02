"use client";
import type { PageQuery } from "@/graphql/graphql";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCardsDesktop from "./animated-cards-desktop";
import AnimatedCardsMobile from "./animated-cards-mobile";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
  data: Extract<
    NonNullable<
      NonNullable<NonNullable<PageQuery["page"]>["blocks"]>["blocks"]
    >[number],
    { __typename: "BlocksBlocksAnimatedCardsLayout" }
  >;
}

export default function AnimatedCardsWrapper(props: Props) {
  return (
    <section className="flex flex-col items-center px-4 py-12 md:px-0">
      <div className="hidden lg:flex">
        <AnimatedCardsDesktop data={props.data} />
      </div>
      <div className="lg:hidden">
        <AnimatedCardsMobile data={props.data} />
      </div>
    </section>
  );
}
