"use client";
import type {
  BlocksBlocksCards,
  ReusableFieldsButton_Fields,
} from "@/graphql/graphql";
import BaseCard from "./base-card";

interface Props {
  card: BlocksBlocksCards;
  index: number;
  zIndex: number;
  isInactive: boolean;
}

export function AnimatedCardMobile(props: Props) {
  return (
    <div className="animated-card col-start-1 row-start-1 flex w-full justify-center">
      <BaseCard
        index={props.index}
        imgSrc={props.card?.card?.image?.node.mediaItemUrl || ""}
        altText={props.card?.card?.image?.node.altText || "Dekorativ bild"}
        title={props.card?.card?.title || ""}
        textContent={props.card?.card?.textContent || ""}
        numbered
        buttonProps={props.card.card?.button as ReusableFieldsButton_Fields}
        isAnimated
        isInactive={props.isInactive}
      />
    </div>
  );
}
