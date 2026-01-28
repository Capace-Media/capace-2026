import { execute } from "@/graphql/execute";
import { FooterQuery } from "../queries/footer";

export async function getFooterData() {
  return (
    await execute(FooterQuery, { cache: "force-cache", tags: ["footer"] })
  ).footer?.footerContent;
}
