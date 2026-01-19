"use client";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

interface StickerProps {
  className?: string;
  imgSrc: string;
}

export default function BouncySticker(props: StickerProps) {
  const stickerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!stickerRef.current) return;

    // Set initial GSAP values to prevent CSS transform conflicts
    gsap.set(stickerRef.current, {
      y: 0,
      rotation: 0,
    });
  }, []);

  const playAnimation = () => {
    if (!stickerRef.current) return;

    const tl = gsap.timeline();
    const yValue = gsap.utils.random(-30, 30);
    const rotationValue = gsap.utils.random(-15, 15);

    tl.to(stickerRef.current, {
      y: yValue,
      rotation: rotationValue,
      duration: 0.2,
      ease: "power2.inOut",
    }).to(stickerRef.current, {
      y: 0,
      rotation: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <div
      ref={stickerRef}
      onMouseEnter={playAnimation}
      className={cn(
        "absolute hidden aspect-video h-auto w-40 md:block",
        props.className,
      )}
    >
      <Image
        src={props.imgSrc}
        alt=""
        aria-hidden
        fill
        sizes="50vw"
        className="object-contain"
      />
    </div>
  );
}
