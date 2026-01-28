import { execute } from "@/graphql/execute";
import { CollaboratorsQuery } from "../queries/collaborators";

export async function getCollaborators() {
  return (
    await execute(CollaboratorsQuery, {
      cache: "force-cache",
      tags: ["collaborators"],
    })
  ).collaborators?.collaboratorContent?.collaborators;
}
