import { execute } from "@/graphql/execute";
import { LatestNewsPreviewsQuery, NewsQuery } from "../queries/news";

export async function getLatestNewsPreviews() {
  return (await execute(LatestNewsPreviewsQuery, "force-cache")).posts?.nodes;
}

export async function getNews(amount: number, after?: string | null) {
  return (await execute(NewsQuery, { revalidate: 0 }, { amount, after })).posts;
}
