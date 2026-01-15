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
      <CarouselContent className="-ml-4">
        {props.data!.map((testimonial, index) => (
          <CarouselItem
            key={index}
            className="basis-full pl-6 ease-in-out sm:basis-1/2 md:basis-1/3"
          >
            <TestimonialCard
              index={index}
              author={testimonial.testimonialContent?.author || ""}
              authorTitle={testimonial.testimonialContent?.authorTitle || ""}
              companyName={testimonial.testimonialContent?.companyName || ""}
              textContent={testimonial.testimonialContent?.textContent || ""}
            />
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

interface CarouselPositionIndicatorProps {
  currentIndex: number;
  totalLenght: number;
}
const CarouselPositionIndicator = (props: CarouselPositionIndicatorProps) => {
  return (
    <div className="flex justify-center gap-2 py-5">
      {Array.from({ length: props.totalLenght }).map((_, index) => (
        <div
          key={index}
          className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
            index + 1 === props.currentIndex ? "bg-accent w-8" : "bg-muted"
          }`}
        />
      ))}
    </div>
  );
};

function getProfileImage(index: number): string {
  const imageSources = [
    "/misc/profile-1.svg",
    "/misc/profile-2.svg",
    "/misc/profile-3.svg",
    "/misc/profile-4.svg",
    "/misc/profile-5.svg",
  ];
  return imageSources[index % imageSources.length] as string;
}

interface TestimonialCardProps {
  index: number;
  author: string;
  authorTitle: string;
  companyName: string;
  textContent: string;
}
const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div className="border-accent flex h-80 items-center justify-center rounded-2xl border-4">
      <div className="border-muted flex h-[93%] w-[93%] flex-col items-center gap-4 rounded-lg border">
        <div className="relative h-1/4 w-full">
          <Image
            src={getProfileImage(props.index)}
            alt={""}
            fill
            aria-label="hidden"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="font-bold">
            <span>
              <Minus className="inline" /> {props.author}
            </span>
            , <span>{props.authorTitle}</span>
          </h4>
          <p className="text-accent text-sm font-bold uppercase">
            {props.companyName}
          </p>
        </div>
        <p className="px-1 text-center text-sm">{props.textContent}</p>
      </div>
    </div>
  );
};
