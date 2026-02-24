"use client";

import * as React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Mail, Phone, School, Trees, Sun, Utensils, MapPin } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const galleryImages = Array.from({ length: 11 }, (_, i) => `/p${i + 1}.jpeg`);

export default function PaseosEscolaresPage() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    );

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center text-center text-white">
        <Image
          src="/p1.jpeg"
          alt="Paseos escolares"
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 flex flex-col items-center">
          <School className="h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-wider drop-shadow-lg">
            Paseos Escolares
          </h1>
          <p className="mt-4 max-w-3xl text-xl md:text-2xl text-white/90 mb-8 text-balance">
            Jornadas de entretención, aprendizaje y naturaleza para cursos y colegios.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
            <Link href="#contacto">
                Cotiza tu Paseo Escolar
            </Link>
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
             <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6">
                Un Lugar Único para Aprender y Jugar
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-foreground/90 mb-6 text-balance">
                Contamos con un increíble centro de eventos equipado con todo lo necesario para que tu paseo de curso sea un éxito. Disfruta de nuestras amplias áreas verdes, piscina, y salones en un ambiente seguro y privado.
              </p>
              <div className="flex justify-center items-center gap-2 mb-12">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p className="text-foreground/80 font-semibold">Ubicado en Avda. Sur 250, Maipú, Santiago</p>
              </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-primary/70 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-4 text-center">
                  <div className="p-5 rounded-full bg-card border border-border">
                    <Trees className="h-12 w-12" />
                  </div>
                  <span className="text-foreground/80 font-semibold">Áreas Verdes</span>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                  <div className="p-5 rounded-full bg-card border border-border">
                     <div className="h-12 w-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13.3c0-1.2.9-2.2 2.1-2.2h9.8c1.2 0 2.1.9 2.1 2.2v4.2c0 1.2-1 2.2-2.2 2.2H7.2C6 19.7 5 18.7 5 17.5V13.3z"/><path d="M16 11.1V9c0-2.2-1.8-4-4-4s-4 1.8-4 4v2.1"/><path d="m10 16-1.5-1.5"/><path d="m14 16 1.5-1.5"/><path d="M7.5 11.1v-1"/><path d="M16.5 11.1v-1"/></svg>
                     </div>
                  </div>
                  <span className="text-foreground/80 font-semibold">Piscina</span>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                  <div className="p-5 rounded-full bg-card border border-border">
                    <Utensils className="h-12 w-12" />
                  </div>
                  <span className="text-foreground/80 font-semibold">Servicio Catering</span>
              </div>
               <div className="flex flex-col items-center gap-4 text-center">
                  <div className="p-5 rounded-full bg-card border border-border">
                    <Sun className="h-12 w-12" />
                  </div>
                  <span className="text-foreground/80 font-semibold">Entretención</span>
              </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <School className="h-10 w-10 text-primary" />
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary">
                    Todo Incluido para un Día Genial
                </h3>
              </div>
              <p className="text-lg text-foreground/90 mb-8 text-balance">
                Una jornada llena de risas, juegos y aprendizaje en un entorno seguro y estimulante, planificada para que los estudiantes y profesores solo se preocupen de disfrutar.
              </p>
              <ul className="space-y-4 text-lg grid md:grid-cols-2 gap-x-8 gap-y-4">
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Monitores a cargo del grupo.</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Actividades recreativas y deportivas.</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Alimentación completa y saludable.</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Acceso a piscina y áreas de juego.</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Amplificación y música ambiente.</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Seguridad y personal de primeros auxilios.</li>
              </ul>
            </div>
        </div>
      </section>

      {/* Gallery Carousel Section */}
       <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                Nuestros Paseos en Imágenes
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/90">
                Revive los mejores momentos de nuestros eventos en el centro de eventos.
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
                      alt={`Galería de paseo escolar ${index + 1}`}
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
                  ¿Listos para un paseo escolar inolvidable?
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-foreground/90 mb-8">
                  Contáctanos para recibir una cotización personalizada. Organizaremos un paseo que tu curso recordará por siempre.
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
