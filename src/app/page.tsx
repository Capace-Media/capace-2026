import Blocks from "@/components/blocks/blocks";
import { getPage } from "@/lib/fetchers/pages";
import { notFound } from "next/navigation";

export default async function Page() {
  const data = await getPage("hem");

  const blocks = data?.sectionsContent?.blocks;
  if (!data) notFound();
  return (
    <>
      <Blocks blocks={blocks} />
    </>
  );
}
