import { graphql } from "@/graphql";

// export const AllCaseSlugsQuery = graphql(`
//   query AllCaseSlugs {
//     cases {
//       nodes {
//         slug
//       }
//     }
//   }
// `);

// export const CasePreviewsQuery = graphql(`
//   query CasePreviews {

//   }
// `);

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
              imagePlacement
            }
          }
          ... on BlocksBlocksCollaboratorsBannerLayout {
            __typename
          }
          ... on BlocksBlocksCaseCardGridLayout {
            __typename
            accentHeading {
              accent
              main
            }
            cases {
              nodes {
                ... on Case {
                  __typename
                  id
                  title
                  slug
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
                  casesCategories {
                    nodes {
                      slug
                      name
                    }
                  }
                }
              }
            }
          }
          ... on BlocksBlocksTestimonialsLayout {
            __typename
            accentHeading {
              accent
              main
            }
          }
          ... on BlocksBlocksFaqLayout {
            __typename
            accentHeading {
              accent
              main
            }
            questions {
              nodes {
                ... on Faq {
                  id
                  __typename
                  faqContent {
                    answer
                    longAnswer
                  }
                  title
                }
              }
            }
          }
          ... on BlocksBlocksAnimatedCardsLayout {
            __typename
            accentHeading {
              accent
              main
            }
            cards {
              card {
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
                textContent
                title
              }
            }
          }
          ... on BlocksBlocksLatestNewsGridLayout {
            __typename
            accentHeading {
              accent
              main
            }
          }
        }
      }

      caseContent {
        url
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
