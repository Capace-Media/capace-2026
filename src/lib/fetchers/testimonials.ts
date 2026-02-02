import { execute } from "@/graphql/execute";
import { TestimonialsQuery } from "@/lib/queries/testimonials";

export async function getTestimonials() {
  return (
    await execute(TestimonialsQuery, {
      cache: "force-cache",
      tags: ["testimonials"],
    })
  ).testimonials?.nodes;
}
