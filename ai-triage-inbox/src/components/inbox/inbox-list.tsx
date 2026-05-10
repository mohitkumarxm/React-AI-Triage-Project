import type { InboxItem } from "@/types/inbox";

import { InboxItemCard } from "./inbox-item-card";
import { InboxEmptyState } from "./inbox-empty-state";

type Props = {
  items: InboxItem[];
};

export function InboxList({ items }: Props) {
  if (!items.length) {
    return <InboxEmptyState />;
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="divide-y divide-slate-800">
        {items.map((item) => (
          <InboxItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
