import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { getServicePage } from "@/lib/fetchers/services";
import { notFound } from "next/navigation";

export default async function Page(props: PageProps<"/tjanster/[category]">) {
  const { category } = await props.params;

  const data = await getServicePage(category);
  if (!data || !data.pageContent) notFound();

  return (
    <div>
      <Hero data={data?.pageContent} />
      <Blocks blocks={data?.blocks?.blocks} />
    </div>
  );
}
