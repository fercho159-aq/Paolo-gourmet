
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Quote, Users, Mail, Leaf, Grape, Phone, MapPin, Instagram, Facebook, Menu, Star, Crown, Box } from 'lucide-react';
import { Logo } from '@/components/logo';
import { cheeseBoards, testimonials } from '@/lib/data';
import CheeseBoardCarousel from '@/components/cheese-board-carousel';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';


function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="currentColor" {...props}>
      <path d="M22.86,8.23H20.2V17.5a2.53,2.53,0,1,1-2.52-2.52,2.52,2.52,0,0,1,1.89.84l1.89-1.63a5,5,0,1,0-4.3,5.43V5.75A2.48,2.48,0,0,1,17.65,3h2.64V0H17.65a5.13,5.13,0,0,0-5.13,5.13V17.4a5.21,5.21,0,1,0,5.21,5.21,5.16,5.16,0,0,0-1.38-.2V20a2.58,2.58,0,0,1,1.38.36,2.64,2.64,0,0,1,0-5.27V10.75h2.66Z"/>
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

function Header() {
  const isMobile = useIsMobile();

  const productLinks = [
      { href: "#premium-boards", label: "Tablas Premium", icon: <Crown className="h-4 w-4" /> },
      { href: "#cajas-boards", label: "Cajas", icon: <Box className="h-4 w-4" /> },
  ]

  const navLinks = [
    { href: "/nosotros", label: "Nosotros" },
    { href: "/preguntas-frecuentes", label: "Preguntas Frecuentes" },
    { href: "#contact", label: "Contacto" },
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
              <nav className="flex flex-col gap-4 mt-8">
                 <SheetClose asChild>
                    <Link href="/" className="text-lg font-medium hover:underline underline-offset-4">
                      Inicio
                    </Link>
                  </SheetClose>
                  {navLinks.map(link => (
                      <SheetClose asChild key={link.href}>
                        <Link href={link.href} className="text-lg font-medium hover:underline underline-offset-4">
                            {link.label}
                        </Link>
                      </SheetClose>
                  ))}
                  
                  <p className="text-lg font-medium">Productos</p>
                  <div className="flex flex-col gap-2 pl-4">
                    {productLinks.map(link => (
                         <SheetClose asChild key={link.href}>
                            <a href={link.href} className="flex items-center gap-2 text-base text-muted-foreground hover:text-primary">
                                {link.icon}
                                {link.label}
                            </a>
                        </SheetClose>
                    ))}
                  </div>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="ml-auto flex items-center space-x-1">
             <Button variant="ghost" asChild className="hover:bg-transparent hover:underline underline-offset-4">
                    <Link href="/">Inicio</Link>
                </Button>
            <Button variant="ghost" asChild className="hover:bg-transparent hover:underline underline-offset-4">
                <Link href="/nosotros">Nosotros</Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hover:bg-transparent hover:underline underline-offset-4">
                  Productos <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <a href="#premium-boards" className="flex items-center gap-2"><Crown className="h-4 w-4" />Tablas Premium</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#cajas-boards" className="flex items-center gap-2"><Box className="h-4 w-4" />Cajas</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" asChild className="hover:bg-transparent hover:underline underline-offset-4">
                <Link href="/preguntas-frecuentes">Preguntas Frecuentes</Link>
            </Button>

            <Button variant="ghost" asChild className="hover:bg-transparent hover:underline underline-offset-4">
                <a href="#contact">Contacto</a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}


function Hero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
      <video
        src="/Video/0904.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-start justify-center text-left text-white container">
        <h1 className="font-headline text-5xl font-extrabold md:text-7xl">Tablas de Queso Artesanales</h1>
        <p className="mt-4 max-w-2xl text-lg text-white font-semibold md:text-xl">
          Descubre tablas de queso meticulosamente elaboradas, perfectas para cualquier ocasión.
        </p>
        <Button size="lg" className="mt-8 text-white" asChild style={{ backgroundColor: '#c5b282' }}>
          <a href="#premium-boards">Explora Nuestras Tablas</a>
        </Button>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Lo que dicen nuestros clientes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Clientes satisfechos en cada rincón de la ciudad.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card className="h-full shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-4">
                            <Quote className="h-8 w-8 text-primary" />
                            <div>
                                <p className="text-sm font-bold">{testimonial.name}</p>
                                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                            ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">{testimonial.comment}</p>
                    </CardContent>
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
  );
}

