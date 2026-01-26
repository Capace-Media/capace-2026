import { useFragment, type FragmentType } from "@/graphql";
import { BlocksFragment } from "@/lib/queries/fragments";
import parse from "html-react-parser";
interface Props {
  data: FragmentType<typeof BlocksFragment>;
}
export default function Wysiwyg(props: Props) {
  const data = useFragment(BlocksFragment, props.data);

  if (data.__typename !== "BlocksBlocksWysiwygLayout") return null;
  return (
    <div className="section prose prose-invert">
      {parse(data.content || "")}
    </div>
  );
}
