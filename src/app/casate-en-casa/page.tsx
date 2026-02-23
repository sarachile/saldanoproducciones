
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Instagram, Phone, Mail } from 'lucide-react';
import { CasateEnCasaLogo } from '@/components/icons/casate-en-casa-logo';

const TikTokIconSVG = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5"></path>
    </svg>
);

const galleryImages = [
  "/fotoseventos/c.2.2.png",
  "/fotoseventos/c.2.3.png",
  "/fotoseventos/c.2.4.png",
  "/fotoseventos/c.2.5.png",
  "/fotoseventos/c.2.6.png",
  "/fotoseventos/c.2.7.png",
];

export default function CasateEnCasaPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
        <video
          src="/casateencasa.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 flex flex-col items-center">
          <div className="mb-6 drop-shadow-lg flex flex-col items-center gap-4">
            <CasateEnCasaLogo className="h-28 w-28 text-white" />
            <h1 className="text-4xl font-headline font-bold text-white tracking-wider">Cásate en Casa</h1>
          </div>
          <h2 className="text-2xl md:text-4xl font-headline font-bold text-white mb-4 text-balance">
            Tu hogar, el mejor centro de eventos.
          </h2>
          <p className="max-w-3xl text-xl text-white/90 mb-8 text-balance">
            Transformamos tu espacio en el escenario perfecto para el día más importante de tu vida.
          </p>
          <div className="flex justify-center gap-4">
             <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="https://www.instagram.com/casateencasa.cl" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" /> Instagram
                </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="https://www.tiktok.com/@casateencasacl" target="_blank" rel="noopener noreferrer">
                    <TikTokIconSVG />
                    <span className="ml-2">TikTok</span>
                </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6">
                La Magia de Celebrar en Casa
              </h2>
              <p className="text-lg text-foreground/90 mb-4 text-balance">
                Cásate en Casa es nuestra marca especializada en convertir residencias privadas en espectaculares centros de eventos. Olvídate del estrés de buscar un lugar, nosotros llevamos toda la producción de alta gama a la comodidad y calidez de tu hogar.
              </p>
              <p className="text-foreground/80 mb-8">
                Desde la planificación inicial hasta el último detalle del evento, nuestro equipo se encarga de todo. Creamos una atmósfera única y personalizada que refleja tu estilo, asegurando una experiencia íntima e inolvidable para ti y tus invitados.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Diseño y decoración integral del espacio.</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Servicio de catering gourmet adaptado a tu hogar.</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Logística completa: carpas, iluminación y sonido.</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Coordinación profesional durante todo el evento.</li>
              </ul>
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl group">
                 <Image
                    src="/fotoseventos/c3.png"
                    alt="Boda íntima en casa"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
            </div>
          </div>
        </div>
      </section>
      
      {/* Dinner Show Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">
                DINNER SHOW
                </h2>
                <p className="text-xl md:text-2xl font-body italic text-primary/90 mb-6">
                Una experiencia inolvidable
                </p>
                <p className="text-lg text-foreground/90 mb-8 text-balance">
                Creamos un espacio único para que disfrutes de un show de bailarines profesionales mientras degustas de nuestra alta cocina.
                </p>
                <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Bailarines profesionales</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Show personalizado</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Gastronomía de primer nivel</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0" /> Producción completa</li>
                </ul>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
                <div className="relative col-span-2 aspect-video rounded-lg overflow-hidden shadow-2xl group">
                    <Image
                    src="/bailarines1.jpeg"
                    alt="Show de bailarines profesionales en evento"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl group">
                    <Image
                    src="/bailarines2.jpeg"
                    alt="Pareja de bailarines en show"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl group">
                    <Image
                    src="/bailarines3.jpeg"
                    alt="Bailarines en acción durante cena"
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                </div>
            </div>
            </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                Transformaciones Memorables
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/90">
                Mira cómo convertimos espacios cotidianos en lugares mágicos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className="group relative aspect-video overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={src}
                  alt={`Galería Cásate en Casa ${index + 1}`}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
                  ¿Listo para tu evento soñado en casa?
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-foreground/90 mb-8">
                  Contáctanos y empecemos a planificar juntos. Nuestro equipo está listo para asesorarte y convertir tu idea en una celebración espectacular.
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

    