"use client";

import type { getCollaborators } from "@/lib/fetchers/collaborators";
import { CollaboratorImage } from "./collaborator-image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import gsap from "gsap";

interface Props {
  items: Awaited<ReturnType<typeof getCollaborators>>;
}

export default function CollaboratorsBanner(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [width, setWidth] = useState(0);

  const BASE_SPEED = 40;
  const SLOW_SPEED = 0.2;

  useEffect(() => {
    if (!ref.current) return;
    setWidth(ref.current.scrollWidth / 2);
  }, [props.items]);

  useEffect(() => {
    if (!ref.current || width === 0) return;

    gsap.set(ref.current, { x: 0 });

    const animateBanner = () => {
      animationRef.current = gsap.to(ref.current, {
        x: -width,
        duration: width / BASE_SPEED,
        ease: "linear",
        onComplete: () => {
          gsap.set(ref.current, { x: 0 });
          animateBanner();
        },
      });
    };
    animateBanner();

    return () => {
      animationRef.current?.kill();
    };
  }, [width]);

  const slowDownSpeed = () => {
    if (!animationRef.current) return;
    animationRef.current.timeScale(SLOW_SPEED);
  };

  const resetSpeed = () => {
    if (!animationRef.current) return;
    animationRef.current.timeScale(1);
  };

  if (!props.items) return null;

  return (
    <div
      className={cn(
        "border-b-muted border-t-muted my-14 overflow-hidden border-t border-b",
        !isHomePage && "my-4 border-transparent",
      )}
    >
      <div ref={ref} className="flex">
        {/* Två listor för att skapa infinityeffekt */}
        {props.items.map((item, i) => (
          <CollaboratorImage
            key={`first-${i}`}
            slowDownSpeed={slowDownSpeed}
            resetSpeed={resetSpeed}
            imgSrc={item?.image?.node.mediaItemUrl}
            url={item?.url || ""}
            altText={item?.image?.node.altText || ""}
          />
        ))}
        {props.items.map((item, i) => (
          <CollaboratorImage
            key={`second-${i}`}
            slowDownSpeed={slowDownSpeed}
            resetSpeed={resetSpeed}
            imgSrc={item?.image?.node.mediaItemUrl}
            url={item?.url || ""}
            altText={item?.image?.node.altText || ""}
          />
        ))}
      </div>
    </div>
  );
}
