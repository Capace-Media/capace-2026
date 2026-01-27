import { useFragment, type FragmentType } from "@/graphql";
import { BlocksFragment } from "@/lib/queries/fragments";
import TwoColumnText from "./two-column-text";
import HeadingWithAccent from "@/components/shared/heading-with-accent";

interface Props {
  data: FragmentType<typeof BlocksFragment>;
}
export default function TwoColumnTextWrapper(props: Props) {
  const data = useFragment(BlocksFragment, props.data);
  if (data.__typename !== "BlocksBlocksTwoColumnTextLayout") return null;

  return (
    <section className="section items-center">
      {data.accentHeading?.accent ||
        (data.accentHeading?.main && (
          <HeadingWithAccent
            accentedHeading={data.accentHeading?.accent || ""}
            mainHeading={data.accentHeading?.main || ""}
          />
        ))}
      <TwoColumnText column1={data.column_left} column2={data.column_right} />
    </section>
  );
}
