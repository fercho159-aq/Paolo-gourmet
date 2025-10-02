
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LogoBlanco } from '@/components/logo-blanco';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown, Box, Instagram, Facebook } from 'lucide-react';
import { Logo } from '@/components/logo';

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
  
    if (isMobile === undefined) {
        return (
            <header className="sticky top-0 z-50 w-full border-b" style={{ backgroundColor: '#f5f5f5' }}>
                <div className="container flex h-28 items-center">
                    <Logo />
                </div>
            </header>
        );
    }
    
    return (
      <header className="sticky top-0 z-50 w-full border-b" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container flex h-28 items-center">
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
                          <Link href={link.href} className="text-lg font-medium hover:underline hover:text-[#c4870a] underline-offset-4">
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
                        <a href="https://www.instagram.com/paolo.gourmet/" target="_blank" rel="noopener noreferrer"><Instagram style={{ color: '#c4870a' }} className="h-7 w-7" /></a>
                        <a href="https://www.facebook.com/people/Tablas-Paolo-Gourmet/61578410386269/" target="_blank" rel="noopener noreferrer"><Facebook style={{ color: '#c4870a' }} className="h-7 w-7" /></a>
                        <a href="https://www.tiktok.com/@paolo.gourmet?_t=ZS-8zSIPIt2AER&_r=1" target="_blank" rel="noopener noreferrer"><TikTokIcon style={{ color: '#c4870a' }} className="h-7 w-7" /></a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="ml-auto flex items-center space-x-1">
              <Button variant="ghost" asChild className="hover:bg-transparent hover:underline hover:text-[#c4870a] underline-offset-4">
                  <Link href="/nosotros">Nosotros</Link>
              </Button>
  
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="hover:bg-transparent hover:underline hover:text-[#c4870a] underline-offset-4">
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
  
              <Button variant="ghost" asChild className="hover:bg-transparent hover:underline hover:text-[#c4870a] underline-offset-4">
                  <Link href="/preguntas-frecuentes">Preguntas Frecuentes</Link>
              </Button>
  
              <Button variant="ghost" asChild className="hover:bg-transparent hover:underline hover:text-[#c4870a] underline-offset-4">
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
    
    if (isMobile === undefined) {
        return <footer className="w-full text-white py-6" style={{ backgroundColor: '#c4870a', minHeight: '158px' }}></footer>;
    }

    return (
        <footer className="w-full text-white py-6" style={{ backgroundColor: '#c4870a' }}>
            <div className="container flex flex-col md:flex-row items-center justify-between">
                {isMobile ? (
                    <div className="flex flex-col items-center w-full">
                        <div className="mb-4">
                            <LogoBlanco />
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
                                <LogoBlanco />
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

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
       <div className="sticky top-0 z-50">
        <div style={{ backgroundColor: '#c4870a' }} className="py-2 text-center text-xs md:text-sm text-white">
            <p>Envíos con costo adicional en CDMX. Pedidos con 24 horas de anticipación, antes de las 16:00 hrs.</p>
        </div>
        <Header />
      </div>
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="prose prose-stone mx-auto max-w-4xl dark:prose-invert">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">Política de Privacidad</h1>
          <p className="text-muted-foreground">Última actualización: 24 de julio de 2024</p>

          <p>
            Bienvenido a paolo gourmet. Su privacidad es de suma importancia para nosotros. Esta Política de Privacidad describe cómo recopilamos, usamos, protegemos y, en ciertas circunstancias, compartimos su información personal.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">1. Información que Recopilamos</h2>
          <p>
            Podemos recopilar información personal que usted nos proporciona directamente, como su nombre, dirección de correo electrónico, número de teléfono y detalles de pago cuando realiza un pedido o se comunica con nosotros para una cotización.
          </p>
          <p>
            También recopilamos información automáticamente cuando visita nuestro sitio web, como su dirección IP, tipo de navegador, páginas visitadas y el tiempo de su visita, a través de cookies y tecnologías similares.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">2. Cómo Usamos Su Información</h2>
          <p>
            La información que recopilamos se utiliza para los siguientes propósitos:
          </p>
          <ul>
            <li>Procesar y gestionar sus pedidos y cotizaciones.</li>
            <li>Comunicarnos con usted sobre su pedido o para responder a sus consultas.</li>
            <li>Mejorar nuestro sitio web, productos y servicios.</li>
            <li>Enviar comunicaciones de marketing, si ha optado por recibirlas.</li>
            <li>Cumplir con nuestras obligaciones legales y proteger nuestros derechos.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-semibold">3. Uso de Cookies</h2>
          <p>
            Nuestro sitio web utiliza cookies para mejorar su experiencia de navegación. Las cookies son pequeños archivos de datos que se almacenan en su dispositivo. Utilizamos cookies para recordar sus preferences, analizar el tráfico del sitio y para fines de marketing. Puede configurar su navegador para que rechace las cookies, pero esto puede afectar la funcionalidad de nuestro sitio.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">4. Intercambio de Información</h2>
          <p>
            No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes circunstancias:
          </p>
          <ul>
            <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio (por ejemplo, procesadores de pago, servicios de envío).</li>
            <li>Si es requerido por ley o para responder a un proceso legal.</li>
            <li>Para proteger nuestros derechos, propiedad o seguridad, o los de nuestros clientes.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-semibold">5. Seguridad de los Datos</h2>
          <p>
            Tomamos medidas razonables para proteger su información personal contra pérdida, robo y uso no autorizado. Sin embargo, ningún método de transmisión por Internet o de almacenamiento electrónico es 100% seguro.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">6. Sus Derechos</h2>
          <p>
            Usted tiene derecho a acceder, corregir o eliminar su información personal. También puede oponerse al procesamiento de sus datos para fines de marketing. Para ejercer estos derechos, por favor contáctenos en <a href="mailto:hola@paologourmet.com.mx" className="underline">hola@paologourmet.com.mx</a>.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">7. Cambios a esta Política</h2>
          <p>
            Podemos actualizar esta Política de Privacidad de vez en quando. Le notificaremos sobre cualquier cambio publicando la nueva política en esta página. Le recomendamos que revise esta política periódicamente.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">8. Contacto</h2>
          <p>
            Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactarnos en:
            <br />
            <strong>paolo gourmet</strong>
            <br />
            Correo electrónico: <a href="mailto:hola@paologourmet.com.mx" className="underline">hola@paologourmet.com.mx</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
