import Link from "next/link";

interface Props {
  categories?: {
    name: string | null | undefined;
    slug: string | null | undefined;
  }[];
}
export default function CategoryButtons(props: Props) {
  if (!props.categories) return null;
  return (
    <div className="flex gap-2">
      {props.categories.map((category, index) => (
        <Link
          href={`tjanster/${category.slug}`}
          key={index}
          className="border-muted text-muted-foreground hover:border-accent rounded-full border p-2 px-4 text-xs transition-colors duration-300 hover:text-white hover:no-underline"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
