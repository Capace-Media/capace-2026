import { graphql } from "@/graphql";

export const EmployeesQuery = graphql(`
  query Employees {
    employees {
      nodes {
        title
        employeeContent {
          ...EmployeeContentFragment
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
        ...EmployeeContentFragment
      }
    }
  }
`);
