import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const partnerImages = PlaceHolderImages.filter(img => img.id.startsWith('partner'));

export default function Partners() {
  return (
    <section id="marcas" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          Marcas que Confían en Nosotros
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8">
          {partnerImages.map(image => (
            <div key={image.id} className="relative h-12 w-36">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                data-ai-hint={image.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
