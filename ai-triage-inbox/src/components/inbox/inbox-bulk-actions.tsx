import toast from "react-hot-toast";

import {
  bulkUpdateStatus,
  clearSelectedIds,
  undoBulkUpdate,
} from "@/store/slices/inbox-slice";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

export function InboxBulkActions() {
  const dispatch = useAppDispatch();

  const selectedIds = useAppSelector((state) => state.inbox.selectedIds);

  if (selectedIds.length === 0) {
    return null;
  }

  function showUndoToast(message: string) {
    toast.success(message, {
      duration: 4000,
    });

    toast(
      (t) => (
        <div className="flex items-center gap-3">
          <span>Undo action?</span>

          <button
            onClick={() => {
              dispatch(undoBulkUpdate());

              toast.dismiss(t.id);
            }}
            className="rounded bg-slate-700 px-2 py-1 text-xs hover:bg-slate-600"
          >
            Undo
          </button>
        </div>
      ),
      {
        duration: 4000,
      },
    );
  }

  return (
    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 p-4">
      <p className="text-sm text-slate-400">{selectedIds.length} selected</p>

      <div className="flex gap-2">
        <button
          onClick={() => {
            dispatch(bulkUpdateStatus("In Progress"));

            showUndoToast("Marked as In Progress");
          }}
          className="rounded bg-blue-600 px-3 py-2 text-sm hover:bg-blue-500"
        >
          In Progress
        </button>

        <button
          onClick={() => {
            dispatch(bulkUpdateStatus("Done"));

            showUndoToast("Marked as Done");
          }}
          className="rounded bg-green-600 px-3 py-2 text-sm hover:bg-green-500"
        >
          Mark Done
        </button>

        <button
          onClick={() => {
            dispatch(clearSelectedIds());
          }}
          className="rounded bg-slate-700 px-3 py-2 text-sm hover:bg-slate-600"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
