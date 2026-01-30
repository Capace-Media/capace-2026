import { graphql } from "@/graphql/gql";

export const PageSlugsQuery = graphql(`
  query PageSlugsQuery {
    pages(first: 100) {
      nodes {
        uri
        modified
      }
    }
  }
`);

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
