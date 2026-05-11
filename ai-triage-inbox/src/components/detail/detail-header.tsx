import type { InboxItem } from "@/types/inbox";

type Props = {
  item: InboxItem;
};

export function DetailHeader({ item }: Props) {
  return (
    <div className="border-b border-slate-800 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{item.subject}</h1>

          <p className="mt-2 text-sm text-slate-400">
            {item.sender.name} • {item.sender.email}
          </p>
        </div>

        <div className="flex gap-2">
          <span className="rounded bg-red-500/10 px-2 py-1 text-xs text-red-300">
            {item.priority}
          </span>

          <span className="rounded bg-slate-800 px-2 py-1 text-xs">
            {item.status}
          </span>
        </div>
      </div>
    </div>
  );
}
