import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-heading text-2xl tracking-wide text-charcoal ${className ?? ""}`}
      aria-label="Hoops Chic home"
    >
      Hoops Chic
    </Link>
  );
}
