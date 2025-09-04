
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Truck, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

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

export default function AboutUsPage() {
  const centralDelegations = [
    "Álvaro Obregón", "Azcapotzalco", "Benito Juárez", "Coyoacán", 
    "Cuauhtémoc", "Gustavo A. Madero", "Iztacalco", "Iztapalapa", 
    "Miguel Hidalgo", "Venustiano Carranza"
  ];
  const extendedDelegations = [
    "Cuajimalpa", "Magdalena Contreras", "Milpa Alta", 
    "Tláhuac", "Tlalpan", "Xochimilco"
  ];

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
            <section id="delivery-zones" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                  <Truck className="h-12 w-12 text-primary" />
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestras Zonas de Entrega</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Cubrimos toda la Ciudad de México. Consulta nuestros costos de envío por delegación.
                  </p>
                </div>
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
                  <div className="w-full h-[400px] lg:h-full rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240863.02196947753!2d-99.29019295116788!3d19.39067941919934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db3a9c0d%3A0x6b2b350c4f8339a3!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1689886400000"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="flex flex-col gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <MapPin className="text-primary" />
                          Zona Céntrica - $99 MXN
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-muted-foreground">
                          {centralDelegations.map(delegation => <li key={delegation}>{delegation}</li>)}
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <MapPin className="text-primary" />
                           Zona Extendida - $150 MXN
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-muted-foreground">
                           {extendedDelegations.map(delegation => <li key={delegation}>{delegation}</li>)}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>
        </main>
        <Footer />
    </div>
  );
}
