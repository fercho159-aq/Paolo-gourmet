
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import type { CheeseBoard } from '@/lib/data';

export default function CheeseBoardCarousel({ boards }: { boards: CheeseBoard[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: boards.length > 3,
      }}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent>
        {boards.map(board => (
          <CarouselItem key={board.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-2">
              <Card className="flex flex-col overflow-hidden shadow-md transition-shadow hover:shadow-xl h-full">
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
                   <CardTitle className="font-headline text-xl mb-auto">{board.name}</CardTitle>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                   <Button asChild className="w-full">
                      <Link href={`/product/${board.id}`}>Ver más</Link>
                   </Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

    