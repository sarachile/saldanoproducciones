"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { GraduationCap, Calendar, Users, MapPin, CheckCircle2, Sparkles, Martini, UtensilsCrossed, Headphones, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function GalaBanner() {
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
      { threshold: 0.2 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-[#121212] group">
      {/* Subtle Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#FFB703_0%,transparent_50%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className={cn(
          "max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 text-primary font-semibold text-sm uppercase tracking-widest">
              <GraduationCap className="h-4 w-4" />
              Temporada de Galas
            </div>
            
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-white leading-[1.1]">
              ¿Gala de curso? <br /> 
              <span className="text-primary italic">8vo y 4to Medio</span>
            </h2>
            
            <p className="text-xl text-white/80 font-medium text-balance max-w-2xl">
              Áreas verdes, Comedor climatizado, Salón de eventos y Zona de Cocktail. <br className="hidden md:block"/>
              Todo lo necesario para una noche mágica y segura.
            </p>

            <div className="space-y-4">
               <div className="flex items-center justify-center lg:justify-start gap-3 text-white/90 font-bold">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Últimas fechas disponibles: Domingo a Jueves</span>
               </div>
               <div className="flex items-center justify-center lg:justify-start gap-3 text-white/90">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Padre Hurtado - A solo 20 Minutos de Plaza Maipú</span>
               </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="flex flex-col items-center lg:items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span className="text-xs font-bold text-white/70 uppercase tracking-widest">Resolución Sanitaria</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <Users className="h-6 w-6 text-primary" />
                <span className="text-xs font-bold text-white/70 uppercase tracking-widest">Seguridad Privada</span>
              </div>
               <div className="flex flex-col items-center lg:items-start gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xs font-bold text-white/70 uppercase tracking-widest">Producción VIP</span>
              </div>
            </div>
          </div>

          {/* Promotion Card Section */}
          <div className="w-full lg:w-[480px] relative">
            <div className="bg-white rounded-3xl p-8 shadow-[0_0_50px_rgba(255,183,3,0.3)] relative overflow-hidden text-primary border-4 border-primary/20 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
               
               <div className="text-center space-y-4">
                  <span className="text-primary/60 font-headline font-bold text-sm tracking-[0.2em] uppercase block">Oferta Exclusiva Galas</span>
                  <div className="space-y-1">
                    <span className="text-5xl md:text-7xl font-headline font-bold block">$ 49.990.-</span>
                    <span className="text-primary/70 font-bold text-lg block">por persona</span>
                    <span className="text-sm font-semibold bg-primary/10 text-primary px-4 py-1 rounded-full inline-block">desde 80 invitados</span>
                  </div>

                  <div className="py-6 border-y border-primary/10 space-y-4">
                    <h3 className="text-2xl font-headline font-bold text-primary tracking-tight">ALL INCLUSIVE</h3>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="flex flex-col items-center gap-2">
                          <Martini className="h-8 w-8 text-primary/80" />
                          <span className="text-[10px] font-bold uppercase tracking-tighter">Open Bar</span>
                       </div>
                       <div className="flex flex-col items-center gap-2">
                          <UtensilsCrossed className="h-8 w-8 text-primary/80" />
                          <span className="text-[10px] font-bold uppercase tracking-tighter">Cena Completa</span>
                       </div>
                       <div className="flex flex-col items-center gap-2">
                          <Headphones className="h-8 w-8 text-primary/80" />
                          <span className="text-[10px] font-bold uppercase tracking-tighter">Animación + DJ</span>
                       </div>
                       <div className="flex flex-col items-center gap-2">
                          <PartyPopper className="h-8 w-8 text-primary/80" />
                          <span className="text-[10px] font-bold uppercase tracking-tighter">Fiesta Total</span>
                       </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button asChild size="lg" className="w-full bg-primary text-primary-foreground font-headline font-bold py-8 text-xl rounded-xl shadow-lg hover:bg-primary/90 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                      <Link href="#contacto">
                        ¡COTIZA TU GALA AQUÍ!
                      </Link>
                    </Button>
                    <p className="mt-4 text-[10px] text-primary/60 font-medium">
                        *Sujeto a disponibilidad de fechas. Válido para reservas nuevas.
                    </p>
                  </div>
               </div>
            </div>
            
            {/* Promo Bubble Overlap */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full h-24 w-24 flex items-center justify-center text-center p-2 shadow-2xl animate-pulse-cta border-4 border-[#121212]">
              <span className="text-xs font-bold leading-tight uppercase">Últimas<br/>Fechas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
