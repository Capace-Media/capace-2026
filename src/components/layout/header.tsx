import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="fixed z-100 flex h-30 w-full max-w-400 items-center justify-between gap-6 px-24 text-sm">
      <nav className="max-w-[1/3] flex-1">
        <ul className="border-border/15 flex gap-10 rounded-full p-3">
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
        <Image
          src={"/logotypes/capace-media.svg"}
          alt="Logotyp för Capace Media Group AB"
          width={150}
          height={50}
        />
      </div>
      <div className="max-w-[1/3] flex-1">
        <Button withArrow variant={"secondaryAccent"} size={"sm"}>
          Knapptext här
        </Button>
      </div>
    </header>
  );
}
