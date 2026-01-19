import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PartyPopper, Briefcase, Home, Star, Check } from "lucide-react";

const serviceCategories = [
  {
    id: "sociales",
    icon: PartyPopper,
    title: "Eventos Sociales",
    services: [
      "Matrimonios",
      "Graduaciones",
      "Cumpleaños",
      "Bautizos",
      "Fiestas Infantiles",
    ],
  },
  {
    id: "corporativos",
    icon: Briefcase,
    title: "Eventos Corporativos",
    services: [
      "Empresas",
      "Municipalidades",
      "Cooperativas",
      "Casinos Institucionales",
      "Entrega de Colaciones",
    ],
  },
  {
    id: "terreno",
    icon: Home,
    title: "Eventos en Terreno / A Domicilio",
    services: [
      "Eventos a Domicilio",
      "Eventos Aire Libre",
      "Asados Campestres",
      "Carrito Hamburguesas",
      "Coffee Break",
    ],
  },
  {
    id: "produccion",
    icon: Star,
    title: "Producción & Servicios Extras",
    services: ["Catering", "Grupos Musicales", "Salón"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Nuestros Servicios
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">
            Soluciones integrales para cada ocasión, con un sello de excelencia.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {serviceCategories.map((category) => (
            <AccordionItem
              key={category.id}
              value={category.id}
              className="border-b border-border/50 transition-all duration-300"
            >
              <AccordionTrigger className="py-6 px-4 text-lg hover:no-underline font-headline text-left">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span>{category.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <ul className="space-y-3 pl-12 md:pl-20">
                  {category.services.map((service) => (
                    <li key={service} className="flex items-center gap-3 text-foreground/80">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
