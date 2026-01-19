"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Instagram } from 'lucide-react';

export default function BurgerCartSection() {
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
            threshold: 0.2,
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
        <section ref={ref} id="carrito-hamburguesas" className="py-20 md:py-28 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className={cn(
                        "relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl group transition-all duration-1000 ease-out",
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                     )}>
                        <Image
                            src="/carrito.jpeg"
                            alt="Carrito de Hamburguesas Gourmet"
                            fill
                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-110"
                        />
                    </div>
                    <div className={cn(
                        "transition-all duration-1000 ease-out delay-200",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}>
                        <Image
                            src="/santogusto.png"
                            alt="Santo Gusto Logo"
                            width={350}
                            height={120}
                            className="object-contain h-auto mb-6 mix-blend-darken"
                        />
                        <p className="text-lg text-foreground/90 mb-8 text-balance">
                            Lleva la experiencia completa a tu evento: un carrito gourmet de hamburguesas, rápido, caliente y lleno de sabor.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                <Link href="#contacto">Cotizar Carrito</Link>
                            </Button>
                             <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group/insta">
                                <a href="https://www.instagram.com/santogusto_carritogourmet?igsh=MTh0ZGE5amlkbTNybg==" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="mr-2 h-5 w-5 transition-transform duration-300 group-hover/insta:scale-125" />
                                    <span>Ver en Instagram</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
