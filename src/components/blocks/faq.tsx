import type { PageQuery } from "@/graphql/graphql";
import type { getPage } from "@/lib/fetchers/pages";

interface Props {
  data: Extract<
    NonNullable<
      NonNullable<NonNullable<PageQuery["page"]>["blocks"]>["blocks"]
    >[number],
    { __typename: "BlocksBlocksFaqLayout" }
  >;
}

export default function Faq(props: Props) {
  return <div>FAQ</div>;
}
