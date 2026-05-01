import { type ReactNode } from "react";

export const SidebarCard = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.05] p-4">
      <h2 className="text-lg font-bold">{title}</h2>
      {children}
    </section>
  );
};
