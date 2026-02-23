
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Trees } from 'lucide-react';

export default function PaseosSection() {
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
            { threshold: 0.3 }
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
        <section ref={ref} id="paseos-home" className="py-8 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className={cn(
                    "relative rounded-lg overflow-hidden shadow-2xl group transition-all duration-1000 ease-out flex items-center justify-center text-center text-white min-h-[60vh] p-8",
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                )}>
                    <Image
                        src="/p1.jpeg"
                        alt="Paseos de empresa y escolares"
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 z-10 transition-colors group-hover:bg-black/70" />
                    
                    <div className={cn(
                        "relative z-20 flex flex-col items-center transition-all duration-1000 ease-out delay-200",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}>
                         <div className="mb-6 drop-shadow-lg flex flex-col items-center gap-2">
                           <Trees className="h-20 w-20 text-white" />
                           <span className="text-2xl font-headline font-bold text-white tracking-wider">Paseos</span>
                         </div>
                        <h2 className="text-3xl md:text-5xl font-headline font-bold text-white mb-4 text-balance drop-shadow-md">
                            Desconexión y Entretención
                        </h2>
                        <p className="max-w-2xl text-lg md:text-xl text-white/90 mb-8 text-balance drop-shadow-sm">
                            Organizamos jornadas inolvidables para empresas y colegios en nuestro centro de eventos.
                        </p>
                        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full group/btn transition-transform hover:scale-105">
                            <Link href="/paseos">
                                <span>Conocer Más</span>
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
