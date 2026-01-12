import { graphql } from "@/graphql";

export const FooterQuery = graphql(`
  query Footer {
    footer {
      footerContent {
        address
        email
        heading
        telephone
        textContent
        socials {
          facebook
          instagram
          linkedin
          threads
          tiktok
          x
        }
        certifications {
          nodes {
            altText
            id
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
