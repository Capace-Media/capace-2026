"use client";
import { cn } from "@/lib/utils";
import { Minus } from "lucide-react";

interface Props {
  quote: string | undefined | null;
  author: string | undefined | null;
  authorTitle?: string | undefined | null;
  companyName?: string | undefined | null;
  className?: string;
}

export default function Quote(props: Props) {
  return (
    <section className={cn("section items-center py-20", props.className)}>
      <blockquote className="flex flex-col gap-8">
        <div className="flex">
          <span
            aria-hidden="true"
            className="text-primary text-[96px] leading-5 font-bold"
          >
            “
          </span>
          <p className="prose-invert prose text-center">{props.quote}</p>
        </div>
        <footer className="flex flex-col items-end">
          <cite className="flex items-center gap-4 font-bold not-italic">
            <Minus aria-hidden="true" />
            {props.author}, {props.authorTitle}
          </cite>
          <p className="text-primary uppercase italic">{props.companyName}</p>
        </footer>
      </blockquote>
    </section>
  );
}
