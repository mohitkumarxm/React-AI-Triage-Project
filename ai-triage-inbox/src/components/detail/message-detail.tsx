import type { InboxItem } from "@/types/inbox";

import { DetailHeader } from "./detail-header";
import { DetailControls } from "./detail-controls";
import { DetailNotes } from "./detail-notes";

import { AIAssistPanel } from "@/components/ai/ai-assist-panel";

type Props = {
  item: InboxItem;
};

export function MessageDetail({ item }: Props) {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <DetailHeader item={item} />

      <DetailControls status={item.status} priority={item.priority} />

      <div className="flex flex-1 overflow-hidden">
        {/* Message Body */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="mb-4 text-lg font-semibold">Customer Message</h2>

            <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-slate-300">
              {item.body}
            </pre>
          </div>

          <DetailNotes />
        </div>

        {/* AI Panel */}
        <div className="w-[420px] shrink-0 overflow-y-auto border-l border-slate-800 bg-slate-950">
          <AIAssistPanel item={item} />
        </div>
      </div>
    </div>
  );
}
