
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cheeseBoards } from '@/lib/data';

export default function CheeseBoardList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cheeseBoards.map(board => (
        <Card key={board.id} className="flex flex-col overflow-hidden shadow-md transition-shadow hover:shadow-xl">
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
      ))}
    </div>
  );
}

    