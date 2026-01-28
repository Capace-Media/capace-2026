import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { tag, secret } = await req.json();

  if (!tag || typeof tag !== "string") {
    return NextResponse.json({ error: "Tag saknas" }, { status: 400 });
  }

  if (secret !== process.env.REVALIDATION_SECRET_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  revalidateTag(tag, "max");

  return NextResponse.json({
    revalidated: true,
    tag,
  });
}
