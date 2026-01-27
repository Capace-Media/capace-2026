import { useFragment, type FragmentType } from "@/graphql";
import { BlocksFragment } from "@/lib/queries/fragments";
import parse from "html-react-parser";
import ExternalOrInternalLink from "../shared/external-or-internal-link";
import type { ReusableFieldsButtonUrl_Fields } from "@/graphql/graphql";
interface Props {
  data: FragmentType<typeof BlocksFragment>;
}
export default function Wysiwyg(props: Props) {
  const data = useFragment(BlocksFragment, props.data);

  if (data.__typename !== "BlocksBlocksWysiwygLayout") return null;
  return (
    <section className="section prose prose-invert prose-p:my-2 prose-headings:my-0 mx-auto max-w-200">
      {parse(data.content || "")}

      {data.button?.url && data.button.label && (
        <ExternalOrInternalLink
          className="mx-auto"
          buttonProps={data.button as ReusableFieldsButtonUrl_Fields}
        />
      )}
    </section>
  );
}
