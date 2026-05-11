export function DetailNotes() {
  return (
    <div className="mt-8">
      <label className="mb-2 block text-sm text-slate-400">
        Internal Notes
      </label>

      <textarea
        placeholder="Add internal notes..."
        className="min-h-[140px] w-full rounded border border-slate-700 bg-slate-900 p-3 outline-none transition focus:border-blue-500"
      />
    </div>
  );
}
