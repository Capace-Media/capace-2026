import { env } from "@/env";
import type { TypedDocumentString } from "./graphql";

type CacheMethod =
  | { cache: "force-cache"; tags?: string[] }
  | { revalidate: number; tags?: string[] };

export async function execute<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  cacheMethod: CacheMethod,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  const authString = `${env.CMS_GRAPHQL_AUTH_USER}:${env.DRAFT_MODE_PASSWORD}`;

  const fetchOptions: RequestInit & { next?: any } = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/graphql-response+json",
      Authorization: `Basic ${btoa(authString)}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  };

  if ("cache" in cacheMethod && cacheMethod.cache === "force-cache") {
    fetchOptions.cache = "force-cache";
    if (cacheMethod.tags) {
      fetchOptions.next = { tags: cacheMethod.tags };
    }
  } else if ("revalidate" in cacheMethod) {
    fetchOptions.next = {
      revalidate: cacheMethod.revalidate,
      tags: cacheMethod.tags,
    };
  }

  const response = await fetch("https://media.capace.se/graphql", fetchOptions);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const json = (await response.json()) as {
    data: TResult;
    errors?: any;
  };

  if (json.errors) {
    console.error(json.errors);
    throw new Error("GraphQL returned errors");
  }

  return json.data;
}
