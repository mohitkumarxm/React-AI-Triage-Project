export function AILoadingState() {
  return (
    <div className="space-y-5 animate-pulse">
      <div>
        <div className="mb-2 h-4 w-32 rounded bg-slate-800" />

        <div className="h-2 rounded bg-slate-800" />
      </div>

      <div className="space-y-2">
        <div className="h-4 rounded bg-slate-800" />

        <div className="h-4 w-5/6 rounded bg-slate-800" />

        <div className="h-4 w-4/6 rounded bg-slate-800" />
      </div>

      <div className="h-[220px] rounded bg-slate-800" />

      <div className="h-40 rounded bg-slate-800" />
    </div>
  );
}
