import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { getPage } from "@/lib/fetchers/pages";

export default async function Page(props: PageProps<"/tjanster/[category]">) {
  const { category } = await props.params;

  const data = await getPage(category);
  console.log("hämtar data för:", category);
  console.log("service page data:", data);

  return (
    <div>
      <Hero data={data?.pageContent} />
      <Blocks blocks={data?.blocks?.blocks} />
    </div>
  );
}
