import { useStreamingText } from "@/features/ai/use-streaming-text";

type Props = {
  text: string;
};

export function StreamingDraft({ text }: Props) {
  const { streamedText, isStreaming, stopStreaming } = useStreamingText({
    text,
    speed: 12,
  });

  return (
    <div>
      <textarea
        value={streamedText}
        readOnly
        className="min-h-[220px] w-full rounded border border-slate-700 bg-slate-900 p-3 text-sm"
      />

      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs text-slate-500">
          {isStreaming ? "Generating..." : "Completed"}
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
