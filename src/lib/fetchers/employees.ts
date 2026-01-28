import { execute } from "@/graphql/execute";
import { EmployeeBySlugQuery, EmployeeSlugsQuery } from "../queries/employees";

export async function getEmployeeSlugs() {
  return (
    await execute(EmployeeSlugsQuery, {
      cache: "force-cache",
      tags: ["employees"],
    })
  ).employees?.nodes;
}

export async function getEmployeeBySlug(slug: string) {
  return (
    await execute(
      EmployeeBySlugQuery,
      { cache: "force-cache", tags: ["employees"] },
      { slug },
    )
  ).employee;
}
