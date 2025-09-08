
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import type { CheeseBoard } from '@/lib/data';
import { Users, Box, Ruler } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay"
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

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
          <CarouselItem key={board.id} className="basis-full md:basis-1/2 lg:basis-1/3">
            <div className="p-2 h-full">
              <Link href={`/product/${board.id}`} className="block h-full">
                <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl h-full">
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
                  <CardTitle className={cn("text-sm mb-2 flex-grow", board.name === "Tabla grande de solo quesos" && "text-destructive")}>
                        {board.name}
                    </CardTitle>
                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2 text-sm" style={{ color: '#c4b282' }}>
                            <Users className="h-4 w-4" />
                            <span className="font-medium">{board.serving}</span>
                        </div>
                        {board.dimensions && (
                            <div className="hidden md:flex items-center gap-2 text-sm" style={{ color: '#c4b282' }}>
                                <Ruler className="h-4 w-4" />
                                <span className="font-medium">{board.dimensions}</span>
                            </div>
                        )}
                        <Badge style={{ backgroundColor: '#c5b282', color: 'white' }} className="capitalize text-xs">
                          {board.line === 'Tablas Premium' ? <CuttingBoardIcon className="h-3 w-3 mr-1" /> : <Box className="h-3 w-3 mr-1" />}
                          {board.line === 'Tablas Premium' ? 'Tablas' : board.line}
                        </Badge>
                      </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
