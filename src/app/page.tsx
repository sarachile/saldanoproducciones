import HeroSection from '@/components/landing/hero-section';
import FeaturedCarousel from '@/components/landing/featured-carousel';
import AboutUs from '@/components/landing/about-us';
import Services from '@/components/landing/services';
import Experience from '@/components/landing/experience';
import Partners from '@/components/landing/partners';
import Team from '@/components/landing/team';
import Gallery from '@/components/landing/gallery';
import ContactSection from '@/components/landing/contact-section';
import CommercialPhrase from '@/components/landing/commercial-phrase';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CommercialPhrase />
      <FeaturedCarousel />
      <AboutUs />
      <Services />
      <Experience />
      <Partners />
      <Team />
      <Gallery />
      <ContactSection />
    </>
  );
}
