import { execute } from "@/graphql/execute";
import { CaseQuery, CaseSlugsQuery, CasesQuery } from "@/lib/queries/cases";

export async function getCaseSlugs() {
  return (
    await execute(CaseSlugsQuery, { cache: "force-cache", tags: ["cases"] })
  ).cases?.nodes;
}

export async function getCase(slug: string) {
  return (
    await execute(
      CaseQuery,
      { cache: "force-cache", tags: ["cases"] },
      { slug },
    )
  ).case;
}

export async function getCases() {
  return (await execute(CasesQuery, { cache: "force-cache", tags: ["cases"] }))
    .cases;
}
