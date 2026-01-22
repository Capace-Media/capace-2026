"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { getCases } from "@/lib/fetchers/cases";
import ArticleCard from "@/components/shared/article-card";
import CarouselPositionIndicator from "@/components/shared/carousel-position-indicator";

interface Props {
  data: Awaited<ReturnType<typeof getCases>>;
}

export default function CasesCarousel(props: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="w-full max-w-6xl overflow-hidden"
      opts={{ loop: true }}
    >
      <CarouselContent className="-ml-1">
        {props.data?.nodes.map((c, index) => (
          <CarouselItem
            key={index}
            className="pl-1 ease-in-out sm:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center p-6">
                <ArticleCard
                  imgSrc={
                    c.caseContent?.heroImage?.node.mediaItemUrl ||
                    "/misc/no-image.svg"
                  }
                  altText={c.caseContent?.heroImage?.node.altText || ""}
                  buttonLabel={"Läs mer"}
                  buttonLink={`/kundcase/${c.slug}`}
                  ariaLabel={""}
                >
                  <ArticleCard.Footer className="text-base font-medium">
                    {c.title}
                  </ArticleCard.Footer>
                </ArticleCard>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPositionIndicator currentIndex={current} totalLenght={count} />
      <div className="flex h-full w-full justify-center gap-8">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
