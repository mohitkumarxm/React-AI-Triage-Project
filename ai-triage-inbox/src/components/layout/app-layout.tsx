import type { ReactNode } from "react";

type Props = {
  sidebar: ReactNode;
  detail: ReactNode;
};

export function AppLayout({ sidebar, detail }: Props) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-950 text-slate-100">
      <aside className="w-[420px] shrink-0 border-r border-slate-800">
        {sidebar}
      </aside>

      <main className="flex-1">{detail}</main>
    </div>
  );
}
