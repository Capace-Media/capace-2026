import { getCase, getCasePreviews } from "@/lib/fetchers/cases";
import { getFaq } from "@/lib/fetchers/faq";
import { getFooterData } from "@/lib/fetchers/footer";
import { getPage } from "@/lib/fetchers/pages";
import { getServicePage } from "@/lib/fetchers/services";
import { getTestimonials } from "@/lib/fetchers/testimonials";

export default async function HomePage() {
  const data = await getPage("hem");
  const footerData = await getFooterData();
  const casePreviews = await getCasePreviews();
  const faqData = await getFaq();
  const testimonialsData = await getTestimonials();
  const servicePage = await getServicePage("design");
  const caseData = await getCase("eventourage");
  // console.log("data:", data);
  // console.log("footer data:", footerData);
  // console.log("case previews data:", casePreviews);
  // console.log("case data:", caseData);
  // console.log("faq data:", faqData);
  // console.log("testimonials data:", testimonialsData);
  // console.log("service data:", servicePage);
  console.log("Case data:", caseData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {data?.title}
    </main>
  );
}
