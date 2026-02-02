import Image from "next/image";
import { useFragment, type FragmentType } from "@/graphql";
import { BlocksFragment } from "@/lib/queries/fragments";
import HeadingWithAccent from "@/components/shared/heading-with-accent";
import Link from "next/link";
import { cn } from "@/lib/utils";
import EmailLink from "@/components/shared/email-link";
import TelephoneLink from "@/components/shared/telephone-link";

interface Props {
  data: FragmentType<typeof BlocksFragment>;
}

export default function Employees(props: Props) {
  const data = useFragment(BlocksFragment, props.data);
  if (data.__typename !== "BlocksBlocksEmployeesLayout") return null;

  const allEmployees =
    data.employees?.nodes.filter((e) => e.__typename === "Employee") ?? [];

  const fullTimeEmployees = allEmployees.filter((e) =>
    e.employeeContent?.employmentType?.includes("fulltime"),
  );

  const interns = allEmployees.filter((e) =>
    e.employeeContent?.employmentType?.includes("intern"),
  );

  return (
    <section className="section items-center">
      <HeadingWithAccent
        accentedHeading={data.accentHeading?.accent || ""}
        mainHeading={data.accentHeading?.main || ""}
        noBottomMargin
      />
      <p className="prose prose-invert mb-12 text-center">{data.textContent}</p>
      <EmployeeGrid employees={fullTimeEmployees} />

      <div className="flex w-full items-center">
        <div className="bg-muted h-0.5 w-full" />
        <HeadingWithAccent
          className="mx-6"
          accentedHeading={"våra"}
          mainHeading={"Praktikanter"}
          noBottomMargin
        />
        <div className="bg-muted h-0.5 w-full" />
      </div>
      <EmployeeGrid employees={interns} />
    </section>
  );
}

interface EmployeeGridProps {
  employees: any[];
}

const EmployeeGrid = (props: EmployeeGridProps) => {
  if (!props.employees?.length) return null;

  return (
    <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {props.employees.map((e, index) => {
        if (e.__typename !== "Employee") return null;
        return (
          <EmployeeCard
            key={index}
            workTitle={e.employeeContent?.workTitle || ""}
            name={e.title}
            email={e.employeeContent?.email}
            imgSrc={e.employeeContent?.image?.node.mediaItemUrl}
            employmentType={e.employeeContent?.employmentType}
            slug={e.slug}
            telephone={e.employeeContent?.telephone}
          />
        );
      })}
    </div>
  );
};

interface EmployeeCardProps {
  workTitle: string | undefined | null;
  name: string | undefined | null;
  email: string | undefined | null;
  imgSrc: string | undefined | null;
  employmentType: (string | null)[] | null | undefined;
  slug: string | undefined | null;
  telephone: string | undefined | null;
}

const EmployeeCard = (props: EmployeeCardProps) => {
  return (
    <article className="flex flex-col items-center gap-3">
      <Link
        href={`/om-oss/${props.slug}`}
        scroll={false}
        className="group relative aspect-square h-auto w-full overflow-hidden rounded-full"
      >
        <Image
          src={props.imgSrc || "/misc/no-profile-photo.webp"}
          alt={`Bild på ${props.name}`}
          fill
          className={cn(
            "object-cover transition-all duration-500 group-hover:scale-105",
            props.imgSrc && "group-hover:brightness-120",
          )}
          sizes="(max-wdith: 768px)100vw, 40vw"
        />
      </Link>

      <p className="text-primary text-sm uppercase">{props.workTitle}</p>
      <p className="text-lg font-semibold">{props.name}</p>
      {props.email && <EmailLink email={props.email} />}
      {props.telephone && <TelephoneLink phoneNumber={props.telephone} />}
    </article>
  );
};
