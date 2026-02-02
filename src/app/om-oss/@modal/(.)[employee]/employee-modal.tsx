"use client";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import type { getEmployeeBySlug } from "@/lib/fetchers/employees";
import { useFragment } from "@/graphql";
import { EmployeeContentFragment } from "@/lib/queries/fragments";
import Quote from "@/components/blocks/quotes/quote";
import EmailLink from "@/components/shared/email-link";
import { X } from "lucide-react";
import parse from "html-react-parser";
import TelephoneLink from "@/components/shared/telephone-link";

interface Props {
  data: Awaited<ReturnType<typeof getEmployeeBySlug>>;
}

export default function EmployeeModal({ data }: Props) {
  // Unwrap the employeeContent fragment for type-safe access
  const employeeContent = data?.employeeContent
    ? useFragment(EmployeeContentFragment, data.employeeContent)
    : undefined;
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, []);

  const handleClose = () => {
    router.back();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      handleClose();
    }
  };

  if (!data) notFound();

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      onClose={handleClose}
      className="animate-in fade-in fixed inset-0 z-100 flex h-screen max-h-screen w-full max-w-full cursor-pointer items-center justify-center bg-transparent duration-300 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      <button
        onClick={handleClose}
        className="absolute top-5 right-5 z-200 cursor-pointer"
      >
        <X className="text-muted-foreground" />
      </button>
      <article
        className={cn(
          "bg-background border-muted relative grid h-[90vh] w-full max-w-4xl cursor-default grid-cols-[repeat(auto-fit,minmax(300px,1fr))] flex-col gap-0 overflow-y-auto rounded-3xl border shadow-2xl",
          "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent/30",
        )}
      >
        <div>
          {employeeContent?.image?.node?.mediaItemUrl && (
            <div className="relative aspect-square h-auto w-full">
              <Image
                src={employeeContent.image.node.mediaItemUrl}
                alt={
                  employeeContent.image.node.altText || `Bild på ${data.title}`
                }
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>
          )}
          {employeeContent?.quote && (
            <Quote
              className="col-span-1 row-start-2 my-0 px-6 pb-0 font-medium"
              quote={employeeContent.quote}
              author={data.title}
              authorTitle={employeeContent.workTitle}
            />
          )}
        </div>
        <div className="flex flex-col gap-4 p-6">
          <header className="flex flex-col items-center gap-4 md:flex-row md:items-start">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h2 className="orange-dot text-foreground text-3xl font-bold">
                {data.title}
              </h2>
              {employeeContent?.workTitle && (
                <p className="text-primary text-lg uppercase">
                  {employeeContent.workTitle}
                </p>
              )}
              {employeeContent?.email && (
                <EmailLink email={employeeContent.email} />
              )}
              {employeeContent?.telephone && (
                <TelephoneLink phoneNumber={employeeContent.telephone} />
              )}
            </div>
          </header>
          {employeeContent?.textContent && (
            <section className="prose prose-invert text-muted-foreground max-w-none overflow-scroll">
              {parse(employeeContent.textContent)}
            </section>
          )}
        </div>
      </article>
    </dialog>
  );
}
