import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PartyPopper, UtensilsCrossed, Briefcase, Users, Tent, Film } from 'lucide-react';

const services = [
  {
    icon: PartyPopper,
    title: "Eventos Sociales",
    description: "Bodas, cumpleaños y celebraciones. Diseñamos momentos únicos y personales."
  },
  {
    icon: Briefcase,
    title: "Eventos Corporativos",
    description: "Lanzamientos, conferencias y fiestas de fin de año. Proyectamos la imagen de tu empresa."
  },
  {
    icon: Users,
    title: "Eventos Masivos",
    description: "Conciertos, festivales y ferias. Producción a gran escala con logística impecable."
  },
  {
    icon: UtensilsCrossed,
    title: "Catering de Alta Cocina",
    description: "Propuestas gastronómicas innovadoras que deleitan los paladares más exigentes."
  },
  {
    icon: Tent,
    title: "Logística y Montaje",
    description: "Carpas, escenarios, iluminación y sonido. Creamos la atmósfera perfecta."
  },
  {
    icon: Film,
    title: "Producción Audiovisual",
    description: "Cobertura de video y fotografía, streaming y contenido para redes sociales."
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Nuestros Servicios</h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">
            Ofrecemos soluciones integrales para cualquier tipo de evento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-border hover:border-primary hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="text-center p-6 pt-0 flex-grow">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
