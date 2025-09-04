
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import type { CheeseBoard } from '@/lib/data';
import { Users } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay"

export default function CheeseBoardCarousel({ boards }: { boards: CheeseBoard[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  )
    
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent>
        {boards.map(board => (
          <CarouselItem key={board.id} className="basis-1/2 lg:basis-1/3">
            <div className="p-2">
              <Link href={`/product/${board.id}`} className="block h-full">
                <Card className="flex flex-col overflow-hidden shadow-md transition-shadow hover:shadow-xl h-full rounded-none">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={board.image}
                      alt={board.name}
                      data-ai-hint={board.dataAiHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4 flex-grow flex flex-col">
                    <CardTitle className="font-headline text-xl mb-2">{board.name}</CardTitle>
                    {board.serving && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-auto">
                          <Users className="h-4 w-4" />
                          <span>{board.serving} personas</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
