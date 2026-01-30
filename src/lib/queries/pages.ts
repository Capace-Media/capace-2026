import { graphql } from "@/graphql/gql";

export const PageSlugsQuery = graphql(`
  query PageSlugsQuery {
    pages(first: 100) {
      nodes {
        uri
        modified
      }
    }
  }
`);

export const PageQuery = graphql(`
  query Page($slug: ID = "hem") {
    page(id: $slug, idType: URI) {
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
    }
  }
`);

export const DraftPageQuery = graphql(`
  query DraftPage($id: ID!) {
    page(id: $id, idType: DATABASE_ID, asPreview: true) {
      title
      slug
      status
      pageContent {
        ...PageContentFragment
      }
      preview {
        node {
          pageContent {
            ...PageContentFragment
          }
        }
      }
      revisions(
        first: 1
        where: { orderby: { field: MODIFIED, order: DESC } }
      ) {
        nodes {
          title
          slug
          databaseId
          pageContent {
            ...PageContentFragment
          }
        }
      }
    }
  }
`);
