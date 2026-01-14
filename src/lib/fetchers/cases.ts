import { execute } from "@/graphql/execute";

export async function getCaseSlugs() {
  // const slugs = (await execute(AllCaseSlugsQuery, "force-cache")).cases?.nodes;
  // return slugs?.map((slug) => slug.slug);
}

export async function getCasePreviews() {
  // return (await execute(CasePreviewsQuery, "force-cache")).cases?.nodes;
}

export async function getCase(slug: string) {
  // return (await execute(CaseQuery, "force-cache", { slug })).case?.caseContent;
}
