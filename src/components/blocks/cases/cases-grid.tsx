"use client";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArticleCard from "../../shared/article-card";
gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
  data: any;
}

export default function CasesGrid(props: Props) {
  useGSAP(() => {
    const targets = gsap.utils.toArray(".case-card");
    gsap.fromTo(
      targets,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".cases-container",
          start: "top center",
        },
      },
    );
  });

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      {props.data.map((item: any, index: number) => {
        console.log("item is:", item);

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
