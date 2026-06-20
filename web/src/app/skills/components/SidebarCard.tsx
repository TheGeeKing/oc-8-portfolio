import { type ReactNode } from "react";

export const SidebarCard = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <section className="border-t border-white/10 pt-5">
      <h2 className="text-lg font-semibold tracking-[-0.02em]">{title}</h2>
      {children}
    </section>
  );
};
