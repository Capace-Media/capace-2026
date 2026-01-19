import Hero from "@/components/layout/hero";
import { getPage } from "@/lib/fetchers/pages";
import { notFound } from "next/navigation";

export default async function Page() {
  const data = await getPage("kundcase");
  if (!data) notFound();
  console.log("case data:", data);

  return (
    <section className="section flex w-full justify-center">
      <Hero data={data.pageContent} />
    </section>
  );
}
