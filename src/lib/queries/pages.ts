import { graphql } from "@/graphql/gql";

export const PageQuery = graphql(`
  query Page($slug: ID = "hem") {
    page(id: $slug, idType: URI) {
      title
      slug
      pageContent {
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
                }
              }
              accentHeading {
                accent
                main
              }
              textContent
            }
          }
          ... on BlocksBlocksCollaboratorsBannerLayout {
            __typename
          }
        }
      }
    }
  }
`);
