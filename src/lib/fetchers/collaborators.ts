import { execute } from "@/graphql/execute";
import { CollaboratorsQuery } from "../queries/collaborators";

export async function getCollaborators() {
  return (await execute(CollaboratorsQuery, "force-cache")).collaborators
    ?.collaboratorContent?.collaborators;
}
