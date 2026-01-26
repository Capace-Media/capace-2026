import { useFragment, type FragmentType } from "@/graphql";
import { BlocksFragment } from "@/lib/queries/fragments";
import parse from "html-react-parser";
interface Props {
  data: FragmentType<typeof BlocksFragment>;
}
export default function Wysiwyg(props: Props) {
  const data = useFragment(BlocksFragment, props.data);
  if (data.__typename !== "BlocksBlocksWYSIWYGLayout") return null;
  return <div>{parse(props.data)}</div>;
}
