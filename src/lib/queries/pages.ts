import { graphql } from "@/graphql/gql";

export const PageQuery = graphql(`
  query Page($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      title
      slug
    }
  }
`);
