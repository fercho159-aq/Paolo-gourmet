'use server';

import { getCheesePairingRecommendations, type CheesePairingInput, type CheesePairingOutput } from '@/ai/flows/cheese-pairing-tool';
import { z } from 'zod';

const CheesePairingInputSchema = z.object({
  flavorPreferences: z.string(),
  texturePreferences: z.string(),
  seasonalFruits: z.string().optional(),
});

export async function getPairingAction(input: CheesePairingInput): Promise<{ data: CheesePairingOutput | null, error: string | null }> {
  const parsedInput = CheesePairingInputSchema.safeParse(input);

  if (!parsedInput.success) {
    return { data: null, error: 'Invalid input.' };
  }

  try {
    const recommendations = await getCheesePairingRecommendations(parsedInput.data);
    return { data: recommendations, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error: 'Failed to get recommendations. Please try again.' };
  }
}
