import Card from "@/components/shared/card";
import useTriggerCardAnimation from "@/hooks/use-trigger-card-animation";
import { motion, useScroll, useTransform } from "motion/react";

interface Props {
  card: any;
  index: number;
  zIndex: number;
  cards: any;
}

export function AnimatedCard(props: Props) {
  const { ref, triggered } = useTriggerCardAnimation();
  console.log("triggered", triggered);

  return (
    <motion.div
      ref={ref}
      initial={{ y: props.index === 0 ? 0 : -380 * props.index }}
      animate={triggered ? { y: props.index === 0 ? 0 : -40 } : {}}
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
