"use client";
import type { PageQuery } from "@/graphql/graphql";
import Link from "next/link";
import ArticleCard from "../../shared/article-card";

interface Props {
  data?: NonNullable<
    Extract<
      NonNullable<
        NonNullable<NonNullable<PageQuery["page"]>["blocks"]>["blocks"]
      >[number],
      { __typename: "BlocksBlocksCaseCardGridLayout" }
    >["cases"]
  >["nodes"];
}

export default function CasesGrid(props: Props) {
  console.log("case data:", props.data);

  return (
    <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2">
      {props.data?.map((item, index) => {
        if (item.__typename !== "Case") return null;

        return (
          <ArticleCard
            key={index}
            imgSrc={item.caseContent?.heroImage?.node.mediaItemUrl || ""}
            altText={
              item.caseContent?.heroImage?.node.altText || item.title || ""
            }
            buttonLabel={"Läs mer"}
            buttonLink={`/kundcase/${item.slug}` || "/kundcase"}
            ariaLabel={`Läs mer om ${item.title}`}
          >
            <ArticleCard.Header>
              <h3 className="flex items-center gap-3 text-lg font-bold">
                <span
                  className="bg-accent h-3 w-3 rounded-full"
                  aria-hidden="true"
                ></span>
                {item.title}
              </h3>
              <div className="flex gap-2">
                {item.casesCategories?.nodes.map((category, index) => (
                  //TODO Fixa länk
                  <Link
                    href={`tjanster/${category.slug}`}
                    key={index}
                    className="border-muted text-muted-foreground hover:border-accent rounded-full border p-2 px-4 text-xs transition-colors duration-300 hover:text-white hover:no-underline"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </ArticleCard.Header>
            <ArticleCard.Footer>
              {item.caseContent?.shortDescription}
            </ArticleCard.Footer>
          </ArticleCard>
        );
      })}
    </div>
  );
}
