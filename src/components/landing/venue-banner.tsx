"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { MapPin, CheckCircle2, Star, Users, ShieldCheck } from 'lucide-react';

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
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden bg-primary group">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className={cn(
          "max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full border border-primary-foreground/20 text-primary-foreground font-semibold text-sm uppercase tracking-widest animate-bounce">
              <ShieldCheck className="h-4 w-4" />
              Infraestructura de Excelencia
            </div>
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary-foreground leading-[1.1]">
              Salones Propios <br /> Equipados para Ti
            </h2>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium text-balance">
                Contamos con todas las condiciones sanitarias, técnicas y de confort para ofrecerte el mejor servicio en toda nuestra gama de eventos.
              </p>
              <p className="text-lg md:text-xl text-primary-foreground/80 font-bold bg-white/10 py-3 px-6 rounded-lg backdrop-blur-sm inline-block">
                Matrimonios • Bautizos • Eventos Empresariales • Aniversarios • Galas • Y más
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
              <MapPin className="h-10 w-10 text-primary-foreground mb-3" />
              <p className="text-xs font-bold text-primary-foreground uppercase text-center leading-tight tracking-widest">Espacios <br/> Amplios</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
              <CheckCircle2 className="h-10 w-10 text-primary-foreground mb-3" />
              <p className="text-xs font-bold text-primary-foreground uppercase text-center leading-tight tracking-widest">Normas <br/> al Día</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
              <Users className="h-10 w-10 text-primary-foreground mb-3" />
              <p className="text-xs font-bold text-primary-foreground uppercase text-center leading-tight tracking-widest">Todo <br/> Confort</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
              <Star className="h-10 w-10 text-primary-foreground mb-3" />
              <p className="text-xs font-bold text-primary-foreground uppercase text-center leading-tight tracking-widest">Servicio <br/> VIP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}