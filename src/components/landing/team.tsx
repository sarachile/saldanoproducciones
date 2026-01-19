import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    id: "team1",
    name: "Juan Cabera",
    role: "Director General y Fundador"
  },
  {
    id: "team2",
    name: "María Rodriguez",
    role: "Jefa de Producción"
  },
  {
    id: "team3",
    name: "Pedro Pascal",
    role: "Chef Ejecutivo"
  }
];

export default function Team() {
  return (
    <section id="equipo" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Nuestro Equipo</h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">
            Los profesionales apasionados detrás de cada evento exitoso.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map(member => {
            const image = PlaceHolderImages.find(img => img.id === member.id);
            return (
              <Card key={member.id} className="bg-card text-center overflow-hidden border-border group">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    {image && 
                      <Image 
                        src={image.imageUrl} 
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={image.imageHint}
                      />
                    }
                  </div>
                  <div className="p-6">
                    <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
