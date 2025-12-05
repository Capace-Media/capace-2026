import { execute } from "@/graphql/execute";
import { PageQuery } from "@/lib/queries/pages";

execute(PageQuery, "force-cache", { slug: "om-oss" }).then((data) => {
  console.log("data:", data.page);
});

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center"></main>
  );
}
