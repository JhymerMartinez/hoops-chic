import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { BrandStory } from "@/components/sections/BrandStory";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramCTA } from "@/components/sections/InstagramCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <BrandStory />
      <Testimonials />
      <InstagramCTA />
    </>
  );
}

