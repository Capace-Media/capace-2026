"use client";
import Image from "next/image";

interface Props {
  imgSrc: string;
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
        className="relative block aspect-square w-40"
        aria-label={props.altText || "Kund"}
      >
        <Image
          src={props.imgSrc}
          alt={props.altText}
          className="object-contain"
          fill
        />
      </a>
      <div
        className="flex aspect-square w-30 items-center justify-center"
        aria-hidden="true"
      >
        <Image
          src={"/misc/diamond.svg"}
          alt=""
          width={20}
          height={20}
          className="object-contain"
        />
      </div>
    </div>
  );
};
