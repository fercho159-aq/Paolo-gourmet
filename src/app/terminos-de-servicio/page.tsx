
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Logo } from '@/components/logo';

function Header() {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Logo />
          <nav className="ml-auto flex items-center space-x-1">
            <Button variant="ghost" asChild className="hover:bg-transparent hover:underline underline-offset-4">
                <Link href="/">Inicio</Link>
            </Button>
            <Button variant="ghost" asChild className="hover:bg-transparent hover:underline underline-offset-4">
                <Link href="/nosotros">Nosotros</Link>
            </Button>
            <Button variant="ghost" asChild className="hover:bg-transparent hover:underline underline-offset-4">
                <Link href="/#premium-boards">Productos</Link>
            </Button>
            <Button variant="ghost" asChild className="hover:bg-transparent hover:underline underline-offset-4">
                <Link href="/nosotros#faq">Preguntas Frecuentes</Link>
            </Button>
            <Button variant="ghost" asChild className="hover:bg-transparent hover:underline underline-offset-4">
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
            <div className="container flex items-center justify-between">
                <Logo />
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center space-x-4">
                        <Link href="/politicas-de-privacidad" className="text-white hover:underline text-sm">Política de privacidad</Link>
                        <Link href="/terminos-de-servicio" className="text-white hover:underline text-sm">Términos de servicio</Link>
                    </div>
                    <p className="text-sm text-white text-center">&copy; 2025 paolo gourmet. Todos los derechos reservados.</p>
                </div>
                <div className="w-12"></div>
            </div>
        </footer>
    );
}

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
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
            Correo electrónico: hola@paologourmet.com.mx
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
