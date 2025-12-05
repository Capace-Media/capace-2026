import { graphql } from "@/graphql";

export const AllCaseSlugsQuery = graphql(`
  query AllCaseSlugs {
    cases {
      nodes {
        slug
      }
    }
  }
`);
