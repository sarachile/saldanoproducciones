"use client";

import * as React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Mail, Phone, Trees, Sun, Utensils, MapPin } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const galleryImages = Array.from({ length: 22 }, (_, i) => `/empresas/pe${i + 1}.jpeg`);

export default function PaseosEmpresaPage() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    );

  return (
    <div className="bg-background text-foreground">
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
        <Image
          src="/empresas/pe20.jpeg"
          alt="Paseos de empresa"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 flex flex-col items-center">
          <div className="relative h-[600px] w-[600px] mb-8">
             <Image
                src="/paseosempresa.png"
                alt="Logo Paseos Empresa"
                fill
                className="object-contain"
                priority
             />
          </div>
          <h1 className="text-4xl md:text-7xl font-headline font-bold text-white tracking-wider drop-shadow-lg uppercase">
            Paseos de Empresa
          </h1>
          <p className="mt-6 max-w-3xl text-xl md:text-3xl text-white/90 mb-10 text-balance drop-shadow-lg">
            Fortalece a tu equipo en un entorno de relajo y exclusividad.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-8 text-xl font-bold rounded-full">
            <Link href="#contacto">
                Cotiza tu Paseo de Empresa
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
             <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-8">
                El Lugar Ideal para la Camaradería
              </h2>
              <p className="max-w-4xl mx-auto text-xl text-foreground/90 mb-10 text-balance">
                Nuestra parcela está diseñada para ofrecer privacidad y confort. Disfruta de amplias áreas verdes, piscina y gastronomía de primer nivel a solo minutos de la ciudad.
              </p>
              <div className="flex justify-center items-center gap-3 mb-16">
                  <MapPin className="h-6 w-6 text-primary" />
                  <p className="text-xl text-foreground/80 font-bold">Ubicación Estratégica en Padre Hurtado</p>
              </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-primary/70 max-w-5xl mx-auto">
              <div className="flex flex-col items-center gap-6 text-center">
                  <div className="p-6 rounded-full bg-card border border-border shadow-xl">
                    <Trees className="h-14 w-14" />
                  </div>
                  <span className="text-xl text-foreground/80 font-bold">Naturaleza</span>
              </div>
              <div className="flex flex-col items-center gap-6 text-center">
                  <div className="p-6 rounded-full bg-card border border-border shadow-xl">
                     <div className="h-14 w-14 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13.3c0-1.2.9-2.2 2.1-2.2h9.8c1.2 0 2.1.9 2.1 2.2v4.2c0 1.2-1 2.2-2.2 2.2H7.2C6 19.7 5 18.7 5 17.5V13.3z"/><path d="M16 11.1V9c0-2.2-1.8-4-4-4s-4 1.8-4 4v2.1"/><path d="m10 16-1.5-1.5"/><path d="m14 16 1.5-1.5"/><path d="M7.5 11.1v-1"/><path d="M16.5 11.1v-1"/></svg>
                     </div>
                  </div>
                  <span className="text-xl text-foreground/80 font-bold">Piscina VIP</span>
              </div>
              <div className="flex flex-col items-center gap-6 text-center">
                  <div className="p-6 rounded-full bg-card border border-border shadow-xl">
                    <Utensils className="h-14 w-14" />
                  </div>
                  <span className="text-xl text-foreground/80 font-bold">Asados Premium</span>
              </div>
               <div className="flex flex-col items-center gap-6 text-center">
                  <div className="p-6 rounded-full bg-card border border-border shadow-xl">
                    <Sun className="h-14 w-14" />
                  </div>
                  <span className="text-xl text-foreground/80 font-bold">Team Building</span>
              </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
                 <div className="flex flex-col items-center gap-10 mb-10">
                    <div className="relative h-[600px] w-[600px] flex-shrink-0">
                      <Image
                        src="/paseosempresa.png"
                        alt="Logo Paseos Empresa"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-headline font-bold text-primary text-center">
                        Servicios a la Medida de tu Empresa
                    </h3>
                </div>
              <p className="text-xl text-foreground/90 mb-12 text-center text-balance">
                Mejora el clima laboral con un servicio premium de principio a fin, diseñado para grandes equipos.
              </p>
              <ul className="space-y-6 text-xl grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
                <li className="flex items-center gap-4"><Check className="h-8 w-8 text-primary flex-shrink-0" /> Actividades dirigidas.</li>
                <li className="flex items-center gap-4"><Check className="h-8 w-8 text-primary flex-shrink-0" /> Asados y bar abierto.</li>
                <li className="flex items-center gap-4"><Check className="h-8 w-8 text-primary flex-shrink-0" /> DJ y animación en vivo.</li>
                <li className="flex items-center gap-4"><Check className="h-8 w-8 text-primary flex-shrink-0" /> Infraestructura deportiva.</li>
                <li className="flex items-center gap-4"><Check className="h-8 w-8 text-primary flex-shrink-0" /> Zonas de relajo lounge.</li>
                <li className="flex items-center gap-4"><Check className="h-8 w-8 text-primary flex-shrink-0" /> Logística integral.</li>
              </ul>
            </div>
        </div>
      </section>

       <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                Nuestros Paseos en Imágenes
            </h2>
          </div>
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-6xl mx-auto"
            opts={{ loop: true, align: "start" }}
          >
            <CarouselContent>
              {galleryImages.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl border-4 border-white/10 group">
                    <Image
                      src={src}
                      alt={`Galería de paseo de empresa ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex left-[-40px]" />
            <CarouselNext className="hidden sm:flex right-[-40px]" />
          </Carousel>
        </div>
      </section>

      <section id="contacto" className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6">
                  ¿Listos para un día inolvidable?
              </h2>
              <p className="max-w-4xl mx-auto text-xl text-foreground/90 mb-12">
                  Contáctanos para recibir una cotización personalizada. Organizaremos un día que tu equipo recordará por siempre.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-8 text-xl font-bold rounded-full">
                        <a href="mailto:saldanoproduccioneseirl@gmail.com">
                            <Mail className="mr-3 h-6 w-6" /> Enviar un Correo
                        </a>
                    </Button>
                     <Button asChild size="lg" variant="outline" className="border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground px-12 py-8 text-xl font-bold rounded-full">
                        <a href="tel:+56993382819">
                           <Phone className="mr-3 h-6 w-6" /> Llamar Ahora
                        </a>
                    </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
