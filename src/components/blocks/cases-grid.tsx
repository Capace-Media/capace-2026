import type { PageQuery } from "@/graphql/graphql";
import HeadingWithAccent from "../shared/heading-with-accent";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  data: Extract<
    NonNullable<
      NonNullable<NonNullable<PageQuery["page"]>["blocks"]>["blocks"]
    >[number],
    { __typename: "BlocksBlocksCaseCardGridLayout" }
  >;
}

export default function CasesGrid(props: Props) {
  console.log("Cases data:", props.data);

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="rounded-image-mask" clipPathUnits="objectBoundingBox">
            <path d="M0.935,0 H0.065 C0.029,0,0,0.037,0,0.082 V0.917 C0,0.963,0.029,1,0.065,1 H0.502 C0.537,1,0.566,0.963,0.566,0.919 V0.87 H0.566 C0.566,0.825,0.594,0.789,0.63,0.788 H0.935 C0.971,0.788,1,0.751,1,0.706 V0.082 C1,0.037,0.971,0,0.935,0 H0.935 Z" />
          </clipPath>
        </defs>
      </svg>
      <section className="section flex flex-col items-center border">
        <HeadingWithAccent
          accentedHeading={props.data.accentHeading?.accent || ""}
          mainHeading={props.data.accentHeading?.main || ""}
        />
        <div className="flex flex-col gap-12 py-8 sm:flex-row">
          {props.data.cases?.nodes.map((item, index) => {
            if (item.__typename !== "Case") return null;
            return (
              <div key={index} className="flex flex-1 flex-col gap-4">
                <div className="relative aspect-[1.3] h-auto w-full">
                  <Image
                    src={item.caseContent?.heroImage?.node.mediaItemUrl || ""}
                    alt={
                      item.caseContent?.heroImage?.node.altText ||
                      item.title ||
                      ""
                    }
                    className="object-cover"
                    style={{ clipPath: "url(#rounded-image-mask)" }}
                    fill
                  />
                  <Button
                    withArrow
                    variant={"secondaryAccent"}
                    className="absolute right-2 bottom-0 w-[170]!"
                  >
                    Läs mer
                  </Button>
                </div>
                <div className="flex flex-col-reverse justify-between gap-2 sm:flex-row">
                  <h3 className="flex items-center gap-3 text-lg font-bold">
                    <span className="bg-accent h-3 w-3 rounded-full"></span>
                    {item.title}
                  </h3>
                  <div className="flex gap-2">
                    {item.casesCategories?.nodes.map((category, index) => (
                      //TODO Fixa länk
                      <Link
                        href={`tjanster/${category.slug}`}
                        key={index}
                        className="border-muted text-muted-foreground hover:border-accent rounded-full border p-2 text-base transition-colors duration-300 hover:text-white hover:no-underline md:text-xs"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  {item.caseContent?.shortDescription}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
