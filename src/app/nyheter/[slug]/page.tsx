import parse from "html-react-parser";
import ParallaxHero from "@/components/layout/parallax-hero";
import Blocks from "@/components/blocks/blocks";
import { getPage } from "@/lib/fetchers/pages";

export default async function Page(props: PageProps<"/nyheter/[slug]">) {
  const { slug } = await props.params;

  const data = await getPage(slug);

  return (
    <section className="section end-section items-center">
      {/* <ParallaxHero src={data?.postContent?.heroImage?.node.mediaItemUrl} /> */}
      {/* {data?.content && (
        <div className="prose prose-invert">{parse(data.content)}</div>
      )} */}
      /* <Blocks blocks={data?.blocks?.blocks} /> */
    </section>
  );
}
