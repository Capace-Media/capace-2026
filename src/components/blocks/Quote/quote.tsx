"use client";
import { Minus } from "lucide-react";
import Image from "next/image";

interface Props {
  quote: string | undefined | null;
  author?: string | undefined | null;
  authorTitle?: string | undefined | null;
  companyName?: string | undefined | null;
  className?: string;
}

export default function Quote(props: Props) {
  return (
    <blockquote className="flex flex-col gap-8">
      <div className="flex flex-col p-6">
        <div className="relative aspect-square h-12 w-12" aria-hidden>
          <Image
            src={"/icons/citation-marks.svg"}
            fill
            className="object-contain"
            alt={""}
            sizes="10vw"
          />
        </div>
        <p className="prose-invert prose prose-sm text-center font-medium text-white! md:text-base">
          {props.quote}
        </p>
      </div>
      <footer className="flex flex-col items-end">
        {props.author && (
          <cite className="flex items-center gap-4 font-bold not-italic">
            <Minus aria-hidden="true" />
            {props.author}, {props.authorTitle}
          </cite>
        )}
        <p className="text-primary uppercase italic">{props.companyName}</p>
      </footer>
    </blockquote>
  );
}
