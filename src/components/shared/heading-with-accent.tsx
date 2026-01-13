interface Props {
  accentedHeading: string;
  mainHeading: string;
}
export default function HeadingWithAccent(props: Props) {
  return (
    <div className="order-1 flex flex-col items-center lg:items-start">
      <h3 className="text-4xl lg:text-6xl">
        <span className="font-caveat text-accent block lowercase">
          {props.accentedHeading}
        </span>
        <span className="block font-bold">{props.mainHeading}</span>
      </h3>
    </div>
  );
}
