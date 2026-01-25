import { graphql } from "@/graphql";

export const EmployeesQuery = graphql(`
  query Employees {
    employees {
      nodes {
        title
        employeeContent {
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
      }
    }
  }
`);

export const EmployeeBySlugQuery = graphql(`
  query Employee($slug: ID!) {
    employee(id: $slug, idType: URI) {
      title
      employeeContent {
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
    }
  }
`);
