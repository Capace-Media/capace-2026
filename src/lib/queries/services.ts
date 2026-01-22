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
      serviceContent {
        description
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
