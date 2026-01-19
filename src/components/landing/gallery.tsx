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
import { PlaceHolderImages } from '@/lib/placeholder-images';

const carouselImages = [
    ...PlaceHolderImages.filter(img => img.id.startsWith('carousel')),
    ...PlaceHolderImages.filter(img => img.id.startsWith('gallery')).slice(0,2)
];
const masonryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery'));

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
                {carouselImages.map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                    <Card className="overflow-hidden border-2 border-transparent hover:border-primary transition-colors">
                        <CardContent className="flex aspect-video items-center justify-center p-0">
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            width={1200}
                            height={800}
                            className="w-full h-full object-cover"
                            data-ai-hint={image.imageHint}
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
            {masonryImages.map((image, index) => (
                <div key={image.id} className="break-inside-avoid">
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={index % 2 === 0 ? 800 : 600}
                        className="w-full h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        data-ai-hint={image.imageHint}
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
