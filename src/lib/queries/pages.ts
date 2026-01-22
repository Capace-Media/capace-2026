import { graphql } from "@/graphql/gql";
import { BlocksFragment } from "./fragments";

export const PageQuery = graphql(`
  query Page($slug: ID = "hem") {
    page(id: $slug, idType: URI) {
      title
      slug
      pageContent {
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
