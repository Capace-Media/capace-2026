import { type FragmentType, useFragment } from "@/graphql/fragment-masking";
import { BlocksFragment } from "@/lib/queries/fragments";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeadingWithAccent from "@/components/shared/heading-with-accent";
import Image from "next/image";

interface Props {
  data: FragmentType<typeof BlocksFragment>;
}

export default function Faq(props: Props) {
  const block = useFragment(BlocksFragment, props.data);

  if (block.__typename !== "BlocksBlocksFaqLayout") return null;

  return (
    <section className="section relative flex flex-col items-center pb-0!">
      <HeadingWithAccent
        accentedHeading={block.accentHeading?.accent || ""}
        mainHeading={block.accentHeading?.main || ""}
      />
      <div
        aria-hidden
        className="relative top-0 left-0 mr-auto aspect-video w-50 -translate-x-[25%] lg:absolute lg:w-70 lg:translate-x-[40%]"
      >
        <Image
          src={"/stickers/sticker-deadline.webp"}
          alt={""}
          aria-hidden
          fill
          sizes="(min-width: 768px) 20vw, 50vw"
          className="object-contain"
        />
      </div>
      <Accordion multiple={false} className="mx-auto w-full max-w-200">
        {block?.questions?.nodes.map((question, index) => {
          if (question.__typename !== "Faq") {
            return;
          }
          return (
            <AccordionItem
              key={question.title}
              value={question.faqContent?.answer}
              className="border-muted border last:border-b"
            >
              <AccordionTrigger className="group p-0 text-base">
                <div className="flex h-full w-full">
                  <div className="flex h-full w-10 shrink-0 items-center justify-center py-4 text-xs sm:w-20 sm:text-base">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="border-l-muted border-r-muted flex h-full w-full items-center border-r border-l p-4">
                    {question.title}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex">
                <div className="flex w-10 shrink-0 sm:w-20" />
                <div className="border-muted flex flex-1 border-r border-l px-4 pb-6">
                  {question.faqContent?.answer}
                </div>
                <div className="flex w-10 sm:w-15" />
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
      <div
        aria-hidden
        className="relative right-0 bottom-0 ml-auto aspect-video w-60 md:w-100"
      >
        <Image
          src={"/stickers/sticker-capace.webp"}
          alt={""}
          aria-hidden
          fill
          sizes="(min-width: 768px) 20vw, 50vw"
          className="object-contain"
        />
      </div>
    </section>
  );
}
