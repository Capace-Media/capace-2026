import { execute } from "@/graphql/execute";
import { AnnouncementQuery } from "@/lib/queries/announcement";

export async function getAnnouncement() {
  return (
    await execute(AnnouncementQuery, {
      revalidate: 0,
    })
  ).announcement?.announcementContent?.message;
}
