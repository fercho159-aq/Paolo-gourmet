
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Leaf, Grape, ArrowLeft, Send } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import type { CheeseBoard } from '@/lib/data';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container flex h-16 items-center">
        <Logo />
        <nav className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/#about">Conócenos</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#boards">Tablas</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#gallery">Galería</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#contact">Contacto</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-secondary py-6 mt-auto">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <Logo />
        <p className="text-sm text-muted-foreground">&copy; 2024 paolo gourmet. Todos los derechos reservados.</p>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-muted-foreground hover:text-foreground">Política de privacidad</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">Términos de servicio</a>
        </div>
      </div>
    </footer>
  );
}

export default function ProductClientPage({ board }: { board: CheeseBoard }) {
  const productImages = [board.image, "/Imagen/Galeria/IMG_0852.jpg", "/Imagen/Galeria/IMG_0818.jpg"];
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleThumbnailClick = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div style={{ backgroundColor: '#c7c7c7' }} className="py-2 text-center text-sm text-secondary-foreground">
        <p>Envíos gratis en CDMX - El pedido necesita un día mínimo de anticipación.</p>
      </div>
      <Header />
      <main className="flex-grow py-12 md:py-16 lg:py-20">
        <div className="container">
          <Button variant="outline" asChild className="mb-8">
            <Link href="/#boards">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a las tablas
            </Link>
          </Button>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-4">
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {productImages.map((src, index) => (
                    <CarouselItem key={index}>
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="relative aspect-square w-full">
                            <Image
                              src={src}
                              alt={`${board.name} - imagen ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="grid grid-cols-5 gap-2">
                {productImages.map((src, index) => (
                  <button key={index} onClick={() => handleThumbnailClick(index)} className={`overflow-hidden rounded-md focus:ring-2 focus:ring-ring focus:outline-none ${current === index ? 'ring-2 ring-primary' : ''}`}>
                    <div className="relative aspect-square w-full">
                        <Image
                            src={src}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                         {current !== index && <div className="absolute inset-0 bg-black/30"></div>}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold font-headline">{board.name}</h1>
                <p className="text-muted-foreground mt-2 text-lg">{board.description}</p>
              </div>

              <Separator />

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Leaf className="h-5 w-5 text-primary" />Quesos</h3>
                  <p className="text-muted-foreground">{board.cheeses.join(', ')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Grape className="h-5 w-5 text-primary" />Acompañamientos</h3>
                  <p className="text-muted-foreground">{board.accompaniments.join(', ')}</p>
                </div>
              </div>
              
              <Separator />

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-md font-medium">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Sirve para {board.serving} personas</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {board.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="capitalize text-sm">{tag}</Badge>
                    ))}
                </div>
              </div>

               <Button size="lg" className="w-full md:w-auto" asChild>
                <a href="https://wa.me/525512345678" target="_blank" rel="noopener noreferrer">
                  <Send className="mr-2 h-4 w-4" />
                  Solicitar Cotización
                </a>
              </Button>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
