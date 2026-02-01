"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface Props {
  message: string;
}

export default function AnnouncementBanner(props: Props) {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      gsap.to(".message", {
        xPercent: -100,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: containerRef },
  );
  return (
    <div
      ref={containerRef}
      className="bg-primary fixed top-0 left-0 z-999 flex max-h-20 w-full overflow-hidden p-1 text-xs font-semibold text-black"
    >
      {Array.from({ length: 10 }).map((_i, index) => (
        <p key={index} className="message px-10 whitespace-nowrap">
          {props.message}
        </p>
      ))}
    </div>
  );
}
