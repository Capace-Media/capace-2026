import { execute } from "@/graphql/execute";
import { LatestNewsPreviewsQuery } from "../queries/news";

export async function getLatestNewsPreviews() {
  return (await execute(LatestNewsPreviewsQuery, "force-cache")).posts?.nodes;
}
