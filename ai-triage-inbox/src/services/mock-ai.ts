import type { InboxItem } from "@/types/inbox";

import type { AIResponse } from "@/types/ai";

import { seededBoolean, seededNumber } from "@/utils/deterministic";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function detectCategory(item: InboxItem): AIResponse["category"] {
  const content = (item.subject + " " + item.body).toLowerCase();

  if (
    content.includes("spam") ||
    content.includes("verify") ||
    content.includes("token")
  ) {
    return "Spam";
  }

  if (content.includes("urgent") || content.includes("immediately")) {
    return "Urgent";
  }

  if (content.includes("claim")) {
    return "Claims";
  }

  if (content.includes("endorsement") || content.includes("plate")) {
    return "Endorsement";
  }

  if (content.includes("premium") || content.includes("billing")) {
    return "Billing";
  }

  return "General";
}

function detectPriority(
  category: AIResponse["category"],
): AIResponse["priority"] {
  switch (category) {
    case "Urgent":
    case "Spam":
      return "P1";

    case "Billing":
    case "Claims":
      return "P2";

    default:
      return "P3";
  }
}

export async function generateAIResponse(
  item: InboxItem,
  signal?: AbortSignal,
): Promise<AIResponse> {
  const seed = item.id;

  const latency = seededNumber(seed, 400, 1400);

  await delay(latency);

  if (signal?.aborted) {
    throw new Error("Generation aborted");
  }

  const category = detectCategory(item);
  const shouldFail = category === "Spam" && seededBoolean(seed, 0.5);

  if (shouldFail) {
    throw new Error("AI generation failed.");
  }

  const priority = detectPriority(category);

  return {
    summary_bullets: [
      `Customer message regarding ${category.toLowerCase()}.`,
      `Priority assessed as ${priority}.`,
      `Requires follow-up from operations team.`,
    ],

    category,

    priority,

    suggested_action: "Review request and respond to customer.",

    draft_reply: `Hello ${item.sender.name},

Thank you for contacting us regarding your request.

Our team is currently reviewing the issue and will provide an update shortly.

Best regards,
Support Team`,

    confidence: seededNumber(seed, 72, 96) / 100,

    processing_time_ms: latency,

    prompt_injection_detected: category === "Spam",

    reasoning: [
      "Analyzed message content",
      "Classified message category",
      "Assigned operational priority",
      "Generated customer-safe reply",
    ],
  };
}
