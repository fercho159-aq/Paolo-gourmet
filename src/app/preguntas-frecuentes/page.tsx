
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Truck, Clock, Award, Users, Menu, Box, ChevronDown, Instagram, Facebook } from 'lucide-react';
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


function CuttingBoardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 8h.01" />
      <path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M22 10a2 2 0 0 0-2-2m0 0a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z" />
    </svg>
  );
}

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
        { href: "/#premium-boards", label: "Tablas Premium", icon: <CuttingBoardIcon className="h-4 w-4" /> },
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
                    <Link href="/#premium-boards" className="flex items-center gap-2"><CuttingBoardIcon className="h-4 w-4" />Tablas Premium</Link>
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

const Highlight = ({ children }: { children: React.ReactNode }) => (
    <span className="font-bold" style={{ color: '#c5b282' }}>{children}</span>
);

const faqItems = [
    {
      value: "item-1",
      question: "¿Cuáles son las zonas de entrega y los costos?",
      answer: <>Cubrimos <Highlight>toda la Ciudad de México</Highlight>. El costo de envío varía según la zona: Zona Céntrica (Álvaro Obregón, Azcapotzalco, Benito Juárez, Coyoacán, Cuauhtémoc, GAM, Iztacalco, Iztapalapa, Miguel Hidalgo, Venustiano Carranza) tiene un <Highlight>costo de $99 MXN</Highlight>. Para la Zona Extendida (Cuajimalpa, Magdalena Contreras, Milpa Alta, Tláhuac, Tlalpan, Xochimilco) el costo es de $150 MXN.</>,
      icon: <Truck className="h-5 w-5 text-primary" />
    },
    {
      value: "item-2",
      question: "¿Con cuánto tiempo de anticipación debo hacer mi pedido?",
      answer: <>Para asegurar la frescura y calidad de nuestros ingredientes, todos los pedidos requieren un <Highlight>mínimo de 24 horas</Highlight> de anticipación. Para <Highlight>eventos grandes</Highlight>, te recomendamos contactarnos con al menos una semana de antelación.</>,
      icon: <Clock className="h-5 w-5 text-primary" />
    },
    {
      value: "item-3",
      question: "¿Qué garantía de calidad ofrecen?",
      answer: <>En paolo gourmet, nuestra prioridad es tu <Highlight>satisfacción total</Highlight>. Seleccionamos cuidadosamente cada ingrediente y preparamos tu tabla el mismo día de la entrega para garantizar la <Highlight>máxima frescura</Highlight>. Si por alguna razón no estás satisfecho con tu pedido, por favor contáctanos dentro de las primeras 3 horas de haberlo recibido para encontrar una solución.</>,
      icon: <Award className="h-5 w-5 text-primary" />
    },
    {
      value: "item-4",
      question: "¿Puedo personalizar mi tabla de quesos?",
      answer: <>¡Claro que sí! Ofrecemos <Highlight>opciones personalizadas</Highlight> para eventos a partir de 20 personas. Podemos adaptar las tablas a tus gustos, preferencias o <Highlight>restricciones alimentarias</Highlight>. Contáctanos por WhatsApp o correo electrónico para cotizar un pedido especial.</>,
      icon: <Users className="h-5 w-5 text-primary" />
    }
]

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
        <div className="sticky top-0 z-50">
            <div style={{ backgroundColor: '#c4b282' }} className="py-2 text-center text-xs sm:text-sm text-white">
                <p>Envíos gratis en CDMX - El pedido necesita <span className="font-bold">un día mínimo</span> de anticipación.</p>
            </div>
            <Header />
        </div>
        <main className="flex-grow animate-fade-in-up">
            <section className="w-full py-12 md:py-16 text-white" style={{ backgroundColor: '#c5b282' }}>
                <div className="container px-4 md:px-6 text-center animate-fade-in-up">
                    <h1 className="text-3xl font-normal tracking-tighter sm:text-5xl">Preguntas Frecuentes</h1>
                    <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                        Resolvemos tus dudas para que disfrutes de la mejor experiencia.
                    </p>
                </div>
            </section>
            <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start max-w-6xl mx-auto">
                  <div className="flex flex-col justify-center">
                    <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
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
                            width={300}
                            height={400}
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

