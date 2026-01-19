import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: "t1",
    quote: "La organización fue impecable y el catering delicioso. ¡Nuestro matrimonio fue un sueño hecho realidad gracias a Cabera Producciones!",
    name: "Ana y Juan",
    company: "Novios Felices",
  },
  {
    id: "t2",
    quote: "Profesionalismo y creatividad de principio a fin. El evento de lanzamiento superó todas nuestras expectativas. Altamente recomendados.",
    name: "Carlos Gutiérrez",
    company: "Gerente de Marketing, TechCorp",
  },
  {
    id: "t3",
    quote: "Manejar un evento para 5,000 personas no es fácil, pero el equipo de Cabera lo hizo ver sencillo. Un éxito total.",
    name: "Sofía Vergara",
    company: "Directora de Festival MúsicFest",
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          La Voz de Nuestros Clientes
        </h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const image = PlaceHolderImages.find(img => img.id === testimonial.id);
              return (
                <CarouselItem key={testimonial.id}>
                  <div className="p-4">
                    <Card className="bg-background border-border">
                      <CardContent className="p-8 text-center">
                        <p className="text-lg italic text-foreground/90 mb-6 text-balance">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex justify-center items-center gap-4">
                           <Avatar>
                            {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint}/>}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold text-primary">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
