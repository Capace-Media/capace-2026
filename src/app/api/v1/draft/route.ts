import { env } from "@/env";
import { getNewsPage } from "@/lib/fetchers/news";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  // Check the secret and next parameters
  // This secret should only be known to this Route Handler and the CMS
  if (secret !== env.DRAFT_SECRET_TOKEN || !slug) {
    return new Response("Invalid token", { status: 401 });
  }

  const post = await getNewsPage(slug);

  // If the slug doesn't exist prevent draft mode from being enabled
  if (!post || !post.slug) {
    return new Response("Invalid slug", { status: 401 });
  }

  // Enable Draft Mode by setting the cookie
  const draft = await draftMode();
  draft.enable();

  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  redirect(post.slug);
}
