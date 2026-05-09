export type MessageStatus = "New" | "In Progress" | "Done";

export type MessagePriority = "P1" | "P2" | "P3";

export type MessageChannel = "email" | "chat";

export type Sender = {
  name: string;
  email: string;
};

export type InboxItem = {
  id: string;

  received_at: string;

  sender: Sender;

  subject: string;

  channel: MessageChannel;

  status: MessageStatus;

  priority: MessagePriority;

  body: string;

  tags: string[];
};
