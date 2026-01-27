"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className={"z-300"}>
        <Image
          src={"/icons/hamburger.svg"}
          alt={"Open Mobile Menu"}
          width={40}
          height={40}
        />
      </SheetTrigger>
      <SheetContent
        side="top"
        className={"flex h-screen! items-start justify-center p-12"}
      >
        <SheetHeader className="sr-only">
          <SheetDescription className={"sr-only"}>Mobilmeny</SheetDescription>
        </SheetHeader>
        <nav className="w-full">
          <ul className="flex w-full flex-col">
            <NavLink close={close} href="/tjanster">
              Våra tjänster
            </NavLink>
            <NavLink href="/kundcase" close={close}>
              Kundcase
            </NavLink>
            <NavLink href="/offert" close={close}>
              Offert
            </NavLink>
            <NavLink href="/nyheter" close={close}>
              Nyheter
            </NavLink>
            <NavLink href="/kontakt" close={close}>
              Kontakta oss
            </NavLink>
            <NavLink href="/om-oss" close={close}>
              Om oss
            </NavLink>
            <NavLink href="/karriar" close={close}>
              Karriär
            </NavLink>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

const NavLink = ({
  children,
  close,
  href,
}: {
  href: string;
  close: () => void;
  children: React.ReactNode;
}) => {
  return (
    <li className="navlink flex w-full items-center gap-4 text-xl">
      <span className="bg-accent inline-block h-2 w-2 rounded-full" />
      <Link
        href={href}
        className="h-full w-full cursor-pointer py-5"
        onClick={close}
      >
        {children}
      </Link>
    </li>
  );
};
