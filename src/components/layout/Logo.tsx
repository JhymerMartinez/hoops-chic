import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-heading text-2xl tracking-wide bg-gradient-to-r from-violet to-violet-dark bg-clip-text text-transparent ${className ?? ""}`}
      aria-label="Hoops Chic home"
    >
      Hoops Chic
    </Link>
  );
}
