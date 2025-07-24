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
  flavorPreferences: z.string().min(1, 'Please select a flavor preference.'),
  texturePreferences: z.string().min(1, 'Please select a texture preference.'),
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
        title: "Oh no! Something went wrong.",
        description: result.error,
      })
    } else {
      setRecommendations(result.data);
    }
  };
  
  const flavorOptions = ['Mild', 'Medium', 'Sharp', 'Creamy'];
  const textureOptions = ['Soft', 'Semi-soft', 'Firm', 'Crumbly'];

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <Wand2 className="mx-auto h-12 w-12 text-primary" />
        <CardTitle className="font-headline text-3xl">AI Cheese Pairing Tool</CardTitle>
        <CardDescription className="text-lg">
          Let our AI sommelier craft the perfect cheese board for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Flavor Profile</Label>
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
              <Label className="text-lg font-semibold">Texture Preference</Label>
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
              Optional: Available Seasonal Fruits
            </Label>
            <Controller
              name="seasonalFruits"
              control={control}
              render={({ field }) => (
                <Input {...field} id="seasonalFruits" placeholder="e.g., figs, grapes, pears" />
              )}
            />
          </div>

          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            Get Recommendations
          </Button>
        </form>

        {isLoading && (
          <div className="mt-8 text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 text-muted-foreground">Crafting your perfect board...</p>
          </div>
        )}

        {recommendations && (
          <div className="mt-8 space-y-6">
            <h3 className="font-headline text-2xl text-center">Your Personalised Cheese Board</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader><CardTitle>Cheese Recommendations</CardTitle></CardHeader>
                <CardContent><p>{recommendations.cheeseRecommendations}</p></CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Accompaniment Suggestions</CardTitle></CardHeader>
                <CardContent><p>{recommendations.accompanimentSuggestions}</p></CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Serving Suggestions</CardTitle></CardHeader>
                <CardContent><p>{recommendations.servingSuggestions}</p></CardContent>
              </Card>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
