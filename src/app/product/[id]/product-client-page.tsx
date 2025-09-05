
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Carousel, CarouselContent, CarouselItem, CarouselApi, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Users, Leaf, Grape, Send, Wine, Star, Menu, Crown, Box, ChevronDown, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import type { CheeseBoard, Testimonial } from '@/lib/data';
import { cheeseBoards, testimonials } from '@/lib/data';
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" {...props}>
      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
    </svg>
  );
}

function Header() {
    const isMobile = useIsMobile();

    const productLinks = [
        { href: "/#premium-boards", label: "Tablas Premium", icon: <Crown className="h-4 w-4" /> },
        { href: "/#cajas-boards", label: "Cajas", icon: <Box className="h-4 w-4" /> },
    ]

    const navLinks = [
        { href: "/nosotros", label: "Nosotros" },
        { href: "/preguntas-frecuentes", label: "Preguntas Frecuentes" },
        { href: "/#contact", label: "Contacto" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container flex h-16 items-center">
            <Logo />
            {isMobile ? (
            <Sheet>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir menú</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8 h-full">
                    {navLinks.map(link => (
                         <SheetClose asChild key={link.href}>
                            <Link href={link.href} className="text-lg font-medium hover:underline hover:text-[#c5b282] underline-offset-4">
                                {link.label}
                            </Link>
                        </SheetClose>
                    ))}

                    <p className="text-lg font-medium">Productos</p>
                    <div className="flex flex-col gap-2 pl-4">
                        {productLinks.map(link => (
                            <SheetClose asChild key={link.href}>
                                <Link href={link.href} className="flex items-center gap-2 text-base text-muted-foreground hover:text-primary">
                                    {link.icon}
                                    {link.label}
                                </Link>
                            </SheetClose>
                        ))}
                    </div>
                     <div className="mt-auto flex justify-center space-x-6 pb-8">
                        <a href="https://www.instagram.com/paolo.gourmet/" target="_blank" rel="noopener noreferrer"><Instagram style={{ color: '#c5b282' }} className="h-7 w-7" /></a>
                        <a href="https://www.facebook.com/people/Tablas-Paolo-Gourmet/61578410386269/" target="_blank" rel="noopener noreferrer"><Facebook style={{ color: '#c5b282' }} className="h-7 w-7" /></a>
                        <a href="https://www.tiktok.com/@paolo.gourmet?_t=ZS-8zSIPIt2AER&_r=1" target="_blank" rel="noopener noreferrer"><TikTokIcon style={{ color: '#c5b282' }} className="h-7 w-7" /></a>
                  </div>
                </nav>
                </SheetContent>
            </Sheet>
            ) : (
            <nav className="ml-auto flex items-center space-x-1">
                <Button variant="ghost" asChild className="hover:bg-transparent hover:underline hover:text-[#c5b282] underline-offset-4">
                    <Link href="/nosotros">Nosotros</Link>
                </Button>

                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="hover:bg-transparent hover:underline hover:text-[#c5b282] underline-offset-4">
                    Productos <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                    <Link href="/#premium-boards" className="flex items-center gap-2"><Crown className="h-4 w-4" />Tablas Premium</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                    <Link href="/#cajas-boards" className="flex items-center gap-2"><Box className="h-4 w-4" />Cajas</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>

                <Button variant="ghost" asChild className="hover:bg-transparent hover:underline hover:text-[#c5b282] underline-offset-4">
                    <Link href="/preguntas-frecuentes">Preguntas Frecuentes</Link>
                </Button>

                <Button variant="ghost" asChild className="hover:bg-transparent hover:underline hover:text-[#c5b282] underline-offset-4">
                    <a href="/#contact">Contacto</a>
                </Button>
            </nav>
            )}
        </div>
        </header>
    );
}


function Footer() {
    const isMobile = useIsMobile();

    return (
        <footer className="w-full text-white py-6 mt-auto" style={{ backgroundColor: '#c5b282' }}>
            <div className="container flex flex-col md:flex-row items-center justify-between">
                 {isMobile ? (
                    <div className="flex flex-col items-center w-full">
                        <div className="mb-4">
                            <Logo />
                        </div>
                        <div className="flex items-center space-x-6">
                            <a href="https://www.instagram.com/paolo.gourmet/" target="_blank" rel="noopener noreferrer"><Instagram style={{ color: '#ffffff' }} className="h-6 w-6" /></a>
                            <a href="https://www.facebook.com/people/Tablas-Paolo-Gourmet/61578410386269/" target="_blank" rel="noopener noreferrer"><Facebook style={{ color: '#ffffff' }} className="h-6 w-6" /></a>
                            <a href="https://www.tiktok.com/@paolo.gourmet?_t=ZS-8zSIPIt2AER&_r=1" target="_blank" rel="noopener noreferrer"><TikTokIcon style={{ color: '#ffffff' }} className="h-6 w-6" /></a>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col items-center w-full md:w-auto md:items-start">
                            <div className="mb-4 md:mb-0">
                                <Logo />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <div className="flex items-center space-x-4">
                                <Link href="/politicas-de-privacidad" className="text-white hover:underline text-sm">Política de privacidad</Link>
                                <Link href="/terminos-de-servicio" className="text-white hover:underline text-sm">Términos de servicio</Link>
                            </div>
                            <p className="text-sm text-white">&copy; 2025 paolo gourmet. Todos los derechos reservados.</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="https://www.instagram.com/paolo.gourmet/" target="_blank" rel="noopener noreferrer"><Instagram style={{ color: '#ffffff' }} className="h-6 w-6" /></a>
                            <a href="https://www.facebook.com/people/Tablas-Paolo-Gourmet/61578410386269/" target="_blank" rel="noopener noreferrer"><Facebook style={{ color: '#ffffff' }} className="h-6 w-6" /></a>
                            <a href="https://www.tiktok.com/@paolo.gourmet?_t=ZS-8zSIPIt2AER&_r=1" target="_blank" rel="noopener noreferrer"><TikTokIcon style={{ color: '#ffffff' }} className="h-6 w-6" /></a>
                        </div>
                    </>
                )}
            </div>
        </footer>
    );
}

export default function ProductClientPage({ board }: { board: CheeseBoard }) {
  const productImages = board.gallery;
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [addWine, setAddWine] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const relatedProducts = cheeseBoards.filter(b => b.id !== board.id);

  const productTestimonials = testimonials.filter(t => t.productId === board.id);

  const fullTestimonials = (productTestimonials.length > 0 ? productTestimonials : testimonials.slice(0,3)).map(testimonial => {
    const product = cheeseBoards.find(p => p.id === testimonial.productId) || board;
    return { ...testimonial, product };
  });

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
  
  const handleWineSwitchChange = (checked: boolean) => {
    if (checked) {
        setIsAlertOpen(true);
    } else {
        setAddWine(false);
    }
  };

  const getWhatsAppLink = () => {
    const baseLink = "https://wa.me/525562206020";
    const message = `Hola, me gustaría solicitar una cotización para el producto: ${board.name}${addWine ? ' con una botella de vino' : ''}.`;
    return `${baseLink}?text=${encodeURIComponent(message)}`;
  }


  return (
    <div className="flex min-h-screen flex-col bg-background">
       <div className="sticky top-0 z-50">
        <div style={{ backgroundColor: '#c4b282' }} className="py-2 text-center text-xs sm:text-sm text-white">
            <p>Envíos gratis en CDMX - <span className="font-bold">un día mínimo</span> de anticipación.</p>
        </div>
        <Header />
      </div>
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
                <h1 className="text-3xl lg:text-4xl font-normal font-headline">{board.name}</h1>
                <p className="text-muted-foreground mt-2 text-lg">{board.description}</p>
              </div>

              <Separator />

              <div className="space-y-4">
                <div>
                  <h3 className="font-headline text-xl flex items-center gap-2 mb-2"><Leaf className="h-5 w-5 text-primary" />Quesos</h3>
                  <p className="text-muted-foreground">{board.cheeses.join(', ')}</p>
                </div>
                <div>
                  <h3 className="font-headline text-xl flex items-center gap-2 mb-2"><Grape className="h-5 w-5 text-primary" />Acompañamientos</h3>
                  <p className="text-muted-foreground">{board.accompaniments.join(', ')}</p>
                </div>
              </div>
              
              <Separator />
               <div className="flex items-center space-x-2">
                 <Wine className="h-5 w-5 text-primary" />
                 <Switch id="add-wine" checked={addWine} onCheckedChange={handleWineSwitchChange} />
                 <Label htmlFor="add-wine" className="text-md">Agregar botella de vino</Label>
               </div>
               <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Verificación de Edad</AlertDialogTitle>
                    <AlertDialogDescription>
                        La venta de alcohol es exclusiva para mayores de edad. ¿Deseas continuar?
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setAddWine(false)}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={() => {
                        setAddWine(true);
                        setIsAlertOpen(false);
                    }}>Continuar</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialog>
              <Separator />


              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-md" style={{ color: '#c4b282' }}>
                    <Users className="h-5 w-5" />
                    <span className="font-medium">Sirve para {board.serving} personas</span>
                </div>
                <Badge style={{ backgroundColor: '#c5b282', color: 'white' }} className="capitalize text-sm">{board.line}</Badge>
              </div>

               <Button size="lg" className="w-full md:w-auto shadow-md hover:shadow-lg transition-shadow" asChild>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <Send className="mr-2 h-4 w-4" />
                  Solicitar Cotización
                </a>
              </Button>
              
                <div className="space-y-4 pt-4">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-md mx-auto"
                    >
                        <CarouselContent>
                            {fullTestimonials.map((testimonial) => (
                                <CarouselItem key={testimonial.id}>
                                    <div className="p-1 h-full">
                                        <Card className="p-4 shadow-sm h-full">
                                            <div className="flex items-start gap-4">
                                                <Avatar className="h-12 w-12 flex-shrink-0">
                                                    <AvatarImage src={testimonial.product.image} alt={testimonial.product.name} />
                                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <div className="flex-grow">
                                                    <div className="flex items-center justify-between">
                                                        <p className="font-semibold text-sm">{testimonial.name}</p>
                                                        <div className="flex items-center gap-0.5">
                                                            {Array.from({ length: 5 }).map((_, i) => (
                                                                <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                     <p className="text-sm text-muted-foreground mt-1">
                                                      "{testimonial.comment[0]}
                                                      <span className="font-bold" style={{ color: '#c4b282' }}>{testimonial.comment[1]}</span>
                                                      {testimonial.comment[2]}"
                                                    </p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="-left-4" />
                        <CarouselNext className="-right-4" />
                    </Carousel>
                </div>


            </div>
          </div>
        </div>

        <section id="related-products" className="w-full py-12 mt-8 bg-secondary">
            <div className="container">
                <h2 className="text-3xl font-normal tracking-tighter sm:text-4xl text-center mb-12">También te puede interesar</h2>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-6xl mx-auto"
                >
                    <CarouselContent>
                        {relatedProducts.map(relatedBoard => (
                        <CarouselItem key={relatedBoard.id} className="basis-1/2 lg:basis-1/4">
                            <div className="p-2">
                                <Link href={`/product/${relatedBoard.id}`} className="block h-full">
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
                                              <div className="flex items-center justify-between mt-auto">
                                                <div className="flex items-center gap-2 text-sm" style={{ color: '#c4b282' }}>
                                                    <Users className="h-4 w-4" />
                                                    <span className="font-medium">{relatedBoard.serving}</span>
                                                </div>
                                                <Badge style={{ backgroundColor: '#c5b282', color: 'white' }} className="capitalize text-xs">
                                                  {relatedBoard.line === 'Tablas Premium' ? <Crown className="h-3 w-3 mr-1" /> : <Box className="h-3 w-3 mr-1" />}
                                                  {relatedBoard.line === 'Tablas Premium' ? 'Tablas' : relatedBoard.line}
                                                </Badge>
                                              </div>
                                          )}
                                        </CardContent>
                                    </Card>
                                </Link>
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
