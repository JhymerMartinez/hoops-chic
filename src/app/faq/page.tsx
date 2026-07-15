import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to frequently asked questions about ordering, shipping, and caring for Hoops Chic jewelry.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <h1 className="font-heading text-4xl text-charcoal">
          Frequently Asked Questions
        </h1>
        <p className="mt-2 text-muted-foreground">
          Have a question that isn&apos;t answered here? Reach out to us on
          WhatsApp anytime.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.question} value={`item-${index}`}>
            <AccordionTrigger className="font-heading text-lg text-charcoal">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
