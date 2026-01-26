import { execute } from "@/graphql/execute";
import { NewsBySlugQuery, NewsQuery } from "../queries/news";

export async function getNews(amount: number, after?: string | null) {
  return (await execute(NewsQuery, { revalidate: 0 }, { amount, after })).posts;
}

export async function getNewsPage(slug: string) {
  return (await execute(NewsBySlugQuery, { revalidate: 0 }, { slug })).post;
}
