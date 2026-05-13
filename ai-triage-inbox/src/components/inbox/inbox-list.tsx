import type { InboxItem } from "@/types/inbox";

import { InboxItemCard } from "./inbox-item-card";

type Props = {
  items: InboxItem[];
};

export function InboxList({ items }: Props) {
  if (items.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-10 text-center">
        <div className="mb-4 text-5xl">📭</div>

        <h2 className="text-lg font-semibold">No messages found</h2>

        <p className="mt-2 max-w-sm text-sm text-slate-400">
          Try adjusting your search or filters to find matching inbox items.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-y-auto">
      {items.map((item) => (
        <InboxItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
