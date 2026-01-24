"use client";
import { useFragment, type FragmentType } from "@/graphql";
import { BlocksFragment } from "@/lib/queries/fragments";
import Quote from "./quote";

interface Props {
  data: FragmentType<typeof BlocksFragment>;
}

export default function QuoteWrapper(props: Props) {
  const data = useFragment(BlocksFragment, props.data);
  if (data.__typename !== "BlocksBlocksQuoteLayout") return null;
  return (
    <section className="section items-center py-20">
      <Quote
        quote={data.quote}
        author={data.author}
        authorTitle={data.authorTitle}
        companyName={data.companyName}
      />
    </section>
  );
}
