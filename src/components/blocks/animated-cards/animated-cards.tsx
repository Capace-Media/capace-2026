"use client";
import type { BlocksBlocksCards, PageQuery } from "@/graphql/graphql";
import HeadingWithAccent from "../../shared/heading-with-accent";
import { AnimatedCard } from "./animated-card";

interface Props {
  data: Extract<
    NonNullable<
      NonNullable<NonNullable<PageQuery["page"]>["blocks"]>["blocks"]
    >[number],
    { __typename: "BlocksBlocksAnimatedCardsLayout" }
  >;
}

export default function AnimatedCards(props: Props) {
  return (
    <section className="flex flex-col items-center">
      <HeadingWithAccent
        accentedHeading={props.data.accentHeading?.accent || ""}
        mainHeading={props.data.accentHeading?.main || ""}
      />
      <div className="flex flex-col lg:flex-row">
        {props.data.cards?.map((card, index) => (
          <AnimatedCard
            card={card as BlocksBlocksCards}
            index={index}
            key={index}
            zIndex={props.data.cards?.length! - index}
          />
        ))}
      </div>
    </section>
  );
}
