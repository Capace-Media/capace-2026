import { useScroll, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";

export default function useTriggerCardAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [triggered, setTriggered] = useState(false);

  useMotionValueEvent(scrollY, "change", () => {
    if (!ref.current || triggered) return;

    const rect = ref.current.getBoundingClientRect();
    const viewportMid = window.innerHeight * 0.5;

    const elementMid = rect.top + rect.height / 2;

    if (elementMid <= viewportMid) {
      setTriggered(true);
    }
  });

  return { ref, triggered };
}
