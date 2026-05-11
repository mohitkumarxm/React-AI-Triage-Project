type Props = {
  value: number;
};

export function AIConfidence({ value }: Props) {
  const percentage = Math.round(value * 100);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-slate-400">Confidence</span>

        <span className="text-sm font-medium">{percentage}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded bg-slate-800">
        <div
          className="h-full bg-blue-500 transition-all"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}
