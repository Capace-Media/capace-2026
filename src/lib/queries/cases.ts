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

export const CasesQuery = graphql(`
  query MyQuery2($slug: ID = "") {
    case(id: $slug, idType: URI) {
      caseContent {
        textContent_02
        textContent01
        summaryContinued
        summary
        shortDescription
        services {
          nodes {
            slug
          }
        }
        quote {
          author
          authorTitle
          textContent
        }
        projectBrief {
          bulletPoint {
            description
            title
          }
          image {
            node {
              caption
              altText
              mediaDetails {
                height
                width
                filePath
              }
            }
          }
        }
      }
    }
  }
`);
