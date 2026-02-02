import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getCases } from "@/lib/fetchers/cases";
import AllCasesGrid from "./all-cases";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default async function AllCasesGridWrapper() {
  const data = await getCases();

  return (
    <section className="section">
      <AllCasesGrid data={data} />
    </section>
  );
}
