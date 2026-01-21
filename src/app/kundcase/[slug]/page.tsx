import Blocks from "@/components/blocks/blocks";
import CategoryButtons from "@/components/shared/category-buttons";
import ParallaxImage from "@/components/shared/parallax-image";
import { getCase } from "@/lib/fetchers/cases";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page(props: Props) {
  const { slug } = await props.params;
  const data = await getCase(slug);
  if (!data) notFound();
  console.log("case data in here:", data);
  //delete https:// and trailing slash
  const formattedUrl = data.caseContent?.url
    ?.replace("https://", "")
    .replace(/[\/]$/gm, "");

  return (
    <div className="flex flex-col items-center gap-0">
      <section className="section">
        <div className="mt-30 h-130 w-full overflow-hidden rounded-[36px]">
          <ParallaxImage
            src={data.caseContent?.heroImage?.node.mediaItemUrl || ""}
            alt={data.caseContent?.heroImage?.node.altText || ""}
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <CategoryButtons
            categories={data.casesCategories?.nodes.map((c) => {
              return { name: c.name, slug: c.slug };
            })}
          />
          <a
            className="text-primary duration:300 cursor-pointer text-sm transition-all"
            href={data.caseContent?.url || "#"}
            target="_blank"
            rel="nofollow noopener norefferer"
          >
            {formattedUrl}
          </a>
        </div>
      </section>
      <Blocks blocks={data.blocks?.blocks} />
    </div>
  );
}
