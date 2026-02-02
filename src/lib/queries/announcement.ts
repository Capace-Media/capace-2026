import { graphql } from "@/graphql";

export const AnnouncementQuery = graphql(`
  query AnnouncementQuery {
    announcement {
      announcementContent {
        message
      }
    }
  }
`);
