import { graphql } from "@/graphql/gql";

export const PageQuery = graphql(`
  query Page($slug: ID = "hem") {
    page(id: $slug, idType: URI) {
      title
      slug
      pageContent {
        rounded {
          node {
            altText
            mediaItemUrl
          }
        }
        small {
          heroImage {
            node {
              altText
              mediaItemUrl
            }
          }
        }
        medium {
          heading_accent
          heading_main
          text
        }
        large {
          heading
          headingAccent
          subheading
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
          button {
            ariaLabel
            label
            url {
              externalLink
              internalLink {
                nodes {
                  slug
                }
              }
              is_internal
            }
          }
        }
      }

      blocks {
        blocks {
          ...BlocksFragment
        }
      }
    }
  }
`);
