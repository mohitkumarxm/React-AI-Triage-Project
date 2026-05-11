type Props = {
  bullets: string[];
};

export function AISummary({ bullets }: Props) {
  return (
    <ul className="space-y-2">
      {bullets.map((bullet) => (
        <li key={bullet} className="flex gap-2 text-sm text-slate-300">
          <span>•</span>

          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  );
}
