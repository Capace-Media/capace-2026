import { useFragment, type FragmentType } from "@/graphql";
import { BlocksFragment } from "@/lib/queries/fragments";
import HeadingWithAccent from "@/components/shared/heading-with-accent";
import Card from "@/components/shared/card";
import parse from "html-react-parser";
import ExternalOrInternalLink from "@/components/shared/external-or-internal-link";
import type { ReusableFieldsButton_Fields } from "@/graphql/graphql";

interface Props {
  data: FragmentType<typeof BlocksFragment>;
}
export default function CardsAndText(props: Props) {
  const data = useFragment(BlocksFragment, props.data);

  if (data.__typename !== "BlocksBlocksCardsAndTextLayout") return null;
  return (
    <section className="section items-center">
      <HeadingWithAccent
        accentedHeading={data.accentHeading?.accent || ""}
        mainHeading={data.accentHeading?.main || ""}
        noBottomMargin
      />
      <p className="prose prose-invert text-center">{data.textContent}</p>
      <div className="flex flex-wrap justify-center gap-6">
        {data.cards?.map((card, index) => (
          <Card key={index} className="max-w-100 flex-1 border">
            <Card.Body>
              <Card.Title>{card?.card?.title}</Card.Title>
              {card?.card?.image?.node.mediaItemUrl && (
                <Card.Icon src={card?.card?.image?.node.mediaItemUrl} />
              )}
              {card?.card?.textContent && (
                <Card.TextContent>
                  <div className="prose prose-invert">
                    {parse(card?.card?.textContent)}
                  </div>
                </Card.TextContent>
              )}
              {card?.card?.button?.url && card.card.button.label && (
                <Card.Footer>
                  <ExternalOrInternalLink
                    buttonProps={
                      card.card.button as ReusableFieldsButton_Fields
                    }
                  />
                </Card.Footer>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}
