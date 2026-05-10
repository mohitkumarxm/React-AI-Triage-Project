import type { InboxItem } from "@/types/inbox";

type Props = {
  item: InboxItem;
};

export function InboxItemCard({ item }: Props) {
  return (
    <div className="cursor-pointer border-b border-slate-800 p-4 transition hover:bg-slate-900">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium">{item.sender.name}</p>

          <h2 className="mt-1 truncate text-sm text-slate-300">
            {item.subject}
          </h2>
        </div>

        <span className="text-xs text-slate-500">{item.priority}</span>
      </div>

      <p className="mt-2 line-clamp-2 text-sm text-slate-400">{item.body}</p>
    </div>
  );
}
