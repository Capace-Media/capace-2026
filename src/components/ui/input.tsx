import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <div
      className={cn(
        "bg-background border-muted rounded-full border p-1",
        className,
      )}
    >
      <InputPrimitive
        type={type}
        data-slot="input"
        className={cn(
          "bg-input focus-visible:border-ring focus-visible:ring-ring aria-invalid:ring-destructive/50 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 file:text-foreground h-12 w-full min-w-0 rounded-4xl px-6 py-1 text-base transition-colors outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/30 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-[3px] md:text-sm",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
