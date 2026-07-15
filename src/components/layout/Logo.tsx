import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getLocalizedPath, type Locale } from "@/i18n/config";

export function Logo({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={getLocalizedPath(locale)}
      className={cn("flex items-center", className)}
      aria-label={label}
    >
      <Image
        src="/logo/logo.svg"
        alt="Hoops Chic"
        width={160}
        height={160}
        priority
        className="h-12 w-12"
      />
    </Link>
  );
}
