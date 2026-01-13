import { getServicePage } from "@/lib/fetchers/services";

export default async function Page(
  props: PageProps<"/tjanster/[category]/[service]">,
) {
  const { service } = await props.params;

  const data = await getServicePage(service);
  console.log("data:", data);

  return <div></div>;
}
