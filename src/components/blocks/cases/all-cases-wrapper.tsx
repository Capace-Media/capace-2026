import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CasesGrid from "./cases-grid";
import { Button } from "@/components/ui/button";
import { getCases } from "@/lib/fetchers/cases";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default async function AllCasesGridWrapper() {
  const data = await getCases();
  console.log("cases data:", data);

  return (
    <section
      className="section cases-container relative flex flex-col items-center"
      aria-labelledby="cases-heading"
    >
      <div className="flex items-center gap-4">
        <FilterButton>Alla</FilterButton>
        <FilterButton>Marknadsföring</FilterButton>
        <FilterButton>Webb</FilterButton>
        <FilterButton>Design</FilterButton>
      </div>
      <CasesGrid data={data?.nodes} />
      <Button withArrow>Se fler case</Button>
    </section>
  );
}

const FilterButton = ({
  children,
  filterString,
}: {
  children: React.ReactNode;
  filterString?: string;
}) => {
  return (
    <Button animatedText={false} size={"lg"}>
      {children}
    </Button>
  );
};
