import parse from "html-react-parser";
import EmailLink from "@/components/shared/email-link";
import ParallaxImage from "@/components/shared/parallax-image";
import TelephoneLink from "@/components/shared/telephone-link";
import { getEmployeeBySlug } from "@/lib/fetchers/employees";
import { useFragment } from "@/graphql";
import { EmployeeContentFragment } from "@/lib/queries/fragments";
import { notFound } from "next/navigation";
import Quote from "@/components/blocks/sections/quote/quote";
import { getPageSeo } from "@/lib/fetchers/seo";
import generatePageSeo from "@/lib/utilities/seo";

export default async function Page(props: PageProps<"/om-oss/[employee]">) {
  const { employee } = await props.params;
  const data = await getEmployeeBySlug(employee);
  if (!data) notFound();

  const employeeContent = data.employeeContent
    ? useFragment(EmployeeContentFragment, data.employeeContent)
    : undefined;

  return (
    <section className="section end-section items-center pt-40">
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h1 className="orange-dot text-4xl font-bold">{data?.title}</h1>
        <h2 className="text-primary text-xl uppercase">
          {employeeContent?.workTitle}
        </h2>
      </div>
      <div className="h-100 w-80">
        <ParallaxImage
          src={employeeContent?.image?.node?.mediaItemUrl}
          alt={employeeContent?.image?.node?.altText || ""}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        {employeeContent?.email && <EmailLink email={employeeContent.email} />}
        {employeeContent?.telephone && (
          <TelephoneLink phoneNumber={employeeContent.telephone} />
        )}
      </div>
      {employeeContent?.quote && (
        <Quote
          quote={employeeContent.quote}
          className="max-w-xl pt-10 pb-0 font-bold"
        />
      )}
      {employeeContent?.textContent && (
        <div className="prose prose-invert">
          {parse(employeeContent.textContent)}
        </div>
      )}
    </section>
  );
}
