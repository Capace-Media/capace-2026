import Blocks from "@/components/blocks/blocks";
import CasesCarouselWrapper from "@/components/blocks/cases-carousel/cases-carousel-wrapper";
import CategoryButtons from "@/components/shared/category-buttons";
import { Button } from "@/components/ui/button";
import { getCase } from "@/lib/fetchers/cases";
import { notFound } from "next/navigation";
import Image from "next/image";
import ParallaxHero from "@/components/layout/parallax-hero";
import { cn } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page(props: Props) {
  const { slug } = await props.params;
  const data = await getCase(slug);
  if (!data) notFound();
  //delete https:// and trailing slash
  const formattedUrl = data.caseContent?.url
    ?.replace("https://", "")
    .replace(/[\/]$/gm, "");

  return (
    <div className="flex flex-col items-center gap-0">
      <section className="section">
        <ParallaxHero src={data.caseContent?.heroImage?.node.mediaItemUrl} />
        <div className="flex w-full items-center justify-between">
          <CategoryButtons
            className="gap-4"
            size="md"
            categories={data.casesCategories?.nodes.map((c) => {
              return { name: c.name, slug: c.slug };
            })}
          />
          {data.caseContent?.url && (
            <CaseLink className="hidden sm:flex" href={data.caseContent?.url}>
              {formattedUrl}
            </CaseLink>
          )}
        </div>
      </section>
      <section className="section pt-0">
        <h1 className="mr-auto text-6xl font-bold">{data.title}</h1>
        {data.caseContent?.url && (
          <CaseLink className="text-lg sm:hidden" href={data.caseContent?.url}>
            {formattedUrl}
          </CaseLink>
        )}
        <p className="prose prose-invert font-medium">
          {data.caseContent?.description}
        </p>
        <p className="prose prose-invert">
          {data.caseContent?.descriptionContinued}
        </p>
      </section>
      <Blocks blocks={data.blocks?.blocks} />
      <CasesCarouselWrapper />
      <section className="section relative items-center pb-70">
        <h3 className="text-2xl font-medium">
          Redo att ta ditt projekt till nästa nivå?
        </h3>
        <p className="prose prose-invert text-center">
          Vi är här för att göra det möjligt. Kontakta oss idag och låt oss
          skapa något fantastiskt tillsammans!
        </p>
        <Button withArrow>Kontakta oss</Button>
        <div
          className="absolute right-0 hidden aspect-auto h-80 w-80 translate-x-[15%] lg:block"
          aria-hidden
        >
          <Image
            src={"/stickers/sticker-group.webp"}
            fill
            className="object-contain"
            alt={""}
            sizes="20vw"
          />
        </div>
      </section>
    </div>
  );
}

interface CaseLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}
const CaseLink = (props: CaseLinkProps) => {
  return (
    <a
      className={cn(
        "text-primary duration:300 cursor-pointer text-base transition-all",
        props.className,
      )}
      href={props.href}
      target="_blank"
      rel="nofollow noopener norefferer"
    >
      {props.children}
    </a>
  );
};
