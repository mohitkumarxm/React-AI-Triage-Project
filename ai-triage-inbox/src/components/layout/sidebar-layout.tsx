import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function SidebarLayout({ children }: Props) {
  return <div className="flex h-full flex-col overflow-hidden">{children}</div>;
}
