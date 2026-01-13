import { graphql } from "@/graphql";

export const CollaboratorsQuery = graphql(`
  query Collaborators {
    collaborators {
      collaboratorContent {
        collaborators {
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
          url
        }
      }
    }
  }
`);
