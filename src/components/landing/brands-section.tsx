"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

const TikTokIconSVG = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5"></path>
    </svg>
);

export default function BrandsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
            }
        },
        {
            threshold: 0.1,
        }
        );

        const currentRef = ref.current;
        if (currentRef) {
        observer.observe(currentRef);
        }

        return () => {
        if (currentRef) {
            observer.unobserve(currentRef);
        }
        };
    }, []);


  return (
    <section ref={ref} id="nuestras-marcas" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Nuestras Marcas</h2>
        </div>
        <div className="space-y-24">
          {/* Cásate en Casa Section */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center text-center text-white rounded-lg overflow-hidden shadow-2xl">
              <video
                src="/casateencasa.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 z-10" />
              <div className="relative z-20 px-4 flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4 text-balance">
                  Cásate en Casa
                </h2>
                <p className="max-w-2xl text-lg text-white/90 mb-8 text-balance">
                  Tu hogar convertido en el mejor centro de eventos.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href="https://www.instagram.com/casateencasa.cl" target="_blank" rel="noopener noreferrer">
                      <Instagram className="mr-2 h-5 w-5" /> Instagram
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href="https://www.tiktok.com/@casateencasacl" target="_blank" rel="noopener noreferrer">
                      <TikTokIconSVG />
                      <span className="ml-2">TikTok</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Carrito Hamburguesas Section */}
          <div className={`transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
                  Carrito Hamburguesas
                </h3>
                <p className="text-lg text-foreground/90 mb-6 text-balance">
                  Ideal para eventos al aire libre, celebraciones familiares y empresas.
                </p>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Ver más
                </Button>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/carrito.png"
                  alt="Carrito de Hamburguesas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
