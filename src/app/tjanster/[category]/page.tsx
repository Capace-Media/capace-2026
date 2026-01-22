import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { getServicePage } from "@/lib/fetchers/services";

export default async function Page(props: PageProps<"/tjanster/[category]">) {
  const { category } = await props.params;

  const data = await getServicePage(category);

  return (
    <div>
      <Hero data={data?.pageContent} />
      <Blocks blocks={data?.blocks?.blocks} />
    </div>
  );
}
