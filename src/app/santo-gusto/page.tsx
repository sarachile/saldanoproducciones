"use client";

import * as React from "react";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check, Mail, Phone, Music, Gift, Pizza } from 'lucide-react';
import { cn } from "@/lib/utils";
import Link from "next/link";

const useAnimateOnScroll = (threshold = 0.2) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
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
    }, [threshold]);

    return { ref, isVisible };
};


export default function SantoGustoPage() {
    const hero = useAnimateOnScroll();
    const about = useAnimateOnScroll();
    const menu = useAnimateOnScroll();
    const party = useAnimateOnScroll();

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section ref={hero.ref} className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
        <Image
          src="/carrito.jpeg"
          alt="Carrito de Hamburguesas Santo Gusto"
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className={cn(
            "relative z-20 px-4 flex flex-col items-center transition-all duration-1000 ease-out",
            hero.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="mb-4 drop-shadow-lg">
            <Image
                src="/santogusto.png"
                alt="Santo Gusto Logo"
                width={160}
                height={59}
                className="object-contain h-auto"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-headline font-bold text-white mb-4 text-balance drop-shadow-md">
            La Tentación de Pasarlo Bien
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-white/90 mb-8 text-balance drop-shadow-sm">
            Llevamos el mejor sabor y la fiesta a tu evento con nuestros food trucks.
          </p>
           <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
            <Link href="#contacto">
                Cotiza tu Evento
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section ref={about.ref} className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={cn("transition-all duration-1000 ease-out", about.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12")}>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6">
                Nuestra Historia de Sabor
              </h2>
              <p className="text-lg text-foreground/90 mb-4 text-balance">
                Somos Paola y Germán, emprendedores de toda una vida. De familia ligada siempre a la excelencia en el servicio, quisimos crear Santo Gusto para compatibilizar nuestro tiempo y desarrollar lo que tanto nos apasiona.
              </p>
              <p className="text-foreground/80 mb-8">
                Ver las caras de nuestros clientes agradecidos por un buen trabajo es nuestra mayor recompensa. Nos comprometemos a dar lo mejor de nosotros con un solo objetivo: que tu evento sea una experiencia inolvidable.
              </p>
            </div>
            <div className={cn("grid grid-cols-2 gap-4 transition-all duration-1000 ease-out delay-200", about.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90")}>
               <Image src="/carrito1.jpeg" alt="Food truck Santo Gusto en un evento" width={400} height={400} className="rounded-xl shadow-lg object-cover aspect-square" data-ai-hint="food truck" />
               <Image src="/carrito3.jpeg" alt="Detalle del carrito de Santo Gusto" width={400} height={400} className="rounded-xl shadow-lg object-cover aspect-square mt-8" data-ai-hint="mobile catering" />
            </div>
          </div>
        </div>
      </section>
      
       {/* Menu Section */}
      <section ref={menu.ref} className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                    Clásicos al Paso
                </h2>
                <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/90">
                    Sabor que conquista en cada bocado.
                </p>
            </div>
            <div className={cn(
                "flex justify-center transition-all duration-1000 ease-out delay-200",
                menu.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            )}>
                <Image 
                    src="/productoscarrito.jpg?v=2"
                    alt="Menú de productos Santo Gusto"
                    width={1200}
                    height={800}
                    className="rounded-xl shadow-2xl w-full max-w-md h-auto"
                />
            </div>
             <div className="text-center mt-8 flex justify-center items-center gap-4">
                <Pizza className="h-6 w-6 text-primary" />
                <p className="text-foreground/80 text-lg">
                    ¡Pregunta por nuestras <span className="font-bold text-primary/90">Pizzas Artesanales</span> y <span className="font-bold text-primary/90">Empanadas de Horno</span>!
                </p>
            </div>
        </div>
      </section>

      {/* Party Services Section */}
      <section ref={party.ref} className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 max-w-3xl mx-auto">
                 <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                    Más que Comida, una Fiesta Completa
                </h2>
                <p className="mt-2 text-lg text-foreground/90">
                    Además de nuestro increíble sabor, llevamos todo lo necesario para que tu evento sea inolvidable.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-start max-w-4xl mx-auto">
                 <div className={cn("transition-all duration-1000 ease-out", party.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12")}>
                    <div className="flex items-center gap-4 mb-6">
                        <Music className="h-10 w-10 text-primary" />
                        <h3 className="text-2xl font-headline font-bold">Bailable</h3>
                    </div>
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> DJ Profesional y Amplificación</li>
                        <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Iluminación y Efectos</li>
                        <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Pantalla Gigante y Microfonía</li>
                    </ul>
                </div>
                 <div className={cn("transition-all duration-1000 ease-out delay-200", party.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12")}>
                    <div className="flex items-center gap-4 mb-6">
                        <Gift className="h-10 w-10 text-primary" />
                        <h3 className="text-2xl font-headline font-bold">Animación</h3>
                    </div>
                     <ul className="space-y-4 text-lg">
                        <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Animación Interactiva y Concursos</li>
                        <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Voz en Off durante el evento</li>
                        <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> ¡Noche de Karaoke!</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
                  ¿Quieres Santo Gusto en tu celebración?
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-foreground/90 mb-8">
                  Contáctanos y llevemos la mejor comida y entretención a tu próximo evento.
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
