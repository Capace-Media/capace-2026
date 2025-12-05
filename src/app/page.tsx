import { getPage } from "@/lib/fetchers/pages";

export default async function HomePage() {
  const data = await getPage("hem");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {data.page?.title}
    </main>
  );
}
