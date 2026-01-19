import type { PageQuery } from "@/graphql/graphql";
import LatestNews from "./latest-news";
import HeadingWithAccent from "@/components/shared/heading-with-accent";
import { getLatestNewsPreviews } from "@/lib/fetchers/news";

interface Props {
  data: Extract<
    NonNullable<
      NonNullable<NonNullable<PageQuery["page"]>["blocks"]>["blocks"]
    >[number],
    { __typename: "BlocksBlocksLatestNewsGridLayout" }
  >;
}

export default async function LatestNewsWrapper(props: Props) {
  const data = await getLatestNewsPreviews();
  if (!data) return null;
  return (
    <section className="section flex w-full flex-col items-center justify-center">
      <HeadingWithAccent
        accentedHeading={props.data.accentHeading?.accent || ""}
        mainHeading={props.data.accentHeading?.main || ""}
      />
      <LatestNews data={data} />
    </section>
  );
}
