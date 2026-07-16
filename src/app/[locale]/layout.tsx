import type { Metadata } from "next";
import { Cormorant_Garamond, Parisienne, Poppins } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import { getLanguageAlternates, getOpenGraphLocale } from "@/i18n/metadata";
import { locales } from "@/i18n/config";
import { getRequestLocale, type LocaleParams } from "@/i18n/server";
import { siteConfig } from "@/lib/site-config";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const parisienne = Parisienne({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const locale = await getRequestLocale(params);
  const { meta } = getDictionary(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: meta.siteTitle,
      template: `%s | ${siteConfig.name}`,
    },
    description: meta.siteDescription,
    keywords: [...meta.keywords],
    alternates: getLanguageAlternates(locale),
    openGraph: {
      title: meta.siteTitle,
      description: meta.openGraphDescription,
      url: `/${locale}`,
      siteName: siteConfig.name,
      locale: getOpenGraphLocale(locale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.siteTitle,
      description: meta.openGraphDescription,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: LocaleParams;
}>) {
  const locale = await getRequestLocale(params);
  const dictionary = getDictionary(locale);

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${cormorantGaramond.variable} ${parisienne.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header locale={locale} dictionary={dictionary} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dictionary={dictionary} />
      </body>
    </html>
  );
}
