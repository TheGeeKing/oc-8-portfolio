import React, { type ReactNode } from "react";

export const Card = ({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex h-full w-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-[#f4f1ea] ${className}`}
    >
      {children}
    </div>
  );
};
