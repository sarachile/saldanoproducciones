import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
      <video
        src="/header.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-4">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-primary" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          <span className="font-script">Saldaño</span>
          <span className="font-handwritten text-5xl md:text-7xl -mt-8 -ml-4 block tracking-normal">Producciones</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-balance text-foreground/90">
          Creamos experiencias inolvidables. Eventos, catering y producción de alta gama.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#contacto">Cotiza tu Evento</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="#servicios">Ver Servicios</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 z-10">
        <Link href="#destacados" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 text-white/70 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
