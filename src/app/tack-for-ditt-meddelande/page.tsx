"use client";
import Image from "next/image";
import ButtonLink from "@/components/shared/link";

export default function Page() {
  return (
    <section className="section no-hero h-screen items-center justify-center">
      <h1 className="text-primary text-center text-4xl font-bold">
        Tack för ditt meddelande!
      </h1>
      <div className="relative h-50 w-50" aria-hidden>
        <Image
          fill
          className="object-contain"
          src={"/stickers/sticker-plane.webp"}
          alt={""}
        />
      </div>
      <p className="prose prose-invert text-center">
        Vi återkommer inom kort! Lite mer text här. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Sint, laboriosam! Dolores tenetur sint
        illo assumenda quas quae ipsa distinctio dolorem, repudiandae incidunt
        molestiae velit, doloribus voluptates. Aut itaque dolore quidem.
      </p>
      <ButtonLink href={"/kundcase"}>Utforska våra projekt</ButtonLink>
    </section>
  );
}
