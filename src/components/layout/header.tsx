import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-6 border border-green-400">
      <nav>
        <ul className="flex gap-6">
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
      <Button withArrow variant={"secondaryAccent"}>
        Knapptext här
      </Button>
    </header>
  );
}
