import { type FragmentType, useFragment } from "@/graphql/fragment-masking";
import ParallaxImage from "../shared/parallax-image";
import { cn } from "@/lib/utils";
import { graphql } from "@/graphql";

const ImageBannerFragment = graphql(`
  fragment ImageBannerFragment on BlocksBlocksImageBannerLayout {
    __typename
    fullWidth
    images {
      nodes {
        altText
        mediaItemUrl
      }
    }
  }
`);

type Props = {
  data: FragmentType<typeof ImageBannerFragment>;
};

export default function ImageBanner(props: Props) {
  const data = useFragment(ImageBannerFragment, props.data);

  return (
    <section
      className={cn("section flex-row gap-0", data.fullWidth && "px-0 py-0")}
    >
      {data.images?.nodes.map((image, index) => (
        <div
          className={cn("relative min-h-64 flex-1 md:min-h-120")}
          key={index}
        >
          <ParallaxImage src={image.mediaItemUrl} alt={image.altText || ""} />
        </div>
      ))}
    </section>
  );
}
