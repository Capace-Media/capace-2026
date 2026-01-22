import { cn } from "@/lib/utils";

interface Props {
  accentedHeading: string;
  mainHeading: string;
  textAlign?: "left" | "center";
  noBottomMargin?: boolean;
}
export default function HeadingWithAccent(props: Props) {
  return (
    <div
      className={cn(
        "flex flex-col items-center lg:items-start",
        props.noBottomMargin ? "" : "mb-12",
      )}
    >
      <h3
        className={cn(
          "text-4xl",
          props.textAlign === "left" ? "text-left" : "text-center",
        )}
      >
        <span className="font-caveat text-accent block text-5xl">
          {props.accentedHeading}
        </span>
        <span className="block font-bold">{props.mainHeading}</span>
      </h3>
    </div>
  );
}
