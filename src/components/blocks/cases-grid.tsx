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
      <section className="section flex flex-col items-center border">
        <HeadingWithAccent
          accentedHeading={props.data.accentHeading?.accent || ""}
          mainHeading={props.data.accentHeading?.main || ""}
        />
        <div className="grid grid-cols-1 gap-12 py-8 lg:grid-cols-2">
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
                    fill
                  />

                  <div className="absolute right-0 bottom-0 flex items-center justify-center rounded-tl-[36px] bg-black pt-4 pr-1 pl-4">
                    <div className="absolute top-0 right-0 h-6 w-6 -translate-y-full lg:h-8 lg:w-8">
                      <Image
                        src={"/misc/rounded-image-corner.svg"}
                        fill
                        alt=""
                        aria-hidden="true"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 h-6 w-6 -translate-x-full lg:h-8 lg:w-8">
                      <Image
                        src={"/misc/rounded-image-corner.svg"}
                        fill
                        alt=""
                        aria-hidden="true"
                      />
                    </div>
                    <Button
                      withArrow
                      variant={"secondaryAccent"}
                      className="w-[170]!"
                    >
                      Läs mer
                    </Button>
                  </div>
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
                        className="border-muted text-muted-foreground hover:border-accent rounded-full border p-2 px-4 text-base transition-colors duration-300 hover:text-white hover:no-underline sm:text-xs"
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
