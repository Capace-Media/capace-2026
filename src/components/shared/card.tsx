import Image from "next/image";
import ExternalOrInternalLink from "./external-or-internal-link";
import { cn } from "@/lib/utils";

interface Props {
  index: number;
  imgSrc: string;
  altText: string;
  title: string;
  textContent: string;
  buttonLabel: string | undefined | null;
  buttonUrl: string | undefined | null;
  withBorder?: boolean;
  numbered?: boolean;
}
export default function Card(props: Props) {
  return (
    <div
      className={cn(
        "bg-background border-muted justify-between-4 flex h-full max-w-100 flex-col items-center rounded-xl border p-8",
        props.withBorder && "border-accent",
      )}
    >
      <div className="flex h-40 w-full flex-col items-center justify-center">
        {props.numbered && (
          <div className="text-accent items-center justify-center rounded-full p-4 text-base font-bold">
            {props.index.toString().padStart(2, "0")}
          </div>
        )}

        {props.imgSrc && (
          <Image
            src={props.imgSrc}
            alt={props.altText}
            width={90}
            height={90}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col items-center gap-6">
        <h3 className="text-2xl font-medium">{props.title}</h3>
        <p className="text-muted-foreground text-center text-sm font-light">
          {props.textContent}
        </p>
        {props.buttonUrl && props.buttonLabel && (
          <ExternalOrInternalLink
            urlOrSlug={props.buttonUrl}
            isExternal={false}
            ariaLabel={""}
            label={props.buttonLabel}
          />
        )}
      </div>
    </div>
  );
}
