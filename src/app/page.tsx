import { graphql } from "../graphql";
import { execute } from "@/graphql/execute";

const PagesQuery = graphql(`
  query Pages {
    pages {
      edges {
        node {
          title
        }
      }
    }
  }
`);

execute(PagesQuery).then((data) => {
  console.log("data:", data.pages?.edges);
});

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center"></main>
  );
}
