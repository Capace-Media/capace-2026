"use client";
import Image from "next/image";

interface Props {
  imgSrc: string | undefined | null;
  url: string;
  altText: string;
  slowDownSpeed: () => void;
  resetSpeed: () => void;
}

export const CollaboratorImage = (props: Props) => {
  return (
    <div className="flex">
      <a
        tabIndex={-1}
        href={props.url}
        target="_blank"
        onMouseEnter={props.slowDownSpeed}
        onMouseLeave={props.resetSpeed}
        rel="noopener noreferrer nofollow"
        className="relative block aspect-square w-25 lg:w-40"
        aria-label={props.altText || "Kund"}
      >
        <Image
          src={props.imgSrc || "/misc/no-image.svg"}
          alt={props.altText}
          className="object-contain"
          fill
        />
      </a>
      <div className="flex aspect-square w-15 items-center justify-center lg:w-40">
        <div className="relative h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true">
          <Image
            src={"/icons/diamond.svg"}
            fill
            alt=""
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
