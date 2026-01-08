import { execute } from "@/graphql/execute";
import { FaqQuery } from "../queries/faq";

export async function getFaq() {
  return (await execute(FaqQuery, "force-cache")).faq?.questions;
}
