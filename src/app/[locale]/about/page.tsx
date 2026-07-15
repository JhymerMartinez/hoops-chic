import type { Metadata } from "next";
import { WhatsAppOrderButton } from "@/components/products/WhatsAppOrderButton";
import { getDictionary } from "@/i18n/dictionaries";
import { getPageMetadata } from "@/i18n/metadata";
import { getRequestLocale, type LocaleParams } from "@/i18n/server";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await getRequestLocale(params);
  return getPageMetadata(locale, getDictionary(locale).meta.pages.about, "/about");
}

export default async function AboutPage({ params }: { params: LocaleParams }) {
  const locale = await getRequestLocale(params);
  const dictionary = getDictionary(locale);
  const copy = dictionary.about;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="font-heading text-4xl text-charcoal sm:text-5xl">{copy.title}</h1>
      {copy.paragraphs.map((paragraph, index) => (
        <p key={paragraph} className={index === 0 ? "mt-6 text-lg text-muted-foreground" : "mt-4 text-lg text-muted-foreground"}>
          {paragraph}
        </p>
      ))}

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {copy.values.map((value) => (
          <div key={value.title} className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-heading text-xl text-charcoal">{value.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-start gap-3">
        <h2 className="font-heading text-2xl text-charcoal">{copy.questionTitle}</h2>
        <p className="text-muted-foreground">{copy.questionText}</p>
        <WhatsAppOrderButton locale={locale} label={copy.chatCta} />
      </div>
    </div>
  );
}

