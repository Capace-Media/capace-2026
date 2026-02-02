"use client";
import { getTestimonials } from "@/lib/fetchers/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Minus } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import CarouselPositionIndicator from "@/components/shared/carousel-position-indicator";

interface Props {
  data: Awaited<ReturnType<typeof getTestimonials>>;
}

export default function Testimonials(props: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [nodes, setNodes] = useState<HTMLElement[]>([]);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
    setNodes(api.slideNodes());
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="w-full max-w-3xl"
      opts={{ loop: true }}
    >
      <CarouselContent className="-ml-1">
        {props.data!.map((testimonial, index) => (
          <CarouselItem
            key={index}
            className="pl-1 ease-in-out sm:basis-1/2 lg:basis-1/2"
          >
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center p-6">
                <TestimonialCard
                  totalAmountOfCards={props.data?.length || 0}
                  index={index}
                  current={current}
                  author={testimonial.testimonialContent?.author || ""}
                  authorTitle={
                    testimonial.testimonialContent?.authorTitle || ""
                  }
                  companyName={
                    testimonial.testimonialContent?.companyName || ""
                  }
                  textContent={
                    testimonial.testimonialContent?.textContent || ""
                  }
                />
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

function getProfileImage(index: number): string {
  const imageSources = [
    "/icons/profile-1.svg",
    "/icons/profile-2.svg",
    "/icons/profile-3.svg",
    "/icons/profile-4.svg",
    "/icons/profile-5.svg",
  ];
  return imageSources[index % imageSources.length] as string;
}

interface TestimonialCardProps {
  index: number;
  author: string;
  authorTitle: string;
  companyName: string;
  textContent: string;
  current: number;
  totalAmountOfCards: number;
}
const TestimonialCard = (props: TestimonialCardProps) => {
  const isPrevious = props.current === props.index + 2;
  // Some logic to check which card is next in line, next next in line and so on.
  // This is used to create a "fan" effect. Due to how to caraousel is setup whith
  // infinite scroll we have to check for a lot of edge cases...
  const isPrevPrev =
    props.index === props.current - 3 ||
    (props.current === 1 && props.index === props.totalAmountOfCards - 2) ||
    (props.current === 2 && props.index === props.totalAmountOfCards - 1);

  const isNext = props.current === props.index;
  const isNextNext =
    props.index === props.current + 1 ||
    (props.index === 1 && props.current === props.totalAmountOfCards) ||
    (props.index === 0 && props.current === props.totalAmountOfCards - 1);
  const isCurrent = props.current === props.index + 1;
  const isNextOnLastCard =
    props.current === props.totalAmountOfCards && props.index === 0;
  const isPreviousOnFirstCard =
    props.current === 1 && props.index === props.totalAmountOfCards - 1;
  return (
    <div
      className={cn(
        "border-accent flex h-90 w-70 translate-y-5 items-center justify-center rounded-2xl border-4 opacity-100 transition-all duration-500",
        (isPrevious || isPreviousOnFirstCard) && "-rotate-5",
        isPrevPrev && "translate-y-20 -rotate-20",
        isNextNext && "translate-y-20 rotate-20",
        (isNext || isNextOnLastCard) && "rotate-5",
        isCurrent && "translate-y-0",
        !isNext &&
          !isPrevious &&
          !isCurrent &&
          !isPreviousOnFirstCard &&
          !isNextOnLastCard &&
          "opacity-0",
      )}
    >
      <div className="border-muted flex h-[93%] w-[93%] flex-col items-center gap-4 rounded-lg border">
        <div className="relative h-1/4 min-h-1/4 w-full">
          <Image
            src={getProfileImage(props.index)}
            alt={""}
            fill
            aria-label="hidden"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-bold">
            <span>
              <Minus className="inline" /> {props.author}
            </span>
            , <span>{props.authorTitle}</span>
          </h3>
          <p className="text-accent text-sm font-bold uppercase">
            {props.companyName}
          </p>
        </div>
        <p className="px-1 text-center text-sm">{props.textContent}</p>
      </div>
    </div>
  );
};
