import { execute } from "@/graphql/execute";
import { NewsQuery } from "../queries/news";

export async function getNews(amount: number, after?: string | null) {
  return (await execute(NewsQuery, { revalidate: 0 }, { amount, after })).posts;
}
