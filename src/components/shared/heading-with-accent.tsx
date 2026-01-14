import { cn } from "@/lib/utils";

interface Props {
  accentedHeading: string;
  mainHeading: string;
  textAlign?: "left" | "center";
}
export default function HeadingWithAccent(props: Props) {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <h3
        className={cn(
          "text-4xl lg:text-6xl",
          props.textAlign === "left" ? "text-left" : "text-center",
        )}
      >
        <span className="font-caveat text-accent block lowercase">
          {props.accentedHeading}
        </span>
        <span className="block font-bold">{props.mainHeading}</span>
      </h3>
    </div>
  );
}
