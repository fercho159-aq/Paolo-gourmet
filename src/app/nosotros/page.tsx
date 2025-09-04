
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';

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
        <footer className="w-full bg-secondary py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <Logo />
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
            <p className="text-sm text-muted-foreground">&copy; 2024 paolo gourmet. Todos los derechos reservados.</p>
            <div className="flex items-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">Política de privacidad</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Términos de servicio</a>
            </div>
        </div>
        </footer>
    );
}

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
        <div className="sticky top-0 z-50">
            <div style={{ backgroundColor: '#c7c7c7' }} className="py-2 text-center text-sm text-secondary-foreground">
                <p>Envíos gratis en CDMX - El pedido necesita un día mínimo de anticipación.</p>
            </div>
            <Header />
        </div>
        <main className="flex-grow">
            <section id="about" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="flex flex-col justify-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nosotros</h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        En paolo gourmet, creemos que el queso es más que un alimento, es una experiencia. Nuestra misión es seleccionar los mejores quesos artesanales y combinarlos con los acompañamientos perfectos para crear tablas inolvidables que unen a las personas.
                        </p>
                        <div className="flex justify-start gap-4 pt-4">
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
                    <Image
                        src="/Imagen/Home/IMG_1199.jpg"
                        alt="El equipo de paolo gourmet preparando tablas de queso"
                        data-ai-hint="equipo personas felices"
                        width={555}
                        height={369}
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    />
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
  );
}
