// The AI cheese pairing tool flow for personalized cheese board recommendations.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CheesePairingInputSchema = z.object({
  flavorPreferences: z
    .string()
    .describe('The user\'s flavor preferences (e.g., mild, sharp, creamy).'),
  texturePreferences: z
    .string()
    .describe('The user\'s texture preferences (e.g., soft, firm, crumbly).'),
  seasonalFruits: z
    .string()
    .optional()
    .describe('The seasonal fruits available, if any.'),
});
export type CheesePairingInput = z.infer<typeof CheesePairingInputSchema>;

const CheesePairingOutputSchema = z.object({
  cheeseRecommendations: z
    .string()
    .describe(
      'A list of recommended cheeses based on the user\'s preferences and seasonal fruits.'
    ),
  accompanimentSuggestions: z
    .string()
    .describe('Suggested accompaniments for the recommended cheeses.'),
  servingSuggestions: z
    .string()
    .describe('Serving suggestions for the cheese board.'),
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
  prompt: `You are a cheese sommelier. Based on the user's flavor and texture preferences, recommend cheeses and accompaniments for a cheese board.

Flavor Preferences: {{{flavorPreferences}}}
Texture Preferences: {{{texturePreferences}}}
Seasonal Fruits: {{#if seasonalFruits}}{{{seasonalFruits}}}{{else}}None{{/if}}

Provide cheese recommendations, accompaniment suggestions, and serving suggestions. Return the response in a user-friendly format.

Cheese Recommendations: 
Accompaniment Suggestions:
Serving Suggestions:`,
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
