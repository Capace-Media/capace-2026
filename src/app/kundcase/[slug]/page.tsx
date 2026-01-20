import Blocks from "@/components/blocks/blocks";
import ParallaxImage from "@/components/shared/parallax-image";
import { getCase } from "@/lib/fetchers/cases";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page(props: Props) {
  const { slug } = await props.params;
  const data = await getCase(slug);
  if (!data) notFound();
  console.log("case data in here:", data);

  return (
    <div className="section flex flex-col items-center gap-8">
      <div className="mt-30 h-120 w-full">
        <ParallaxImage
          src={data.caseContent?.heroImage?.node.mediaItemUrl || ""}
          alt={data.caseContent?.heroImage?.node.altText || ""}
        />
      </div>
      <div className="w-full border">
        {data.casesCategories?.nodes.map((category, index) => (
          <Link
            href={`tjanster/${category.slug}`}
            key={index}
            className="border-muted text-muted-foreground hover:border-accent rounded-full border p-2 px-4 text-xs transition-colors duration-300 hover:text-white hover:no-underline"
          >
            {category.name}
          </Link>
        ))}
      </div>
      <Blocks blocks={data.blocks?.blocks} />
    </div>
  );
}
