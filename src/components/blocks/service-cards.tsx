"use client";
import { useFragment, type FragmentType } from "@/graphql";
import { BlocksFragment } from "@/lib/queries/fragments";
import HeadingWithAccent from "../shared/heading-with-accent";
import Card from "../shared/card";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  data: FragmentType<typeof BlocksFragment>;
}

export default function ServiceCards(props: Props) {
  const data = useFragment(BlocksFragment, props.data);
  if (data.__typename !== "BlocksBlocksServiceCardsLayout") return null;

  return (
    <section className="section items-center gap-12 px-2">
      {(data.accentHeading?.main || data.accentHeading?.accent) && (
        <HeadingWithAccent
          accentedHeading={data.accentHeading?.accent || ""}
          mainHeading={data.accentHeading?.main || ""}
          noBottomMargin
        />
      )}
      {data.description && (
        <p className="prose prose-invert text-muted-foreground flex-wrap text-center">
          {data.description}
        </p>
      )}
      <div className="flex min-h-110 w-full flex-wrap justify-center gap-6">
        {data.service?.nodes.map((s, index) => {
          if (s.__typename !== "Service") return;

          return (
            <Card key={index} className="h-110 max-w-75 min-w-70">
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
              </Card.Body>
              <Card.Footer>
                <Link href={s.uri || `/tjanster/${s.slug}`} tabIndex={-1}>
                  <Button withArrow>Läs mer</Button>
                </Link>
              </Card.Footer>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
