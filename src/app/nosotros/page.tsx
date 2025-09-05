
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown, Crown, Box, Instagram, Facebook, Star, Quote } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { testimonials, cheeseBoards, Testimonial } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" {...props}>
      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
    </svg>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479s1.065 2.871 1.213 3.069c.149.198 2.096 3.206 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/525562206020"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 text-white p-4 rounded-full shadow-lg transition-colors"
      style={{ backgroundColor: '#dcd0b3' }}
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8 text-white" />
    </a>
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
        <footer className="w-full text-white py-6" style={{ backgroundColor: '#c5b282' }}>
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

function TestimonialsCarousel() {
    const fullTestimonials = testimonials.map(testimonial => {
        const product = cheeseBoards.find(p => p.id === testimonial.productId) || cheeseBoards[0];
        return { ...testimonial, product };
    });

  return (
    <div className="w-full mt-8">
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
                  <Card className="h-full shadow-lg overflow-hidden">
                    <CardContent className="p-6 flex flex-col justify-center">
                        <div className="flex items-center gap-4">
                           <Avatar className="h-12 w-12 flex-shrink-0">
                                <AvatarImage src={testimonial.product.image} alt={testimonial.product.name} />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                           </Avatar>
                            <div className="flex-grow">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-bold">{testimonial.name}</p>
                                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                                    </div>
                                    <div className="flex items-center gap-0.5 flex-shrink-0">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-foreground/80 italic mt-2">
                                  "{testimonial.comment[0]}
                                  <span className="font-bold" style={{ color: '#c4b282' }}>{testimonial.comment[1]}</span>
                                  {testimonial.comment[2]}"
                                </p>
                            </div>
                        </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4" />
          <CarouselNext className="-right-4" />
        </Carousel>
      </div>
  );
}

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
        <div className="sticky top-0 z-50">
            <div style={{ backgroundColor: '#c4b282' }} className="py-2 text-center text-xs sm:text-sm text-white">
                <p>Envíos gratis en CDMX - <span className="font-bold">un día mínimo</span> de anticipación.</p>
            </div>
            <Header />
        </div>
        <main className="flex-grow">
            <section className="w-full py-12 md:py-16 text-white" style={{ backgroundColor: '#c5b282' }}>
                <div className="container px-4 md:px-6 text-center animate-fade-in-up">
                    <h1 className="text-3xl font-normal tracking-tighter sm:text-5xl">Sobre Paolo Gourmet</h1>
                    <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                        Descubre la pasión y el arte detrás de cada una de nuestras tablas de queso.
                    </p>
                </div>
            </section>
            <section id="about" className="w-full py-12 md:py-24 lg:py-32 animate-fade-in-up">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="flex flex-col justify-center space-y-4">
                            <h2 className="text-3xl font-normal tracking-tighter sm:text-5xl">Nuestra Historia</h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            En paolo gourmet, creemos que el queso es más que un alimento, es una experiencia. Nuestra misión es seleccionar los mejores quesos artesanales y combinarlos con los acompañamientos perfectos para crear tablas inolvidables que unen a las personas.
                            </p>
                            <TestimonialsCarousel />
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-8">
                           <Image
                                src="/Imagen/Galeria/IMG_0818.jpg"
                                alt="El equipo de Paolo Gourmet"
                                width={400}
                                height={300}
                                className="object-cover rounded-xl shadow-lg w-full max-w-sm"
                                data-ai-hint="team portrait"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        <WhatsAppButton />
    </div>
  );
}

    