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

export default function MobileMenu() {
  return (
    <Sheet>
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
            <NavLink href="/tjanster">Våra tjänster</NavLink>
            <NavLink href="/kundcase">Kundcase</NavLink>
            <NavLink href="/offert">Offert</NavLink>
            <NavLink href="/nyheter">Nyheter</NavLink>
            <NavLink href="/kontakt">Kontakta oss</NavLink>
            <NavLink href="/om-oss">Om oss</NavLink>
            <NavLink href="/karriar">Karriär</NavLink>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

const NavLink = ({
  children,
  href,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li className="navlink flex w-full items-center gap-4 text-xl">
      <span className="bg-accent inline-block h-2 w-2 rounded-full" />
      <Link href={href} className="h-full w-full cursor-pointer py-6">
        {children}
      </Link>
    </li>
  );
};
