import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { getPage } from "@/lib/fetchers/pages";

export default async function Page(props: PageProps<"/ordlistor/[slug]">) {
  const { slug } = await props.params;

  const data = await getPage(slug);

  return (
    <div>
      <Hero data={data?.pageContent} />
      <Blocks blocks={data?.blocks?.blocks} />
    </div>
  );
}
