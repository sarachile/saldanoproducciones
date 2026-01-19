
export default function AboutUs() {
  return (
    <section id="quienes-somos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
              Quiénes Somos
            </h2>
            <p className="text-lg text-foreground/90 mb-4 text-balance">
              En Saldaño Producciones, transformamos ideas en eventos memorables. Con años de experiencia en la industria, nuestro equipo de profesionales se dedica a la excelencia, cuidando cada detalle para superar las expectativas de nuestros clientes.
            </p>
            <p className="text-foreground/80">
              Desde bodas íntimas hasta grandes eventos corporativos, nuestra pasión es crear momentos únicos. Fusionamos creatividad, logística impecable y un servicio de catering excepcional para garantizar que cada ocasión sea un éxito rotundo.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl">
              <video
                src="/somos.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
