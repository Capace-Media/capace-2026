"use client";

import type { BlocksFragmentFragment } from "@/graphql/graphql";
import Link from "next/link";
import ArticleCard from "../../shared/article-card";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CategoryButtons from "@/components/shared/category-buttons";

interface Props {
  data?: NonNullable<
    Extract<
      BlocksFragmentFragment,
      { __typename: "BlocksBlocksCaseCardGridLayout" }
    >["cases"]
  >["nodes"];
}

export default function CasesGrid({ data }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".case-card");
      if (cards.length === 0) return;

      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        },
      );
    },
    { scope: containerRef, dependencies: [data] },
  );

  return (
    <div
      ref={containerRef}
      className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2"
    >
      {data?.map((item, index) => {
        if (item.__typename !== "Case") return null;

        return (
          <div key={item.slug ?? index} className="case-card invisible">
            <ArticleCard
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
                  />
                  {item.title}
                </h3>
                <CategoryButtons
                  categories={item.casesCategories?.nodes.map((c) => {
                    return { name: c.name, slug: c.slug };
                  })}
                />
              </ArticleCard.Header>

              <ArticleCard.Footer>
                {item.caseContent?.shortDescription}
              </ArticleCard.Footer>
            </ArticleCard>
          </div>
        );
      })}
    </div>
  );
}
