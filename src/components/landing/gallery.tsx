"use client";

import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const images = [
  "/fotoseventos/c.2.2.png",
  "/fotoseventos/c.2.3.png",
  "/fotoseventos/c.2.4.png",
  "/fotoseventos/c.2.5.png",
  "/fotoseventos/c.2.6.png",
  "/fotoseventos/c.2.7.png",
  "/fotoseventos/c.2.8.png",
  "/fotoseventos/c.2.9.png",
  "/fotoseventos/c.2.10.png",
  "/fotoseventos/c.2.11.png",
  "/fotoseventos/c.2.12.png",
  "/fotoseventos/c.2.13.png",
  "/fotoseventos/c.2.14.png",
  "/fotoseventos/c.2.16.png",
  "/fotoseventos/c.2.17.png",
  "/fotoseventos/c.19.png",
  "/fotoseventos/c.21.png",
  "/fotoseventos/c3.png",
  "/fotoseventos/c4.png",
  "/fotoseventos/c5.png",
  "/fotoseventos/c6.png",
  "/fotoseventos/c7.png",
];


export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const closeLightbox = () => {
    setOpen(false);
  };

  const goToNext = useCallback(() => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const goToPrev = useCallback(() => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!open) return;
      if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === 'ArrowLeft') {
        goToPrev();
      } else if (event.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, goToNext, goToPrev]);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-16 text-primary">
          Galería de Momentos
        </h2>
        
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full relative group"
        >
          <CarouselContent className="-ml-4">
            {images.map((src, index) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-4">
                <div 
                  className="group/item relative aspect-video overflow-hidden rounded-lg cursor-pointer shadow-lg"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={src}
                    alt={`Galería de evento ${index + 1}`}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover/item:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/80 border-none transition-opacity opacity-0 group-hover:opacity-100 disabled:opacity-0" />
          <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/80 border-none transition-opacity opacity-0 group-hover:opacity-100 disabled:opacity-0" />
        </Carousel>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 border-0 bg-black/80 max-w-none w-screen h-screen">
          <DialogTitle className="sr-only">Galería de Imágenes</DialogTitle>
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={images[selectedIndex]}
              alt={`Galería de evento ${selectedIndex + 1}`}
              width={1600}
              height={1000}
              className="object-contain w-auto h-auto max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
            />
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full"
              onClick={goToPrev}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full"
              onClick={goToNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
