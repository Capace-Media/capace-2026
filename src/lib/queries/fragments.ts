import { graphql } from "@/graphql/gql";

export const BlocksFragment = graphql(`
  fragment BlocksFragment on BlocksBlocks_Layout {
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
    ... on BlocksBlocksQuoteLayout {
      __typename
      author
      authorTitle
      companyName
      quote
    }
    ... on BlocksBlocksCollaboratorsBannerLayout {
      __typename
    }
    ... on BlocksBlocksImageBannerLayout {
      __typename
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
`);
