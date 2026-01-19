"use client";
import type { PageQuery } from "@/graphql/graphql";
import HeadingWithAccent from "../../shared/heading-with-accent";
import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArticleCard from "../../shared/article-card";
gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
  data: Extract<
    NonNullable<
      NonNullable<NonNullable<PageQuery["page"]>["blocks"]>["blocks"]
    >[number],
    { __typename: "BlocksBlocksCaseCardGridLayout" }
  >;
}

export default function LatestNews(props: Props) {
  useGSAP(() => {
    const targets = gsap.utils.toArray(".news-card");
    gsap.fromTo(
      targets,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".news-container",
          start: "top center",
        },
      },
    );
  });

  return (
    <>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {props.data.cases?.nodes.map((item, index) => {
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
      <div className="py-12">
        <Button withArrow>Se fler kundprojekt</Button>
      </div>
      <div
        aria-hidden
        className="absolute right-0 bottom-0 ml-auto aspect-square w-60 translate-x-[25%] md:w-80"
      >
        <Image
          src={"/stickers/stickers-capace.webp"}
          alt={""}
          aria-hidden
          fill
          sizes="20vw"
          className="object-contain"
        />
      </div>
    </>
  );
}
