import { execute } from "@/graphql/execute";
import { TestimonialsQuery } from "../queries/testimonials";

export async function getTestimonials() {
  // return (await execute(TestimonialsQuery, "force-cache")).testimonials?.nodes;
}
