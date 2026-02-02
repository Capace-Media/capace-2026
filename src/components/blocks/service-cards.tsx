"use client";
import { graphql, useFragment, type FragmentType } from "@/graphql";
import HeadingWithAccent from "../shared/heading-with-accent";
import Card from "../shared/card";
import { Button } from "../ui/button";
import Link from "next/link";
import ButtonLink from "../shared/link";

const ServiceCards_Fragment = graphql(`
  fragment ServiceCard_Fragment on BlocksBlocksServiceCardsLayout {
    __typename
    accentHeading {
      accent
      main
    }
    description
    service {
      nodes {
        ... on Service {
          __typename
          id
          title
          slug
          uri
          serviceContent {
            shortDescription
            icon {
              node {
                altText
                mediaItemUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`);

interface Props {
  data: FragmentType<typeof ServiceCards_Fragment>;
}

export default function ServiceCards(props: Props) {
  const data = useFragment(ServiceCards_Fragment, props.data);

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
                <Card.Icon src={s.serviceContent?.icon?.node.mediaItemUrl} />
              </Card.Header>
              <Card.Body>
                <Card.Title>{s.title}</Card.Title>
                <Card.TextContent>
                  {s.serviceContent?.shortDescription}
                </Card.TextContent>
              </Card.Body>
              <Card.Footer>
                <ButtonLink
                  href={s.uri || `/tjanster/${s.slug}`}
                  ariaLabel={`Läs mer om vår tjänst ${s.title}`}
                >
                  Läs mer
                </ButtonLink>
              </Card.Footer>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
