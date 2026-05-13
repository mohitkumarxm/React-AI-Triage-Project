import type { MessagePriority, MessageStatus } from "@/types/inbox";

type Props = {
  status: MessageStatus;
  priority: MessagePriority;
};

export function DetailControls({ status, priority }: Props) {
  return (
    <div className="flex gap-4 border-b border-slate-800 p-6">
      <div>
        <label className="mb-2 block text-sm text-slate-400">Status</label>

        <select
          value={status}
          onChange={() => {}}
          className="rounded border border-slate-700 bg-slate-900 px-3 py-2"
        >
          <option value="New">New</option>

          <option value="In Progress">In Progress</option>

          <option value="Done">Done</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-400">Priority</label>

        <select
          value={priority}
          onChange={() => {}}
          className="rounded border border-slate-700 bg-slate-900 px-3 py-2"
        >
          <option value="P1">P1</option>

          <option value="P2">P2</option>

          <option value="P3">P3</option>
        </select>
      </div>
    </div>
  );
}
