import { graphql } from "@/graphql";

export const TestimonialsQuery = graphql(`
  query Testimonials {
    testimonials {
      nodes {
        testimonialContent {
          author
          authorTitle
          companyName
          textContent
        }
      }
    }
  }
`);
