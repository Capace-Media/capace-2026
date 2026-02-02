import { getCases } from "@/lib/fetchers/cases";
import HeadingWithAccent from "@/components/shared/heading-with-accent";
import CasesCarousel from "./cases-carusel";

export default async function CasesCarouselWrapper() {
  const data = await getCases();
  if (!data) return null;

  return (
    <section className="section flex w-full flex-col items-center justify-center">
      <HeadingWithAccent
        accentedHeading={"se fler"}
        mainHeading={"Projekt"}
        noBottomMargin
      />
      <CasesCarousel data={data} />
    </section>
  );
}
