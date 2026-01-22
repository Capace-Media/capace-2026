import { execute } from "@/graphql/execute";
import { FooterQuery } from "../queries/footer";

export async function getFooterData() {
  return (await execute(FooterQuery, "force-cache")).footer?.footerContent;
}
