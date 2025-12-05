import { execute } from "@/graphql/execute";
import { AllCaseSlugsQuery } from "../queries/cases";

export async function getAllCaseSlugs() {
  return (await execute(AllCaseSlugsQuery, "force-cache")).cases?.nodes;
}
