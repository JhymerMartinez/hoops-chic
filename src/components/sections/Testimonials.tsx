import { Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getReviews } from "@/data/reviews";
import { getLocalizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Testimonials({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const featured = getReviews(locale).slice(0, 3);
  const copy = dictionary.testimonials;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8 text-center">
        <h2 className="font-heading text-3xl text-charcoal">{copy.title}</h2>
        <p className="mt-2 text-muted-foreground">
          {copy.description}
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {featured.map((review) => (
          <figure
            key={review.id}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex gap-1 text-violet">
              {Array.from({ length: review.rating }).map((_, index) => (
                <Star key={index} className="size-4 fill-violet" />
              ))}
            </div>
            <blockquote className="text-sm text-charcoal/90">
              &ldquo;{review.text}&rdquo;
            </blockquote>
            <figcaption className="text-sm font-medium text-muted-foreground">
              {review.name}
              {review.location ? `, ${review.location}` : ""}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button asChild variant="link" className="text-charcoal">
          <Link href={getLocalizedPath(locale, "/reviews")}>{copy.cta}</Link>
        </Button>
      </div>
    </section>
  );
}
