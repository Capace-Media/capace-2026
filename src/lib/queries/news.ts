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
          ...PageContentFragment
        }
      }
    }
  }
`);

// export const NewsBySlugQuery = graphql(`
//   query NewsBySlugQuery($slug: ID!) {
//     post(id: $slug, idType: URI) {
//       title
//       date
//       slug
//       pageContent {
//         ...PageContentFragment
//       }
//     }
//   }
// `);
