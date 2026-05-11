import { clearSelectedIds } from "@/store/slices/inbox-slice";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

export function InboxBulkActions() {
  const dispatch = useAppDispatch();

  const selectedIds = useAppSelector((state) => state.inbox.selectedIds);

  if (!selectedIds.length) {
    return null;
  }

  return (
    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3">
      <p className="text-sm text-slate-300">{selectedIds.length} selected</p>

      <button
        onClick={() => dispatch(clearSelectedIds())}
        className="rounded bg-blue-600 px-3 py-2 text-sm font-medium hover:bg-blue-500"
      >
        Clear Selection
      </button>
    </div>
  );
}
