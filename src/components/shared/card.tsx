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
    <div className="bg-background border-muted flex h-100 max-w-100 flex-col items-center rounded-lg border p-8">
      <div className="text-accent items-center justify-center rounded-full p-4 text-sm font-bold">
        {props.index}
      </div>
      <h3 className="text-3xl font-bold">{props.title}</h3>
      <p className="text-muted-foreground">{props.textContent}</p>
      {/* {props.buttonUrl && props.buttonLabel && (
        <Button render={<Link></Link>}>{props.buttonLabel}</Button>
      )} */}
    </div>
  );
}
