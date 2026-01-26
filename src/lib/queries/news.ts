import { graphql } from "@/graphql";

export const NewsQuery = graphql(`
  query NewsQuery($amount: Int!, $after: String) {
    posts(first: $amount, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        date
        title
        slug
        pageContent {
          rounded {
            node {
              altText
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`);

export const NewsBySlugQuery = graphql(`
  query NewsBySlugQuery($slug: ID!) {
    post(id: $slug, idType: URI) {
      title
      date
      slug
      blocks {
        blocks {
          ...BlocksFragment
        }
      }
      pageContent {
        rounded {
          node {
            mediaItemUrl
            altText
          }
        }
      }
    }
  }
`);
