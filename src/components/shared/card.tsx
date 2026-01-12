import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  index: number;
  imgSrc: string;
  altText: string;
  title: string;
  textContent: string;
  buttonLabel: string | undefined | null;
  buttonUrl: string | undefined | null;
}
export default function Card(props: Props) {
  return (
    <div className="bg-background flex flex-col items-center rounded-lg border p-8">
      <div className="text-accent items-center justify-center rounded-full p-4 text-sm font-bold">
        {props.index}
      </div>
      <h4>{props.title}</h4>
      <p>{props.textContent}</p>
      {/* {props.buttonUrl && props.buttonLabel && (
        <Button render={<Link></Link>}>{props.buttonLabel}</Button>
      )} */}
    </div>
  );
}
