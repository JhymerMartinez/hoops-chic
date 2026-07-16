import { Camera } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import type { Dictionary } from "@/i18n/dictionaries";

export function InstagramCTA({ dictionary }: { dictionary: Dictionary }) {
  const copy = dictionary.instagram;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
      <Camera className="mx-auto mb-4 size-8 text-violet" />
      <h2 className="font-heading text-3xl text-charcoal">
        {copy.title.replace("{handle}", siteConfig.instagramHandle)}
      </h2>
      <p className="mx-auto mt-2 max-w-md text-muted-foreground">
        {copy.description}
      </p>
      <a
        href={siteConfig.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center rounded-full border border-charcoal px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
      >
        {copy.cta}
      </a>
    </section>
  );
}
