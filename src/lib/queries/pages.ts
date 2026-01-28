import { graphql } from "@/graphql/gql";

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
