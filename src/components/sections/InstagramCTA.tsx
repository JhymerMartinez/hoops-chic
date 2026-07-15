import { Camera } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function InstagramCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
      <Camera className="mx-auto mb-4 size-8 text-gold" />
      <h2 className="font-heading text-3xl text-charcoal">
        Follow along {siteConfig.instagramHandle}
      </h2>
      <p className="mx-auto mt-2 max-w-md text-muted-foreground">
        See new arrivals, styling ideas, and behind-the-scenes moments from
        Hoops Chic on Instagram.
      </p>
      <a
        href={siteConfig.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center rounded-full border border-charcoal px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
      >
        Visit our Instagram
      </a>
    </section>
  );
}
