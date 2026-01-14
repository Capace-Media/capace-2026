import Card from "@/components/shared/card";
import { motion } from "motion/react";

interface Props {
  card: any;
  index: number;
  zIndex: number;
}

export function AnimatedCard(props: Props) {
  return (
    <motion.div
      style={{ zIndex: props.zIndex }}
      initial={{ x: props.index === 0 ? 0 : -20 * props.index }}
    >
      <Card
        index={props.index}
        imgSrc={props.card?.card?.image?.node.mediaItemUrl || ""}
        altText={props.card?.card?.image?.node.altText || "Dekorativ bild"}
        title={props.card?.card?.title || ""}
        textContent={props.card?.card?.textContent || ""}
        buttonLabel={null}
        buttonUrl={null}
        numbered
      />
    </motion.div>
  );
}
