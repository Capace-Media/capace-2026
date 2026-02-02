import type { PageQuery } from "@/graphql/graphql";
import { blockComponents } from ".";

interface Props {
  block: NonNullable<
    NonNullable<NonNullable<PageQuery["page"]>["blocks"]>["blocks"]
  >[number];
}
export default function Block(props: Props) {
  if (!props.block?.__typename) return null;
  const BlockComponent = blockComponents[props.block?.__typename];
  if (!BlockComponent) {
    console.warn(
      `No component found for block type: ${props.block.__typename}`,
    );
    return null;
  }

  return <BlockComponent data={props.block as never} />;
}
