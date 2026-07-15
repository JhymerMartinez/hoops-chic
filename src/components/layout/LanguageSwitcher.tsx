"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

function switchLocale(pathname: string, locale: Locale) {
  const segments = pathname.split("/");

  if (isLocale(segments[1] ?? "")) {
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return `/${locale}${pathname === "/" ? "" : pathname}`;
}

export function LanguageSwitcher({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      aria-label={label}
      role="group"
    >
      <Languages className="mr-1 size-4 text-charcoal/70" aria-hidden="true" />
      {locales.map((option) => (
        <Link
          key={option}
          href={switchLocale(pathname, option)}
          hrefLang={option}
          lang={option}
          aria-current={option === locale ? "page" : undefined}
          className={cn(
            "rounded-full px-2 py-1 text-xs font-medium uppercase transition-colors",
            option === locale
              ? "bg-charcoal text-ivory"
              : "text-charcoal/70 hover:bg-secondary hover:text-charcoal"
          )}
        >
          {option}
        </Link>
      ))}
    </div>
  );
}

