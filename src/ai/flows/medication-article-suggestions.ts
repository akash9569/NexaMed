// This is a server-side file.
'use server';

/**
 * @fileOverview Provides related articles based on the medication a user is searching for.
 *
 * - `getArticleSuggestions` - Function to retrieve related articles.
 * - `ArticleSuggestionInput` - Input type for the `getArticleSuggestions` function.
 * - `ArticleSuggestionOutput` - Return type for the `getArticleSuggestions` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ArticleSuggestionInputSchema = z.object({
  medicationName: z.string().describe('The name of the medication being searched for.'),
});
export type ArticleSuggestionInput = z.infer<typeof ArticleSuggestionInputSchema>;

const ArticleSuggestionOutputSchema = z.object({
  articles: z.array(
    z.object({
      title: z.string().describe('The title of the article.'),
      url: z.string().url().describe('The URL of the article.'),
      snippet: z.string().describe('A short summary of the article.'),
    })
  ).describe('A list of related articles.'),
});
export type ArticleSuggestionOutput = z.infer<typeof ArticleSuggestionOutputSchema>;

export async function getArticleSuggestions(input: ArticleSuggestionInput): Promise<ArticleSuggestionOutput> {
  return medicationArticleSuggestionsFlow(input);
}

const medicationArticleSuggestionsPrompt = ai.definePrompt({
  name: 'medicationArticleSuggestionsPrompt',
  input: {schema: ArticleSuggestionInputSchema},
  output: {schema: ArticleSuggestionOutputSchema},
  prompt: `You are a helpful assistant that suggests related articles based on a given medication name.

  Provide a list of articles that would be helpful to a user searching for information about the medication.

  Medication Name: {{{medicationName}}}
  `,
});

const medicationArticleSuggestionsFlow = ai.defineFlow(
  {
    name: 'medicationArticleSuggestionsFlow',
    inputSchema: ArticleSuggestionInputSchema,
    outputSchema: ArticleSuggestionOutputSchema,
  },
  async input => {
    const {output} = await medicationArticleSuggestionsPrompt(input);
    return output!;
  }
);
