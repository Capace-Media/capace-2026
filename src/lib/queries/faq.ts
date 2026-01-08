import { graphql } from "@/graphql";

export const FaqQuery = graphql(`
  query FAQ {
    faq {
      questions {
        questions {
          question
          answer
        }
      }
    }
  }
`);
