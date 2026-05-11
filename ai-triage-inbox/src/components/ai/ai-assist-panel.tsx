import type { InboxItem } from "@/types/inbox";

import { useAIQuery } from "@/features/ai/use-ai-query";

import { AILoadingState } from "./ai-loading-state";
import { AIErrorState } from "./ai-error-state";
import { AISummary } from "./ai-summary";
import { StreamingDraft } from "./streaming-draft";
import { AIConfidence } from "./ai-confidence";
import { AIDebugPanel } from "./ai-debug-panel";

type Props = {
  item: InboxItem;
};

export function AIAssistPanel({ item }: Props) {
  const { data, isLoading, isError, refetch } = useAIQuery(item);

  return (
    <div className="h-full p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">AI Assist</h2>

        <p className="mt-1 text-sm text-slate-400">
          AI-generated triage suggestions
        </p>
      </div>

      {/* Loading */}
      {isLoading && <AILoadingState />}

      {/* Error */}
      {isError && <AIErrorState onRetry={() => refetch()} />}

      {/* Success */}
      {data && (
        <div className="space-y-6">
          {/* Confidence */}
          <AIConfidence value={data.confidence} />

          {/* Summary */}
          <section>
            <h3 className="mb-3 text-sm font-medium text-slate-400">Summary</h3>

            <AISummary bullets={data.summary_bullets} />
          </section>

          {/* Category */}
          <section>
            <h3 className="mb-2 text-sm font-medium text-slate-400">
              Category
            </h3>

            <p className="text-sm">{data.category}</p>
          </section>

          {/* Priority */}
          <section>
            <h3 className="mb-2 text-sm font-medium text-slate-400">
              Priority
            </h3>

            <p className="text-sm">{data.priority}</p>
          </section>

          {/* Injection Detection */}
          {data.prompt_injection_detected && (
            <div className="rounded border border-yellow-500/30 bg-yellow-500/10 p-3 text-sm text-yellow-300">
              Potential prompt injection detected.
            </div>
          )}

          {/* Suggested Action */}
          <section>
            <h3 className="mb-2 text-sm font-medium text-slate-400">
              Suggested Action
            </h3>

            <p className="text-sm leading-6 text-slate-300">
              {data.suggested_action}
            </p>
          </section>

          {/* Draft Reply */}
          <section>
            <h3 className="mb-3 text-sm font-medium text-slate-400">
              Draft Reply
            </h3>

            <StreamingDraft text={data.draft_reply} />
          </section>

          {/* Debug Panel */}
          <AIDebugPanel
            reasoning={data.reasoning}
            processingTime={data.processing_time_ms}
            injectionDetected={data.prompt_injection_detected}
          />
        </div>
      )}
    </div>
  );
}
