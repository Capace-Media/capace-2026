import { Phone } from "lucide-react";

interface Props {
  phoneNumber: string;
}

export default function TelephoneLink(props: Props) {
  return (
    <div className="text-foreground flex items-center gap-2 text-sm">
      <Phone
        className="text-primary size-4"
        fill="var(--primary)"
        strokeWidth={0}
      />
      <a href={`tel:${props.phoneNumber}`}>{props.phoneNumber}</a>
    </div>
  );
}
