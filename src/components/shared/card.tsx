import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-primary rounded-capace h-full max-w-100 min-w-80 border-3 p-3",
        className,
      )}
    >
      <div className="border-muted rounded-capace-inner border p-4 pb-8">
        {" "}
        {children}
      </div>
    </div>
  );
}

Card.Header = Header;
Card.Body = Body;
Card.Icon = Icon;
Card.Number = Number;
Card.Title = Title;
Card.TextContent = TextContent;

function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      {children}
    </div>
  );
}

function Number({ number }: { number: number }) {
  return (
    <div className="items-center justify-center rounded-full p-4 text-base font-bold">
      {number.toString().padStart(2, "0")}
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-6">{children}</div>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="line-clamp-2 text-center text-xl font-medium">{children}</h3>
  );
}

function TextContent({ children }: { children: React.ReactNode }) {
  return <p className="text-center text-sm font-light">{children}</p>;
}

function Icon({
  src,
  altText,
}: {
  src: string | undefined | null;
  altText: string | undefined | null;
}) {
  return (
    <div className="relative aspect-square h-30 w-30" aria-hidden>
      <Image
        src={src || "/misc/no-image.svg"}
        alt={altText || ""}
        fill
        className="h-auto w-auto object-contain"
      />
    </div>
  );
}
