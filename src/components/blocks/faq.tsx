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
      <HeadingWithAccent accentedHeading={""} mainHeading={""} />
      <Accordion multiple={false} className="mx-auto w-full max-w-200">
        {props.data?.questions?.nodes.map((question, index) => {
          if (question.__typename !== "Faq") {
            console.log("returning");

            return;
          }
          return (
            <AccordionItem
              key={question.title}
              value={question.faqContent?.answer}
              className="border-muted border last:border-b"
            >
              <AccordionTrigger className="p-0! text-base">
                <div className="group flex h-full w-full items-center">
                  <div className="flex h-full w-20 justify-center py-6">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="border-l-muted border-r-muted flex h-full w-full items-center border-r border-l px-4 group-hover:underline">
                    {question.title}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex h-full flex-col">
                <div className="group flex h-full w-full items-center">
                  <div className="border-muted flex h-20 w-20 border-r" />
                  <div className="flex flex-1 px-4">
                    {question.faqContent?.answer}
                  </div>
                  <div className="border-muted flex h-20 w-20 border-l" />
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
