import ParallaxImage from "@/components/shared/parallax-image";

interface Props {
  src: string | undefined | null;
}

export default function ParallaxHero(props: Props) {
  return (
    <div
      className="mt-30 h-60 w-full overflow-hidden rounded-[36px] md:h-90 lg:h-130"
      aria-hidden
    >
      <ParallaxImage src={props.src || "/misc/no-image.svg"} alt={""} />
    </div>
  );
}
