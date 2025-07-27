'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cheeseBoards } from '@/lib/data';
import { Users, Leaf, Grape, Wheat, Search } from 'lucide-react';

export default function CheeseBoardList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBoards = useMemo(() => {
    if (!searchTerm) return cheeseBoards;
    return cheeseBoards.filter(board => 
      board.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      board.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      board.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <div className="space-y-8">
      <div className="relative mx-auto max-w-lg">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar tablas por nombre, ingrediente o tema..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10"
        />
      </div>
      
      {filteredBoards.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBoards.map(board => (
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
                  <CardTitle className="font-headline text-2xl">{board.name}</CardTitle>
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
              <CardFooter className="p-6 pt-0 flex justify-between items-end bg-secondary/50">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Sirve para {board.serving} personas</span>
                </div>
                <div className="flex flex-wrap gap-1 justify-end min-h-[4.5rem] items-end">
                    {board.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="secondary" className="capitalize">{tag}</Badge>
                    ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No se encontraron tablas de queso para "{searchTerm}".</p>
            <p className="mt-2 text-sm">¡Intenta con otro término de búsqueda!</p>
        </div>
      )}
    </div>
  );
}
