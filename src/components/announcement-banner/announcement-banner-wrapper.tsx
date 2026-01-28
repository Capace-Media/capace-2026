import { getAnnouncement } from "@/lib/fetchers/announcement";
import AnnouncementBanner from "./announcement-banner";

export default async function AnnouncementBannerWrapper() {
  const data = await getAnnouncement();
  if (!data) return null;

  return <AnnouncementBanner message={data} />;
}
