"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CasesGrid from "./cases-grid";
import { Button } from "@/components/ui/button";
import { getCases } from "@/lib/fetchers/cases";
import HeadingWithAccent from "@/components/shared/heading-with-accent";
import Link from "next/link";
import CaseFilters from "./case-filters";
import { useSearchParams } from "next/navigation";
gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
  data: Awaited<ReturnType<typeof getCases>>;
}

export default function AllCasesGrid(props: Props) {
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("filter") || "all";

  const filteredData =
    activeFilter === "all"
      ? props.data?.nodes
      : props.data?.nodes.filter((caseItem) =>
          caseItem.casesCategories?.nodes.some(
            (category) =>
              category.name?.toLowerCase() === activeFilter.toLowerCase(),
          ),
        );

  return (
    <div className="relative flex flex-col items-center gap-8">
      <CaseFilters />
      <CasesGrid data={filteredData?.slice(0, 4)} />
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
      <CasesGrid data={filteredData?.slice(4)} />
    </div>
  );
}
