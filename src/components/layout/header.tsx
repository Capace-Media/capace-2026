import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="fixed z-100 flex h-30 w-full max-w-400 items-center justify-between gap-6 px-8 text-sm lg:px-24">
      <div className="ml-auto md:hidden">
        <MobileMenu />
      </div>
      <div className="hidden w-full md:flex">
        <nav className="max-w-[1/3] flex-1">
          <ul className="frosted flex h-12 justify-evenly gap-10 rounded-full p-3 whitespace-nowrap">
            <li>
              <Link href={"/tjanster"}>Våra tjänster</Link>
            </li>
            <li>
              <Link href={"/om-oss"}>Våra tjänster</Link>
            </li>
            <li>
              <Link href={"/Kundcase"}>Kundcase</Link>
            </li>
          </ul>
        </nav>
        <div className="flex max-w-[1/3] flex-1 justify-center">
          <div className="frosted flex h-12 min-w-40 items-center justify-center rounded-full px-8 py-1">
            <Image
              src={"/logotypes/capace-media.svg"}
              alt="Logotyp för Capace Media Group AB"
              width={110}
              height={40}
            />
          </div>
        </div>
        <div className="flex max-w-[1/3] flex-1 justify-end">
          <Button withArrow variant={"secondary"} size={"default"}>
            Knapptext
          </Button>
        </div>
      </div>
    </header>
  );
}
