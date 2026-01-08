import { execute } from "@/graphql/execute";
import { AllServicesSlugsQuery } from "../queries/services";

export async function getAllServiceCategorySlugs() {
  const slugs = (await execute(AllServicesSlugsQuery, "force-cache"))
    .serviceCategories?.nodes;
  return slugs;
}
