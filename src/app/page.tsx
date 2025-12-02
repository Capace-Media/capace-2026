import { execute } from "@/graphql/execute";
import { EmployeesQuery } from "@/queries/employees";
import { PageQuery } from "@/queries/pages/pages";

execute(PageQuery, { slug: "om-oss" }).then((data) => {
  console.log("data:", data);
});

execute(EmployeesQuery).then((data) => {
  console.log("employees:", data.employees?.nodes);
});

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center"></main>
  );
}
