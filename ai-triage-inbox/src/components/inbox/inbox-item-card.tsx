import type { InboxItem } from "@/types/inbox";

import {
  toggleSelectedId,
  setSelectedItemId,
} from "@/store/slices/inbox-slice";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

type Props = {
  item: InboxItem;
};

export function InboxItemCard({ item }: Props) {
  const dispatch = useAppDispatch();

  const selectedItemId = useAppSelector((state) => state.inbox.selectedItemId);

  const selectedIds = useAppSelector((state) => state.inbox.selectedIds);

  const isChecked = selectedIds.includes(item.id);

  const isActive = selectedItemId === item.id;

  return (
    <button
      type="button"
      onClick={() => dispatch(setSelectedItemId(item.id))}
      className={`w-full border-b border-slate-800 p-4 text-left transition hover:bg-slate-900 ${
        isActive ? "bg-slate-900" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-1 items-start gap-3">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => {
              e.stopPropagation();

              dispatch(toggleSelectedId(item.id));
            }}
            onClick={(e) => e.stopPropagation()}
            className="mt-1"
          />

          <div className="min-w-0 flex-1">
            <p className="truncate font-medium">{item.sender.name}</p>

            <h2 className="mt-1 truncate text-sm text-slate-300">
              {item.subject}
            </h2>
          </div>
        </div>

        <span className="text-xs text-slate-500">{item.priority}</span>
      </div>

      <p className="mt-2 line-clamp-2 text-sm text-slate-400">{item.body}</p>
    </button>
  );
}
