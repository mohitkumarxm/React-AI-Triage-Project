type Props = {
  children: React.ReactNode;
};

export function DetailLayout({ children }: Props) {
  return <div className="h-full overflow-hidden bg-slate-950">{children}</div>;
}
