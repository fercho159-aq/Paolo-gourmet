
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Quote, Users, Mail, Leaf, Grape, Wheat, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { Logo } from '@/components/logo';
import { cheeseBoards, testimonials } from '@/lib/data';
import CheeseBoardList from '@/components/cheese-board-list';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.59H9.86a2.592 2.592 0 0 1-2.59-2.59V3H4.18v10.14a5.683 5.683 0 0 0 5.68 5.68h.04a5.683 5.683 0 0 0 5.68-5.68V8.75a6.923 6.923 0 0 0 4.33 1.5V6.6s-1.42-.21-2.23-1.27Z" />
    </svg>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <nav className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" asChild><a href="#about">Conócenos</a></Button>
          <Button variant="ghost" asChild><a href="#boards">Tablas</a></Button>
          <Button variant="ghost" asChild><a href="#gallery">Galería</a></Button>
          <Button variant="ghost" asChild><a href="#contact">Contacto</a></Button>
        </nav>
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
                  <h1 className="font-headline text-5xl font-bold md:text-7xl">{slide.title}</h1>
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
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Nuestra Pasión por el Queso</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              En paolo gourmet, creemos que el queso es más que un alimento, es una experiencia. Nuestra misión es seleccionar los mejores quesos artesanales de todo el mundo y combinarlos con los acompañamientos perfectos para crear tablas inolvidables que unen a las personas.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Cada tabla está elaborada con amor y atención al detalle, asegurando una aventura gastronómica única en cada bocado. Desde reuniones íntimas hasta grandes celebraciones, estamos aquí para elevar tus momentos especiales.
            </p>
          </div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="El equipo de paolo gourmet preparando tablas de queso"
            data-ai-hint="equipo personas felices"
            width={600}
            height={400}
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
    { src: "https://placehold.co/400x300.png", alt: "Selección de quesos blandos", hint: "quesos blandos", className: "col-span-1 row-span-1" },
    { src: "https://placehold.co/400x300.png", alt: "Tabla de celebración", hint: "fiesta tabla grande", className: "col-span-1 row-span-1" },
  ];

  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Nuestra Galería</h2>
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
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Llegamos a todas las Alcaldías de la CDMX</h2>
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
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Pedidos Personalizados y Consultas
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            ¿Tienes alguna pregunta o una solicitud especial? Contáctanos directamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="bg-secondary/50 p-6 rounded-lg space-y-4">
              <h3 className="font-headline text-xl font-bold">Información de Contacto</h3>
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
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Nuestras Tablas de Queso</h2>
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
    </div>
  );
}
