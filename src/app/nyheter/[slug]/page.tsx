import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { getNewsPage } from "@/lib/fetchers/news";
import dayjs from "dayjs";

export default async function Page(props: PageProps<"/nyheter/[slug]">) {
  const { slug } = await props.params;

  const data = await getNewsPage(slug);
  console.log("news page data:", data);

  return (
    <section className="section end-section items-center">
      <Hero data={data?.pageContent} />
      <div className="flex w-full items-start gap-6">
        <div className="flex flex-col items-start">
          <p className="text-primary">Publiceringsdatum:</p>
          <p className="text-sm uppercase">
            {" "}
            {dayjs(data?.date).format("DD MMMM YYYY")}
          </p>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-primary">Lästid:</p>
          <p className="text-sm uppercase">XX minuter</p>
        </div>
      </div>
      <Blocks blocks={data?.blocks?.blocks} />
    </section>
  );
}
