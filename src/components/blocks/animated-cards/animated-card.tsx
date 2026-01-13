import Card from "@/components/shared/card";
import useTriggerCardAnimation from "@/hooks/use-trigger-card-animation";
import { motion } from "motion/react";
import { useLayoutEffect, useState } from "react";

interface Props {
  card: any;
  index: number;
  zIndex: number;
  cards: any;
}

export function AnimatedCard(props: Props) {
  const CARD_OFFSET = 40;

  const nextCard = props.cards[props.index + 1];

  return (
    <motion.div
      initial={{
        y: props.index === 0 ? 0 : -400,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex-1"
      style={{ zIndex: props.zIndex }}
    >
      {props.zIndex}

      <div style={{ position: "relative", zIndex: props.zIndex }}>
        <Card
          index={props.index + 1}
          imgSrc={props.card?.card?.image?.node.mediaItemUrl || ""}
          altText={props.card?.card?.image?.node.altText || "Dekorativ bild"}
          title={props.card?.card?.title || ""}
          textContent={props.card?.card?.textContent || ""}
          buttonLabel={null}
          buttonUrl={null}
        />
      </div>
      {nextCard && (
        <AnimatedCard
          card={nextCard}
          cards={props.cards}
          index={props.index + 1}
          zIndex={props.zIndex - 1}
        />
      )}
    </motion.div>
  );
}
