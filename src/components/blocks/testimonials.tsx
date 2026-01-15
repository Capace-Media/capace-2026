import { getTestimonials } from "@/lib/fetchers/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeadingWithAccent from "../shared/heading-with-accent";
import type { PageQuery } from "@/graphql/graphql";
import { Minus } from "lucide-react";
import Image from "next/image";

interface Props {
  data: Extract<
    NonNullable<
      NonNullable<NonNullable<PageQuery["page"]>["blocks"]>["blocks"]
    >[number],
    { __typename: "BlocksBlocksTestimonialsLayout" }
  >;
}

export default async function Testimonials(props: Props) {
  const data = await getTestimonials();
  console.log("test. data:", data);
  if (!data) return null;

  return (
    <section className="section flex w-full flex-col items-center justify-center border">
      <HeadingWithAccent
        accentedHeading={props.data.accentHeading?.accent || ""}
        mainHeading={props.data.accentHeading?.main || ""}
      />
      <Carousel className="max-w-3xl border">
        <CarouselContent>
          {data.map((testimonial, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3">
              <div className="border-accent flex h-80 items-center justify-center rounded-2xl border-4">
                <div className="border-muted flex h-[93%] w-[93%] flex-col items-center gap-4 rounded-lg border">
                  <div className="relative h-1/4 w-full">
                    <Image
                      src={getRandomProfileImage()}
                      alt={""}
                      fill
                      aria-label="hidden"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h4 className="font-bold">
                      <span>
                        <Minus className="inline" />{" "}
                        {testimonial.testimonialContent?.author}
                      </span>
                      ,{" "}
                      <span>{testimonial.testimonialContent?.authorTitle}</span>
                    </h4>
                    <p className="text-accent text-sm font-bold uppercase">
                      {testimonial.testimonialContent?.companyName}
                    </p>
                  </div>
                  <p className="px-1 text-center text-sm">
                    {testimonial.testimonialContent?.textContent}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex h-full w-full justify-center gap-8 border-red-500 py-6">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
}

function getRandomProfileImage(): string {
  const imageSources = [
    "/misc/profile-1.svg",
    "/misc/profile-2.svg",
    "/misc/profile-3.svg",
    "/misc/profile-4.svg",
    "/misc/profile-5.svg",
  ];
  const randomIndex = Math.floor(Math.random() * imageSources.length);
  return imageSources[randomIndex] as string;
}
