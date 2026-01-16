"use client";
import Card from "@/components/shared/card";
import type {
  BlocksBlocksCards,
  ReusableFieldsButton_Fields,
} from "@/graphql/graphql";

interface Props {
  card: BlocksBlocksCards;
  index: number;
  zIndex: number;
}

export function AnimatedCard(props: Props) {
  return (
    <div style={{ zIndex: props.zIndex }} className="animated-card">
      <Card
        index={props.index}
        imgSrc={props.card?.card?.image?.node.mediaItemUrl || ""}
        altText={props.card?.card?.image?.node.altText || "Dekorativ bild"}
        title={props.card?.card?.title || ""}
        textContent={props.card?.card?.textContent || ""}
        numbered
        buttonProps={props.card.card?.button as ReusableFieldsButton_Fields}
      />
    </div>
  );
}
