import Link from "next/link";
import type { ReusableFieldsButton_Fields } from "@/graphql/graphql";
import { Button } from "../ui/button";

interface Props {
  buttonProps: ReusableFieldsButton_Fields;
}

export default function ExternalOrInternalLink({ buttonProps }: Props) {
  const isExternal = buttonProps.url?.is_internal === false;
  const urlOrSlug = isExternal
    ? buttonProps.url?.externalLink || "#"
    : buttonProps.url?.internalLink?.nodes?.[0]?.slug || "#";

  return (
    <Button
      withArrow
      variant={"secondaryAccent"}
      nativeButton={false}
      render={
        isExternal ? (
          <a
            href={urlOrSlug}
            rel="noopener noreferrer nofollow"
            target="_blank"
            aria-label={buttonProps.ariaLabel || undefined}
            className="hover:no-underline"
          />
        ) : (
          <Link
            href={urlOrSlug}
            aria-label={buttonProps.ariaLabel || undefined}
            className="hover:no-underline"
          />
        )
      }
    >
      {buttonProps.label}
    </Button>
  );
}
