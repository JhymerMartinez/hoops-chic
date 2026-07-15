import type { Metadata } from "next";
import { Star } from "lucide-react";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Read what Hoops Chic customers are saying about their orders.",
};

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <h1 className="font-heading text-4xl text-charcoal">Reviews</h1>
        <p className="mt-2 text-muted-foreground">
          Real feedback from real Hoops Chic customers.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {reviews.map((review) => (
          <figure
            key={review.id}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex gap-1 text-violet">
              {Array.from({ length: review.rating }).map((_, index) => (
                <Star key={index} className="size-4 fill-violet" />
              ))}
            </div>
            <blockquote className="text-charcoal/90">
              &ldquo;{review.text}&rdquo;
            </blockquote>
            <figcaption className="text-sm font-medium text-muted-foreground">
              {review.name}
              {review.location ? `, ${review.location}` : ""}
              {review.product ? ` — ${review.product}` : ""}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
