import { graphql } from "@/graphql";

export const AllServicesSlugsQuery = graphql(`
  query AllServicesSlugs {
    serviceCategories {
      nodes {
        slug
        services {
          nodes {
            slug
          }
        }
      }
    }
  }
`);