function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="space-y-3 mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Pedidos Personalizados y Consultas
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            ¿Tienes alguna pregunta o una solicitud especial? Contáctanos directamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="bg-secondary/50 p-6 rounded-lg space-y-4">
              <h3 className="text-xl font-bold">Información de Contacto</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+52 55 1234 5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:hola@paologourmet.com.mx" className="hover:underline">hola@paologourmet.com.mx</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Ciudad de México, México</span>
                </div>
              </div>
                <div className="flex items-center gap-4 pt-4">
                    <a href="https://www.instagram.com/paolo.gourmet/" target="_blank" rel="noopener noreferrer">
                        <Instagram style={{ color: '#c5b282' }} className="h-6 w-6" />
                    </a>
                     <a href="https://www.facebook.com/people/Tablas-Paolo-Gourmet/61578410386269/" target="_blank" rel="noopener noreferrer">
                        <Facebook style={{ color: '#c5b282' }} className="h-6 w-6" />
                    </a>
                     <a href="https://www.tiktok.com/@paolo.gourmet?_t=ZS-8zSIPIt2AER&_r=1" target="_blank" rel="noopener noreferrer">
                        <TikTokIcon style={{ color: '#c5b282' }} className="h-6 w-6" />
                    </a>
                </div>
            </div>
            <div className="w-full h-80 lg:h-full rounded-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.527633198088!2d-99.1691350845686!3d19.43260778688439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8d2b7a8a02d%3A0x8a2f4a4a8a2f4a4a!2sMonumento%20a%20la%20Revoluci%C3%B3n!5e0!3m2!1ses-419!2smx!4v1678886400000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-48 h-48">
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Footer() {
    return (
        <footer className="w-full text-white py-6" style={{ backgroundColor: '#c5b282' }}>
            <div className="container flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <Logo />
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                    <div className="flex items-center space-x-4">
                        <Link href="/politicas-de-privacidad" className="text-white hover:underline text-sm">Política de privacidad</Link>
                        <Link href="/terminos-de-servicio" className="text-white hover:underline text-sm">Términos de servicio</Link>
                    </div>
                    <p className="text-sm text-white">&copy; 2025 paolo gourmet. Todos los derechos reservados.</p>
                </div>
                <div className="w-12 hidden md:block"></div>
            </div>
        </footer>
    );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/525512345678"
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

export default function Home() {
  const premiumBoards = cheeseBoards.filter(b => b.line === 'Tablas Premium');
  const cajasBoards = cheeseBoards.filter(b => b.line === 'Cajas');

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="sticky top-0 z-50">
        <div style={{ backgroundColor: '#dcd0b3' }} className="py-2 text-center text-sm text-foreground">
            <p>Envíos gratis en CDMX - El pedido necesita un día mínimo de anticipación.</p>
        </div>
        <Header />
      </div>
      
      <main className="animate-fade-in-up">
        <Hero />
        
        <section id="premium-boards" className="py-12">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tablas Premium</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Una experiencia gourmet con quesos premium que te transportará.
              </p>
            </div>
            <CheeseBoardCarousel boards={premiumBoards} />
          </div>
        </section>

        <section id="cajas-boards" className="py-8">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Cajas</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Selecciones equilibradas y deliciosas, perfectas para compartir.
              </p>
            </div>
            <CheeseBoardCarousel boards={cajasBoards} />
          </div>
        </section>

        <section className="relative py-24 text-white bg-cover bg-center bg-fixed bg-events-bg">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container text-center">
            <h3 className="text-2xl font-bold uppercase tracking-wider">DÉJANOS SER PARTE DE TUS EVENTOS</h3>
            <p className="mt-4 max-w-3xl mx-auto">
              Envíanos un mail a <a href="mailto:hola@paologourmet.com.mx" className="underline">hola@paologourmet.com.mx</a> o escríbenos por Whatsapp para cotizarte. Tenemos opciones personalizadas en CDMX a partir de 20 personas.
            </p>
            <Button asChild className="mt-6" style={{ backgroundColor: '#dcd0b3', color: '#000' }}>
              <a href="#contact">Contacto</a>
            </Button>
          </div>
        </section>

        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
