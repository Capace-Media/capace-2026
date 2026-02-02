import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
}
export default function ButtonLink(props: Props) {
  return (
    <Link href={props.href} aria-label={props.ariaLabel}>
      <Button withArrow tabIndex={-1}>
        {props.children}
      </Button>
    </Link>
  );
}
