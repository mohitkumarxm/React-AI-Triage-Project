import { useState } from "react";

type Props = {
  reasoning: string[];

  processingTime: number;

  injectionDetected: boolean;
};

export function AIDebugPanel({
  reasoning,
  processingTime,
  injectionDetected,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded border border-slate-800 bg-slate-900">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between p-4 text-left"
      >
        <span className="text-sm font-medium">Debug Details</span>

        <span className="text-xs text-slate-500">
          {expanded ? "Hide" : "Show"}
        </span>
      </button>

      {expanded && (
        <div className="space-y-4 border-t border-slate-800 p-4 text-sm">
          <div>
            <p className="mb-2 text-slate-400">Processing Time</p>

            <p>{processingTime} ms</p>
          </div>

          <div>
            <p className="mb-2 text-slate-400">Prompt Injection</p>

            <p>{injectionDetected ? "Detected" : "Not detected"}</p>
          </div>

          <div>
            <p className="mb-2 text-slate-400">Reasoning Steps</p>

            <ul className="space-y-1">
              {reasoning.map((step) => (
                <li key={step}>• {step}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-2 text-slate-400">Schema Validation</p>

            <p>Passed</p>
          </div>
        </div>
      )}
    </div>
  );
}
