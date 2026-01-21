import { type FragmentType, useFragment } from "@/graphql/fragment-masking";
import { BlocksFragment } from "@/lib/queries/fragments";
import Image from "next/image";
import ParallaxImage from "../shared/parallax-image";

interface Props {
  data: FragmentType<typeof BlocksFragment>;
}
export default function ImageBanner(props: Props) {
  const data = useFragment(BlocksFragment, props.data);

  if (data.__typename !== "BlocksBlocksImageBannerLayout") return null;

  return (
    <section className="section gap-0 md:flex-row">
      {data.images?.nodes.map((image, index) => (
        <div className="relative min-h-64 flex-1 md:min-h-120" key={index}>
          <ParallaxImage
            src={image.mediaItemUrl || "/misc/no-image.svg"}
            alt={image.altText || ""}
          />
          {/* <Image
            src={image.mediaItemUrl || "/misc/no-image.svg"}
            alt={image.altText || ""}
            fill
            className="object-cover"
          /> */}
        </div>
      ))}
    </section>
  );
}
