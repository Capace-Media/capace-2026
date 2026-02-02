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
    <article
      className={cn(
        "border-primary rounded-capace h-full border-3 p-3",
        className,
      )}
    >
      <div className="border-muted rounded-capace-inner flex h-full flex-col border p-4 pb-8">
        {children}
      </div>
    </article>
  );
}

Card.Header = Header;
Card.Body = Body;
Card.Icon = Icon;
Card.Number = Number;
Card.Title = Title;
Card.TextContent = TextContent;
Card.Footer = Footer;

function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="flex w-full flex-col items-center justify-center">
      {children}
    </header>
  );
}

function Footer({ children }: { children: React.ReactNode }) {
  return (
    <footer className="mt-auto flex w-full flex-col items-center justify-center">
      {children}
    </footer>
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
    <main className="flex flex-1 flex-col items-center gap-6">{children}</main>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="line-clamp-2 text-center text-xl font-medium">{children}</h3>
  );
}

function TextContent({ children }: { children: React.ReactNode }) {
  return <div className="text-center text-sm font-light">{children}</div>;
}

function Icon({ src }: { src: string | undefined | null }) {
  return (
    <div className="relative aspect-square h-30 w-30" aria-hidden>
      <Image
        src={src || "/misc/no-image.svg"}
        alt={""}
        fill
        className="h-auto w-auto object-contain"
      />
    </div>
  );
}
