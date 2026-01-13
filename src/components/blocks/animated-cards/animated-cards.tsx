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
        {props.data.cards?.map((card, index) => {
          const zIndex = (props.data.cards?.length || 1) - index;
          return (
            <div className="flex flex-col border border-green-300" key={index}>
              <AnimatedCard card={card} index={index} zIndex={zIndex} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
