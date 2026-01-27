import { useFragment, type FragmentType } from "@/graphql";
import { BlocksFragment } from "@/lib/queries/fragments";
import HeadingWithAccent from "../shared/heading-with-accent";
import Card from "../shared/card";
import parse from "html-react-parser";

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
      <div className="grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        {data.cards?.map((card, index) => (
          <Card key={index} className="max-w-100">
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
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}
