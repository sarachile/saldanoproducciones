
"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export default function ProductsHeader() {
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
    <section 
      ref={ref}
      className="pt-20 md:pt-28 pb-8 bg-background"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Nuestras Marcas Especializadas
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/90 text-balance">
            Con el objetivo de cubrir cada detalle y ofrecer una solución integral para cada tipo de evento, en Saldaño Producciones hemos desarrollado marcas especializadas, cada una con un enfoque único para garantizar una experiencia excepcional.
          </p>
        </div>
      </div>
    </section>
  );
}
