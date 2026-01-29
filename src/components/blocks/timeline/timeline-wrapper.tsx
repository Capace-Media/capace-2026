import { graphql, useFragment, type FragmentType } from "@/graphql";
import Timeline from "./timeline";
import HeadingWithAccent from "@/components/shared/heading-with-accent";

export const Milestones_Fragment = graphql(`
  fragment Milestones_Fragment on BlocksBlocksMilestones {
    description
    image {
      node {
        ...ImageFragment
      }
    }
    title
    year
  }
`);

export const Timeline_Fragment = graphql(`
  fragment Timeline_Fragment on BlocksBlocksTimelineLayout {
    __typename
    accentHeading {
      accent
      main
    }
    milestones {
      ...Milestones_Fragment
    }
  }
`);

export type TimelineProps = {
  data: FragmentType<typeof Timeline_Fragment>;
};

export default function TimelineWrapper(props: TimelineProps) {
  const data = useFragment(Timeline_Fragment, props.data);
  console.log("timeline weapper data:", data);

  if (!data) return null;
  return (
    <section className="section items-center">
      {(data.accentHeading?.accent || data.accentHeading?.main) && (
        <HeadingWithAccent
          accentedHeading={data.accentHeading.accent || ""}
          mainHeading={data.accentHeading.main || ""}
        />
      )}
      <Timeline data={props.data} />
    </section>
  );
}
