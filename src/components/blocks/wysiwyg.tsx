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
    <section className="section prose prose-invert prose-p:my-2 prose-headings:my-0 mx-auto max-w-200">
      {parse(data.content || "")}
    </section>
  );
}
