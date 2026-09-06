import { type ReactNode } from "react";

export const SidebarCard = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <section className="border-white/10 border-t pt-5">
      <h2 className="font-semibold text-lg tracking-[-0.02em]">{title}</h2>
      {children}
    </section>
  );
};
