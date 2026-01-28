"use client";
import { graphql, useFragment, type FragmentType } from "@/graphql";
import Quote from "./quote";

const Quote_Fragment = graphql(`
  fragment Quote_Fragment on BlocksBlocksQuoteLayout {
    author
    authorTitle
    companyName
    quote
  }
`);

type QuoteWrapperProps = {
  data: FragmentType<typeof Quote_Fragment>;
};

export default function QuoteWrapper(props: QuoteWrapperProps) {
  const data = useFragment(Quote_Fragment, props.data);
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
