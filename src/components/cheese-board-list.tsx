'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cheeseBoards } from '@/lib/data';
import { Users, Leaf, Grape, Wheat } from 'lucide-react';

export default function CheeseBoardList() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cheeseBoards.map(board => (
          <Card key={board.id} className="flex flex-col overflow-hidden shadow-md transition-shadow hover:shadow-xl h-full">
            <CardHeader className="p-0">
              <div className="relative h-60 w-full">
                <Image
                  src={board.image}
                  alt={board.name}
                  data-ai-hint={board.dataAiHint}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <CardTitle className="font-body text-2xl">{board.name}</CardTitle>
                <CardDescription className="mt-2">{board.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-6 pt-0">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold flex items-center gap-2"><Leaf className="h-4 w-4 text-primary" />Quesos</h4>
                  <p className="text-sm text-muted-foreground">{board.cheeses.join(', ')}</p>
                </div>
                <div>
                  <h4 className="font-semibold flex items-center gap-2"><Grape className="h-4 w-4 text-primary" />Acompañamientos</h4>
                  <p className="text-sm text-muted-foreground">{board.accompaniments.join(', ')}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between items-center bg-secondary/50">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Users className="h-4 w-4 text-primary" />
                <span>Sirve para {board.serving} personas</span>
              </div>
              <div className="flex flex-wrap gap-1 justify-end min-h-[4.5rem] items-center">
                  {board.tags.slice(0, 2).map(tag => (
                      <Badge key={tag} variant="secondary" className="capitalize">{tag}</Badge>
                  ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
