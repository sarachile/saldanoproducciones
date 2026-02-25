"use client";

import * as React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Mail, Phone, MapPin, Car, Music, Trees, Users, PartyPopper } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Use some existing images for the gallery
const galleryImages = [
  "/fotoseventos/c.2.2.png",
  "/fotoseventos/c.2.8.png",
  "/fotoseventos/c.2.9.png",
  "/fotoseventos/c.2.10.png",
  "/fotoseventos/c3.png",
  "/fotoseventos/c4.png",
];

export default function SalonDeEventosPage() {
    const plugin = React.useRef(
        Autoplay({ delay: 2500, stopOnInteraction: false })
    );

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center text-center text-white">
        <Image
          src="/p1.jpeg" // Using an existing image for the background
          alt="Salón de eventos"
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 flex flex-col items-center">
          <div className="h-16 w-16 text-primary mb-4 flex items-center justify-center bg-primary/20 rounded-full">
            <PartyPopper className="h-9 w-9" />
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-wider drop-shadow-lg">
            Eventos
          </h1>
          <p className="mt-4 max-w-3xl text-xl md:text-2xl text-white/90 mb-8 text-balance">
            El lugar perfecto para matrimonios, fiestas y eventos corporativos.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
            <Link href="#contacto">
                Cotiza tu Fecha
            </Link>
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
             <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6">
                Un Espacio Versátil y Elegante
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-foreground/90 mb-6 text-balance">
                Nuestro centro de eventos combina elegancia y comodidad, ofreciendo un ambiente ideal para cualquier tipo de celebración. Con una infraestructura completa y un servicio de primera, nos encargamos de que tu evento sea inolvidable.
              </p>
              <div className="flex justify-center items-center gap-2 mb-12">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p className="text-foreground/80 font-semibold">Ubicación privilegiada a solo 15 minutos de Maipú</p>
              </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-primary/70 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-4 text-center">
                  <div className="p-5 rounded-full bg-card border border-border">
                    <Users className="h-12 w-12" />
                  </div>
                  <span className="text-foreground/80 font-semibold">Hasta 200 Personas</span>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                  <div className="p-5 rounded-full bg-card border border-border">
                     <Car className="h-12 w-12" />
                  </div>
                  <span className="text-foreground/80 font-semibold">Estacionamiento Privado</span>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                  <div className="p-5 rounded-full bg-card border border-border">
                    <Trees className="h-12 w-12" />
                  </div>
                  <span className="text-foreground/80 font-semibold">Amplias Áreas Verdes</span>
              </div>
               <div className="flex flex-col items-center gap-4 text-center">
                  <div className="p-5 rounded-full bg-card border border-border">
                    <Music className="h-12 w-12" />
                  </div>
                  <span className="text-foreground/80 font-semibold">Pista de Baile</span>
              </div>
          </div>
        </div>
      </section>
      
      {/* Galas Escolares Section */}
      <section className="relative py-20 md:py-36 w-full flex items-center justify-center text-center text-white overflow-hidden">
        <video
          src="/herogalasescolares.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 px-4 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-wider drop-shadow-lg">
            Galas Escolares
          </h2>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90 mb-8 text-balance">
            Organizamos graduaciones y galas de fin de año inolvidables para colegios, con una producción de primer nivel en un ambiente seguro y elegante.
          </p>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-foreground">
            <Link href="#contacto">
                Consultar por Galas
            </Link>
          </Button>
        </div>
        {/* Promo Bubble */}
        <div className="absolute bottom-6 right-6 z-30 bg-primary text-primary-foreground rounded-lg p-4 text-center shadow-2xl transform -rotate-6 animate-pulse-cta">
            <span className="font-headline font-bold text-lg md:text-xl leading-tight block">¡Reserva con tiempo!</span>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-6">
                        Todo lo que Necesitas en un Solo Lugar
                    </h3>
                    <p className="text-lg text-foreground/90 mb-8 text-balance">
                        Ofrecemos un servicio integral que cubre todos los aspectos de tu evento, desde el catering hasta la producción técnica.
                    </p>
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Salón principal climatizado.</li>
                        <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Servicio de banquetería de alta cocina.</li>
                        <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Iluminación y sonido profesional.</li>
                        <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Decoración y ambientación personalizada.</li>
                        <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Coordinador de eventos dedicado.</li>
                    </ul>
                </div>
                <div className="aspect-[3/4] relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <Image src="/fotoseventos/c.2.14.png" alt="Interior de evento" fill className="object-cover" />
                </div>
            </div>
        </div>
      </section>

      {/* Gallery Carousel Section */}
       <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                Explora Nuestro Espacio
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/90">
                Imágenes de eventos realizados en nuestro salón.
            </p>
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
                      alt={`Galería de eventos ${index + 1}`}
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

      {/* CTA Section */}
      <section id="contacto" className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
                  ¿Quieres celebrar con nosotros?
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-foreground/90 mb-8">
                  Contáctanos para consultar disponibilidad y recibir una cotización. Estamos listos para hacer de tu evento una ocasión especial.
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
