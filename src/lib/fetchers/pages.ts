import { execute } from "@/graphql/execute";
import { PageQuery } from "../queries/pages";

export async function getPage(slug: string) {
  return (await execute(PageQuery, "force-cache", { slug: slug })).page;
}
