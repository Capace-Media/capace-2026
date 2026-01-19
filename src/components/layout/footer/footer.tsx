import { getFooterData } from "@/lib/fetchers/footer";
import Image from "next/image";
import Link from "next/link";
import BouncySticker from "./bouncy-sticker";

export default async function Footer() {
  const data = await getFooterData();
  return (
    <footer className="bg-accent text-background overflow bottom-0 z-0 px-4 py-10 text-sm md:px-20 lg:sticky">
      <div className="bg-accent absolute top-0 left-0 h-30 w-full -translate-y-full" />
      <div className="flex flex-col gap-2">
        <div aria-hidden className="relative w-fit">
          <h3 className="text-[120px] leading-25 font-bold text-white md:leading-50">
            {data?.heading}
          </h3>
          <BouncySticker
            className={"top-1/2 left-full -translate-x-[20%] -translate-y-1/2"}
            imgSrc={"/stickers/sticker-small-hemsidor.webp"}
          />
          <BouncySticker
            className={"top-0 left-1/2 -translate-y-[30%]"}
            imgSrc={"/stickers/sticker-small-marketing.webp"}
          />
          <BouncySticker
            className={"top-0 left-0 translate-x-[20%] -translate-y-[30%]"}
            imgSrc={"/stickers/sticker-small-design.webp"}
          />
          <BouncySticker
            className={"-bottom-5 left-1/2 -translate-x-1/2"}
            imgSrc={"/stickers/sticker-small-ehandel.webp"}
          />
        </div>

        <div className="mt-5 flex flex-col lg:flex-row">
          <div className="flex flex-2 flex-col gap-6 pb-6 md:min-w-150">
            <p className="prose text-sm">{data?.textContent}</p>
            <ul className="flex flex-col gap-6 text-sm font-bold lg:flex-row lg:gap-12 [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:before:block [&>li]:before:size-2 [&>li]:before:rounded-full [&>li]:before:bg-white [&>li]:hover:text-white">
              <li>
                <a href={`tel:${data?.telephone}`}>{data?.telephone}</a>
              </li>
              <li>
                <a href={`mailto:${data?.email}`}>{data?.email}</a>
              </li>
              <li>
                <address className="not-italic">
                  <a
                    href={
                      "https://www.google.com/maps/place/Hyllie+Vattenparksgata+12,+215+32+Malm%C3%B6/@55.5663215,12.9755492,17z/data=!3m1!4b1!4m6!3m5!1s0x4653a12c0ffae025:0x7e277d4981e1ea40!8m2!3d55.5663215!4d12.9781295!16s%2Fg%2F11m5hwhh6w?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
                    }
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {data?.address}
                  </a>
                </address>
              </li>
            </ul>
            <ul className="flex items-center justify-center gap-8 border-t-2 border-b-2 border-t-black border-b-black py-8 lg:justify-start lg:border-none [&_a:hover]:invert [&_img]:size-10 lg:[&_img]:size-[30px]">
              {data?.socials?.facebook && (
                <li>
                  <a
                    href={data.socials.facebook}
                    aria-label="Länk till Facebook"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <Image
                      src={"/logotypes/facebook.svg"}
                      height={30}
                      width={30}
                      alt={"Facebook logotyp"}
                    />
                  </a>
                </li>
              )}
              {data?.socials?.instagram && (
                <li>
                  <a
                    href={data.socials.instagram}
                    aria-label="Länk till Instagram"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <Image
                      src={"/logotypes/instagram.svg"}
                      height={30}
                      width={30}
                      alt={"Instagram logotyp"}
                    />
                  </a>
                </li>
              )}
              {data?.socials?.linkedin && (
                <li>
                  <a
                    href={data.socials.linkedin}
                    aria-label="Länk till LinkedIn"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <Image
                      src={"/logotypes/linkedin.svg"}
                      height={30}
                      width={30}
                      alt={"LinkedIn logotyp"}
                    />
                  </a>
                </li>
              )}
              {data?.socials?.tiktok && (
                <li>
                  <a
                    href={data.socials.tiktok}
                    className="relative"
                    aria-label="Länk till TikTok"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <Image
                      src={"/logotypes/tiktok.svg"}
                      height={30}
                      width={30}
                      alt={"Tiktok logotyp"}
                    />
                  </a>
                </li>
              )}
              {data?.socials?.threads && (
                <li>
                  <a
                    href={data.socials.threads}
                    className="relative"
                    aria-label="Länk till Threads"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <Image
                      src={"/logotypes/threads.svg"}
                      height={30}
                      width={30}
                      alt={"Threads logotyp"}
                    />
                  </a>
                </li>
              )}
              {data?.socials?.x && (
                <li>
                  <a
                    href={data.socials.x}
                    className="relative"
                    aria-label="Länk till TikTok"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <Image
                      src={"/logotypes/x.svg"}
                      height={30}
                      width={30}
                      alt={"X logotyp"}
                    />
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className="flex flex-1 flex-wrap items-center justify-center gap-4 pb-10 lg:items-end">
            {data?.certifications?.nodes.map((image) => (
              <Image
                key={image.id}
                src={image.mediaItemUrl || ""}
                alt={image.altText || ""}
                width={100}
                height={100}
                className="h-auto w-auto"
                sizes="(min-width: 768px) 10vw, 25vw"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-center gap-8 border-t-black py-2 lg:flex-row lg:justify-between lg:border-t-2">
          © {new Date().getFullYear()} - Capace Media Group AB
          <nav className="flex flex-wrap items-center justify-center gap-4">
            <Link href={"#"}>Lokalt</Link>
            <Link href={"#"}>Integritetspolicy</Link>
            <Link href={"#"}>Tillgänglighet</Link>
            <Link href={"#"}>Cookies</Link>
            <Link href={"#"}>Om hemsidan</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
