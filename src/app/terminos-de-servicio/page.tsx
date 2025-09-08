
'use client';

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
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown, Box, Instagram, Facebook } from 'lucide-react';

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
                  <Link href="/nosotros">Nosotros</Link>              </Button>
  
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

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="sticky top-0 z-50">
        <div style={{ backgroundColor: '#c4b282' }} className="py-2 text-center text-xs md:text-sm text-white">
            <p>Envíos gratis en CDMX - El pedido necesita <span className="font-bold">un día mínimo</span> de anticipación.</p>
        </div>
        <Header />
      </div>
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="prose prose-stone mx-auto max-w-4xl dark:prose-invert">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">Términos de Servicio</h1>
          <p className="text-muted-foreground">Última actualización: 24 de julio de 2024</p>

          <p>
            Estos Términos de Servicio rigen su uso del sitio web ubicado en [URL de su sitio web] y cualquier servicio relacionado proporcionado por paolo gourmet.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">1. Aceptación de los Términos</h2>
          <p>
            Al acceder y utilizar nuestro sitio web, usted acepta y se compromete a cumplir con estos Términos de Servicio y nuestra Política de Privacidad. Si no está de acuerdo con estos términos, no debe acceder ni utilizar nuestro sitio web.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">2. Pedidos y Pagos</h2>
          <p>
            Todos los pedidos están sujetos a disponibilidad y a nuestra aceptación. Nos reservamos el derecho de rechazar cualquier pedido. Para completar un pedido, debe proporcionar información de contacto y pago precisa y completa. Los precios de nuestros productos están sujetos a cambios sin previo aviso.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">3. Entregas</h2>
          <p>
            Realizamos entregas dentro de la Ciudad de México. Es responsabilidad del cliente proporcionar una dirección de entrega correcta y asegurarse de que haya alguien disponible para recibir el pedido. No nos hacemos responsables de los retrasos en la entrega por causas ajenas a nuestro control.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">4. Cancelaciones y Reembolsos</h2>
          <p>
            Debido a la naturaleza perecedera de nuestros productos, las cancelaciones deben realizarse con al menos 48 horas de antelación a la fecha de entrega programada. No se ofrecerán reembolsos por cancelaciones tardías. Si recibe un producto dañado o incorrecto, por favor contáctenos inmediatamente.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">5. Propiedad Intelectual</h2>
          <p>
            Todo el contenido de este sitio web, incluyendo texto, gráficos, logos, imágenes y software, es propiedad de paolo gourmet o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual. No puede reproducir, modificar, distribuir ni utilizar nuestro contenido sin nuestro permiso expreso por escrito.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">6. Limitación de Responsabilidad</h2>
          <p>
            En la medida máxima permitida por la ley, paolo gourmet no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la incapacidad de usar nuestro sitio web o productos.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">7. Modificaciones de los Términos</h2>
          <p>
            Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Su uso continuado del sitio después de cualquier cambio constitutes su aceptación de los nuevos términos.
          </p>
          
          <h2 className="mt-8 text-2xl font-semibold">8. Ley Aplicable</h2>
          <p>
            Estos Términos de Servicio se regirán e interpretarán de acuerdo con las leyes de México.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">9. Contacto</h2>
          <p>
            Si tiene alguna pregunta sobre estos Términos de Servicio, puede contactarnos en:
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
