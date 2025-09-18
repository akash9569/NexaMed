// This is a server-side file.
'use server';

/**
 * @fileOverview Analyzes a health record document image to extract key information.
 *
 * - `analyzeHealthRecord` - Function to perform the analysis.
 * - `HealthRecordAnalysisInput` - Input type for the analysis function.
 * - `HealthRecordAnalysisOutput` - Return type for the analysis function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HealthRecordAnalysisInputSchema = z.object({
  documentDataUri: z
    .string()
    .describe(
      "An image of a health record document, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type HealthRecordAnalysisInput = z.infer<typeof HealthRecordAnalysisInputSchema>;

const HealthRecordAnalysisOutputSchema = z.object({
  summary: z.string().describe("A brief, high-level summary of the document's findings."),
  key_findings: z.array(
    z.object({
      test: z.string().describe("The name of the test or measurement (e.g., 'Hemoglobin A1c')."),
      value: z.string().describe("The measured value, including units (e.g., '6.5 %')."),
      interpretation: z.string().describe("A simple interpretation of the result (e.g., 'High', 'Normal', 'Low')."),
    })
  ).describe("A list of key data points extracted from the document."),
});
export type HealthRecordAnalysisOutput = z.infer<typeof HealthRecordAnalysisOutputSchema>;

export async function analyzeHealthRecord(input: HealthRecordAnalysisInput): Promise<HealthRecordAnalysisOutput> {
  return healthRecordAnalysisFlow(input);
}

const healthRecordAnalysisPrompt = ai.definePrompt({
  name: 'healthRecordAnalysisPrompt',
  input: {schema: HealthRecordAnalysisInputSchema},
  output: {schema: HealthRecordAnalysisOutputSchema},
  prompt: `You are an expert medical assistant specializing in interpreting health records for patients.
  
  Analyze the provided image of a medical document. Extract the key findings, such as test names, their values, and a simple interpretation of whether the value is normal, high, or low.
  
  Provide a concise summary of the overall document. Do not provide medical advice.

  Document: {{media url=documentDataUri}}
  `,
});

const healthRecordAnalysisFlow = ai.defineFlow(
  {
    name: 'healthRecordAnalysisFlow',
    inputSchema: HealthRecordAnalysisInputSchema,
    outputSchema: HealthRecordAnalysisOutputSchema,
  },
  async input => {
    const {output} = await healthRecordAnalysisPrompt(input);
    return output!;
  }
);
