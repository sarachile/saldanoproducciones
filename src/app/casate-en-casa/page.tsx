"use client";

import * as React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Instagram, Phone, Mail, Sofa, LampDesk, Paintbrush, Music } from 'lucide-react';
import { CasateEnCasaLogo } from '@/components/icons/casate-en-casa-logo';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const TikTokIconSVG = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5"></path>
    </svg>
);

const dancerImages = [
    "/bailarines1.jpeg",
    "/bailarines2.jpeg",
    "/bailarines3.jpeg",
];

const descriptionImages = [
    "/casate1.jpeg",
    "/casate2.jpeg",
    "/casate3.jpeg",
    "/casate4.jpeg",
    "/casate5.jpeg",
];

export default function CasateEnCasaPage() {
    const plugin = React.useRef(
        Autoplay({ delay: 2500, stopOnInteraction: true })
    );

    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % descriptionImages.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(timer);
    }, []);

    // Intersection Observer for animations
    const descSectionRef = React.useRef<HTMLDivElement>(null);
    const staffSectionRef = React.useRef<HTMLDivElement>(null);
    const [isDescVisible, setDescVisible] = React.useState(false);
    const [isStaffVisible, setStaffVisible] = React.useState(false);

    React.useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
        };

        const createObserver = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
            return new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setter(true);
                    // No need to disconnect, TS complains about observer not being defined.
                }
            }, observerOptions);
        };

        const descObserver = createObserver(setDescVisible);
        const staffObserver = createObserver(setStaffVisible);
        
        const currentDescRef = descSectionRef.current;
        if (currentDescRef) descObserver.observe(currentDescRef);
        
        const currentStaffRef = staffSectionRef.current;
        if (currentStaffRef) staffObserver.observe(currentStaffRef);

        return () => {
            if (currentDescRef) descObserver.disconnect();
            if (currentStaffRef) staffObserver.disconnect();
        };
    }, []);


  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
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
          <div className="mb-6 drop-shadow-lg flex flex-col items-center gap-4">
            <CasateEnCasaLogo className="h-28 w-28 text-white" />
            <h1 className="text-4xl font-headline font-bold text-white tracking-wider">Cásate en Casa</h1>
          </div>
          <h2 className="text-2xl md:text-4xl font-headline font-bold text-white mb-4 text-balance">
            Tu hogar, el mejor centro de eventos.
          </h2>
          <p className="max-w-3xl text-xl text-white/90 mb-8 text-balance">
            Transformamos tu espacio en el escenario perfecto para el día más importante de tu vida.
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
      </section>

      {/* Description Section */}
      <section ref={descSectionRef} className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={cn(
                "transition-all duration-1000 ease-out",
                isDescVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6">
                La Magia de Celebrar en Casa
              </h2>
              <p className="text-lg text-foreground/90 mb-4 text-balance">
                Cásate en Casa es nuestra marca especializada en convertir residencias privadas en espectaculares centros de eventos. Olvídate del estrés de buscar un lugar, nosotros llevamos toda la producción de alta gama a la comodidad y calidez de tu hogar.
              </p>
              <p className="text-foreground/80 mb-8">
                Desde la planificación inicial hasta el último detalle del evento, nuestro equipo se encarga de todo. Creamos una atmósfera única y personalizada que refleja tu estilo, asegurando una experiencia íntima e inolvidable para ti y tus invitados.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Diseño y decoración integral del espacio.</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Servicio de catering gourmet adaptado a tu hogar.</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Logística completa: carpas, iluminación y sonido.</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Coordinación profesional durante todo el evento.</li>
              </ul>
            </div>
            <div className={cn(
                "relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 transition-all duration-1000 ease-out delay-200",
                isDescVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}>
                 {descriptionImages.map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt={`Decoración de boda en casa ${index + 1}`}
                        fill
                        className={cn(
                            "object-cover transition-all duration-[2000ms] ease-in-out absolute inset-0",
                            index === currentImageIndex 
                                ? 'opacity-100 scale-100' 
                                : 'opacity-0 scale-105'
                        )}
                    />
                ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Staff y Entretenimiento Section */}
      <section ref={staffSectionRef} className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={cn(
                "order-2 md:order-2 transition-all duration-1000 ease-out delay-200",
                isStaffVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6">
                Staff y Entretenimiento de Primer Nivel
              </h2>
              <p className="text-lg text-foreground/90 mb-8 text-balance">
                Para que tu única preocupación sea disfrutar, ponemos a tu disposición un equipo de profesionales y shows que llevarán tu evento al siguiente nivel.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Garzones y servicio de coctelería profesional.</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Bartenders expertos en mixología.</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Shows de bailarines profesionales para animar la celebración.</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Asistentes y personal de apoyo logístico.</li>
              </ul>
            </div>
            <div className={cn(
                "order-1 md:order-1 transition-all duration-1000 ease-out",
                isStaffVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}>
              <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-lg mx-auto"
                opts={{ loop: true }}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {dancerImages.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-2xl border-4 border-white/10">
                        <Image
                          src={src}
                          alt={`Show de bailarines ${index + 1}`}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex left-[-20px]" />
                <CarouselNext className="hidden sm:flex right-[-20px]" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                Transformaciones Memorables
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/90 mb-8">
                Mira cómo convertimos espacios cotidianos en lugares mágicos. ¡Te invitamos a seguir nuestras últimas producciones en Instagram!
            </p>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="https://www.instagram.com/casateencasa.cl" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" /> Ver en Instagram
                </a>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-primary/70 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-4 text-center">
                  <div className="p-5 rounded-full bg-card border border-border">
                    <Sofa className="h-12 w-12" />
                  </div>
                  <span className="text-foreground/80 font-semibold">Mobiliario</span>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                  <div className="p-5 rounded-full bg-card border border-border">
                    <LampDesk className="h-12 w-12" />
                  </div>
                  <span className="text-foreground/80 font-semibold">Iluminación</span>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                  <div className="p-5 rounded-full bg-card border border-border">
                    <Paintbrush className="h-12 w-12" />
                  </div>
                  <span className="text-foreground/80 font-semibold">Decoración</span>
              </div>
               <div className="flex flex-col items-center gap-4 text-center">
                  <div className="p-5 rounded-full bg-card border border-border">
                    <Music className="h-12 w-12" />
                  </div>
                  <span className="text-foreground/80 font-semibold">Ambiente</span>
              </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
                  ¿Listo para tu evento soñado en casa?
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-foreground/90 mb-8">
                  Contáctanos y empecemos a planificar juntos. Nuestro equipo está listo para asesorarte y convertir tu idea en una celebración espectacular.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base">
                        <a href="mailto:saldanoproduccioneseirl@gmail.com">
                            <Mail className="mr-2 h-5 w-5" /> Enviar un Correo
                        </a>
                    </Button>
                     <Button asChild size="lg" variant="outline" className="border-foreground/20 hover:border-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base">
                        <a href="tel:+56993382819">
                           <Phone className="mr-2 h-5 w-5" /> Llamar Ahora
                        </a>
                    </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
