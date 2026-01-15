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
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {data.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="border-accent flex h-80 items-center justify-center rounded-2xl border-4">
                <div className="border-muted flex h-[93%] w-[93%] flex-col items-center justify-center gap-4 rounded-lg border">
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
                  <p className="text-sm">
                    {testimonial.testimonialContent?.textContent}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
