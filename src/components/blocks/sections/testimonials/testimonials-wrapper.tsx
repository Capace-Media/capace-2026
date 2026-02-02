import { getTestimonials } from "@/lib/fetchers/testimonials";
import HeadingWithAccent from "@/components/shared/heading-with-accent";
import { type FragmentType, useFragment } from "@/graphql/fragment-masking";
import { BlocksFragment } from "@/lib/queries/fragments";
import Testimonials from "./testimonials";

interface Props {
  data: FragmentType<typeof BlocksFragment>;
}

export default async function TestimonialsWrapper(props: Props) {
  const block = useFragment(BlocksFragment, props.data);

  if (block.__typename !== "BlocksBlocksTestimonialsLayout") return null;

  const data = await getTestimonials();
  if (!data) return null;

  return (
    <section className="section flex w-full flex-col items-center justify-center">
      <HeadingWithAccent
        accentedHeading={block.accentHeading?.accent || ""}
        mainHeading={block.accentHeading?.main || ""}
      />
      <Testimonials data={data} />
    </section>
  );
}
