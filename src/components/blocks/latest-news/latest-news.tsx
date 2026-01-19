"use client";
import { Button } from "../../ui/button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArticleCard from "../../shared/article-card";
import dayjs from "dayjs";
import "dayjs/locale/sv";
import type { getLatestNewsPreviews } from "@/lib/fetchers/news";
gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
  data: Awaited<ReturnType<typeof getLatestNewsPreviews>>;
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
      <div className="news-container grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {props.data?.map((item, index) => {
          let date;
          if (item.date) {
            date = new Date(item.date?.toString());
          }
          return (
            <ArticleCard
              className="news-card"
              key={index}
              imgSrc={item.postContent?.heroImage?.node.mediaItemUrl || ""}
              altText={
                item.postContent?.heroImage?.node.altText || item.title || ""
              }
              buttonLabel={"Läs inlägg"}
              buttonLink={`/nyheter/${item.slug}` || "/nyheter"}
              ariaLabel={`Läs blogginlägget: ${item.title}`}
            >
              <ArticleCard.Header>
                <h3 className="flex items-center gap-3 text-lg font-medium">
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
          );
        })}
      </div>
      <div className="py-12">
        <Button withArrow>Läs alla nyheter</Button>
      </div>
    </>
  );
}
