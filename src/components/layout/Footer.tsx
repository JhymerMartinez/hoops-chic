import Link from "next/link";
import { Camera, Mail } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { siteConfig } from "@/lib/site-config";
import { getLocalizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Footer({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const { footer, header } = dictionary;

  return (
    <footer className="border-t border-border bg-lavender/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <Logo locale={locale} label={header.homeLabel} />
          <p className="text-sm text-muted-foreground">{footer.tagline}</p>
          <div className="flex items-center gap-4 pt-2">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={footer.instagramLabel}
              className="text-charcoal transition-colors hover:text-violet"
            >
              <Camera className="size-5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label={footer.emailLabel}
              className="text-charcoal transition-colors hover:text-violet"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h4 className="font-heading text-sm text-charcoal">{footer.shopHeading}</h4>
            <Link href={getLocalizedPath(locale, "/shop")} className="text-sm text-muted-foreground hover:text-charcoal">
              {footer.allProducts}
            </Link>
            <Link href={getLocalizedPath(locale, "/collections")} className="text-sm text-muted-foreground hover:text-charcoal">
              {footer.collections}
            </Link>
            <Link href={getLocalizedPath(locale, "/gift-guide")} className="text-sm text-muted-foreground hover:text-charcoal">
              {footer.giftGuide}
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-heading text-sm text-charcoal">{footer.brandHeading}</h4>
            <Link href={getLocalizedPath(locale, "/about")} className="text-sm text-muted-foreground hover:text-charcoal">
              {footer.about}
            </Link>
            <Link href={getLocalizedPath(locale, "/gallery")} className="text-sm text-muted-foreground hover:text-charcoal">
              {footer.gallery}
            </Link>
            <Link href={getLocalizedPath(locale, "/reviews")} className="text-sm text-muted-foreground hover:text-charcoal">
              {footer.reviews}
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-heading text-sm text-charcoal">{footer.supportHeading}</h4>
            <Link href={getLocalizedPath(locale, "/faq")} className="text-sm text-muted-foreground hover:text-charcoal">
              {footer.faq}
            </Link>
            <Link href={getLocalizedPath(locale, "/contact")} className="text-sm text-muted-foreground hover:text-charcoal">
              {footer.contact}
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} Hoops Chic. {footer.rights}
      </div>
    </footer>
  );
}
