
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Truck, MapPin, HelpCircle, Clock, Award, Users } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 4H12a4 4 0 0 0-4 4v4" />
      <path d="M12 20V12" />
      <path d="M12 12H8" />
      <path d="M20 8a4 4 0 0 1-4 4h-4" />
    </svg>
  );
}

function Header() {
    return (
      <header className="sticky top-0 z-50 w-full border-b" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container flex h-16 items-center">
          <Logo />
          <nav className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/">Inicio</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/#premium-boards">Productos</Link>
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

const faqItems = [
    {
      value: "item-1",
      question: "¿Cuáles son las zonas de entrega y los costos?",
      answer: "Cubrimos toda la Ciudad de México. El costo de envío varía según la zona: Zona Céntrica (Álvaro Obregón, Azcapotzalco, Benito Juárez, Coyoacán, Cuauhtémoc, GAM, Iztacalco, Iztapalapa, Miguel Hidalgo, Venustiano Carranza) tiene un costo de $99 MXN. Para la Zona Extendida (Cuajimalpa, Magdalena Contreras, Milpa Alta, Tláhuac, Tlalpan, Xochimilco) el costo es de $150 MXN.",
      icon: <Truck className="h-5 w-5 text-primary" />
    },
    {
      value: "item-2",
      question: "¿Con cuánto tiempo de anticipación debo hacer mi pedido?",
      answer: "Para asegurar la frescura y calidad de nuestros ingredientes, todos los pedidos requieren un mínimo de 24 horas de anticipación. Para eventos grandes, te recomendamos contactarnos con al menos una semana de antelación.",
      icon: <Clock className="h-5 w-5 text-primary" />
    },
    {
      value: "item-3",
      question: "¿Qué garantía de calidad ofrecen?",
      answer: "En paolo gourmet, nuestra prioridad es tu satisfacción. Seleccionamos cuidadosamente cada ingrediente y preparamos tu tabla el mismo día de la entrega para garantizar la máxima frescura. Si por alguna razón no estás satisfecho con tu pedido, por favor contáctanos dentro de las primeras 3 horas de haberlo recibido para encontrar una solución.",
      icon: <Award className="h-5 w-5 text-primary" />
    },
    {
      value: "item-4",
      question: "¿Puedo personalizar mi tabla de quesos?",
      answer: "¡Claro que sí! Ofrecemos opciones personalizadas para eventos a partir de 20 personas. Podemos adaptar las tablas a tus gustos, preferencias o restricciones alimentarias. Contáctanos por WhatsApp o correo electrónico para cotizar un pedido especial.",
      icon: <Users className="h-5 w-5 text-primary" />
    }
  ]

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
        <div className="sticky top-0 z-50">
            <div style={{ backgroundColor: '#dcd0b3' }} className="py-2 text-center text-sm text-foreground">
                <p>Envíos gratis en CDMX - El pedido necesita un día mínimo de anticipación.</p>
            </div>
            <Header />
        </div>
        <main className="flex-grow animate-fade-in-up">
            <section id="about" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="flex flex-col justify-center space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nosotros</h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            En paolo gourmet, creemos que el queso es más que un alimento, es una experiencia. Nuestra misión es seleccionar los mejores quesos artesanales y combinarlos con los acompañamientos perfectos para crear tablas inolvidables que unen a las personas.
                            </p>
                        </div>
                        <div className="w-full aspect-[9/16] max-w-sm mx-auto">
                            <video
                                src="/Video/0904.mp4" 
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                  <HelpCircle className="h-12 w-12 text-primary" />
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Preguntas Frecuentes</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Resolvemos tus dudas para que disfrutes de la mejor experiencia.
                  </p>
                </div>
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center max-w-6xl mx-auto">
                  <div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item) => (
                             <AccordionItem key={item.value} value={item.value}>
                                <AccordionTrigger>
                                    <div className="flex items-center gap-4">
                                        {item.icon}
                                        <span className="text-left">{item.question}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                             </AccordionItem>
                        ))}
                    </Accordion>
                  </div>
                   <div className="w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/Imagen/Galeria/IMG_0852.jpg"
                            alt="Tabla de quesos en un evento"
                            width={600}
                            height={450}
                            className="object-cover"
                            data-ai-hint="cheese board event"
                        />
                   </div>
                </div>
              </div>
            </section>
        </main>
        <Footer />
    </div>
  );
}
