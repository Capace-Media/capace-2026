import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { getPage } from "@/lib/fetchers/pages";
import { notFound } from "next/navigation";

export default async function Page(props: PageProps<"/ordlistor/[slug]">) {
  const { slug } = await props.params;

  const data = await getPage(slug);
  if (!data?.pageContent) notFound();

  return (
    <div>
      <Hero data={data?.pageContent} />
      <Blocks blocks={data?.blocks?.blocks} />
    </div>
  );
}
