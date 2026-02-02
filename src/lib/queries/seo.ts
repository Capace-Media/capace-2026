import { graphql } from "@/graphql";

export const PageSeoQuery = graphql(`
  query PageSeoQuery($slug: ID!) {
    page(id: $slug, idType: URI) {
      seo {
        canonical
        metaRobotsNoindex
        opengraphTitle
        opengraphSiteName
        opengraphPublisher
        opengraphUrl
        opengraphDescription
        opengraphImage {
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
        metaDesc
        title
      }
    }
  }
`);

export const NewsSeoQuery = graphql(`
  query NewsSeoQuery($slug: ID!) {
    post(id: $slug, idType: URI) {
      seo {
        canonical
        metaRobotsNoindex
        opengraphTitle
        opengraphSiteName
        opengraphPublisher
        opengraphUrl
        opengraphDescription
        opengraphImage {
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
        metaDesc
        title
      }
    }
  }
`);

export const CaseSeoQuery = graphql(`
  query CaseSeoQuery($slug: ID!) {
    case(id: $slug, idType: URI) {
      seo {
        canonical
        metaRobotsNoindex
        opengraphTitle
        opengraphSiteName
        opengraphPublisher
        opengraphUrl
        opengraphDescription
        opengraphImage {
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
        metaDesc
        title
      }
    }
  }
`);

export const ServiceSeoQuery = graphql(`
  query ServiceSeoQuery($slug: ID!) {
    service(id: $slug, idType: URI) {
      seo {
        canonical
        metaRobotsNoindex
        opengraphTitle
        opengraphSiteName
        opengraphPublisher
        opengraphUrl
        opengraphDescription
        opengraphImage {
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
        metaDesc
        title
      }
    }
  }
`);
