import { graphql } from "../graphql";
import { execute } from "@/graphql/execute";

const PeopleCountQuery = graphql(`
  query PeopleCount {
    allPeople {
      totalCount
    }
  }
`);

execute(PeopleCountQuery).then((data) => {
  console.log("data:", data.allPeople?.totalCount);
});

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center"></main>
  );
}
