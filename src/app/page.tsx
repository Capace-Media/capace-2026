import Blocks from "@/components/blocks/blocks";
import { getPage } from "@/lib/fetchers/pages";
import { notFound } from "next/navigation";

export default async function Page() {
  const data = await getPage("hem");
  console.log("data:", data);

  const blocks = data?.blocks?.blocks;
  if (!data) notFound();
  return (
    <>
      <Blocks blocks={blocks} />
    </>
  );
}
