import Link from "next/link";
import type { ReusableFieldsButton_Fields } from "@/graphql/graphql";
import { Button } from "../ui/button";

interface Props {
  buttonProps: ReusableFieldsButton_Fields;
  variant?: "default" | "secondary";
  className?: string;
}

export default function ExternalOrInternalLink({
  buttonProps,
  className,
  variant = "default",
}: Props) {
  const isExternal = buttonProps.url?.is_internal === false;
  const urlOrSlug = isExternal
    ? buttonProps.url?.externalLink || "#"
    : buttonProps.url?.internalLink?.nodes?.[0]?.uri || "#";

  return (
    <Button
      className={className}
      withArrow
      size={"default"}
      variant={variant}
      nativeButton={false}
      render={
        isExternal ? (
          <a
            href={urlOrSlug}
            rel="noopener noreferrer nofollow"
            target="_blank"
            aria-label={buttonProps.ariaLabel || undefined}
            className="no-underline!"
          />
        ) : (
          <Link
            href={`${urlOrSlug}`}
            aria-label={buttonProps.ariaLabel || undefined}
            className="no-underline!"
          />
        )
      }
    >
      {buttonProps.label}
    </Button>
  );
}
