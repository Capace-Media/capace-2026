import { graphql } from "@/graphql";

export const AllCaseSlugsQuery = graphql(`
  query AllCaseSlugs {
    cases {
      nodes {
        slug
      }
    }
  }
`);

export const CasePreviewsQuery = graphql(`
  query CasePreviews {
    cases {
      nodes {
        caseContent {
          projectBrief {
            image {
              node {
                mediaDetails {
                  width
                  height
                  filePath
                }
              }
            }
          }
          shortDescription
          services {
            nodes {
              slug
            }
          }
        }
        title
      }
    }
  }
`);

export const CaseQuery = graphql(`
  query Case($slug: ID = "eventourage") {
    case(id: $slug, idType: URI) {
      caseContent {
        url
        textContent_02
        textContent01
        summaryContinued
        summary
        shortDescription
        heading_02
        heading_01
        imageBanner {
          node {
            altText
            mediaItemUrl
            mediaDetails {
              width
              height
            }
          }
        }
        images {
          nodes {
            altText
            mediaItemUrl
            mediaDetails {
              width
              height
            }
          }
        }
        projectBrief {
          bulletPoint {
            description
            title
          }
          image {
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
        quote {
          author
          authorTitle
          textContent
        }
        services {
          nodes {
            slug
          }
        }
      }
    }
  }
`);
