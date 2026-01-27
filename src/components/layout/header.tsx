"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
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
    <header className="fixed z-100 flex h-30 w-full max-w-400 items-center justify-between gap-6 px-8 text-sm lg:px-8">
      <div className="fade-on-scroll absolute bottom-0 left-10 text-neutral-400 uppercase opacity-100">
        Digitalbyrå / webbyrå Malmö
      </div>
      <div className="ml-auto flex w-full items-center justify-between md:hidden">
        <CapaceLogo />
        <MobileMenu />
      </div>
      <div className="hidden w-full md:flex">
        <nav className="max-w-[1/3] flex-1">
          <ul className="frosted flex h-12 list-none justify-evenly gap-2 rounded-full p-3 whitespace-nowrap">
            <li>
              <Link
                href={"/tjanster"}
                className="hover:text-accent p-3 no-underline! transition-all duration-300"
              >
                Våra tjänster
              </Link>
            </li>
            <li>
              <Link
                href={"/nyheter"}
                className="hover:text-accent p-3 no-underline! transition-all duration-300"
              >
                Nyheter
              </Link>
            </li>

            <li>
              <Link
                href={"/kundcase"}
                className="hover:text-accent p-3 no-underline! transition-all duration-300"
              >
                Kundcase
              </Link>
            </li>
            <li>
              <Link
                href={"/om-oss"}
                className="hover:text-accent p-3 no-underline! transition-all duration-300"
              >
                Om Capace
              </Link>
            </li>
          </ul>
        </nav>
        <CapaceLogo className="max-w-[1/3] flex-1" />
        <div className="flex max-w-[1/3] flex-1 justify-end">
          <Button withArrow variant={"secondary"} size={"default"}>
            Be om offert
          </Button>
        </div>
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
        />
      </Link>
    </div>
  );
};
