import { graphql } from "@/graphql";

export const CaseSlugsQuery = graphql(`
  query CaseSlugsQuery {
    cases(first: 100) {
      nodes {
        uri
      }
    }
  }
`);

export const CaseQuery = graphql(`
  query Case($slug: ID!) {
    case(id: $slug, idType: URI) {
      title
      slug
      casesCategories {
        nodes {
          name
          slug
        }
      }
      blocks {
        blocks {
          ...BlocksFragment
        }
      }

      caseContent {
        url
        followLink
        heroImage {
          node {
            altText
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
        shortDescription
      }
    }
  }
`);

export const CasesQuery = graphql(`
  query Cases {
    cases(where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        __typename
        caseContent {
          shortDescription
          heroImage {
            node {
              altText
              mediaItemUrl
              mediaDetails {
                height
                width
              }
            }
          }
        }
        slug
        title
        id
        casesCategories {
          nodes {
            slug
            name
          }
        }
      }
    }
  }
`);
