import { cn } from "@/lib/utils";
import parse from "html-react-parser";
interface Props {
  className?: string;
  column1: string | undefined | null;
  column2: string | undefined | null;
}
export default function TwoColumnText(props: Props) {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 gap-8 md:grid-cols-2",
        props.className,
      )}
    >
      <div className="prose prose-invert">{parse(props.column1 || "")}</div>
      <div className="prose prose-invert">{parse(props.column2 || "")}</div>
    </div>
  );
}
