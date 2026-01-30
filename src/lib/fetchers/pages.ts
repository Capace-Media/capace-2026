import { execute } from "@/graphql/execute";
import { DraftPageQuery, PageQuery, PageSlugsQuery } from "../queries/pages";

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

export async function getPageDraft(id: string) {
  return (await execute(DraftPageQuery, { revalidate: 0 }, { id: id })).page;
}
