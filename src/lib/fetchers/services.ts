import { execute } from "@/graphql/execute";
import { ServicePageQuery } from "../queries/services";

export async function getServiceCategorySlugs() {
  // const slugs = (await execute(ServiceSlugsQuery, "force-cache"))
  //   .serviceCategories?.nodes;
  // return slugs;
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
