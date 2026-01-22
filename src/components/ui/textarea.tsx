import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <div className="bg-background border-muted rounded-3xl border p-1">
      <textarea
        data-slot="textarea"
        className={cn(
          "bg-input focus-visible:border-ring focus-visible:ring-ring aria-invalid:ring-destructive/50 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex field-sizing-content min-h-30 w-full resize-none rounded-2xl px-3 py-3 text-base transition-colors outline-none placeholder:text-white/30 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-[3px] md:text-sm",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export { Textarea };
