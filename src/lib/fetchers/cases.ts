import { execute } from "@/graphql/execute";
import { AllCaseSlugsQuery } from "../queries/cases";

export async function getAllCaseSlugs() {
  const slugs = (await execute(AllCaseSlugsQuery, "force-cache")).cases?.nodes;
  return slugs?.map((slug) => slug.slug);
}
