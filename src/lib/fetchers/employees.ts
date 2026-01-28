import { execute } from "@/graphql/execute";
import { EmployeeBySlugQuery } from "../queries/employees";

export async function getEmployeeBySlug(slug: string) {
  return (
    await execute(
      EmployeeBySlugQuery,
      { cache: "force-cache", tags: ["employees"] },
      { slug },
    )
  ).employee;
}
