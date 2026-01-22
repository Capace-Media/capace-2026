import { type FragmentType, useFragment } from "@/graphql/fragment-masking";
import { BlocksFragment } from "@/lib/queries/fragments";
import LatestNews from "./latest-news";
import HeadingWithAccent from "@/components/shared/heading-with-accent";
import { getLatestNewsPreviews } from "@/lib/fetchers/news";

interface Props {
  data: FragmentType<typeof BlocksFragment>;
}

export default async function LatestNewsWrapper(props: Props) {
  const block = useFragment(BlocksFragment, props.data);

  if (block.__typename !== "BlocksBlocksLatestNewsGridLayout") return null;

  const data = await getLatestNewsPreviews();
  if (!data) return null;
  return (
    <section className="section flex w-full flex-col items-center justify-center">
      <HeadingWithAccent
        accentedHeading={block.accentHeading?.accent || ""}
        mainHeading={block.accentHeading?.main || ""}
      />
      <LatestNews data={data} />
    </section>
  );
}
