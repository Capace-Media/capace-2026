"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
  src: string;
  alt: string;
}

export default function ParallaxImage(props: Props) {
  const container = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".parallax").forEach((section, i) => {
      const heightDiff =
        section.offsetHeight - section?.parentElement!.offsetHeight;
      gsap.fromTo(
        section,
        {
          y: -heightDiff,
        },
        {
          scrollTrigger: {
            trigger: section.parentElement,
            scrub: true,
          },
          y: 0,
          ease: "none",
        },
      );
    });
  });

  return (
    <div ref={container} className="parallax h-full w-full overflow-hidden">
      <div className="parallax w-fill relative h-[120%]">
        <Image src={props.src} alt={props.alt} className="object-cover" fill />
      </div>
    </div>
  );
}
