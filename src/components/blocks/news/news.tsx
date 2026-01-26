"use client";

import ArticleCard from "../../shared/article-card";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import type { getNews } from "@/lib/fetchers/news";
import dayjs from "dayjs";
import NewsLoadMore from "./load-more-news";

interface Props {
  initialNews: Awaited<ReturnType<typeof getNews>>;
  showLoadMore?: boolean;
}

export default function News(props: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [news, setNews] = useState(props.initialNews);
  const data = news?.nodes;

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

  const handleLoadMore = (moreNews: Awaited<ReturnType<typeof getNews>>) => {
    if (moreNews?.nodes) {
      setNews((prev) => ({
        ...moreNews,
        nodes: [...(prev?.nodes || []), ...moreNews.nodes],
      }));
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className={cn(
          "grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {data?.map((item, index) => {
          let date;
          if (item.date) {
            date = new Date(item.date?.toString());
          }
          return (
            <div key={item.slug ?? index} className="case-card invisible">
              <ArticleCard
                imgSrc={item.postContent?.heroImage?.node.mediaItemUrl}
                altText={
                  item.postContent?.heroImage?.node.altText || item.title || ""
                }
                buttonLabel={"Läs mer"}
                buttonLink={`/nyheter/${item.slug}` || "/nyheter"}
                ariaLabel={`Läs mer om ${item.title}`}
              >
                <ArticleCard.Header>
                  <h3 className="flex items-center gap-3 text-sm font-bold">
                    {item.title}
                  </h3>
                </ArticleCard.Header>
                <ArticleCard.Footer>
                  <div className="flex items-center justify-between">
                    {date && (
                      <p className="text-accent">
                        {dayjs(date).format("DD MMMM YYYY")}
                      </p>
                    )}
                    <span className="text-muted-foreground">Lästid: X min</span>
                  </div>
                </ArticleCard.Footer>
              </ArticleCard>
            </div>
          );
        })}
      </div>
      {props.showLoadMore && (
        <div className="py-12">
          <NewsLoadMore
            initialNews={props.initialNews}
            onLoadMore={handleLoadMore}
          />
        </div>
      )}
    </>
  );
}
