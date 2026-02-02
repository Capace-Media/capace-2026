import Blocks from "@/components/blocks/blocks";
import CategoryButtons from "@/components/shared/category-buttons";
import { getCase } from "@/lib/fetchers/cases";
import { notFound } from "next/navigation";
import Image from "next/image";
import ParallaxHero from "@/components/layout/parallax-hero";
import { cn } from "@/lib/utils";
import ButtonLink from "@/components/shared/link";
import { getCaseSeo } from "@/lib/fetchers/seo";
import generatePageSeo from "@/lib/utilities/seo";
import CasesCarouselWrapper from "@/components/blocks/sections/cases-carousel/cases-carousel-wrapper";

export const generateMetadata = async (
  props: PageProps<"/kundcase/[slug]">,
) => {
  const { slug } = await props.params;
  const seo = await getCaseSeo(slug);
  return generatePageSeo(seo);
};

/**
 * A page component for a kundcase
 * @param props cool stuff here to describe the page
 * @returns A page component for a kundcase
 */
export default async function Page(props: PageProps<"/kundcase/[slug]">) {
  const { slug } = await props.params;
  const data = await getCase(slug);
  if (!data) notFound();

  /**
   * Remove https:// and trailing slash from the url
   * @void
   */
  const formattedUrl = data.caseContent?.url
    ?.replace("https://", "")
    .replace(/[\/]$/gm, "");

  return (
    <div className="flex flex-col items-center gap-0">
      <section className="section pb-0">
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
            <CaseLink
              shouldFollow={data.caseContent?.followLink === "dofollow"}
              className="hidden sm:flex"
              href={data.caseContent?.url}
            >
              {formattedUrl}
            </CaseLink>
          )}
        </div>
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
        <ButtonLink href={"/kontakt"}>Kontakta oss</ButtonLink>

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
  shouldFollow: boolean;
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
      rel={
        props.shouldFollow
          ? "noopener noreferrer"
          : "noopener noreferrer nofollow"
      }
    >
      {props.children}
    </a>
  );
};
