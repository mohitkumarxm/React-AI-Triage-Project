type Props = {
  children: React.ReactNode;
};

export function SidebarLayout({ children }: Props) {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-slate-950">
      {children}
    </div>
  );
}
