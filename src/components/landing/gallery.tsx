import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

// Use only real photos from the public folder
const images = [
  "/fotoseventos/c.2.2.png",
  "/fotoseventos/c.2.3.png",
  "/fotoseventos/c.2.4.png",
  "/fotoseventos/c.2.5.png",
  "/fotoseventos/c.2.6.png",
  "/fotoseventos/c.2.7.png",
  "/fotoseventos/c.2.8.png",
  "/fotoseventos/c.2.9.png",
  "/fotoseventos/c.2.10.png",
  "/fotoseventos/c.2.11.png",
  "/fotoseventos/c.2.12.png",
  "/fotoseventos/c.2.13.png",
  "/fotoseventos/c.2.14.png",
  "/fotoseventos/c.2.16.png",
  "/fotoseventos/c.2.17.png",
  "/fotoseventos/c.19.png",
  "/fotoseventos/c.21.png",
  "/fotoseventos/c3.png",
  "/fotoseventos/c4.png",
  "/fotoseventos/c5.png",
  "/fotoseventos/c6.png",
  "/fotoseventos/c7.png",
];

const carouselImages = images.slice(0, 5);
const masonryImages = images;


export default function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-16">
          Galería de Momentos
        </h2>

        {/* Carousel */}
        <div className="mb-20">
            <Carousel
            opts={{
                align: 'start',
                loop: true,
            }}
            className="w-full"
            >
            <CarouselContent>
                {carouselImages.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                    <Card className="overflow-hidden border-2 border-transparent hover:border-primary transition-colors">
                        <CardContent className="flex aspect-video items-center justify-center p-0">
                        <Image
                            src={src}
                            alt={`Evento Saldaño Producciones ${index + 1}`}
                            width={1200}
                            height={800}
                            className="w-full h-full object-cover"
                        />
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {masonryImages.map((src, index) => (
                <div key={index} className="break-inside-avoid">
                    <Image
                        src={src}
                        alt={`Momento evento ${index + 1}`}
                        width={600}
                        height={index % 2 === 0 ? 800 : 600}
                        className="w-full h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>
            ))}
        </div>

        {/* 'Ver más' Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Ver más fotos
          </Button>
        </div>
      </div>
    </section>
  );
}