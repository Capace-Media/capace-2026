import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
  size?: "sm" | "md" | "lg";
  categories?: {
    name: string | null | undefined;
    slug: string | null | undefined;
  }[];
}
export default function CategoryButtons(props: Props) {
  if (!props.categories) return null;
  return (
    <div className={cn("flex gap-2", props.className)}>
      {props.categories.map((category, index) => (
        <Link
          href={`tjanster/${category.slug}`}
          key={index}
          className={cn(
            props.size === "lg" && "text-base",
            props.size === "md" && "text-sm",
            (props.size === "sm" || !props.size) && "text-xs",
            "border-muted text-muted-foreground hover:border-accent rounded-full border p-2 px-4 transition-colors duration-300 hover:text-white hover:no-underline",
          )}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
