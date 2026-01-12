import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  urlOrSlug: string;
  isExternal: boolean;
  ariaLabel: string;
  label: string;
}

export default function ExternalOrInternalLink(props: Props) {
  return (
    <Button
      withArrow
      variant={"secondaryAccent"}
      nativeButton={false}
      render={
        props.isExternal ? (
          <a
            href={props.urlOrSlug}
            rel="noopener noreferrer nofollow"
            target="_blank"
            aria-label={props.ariaLabel}
            className="hover:no-underline"
          />
        ) : (
          <Link
            href={props.urlOrSlug}
            aria-label={props.ariaLabel}
            className="hover:no-underline"
          />
        )
      }
    >
      {props.label}
    </Button>
  );
}
