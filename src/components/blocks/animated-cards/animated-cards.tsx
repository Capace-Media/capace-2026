"use client";
import type { PageQuery } from "@/graphql/graphql";
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
    <section className="container">
      <HeadingWithAccent
        accentedHeading={props.data.accentHeading?.accent || ""}
        mainHeading={props.data.accentHeading?.main || ""}
      />
      <div className="flex flex-col py-8 lg:flex-row">
        <AnimatedCard
          card={props.data.cards?.[0]}
          index={0}
          zIndex={props.data.cards?.length || 10}
          cards={props.data.cards}
        />
      </div>
    </section>
  );
}
