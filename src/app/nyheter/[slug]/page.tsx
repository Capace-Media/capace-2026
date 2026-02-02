import Blocks from "@/components/blocks/blocks";
import Hero from "@/components/layout/hero";
import { getNewsDraft, getNewsPage } from "@/lib/fetchers/news";
import { getNewsSeo } from "@/lib/fetchers/seo";
import generatePageSeo from "@/lib/utilities/seo";
import dayjs from "dayjs";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export const generateMetadata = async (props: PageProps<"/nyheter/[slug]">) => {
  const { slug } = await props.params;
  const seo = await getNewsSeo(slug);
  return generatePageSeo(seo);
};

export default async function Page(props: PageProps<"/nyheter/[slug]">) {
  const { slug } = await props.params;
  const { isEnabled } = await draftMode();
  let data:
    | Awaited<ReturnType<typeof getNewsPage>>
    | Awaited<ReturnType<typeof getNewsPage>>;

  if (isEnabled) {
    data = await getNewsDraft(slug);
  } else {
    data = await getNewsPage(slug);
  }
  if (!data?.pageContent) notFound();

  return (
    <section className="end-section items-center">
      <Hero data={data?.pageContent} />
      <div className="section flex w-full flex-row items-start gap-6 py-0">
        <div className="flex flex-col items-start">
          <p className="text-primary">Publiceringsdatum:</p>
          <p className="text-sm uppercase">
            {" "}
            {dayjs(data?.date).format("DD MMMM YYYY")}
          </p>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-primary">Lästid:</p>
          {data.seo?.readingTime && (
            <p className="text-sm uppercase">
              {data.seo?.readingTime}{" "}
              {data.seo?.readingTime > 1 ? "minuter" : "minut"}
            </p>
          )}
        </div>
      </div>
      <Blocks blocks={data?.blocks?.blocks} />
    </section>
  );
}
