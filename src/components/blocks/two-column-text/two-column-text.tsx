import { cn } from "@/lib/utils";
import parse from "html-react-parser";
interface Props {
  className?: string;
  column1: string | undefined | null;
  column2: string | undefined | null;
}
export default function TwoColumnText(props: Props) {
  console.log("th props are:", props);

  return (
    <div className={cn("grid grid-cols-2 gap-8", props.className)}>
      <div>{parse(props.column1 || "")}</div>
      <div>{parse(props.column2 || "")}</div>
    </div>
  );
}
