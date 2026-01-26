import { execute } from "@/graphql/execute";
import { NewsBySlugQuery, NewsQuery } from "../queries/news";

export async function getNews(amount: number, after?: string | null) {
  return (await execute(NewsQuery, "force-cache", { amount, after })).posts;
}

export async function getNewsPage(slug: string) {
  return (await execute(NewsBySlugQuery, "force-cache", { slug })).post;
}
