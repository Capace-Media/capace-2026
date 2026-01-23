import { graphql } from "@/graphql";

// export const ServiceSlugsQuery = graphql(`
//   query ServicesSlugs {
//     serviceCategories {
//       nodes {
//         slug
//         services {
//           nodes {
//             slug
//           }
//         }
//       }
//     }
//   }
// `);

export const ServicePageQuery = graphql(`
  query Query($slug: ID!) {
    service(id: $slug, idType: URI) {
      id
      title
      slug
      pageContent {
        heroSize
        large {
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
          heading
          headingAccent
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
          subheading
        }
        medium {
          heading_accent
          heading_main
          text
        }
        small {
          heroImage {
            node {
              altText
              mediaItemUrl
            }
          }
        }
      }
      blocks {
        blocks {
          ...BlocksFragment
        }
      }
      serviceContent {
        shortDescription
        icon {
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
    }
  }
`);
