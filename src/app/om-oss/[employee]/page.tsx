import parse from "html-react-parser";
import Quote from "@/components/blocks/quote/quote";
import EmailLink from "@/components/shared/email-link";
import ParallaxImage from "@/components/shared/parallax-image";
import TelephoneLink from "@/components/shared/telephone-link";
import { getEmployeeBySlug } from "@/lib/fetchers/employees";
import { notFound } from "next/navigation";

export default async function Page(props: PageProps<"/om-oss/[employee]">) {
  const { employee } = await props.params;
  const data = await getEmployeeBySlug(employee);
  if (!data) notFound();
  console.log("employee data:", data);

  return (
    <section className="section end-section items-center pt-40">
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h1 className="orange-dot text-4xl font-bold">{data?.title}</h1>
        <h2 className="text-primary text-xl uppercase">
          {data?.employeeContent?.workTitle}
        </h2>
      </div>
      <div className="h-100 w-80">
        <ParallaxImage
          src={data.employeeContent?.image?.node.mediaItemUrl}
          alt={data.employeeContent?.image?.node.altText || ""}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        {data.employeeContent?.email && (
          <EmailLink email={data.employeeContent?.email} />
        )}
        {data.employeeContent?.telephone && (
          <TelephoneLink phoneNumber={data.employeeContent.telephone} />
        )}
      </div>
      {data.employeeContent?.quote && (
        <Quote
          quote={data.employeeContent.quote}
          className="max-w-xl pt-10 pb-0 font-bold"
        />
      )}
      {data.employeeContent?.textContent && (
        <div className="prose prose-invert">
          {parse(data.employeeContent.textContent)}
        </div>
      )}
    </section>
  );
}
