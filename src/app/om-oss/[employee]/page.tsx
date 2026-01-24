import { getEmployeeBySlug } from "@/lib/fetchers/employees";
import { notFound } from "next/navigation";
import EmployeeModal from "../@modal/(.)[employee]/employee-modal";

export default async function Page(props: PageProps<"/om-oss/[employee]">) {
  const { employee } = await props.params;
  const data = await getEmployeeBySlug(employee);

  if (!data) notFound();

  return <EmployeeModal data={data} />;
}
