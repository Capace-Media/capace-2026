import { graphql } from "@/graphql";

export const LatestNewsPreviewsQuery = graphql(`
  query LatestNewsPreviews {
    posts(first: 3) {
      nodes {
        date
        title
        slug
        postContent {
          heroImage {
            node {
              altText
              mediaItemUrl
              mediaDetails {
                width
                height
              }
            }
          }
        }
      }
    }
  }
`);

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
        postContent {
          heroImage {
            node {
              altText
              mediaItemUrl
              mediaDetails {
                width
                height
              }
            }
          }
        }
      }
    }
  }
`);
