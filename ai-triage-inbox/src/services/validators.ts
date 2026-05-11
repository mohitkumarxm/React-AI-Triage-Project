import { z } from "zod";

export const aiResponseSchema = z.object({
  summary_bullets: z.array(z.string()).min(1).max(4),

  category: z.enum([
    "Billing",
    "Claims",
    "Endorsement",
    "General",
    "Urgent",
    "Spam",
  ]),

  priority: z.enum(["P1", "P2", "P3"]),

  suggested_action: z.string(),

  draft_reply: z.string(),

  confidence: z.number(),
});

export type ValidAIResponse = z.infer<typeof aiResponseSchema>;
