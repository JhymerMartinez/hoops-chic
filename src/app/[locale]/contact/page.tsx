import type { Metadata } from "next";
import { Mail, Camera, MessageCircle } from "lucide-react";
import { WhatsAppOrderButton } from "@/components/products/WhatsAppOrderButton";
import { getDictionary } from "@/i18n/dictionaries";
import { getPageMetadata } from "@/i18n/metadata";
import { getRequestLocale, type LocaleParams } from "@/i18n/server";
import { siteConfig } from "@/lib/site-config";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await getRequestLocale(params);
  return getPageMetadata(locale, getDictionary(locale).meta.pages.contact, "/contact");
}

export default async function ContactPage({ params }: { params: LocaleParams }) {
  const locale = await getRequestLocale(params);
  const copy = getDictionary(locale).contact;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-heading text-4xl text-charcoal">{copy.title}</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">{copy.description}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 rounded-2xl border border-border p-6 text-center transition-colors hover:bg-secondary/60">
          <MessageCircle className="size-6 text-whatsapp" />
          <span className="font-medium text-charcoal">WhatsApp</span>
          <span className="text-sm text-muted-foreground">{copy.fastestResponse}</span>
        </a>
        <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 rounded-2xl border border-border p-6 text-center transition-colors hover:bg-secondary/60">
          <Camera className="size-6 text-violet" />
          <span className="font-medium text-charcoal">Instagram</span>
          <span className="text-sm text-muted-foreground">{siteConfig.instagramHandle}</span>
        </a>
        <a href={`mailto:${siteConfig.email}`} className="flex flex-col items-center gap-3 rounded-2xl border border-border p-6 text-center transition-colors hover:bg-secondary/60">
          <Mail className="size-6 text-charcoal" />
          <span className="font-medium text-charcoal">Email</span>
          <span className="text-sm text-muted-foreground">{siteConfig.email}</span>
        </a>
      </div>

      <div className="mt-10">
        <WhatsAppOrderButton locale={locale} label={copy.chatCta} />
      </div>
    </div>
  );
}

