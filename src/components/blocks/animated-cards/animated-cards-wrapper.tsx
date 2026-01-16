"use client";
import type { BlocksBlocksCards, PageQuery } from "@/graphql/graphql";
import HeadingWithAccent from "../../shared/heading-with-accent";
import { AnimatedCard } from "./animated-card";
import { useRef } from "react";
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

export default function AnimatedCardsWrapper(props: Props) {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".animated-card");

      gsap.to(container, {
        scrollTrigger: {
          pin: true,
          start: "center center",
          end: `${cards.length * 450}px top`,
          trigger: container.current,
          onLeave: (self) => {
            self.kill();

            ScrollTrigger.create({
              pin: false,
            });

            ScrollTrigger.refresh();
          },
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
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: () => `top+=${i * 400}px 35%`,
              toggleActions: "play none none none",
              once: true,
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
      className="flex flex-col items-center px-4 py-12 md:px-0"
    >
      <HeadingWithAccent
        accentedHeading={props.data.accentHeading?.accent || ""}
        mainHeading={props.data.accentHeading?.main || ""}
      />
      <div className="flex flex-col lg:flex-row">
        {props.data.cards?.map((card, index) => (
          <AnimatedCard
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
