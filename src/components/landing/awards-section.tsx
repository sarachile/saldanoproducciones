import Image from 'next/image';

export default function AwardsSection() {
  return (
    <section id="premios" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-handwritten text-primary/90 tracking-wider">
            Reconocidos año tras año
          </h2>
        </div>
        <div className="flex justify-center px-4">
          <Image
            src="/premios.png"
            alt="Premios Saldaño Producciones"
            width={1600}
            height={400}
            className="w-full max-w-6xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
