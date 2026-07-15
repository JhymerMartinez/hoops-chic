import { Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { reviews } from "@/data/reviews";

export function Testimonials() {
  const featured = reviews.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8 text-center">
        <h2 className="font-heading text-3xl text-charcoal">Loved by our customers</h2>
        <p className="mt-2 text-muted-foreground">
          Real words from real Hoops Chic customers.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {featured.map((review) => (
          <figure
            key={review.id}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex gap-1 text-gold">
              {Array.from({ length: review.rating }).map((_, index) => (
                <Star key={index} className="size-4 fill-gold" />
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
          <Link href="/reviews">Read all reviews</Link>
        </Button>
      </div>
    </section>
  );
}
