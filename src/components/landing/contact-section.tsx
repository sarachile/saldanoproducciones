import ContactForm from "./contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = ({ icon: Icon, text, href }: { icon: React.ElementType, text: string, href?: string }) => (
  <div className="flex items-start gap-4">
    <Icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
    {href ? (
      <a href={href} className="text-foreground/90 hover:text-primary transition-colors">{text}</a>
    ) : (
      <p className="text-foreground/90">{text}</p>
    )}
  </div>
);

export default function ContactSection() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Contáctanos</h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">
            ¿Listo para empezar a planificar? Hablemos.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-headline font-semibold">Información de Contacto</h3>
            <div className="space-y-6">
              <ContactInfo icon={Mail} text="contacto@saldanoproducciones.com" href="mailto:contacto@saldanoproducciones.com" />
              <ContactInfo icon={Phone} text="+56 2 2123 4567" href="tel:+56221234567" />
              <ContactInfo icon={MapPin} text="Av. Vitacura 2939, Las Condes, Santiago, Chile" />
            </div>
            <p className="text-muted-foreground">
              Nuestro horario de atención es de Lunes a Viernes, de 9:00 a 18:00 hrs.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
