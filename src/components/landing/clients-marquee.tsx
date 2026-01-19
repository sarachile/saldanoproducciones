import { Star } from 'lucide-react';

const clients = [
  "Municipalidad de Pudahuel",
  "Municipalidad de Cerro Navia",
  "Municipalidad de Lampa",
  "Municipalidad de Colina",
  "Municipalidad de Quilicura",
  "Municipalidad de Cerrillos",
  "Municipalidad de Lo Prado",
  "Municipalidad de Padre Hurtado",
  "Municipalidad de Peñaflor",
  "Municipalidad de Macul",
  "Municipalidad de Independencia",
  "Municipalidad de Santo Domingo",
  "Municipalidad de San Antonio",
  "Municipalidad de Maipú",
  "TNT Sports",
  "MediaPro",
  "Chile Films",
  "Chilevisión",
  "Bayer",
  "Falabella, Ripley, Paris, Farmacias Ahumada",
  "CD Paris",
  "CD Cencosud, Sodimac Constructor Tucapel",
  "Homy",
  "Ejército de Chile, Carabineros de Chile, PDI",
  "Colegio de Profesores",
  "Gobierno Regional de Santiago",
  "Sodimac Home Center",
  "Banco Santander",
  "Banco Estado",
  "CorpBanca",
  "BCI",
  "Cerámicas Cordillera",
  "Sony",
  "CRS Maipú",
  "SAPU Pudahuel",
  "SAPU Lo Prado",
  "Construmart",
  "Kaufmann",
  "Toshiba",
  "Samsung",
  "Indura",
  "Avon",
  "Natura",
  "Ésika",
  "Herbalife",
  "Cumbres Huachacas",
  "Federaciones de Estudiantes",
  "Sindicatos",
  "Transantiago",
  "ADUTAGACH",
  "Fonda Oficial de Maipú",
  "Mega Eventos Año Nuevo",
  "Maigás",
  "Cientos de matrimonios y empresas"
];

const ClientItem = ({ name }: { name: string }) => (
  <div className="flex items-center mx-6 flex-shrink-0">
    <Star className="h-5 w-5 text-primary/50 mr-3 flex-shrink-0" />
    <span className="text-lg font-medium text-foreground/70 whitespace-nowrap">{name}</span>
  </div>
);

export default function ClientsMarquee() {
  return (
    <section id="clientes" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
          Nuestros Clientes
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">
          La confianza de grandes marcas y cientos de familias.
        </p>
      </div>

      <div
        className="group relative w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="flex animate-marquee-slow group-hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((client, index) => (
            <ClientItem key={index} name={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
