import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WhatsAppOrderButton } from "@/components/products/WhatsAppOrderButton";
import { getLocalizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Hero({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const { hero, common } = dictionary;

  return (
    <section className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-16 sm:px-6 md:flex-row md:py-24">
      <div className="flex flex-1 flex-col items-start gap-6 text-left">
        <span className="rounded-full bg-secondary px-4 py-1 text-xs font-medium tracking-wide text-charcoal/70 uppercase">
          {hero.eyebrow}
        </span>
        <h1 className="font-script text-5xl leading-tight text-charcoal sm:text-6xl">
          {hero.title}
        </h1>
        <p className="max-w-md text-base text-muted-foreground sm:text-lg">
          {hero.description}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button asChild size="lg" className="bg-violet-dark text-white hover:bg-violet">
            <Link href={getLocalizedPath(locale, "/shop")}>{hero.catalogCta}</Link>
          </Button>
          <WhatsAppOrderButton
            locale={locale}
            label={common.orderOnWhatsApp}
          />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="flex aspect-square w-full max-w-sm items-center justify-center rounded-full bg-gradient-to-br from-lavender via-ivory to-secondary p-16 shadow-inner">
          <Image
            src="/logo/logo.svg"
            alt="Hoops Chic"
            width={256}
            height={256}
            className="h-full w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
