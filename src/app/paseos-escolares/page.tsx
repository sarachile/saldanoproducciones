"use client";

import * as React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Mail, Phone, Trees, Sun, Utensils, MapPin } from 'lucide-react';
import { cn } from "@/lib/utils";

export default function PaseosEscolaresPage() {
    const servicesSectionRef = React.useRef<HTMLDivElement>(null);
    const [isServicesVisible, setIsServicesVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsServicesVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        const currentRef = servicesSectionRef.current;
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
    <div className="bg-background text-foreground">
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
        <Image
          src="/paseocurso1.png"
          alt="Paseos de curso"
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 flex flex-col items-center">
          <div className="relative h-[500px] w-[500px] mb-8">
             <Image
                src="/paseos.png"
                alt="Logo Paseos Escolares"
                fill
                className="object-contain"
                priority
             />
          </div>
          <h1 className="text-4xl md:text-7xl font-headline font-bold text-white tracking-wider drop-shadow-lg uppercase">
            Paseos de Curso
          </h1>
          <p className="mt-6 max-w-3xl text-xl md:text-3xl text-white/90 mb-10 text-balance drop-shadow-lg">
            Jornadas de pura entretención en un ambiente seguro y natural.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-8 text-xl font-bold rounded-full">
            <Link href="#contacto">
                ¡COTIZA TU PASEO AQUÍ!
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
             <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-8">
                Un Lugar Único para Aprender y Jugar
              </h2>
              <p className="max-w-4xl mx-auto text-xl text-foreground/90 mb-8 text-balance">
                Contamos con una increíble parcela para eventos, totalmente equipada con todo lo necesario para que tu paseo de curso sea un éxito. Disfruta de nuestras amplias áreas verdes, piscina y salones en un ambiente seguro y privado.
              </p>
              <div className="flex justify-center items-center gap-2 mb-16">
                  <MapPin className="h-6 w-6 text-primary" />
                  <p className="text-xl text-foreground/80 font-bold">A solo 20 minutos de Maipú (Padre Hurtado)</p>
              </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-primary/70 max-w-5xl mx-auto">
              <div className="flex flex-col items-center gap-6 text-center">
                  <div className="p-6 rounded-full bg-card border border-border shadow-xl">
                    <Trees className="h-14 w-14" />
                  </div>
                  <span className="text-xl text-foreground/80 font-bold">Áreas Verdes</span>
              </div>
              <div className="flex flex-col items-center gap-6 text-center">
                  <div className="p-6 rounded-full bg-card border border-border shadow-xl">
                     <div className="h-14 w-14 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13.3c0-1.2.9-2.2 2.1-2.2h9.8c1.2 0 2.1.9 2.1 2.2v4.2c0 1.2-1 2.2-2.2 2.2H7.2C6 19.7 5 18.7 5 17.5V13.3z"/><path d="M16 11.1V9c0-2.2-1.8-4-4-4s-4 1.8-4 4v2.1"/><path d="m10 16-1.5-1.5"/><path d="m14 16 1.5-1.5"/><path d="M7.5 11.1v-1"/><path d="M16.5 11.1v-1"/></svg>
                     </div>
                  </div>
                  <span className="text-xl text-foreground/80 font-bold">Piscina</span>
              </div>
              <div className="flex flex-col items-center gap-6 text-center">
                  <div className="p-6 rounded-full bg-card border border-border shadow-xl">
                    <Utensils className="h-14 w-14" />
                  </div>
                  <span className="text-xl text-foreground/80 font-bold">Servicio Catering</span>
              </div>
               <div className="flex flex-col items-center gap-6 text-center">
                  <div className="p-6 rounded-full bg-card border border-border shadow-xl">
                    <Sun className="h-14 w-14" />
                  </div>
                  <span className="text-xl text-foreground/80 font-bold">Entretención</span>
              </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
              <div className={cn(
                "transition-all duration-1000 ease-out",
                isServicesVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              )}>
                <div className="flex flex-col items-center md:items-start gap-8 mb-10">
                  <div className="relative h-[500px] w-[500px] flex-shrink-0">
                    <Image
                      src="/paseos.png"
                      alt="Logo Paseos Escolares"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-headline font-bold text-primary text-center md:text-left">
                      Todo Incluido para un Día Genial
                  </h3>
                </div>
                <p className="text-xl text-foreground/90 mb-10 text-balance">
                  Una jornada llena de risas, juegos y aprendizaje en un entorno seguro, planificada para que todos solo se preocupen de disfrutar.
                </p>
                <ul className="space-y-6 text-xl grid sm:grid-cols-2 gap-x-10 gap-y-6">
                  <li className="flex items-center gap-4"><Check className="h-8 w-8 text-primary flex-shrink-0" /> Monitores a cargo.</li>
                  <li className="flex items-center gap-4"><Check className="h-8 w-8 text-primary flex-shrink-0" /> Actividades recreativas.</li>
                  <li className="flex items-center gap-4"><Check className="h-8 w-8 text-primary flex-shrink-0" /> Alimentación completa.</li>
                  <li className="flex items-center gap-4"><Check className="h-8 w-8 text-primary flex-shrink-0" /> Acceso a piscina.</li>
                  <li className="flex items-center gap-4"><Check className="h-8 w-8 text-primary flex-shrink-0" /> Música ambiente.</li>
                  <li className="flex items-center gap-4"><Check className="h-8 w-8 text-primary flex-shrink-0" /> Seguridad integral.</li>
                </ul>
              </div>
              <div className={cn(
                "relative aspect-square w-full overflow-hidden rounded-2xl shadow-3xl border-8 border-white/5 transition-all duration-1000 ease-out delay-200",
                isServicesVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              )}>
                <Image
                  src="/paseojugandoalapelota.png"
                  alt="Niños jugando en un paseo de curso"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
        </div>
      </section>

      <section id="contacto" className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6">
                  ¿Listos para un paseo de curso inolvidable?
              </h2>
              <p className="max-w-4xl mx-auto text-xl text-foreground/90 mb-12">
                  Contáctanos para recibir una cotización personalizada. Organizaremos un paseo que tu curso recordará por siempre.
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
