import { type FragmentType, useFragment } from "@/graphql/fragment-masking";
import { BlocksFragment } from "@/lib/queries/fragments";
import HeadingWithAccent from "../../shared/heading-with-accent";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonLink from "@/components/shared/link";
import { getNews } from "@/lib/fetchers/news";
import News from "./news";
gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
  data: FragmentType<typeof BlocksFragment>;
}

export default async function NewsWrapper(props: Props) {
  const block = useFragment(BlocksFragment, props.data);
  if (block.__typename !== "BlocksBlocksNewsLayout") return null;
  const showAllNews = block.newsAmount === "all";
  const newsAmount = showAllNews ? 2 : 3;
  const news = await getNews(newsAmount, null);

  return (
    <section
      className="section cases-container end-section relative flex flex-col items-center"
      aria-labelledby="cases-heading"
    >
      <div id="cases-heading">
        <HeadingWithAccent
          accentedHeading={block.accentHeading?.accent || ""}
          mainHeading={block.accentHeading?.main || ""}
        />
      </div>
      <News initialNews={news} showLoadMore={showAllNews} />
      {!showAllNews && (
        <div className="py-12">
          <ButtonLink href="/nyheter">Läs alla nyheter</ButtonLink>
        </div>
      )}
    </section>
  );
}
