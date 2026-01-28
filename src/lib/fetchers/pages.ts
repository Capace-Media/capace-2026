import { execute } from "@/graphql/execute";
import { PageQuery } from "../queries/pages";

export async function getPage(slug: string) {
  return (
    await execute(
      PageQuery,
      { cache: "force-cache", tags: ["pages"] },
      { slug: slug },
    )
  ).page;
}
