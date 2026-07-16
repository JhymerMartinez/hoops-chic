import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { WhatsAppOrderButton } from "@/components/products/WhatsAppOrderButton";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site-config";
import { getLocalizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Header({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const { header, common } = dictionary;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo locale={locale} label={header.homeLabel} />

        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={getLocalizedPath(locale, item.href)}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-charcoal"
            >
              {header.nav[item.id]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} label={header.languageLabel} />
          <WhatsAppOrderButton
            locale={locale}
            label={header.orderNow}
          />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label={header.openMenu}
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72"
            closeLabel={header.closeMenu}
          >
            <SheetHeader>
              <SheetTitle>
                <Logo locale={locale} label={header.homeLabel} />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 px-4">
              {siteConfig.nav.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={getLocalizedPath(locale, item.href)}
                    className="text-base font-medium text-charcoal"
                  >
                    {header.nav[item.id]}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-2 px-4">
              <LanguageSwitcher
                locale={locale}
                label={header.languageLabel}
              />
            </div>
            <div className="mt-4 px-4">
              <WhatsAppOrderButton
                locale={locale}
                label={common.orderOnWhatsApp}
                className="w-full"
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
