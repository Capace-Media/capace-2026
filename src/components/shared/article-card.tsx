import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function ArticleCard(props: ImageProps) {
  return (
    <article
      className={cn("case-card flex flex-1 flex-col gap-4", props.className)}
    >
      <ImageAndButton
        imgSrc={props.imgSrc}
        altText={props.altText}
        buttonLabel={props.buttonLabel}
        buttonLink={props.buttonLink}
        ariaLabel={props.ariaLabel}
      />
      {props.children}
    </article>
  );
}

ArticleCard.Footer = Footer;
ArticleCard.Header = Header;

function Footer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("text-muted-foreground text-sm", className)}>
      {children}
    </div>
  );
}

function Header({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse justify-between gap-4 sm:flex-row",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface ImageProps {
  imgSrc: string;
  altText: string;
  buttonLabel: string;
  buttonLink: string;
  ariaLabel: string;
  children?: React.ReactNode;
  className?: string;
}
function ImageAndButton(props: ImageProps) {
  return (
    <div className="relative aspect-[1.3] h-auto w-full">
      <Image
        src={props.imgSrc}
        alt={props.altText}
        className="rounded-[36px] object-cover"
        fill
      />

      <div className="absolute right-0 bottom-0 flex items-center justify-center rounded-tl-[36px] bg-black pt-4 pr-1 pl-4">
        <div className="absolute top-0 right-0 h-6 w-6 -translate-y-full lg:h-8 lg:w-8">
          <Image
            src={"/misc/rounded-image-corner.svg"}
            fill
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="absolute bottom-0 left-0 h-6 w-6 -translate-x-full lg:h-8 lg:w-8">
          <Image
            src={"/misc/rounded-image-corner.svg"}
            fill
            alt=""
            aria-hidden="true"
          />
        </div>
        <Link
          href={props.buttonLink}
          className="no-underline! hover:cursor-pointer"
        >
          <Button
            withArrow
            variant={"default"}
            className="w-[170]!"
            aria-label={props.ariaLabel}
          >
            {props.buttonLabel}
          </Button>
        </Link>
      </div>
    </div>
  );
}
