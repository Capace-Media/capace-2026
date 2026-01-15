import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="fixed z-100 flex h-30 w-full max-w-400 items-center justify-between gap-6 border px-24 text-sm">
      <nav className="max-w-[1/3] flex-1">
        <ul className="flex h-12 justify-evenly gap-10 rounded-full border p-3">
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
        <div className="flex h-12 items-center justify-center rounded-full border px-8 py-1">
          <Image
            src={"/logotypes/capace-media.svg"}
            alt="Logotyp för Capace Media Group AB"
            width={110}
            height={40}
          />
        </div>
      </div>
      <div className="flex max-w-[1/3] flex-1 justify-end">
        <Button withArrow variant={"secondaryAccent"} size={"sm"}>
          Knapptext
        </Button>
      </div>
    </header>
  );
}
