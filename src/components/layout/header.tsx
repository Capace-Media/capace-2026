import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between gap-6 px-24 text-sm">
      <nav>
        <ul className="border-border/15 flex gap-6 rounded-full border p-3">
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
      <div className="relative border">
        <Image
          src={"/capace-logo.webp"}
          alt="Logotyp för Capace Media Group AB"
          fill
        />
      </div>
      <Button withArrow variant={"secondaryAccent"} size={"sm"}>
        Knapptext här
      </Button>
    </header>
  );
}
