import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  href: string;
  children: React.ReactNode;
}
export default function ButtonLink(props: Props) {
  return (
    <Link href={props.href} tabIndex={-1}>
      <Button withArrow>{props.children}</Button>
    </Link>
  );
}
