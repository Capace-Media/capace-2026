import { execute } from "@/graphql/execute";
import { AllServicesSlugsQuery } from "../queries/services";

export async function getAllServiceCategoriesSlugs() {
  const slugs = (await execute(AllServicesSlugsQuery, "force-cache"))
    .serviceCategories?.nodes;
  return slugs;
}
