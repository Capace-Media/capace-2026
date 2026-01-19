"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import React, { useState } from "react";

const buttonVariants = cva(
  "focus-visible:border-ring w-full max-w-70 sm:w-fit font-light! cursor-pointer focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-full border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-[10px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
  {
    variants: {
      variant: {
        default: "bg-background text-primary-foreground border border-muted",
        outline:
          "border-border bg-input/30 hover:bg-input/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary: "bg-background text-accent! border border-muted",
        secondaryAccent:
          "bg-background text-accent border border-border/15 hover:bg-accent hover:text-background aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:border-transparent border border-muted rounded-full p-2 hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/10 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "gap-1.5 p-1 h-fit has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 p-3 text-sm has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        lg: "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  withArrow = false,
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & { withArrow?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, className }),
        "group flex items-center",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div
        className={cn(
          size === "sm" ? (withArrow ? "py-6 pr-1 pl-5" : "px-3") : "",
          size === "default" ? (withArrow ? "py-1 pr-1 pl-5" : "px-3") : "px-0",
          variant === "ghost" && "border-transparent!",
          "border-muted group-hover:border-accent flex w-full items-center justify-between gap-6 rounded-full border transition-colors duration-400",
        )}
      >
        <div className="transition-transform duration-600 group-hover:translate-x-1">
          {props.children}
        </div>
        {withArrow && (
          <div className="border-muted rounded-full border p-2 transition-all duration-400 group-hover:-rotate-90">
            <ArrowDown
              className={cn(size === "sm" ? "size-6" : "size-6", "text-accent")}
            />
          </div>
        )}
      </div>
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
