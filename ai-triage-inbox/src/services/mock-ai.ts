import type { InboxItem } from "@/types/inbox";

import type { AIResponse } from "@/types/ai";

const MIN_DELAY = 800;
const MAX_DELAY = 2200;

const FAILURE_RATE = 0.12;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomDelay() {
  return Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY;
}

function shouldFail() {
  return Math.random() < FAILURE_RATE;
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
  await delay(randomDelay());

  if (signal?.aborted) {
    throw new Error("Generation aborted");
  }

  if (shouldFail()) {
    throw new Error("AI generation failed.");
  }

  const category = detectCategory(item);

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

    confidence: 0.87,

    processing_time_ms: Math.floor(Math.random() * 1200) + 400,

    prompt_injection_detected: category === "Spam",

    reasoning: [
      "Analyzed message content",
      "Classified message category",
      "Assigned operational priority",
      "Generated customer-safe reply",
    ],
  };
}
