
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Carousel, CarouselContent, CarouselItem, CarouselApi, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Users, Leaf, Grape, Send, Wine } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import type { CheeseBoard } from '@/lib/data';
import { cheeseBoards } from '@/lib/data';
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

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
    <footer className="w-full bg-blue-900 text-white py-6 mt-auto">
      <div className="container flex items-center justify-between">
        <Logo />
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center space-x-4">
                <Link href="/politicas-de-privacidad" className="text-gray-400 hover:text-white text-sm">Política de privacidad</Link>
                <Link href="/terminos-de-servicio" className="text-gray-400 hover:text-white text-sm">Términos de servicio</Link>
            </div>
            <p className="text-sm text-white text-center">&copy; 2025 paolo gourmet. Todos los derechos reservados.</p>
        </div>
        <div className="w-12"></div>
      </div>
    </footer>
  );
}

export default function ProductClientPage({ board }: { board: CheeseBoard }) {
  const productImages = [board.image, "/Imagen/Galeria/IMG_0852.jpg", "/Imagen/Galeria/IMG_0818.jpg"];
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [addWine, setAddWine] = useState(false);

  const relatedProducts = cheeseBoards.filter(b => b.id !== board.id);

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

  const getWhatsAppLink = () => {
    const baseLink = "https://wa.me/525512345678";
    const message = `Hola, me gustaría solicitar una cotización para el producto: ${board.name}${addWine ? ' con una botella de vino' : ''}.`;
    return `${baseLink}?text=${encodeURIComponent(message)}`;
  }


  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="bg-blue-900 py-2 text-center text-sm text-white">
        <p>Envíos gratis en CDMX - El pedido necesita un día mínimo de anticipación.</p>
      </div>
      <Header />
      <main className="flex-grow py-12 md:py-16 lg:py-20 animate-fade-in-up">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-4">
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {productImages.map((src, index) => (
                    <CarouselItem key={index}>
                      <Card className="overflow-hidden shadow-lg rounded-none">
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
                <Badge variant="secondary" className="capitalize text-sm mb-2">{board.line}</Badge>
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
               <div className="flex items-center space-x-2">
                 <Wine className="h-5 w-5 text-primary" />
                 <Switch id="add-wine" checked={addWine} onCheckedChange={setAddWine} />
                 <Label htmlFor="add-wine" className="text-md">Agregar botella de vino</Label>
               </div>
              <Separator />


              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-md font-medium">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Sirve para {board.serving} personas</span>
                </div>
              </div>

               <Button size="lg" className="w-full md:w-auto shadow-md hover:shadow-lg transition-shadow" asChild>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <Send className="mr-2 h-4 w-4" />
                  Solicitar Cotización
                </a>
              </Button>

            </div>
          </div>
        </div>

        <section id="related-products" className="w-full py-16 md:py-20 lg:py-24 mt-16 bg-secondary">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">También te puede interesar</h2>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-6xl mx-auto"
                >
                    <CarouselContent>
                        {relatedProducts.map(relatedBoard => (
                        <CarouselItem key={relatedBoard.id} className="md:basis-1/3 lg:basis-1/4">
                            <div className="p-2">
                                <Card className="flex flex-col overflow-hidden shadow-md transition-shadow hover:shadow-xl h-full rounded-none">
                                    <div className="relative aspect-square w-full">
                                    <Image
                                        src={relatedBoard.image}
                                        alt={relatedBoard.name}
                                        data-ai-hint={relatedBoard.dataAiHint}
                                        fill
                                        className="object-cover"
                                    />
                                    </div>
                                    <CardContent className="p-4 flex-grow flex flex-col">
                                    <CardTitle className="font-headline text-xl mb-2">{relatedBoard.name}</CardTitle>
                                    {relatedBoard.serving && (
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-auto">
                                            <Users className="h-4 w-4" />
                                            <span>{relatedBoard.serving} personas</span>
                                        </div>
                                    )}
                                    </CardContent>
                                    <CardFooter className="p-4 pt-0">
                                    <Button asChild className="w-full">
                                        <Link href={`/product/${relatedBoard.id}`}>Ver más</Link>
                                    </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
