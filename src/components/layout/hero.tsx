import type { PageQuery, ReusableFieldsButton_Fields } from "@/graphql/graphql";
import Image from "next/image";
import parse from "html-react-parser";
import ExternalOrInternalLink from "../shared/external-or-internal-link";
interface Props {
  data: NonNullable<PageQuery["page"]>["pageContent"];
}
export default function Hero(props: Props) {
  if (!props.data) return null;
  const isLarge = props.data.large;

  if (isLarge) {
    return <HeroLarge data={props.data} />;
  } else {
    return <HeroMedium data={props.data} />;
  }
}

const HeroLarge = (data: Props) => {
  const heroData = data.data?.large;
  return (
    <section aria-label="Herosektion" className="relative h-170 w-full">
      <Image
        className="w-full origin-bottom scale-y-70 object-fill object-bottom md:scale-y-100 md:object-cover md:object-center"
        priority
        src={"/hero.png"}
        alt=""
        sizes="100vw"
        fill
        aria-hidden="true"
      />
      <div className="section relative flex h-full flex-col items-center justify-center gap-6 pt-40">
        <h1 className="text-center text-5xl leading-14 font-bold">
          <span className="drop-shadow-lg">{heroData?.heading}</span>
          <span className="text-accent drop-shadow-lg">
            {heroData?.headingAccent}
          </span>
        </h1>
        <div className="text-center font-normal drop-shadow-lg sm:mb-0">
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
  return <div>medium</div>;
};
