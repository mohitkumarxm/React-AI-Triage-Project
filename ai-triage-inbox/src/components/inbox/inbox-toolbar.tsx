export function InboxToolbar() {
  return (
    <div className="border-b border-slate-800 bg-slate-950 p-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">AI Triage Inbox</h1>

          <p className="mt-1 text-sm text-slate-400">
            Operational inbox management with AI assistance
          </p>
        </div>

        <div className="rounded bg-slate-900 px-3 py-1 text-xs text-slate-400">
          React + AI
        </div>
      </div>
    </div>
  );
}
