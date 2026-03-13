"use client";

import * as React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function PaseosPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] w-full flex items-center justify-center text-center text-white">
        <Image
          src="/p1.jpeg"
          alt="Paseos de empresa y escolares"
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-wider drop-shadow-lg">
            Paseos de Fin de Año
          </h1>
          <p className="mt-4 max-w-3xl text-xl md:text-2xl text-white/90 mb-8 text-balance">
            Creamos jornadas inolvidables de entretención y naturaleza en nuestro centro de eventos para colegios y empresas.
          </p>
        </div>
      </section>

      {/* Selection Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
              Elige tu Tipo de Paseo
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/90">
              Tenemos el plan perfecto para que tu grupo viva una experiencia memorable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Card Paseos Escolares */}
            <Link href="/paseos-escolares" className="group">
              <Card className="overflow-hidden h-full border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative aspect-video">
                    <Image
                      src="/p5.jpeg"
                      alt="Niños en paseo escolar"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-card flex-grow flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          src="/paseos.png"
                          alt="Logo Paseos Escolares"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-headline font-bold">Paseos Escolares</h3>
                    </div>
                    <p className="text-foreground/80 mb-6 flex-grow">
                      Días llenos de juegos, actividades y aprendizaje en un entorno natural, seguro y entretenido para estudiantes de todas las edades.
                    </p>
                    <div className="mt-auto">
                       <Button variant="link" className="px-0 text-primary group-hover:text-primary/80">
                         Ver Detalles <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                       </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Card Paseos de Empresa */}
            <Link href="/paseos-empresa" className="group">
              <Card className="overflow-hidden h-full border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative aspect-video">
                    <Image
                      src="/p6.jpeg"
                      alt="Adultos en paseo de empresa"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-card flex-grow flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          src="/paseosempresa.png"
                          alt="Logo Paseos de Empresa"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-headline font-bold">Paseos de Empresa</h3>
                    </div>
                    <p className="text-foreground/80 mb-6 flex-grow">
                      La mejor opción para salir de la rutina, fortalecer lazos entre equipos y celebrar los éxitos del año en un ambiente relajado.
                    </p>
                     <div className="mt-auto">
                       <Button variant="link" className="px-0 text-primary group-hover:text-primary/80">
                         Ver Detalles <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                       </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}