type Props = {
  sidebar: React.ReactNode;

  detail: React.ReactNode;
};

export function AppLayout({ sidebar, detail }: Props) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-950 text-slate-100 lg:flex-row">
      <aside className="h-[45vh] border-b border-slate-800 lg:h-full lg:w-[420px] lg:shrink-0 lg:border-b-0 lg:border-r">
        {sidebar}
      </aside>

      <main className="flex-1 overflow-hidden">{detail}</main>
    </div>
  );
}
