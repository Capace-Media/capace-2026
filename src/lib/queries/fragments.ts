import { graphql } from "@/graphql/gql";

export const ImageFragment = graphql(`
  fragment ImageFragment on MediaItem {
    altText
    mediaItemUrl
    mediaDetails {
      width
      height
    }
  }
`);

export const ServiceContentFragment = graphql(`
  fragment ServiceContentFragment on ServiceContent {
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
`);

export const ButtonFragment = graphql(`
  fragment ButtonFragment on ReusableFieldsButton {
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
`);

export const EmployeeContentFragment = graphql(`
  fragment EmployeeContentFragment on EmployeeContent {
    email
    employmentType
    telephone
    image {
      node {
        mediaItemUrl
        altText
      }
    }
    quote
    textContent
    workTitle
  }
`);

export const PageContentFragment = graphql(`
  fragment PageContentFragment on PageContent {
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
`);

export const BlocksFragment = graphql(`
  fragment BlocksFragment on BlocksBlocks_Layout {
    ... on BlocksBlocksMediaAndTextLayout {
      ...MediaAndTextFragment
    }
    ... on BlocksBlocksServiceCardsLayout {
      ...ServiceCard_Fragment
    }
    ... on BlocksBlocksQuoteLayout {
      ...Quote_Fragment
    }
    ... on BlocksBlocksContactFormLayout {
      __typename
    }
    ... on BlocksBlocksCollaboratorsBannerLayout {
      __typename
    }
    ... on BlocksBlocksImageBannerLayout {
      ...ImageBannerFragment
    }
    ... on BlocksBlocksCaseCardGridLayout {
      __typename
      compact
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
    ... on BlocksBlocksTwoColumnTextLayout {
      column_right
      column_left
      __typename
      accentHeading {
        accent
        main
      }
    }
    ... on BlocksBlocksNewsLayout {
      accentHeading {
        accent
        main
      }
      newsAmount
      textContent
      __typename
    }
    ... on BlocksBlocksAuthorLayout {
      __typename
      employee {
        nodes {
          ... on Employee {
            __typename
            title
            slug
            employeeContent {
              email
              employmentType
              image {
                node {
                  altText
                  mediaItemUrl
                }
              }
              telephone
              workTitle
            }
          }
        }
      }
    }
    ... on BlocksBlocksWysiwygLayout {
      __typename
      content
      button {
        ariaLabel
        label
        url {
          externalLink
          internalLink {
            nodes {
              uri
            }
          }
        }
      }
    }
    ... on BlocksBlocksEmployeesLayout {
      __typename
      accentHeading {
        accent
        main
      }
      employees {
        nodes {
          ... on Employee {
            __typename
            title
            slug
            employeeContent {
              email
              employmentType
              quote
              telephone
              textContent
              workTitle
              image {
                node {
                  altText
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
      textContent
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
    ... on BlocksBlocksCardsAndTextLayout {
      __typename
      accentHeading {
        accent
        main
      }
      textContent
      cards {
        card {
          textContent
          title
          button {
            ariaLabel
            label
            url {
              externalLink
              internalLink {
                nodes {
                  slug
                  uri
                }
              }
            }
          }
          image {
            node {
              mediaItemUrl
              altText
            }
          }
        }
      }
    }
    ... on BlocksBlocksAnimatedCardsLayout {
      __typename
      textContent
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
`);
