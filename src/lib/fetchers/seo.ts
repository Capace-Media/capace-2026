import { execute } from "@/graphql/execute";
import {
  CaseSeoQuery,
  NewsSeoQuery,
  PageSeoQuery,
  ServiceSeoQuery,
} from "@/lib/queries/seo";

export async function getPageSeo(slug: string) {
  return (
    await execute(
      PageSeoQuery,
      { cache: "force-cache", tags: ["pages"] },
      { slug: slug },
    )
  ).page?.seo;
}

export async function getNewsSeo(slug: string) {
  return (
    await execute(
      NewsSeoQuery,
      { cache: "force-cache", tags: ["pages"] },
      { slug: slug },
    )
  ).post?.seo;
}

export async function getCaseSeo(slug: string) {
  return (
    await execute(
      CaseSeoQuery,
      { cache: "force-cache", tags: ["pages"] },
      { slug: slug },
    )
  ).case?.seo;
}

export async function getServiceSeo(slug: string) {
  return (
    await execute(
      ServiceSeoQuery,
      { cache: "force-cache", tags: ["pages"] },
      { slug: slug },
    )
  ).service?.seo;
}
