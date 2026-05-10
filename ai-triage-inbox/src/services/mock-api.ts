import { inboxItems } from "@/data/inbox-data";

const MIN_DELAY = 200;
const MAX_DELAY = 1200;

const FAILURE_RATE = 0.12;

function randomDelay() {
  return (
    Math.random() * (MAX_DELAY - MIN_DELAY) +
    MIN_DELAY
  );
}

function shouldFail() {
  return Math.random() < FAILURE_RATE;
}

function delay(ms: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

export async function fetchInboxItems() {
  await delay(randomDelay());

  if (shouldFail()) {
    throw new Error(
      "Failed to fetch inbox items."
    );
  }

  return inboxItems;
}