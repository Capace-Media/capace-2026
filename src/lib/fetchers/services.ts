import { execute } from "@/graphql/execute";
import { ServicePageQuery, ServiceSlugsQuery } from "../queries/services";

export async function getServiceCategorySlugs() {
  return (
    await execute(ServiceSlugsQuery, {
      cache: "force-cache",
      tags: ["services"],
    })
  ).services?.nodes;
}

export async function getServicePage(slug: string) {
  return (
    await execute(
      ServicePageQuery,
      { cache: "force-cache", tags: ["services"] },
      { slug },
    )
  ).service;
}
