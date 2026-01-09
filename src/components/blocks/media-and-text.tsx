import type { PageQuery } from "@/graphql/graphql";
import parse from "html-react-parser";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  data: Extract<
    NonNullable<
      NonNullable<NonNullable<PageQuery["page"]>["sectionsContent"]>["blocks"]
    >[number],
    { __typename: "SectionsContentBlocksMediaAndTextLayout" }
  >;
}

export default function MediaAndText(props: Props) {
  console.log("data:", props.data);
  const data = props.data.mediaAndText;
  const image = props.data.mediaAndText?.image?.node;

  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-6 lg:grid-cols-2 lg:grid-rows-[auto_1fr_1fr] lg:gap-12">
      <div className="order-1 flex flex-col items-center lg:items-start">
        <h3 className="font-caveat text-accent text-4xl lowercase lg:text-6xl">
          {data?.accentedHeading}
        </h3>
        <h3 className="text-4xl font-bold capitalize lg:text-6xl">
          {data?.mainHeading}
        </h3>
      </div>
      <div className="relative order-2 col-span-1 row-span-3 flex lg:order-0">
        <Image
          src={image?.sourceUrl || ""}
          alt={image?.altText || ""}
          fill
          objectFit="cover"
        />
      </div>
      <div className="prose prose-invert italic-accent order-3 flex flex-col">
        {parse(data?.textContent || "")}
      </div>
      <div className="order-4 flex justify-center py-10 lg:justify-start">
        {data?.ctaUrl && (
          <Link href={data.ctaUrl}>
            <Button withArrow>{data?.ctaLabel}</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
