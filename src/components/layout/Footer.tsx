import Link from "next/link";
import { Camera, Mail } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-beige/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <Logo />
          <p className="text-sm text-muted-foreground">{siteConfig.tagline}</p>
          <div className="flex items-center gap-4 pt-2">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hoops Chic on Instagram"
              className="text-charcoal transition-colors hover:text-gold"
            >
              <Camera className="size-5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email Hoops Chic"
              className="text-charcoal transition-colors hover:text-gold"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h4 className="font-heading text-sm text-charcoal">Shop</h4>
            <Link href="/shop" className="text-sm text-muted-foreground hover:text-charcoal">
              All products
            </Link>
            <Link href="/collections" className="text-sm text-muted-foreground hover:text-charcoal">
              Collections
            </Link>
            <Link href="/gift-guide" className="text-sm text-muted-foreground hover:text-charcoal">
              Gift Guide
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-heading text-sm text-charcoal">Brand</h4>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-charcoal">
              About Us
            </Link>
            <Link href="/gallery" className="text-sm text-muted-foreground hover:text-charcoal">
              Gallery
            </Link>
            <Link href="/reviews" className="text-sm text-muted-foreground hover:text-charcoal">
              Reviews
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-heading text-sm text-charcoal">Support</h4>
            <Link href="/faq" className="text-sm text-muted-foreground hover:text-charcoal">
              FAQ
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-charcoal">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} Hoops Chic. All rights reserved.
      </div>
    </footer>
  );
}
