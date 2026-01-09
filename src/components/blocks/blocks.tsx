import type { PageQuery } from "@/graphql/graphql";
import Block from "./block";

type Blocks = NonNullable<
  NonNullable<PageQuery["page"]>["sectionsContent"]
>["blocks"];

interface Props {
  blocks: Blocks | undefined | null;
}
export default function Blocks(props: Props) {
  return (
    <>
      {props.blocks?.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </>
  );
}
