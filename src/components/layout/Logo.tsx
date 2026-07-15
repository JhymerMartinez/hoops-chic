import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center", className)}
      aria-label="Hoops Chic home"
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
