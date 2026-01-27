"use client";
import { cn } from "@/lib/utils";
import { Minus } from "lucide-react";

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
      <div className="flex flex-col">
        <span
          aria-hidden="true"
          className="text-primary text-[96px] leading-5 font-bold"
        >
          “
        </span>
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
