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

// export const ServicePageQuery = graphql(`
//   query ServicePage($slug: ID = "") {
//     service(id: $slug, idType: URI) {
//       title
//       sectionsContent {
//         blocks {
//           __typename
//           ... on SectionsContentBlocksContactFormLayout {
//             __typename
//           }
//           ... on SectionsContentBlocksEmployeesLayout {
//             __typename
//             headingAccent
//             headingMain
//           }
//           ... on SectionsContentBlocksTimelineLayout {
//             __typename
//           }
//           ... on SectionsContentBlocksServicesCardsLayout {
//             __typename
//             headingAccent
//             textContent
//             headingMain
//           }
//           ... on SectionsContentBlocksCardsAndTextLayout {
//             __typename
//             headingAccent
//             textContent
//             headingMain
//           }
//           ... on SectionsContentBlocksLatestNewsGridLayout {
//             __typename
//           }
//           ... on SectionsContentBlocksFaqLayout {
//             __typename
//           }
//           ... on SectionsContentBlocksCollaboratorsBannerLayout {
//             __typename
//           }
//           ... on SectionsContentBlocksTestimonialsLayout {
//             __typename
//           }
//           ... on SectionsContentBlocksCaseCardGridLayout {
//             __typename
//             filter
//             sortingOrder
//             mainHeading
//             headingAccent
//           }
//           ... on SectionsContentBlocksAnimatedCardsLayout {
//             ctaButton
//             ctaLabel
//             numberingStyle
//             headingMain
//             headingAccent
//             ctaUrl
//             __typename
//           }
//           ... on SectionsContentBlocksImageBannerLayout {
//             __typename
//             fullWidth
//           }
//           ... on SectionsContentBlocksMediaAndTextLayout {
//             __typename
//           }
//         }
//       }
//       serviceContent {
//         textContent
//         shortDescription
//         icon {
//           node {
//             altText
//             mediaItemUrl
//             mediaDetails {
//               height
//               width
//             }
//           }
//         }
//         image {
//           node {
//             altText
//             mediaItemUrl
//             mediaDetails {
//               height
//               width
//             }
//           }
//         }
//       }
//     }
//   }
// `);
