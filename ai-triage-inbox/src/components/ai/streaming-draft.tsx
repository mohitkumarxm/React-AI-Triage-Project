import { useEffect, useState } from "react";

import { useStreamingText } from "@/features/ai/use-streaming-text";

type Props = {
  text: string;
};

export function StreamingDraft({ text }: Props) {
  const { streamedText, isStreaming, stopStreaming } = useStreamingText({
    text,
    speed: 12,
  });

  const [localDraft, setLocalDraft] = useState("");

  const [hasUserEdited, setHasUserEdited] = useState(false);

  useEffect(() => {
    if (!hasUserEdited) {
      setLocalDraft(streamedText);
    }
  }, [streamedText, hasUserEdited]);

  return (
    <div>
      <textarea
        value={localDraft}
        onChange={(e) => {
          setHasUserEdited(true);

          setLocalDraft(e.target.value);
        }}
        className="min-h-[220px] w-full rounded border border-slate-700 bg-slate-900 p-3 text-sm outline-none focus:border-blue-500"
      />

      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs text-slate-500">
          {isStreaming
            ? "Generating..."
            : hasUserEdited
              ? "Edited locally"
              : "Completed"}
        </div>

        {isStreaming && (
          <button
            onClick={stopStreaming}
            className="rounded bg-slate-800 px-3 py-2 text-xs hover:bg-slate-700"
          >
            Stop
          </button>
        )}
      </div>
    </div>
  );
}
