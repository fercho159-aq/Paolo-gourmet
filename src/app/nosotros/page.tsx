
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
        <footer className="w-full bg-blue-900 text-white py-6">
        <div className="container flex flex-col items-center gap-4">
            <Logo />
            <div className="flex items-center space-x-4">
                <Link href="/politicas-de-privacidad" className="text-gray-400 hover:text-white text-sm">Política de privacidad</Link>
                <Link href="/terminos-de-servicio" className="text-gray-400 hover:text-white text-sm">Términos de servicio</Link>
            </div>
            <p className="text-sm text-white text-center">&copy; 2025 paolo gourmet. Todos los derechos reservados.</p>
        </div>
        </footer>
    );
}

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
        <div className="sticky top-0 z-50">
            <div style={{ backgroundColor: '#c7c7c7' }} className="bg-blue-900 py-2 text-center text-sm text-white">
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
        </main>
        <Footer />
    </div>
  );
}
