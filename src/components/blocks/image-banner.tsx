import type { PageQuery } from "@/graphql/graphql";

interface Props {
  data: Extract<
    NonNullable<
      NonNullable<NonNullable<PageQuery["page"]>["blocks"]>["blocks"]
    >[number],
    { __typename: "BlocksBlocksImageBannerLayout" }
  >;
}
export default function ImageBanner() {
  return <div>hej</div>;
}
