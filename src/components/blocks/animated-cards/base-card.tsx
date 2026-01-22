import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ReusableFieldsButton_Fields } from "@/graphql/graphql";
import ExternalOrInternalLink from "@/components/shared/external-or-internal-link";

interface Props {
  index: number;
  imgSrc: string;
  altText: string;
  title: string;
  textContent: string;
  withBorder?: boolean;
  numbered?: boolean;
  buttonProps?: ReusableFieldsButton_Fields;
  isInactive?: boolean;
  isAnimated?: boolean;
}
export default function BaseCard(props: Props) {
  const { isInactive = true } = props;
  return (
    <div
      className={cn(
        props.isAnimated ? "bg-accent" : "bg-background",
        "border-muted justify-between-4 flex h-full max-w-100 flex-col items-center rounded-xl border px-8 pt-4 pb-20 transition-colors duration-400",
        isInactive && "bg-background",
        props.withBorder && "border-accent",
        "noscript:bg-background min-w-80",
      )}
    >
      <div className="flex h-40 w-full flex-col items-center justify-center">
        {props.numbered && (
          <div
            className={cn(
              isInactive ? "text-accent" : "text-background",
              "items-center justify-center rounded-full p-4 text-base font-bold",
              "noscript:text-accent",
            )}
          >
            {(props.index + 1).toString().padStart(2, "0")}
          </div>
        )}

        {props.imgSrc && (
          <Image
            src={props.imgSrc}
            alt={props.altText}
            width={90}
            height={90}
            className="h-auto w-auto"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col items-center gap-6">
        <h3
          className={cn(
            isInactive ? "text-foreground" : "text-background",
            "line-clamp-2 min-h-16 text-center text-2xl font-medium",
            "noscript:text-foreground",
          )}
        >
          {props.title}
        </h3>
        <p
          className={cn(
            isInactive ? "text-muted-foreground" : "text-background",
            "text-center text-sm font-light",
            "noscript:text-muted-foreground",
          )}
        >
          {props.textContent}
        </p>
        {props.buttonProps?.label && props.buttonProps?.url && (
          <ExternalOrInternalLink
            buttonProps={props.buttonProps}
            variant="secondary"
          />
        )}
      </div>
    </div>
  );
}
