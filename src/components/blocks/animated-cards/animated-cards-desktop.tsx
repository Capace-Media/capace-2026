"use client";
import type { BlocksBlocksCards, PageQuery } from "@/graphql/graphql";
import HeadingWithAccent from "../../shared/heading-with-accent";
import { AnimatedCard } from "./animated-card";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
  data: Extract<
    NonNullable<
      NonNullable<NonNullable<PageQuery["page"]>["blocks"]>["blocks"]
    >[number],
    { __typename: "BlocksBlocksAnimatedCardsLayout" }
  >;
}

export default function AnimatedCardsDesktop(props: Props) {
  const container = useRef<HTMLElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".animated-card");

      gsap.to(container, {
        scrollTrigger: {
          pin: true,
          start: "center center",
          end: `${cards.length * 370}px top`,
          trigger: container.current,
          pinSpacing: true,
        },
      });

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            x: -100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: () => `top+=${i * 400}px 35%`,
              toggleActions: "play none none reverse",
            },
          },
        );

        // Track active state
        ScrollTrigger.create({
          trigger: card,
          start: () => `top+=${i * 400}px 35%`,
          end: () => `top+=${i * 400 + 400}px 35%`,
          onEnter: () => setActiveCardIndex(i),
          onEnterBack: () => setActiveCardIndex(i),
          onLeaveBack: () => setActiveCardIndex(null),
        });
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="flex flex-col items-center px-4 py-12 md:px-0"
    >
      <HeadingWithAccent
        accentedHeading={props.data.accentHeading?.accent || ""}
        mainHeading={props.data.accentHeading?.main || ""}
      />
      <div className="flex flex-row">
        {props.data.cards?.map((card, index) => (
          <AnimatedCard
            key={index}
            card={card as BlocksBlocksCards}
            index={index}
            zIndex={props.data.cards?.length! - index}
            isInactive={(activeCardIndex || 0) > index}
          />
        ))}
      </div>
    </section>
  );
}
