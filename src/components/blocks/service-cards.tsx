"use client";
import { useFragment, type FragmentType } from "@/graphql";
import { BlocksFragment } from "@/lib/queries/fragments";
import HeadingWithAccent from "../shared/heading-with-accent";
import Card from "../shared/card";
import { Button } from "../ui/button";

interface Props {
  data: FragmentType<typeof BlocksFragment>;
}

export default function ServiceCards(props: Props) {
  const data = useFragment(BlocksFragment, props.data);
  if (data.__typename !== "BlocksBlocksServiceCardsLayout") return null;

  return (
    <section className="section items-center gap-12">
      <HeadingWithAccent
        accentedHeading={data.accentHeading?.accent || ""}
        mainHeading={data.accentHeading?.main || ""}
        noBottomMargin
      />
      <p className="prose prose-invert text-muted-foreground text-center">
        {data.description}
      </p>
      <div className="flex flex-row gap-6">
        {data.service?.nodes.map((s, index) => {
          if (s.__typename !== "Service") return;

          return (
            <Card key={index} className="max-w-40">
              <Card.Header>
                <Card.Icon
                  src={s.serviceContent?.icon?.node.mediaItemUrl}
                  altText={s.serviceContent?.icon?.node.altText}
                />
              </Card.Header>
              <Card.Body>
                <Card.Title>{s.title}</Card.Title>
                <Card.TextContent>
                  {s.serviceContent?.shortDescription}
                </Card.TextContent>
                <Button withArrow>Läs mer</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
