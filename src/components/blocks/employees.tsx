import Image from "next/image";
import { useFragment, type FragmentType } from "@/graphql";
import { BlocksFragment } from "@/lib/queries/fragments";
import HeadingWithAccent from "../shared/heading-with-accent";

interface Props {
  data: FragmentType<typeof BlocksFragment>;
}
export default function Employees(props: Props) {
  const data = useFragment(BlocksFragment, props.data);
  if (data.__typename !== "BlocksBlocksEmployeesLayout") return null;

  const fullTimeEmployees = data.employees?.nodes.filter((e) => {
    if (e.__typename !== "Employee") return;
    return e.employeeContent?.employmentType?.includes("fulltime");
  });

  const interns = data.employees?.nodes.filter((e) => {
    if (e.__typename !== "Employee") return;
    return e.employeeContent?.employmentType?.includes("intern");
  });

  console.log("interns:", interns);
  console.log("fulltime:", fullTimeEmployees);

  return (
    <section className="section items-center">
      <HeadingWithAccent
        accentedHeading={data.accentHeading?.accent || ""}
        mainHeading={data.accentHeading?.main || ""}
        noBottomMargin
      />
      <p className="prose prose-invert mb-12 text-center">{data.textContent}</p>
      <EmployeeGrid employees={fullTimeEmployees} />

      <div className="bg-muted h-0.5 w-full" />
      <EmployeeGrid employees={interns} />
    </section>
  );
}

interface EmployeeGridProps {
  employees: any[];
}

const EmployeeGrid = (props: EmployeeGridProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {props.employees?.map((e, index) => {
        if (e.__typename !== "Employee") return;
        return (
          <EmployeeCard
            key={index}
            workTitle={e.employeeContent?.workTitle || ""}
            name={e.title}
            email={e.employeeContent?.email}
            imgSrc={e.employeeContent?.image?.node.mediaItemUrl}
            employmentType={e.employeeContent?.employmentType}
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
}

const EmployeeCard = (props: EmployeeCardProps) => {
  return (
    <article className="flex flex-col items-center gap-3">
      <div className="relative aspect-square h-auto w-full overflow-hidden rounded-full">
        <Image
          src={props.imgSrc || "/misc/no-profile-photo.webp"}
          alt={`Bild på ${props.name}`}
          fill
          className="object-cover"
          sizes="20vw"
        />
      </div>

      <p className="text-primary text-sm uppercase">{props.workTitle}</p>
      <p className="text-lg font-semibold">{props.name}</p>
      <p className="text-muted-foreground flex items-center gap-2 text-xs">
        <div className="relative h-3 w-3">
          <Image
            src={"/icons/envelope.svg"}
            alt={""}
            fill
            className="object-contain"
          />
        </div>
        {props.email && <a href={`mailto:${props.email}`}>{props.email}</a>}
      </p>
    </article>
  );
};
