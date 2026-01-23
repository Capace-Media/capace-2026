import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { getPage } from "@/lib/fetchers/pages";
import { notFound } from "next/navigation";

export default async function Page() {
  const data = await getPage("/om-oss");
  if (!data) notFound();
  console.log("om oss data:", data);

  return (
    <div>
      <Hero data={data.pageContent} />
      <Blocks blocks={data.blocks?.blocks} />
    </div>
  );
}
