"use client";

import type { getCollaborators } from "@/lib/fetchers/collaborators";
import { animate } from "motion";
import { CollaboratorImage } from "./collaborator-image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  items: Awaited<ReturnType<typeof getCollaborators>>;
}

export default function CollaboratorsBanner(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);
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

    animationRef.current = animate(
      ref.current,
      { x: -width },
      {
        duration: width / BASE_SPEED,
        ease: "linear",
        repeat: Infinity,
      },
    );
    return () => {
      animationRef.current?.stop();
    };
  }, [width]);

  const slowDownSpeed = () => {
    if (!animationRef.current) return;
    animationRef.current.speed = SLOW_SPEED;
  };

  const resetSpeed = () => {
    if (!animationRef.current) return;
    animationRef.current.speed = BASE_SPEED / 50;
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
