import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Quote, Users, Mail, Leaf, Grape, Wheat } from 'lucide-react';
import { Logo } from '@/components/logo';
import { cheeseBoards, testimonials } from '@/lib/data';
import CheeseBoardList from '@/components/cheese-board-list';

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
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full">
      <Image
        src="https://placehold.co/1600x900.png"
        alt="Una gran exhibición de tablas de queso"
        data-ai-hint="tabla de quesos"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="font-headline text-5xl font-bold md:text-7xl">Tablas de Queso Artesanales</h1>
        <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
          Descubre tablas de queso meticulosamente elaboradas, perfectas para cualquier ocasión.
        </p>
        <Button size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
          <a href="#boards">Explora Nuestras Tablas</a>
        </Button>
      </div>
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
    { src: "https://placehold.co/600x400.png", alt: "Detalle de una tabla de quesos", hint: "primer plano queso", className: "col-span-2 row-span-1 md:col-span-1" },
    { src: "https://placehold.co/600x800.png", alt: "Gente disfrutando de las tablas de queso en un evento", hint: "amigos comiendo", className: "col-span-1 row-span-1 md:row-span-2" },
    { src: "https://placehold.co/600x400.png", alt: "Una tabla de quesos rústica con vino", hint: "queso vino", className: "col-span-1 row-span-1" },
    { src: "https://placehold.co/600x400.png", alt: "Tabla de quesos temática de postre", hint: "tabla de postres", className: "col-span-1 row-span-1" },
    { src: "https://placehold.co/600x400.png", alt: "Tabla de celebración grande", hint: "fiesta tabla grande", className: "col-span-2 row-span-1" },
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
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-fr gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className={`overflow-hidden rounded-xl ${image.className}`}>
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.hint}
                width={600}
                height={400}
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
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Lo que dicen nuestros clientes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Escucha a nuestros clientes satisfechos y por qué aman paolo gourmet.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
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
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Pedidos Personalizados y Consultas
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            ¿Tienes alguna pregunta o una solicitud especial? Rellena el siguiente formulario para ponerte en contacto con nosotros.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex flex-col space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" placeholder="Escribe tu nombre" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" placeholder="Escribe tu correo electrónico" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea id="message" placeholder="Escribe tu mensaje" className="min-h-[100px]" />
            </div>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">Enviar mensaje</Button>
          </form>
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
                Explora nuestra colección de tablas de queso seleccionadas. Usa la búsqueda para encontrar la perfecta para tu gusto.
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
