import type { PageQuery } from "@/graphql/graphql";
import { getCollaborators } from "@/lib/fetchers/collaborators";
import CollaboratorsBanner from "./collaborators-banner";

interface Props {
  data: Extract<
    NonNullable<
      NonNullable<NonNullable<PageQuery["page"]>["blocks"]>["blocks"]
    >[number],
    { __typename: "BlocksBlocksCollaboratorsBannerLayout" }
  >;
}
export default async function CollaboratorsBannerWrapper() {
  const data = await getCollaborators();
  if (!data) return null;

  return (
    <div className="0 flex w-full gap-2">
      <CollaboratorsBanner items={data} />
    </div>
  );
}
