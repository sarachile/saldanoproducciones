import HeroSection from '@/components/landing/hero-section';
import AboutUs from '@/components/landing/about-us';
import Services from '@/components/landing/services';
import Gallery from '@/components/landing/gallery';
import ContactSection from '@/components/landing/contact-section';
import CommercialPhrase from '@/components/landing/commercial-phrase';
import CasateEnCasaSection from '@/components/landing/casate-en-casa-section';
import ClientsMarquee from '@/components/landing/clients-marquee';
import BurgerCartSection from '@/components/landing/burger-cart-section';
import PaseosSection from '@/components/landing/paseos-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CommercialPhrase />
      <AboutUs />
      <Services />
      <CasateEnCasaSection />
      <BurgerCartSection />
      <PaseosSection />
      <ClientsMarquee />
      <Gallery />
      <ContactSection />
    </>
  );
}
