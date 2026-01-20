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

// export const CaseQuery = graphql(`
//   query Case($slug: ID = "eventourage") {
//     case(id: $slug, idType: URI) {
//       title
//   }
// `);

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
