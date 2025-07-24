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
import AiPairingTool from '@/components/ai-pairing-tool';
import CheeseBoardList from '@/components/cheese-board-list';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <nav className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" asChild><a href="#boards">Boards</a></Button>
          <Button variant="ghost" asChild><a href="#ai-tool">Pairing Tool</a></Button>
          <Button variant="ghost" asChild><a href="#contact">Contact</a></Button>
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
        alt="A grand cheese board display"
        data-ai-hint="cheese board"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="font-headline text-5xl font-bold md:text-7xl">Artisanal Cheese Boards</h1>
        <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
          Discover meticulously crafted cheese boards, perfect for any occasion.
        </p>
        <Button size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
          <a href="#boards">Explore Our Boards</a>
        </Button>
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
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied clients and why they love CheeseBoardly.
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
            Custom Orders & Inquiries
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a question or a special request? Fill out the form below to get in touch with us.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex flex-col space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" />
            </div>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">Send Message</Button>
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
        <p className="text-sm text-muted-foreground">&copy; 2024 CheeseBoardly. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a>
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
        <section id="ai-tool" className="py-12 md:py-24 lg:py-32">
          <div className="container">
            <AiPairingTool />
          </div>
        </section>
        <Separator />
        <section id="boards" className="py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Our Cheese Boards</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our collection of curated cheese boards. Use the search to find the perfect one for your taste.
              </p>
            </div>
            <CheeseBoardList />
          </div>
        </section>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
