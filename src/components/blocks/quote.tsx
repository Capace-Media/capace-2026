"use client";
import { useFragment, type FragmentType } from "@/graphql";
import { BlocksFragment } from "@/lib/queries/fragments";
import { Minus } from "lucide-react";

interface Props {
  data: FragmentType<typeof BlocksFragment>;
}

export default function Quote(props: Props) {
  const data = useFragment(BlocksFragment, props.data);
  if (data.__typename !== "BlocksBlocksQuoteLayout") return null;
  return (
    <section className="section items-center py-20">
      <blockquote className="flex flex-col gap-8">
        <div className="flex">
          <span
            aria-hidden="true"
            className="text-primary text-[96px] leading-5 font-bold"
          >
            “
          </span>
          <p className="prose-invert prose text-center">{data.quote}</p>
        </div>
        <footer className="flex flex-col items-end">
          <cite className="flex items-center gap-4 font-bold not-italic">
            <Minus aria-hidden="true" />
            {data.author}, {data.authorTitle}
          </cite>
          <p className="text-primary italic">{data.companyName}</p>
        </footer>
      </blockquote>
    </section>
  );
}
