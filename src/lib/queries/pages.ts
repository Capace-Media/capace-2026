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
          ... on BlocksBlocksFaqLayout {
            __typename
            questions {
              nodes {
                ... on Faq {
                  id
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
        }
      }
    }
  }
`);
