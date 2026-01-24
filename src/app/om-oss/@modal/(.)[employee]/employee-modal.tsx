"use client";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import type { getEmployeeBySlug } from "@/lib/fetchers/employees";
import Quote from "@/components/blocks/Quote/quote";
import EmailLink from "@/components/shared/email-link";

interface Props {
  data: Awaited<ReturnType<typeof getEmployeeBySlug>>;
}

export default function EmployeeModal({ data }: Props) {
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
      className="fixed inset-0 z-100 flex h-full w-full items-center justify-center bg-transparent backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      <article
        className={cn(
          "bg-background border-muted relative flex max-h-[90vh] w-full max-w-4xl flex-col gap-6 overflow-y-auto rounded-3xl border p-8 shadow-2xl",
          "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent/30",
        )}
      >
        {data.employeeContent?.image?.node.mediaItemUrl && (
          <div className="relative h-100 w-100 shrink-0">
            <Image
              src={data.employeeContent.image.node.mediaItemUrl}
              alt={
                data.employeeContent.image.node.altText ||
                `Bild på ${data.title}`
              }
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
        )}
        <div className="border">
          <header className="flex flex-col items-center gap-4 border md:flex-row md:items-start">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h2 className="orange-dot text-foreground text-3xl font-bold">
                {data.title}
              </h2>
              {data.employeeContent?.workTitle && (
                <p className="text-primary text-lg uppercase">
                  {data.employeeContent.workTitle}
                </p>
              )}
              {data.employeeContent?.email && (
                <EmailLink email={data.employeeContent.email} />
              )}
            </div>
          </header>
          {data.employeeContent?.textContent && (
            <section className="prose prose-invert max-w-none">
              <p>{data.employeeContent.textContent}</p>
            </section>
          )}
        </div>
        {data.employeeContent?.quote && (
          <Quote
            quote={data.employeeContent.quote}
            author={data.title}
            authorTitle={data.employeeContent.workTitle}
            companyName={"Capace Media"}
          />
        )}
      </article>
    </dialog>
  );
}
