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
          className="rounded border border-slate-700 bg-slate-900 px-3 py-2"
        >
          <option>New</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-400">Priority</label>

        <select
          value={priority}
          className="rounded border border-slate-700 bg-slate-900 px-3 py-2"
        >
          <option>P1</option>
          <option>P2</option>
          <option>P3</option>
        </select>
      </div>
    </div>
  );
}
