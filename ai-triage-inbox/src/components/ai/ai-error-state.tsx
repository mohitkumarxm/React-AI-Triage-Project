type Props = {
  onRetry: () => void;
};

export function AIErrorState({ onRetry }: Props) {
  return (
    <div className="rounded border border-red-500/30 bg-red-500/10 p-4">
      <p className="text-sm text-red-300">Failed to generate AI response.</p>

      <button
        onClick={onRetry}
        className="mt-3 rounded bg-red-500 px-3 py-2 text-sm font-medium"
      >
        Retry
      </button>
    </div>
  );
}
