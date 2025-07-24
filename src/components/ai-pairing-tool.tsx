'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { getPairingAction } from '@/app/actions';
import type { CheesePairingOutput } from '@/ai/flows/cheese-pairing-tool';
import { useToast } from "@/hooks/use-toast"
import { Loader2, Sparkles, Wand2 } from 'lucide-react';

const formSchema = z.object({
  flavorPreferences: z.string().min(1, 'Por favor, selecciona una preferencia de sabor.'),
  texturePreferences: z.string().min(1, 'Por favor, selecciona una preferencia de textura.'),
  seasonalFruits: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function AiPairingTool() {
  const [recommendations, setRecommendations] = useState<CheesePairingOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      flavorPreferences: '',
      texturePreferences: '',
      seasonalFruits: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setRecommendations(null);
    const result = await getPairingAction(data);
    setIsLoading(false);

    if (result.error) {
      toast({
        variant: "destructive",
        title: "¡Oh no! Algo salió mal.",
        description: result.error,
      })
    } else {
      setRecommendations(result.data);
    }
  };
  
  const flavorOptions = ['Suave', 'Medio', 'Fuerte', 'Cremoso'];
  const textureOptions = ['Blando', 'Semiblando', 'Firme', 'Desmenuzable'];

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <Wand2 className="mx-auto h-12 w-12 text-primary" />
        <CardTitle className="font-headline text-3xl">Herramienta de Maridaje de Quesos con IA</CardTitle>
        <CardDescription className="text-lg">
          Deja que nuestro sumiller de IA elabore la tabla de quesos perfecta para ti.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Perfil de Sabor</Label>
              <Controller
                name="flavorPreferences"
                control={control}
                render={({ field }) => (
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-2 gap-4">
                    {flavorOptions.map(option => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`flavor-${option}`} />
                        <Label htmlFor={`flavor-${option}`}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
              />
              {errors.flavorPreferences && <p className="text-sm text-destructive">{errors.flavorPreferences.message}</p>}
            </div>
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Preferencia de Textura</Label>
              <Controller
                name="texturePreferences"
                control={control}
                render={({ field }) => (
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-2 gap-4">
                    {textureOptions.map(option => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`texture-${option}`} />
                        <Label htmlFor={`texture-${option}`}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
              />
              {errors.texturePreferences && <p className="text-sm text-destructive">{errors.texturePreferences.message}</p>}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="seasonalFruits" className="text-lg font-semibold">
              Opcional: Frutas de Temporada Disponibles
            </Label>
            <Controller
              name="seasonalFruits"
              control={control}
              render={({ field }) => (
                <Input {...field} id="seasonalFruits" placeholder="ej. higos, uvas, peras" />
              )}
            />
          </div>

          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            Obtener Recomendaciones
          </Button>
        </form>

        {isLoading && (
          <div className="mt-8 text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 text-muted-foreground">Creando tu tabla perfecta...</p>
          </div>
        )}

        {recommendations && (
          <div className="mt-8 space-y-6">
            <h3 className="font-headline text-2xl text-center">Tu Tabla de Quesos Personalizada</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader><CardTitle>Recomendaciones de Quesos</CardTitle></CardHeader>
                <CardContent><p>{recommendations.cheeseRecommendations}</p></CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Sugerencias de Acompañamientos</CardTitle></CardHeader>
                <CardContent><p>{recommendations.accompanimentSuggestions}</p></CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Sugerencias para Servir</CardTitle></CardHeader>
                <CardContent><p>{recommendations.servingSuggestions}</p></CardContent>
              </Card>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
