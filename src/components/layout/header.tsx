import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href={"/tjanster"}>Våra tjänster</Link>
            <Link href={"/om-oss"}>Våra tjänster</Link>
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
    </header>
  );
}
