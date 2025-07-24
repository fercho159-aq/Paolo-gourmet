// El flujo de la herramienta de maridaje de quesos con IA para recomendaciones personalizadas de tablas de quesos.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CheesePairingInputSchema = z.object({
  flavorPreferences: z
    .string()
    .describe('Las preferencias de sabor del usuario (por ejemplo, suave, fuerte, cremoso).'),
  texturePreferences: z
    .string()
    .describe('Las preferencias de textura del usuario (por ejemplo, blando, firme, desmenuzable).'),
  seasonalFruits: z
    .string()
    .optional()
    .describe('Las frutas de temporada disponibles, si las hay.'),
});
export type CheesePairingInput = z.infer<typeof CheesePairingInputSchema>;

const CheesePairingOutputSchema = z.object({
  cheeseRecommendations: z
    .string()
    .describe(
      'Una lista de quesos recomendados según las preferencias del usuario y las frutas de temporada.'
    ),
  accompanimentSuggestions: z
    .string()
    .describe('Sugerencias de acompañamientos para los quesos recomendados.'),
  servingSuggestions: z
    .string()
    .describe('Sugerencias para servir la tabla de quesos.'),
});
export type CheesePairingOutput = z.infer<typeof CheesePairingOutputSchema>;

export async function getCheesePairingRecommendations(
  input: CheesePairingInput
): Promise<CheesePairingOutput> {
  return cheesePairingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'cheesePairingPrompt',
  input: {schema: CheesePairingInputSchema},
  output: {schema: CheesePairingOutputSchema},
  prompt: `Eres un sumiller de quesos. Basado en las preferencias de sabor y textura del usuario, recomienda quesos y acompañamientos para una tabla de quesos.

Preferencias de sabor: {{{flavorPreferences}}}
Preferencias de textura: {{{texturePreferences}}}
Frutas de temporada: {{#if seasonalFruits}}{{{seasonalFruits}}}{{else}}Ninguna{{/if}}

Proporciona recomendaciones de quesos, sugerencias de acompañamientos y sugerencias para servir. Devuelve la respuesta en un formato fácil de usar.

Recomendaciones de Quesos: 
Sugerencias de Acompañamientos:
Sugerencias para Servir:`,
});

const cheesePairingFlow = ai.defineFlow(
  {
    name: 'cheesePairingFlow',
    inputSchema: CheesePairingInputSchema,
    outputSchema: CheesePairingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
