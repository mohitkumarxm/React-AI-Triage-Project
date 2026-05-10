import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function DetailLayout({ children }: Props) {
  return <div className="h-full overflow-y-auto">{children}</div>;
}
