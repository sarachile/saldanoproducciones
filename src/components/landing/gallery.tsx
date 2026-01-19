import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery'));

export default function Gallery() {
  return (
    <section id="galeria" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          Galería de Momentos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            {galleryImages.slice(0, 2).map(image => (
              <div key={image.id} className="relative overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-3">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  data-ai-hint={image.imageHint}
                />
              </div>
            ))}
          </div>
           <div className="grid gap-4">
            {galleryImages.slice(2, 4).map(image => (
              <div key={image.id} className="relative overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-5">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  data-ai-hint={image.imageHint}
                />
              </div>
            ))}
          </div>
          <div className="grid gap-4">
            {galleryImages.slice(4, 6).map(image => (
              <div key={image.id} className="relative overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-3">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  data-ai-hint={image.imageHint}
                />
              </div>
            ))}
          </div>
          <div className="grid gap-4">
            {galleryImages.slice(0, 2).reverse().map(image => (
              <div key={`${image.id}-rev`} className="relative overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-5">
                <Image
                  src={image.imageUrl.replace('seed/g','seed/g-rev')}
                  alt={image.description}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  data-ai-hint={image.imageHint}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
