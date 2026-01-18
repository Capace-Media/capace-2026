import type { PageQuery, ReusableFieldsButton_Fields } from "@/graphql/graphql";
import parse from "html-react-parser";
import Image from "next/image";
import HeadingWithAccent from "../shared/heading-with-accent";
import ExternalOrInternalLink from "../shared/external-or-internal-link";
import ParallaxImage from "../shared/parallax-image";

interface Props {
  data: Extract<
    NonNullable<
      NonNullable<NonNullable<PageQuery["page"]>["blocks"]>["blocks"]
    >[number],
    { __typename: "BlocksBlocksMediaAndTextLayout" }
  >;
}

export default function MediaAndText(props: Props) {
  const data = props.data.mediaAndText;
  const image = props.data.mediaAndText?.image?.node;
  const button = props.data.mediaAndText?.button;

  return (
    <section className="section grid grid-cols-1 grid-rows-3 gap-6 lg:grid-cols-2 lg:grid-rows-[auto_1fr_1fr] lg:gap-12">
      <div className="order-1">
        <HeadingWithAccent
          noBottomMargin
          textAlign="left"
          accentedHeading={data?.accentHeading?.accent || ""}
          mainHeading={data?.accentHeading?.main || ""}
        />
      </div>
      <div className="relative order-2 col-span-1 row-span-3 flex lg:order-0">
        <ParallaxImage
          src={image?.mediaItemUrl || ""}
          alt={image?.altText || "Dekorativ bild"}
        />
      </div>
      <div className="prose prose-invert italic-accent order-3 flex flex-col">
        {parse(data?.textContent || "")}
      </div>
      <div className="order-4 flex justify-center py-10 lg:justify-start">
        {button?.url && button.label && (
          <ExternalOrInternalLink
            variant="secondary"
            buttonProps={button as ReusableFieldsButton_Fields}
          />
        )}
      </div>
    </section>
  );
}
