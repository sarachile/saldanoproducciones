"use client";

import { useEffect, useRef, useState } from 'react';

export default function CommercialPhrase() {
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
      className="py-16 md:py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-2xl md:text-3xl font-handwritten text-primary tracking-wider">
            Creamos experiencias únicas, en cualquier espacio.
          </h2>
        </div>
      </div>
    </section>
  );
}
