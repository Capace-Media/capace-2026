import { graphql } from "@/graphql";

export const ServiceSlugsQuery = graphql(`
  query ServicesSlugs {
    services {
      nodes {
        uri
      }
    }
  }
`);

export const ServicePageQuery = graphql(`
  query Query($slug: ID!) {
    service(id: $slug, idType: URI) {
      id
      title
      slug
      pageContent {
        ...PageContentFragment
      }
      blocks {
        blocks {
          ...BlocksFragment
        }
      }
      serviceContent {
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
