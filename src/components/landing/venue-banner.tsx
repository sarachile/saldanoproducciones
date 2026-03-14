"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { MapPin, CheckCircle2, Star, Users, ShieldCheck, Martini, UtensilsCrossed, Headphones, PartyPopper, Sparkles } from 'lucide-react';

export default function VenueBanner() {
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
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden bg-primary group">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className={cn(
          "max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full border border-primary-foreground/20 text-primary-foreground font-semibold text-sm uppercase tracking-widest">
              <ShieldCheck className="h-4 w-4" />
              Infraestructura de Excelencia
            </div>
            
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary-foreground leading-[1.1]">
              Hacemos realidad <br /> <span className="text-white">el evento de tus sueños</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium text-balance max-w-2xl">
              Salones propios equipados con áreas verdes, comedor, zona de cocktail y todas las condiciones sanitarias para un servicio VIP.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
               <div className="flex items-center gap-2 text-primary-foreground/80 font-bold bg-white/10 py-2 px-4 rounded-lg backdrop-blur-sm">
                  <MapPin className="h-5 w-5" />
                  <span>A solo 20 min. de Plaza Maipú (Padre Hurtado)</span>
               </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              <div className="flex flex-col items-center lg:items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-white" />
                <span className="text-xs font-bold text-primary-foreground uppercase tracking-widest">Normas al Día</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <Users className="h-6 w-6 text-white" />
                <span className="text-xs font-bold text-primary-foreground uppercase tracking-widest">Todo Confort</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <Star className="h-6 w-6 text-white" />
                <span className="text-xs font-bold text-primary-foreground uppercase tracking-widest">Servicio VIP</span>
              </div>
               <div className="flex flex-col items-center lg:items-start gap-2">
                <Sparkles className="h-6 w-6 text-white" />
                <span className="text-xs font-bold text-primary-foreground uppercase tracking-widest">Exclusividad</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[450px] relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden text-primary transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="text-center space-y-4">
                  <span className="text-primary/60 font-headline font-bold text-sm tracking-[0.2em] uppercase block">Promoción Especial</span>
                  <div className="space-y-1">
                    <span className="text-5xl md:text-6xl font-headline font-bold block">$ 49.990.-</span>
                    <span className="text-primary/70 font-bold text-lg block">por persona</span>
                    <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full inline-block">desde 80 invitados</span>
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
                    <button 
                      onClick={() => window.location.href = '#contacto'}
                      className="w-full bg-primary text-primary-foreground font-headline font-bold py-4 rounded-xl shadow-lg hover:bg-primary/90 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      ¡ASEGURA TU FECHA!
                    </button>
                  </div>
               </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-destructive text-white rounded-full h-20 w-20 flex items-center justify-center text-center p-2 shadow-xl animate-bounce">
              <span className="text-[10px] font-bold leading-tight uppercase">Cupos<br/>Limitados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
