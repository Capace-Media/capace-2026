import { graphql } from "@/graphql/gql";

export const PageQuery = graphql(`
  query Page($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      title
      slug
      pageContent {
        heroSize
        medium {
          heading_accent
          heading_main
          text
        }
        large {
          ctaLabel
          ctaUrl
          heading
          subheading
          heroImage {
            node {
              altText
              mediaDetails {
                filePath
                height
                width
              }
            }
          }
        }
      }
      sectionsContent {
        blocks {
          ... on SectionsContentBlocksMediaAndTextLayout {
            __typename
            mediaAndText {
              accentedHeading
              ctaButton
              ctaLabel
              ctaUrl
              mainHeading
              textContent
              image {
                node {
                  id
                  altText
                  caption
                  sourceUrl
                  mediaDetails {
                    filePath
                    height
                    width
                  }
                }
              }
            }
          }
          ... on SectionsContentBlocksImageBannerLayout {
            __typename
            fullWidth
            images {
              nodes {
                altText
                caption
                mediaDetails {
                  filePath
                  height
                  width
                }
              }
            }
          }
          ... on SectionsContentBlocksAnimatedCardsLayout {
            __typename
            ctaButton
            ctaLabel
            ctaUrl
            headingAccent
            headingMain
            numberingStyle
            cards {
              card {
                ctaButton
                ctaLabel
                ctaUrl
                textContent
                title
                image {
                  node {
                    altText
                    caption
                    mediaDetails {
                      filePath
                      height
                      width
                    }
                  }
                }
              }
            }
          }
          ... on SectionsContentBlocksCaseCardGridLayout {
            __typename
            sortingOrder
            cases {
              edges {
                node {
                  id
                }
              }
            }
          }
          ... on SectionsContentBlocksTestimonialsLayout {
            __typename
            itemAmount
            sortingOrder
          }
          ... on SectionsContentBlocksFaqLayout {
            __typename
          }
          ... on SectionsContentBlocksLatestNewsGridLayout {
            __typename
          }
          ... on SectionsContentBlocksCardsAndTextLayout {
            __typename
            headingAccent
            headingMain
            textContent
            cards {
              card {
                ctaButton
                ctaLabel
                ctaUrl
                textContent
                title
                image {
                  node {
                    altText
                    caption
                    mediaDetails {
                      filePath
                      height
                      width
                    }
                  }
                }
              }
            }
          }
          ... on SectionsContentBlocksServicesCardsLayout {
            __typename
            headingAccent
            headingMain
            textContent
          }
          ... on SectionsContentBlocksTimelineLayout {
            __typename
          }
          ... on SectionsContentBlocksEmployeesLayout {
            __typename
            headingAccent
            headingMain
          }
          ... on SectionsContentBlocksCollaboratorsBannerLayout {
            __typename
          }
        }
      }
    }
  }
`);
