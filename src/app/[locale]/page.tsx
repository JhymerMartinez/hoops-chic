import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { BrandStory } from "@/components/sections/BrandStory";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramCTA } from "@/components/sections/InstagramCTA";
import { getDictionary } from "@/i18n/dictionaries";
import { getRequestLocale, type LocaleParams } from "@/i18n/server";

export default async function Home({ params }: { params: LocaleParams }) {
  const locale = await getRequestLocale(params);
  const dictionary = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dictionary={dictionary} />
      <FeaturedProducts locale={locale} dictionary={dictionary} />
      <BrandStory locale={locale} dictionary={dictionary} />
      <Testimonials locale={locale} dictionary={dictionary} />
      <InstagramCTA dictionary={dictionary} />
    </>
  );
}

