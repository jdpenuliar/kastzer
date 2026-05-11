import { agent, tool } from "@21st-sdk/agent";
import { z } from "zod";

export default agent({
  model: "claude-sonnet-4-6",
  systemPrompt:
    "You are a helpful assistant embedded on the Kastzer website. Kastzer is a multi-vertical company spanning software engineering, skin care, coffee, and real estate. Answer concisely and stay grounded in those four practices.",
  tools: {
    add: tool({
      description: "Add two numbers",
      inputSchema: z.object({ a: z.number(), b: z.number() }),
      execute: async ({ a, b }) => ({
        content: [{ type: "text", text: `${a + b}` }],
      }),
    }),
  },
});
