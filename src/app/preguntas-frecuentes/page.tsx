
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Truck, HelpCircle, Clock, Award, Users, Menu, Crown, Box, ChevronDown, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


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
                                <Link href={link.href} className="flex items-center gap-2 text-base text-muted-foreground hover:text-primary">
                                    {link.icon}
                                    {link.label}
                                </Link>
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
                    <Link href="/#premium-boards" className="flex items-center gap-2"><Crown className="h-4 w-4" />Tablas Premium</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                    <Link href="/#cajas-boards" className="flex items-center gap-2"><Box className="h-4 w-4" />Cajas</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>

                <Button variant="ghost" asChild className="hover:bg-transparent hover:underline underline-offset-4">
                    <Link href="/preguntas-frecuentes">Preguntas Frecuentes</Link>
                </Button>

                <Button variant="ghost" asChild className="hover:bg-transparent hover:underline underline-offset-4">
                    <a href="/#contact">Contacto</a>
                </Button>
            </nav>
            )}
        </div>
        </header>
    );
}
  
function Footer() {
    return (
        <footer className="w-full text-white py-6" style={{ backgroundColor: '#c5b282' }}>
            <div className="container flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col items-center w-full md:w-auto md:items-start">
                     <div className="mb-4 md:mb-0">
                        <Logo />
                    </div>
                </div>
                <div className="flex md:hidden flex-col items-center w-full mb-4">
                     <div className="flex items-center space-x-6">
                        <a href="https://www.instagram.com/paolo.gourmet/" target="_blank" rel="noopener noreferrer"><Instagram style={{ color: '#ffffff' }} className="h-6 w-6" /></a>
                        <a href="https://www.facebook.com/people/Tablas-Paolo-Gourmet/61578410386269/" target="_blank" rel="noopener noreferrer"><Facebook style={{ color: '#ffffff' }} className="h-6 w-6" /></a>
                        <a href="https://www.tiktok.com/@paolo.gourmet?_t=ZS-8zSIPIt2AER&_r=1" target="_blank" rel="noopener noreferrer"><TikTokIcon style={{ color: '#ffffff' }} className="h-6 w-6" /></a>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-center gap-2 text-center">
                    <div className="flex items-center space-x-4">
                        <Link href="/politicas-de-privacidad" className="text-white hover:underline text-sm">Política de privacidad</Link>
                        <Link href="/terminos-de-servicio" className="text-white hover:underline text-sm">Términos de servicio</Link>
                    </div>
                    <p className="text-sm text-white">&copy; 2025 paolo gourmet. Todos los derechos reservados.</p>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                     <a href="https://www.instagram.com/paolo.gourmet/" target="_blank" rel="noopener noreferrer"><Instagram style={{ color: '#ffffff' }} className="h-6 w-6" /></a>
                    <a href="https://www.facebook.com/people/Tablas-Paolo-Gourmet/61578410386269/" target="_blank" rel="noopener noreferrer"><Facebook style={{ color: '#ffffff' }} className="h-6 w-6" /></a>
                    <a href="https://www.tiktok.com/@paolo.gourmet?_t=ZS-8zSIPIt2AER&_r=1" target="_blank" rel="noopener noreferrer"><TikTokIcon style={{ color: '#ffffff' }} className="h-6 w-6" /></a>
                </div>
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

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) { return ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="currentColor" {...props}> <path d="M22.86,8.23H20.2V17.5a2.53,2.53,0,1,1-2.52-2.52,2.52,2.52,0,0,1,1.89.84l1.89-1.63a5,5,0,1,0-4.3,5.43V5.75A2.48,2.48,0,0,1,17.65,3h2.64V0H17.65a5.13,5.13,0,0,0-5.13,5.13V17.4a5.21,5.21,0,1,0,5.21,5.21,5.16,5.16,0,0,0-1.38-.2V20a2.58,2.58,0,0,1,1.38.36,2.64,2.64,0,0,1,0-5.27V10.75h2.66Z"/> </svg> ); }


export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
        <div className="sticky top-0 z-50">
            <div style={{ backgroundColor: '#dcd0b3' }} className="py-2 text-center text-xs sm:text-sm text-foreground">
                <p>Envíos gratis en CDMX - El pedido necesita un día mínimo de anticipación.</p>
            </div>
            <Header />
        </div>
        <main className="flex-grow animate-fade-in-up">
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
                   <div className="flex justify-center items-center">
                        <Image
                            src="/Imagen/Galeria/IMG_0852.jpg"
                            alt="Tabla de quesos en un evento"
                            width={150}
                            height={112}
                            className="object-cover rounded-lg shadow-lg"
                            data-ai-hint="cheese board event"
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
