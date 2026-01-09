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
    <div className="flex w-full flex-col border border-pink-400">
      <div className="border border-red-300">
        <h3 className="text-accent">{data?.accentedHeading}</h3>
        <h3>{data?.mainHeading}</h3>
      </div>
      <div className="flex flex-col-reverse gap-2 border border-blue-400">
        {data?.textContent && parse(data?.textContent)}
        <div className="relative aspect-video border border-green-400">
          <Image
            src={image?.sourceUrl || ""}
            alt={image?.altText || ""}
            fill
            objectFit="cover"
          />
        </div>
      </div>
      {props.data.mediaAndText?.ctaUrl && (
        <Button withArrow className={"w-fit"}>
          <Link href={props.data.mediaAndText.ctaUrl}>
            {props.data.mediaAndText?.ctaLabel}
          </Link>
        </Button>
      )}
    </div>
  );
}
