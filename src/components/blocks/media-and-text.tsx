import type { ReusableFieldsButton_Fields } from "@/graphql/graphql";
import { type FragmentType, useFragment } from "@/graphql/fragment-masking";
import parse from "html-react-parser";
import HeadingWithAccent from "../shared/heading-with-accent";
import ExternalOrInternalLink from "../shared/external-or-internal-link";
import ParallaxImage from "../shared/parallax-image";
import { cn } from "@/lib/utils";
import { graphql } from "@/graphql";

const MediaAndTextFragment = graphql(`
  fragment MediaAndTextFragment on BlocksBlocksMediaAndTextLayout {
    __typename
    mediaAndText {
      textContent
      imagePlacement
      accentHeading {
        accent
        main
      }
      image {
        node {
          altText
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
      }
      button {
        ariaLabel
        __typename
        label
        url {
          externalLink
          internalLink {
            nodes {
              slug
            }
          }
        }
      }
    }
  }
`);

type MediaAndTextProps = {
  data: FragmentType<typeof MediaAndTextFragment>;
};

export default function MediaAndText(props: MediaAndTextProps) {
  const data = useFragment(MediaAndTextFragment, props.data);
  const image = data.mediaAndText?.image?.node;
  const button = data.mediaAndText?.button;
  const imageOnRightSide = data.mediaAndText?.imagePlacement;

  return (
    <section
      className={cn(
        "section grid grid-cols-1 grid-rows-[auto_1fr] gap-6 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-12",
      )}
    >
      <div className="order-1">
        {(data?.mediaAndText?.accentHeading?.accent ||
          data?.mediaAndText?.accentHeading?.main) && (
          <HeadingWithAccent
            noBottomMargin
            textAlign="left"
            accentedHeading={data?.mediaAndText.accentHeading?.accent || ""}
            mainHeading={data?.mediaAndText.accentHeading?.main || ""}
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
            sizes="(max-width: 1024px)100vw, 50vw"
          />
        )}
      </div>
      <div
        className={cn(
          "prose prose-invert italic-accent list-capace order-3 flex flex-col",
        )}
      >
        {parse(data.mediaAndText?.textContent || "")}
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
