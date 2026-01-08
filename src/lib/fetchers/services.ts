import { execute } from "@/graphql/execute";
import { ServicePageQuery, ServiceSlugsQuery } from "../queries/services";

export async function getServiceCategorySlugs() {
  const slugs = (await execute(ServiceSlugsQuery, "force-cache"))
    .serviceCategories?.nodes;
  return slugs;
}

export async function getServicePage(slug: string) {
  return (await execute(ServicePageQuery, "force-cache", { slug })).service;
}
