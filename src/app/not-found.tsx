import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <section className="section no-hero relative h-screen items-center justify-center">
      <h1 className="text-primary text-center text-4xl font-bold">
        Hoppsan! Den sidan finns inte.
      </h1>
      <p className="text-center text-lg">
        Sidan du söker kunde inte hittas. Försök gärna igen senare.
      </p>
      <Button withArrow>
        <Link href={"/"}>Hem</Link>
      </Button>
      <div
        className="absolute top-20 right-0 hidden aspect-auto h-80 w-80 translate-x-[15%] lg:block"
        aria-hidden
      >
        <Image
          src={"/stickers/sticker-group.webp"}
          fill
          className="object-contain"
          alt={""}
          sizes="20vw"
        />
      </div>
      <div
        className="absolute bottom-0 left-0 hidden aspect-auto h-100 w-100 translate-x-[15%] lg:block"
        aria-hidden
      >
        <Image
          src={"/stickers/sticker-group-2.webp"}
          fill
          className="object-contain"
          alt={""}
          sizes="40vw"
        />
      </div>
    </section>
  );
}
