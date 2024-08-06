import { HeroSection, FeaturedProducts, Testimonials, Faq } from "../../pages";
import { useTitle } from "../../hooks/useTitle";

export const HomePage = () => {

  useTitle("Home");

  return (
    <main>
        <HeroSection />
        <FeaturedProducts />
        <Testimonials />
        <Faq />
    </main>
  )
}
