"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({ ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root data-slot="accordion" keepMounted {...props} />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "overflow-hidden border-b first:rounded-tr-[36px] last:rounded-bl-[36px] last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring hover:bg-accent group hover:text-background focus-visible:ring-ring/50 data-panel-open:bg-accent data-panel-open:text-background flex flex-1 cursor-pointer items-start justify-between text-left text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-panel-open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        <div className="flex h-full w-10 shrink-0 items-center justify-center sm:w-15">
          <Plus className="text-muted-foreground group-data-panel-open:text-background group-hover:text-background pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-400 group-data-panel-open:rotate-45 sm:size-6" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="data-[closed]:animate-accordion-collapse data-[open]:animate-accordion-expand bg-accent data-open:text-background text-background! overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("", className)}>{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
