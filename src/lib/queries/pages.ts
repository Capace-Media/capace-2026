import { graphql } from "@/graphql/gql";
import { BlocksFragment, PageContentFragment } from "./fragments";

export const PageQuery = graphql(`
  query Page($slug: ID = "hem") {
    page(id: $slug, idType: URI) {
      title
      slug
      pageContent {
        ...PageContentFragment
      }
      blocks {
        blocks {
          ...BlocksFragment
        }
      }
    }
  }
`);
