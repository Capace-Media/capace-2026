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
      }
    }
  }
`);
