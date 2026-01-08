import { getPage } from "@/lib/fetchers/pages";

export default async function Page(props: PageProps<"/tjanster/[category]">) {
  const { category } = await props.params;

  const data = await getPage(category);

  return <div>{data?.title}</div>;
}
