import { graphql } from "@/graphql";

export const NewsSlugsQuery = graphql(`
  query NewsSlugsQuery {
    posts(first: 100) {
      nodes {
        uri
        modified
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
        seo {
          readingTime
        }
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
      seo {
        readingTime
      }
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
