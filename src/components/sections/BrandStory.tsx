import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BrandStory() {
  return (
    <section className="bg-lavender/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6">
        <h2 className="font-heading text-3xl text-charcoal sm:text-4xl">
          Crafted with intention, worn with meaning.
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          Hoops Chic began with a simple idea: jewelry should feel personal,
          not mass-produced. Every piece in our catalog is designed to be
          elegant, timeless, and made to be worn every day, not saved for a
          special occasion.
        </p>
        <Button asChild variant="outline" className="border-charcoal text-charcoal">
          <Link href="/about">Our Story</Link>
        </Button>
      </div>
    </section>
  );
}
