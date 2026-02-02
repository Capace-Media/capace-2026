"use client";
import type {
  BlocksBlocksCards,
  ReusableFieldsButton_Fields,
} from "@/graphql/graphql";
import { cn } from "@/lib/utils";
import BaseCard from "./base-card";

interface Props {
  card: BlocksBlocksCards;
  index: number;
  zIndex: number;
  isInactive: boolean;
}

export function AnimatedCard(props: Props) {
  return (
    <div style={{ zIndex: props.zIndex }} className="animated-card relative">
      {props.index !== 0 && (
        //Extra div för överlappande effekt
        <div
          className={cn(
            props.isInactive ? "bg-background" : "bg-accent",
            "border-muted absolute top-0 left-0 hidden h-full w-10 -translate-x-1/2 border-t border-b transition-all duration-400 lg:flex",
            "noscript:bg-background",
          )}
        />
      )}
      <BaseCard
        index={props.index}
        imgSrc={props.card?.card?.image?.node.mediaItemUrl}
        altText={props.card?.card?.image?.node.altText || "Dekorativ bild"}
        title={props.card?.card?.title || ""}
        textContent={props.card?.card?.textContent || ""}
        numbered
        buttonProps={props.card.card?.button as ReusableFieldsButton_Fields}
        isInactive={props.isInactive}
        isAnimated
      />
    </div>
  );
}
