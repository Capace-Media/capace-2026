"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CaseFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (!searchParams.has("filter")) {
      router.replace("?filter=all", { scroll: false });
    }
  }, [searchParams, router]);

  const setFilter = (filter: string) => {
    router.replace(`?filter=${filter}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      <FilterButton filterString="all" onClick={() => setFilter("all")}>
        Alla
      </FilterButton>
      <FilterButton
        filterString="marknadsföring"
        onClick={() => setFilter("marknadsföring")}
      >
        Marknadsföring
      </FilterButton>
      <FilterButton filterString="webb" onClick={() => setFilter("webb")}>
        Webb
      </FilterButton>
      <FilterButton filterString="design" onClick={() => setFilter("design")}>
        Design
      </FilterButton>
    </div>
  );
}

const FilterButton = ({
  children,
  filterString,
  onClick,
}: {
  children: React.ReactNode;
  filterString: string;
  onClick?: () => void;
}) => {
  const searchParams = useSearchParams();
  const isActive = searchParams.get("filter") === filterString;

  return (
    <Button
      animatedText={false}
      size={"lg"}
      onClick={onClick}
      className={cn(isActive && "text-accent", "w-fit")}
    >
      {children}
    </Button>
  );
};
