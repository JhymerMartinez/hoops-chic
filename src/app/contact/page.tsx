import type { Metadata } from "next";
import { Mail, Camera, MessageCircle } from "lucide-react";
import { WhatsAppOrderButton } from "@/components/products/WhatsAppOrderButton";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Hoops Chic through WhatsApp, Instagram, or email.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-heading text-4xl text-charcoal">Get in Touch</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Questions about a product, an order, or just want to say hi? We
        respond fastest on WhatsApp.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 rounded-2xl border border-border p-6 text-center transition-colors hover:bg-secondary/60"
        >
          <MessageCircle className="size-6 text-whatsapp" />
          <span className="font-medium text-charcoal">WhatsApp</span>
          <span className="text-sm text-muted-foreground">Fastest response</span>
        </a>
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 rounded-2xl border border-border p-6 text-center transition-colors hover:bg-secondary/60"
        >
          <Camera className="size-6 text-violet" />
          <span className="font-medium text-charcoal">Instagram</span>
          <span className="text-sm text-muted-foreground">
            {siteConfig.instagramHandle}
          </span>
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="flex flex-col items-center gap-3 rounded-2xl border border-border p-6 text-center transition-colors hover:bg-secondary/60"
        >
          <Mail className="size-6 text-charcoal" />
          <span className="font-medium text-charcoal">Email</span>
          <span className="text-sm text-muted-foreground">{siteConfig.email}</span>
        </a>
      </div>

      <div className="mt-10">
        <WhatsAppOrderButton label="Start a WhatsApp chat" />
      </div>
    </div>
  );
}
