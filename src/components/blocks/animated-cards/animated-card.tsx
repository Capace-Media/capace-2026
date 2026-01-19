"use client";
import Card from "@/components/shared/card";
import type {
  BlocksBlocksCards,
  ReusableFieldsButton_Fields,
} from "@/graphql/graphql";
import { cn } from "@/lib/utils";

interface Props {
  card: BlocksBlocksCards;
  index: number;
  zIndex: number;
  isActive: boolean;
}

export function AnimatedCard(props: Props) {
  return (
    <div style={{ zIndex: props.zIndex }} className="animated-card relative">
      {props.index !== 0 && (
        //Extra div för överlappande effekt
        <div
          className={cn(
            props.isActive ? "bg-accent" : "bg-background",
            "border-muted absolute top-0 left-0 hidden h-full w-10 -translate-x-1/2 border-t border-b transition-all duration-400 lg:flex",
          )}
        />
      )}
      <Card
        index={props.index}
        imgSrc={props.card?.card?.image?.node.mediaItemUrl || ""}
        altText={props.card?.card?.image?.node.altText || "Dekorativ bild"}
        title={props.card?.card?.title || ""}
        textContent={props.card?.card?.textContent || ""}
        numbered
        buttonProps={props.card.card?.button as ReusableFieldsButton_Fields}
        isActive={props.isActive}
      />
    </div>
  );
}
