"use client";
import type { ReusableFieldsButton_Fields } from "@/graphql/graphql";
import { useFragment, makeFragmentData } from "@/graphql/fragment-masking";
import { PageContentFragmentFragmentDoc } from "@/graphql/graphql";
import Image from "next/image";
import parse from "html-react-parser";
import ExternalOrInternalLink from "../shared/external-or-internal-link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import ParallaxImage from "../shared/parallax-image";

gsap.registerPlugin(SplitText);

import type { PageContentFragmentFragment } from "@/graphql/graphql";
interface Props {
  data: PageContentFragmentFragment;
}
export default function Hero(props: Props) {
  if (!props.data) return null;
  const pageContent = useFragment(
    PageContentFragmentFragmentDoc,
    makeFragmentData(props.data, PageContentFragmentFragmentDoc),
  );
  let size;
  if (pageContent.large?.heroImage) {
    size = "large";
  } else if (pageContent.medium?.heading_main) {
    size = "medium";
  } else if (pageContent.rounded) {
    size = "rounded";
  } else {
    size = "small";
  }

  switch (size) {
    case "large":
      return <HeroLarge data={pageContent} />;
    case "medium":
      return <HeroMedium data={pageContent} />;
    case "small":
      return <HeroSmall data={pageContent} />;
    case "rounded":
      return <HeroRounded data={pageContent} />;
    default:
      return null;
  }
}

const HeroLarge = (data: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      let split = SplitText.create("#animated-text", { type: "words, chars" });

      gsap.fromTo(
        split.chars,
        {
          x: -2,
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.05,
          delay: 0.5,
          duration: 4,
          ease: "elastic.out",
        },
      );
    },
    { scope: containerRef },
  );

  const heroData = data.data?.large;
  console.log("hero data:", heroData);

  return (
    <section
      aria-label="Herosektion"
      className="relative h-170 w-full lg:h-200"
    >
      <Image
        className="w-full origin-bottom scale-y-70 object-fill object-bottom md:scale-y-100 md:object-cover md:object-center"
        priority
        src={"/hero.webp"}
        alt=""
        sizes="100vw"
        fill
        aria-hidden="true"
      />
      <div
        ref={containerRef}
        className="section relative flex h-full flex-col items-center justify-center gap-6"
      >
        <h1 className="hero text-center text-5xl leading-14 font-bold md:text-6xl">
          <span className="drop-shadow-lg">{heroData?.heading}</span>
          <span id="animated-text" className="text-accent drop-shadow-lg">
            {heroData?.headingAccent}
          </span>
        </h1>
        <div className="mb-8 text-center font-normal drop-shadow-lg">
          {parse(heroData?.subheading || "")}
        </div>
        <ExternalOrInternalLink
          buttonProps={heroData?.button as ReusableFieldsButton_Fields}
        />
      </div>
    </section>
  );
};

const HeroMedium = (data: Props) => {
  const heroData = data.data?.medium;
  return (
    <div className="section flex w-full flex-col items-center justify-center pt-40">
      <div className="flex flex-col items-center">
        <h1 className={"text-center text-2xl md:text-4xl"}>
          <span className="font-caveat text-accent block text-center text-5xl">
            {heroData?.heading_accent}
          </span>
          {heroData?.heading_main}
        </h1>
      </div>
      {data.data?.medium?.text && (
        <p className="text-muted-foreground prose text-center">
          {data.data?.medium?.text}
        </p>
      )}
    </div>
  );
};

const HeroSmall = (data: Props) => {
  const heroData = data.data?.small;
  return (
    <div
      className="section flex w-full flex-col items-center justify-center pt-40"
      aria-hidden
    >
      <div className="relative h-100 w-full">
        <Image
          fill
          className="object-cover"
          src={heroData?.heroImage?.node.mediaItemUrl || "/misc/no-image.svg"}
          alt={""}
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
};

const HeroRounded = (data: Props) => {
  const heroData = data.data?.rounded?.node;
  return (
    <div className="section">
      <div
        className="mt-30 h-60 w-full overflow-hidden rounded-[36px] md:h-90 lg:h-130"
        aria-hidden
      >
        <ParallaxImage
          src={heroData?.mediaItemUrl || "/misc/no-image.svg"}
          alt={""}
        />
      </div>
    </div>
  );
};
