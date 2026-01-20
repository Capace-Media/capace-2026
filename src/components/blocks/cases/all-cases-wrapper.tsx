import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CasesGrid from "./cases-grid";
import { Button } from "@/components/ui/button";
import { getCases } from "@/lib/fetchers/cases";
import HeadingWithAccent from "@/components/shared/heading-with-accent";
import Link from "next/link";
import CaseFilters from "./case-filters";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default async function AllCasesGridWrapper() {
  const data = await getCases();
  console.log("cases data:", data);

  return (
    <section
      className="section cases-container relative flex flex-col items-center gap-12"
      aria-labelledby="cases-heading"
    >
      <CaseFilters />
      <CasesGrid data={data?.nodes.slice(0, 4)} />
      <div className="border-accent flex w-full flex-col items-center justify-center gap-6 rounded-[36px] border-3 p-6 md:w-[80%] md:p-8">
        <HeadingWithAccent
          noBottomMargin
          accentedHeading={"dags att boka möte"}
          mainHeading={"Kanske är det din tur nu?"}
        />
        <p className="text-center">
          Från idé till verklighet. Vi gör skillnad där andra stannar.
          <br /> Vi är redan igång - är du redo att göra något stort?
        </p>
        <Link href={"/kontakt"} className="no-underline!">
          <Button withArrow variant={"secondary"}>
            Boka möte
          </Button>
        </Link>
      </div>
      <CasesGrid data={data?.nodes.slice(4)} />
    </section>
  );
}
