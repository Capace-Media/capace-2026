import { getCase, getCasePreviews } from "@/lib/fetchers/cases";
import { getFooterData } from "@/lib/fetchers/footer";
import { getPage } from "@/lib/fetchers/pages";

export default async function HomePage() {
  const data = await getPage("hem");
  const footerData = await getFooterData();
  const casePreviews = await getCasePreviews();
  const caseData = await getCase("eventourage");
  // console.log("data:", data);
  // console.log("footer data:", footerData);
  // console.log("case previews data:", casePreviews);
  console.log("case data:", caseData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {data.page?.title}
    </main>
  );
}
