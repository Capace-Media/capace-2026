"use client";
import type { BlocksBlocksCards, PageQuery } from "@/graphql/graphql";
import HeadingWithAccent from "../../shared/heading-with-accent";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedCardMobile } from "./animated-card-mobile";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
  data: Extract<
    NonNullable<
      NonNullable<NonNullable<PageQuery["page"]>["blocks"]>["blocks"]
    >[number],
    { __typename: "BlocksBlocksAnimatedCardsLayout" }
  >;
}

export default function AnimatedCardsMobile(props: Props) {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".animated-card");

      gsap.to(container, {
        scrollTrigger: {
          pin: true,
          start: "top top",
          end: `${cards.length * 400}px top`,
          trigger: container.current,
          //   markers: true,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
        gsap.fromTo(
          card,
          {
            y: 200,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.6)",
            scrollTrigger: {
              trigger: card,
              start: () => `top+=${i * 400}px center`,
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="flex w-screen flex-col items-center px-4 py-12 md:px-0"
    >
      <HeadingWithAccent
        accentedHeading={props.data.accentHeading?.accent || ""}
        mainHeading={props.data.accentHeading?.main || ""}
      />
      <div className="grid grid-cols-1 grid-rows-1">
        {props.data.cards?.map((card, index) => (
          <AnimatedCardMobile
            key={index}
            card={card as BlocksBlocksCards}
            index={index}
            zIndex={props.data.cards?.length! - index}
          />
        ))}
      </div>
    </section>
  );
}
