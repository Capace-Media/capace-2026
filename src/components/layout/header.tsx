"use client";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import ButtonLink from "@/components/shared/link";
import NavMenu from "./nav-menu";
gsap.registerPlugin(ScrollTrigger, gsap);

export default function Header() {
  useGSAP(() => {
    gsap.to(".fade-on-scroll", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".fade-on-scroll",
        start: "top top",
        end: "500px",
        scrub: true,
      },
    });
  });
  return (
    <header className="fixed z-50 flex w-full max-w-400 flex-col">
      <div className="flex h-30 w-full items-center justify-between gap-6 px-8 text-sm lg:px-18">
        <div className="ml-auto flex w-full items-center justify-between lg:hidden">
          <CapaceLogo />
          <MobileMenu />
        </div>
        <div className="hidden w-full items-center lg:flex">
          <nav
            aria-label="Huvudmeny"
            className="z-10! max-w-[1/3] flex-1 items-center justify-center"
          >
            <NavMenu />
          </nav>
          <CapaceLogo className="max-w-[1/3] flex-1" />
          <div className="flex max-w-[1/3] flex-1 justify-end">
            <ButtonLink href="/offert">Be om offert</ButtonLink>
          </div>
        </div>
      </div>
      <div className="fade-on-scroll z-1 px-26 text-sm text-neutral-400 uppercase opacity-100">
        Digitalbyrå / webbyrå Malmö
      </div>
    </header>
  );
}

const CapaceLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex justify-center", className)}>
      <Link
        className="frosted flex h-12 min-w-40 items-center justify-center rounded-full px-8 py-1 transition-all duration-300 hover:border-white/20"
        href={"/"}
      >
        <Image
          src={"/logotypes/capace-media.svg"}
          alt="Logotyp för Capace Media Group AB"
          width={100}
          height={40}
          className="h-[80%] w-auto"
          sizes="190px"
        />
      </Link>
    </div>
  );
};
