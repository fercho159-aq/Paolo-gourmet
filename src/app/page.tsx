

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Quote, Users, Mail, Leaf, Grape, Wheat, Phone, MapPin, Instagram, Facebook, Menu } from 'lucide-react';
import { Logo } from '@/components/logo';
import { cheeseBoards, testimonials } from '@/lib/data';
import CheeseBoardList from '@/components/cheese-board-list';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';


function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="currentColor" {...props}>
      <path d="M14.28.19A.5.5 0 0 1 14.75 0h4.5a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.94.22L13.1 2.28a.5.5 0 0 1-.22-.94L14.28.19zM23.5 9.25a.5.5 0 0 1 .5-.5h4.5a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.94.22l-5.71-8.6a.5.5 0 0 1 .15-.72zM9.25.5a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zM4.5 9.25a.5.5 0 0 1 .5-.5h4.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM0 14.75a.5.5 0 0 1 .5-.5h28a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zM9.75 23.5a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-1 0V24a.5.5 0 0 1 .5-.5zM5 19.25a.5.5 0 0 1 .5-.5h4.5a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5z" />
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

  const navLinks = [
    { href: "#about", label: "Conócenos" },
    { href: "#boards", label: "Tablas" },
    { href: "#gallery", label: "Galería" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a href={link.href} className="text-lg font-medium hover:text-primary">
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="ml-auto flex items-center space-x-4">
            {navLinks.map((link) => (
              <Button variant="ghost" asChild key={link.href}>
                <a href={link.href}>{link.label}</a>
              </Button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}


function Hero() {
  const slides = [
    {
      imgSrc: "https://placehold.co/1600x900.png",
      imgAlt: "Una gran exhibición de tablas de queso",
      imgHint: "tabla de quesos",
      title: "Tablas de Queso Artesanales",
      description: "Descubre tablas de queso meticulosamente elaboradas, perfectas para cualquier ocasión.",
      buttonText: "Explora Nuestras Tablas",
      buttonLink: "#boards"
    },
    {
      imgSrc: "https://placehold.co/1600x900.png",
      imgAlt: "Un primer plano de una tabla de quesos con frutas y nueces",
      imgHint: "primer plano queso fruta",
      title: "Ingredientes Frescos y de Calidad",
      description: "Solo los mejores quesos y acompañamientos para una experiencia gourmet.",
      buttonText: "Ver Ingredientes",
      buttonLink: "#about"
    },
    {
      imgSrc: "https://placehold.co/1600x900.png",
      imgAlt: "Personas disfrutando de una tabla de quesos en una fiesta",
      imgHint: "fiesta tabla de quesos",
      title: "Perfecto para Cualquier Evento",
      description: "Desde reuniones íntimas hasta grandes celebraciones, tenemos la tabla ideal para ti.",
      buttonText: "Contáctanos",
      buttonLink: "#contact"
    }
  ];

  return (
    <section className="relative w-full">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[60vh] min-h-[500px] w-full">
                <Image
                  src={slide.imgSrc}
                  alt={slide.imgAlt}
                  data-ai-hint={slide.imgHint}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                  <h1 className="font-body text-5xl font-bold md:text-7xl">{slide.title}</h1>
                  <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
                    {slide.description}
                  </p>
                  <Button size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href={slide.buttonLink}>{slide.buttonText}</a>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white" />
      </Carousel>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="font-body text-3xl font-bold tracking-tighter sm:text-5xl">Nuestra Pasión por el Queso</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              En paolo gourmet, creemos que el queso es más que un alimento, es una experiencia. Nuestra misión es seleccionar los mejores quesos artesanales de todo el mundo y combinarlos con los acompañamientos perfectos para crear tablas inolvidables que unen a las personas.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Cada tabla está elaborada con amor y atención al detalle, asegurando una aventura gastronómica única en cada bocado. Desde reuniones íntimas hasta grandes celebraciones, estamos aquí para elevar tus momentos especiales.
            </p>
          </div>
          <Image
            src="https://placehold.co/555x299.png"
            alt="El equipo de paolo gourmet preparando tablas de queso"
            data-ai-hint="equipo personas felices"
            width={555}
            height={299}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const galleryImages = [
    { src: "https://placehold.co/400x300.png", alt: "Detalle de una tabla de quesos", hint: "primer plano queso", className: "col-span-1 row-span-1" },
    { src: "https://placehold.co/400x600.png", alt: "Gente disfrutando de las tablas de queso", hint: "amigos comiendo", className: "col-span-1 row-span-2" },
    { src: "https://placehold.co/400x300.png", alt: "Tabla de quesos con vino", hint: "queso vino", className: "col-span-1 row-span-1" },
    { src: "https://placehold.co/400x300.png", alt: "Tabla de quesos de postre", hint: "tabla de postres", className: "col-span-1 row-span-1" },
    { src: "https://placehold.co/400x300.png", alt: "Quesos variados", hint: "quesos variados", className: "col-span-1 row-span-1" },
    { src: "https://placehold.co/400x300.png", alt: "Tabla para un evento", hint: "evento tabla", className: "col-span-1 row-span-1" },
    { src: "https://placehold.co/400x600.png", alt: "Tabla de quesos vertical", hint: "tabla vertical", className: "col-span-1 row-span-2" },
    { src: "https://placehold.co/400x300.png", alt: "Preparando una tabla", hint: "preparando tabla", className: "col-span-1 row-span-1" },
    { src: "https://placehold.co/400x300.png", alt: "Tabla rústica", hint: "tabla rústica", className: "col-span-1 row-span-1" },
    { src: "https://placehold.co/400x300.png", alt: "Maridaje de quesos", hint: "maridaje quesos", className: "col-span-1 row-span-1" },

  ];

  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-body text-3xl font-bold tracking-tighter sm:text-5xl">Nuestra Galería</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Un vistazo a nuestras creaciones y los momentos felices que ayudan a crear.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-fr gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className={`overflow-hidden rounded-xl ${image.className}`}>
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.hint}
                width={400}
                height={300}
                className="aspect-auto object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-body text-3xl font-bold tracking-tighter sm:text-5xl">Llegamos a todas las Alcaldías de la CDMX</h2>
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
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Quote className="h-8 w-8 text-primary" />
                        <div className="grid gap-1">
                          <p className="text-sm font-bold">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
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
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-3 mb-12 text-center">
          <h2 className="font-body text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Pedidos Personalizados y Consultas
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            ¿Tienes alguna pregunta o una solicitud especial? Contáctanos directamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="bg-secondary/50 p-6 rounded-lg space-y-4">
              <h3 className="font-body text-xl font-bold">Información de Contacto</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+52 55 1234 5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>hola@paologourmet.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Ciudad de México, México</span>
                </div>
              </div>
            </div>
             <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="TikTok">
                  <TikTokIcon className="h-6 w-6" />
                </a>
              </Button>
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
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="w-full bg-secondary py-6">
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

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/525512345678"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Separator />
        <section id="boards" className="py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="font-body text-3xl font-bold tracking-tighter sm:text-5xl">Nuestras Tablas de Queso</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explora nuestra colección de tablas de queso seleccionadas.
              </p>
            </div>
            <CheeseBoardList />
          </div>
        </section>
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

    

    