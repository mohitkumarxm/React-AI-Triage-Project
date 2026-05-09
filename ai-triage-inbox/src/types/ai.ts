export type AICategory =
  | "Billing"
  | "Claims"
  | "Endorsement"
  | "General"
  | "Urgent"
  | "Spam";

export type AIResponse = {
  summary_bullets: string[];

  category: AICategory;

  priority: "P1" | "P2" | "P3";

  suggested_action: string;

  draft_reply: string;

  confidence: number;
};

export type AIState = "idle" | "loading" | "success" | "error";
