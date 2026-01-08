import { execute } from "@/graphql/execute";
import { FooterQuery } from "../queries/footer";

export async function getFooterData() {
  const data = await execute(FooterQuery, "force-cache");
  return data.footer?.footerContent;
}
