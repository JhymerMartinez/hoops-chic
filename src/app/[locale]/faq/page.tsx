import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getFaqs } from "@/data/faq";
import { getDictionary } from "@/i18n/dictionaries";
import { getPageMetadata } from "@/i18n/metadata";
import { getRequestLocale, type LocaleParams } from "@/i18n/server";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await getRequestLocale(params);
  return getPageMetadata(locale, getDictionary(locale).meta.pages.faq, "/faq");
}

export default async function FaqPage({ params }: { params: LocaleParams }) {
  const locale = await getRequestLocale(params);
  const copy = getDictionary(locale).faq;
  const faqs = getFaqs(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <h1 className="font-heading text-4xl text-charcoal">{copy.title}</h1>
        <p className="mt-2 text-muted-foreground">{copy.description}</p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.question} value={`item-${index}`}>
            <AccordionTrigger className="font-heading text-lg text-charcoal">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

