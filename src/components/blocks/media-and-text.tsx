import type { PageQuery } from "@/graphql/graphql";

interface Props {
  data: Extract<
    NonNullable<
      NonNullable<NonNullable<PageQuery["page"]>["sectionsContent"]>["blocks"]
    >[number],
    { __typename: "SectionsContentBlocksMediaAndTextLayout" }
  >;
}

export default function MediaAndText(props: Props) {
  console.log("data:", props.data);
  const data = props.data.mediaAndText;

  return (
    <div>
      <h3>{data?.accentedHeading}</h3>
      <h3>{data?.mainHeading}</h3>
    </div>
  );
}
