export function DetailPlaceholder() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-10 text-center">
      <div className="mb-4 text-6xl">✉️</div>

      <h2 className="text-2xl font-semibold">Select a message</h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
        Choose an inbox item to view customer details, AI triage
        recommendations, suggested actions, and generated reply drafts.
      </p>

      <div className="mt-8 rounded border border-slate-800 bg-slate-900 p-4 text-left text-sm text-slate-400">
        <p className="mb-2 font-medium text-slate-300">Keyboard Shortcuts</p>

        <ul className="space-y-1">
          <li>
            <kbd>j</kbd> Next message
          </li>

          <li>
            <kbd>k</kbd> Previous message
          </li>

          <li>
            <kbd>/</kbd> Focus search
          </li>

          <li>
            <kbd>Esc</kbd> Clear selection
          </li>
        </ul>
      </div>
    </div>
  );
}
