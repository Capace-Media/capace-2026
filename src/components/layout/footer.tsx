import { getFooterData } from "@/lib/fetchers/footer";

export default async function Footer() {
  const footerData = await getFooterData();
  return (
    <footer>
      {footerData?.address} {footerData?.telephone} {footerData?.email}
    </footer>
  );
}
