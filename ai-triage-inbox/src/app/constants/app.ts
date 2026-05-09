import type { MessagePriority, MessageStatus } from "@/types/inbox";

import type { AICategory } from "@/types/ai";

export const MESSAGE_STATUSES: MessageStatus[] = ["New", "In Progress", "Done"];

export const MESSAGE_PRIORITIES: MessagePriority[] = ["P1", "P2", "P3"];

export const AI_CATEGORIES: AICategory[] = [
  "Billing",
  "Claims",
  "Endorsement",
  "General",
  "Urgent",
  "Spam",
];
