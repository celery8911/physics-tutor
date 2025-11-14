import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const physicsProblemTool = createTool({
  id: 'physics-problem-solver',
  description: 'Analyzes and solves high school physics problems from text or image input',
  inputSchema: z.object({
    problemText: z.string().optional().describe('The physics problem in text format'),
    imageUrl: z.string().optional().describe('URL of the image containing the physics problem'),
    imageBase64: z.string().optional().describe('Base64 encoded image of the physics problem'),
  }),
  outputSchema: z.object({
    answer: z.string().describe('The final answer to the physics problem'),
    concepts: z.array(z.string()).describe('Key physics concepts tested in this problem'),
    explanation: z.string().describe('Detailed step-by-step explanation of the solution'),
  }),
  execute: async ({ context: { problemText, imageUrl, imageBase64 } }) => {
    // This tool serves as a structured interface for the agent
    // The actual problem-solving is done by the LLM model (Gemini 2.0 Flash)
    // which has vision capabilities to process both text and images

    let problemDescription = '';

    if (problemText) {
      problemDescription += `Problem: ${problemText}\n`;
    }

    if (imageUrl) {
      problemDescription += `Image URL: ${imageUrl}\n`;
    }

    if (imageBase64) {
      problemDescription += `Image provided (base64 encoded)\n`;
    }

    // Return a placeholder that indicates the problem has been received
    // The actual solving happens through the agent's LLM
    return {
      answer: 'Processing physics problem...',
      concepts: ['Analysis in progress'],
      explanation: problemDescription || 'Please provide either problem text or an image.',
    };
  },
});
