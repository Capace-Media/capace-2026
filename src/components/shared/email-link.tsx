import { cn } from "@/lib/utils";
import Image from "next/image";
interface Props {
  email: string;
  className?: string;
}
export default function EmailLink(props: Props) {
  return (
    <div
      className={cn(
        "text-muted-foreground flex items-center gap-2 text-xs",
        props.className,
      )}
    >
      <div className="relative h-3 w-3">
        <Image
          src={"/icons/envelope.svg"}
          alt={""}
          fill
          className="object-contain"
        />
      </div>
      <a href={`mailto:${props.email}`}>{props.email}</a>
    </div>
  );
}
