interface CarouselPositionIndicatorProps {
  currentIndex: number;
  totalLenght: number;
}
export default function CarouselPositionIndicator(
  props: CarouselPositionIndicatorProps,
) {
  return (
    <div className="flex justify-center gap-2 py-5">
      {Array.from({ length: props.totalLenght }).map((_, index) => (
        <div
          key={index}
          className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
            index + 1 === props.currentIndex ? "bg-accent w-8" : "bg-muted"
          }`}
        />
      ))}
    </div>
  );
}
