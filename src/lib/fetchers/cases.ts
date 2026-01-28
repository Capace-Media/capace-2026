import { execute } from "@/graphql/execute";
import { CaseQuery, CasesQuery } from "../queries/cases";

export async function getCaseSlugs() {
  // const slugs = (await execute(AllCaseSlugsQuery, "force-cache")).cases?.nodes;
  // return slugs?.map((slug) => slug.slug);
}

export async function getCasePreviews() {
  // return (await execute(CasePreviewsQuery, "force-cache")).cases?.nodes;
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
