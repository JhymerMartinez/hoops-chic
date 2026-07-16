import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getLocalizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function BrandStory({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const copy = dictionary.brandStory;

  return (
    <section className="bg-lavender/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6">
        <h2 className="font-heading text-3xl text-charcoal sm:text-4xl">
          {copy.title}
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          {copy.description}
        </p>
        <Button asChild variant="outline" className="border-charcoal text-charcoal">
          <Link href={getLocalizedPath(locale, "/about")}>{copy.cta}</Link>
        </Button>
      </div>
    </section>
  );
}
