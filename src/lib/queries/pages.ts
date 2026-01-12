import { graphql } from "@/graphql/gql";

export const PageQuery = graphql(`
  query Page($slug: ID = "hem") {
    page(id: $slug, idType: URI) {
      title
      slug
      blocks {
        blocks {
          ... on BlocksBlocksMediaAndTextLayout {
            __typename
            mediaAndText {
              image {
                node {
                  altText
                  mediaItemUrl
                  mediaDetails {
                    height
                    width
                  }
                }
              }
              button {
                ariaLabel
                __typename
                label
                url {
                  externalLink
                  internalLink {
                    nodes {
                      slug
                    }
                  }
                  internalOrExternal
                }
              }
              accentHeading {
                accent
                main
              }
              textContent
            }
          }
        }
      }
    }
  }
`);
