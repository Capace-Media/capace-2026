import { getTestimonials } from "@/lib/fetchers/testimonials";
import HeadingWithAccent from "../../shared/heading-with-accent";
import type { PageQuery } from "@/graphql/graphql";
import Testimonials from "./testimonials";

interface Props {
  data: Extract<
    NonNullable<
      NonNullable<NonNullable<PageQuery["page"]>["blocks"]>["blocks"]
    >[number],
    { __typename: "BlocksBlocksTestimonialsLayout" }
  >;
}

export default async function TestimonialsWrapper(props: Props) {
  const data = await getTestimonials();
  console.log("test. data:", data);

  if (!data) return null;

  return (
    <section className="section flex w-full flex-col items-center justify-center">
      <HeadingWithAccent
        accentedHeading={props.data.accentHeading?.accent || ""}
        mainHeading={props.data.accentHeading?.main || ""}
      />
      <Testimonials data={data} />
    </section>
  );
}
