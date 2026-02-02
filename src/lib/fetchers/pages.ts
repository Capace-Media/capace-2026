import { execute } from "@/graphql/execute";
import { PageQuery, PageSlugsQuery } from "../queries/pages";

export async function getPageSlugs() {
  return (
    await execute(PageSlugsQuery, { cache: "force-cache", tags: ["pages"] })
  ).pages?.nodes;
}

export async function getPage(slug: string) {
  return (
    await execute(
      PageQuery,
      { cache: "force-cache", tags: ["pages"] },
      { slug: slug },
    )
  ).page;
}
