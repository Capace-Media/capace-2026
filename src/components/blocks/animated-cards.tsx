import type { PageQuery } from "@/graphql/graphql";
import HeadingWithAccent from "../shared/heading-with-accent";
import Card from "../shared/card";

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
    <section>
      {/* <HeadingWithAccent
        accentedHeading={props.data. || ""}
        mainHeading={props.data|| ""}
      />
      <div className="flex flex-col lg:flex-row">
        {props.data.cards?.map((card, index) => (
          <Card
            key={index}
            index={index}
            imgSrc={card?.card?.image?.node.mediaItemUrl || ""}
            altText={card?.card?.image?.node.altText || "Dekorativ bild"}
            title={card?.card?.title || ""}
            textContent={card?.card?.textContent || ""}
            buttonLabel={card?.card?.ctaLabel}
            buttonUrl={card?.card?.ctaUrl}
          />
        ))}
      </div> */}
    </section>
  );
}
