import Card from "@/components/shared/card";
import useTriggerCardAnimation from "@/hooks/use-trigger-card-animation";
import { motion } from "motion/react";
import { useLayoutEffect, useState } from "react";

interface Props {
  card: any;
  index: number;
  zIndex: number;
}

export function AnimatedCard(props: Props) {
  const { ref, triggered } = useTriggerCardAnimation();
  const [cardHeight, setCardHeight] = useState(0);
  const CARD_OFFSET = 40;

  useLayoutEffect(() => {
    if (!ref.current) return;
    setCardHeight(ref.current.getBoundingClientRect().height);
  }, []);

  return (
    <motion.div
      key={cardHeight}
      ref={ref}
      initial={{
        y: props.index === 0 ? 0 : -cardHeight * props.index,
      }}
      animate={
        triggered
          ? { y: props.index === 0 ? 0 : -CARD_OFFSET * props.index }
          : {
              y:
                props.index === 0
                  ? 0
                  : (-cardHeight + CARD_OFFSET) * props.index,
            }
      }
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex-1"
      style={{ zIndex: props.zIndex }}
    >
      {props.zIndex}
      <Card
        index={props.index + 1}
        imgSrc={props.card?.card?.image?.node.mediaItemUrl || ""}
        altText={props.card?.card?.image?.node.altText || "Dekorativ bild"}
        title={props.card?.card?.title || ""}
        textContent={props.card?.card?.textContent || ""}
        buttonLabel={null}
        buttonUrl={null}
      />
    </motion.div>
  );
}
