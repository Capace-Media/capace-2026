import type { ReusableFieldsButton_Fields } from "@/graphql/graphql";
import { type FragmentType, useFragment } from "@/graphql/fragment-masking";
import { BlocksFragment } from "@/lib/queries/fragments";
import parse from "html-react-parser";
import HeadingWithAccent from "../shared/heading-with-accent";
import ExternalOrInternalLink from "../shared/external-or-internal-link";
import ParallaxImage from "../shared/parallax-image";
import { cn } from "@/lib/utils";

interface Props {
  data: FragmentType<typeof BlocksFragment>;
}

export default function MediaAndText(props: Props) {
  const block = useFragment(BlocksFragment, props.data);

  if (block.__typename !== "BlocksBlocksMediaAndTextLayout") return null;

  const data = block.mediaAndText;
  const image = block.mediaAndText?.image?.node;
  const button = block.mediaAndText?.button;
  const imageOnRightSide = block.mediaAndText?.imagePlacement;

  return (
    <section
      className={cn(
        "section grid grid-cols-1 grid-rows-[auto_1fr] gap-6 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-12",
      )}
    >
      <div className="order-1">
        {(data?.accentHeading?.accent || data?.accentHeading?.main) && (
          <HeadingWithAccent
            noBottomMargin
            textAlign="left"
            accentedHeading={data?.accentHeading?.accent || ""}
            mainHeading={data?.accentHeading?.main || ""}
          />
        )}
      </div>
      <div
        className={cn(
          "relative order-2 col-span-1 row-span-3 flex max-h-50 min-h-50 md:max-h-140 md:min-h-100",
          imageOnRightSide ? "lg:order-1" : "lg:order-0",
        )}
      >
        {image?.mediaItemUrl && (
          <ParallaxImage
            src={image?.mediaItemUrl}
            alt={image?.altText || "Dekorativ bild"}
            sizes="(max-width: 768px)100vw, 50vw"
          />
        )}
      </div>
      <div
        className={cn(
          "prose prose-invert italic-accent list-capace order-3 flex flex-col",
        )}
      >
        {parse(data?.textContent || "")}
        {button?.url && button.label && (
          <div className={cn("flex justify-center py-10 lg:justify-start")}>
            <ExternalOrInternalLink
              variant="secondary"
              buttonProps={button as ReusableFieldsButton_Fields}
            />
          </div>
        )}
      </div>
    </section>
  );
}
