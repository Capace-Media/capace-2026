import type { PageQuery } from "@/graphql/graphql";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeadingWithAccent from "../shared/heading-with-accent";

interface Props {
  data: Extract<
    NonNullable<
      NonNullable<NonNullable<PageQuery["page"]>["blocks"]>["blocks"]
    >[number],
    { __typename: "BlocksBlocksFaqLayout" }
  >;
}

export default function Faq(props: Props) {
  console.log("faq data:", props.data);

  return (
    <section className="section flex flex-col items-center">
      <HeadingWithAccent
        accentedHeading={props.data.accentHeading?.accent || ""}
        mainHeading={props.data.accentHeading?.main || ""}
      />
      <Accordion multiple={false} className="mx-auto w-full max-w-200">
        {props.data?.questions?.nodes.map((question, index) => {
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
                  <div className="flex h-full w-20 shrink-0 items-center justify-center py-4">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="border-l-muted border-r-muted flex h-full w-full items-center border-r border-l p-4">
                    {question.title}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex">
                <div className="flex w-20 shrink-0" />
                <div className="border-muted flex flex-1 border-r border-l px-4 pb-6">
                  {question.faqContent?.answer}
                </div>
                <div className="flex w-15" />
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
